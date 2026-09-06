#!/usr/bin/env bash
# Publish the static export in ./out to the gh-pages branch (GitHub Pages source).
set -euo pipefail
cd "$(dirname "$0")/.."
[ -d out ] || { echo "run pnpm build first"; exit 1; }
REMOTE=$(git remote get-url origin)
TMP=$(mktemp -d)
cp -R out/. "$TMP"/
cd "$TMP"
git init -q && git checkout -q -b gh-pages
git add -A && git -c user.name="deploy" -c user.email="deploy@nuukquant.com" commit -q -m "deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -f "$REMOTE" gh-pages:gh-pages
cd - >/dev/null && rm -rf "$TMP"
echo "published to gh-pages"
