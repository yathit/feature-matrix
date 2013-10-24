#!/bin/sh
# setup test report data bucket

TBK="ydn-test-report-2"

gsutil mb gs://$TBK

gsutil acl set acl.xml gs://$TBK
gsutil defacl set default-acl.xml gs://$TBK
gsutil cors set cors.xml  gs://$TBK
