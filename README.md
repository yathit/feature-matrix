feature-matrix
==============

YDN-DB test result as feature matrix app, a demo program for Google Cloud Storage (GCS) service backend with angularjs.

This web application has two parts. The first part is data collection. It is essentially
running a qunit test and result are put to GCS service. The GCS bucket
[`ydn-test-report-2`](http://ydn-test-report-2.storage.googleapis.com/)
accept anonymous write request from selected origins.

The second part is angular js app, which query unit test results and display the results.

An angular service for GCS backend
----------------------------------

Database service is created simply by creating a singleton connection.

    angular.module('myApp.services', [])
         .factory('database', function() {
           var schema = {};
           return new ydn.db.Storage('feature-matrix', schema);
         });

To enable synchornization between client database and backend server, `Sync`
attribute is added into the database store schema by specifing backend service name.
Basic format will be 'rest', representing RESTful backend server. Here
Google Cloud Storage backend service is used by specifying `gcs` format,
which is essentially equals to `s3` format. The
only require attribute is `bucket` for Google Cloud Storage bucket name.
When database CRUD operation are performed, corresponding HTTP methods are
conditional request are made to the server.

    var schema = {
      stores: [{
          name: 'ydn-db',
          Sync: {
            format: 'gcs', // refer to Google Cloud Storage backend
            immutable: true,
            Options: {
              bucket: 'ydn-test-report-2' // GCS bucket name
            }
          }
      }]
    };

### Efficient backend design ###

One thing we concern here is cost. Unlike traditional backend server, which supply
necessary HTML content, client side rendering using REST service is not efficient.
Note that one REST GET request represent one result.
It is very important to query only necessary data just enough to display the first view.

We use client side database to cache the data. Whenever a data is cached, it must be
validated before used. In REST service, read request cache validation is made by
either with [If-None-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26) etag
or [If-Unmodified-Since](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.28) updated date.
For write request, [If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24) or
[If-Modified-Since](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.25)
are used to ensure updated record was not modified by others. In this app, we only use read request.
We can further reduce the cost in this particular case, since the data is immutable. Once a test is run,
the result is written and it cannot be changed. Immutable database does not require cache invalidation.
Once we have the data, it can be cached permanently. In YDN-DB, it is done by setting
`immutable` attribute to `true`.

### REST URI design for querying ###

In general, we will expect several thousands of results in the bucket. It will be huge
cost if we were to cached all of them into client. Worse, most user spend just a brief
period. A quick approach will be to display the last, say 25, results. In S3 like REST service,
the only query available is ascending order of URI (or primary key). And hence
we have to design URI such that last result will come first. This can easily be
achieved using negative timestamp from some future epoch.

But the last results set does not meet user expectation of feature matrix.
Basically user want to see result from each platform/browser. Repeated result
of particular browser is not helpful at the first glance. To query unique
platform/browser, we can design URI as platform/browser/timestamp. For example

    http://http://ydn-test-report-2.storage.googleapis.com/MacIntel/Safari/251988549193682

Unlike database query, REST URI query are not straight forward. First, we send GET
request to the bucket with [`"delimiter" = /`](https://developers.google.com/storage/docs/reference-headers#delimiter),
listing all platform available in the bucket.

    GET http://http://ydn-test-report-2.storage.googleapis.com/?delimiter=/

Then we query again with platform as [prefix](https://developers.google.com/storage/docs/reference-headers#prefix),
listing all browsers in the platform.

    GET http://http://ydn-test-report-2.storage.googleapis.com/?delimiter=/&prefix=MacIntel

Then we query again one last result in platform/browser using [max-keys](https://developers.google.com/storage/docs/reference-headers#maxkeys)

    GET http://http://ydn-test-report-2.storage.googleapis.com/?prefix=MacIntel/Safari/&max-key=1

This query is workable, but not an ideal. Fortunately, GCS has (JSON API)[https://developers.google.com/storage/docs/json_api/], which offer
alternative solutions. The two ingredients of interest in the JSON API are batch query
and meta-data in object header listing. HEAD request cost 1/1000 of GET request minus network cost.
Essentially HEAD request is very cheap. This is utilized by keeping platform, browser metadata
in [custom header](https://developers.google.com/storage/docs/reference-headers#xgoogmeta).
The metadata are indexed in the client side database. The app analyze meta data before sending GET request,
so that only necessary requests are made.

Additionally, to synchronize, client and server metadata efficiently, we can make URI as just timestamp,
so that we can query only after timestamp after in the client database. This meta data is
keep in separate object store as follow:

    var schema = {
      stores: [{
        name: 'ydn-db-meta',
        keyPath: 'name',
        // index meta data in the header
        indexes: [
          {
            // x-goog-meta-platform
            keyPath: 'platform'
          }, {
            // x-goog-meta-browser
            keyPath: 'browser'
          }, {
            // x-goog-meta-version
            keyPath: 'version'
          }, {
            // required index for meta store.
            keyPath: 'etag'
          }, {
            // required index for meta store.
            keyPath: 'updated'
          },
          {
            // use compound index, so that we can query unique quickly
            name: 'platform, browser',
            keyPath: ['metadata.platform', 'metadata.browser']
          },
          {
            // use compound index, so that we can query unique quickly
            name: 'platform, browser, version',
            keyPath: ['metadata.platform', 'metadata.browser', 'metadata.version']
          }],
        Sync: {
          // 'gcs-meta' sync option format store only meta data of the
          // object. The key must be generate in descending order.
          format: 'gcs-meta',
          // prefetch only 'meta', other possible is 'full'
          // 'meta' is default for 'gcs-meta' sync format.
          prefetch: 'meta',
          // Prefetch refractory period interval in milliseconds.
          // Default is 5000.
          prefetchRefractoryPeriod: 60 * 1000,
          Options: {
            bucket: 'ydn-test-report-2',
            // path prefix for this store.
            prefix: 'ydn-db/'
          }
        }
      }]
    };

An angular controller for database query
----------------------------------------

The job of a controller is preparing data to display in view. This involve
querying to the database and formatting model data to suitable for rendering
them in views.

See [The demo app](http://dev.yathit.com/demo/feature-matrix/index.html)
