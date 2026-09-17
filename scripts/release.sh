#!/usr/bin/env bash

set -Eeuo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

log() {
  echo "[$(date '+%H:%M:%S')] $1"
}

run() {
  log "$*"
  "$@"
}

require_clean_git() {
  if [[ -n "$(git status --porcelain)" ]]; then
    echo "❌ Working tree is not clean"
    git status --short
    exit 1
  fi
}

push_branch() {
  local branch="$1"

  log "Pushing $branch..."

  if git push origin "$branch"; then
    log "✅ Push successful: $branch"
  else
    echo "❌ Push failed: $branch"
    exit 1
  fi
}

merge_branch() {
  local from="$1"
  local to="$2"

  run git switch "$to"
  run git pull origin "$to"

  log "Merging $from -> $to"

  if git merge --no-ff "$from" -m "merge: $from -> $to"; then
    log "✅ Merge successful"
  else
    echo "❌ Merge failed: $from -> $to"
    exit 1
  fi

  push_branch "$to"
}

main() {
  cd "$REPO_DIR"

  require_clean_git

  run git fetch --all --prune

  # Update develop
  run git switch develop
  run git pull origin develop

  # Merge develop -> main
  merge_branch develop main

  # Return to develop
  run git switch develop

  log "🚀 Release complete! develop merged into main and pushed to origin."
}

main