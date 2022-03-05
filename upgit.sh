#!/bin/bash

git a .
echo "Enter commit message:"
read cmt_msg
git ct -m "$cmt_msg"
git ps origin master
