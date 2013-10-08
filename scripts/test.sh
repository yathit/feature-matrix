#!/bin/bash


echo ""
echo "Starting Karma Server (http://karma-runner.github.io)"
echo "-------------------------------------------------------------------"


karma start ../config/karma.conf.js $*
