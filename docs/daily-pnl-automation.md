# Daily P&L strip: data pipeline

The home page and the track-record page show a "Closed today" strip for the
proprietary desk. It is driven entirely by `public/data/daily-pnl.json`.
While `days` is empty the strip renders nothing, so the site never shows a
number that did not come from a statement.

## Feed schema (`nuuk.daily-pnl.v1`)

```json
{
  "schema": "nuuk.daily-pnl.v1",
  "currency": "USD",
  "account": "NUUK proprietary desk (MT5)",
  "updated": "2026-09-09T18:05:00Z",
  "days": [{ "date": "2026-09-09", "closedPnl": 412.5, "trades": 9, "wins": 6 }]
}
```

`closedPnl` is realised profit including commission and swap, per close date.

## Manual update (today)

1. In MT5: Toolbox → History → right-click → Report (HTML) or Export (CSV).
2. Run the importer and deploy:

```bash
node scripts/pnl/import-mt-statement.mjs ~/Downloads/ReportHistory.html --currency USD
pnpm build && bash scripts/deploy-gh-pages.sh
```

## Automation (when a VPS or GitHub Actions is available)

- **On the MT5 VPS**: an Expert Advisor or the MetaTrader "Report" scheduler
  writes the HTML statement daily at 23:59 server time; a cron job runs the
  importer and pushes the JSON to the `main` branch.
- **GitHub Actions**: the workflow below rebuilds and publishes whenever the
  JSON changes. The repository token in use lacks the `workflow` scope, so the
  file must be added from the GitHub UI (Actions → New workflow → paste).

```yaml
name: publish-pnl
on:
  push:
    paths: ["public/data/daily-pnl.json"]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: pnpm }
      - run: pnpm install --frozen-lockfile && pnpm build
      - run: bash scripts/deploy-gh-pages.sh
        env: { GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} }
```

Until a statement is imported the feed stays empty on purpose.
