#!/bin/bash

npx jazzer ./FuzzTarget.cjs

test_case_dir="__test__"

testTarget="$1"
copyTestTarget="$1.copy"

cat $testTarget >> $copyTestTarget

for test_case in "$test_case_dir"/*; do
  if [ -f "$test_case" ]; then
    echo $test_case

    node InjectAflData.cjs $test_case $testTarget $copyTestTarget

    npm run test Title --watch
  fi
done

rm $testTarget

cat $copyTestTarget >> $testTarget

rm $copyTestTarget

rm -r $test_case_dir