# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then produce a production bundle. The build fails on TS errors, so treat this as the type-check gate.
- `npm run lint` — run ESLint across the repo
- `npm run preview` — serve the built `dist/` locally

There is no test runner wired up yet.

## Architecture notes

- **React 19 + Vite 8 + TypeScript 6** scaffold. Entry: `src/main.tsx` → `src/App.tsx`. `index.html` is the Vite entry HTML.
- **React Compiler is enabled** via `@rolldown/plugin-babel` + `babel-plugin-react-compiler` in `vite.config.ts` (using `reactCompilerPreset()` from `@vitejs/plugin-react`). This means you generally should NOT add manual `useMemo` / `useCallback` / `React.memo` — the compiler handles memoization. It also affects dev/build performance (per README).
- **TypeScript is split into project references**: root `tsconfig.json` references `tsconfig.app.json` (app code under `src/`, bundler resolution, `noEmit`) and `tsconfig.node.json` (Vite config, etc.). Use `tsc -b` (build mode) rather than plain `tsc`.
- **Strict lint-ish TS options** are on in `tsconfig.app.json`: `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax` (so type-only imports must use `import type`), `erasableSyntaxOnly` (no enums / namespaces / parameter properties).
- **ESLint flat config** (`eslint.config.js`) extends `@eslint/js` recommended, `typescript-eslint` recommended, `eslint-plugin-react-hooks` flat recommended, and `eslint-plugin-react-refresh` vite preset. `dist` is globally ignored.
