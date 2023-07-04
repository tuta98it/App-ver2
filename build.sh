#!/bin/bash

npm i --force
ionic build
ionic cap sync
cd ios/App
fastlane beta
cd ../../android
fastlane beta
