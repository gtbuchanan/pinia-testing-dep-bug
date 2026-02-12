# Pinia bug report

Reproduction of: https://github.com/vuejs/pinia/issues/3103

## Prerequisites

* pnpm 10.29.3

## Reproduction Steps

1. Run `pnpm i`
1. Run `pnpm -C packages/app test` (error occurs here)

## Local Fix Steps

1. Uncomment the `packageExtensions` block in `pnpm-workspace.yaml`
1. Re-run reproduction steps (notice error no longer occurs)
