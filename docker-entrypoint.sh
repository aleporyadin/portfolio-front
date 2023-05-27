#!/bin/bash
set -e

if [[ $REACT_APP_API_BASE_URL ]]
then
  sed -i "s/__ENV_DOCKER_API_DOMAIN_NAME__/$REACT_APP_API_BASE_URL/g" $CONFIG_FILE_PATH/static/js/main.*.js
  sed -i "s/__ENV_DOCKER_APP_API_KEY__/$REACT_APP_API_KEY/g" $CONFIG_FILE_PATH/static/js/main.*.js
  sed -i "s/__ENV_DOCKER_APP_API_SECRET__/$REACT_APP_API_SECRET/g" $CONFIG_FILE_PATH/static/js/main.*.js

  if [[ $ENV_DOCKER_API_DOCS_URL ]]
  then
    sed -i "s/__ENV_DOCKER_API_DOCS_URL__/$ENV_DOCKER_API_DOCS_URL/g" $CONFIG_FILE_PATH/static/js/main.*.js
  else
    sed -i "s/__ENV_DOCKER_API_DOCS_URL__/https\:\/\/developer.bcgateways.net/g" $CONFIG_FILE_PATH/static/js/main.*.js
  fi

  # Copy final html into /var/www (can be used for static file deploy)
  cp -r $CONFIG_FILE_PATH/* /var/www/

  echo "Build finished, you can use/mount static html now"
fi

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
