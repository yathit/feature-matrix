feature-matrix
==============

YDN-DB test result as feature matrix app, a demo program for Google Cloud Storage (GCS) service backend with angularjs.

This web application has two parts. The first part is data collection. It is essentially
running a qunit test and result are put to GCS service. The GCS bucket
[`ydn-test-report-2`](http://ydn-test-report-2.storage.googleapis.com/)
accept anonymous write request from selected origins.

The second part is angular js app, which query unit test results and display the results.

An angular service, for GCS backend
-----------------------------------

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
            // 'gcs' refer to Google Cloud Storage backend
            format: 'gcs',
            // immutable database
            immutable: true,
            Options: {
              // GCS bucket name
              bucket: 'ydn-test-report-2'
            }
          }
      }]
    };

### Efficient backend design ###

One thing we concern here is cost. Unlike traditional backend server, which supply
necessary HTML content, client side rendering using REST service is not efficient.
Note that one REST GET request represent one result. In general, we will expect several thousands of
result in the bucket. It is very important to query only necessary data just enough to display the first view.

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

Displaying the last results, say 25, make sense. In S3 like REST service, the only
query available is ascending order of URI (or primary key). For query by last created data

But these last 25 results may not cover
result from all browsers. On the first view, we want to show results from
unique set of all browsers. On the other hand, 25 results may be too much, if there are only few unique browsers
test results are available.

Since we are not using backend server to generate view,
but instead use raw database, a lot of HTTP GET request are necessary, just to generate one view.


We can query the last 25 results

See [The demo app](http://dev.yathit.com/demo/feature-matrix/index.html)
