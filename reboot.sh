#!/usr/bin/env bash

set -eu

docker build --tag reboot .

docker run --rm -e FRITZBOX_IP=$FRITZBOX_IP -e FRITZBOX_PASSWORD=$FRITZBOX_PASSWORD reboot "$@"
