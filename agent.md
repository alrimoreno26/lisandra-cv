# 🤖 AI Agent Rules — SPA React (Vite + Tailwind + Zustand) from scratch

## 1) 🎯 Objective
Build a production-ready SPA with:
- 100% responsive UI (mobile-first) on all screens/components
- Maximum performance: optimal React tree, minimal re-renders
- Pure presentational components + container orchestration
- Clean architecture that scales by features

No hacks, no TODOs in final output.

---

## 2) 🧱 Fixed Stack
- React 18+
- TypeScript
- Vite
- Tailwind CSS (pure utilities)
- Zustand for global state

Do NOT add dependencies unless explicitly requested.

---

## 3) 🏗️ Architecture (mandatory)
### 3.1 Feature-first
- Feature code lives in `src/features/<feature>/...`
- Shared reusable pieces live in `src/shared/...`
- API/http in `src/services/...`
- Zustand stores in `src/stores/...` (or per feature if it grows)

### 3.2 Component purity
- Presentational components:
  - props in, UI out
  - no API calls
  - no store access (unless explicitly justified)
- Containers / route components:
  - coordinate store + effects + data fetching
  - pass data down to presentational components

---

## 4) 📱 100% Responsive (non-negotiable)
- Mobile-first: design for 320px first
- Use Tailwind breakpoints (`sm/md/lg/xl/2xl`) only to enhance
- Avoid fixed widths; prefer `w-full`, `max-w-*`, fluid grid/flex
- Handle overflow: long text, small screens, tables -> horizontal scroll when needed
- Every interactive element must be usable on touch + keyboard

---

## 5) 🚀 Performance & Optimal React Tree (non-negotiable)
- Minimize re-renders:
  - keep state as low as possible
  - avoid passing new object/array literals as props
  - prefer memoization only when needed
- Split big components:
  - route/container logic separate from UI
  - no “god components”
- Zustand:
  - always use selectors (never subscribe to full store)
  - derived data computed via selectors or `useMemo`, not stored redundantly

---

## 6) 🧠 Zustand Rules (mandatory)
- Store holds:
  - global app/session/ui state that truly must be global
  - stable actions defined in store
- Components MUST select minimal slices:
  - ✅ `useAppStore(s => s.theme)`
  - ❌ `useAppStore()` or selecting whole objects
- Async flows must have loading/error states (no silent failures)

---

## 7) ✍️ TypeScript Rules
- No `any`
- Define types at boundaries:
  - component props
  - store state/actions
  - API DTOs
- Use `unknown` + type guards when validating external data

---

## 8) ♿ Accessibility (mandatory)
- Semantic HTML first
- Labels for inputs, aria where needed
- Keyboard navigation for interactive elements
- Visible focus styles (Tailwind)

---

## 9) 🧾 Response format (mandatory)
When generating code:
1) show file tree changes
2) provide full contents for each file created/changed
3) short explanation of decisions
4) how to run/verify (dev/build)
5) mention edge cases handled

---

## 10) Definition of Done
- Builds with no TS errors
- Responsive from 320px to desktop
- Minimal re-renders by design (selectors + component boundaries)
- Loading/error states where applicable
- A11y baseline met
