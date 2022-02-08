#!/bin/bash

docker build -t number_encoder -f Dockerfile .

docker run --rm -it \
       --mount type=bind,source="$(pwd)",target=/app \
       -p 9229:9229 \
       number_encoder
