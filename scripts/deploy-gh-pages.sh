#!/usr/bin/env bash
# Publish the static export in ./out to the gh-pages branch (GitHub Pages source).
set -euo pipefail
cd "$(dirname "$0")/.."
[ -d out ] || { echo "run pnpm build first"; exit 1; }

# gh-pages is replaced wholesale, so a build missing a page silently deletes it
# from the live site. Refuse to publish when an expected page is absent.
REQUIRED_PAGES=(index.html card/index.html card/ahmet-ozturk.vcf)
for page in "${REQUIRED_PAGES[@]}"; do
  [ -f "out/$page" ] && continue
  echo "deploy aborted: out/$page is missing."
  echo "This build would delete https://www.nuukquant.com/${page%index.html} from the live site."
  echo "Run: git pull && pnpm build   (the page's source lives in public/ or src/)"
  exit 1
done

REMOTE=$(git remote get-url origin)
TMP=$(mktemp -d)
cp -R out/. "$TMP"/
cd "$TMP"
git init -q && git checkout -q -b gh-pages
git add -A && git -c user.name="deploy" -c user.email="deploy@nuukquant.com" commit -q -m "deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -f "$REMOTE" gh-pages:gh-pages
cd - >/dev/null && rm -rf "$TMP"
echo "published to gh-pages"
