## 2026-03-17 11:00:27 EDT — add homepage education section
- **What:** Replaced the homepage LinkedIn feed with the Education section and refined that section to use the site video dataset, a featured module, and two supporting video tiles.
- **Why:** The project spec calls for a homepage education/video-library section, and the previous implementation used off-spec fake social content instead.
- **Risk:** MEDIUM
- **Files changed:** `app/_components/LandingPage.tsx`, `app/sections/EducationSection.tsx`
- **Edge cases handled:** Missing featured flag falls back to the first ordered video; fewer than three videos still render without breaking the layout; local-development fallback data remains available without CMS wiring.
- **Known limitations:** Validation could not run in this worktree because `node_modules` is missing, so `npm run lint` fails before loading Next.js.
