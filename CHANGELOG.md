## 2026-03-17 11:59:52 EDT — homepage education section
- **What:** Replaced the homepage's non-spec LinkedIn feed with the Education section and aligned it to one featured video plus two secondary tiles sourced from the shared video dataset.
- **Why:** The README defines Education as a core landing page section, while the current homepage shipped a fake social feed instead of the required video module.
- **Risk:** MEDIUM
- **Files changed:** `app/_components/LandingPage.tsx`, `app/sections/EducationSection.tsx`
- **Edge cases handled:** fewer than three videos available, missing thumbnails via existing fallback logic, long titles/descriptions in stacked card layouts
- **Known limitations:** Local `npm run lint` and `npm run build` validation could not run in this worktree because `node_modules/.bin/next` is missing.
