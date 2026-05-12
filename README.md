# Söderorts Golv & Entreprenad AB

Marketing site for Söderorts Golv, a Stockholm-based flooring and construction
company. Single-page React app rendered from a Vite build.

## Commands

| Command           | Purpose                                                              |
| ----------------- | -------------------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR                                   |
| `npm run build`   | Type-check (`tsc -b`) then produce a production bundle in `dist/`    |
| `npm run lint`    | Run ESLint across `src/`                                             |
| `npm run preview` | Serve the built `dist/` locally                                      |

`npm run build` is the type-check gate — the build fails on TS errors. There
is no test runner.

## Stack

- React 19 + Vite 8 + TypeScript 6
- React Compiler (`babel-plugin-react-compiler`), so manual `useMemo` /
  `useCallback` / `React.memo` are unnecessary in nearly all cases
- No router. The site is single-page; nav links are plain `<a href="#hash">`
  anchors and the browser handles in-page scrolling natively (with
  `scroll-behavior: smooth` set on `<html>` in `index.css`)
- ESLint flat config (`@eslint/js`, `typescript-eslint`,
  `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)

## Project layout

```
src/
├── App.tsx                 Router shell — header / main / footer
├── main.tsx                Entry; mounts <App /> in BrowserRouter
├── data.ts                 All site content (nav links, hero, services,
│                           projects, team, partners, certificates, contact)
├── types.ts                Shared type definitions for the data above
├── index.css               Global resets
├── App.css                 Design tokens + every component's styles
├── assets/                 Hero, project, team photos + partner/cert logos
├── components/             Reusable pieces
│   ├── Header.tsx            Sticky nav + mobile hamburger drawer
│   ├── Footer.tsx
│   ├── ProjectCard.tsx       Card in the Projects grid (button that opens
│   │                         the modal)
│   ├── ProjectModal.tsx      Dialog with project detail + sticky close
│   └── TeamCard.tsx
├── hooks/
│   └── useFocusTrap.ts     Save/restore focus + cycle Tab inside an
│                           element while active
└── views/                  One file per landing-page section
    ├── Landing.tsx           Composes the sections in order
    ├── Hero.tsx
    ├── Services.tsx
    ├── Projects.tsx
    ├── About.tsx
    ├── Team.tsx
    ├── Partners.tsx
    ├── Certificates.tsx
    └── Contact.tsx
```

## CSS conventions

- BEM-flavoured class names with the `sg-` prefix:
  `sg-block`, `sg-block__element`, `sg-block--modifier`.
- Design tokens live as CSS custom properties at the top of `App.css`
  (`--sg-navy`, `--sg-space-3`, `--sg-font-head`, `--sg-dur-fast`, …).
  Reach for the tokens; only hard-code values if you're consciously
  stepping outside the system.
- One consolidated mobile breakpoint (`@media (max-width: 720px)`) lives
  at the end of `App.css` so it overrides section-local breakpoints
  above without needing `min-width` guards on every one.

## Accessibility

- `ProjectModal` and the mobile drawer use `useFocusTrap` to keep
  keyboard focus inside while open, and restore focus to the trigger
  when closed.
- Both dismiss on Escape and the modal also dismisses on overlay click.
- The brand wordmark is exposed to assistive tech via `aria-label` so
  the visually-stylised two-line text is still announced.

## Navigation

The site is a single page. Anchors use plain `<a href="#hash">` and rely
on the browser's native hash-jump behaviour. `scroll-behavior: smooth` on
`<html>` makes the jump animated, and `scroll-margin-top` on `section[id]`
offsets the destination so the sticky nav doesn't cover the target. If
multi-page surfaces are reintroduced later, add `react-router` back.
