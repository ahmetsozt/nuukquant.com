#!/usr/bin/env bash
# Refresh nuukquant.com/free-signals/ from the signal tracker, then build and deploy.
#   scripts/free-signals/publish.sh [telegram-market-bot/data]
set -euo pipefail
cd "$(dirname "$0")/../.."
DATA="${1:-$HOME/Quant/telegram-market-bot/data}"
node scripts/free-signals/build-free-signals.mjs "$DATA"
pnpm build
./scripts/deploy-gh-pages.sh
