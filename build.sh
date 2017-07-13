#!/usr/bin/env bash

echo 'Copying files into testbed...';
npm patch
cp index.js ../bg-color-test/node_modules/background-color-changer
cp package.json ../bg-color-test/node_modules/background-color-changer
