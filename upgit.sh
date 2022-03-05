#!/bin/bash

git a .
echo "Enter commit message:"
read cmt_msg
git ct -m "$cmt_msg"
brnch=$(git br)
git ps origin brnch
