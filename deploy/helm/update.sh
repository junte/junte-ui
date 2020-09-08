# /bin/bash

set -o errexit
set -o nounset

cd /opt/junte/services/junte-ui/deploy/helm

RELEASE_PATH="./releases/${1}"

source ${RELEASE_PATH}/env

_HELM_OPTS="${@:2} -f ${RELEASE_PATH}/config.yaml --namespace ${K8S_NAMESPACE} ."

helm upgrade --reuse-values --cleanup-on-fail ${HELM_RELEASE} ${_HELM_OPTS} 
