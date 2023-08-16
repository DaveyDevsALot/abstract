#!/usr/bin/env bash
BRANCH_NAME=$(git branch | grep \* | cut -d ' ' -f2) && export BRANCH_NAME && \
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build --build-arg CURRENT_BRANCH=$BRANCH_NAME && \
docker-compose up