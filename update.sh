#!/bin/bash

rsync \
  --verbose \
  --rsh=ssh \
  --progress \
  --archive \
  --recursive \
  ./src/ "$VPS_USER_SIMPLECLOUD@$VPS_IP_SIMPLECLOUD:/var/www/design.andreyponomarev.ru/html/"
