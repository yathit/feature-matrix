#!/bin/sh
# setup test report data bucket

TBK="ydn-test-report-3"

gsutil mb gs://$TBK

gsutil acl set acl.json gs://$TBK
gsutil defacl set defacl.json gs://$TBK
gsutil cors set cors.json  gs://$TBK
