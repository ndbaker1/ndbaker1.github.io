#!/bin/bash

if [ -z "$1$2$3" ] ; then
    echo "Usage:"
    echo -e "$0 FILE LANGUAGE SCHEMA_NAME" 
else
    yq -j eval $1 | npx quicktype --just-types --top-level $3 --lang $2
fi