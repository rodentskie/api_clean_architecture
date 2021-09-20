#!/bin/bash

check=`ls -1 *.txt 2>/dev/null | wc -l`

if [ $check != 0 ]
then
    echo true
else
    echo false
fi