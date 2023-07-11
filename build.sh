#!/bin/bash

show_help()
{
echo "
        Usage:
        -m mode        mode is beta or deploy
        -h             Show help
"
}

while getopts m: flag
do
    case "${flag}" in
        m)
            mode=${OPTARG};;
        h)
            show_help
            exit
            ;;
        *)
            show_help
            exit
            ;;
    esac
done

echo "Mode: $mode";

case $mode in
    beta)
        npm i --force
        ionic build
        ionic cap sync
        cd ios/App
        fastlane beta

        cd ../../android
        fastlane beta
        ;;
    deploy)
        npm i --force
        ionic build
        ionic cap sync
        cd ios/App
        fastlane deploy

        cd ../../android
        fastlane deploy
        ;;
    *)
        show_help
        ;;
esac
