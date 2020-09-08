# /bin/bash

set -o errexit
set -o nounset

RELEASE_PATH="./releases/${1}"

source ${RELEASE_PATH}/env

_HELM_OPTS=" -f ${RELEASE_PATH}/config.yaml --namespace ${K8S_NAMESPACE} ."

helm upgrade --reuse-values  --cleanup-on-fail -i ${HELM_RELEASE} ${_HELM_OPTS}; 
