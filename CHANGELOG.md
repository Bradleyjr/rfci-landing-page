## [2026-03-17 10:29:20 EDT] — restore homepage education section
- **What:** Replaced the landing-page LinkedIn feed with the RFCI education section, passed the shared video dataset into the homepage, and tightened the section to one featured video plus two secondary tiles.
- **Why:** The README defines education videos as a core homepage section, while the previous implementation showed fabricated social content instead of RFCI learning resources.
- **Risk:** MEDIUM
- **Files changed:** `app/(app)/page.tsx`, `app/_components/LandingPage.tsx`, `app/sections/EducationSection.tsx`
- **Edge cases handled:** Missing homepage video data falls back to static RFCI course entries; unordered video items are sorted consistently; only two supporting tiles render even when more videos exist.
- **Known limitations:** Automated validation could not run because `node_modules` is not installed in this workspace.
