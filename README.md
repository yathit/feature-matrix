feature-matrix
==============


The purpose of this web application is to collect user unit test result and do simple exploratory analysis and display them into tables. This app use AngularJs single page web application framework. App data is persisted in Google Cloud Storage (GCS) service.

is web application has two parts. The first part is data collection. It is essentially running a qunit test and result are put to GCS service. The second part is angular js app, which query and fetch unit test results from GCS and display the results.

See [blog post](http://dev.yathit.com/tutorial/angular-js-gcs-backend.html) for more detail.

Setup
-----

Create account GCS and setup [gsutil](https://developers.google.com/storage/docs/gsutil). Go to `scripts/gcs` folder. Change permission and host name in cors.xml. Run `setup.sh` to create and setup bucket.

Change Google client api key in `app.js`.

The app
-------

[The demo app](http://dev.yathit.com/demo/feature-matrix/index.html)
