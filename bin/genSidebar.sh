#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#============ get the file name ===========
Folder_A="../docs"
for file_a in ${Folder_A}/*
do
  temp_file= `basename $file_at`
  echo $temp_file
done