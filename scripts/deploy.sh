#!/usr/bin/env bash
set -euo pipefail

DEPLOY_HOST="${DEPLOY_HOST:?DEPLOY_HOST is required}"
DEPLOY_USER="${DEPLOY_USER:?DEPLOY_USER is required}"
DEPLOY_PATH="${DEPLOY_PATH:?DEPLOY_PATH is required}"
SSH_KEY_PATH="${SSH_KEY_PATH:?SSH_KEY_PATH is required}"
APP_DOMAIN="${APP_DOMAIN:?APP_DOMAIN is required}"

SHORT_SHA="${SHORT_SHA:-${GIT_COMMIT:-local}}"
RELEASE_TARBALL="release-${SHORT_SHA}.tgz"
REMOTE_RELEASE_DIR="${DEPLOY_PATH}/releases/${SHORT_SHA}"
REMOTE_CURRENT_LINK="${DEPLOY_PATH}/current"
SSH_TARGET="${DEPLOY_USER}@${DEPLOY_HOST}"
SSH_OPTS=(
  -i "${SSH_KEY_PATH}"
  -o StrictHostKeyChecking=accept-new
  -o UserKnownHostsFile=/dev/null
)

cleanup() {
  rm -f "${RELEASE_TARBALL}"
}
trap cleanup EXIT

tar \
  --exclude='.git' \
  --exclude='.worktrees' \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude="${RELEASE_TARBALL}" \
  -czf "${RELEASE_TARBALL}" .

ssh "${SSH_OPTS[@]}" "${SSH_TARGET}" "mkdir -p '${DEPLOY_PATH}/releases' '${REMOTE_RELEASE_DIR}'"
scp "${SSH_OPTS[@]}" "${RELEASE_TARBALL}" "${SSH_TARGET}:${REMOTE_RELEASE_DIR}/release.tgz"

ssh "${SSH_OPTS[@]}" "${SSH_TARGET}" <<EOF
set -euo pipefail
cd '${REMOTE_RELEASE_DIR}'
tar -xzf release.tgz
rm -f release.tgz
ln -sfn '${REMOTE_RELEASE_DIR}' '${REMOTE_CURRENT_LINK}'
APP_IMAGE_TAG='${SHORT_SHA}' docker compose -f '${REMOTE_CURRENT_LINK}/deploy/compose.yml' up -d --build --remove-orphans
docker compose -f '${REMOTE_CURRENT_LINK}/deploy/compose.yml' ps
for attempt in 1 2 3 4 5 6 7 8 9 10; do
  if curl -fsS -H 'Host: ${APP_DOMAIN}' http://127.0.0.1/ >/dev/null; then
    exit 0
  fi
  sleep 3
done
echo 'Bookman health check failed on huoshan' >&2
exit 1
EOF
