#!/bin/bash

set -ex

function cleanUp {
    echo ' failed, exit code was :' $?
    docker-compose -f docker-compose-dev.yml down --remove-orphans
}

trap cleanUp ERR

docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up
