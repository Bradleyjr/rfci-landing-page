# Changelog

## 2026-03-17 11:30:08 EDT — add landing-page education section
- **What:** Replaced the home page LinkedIn feed block with the RFCI education section and refined that section to show one featured video plus two supporting tiles using the shared fallback video dataset and site-settings copy.
- **Why:** The project spec defines educational video content as a core landing-page section, while the current experience omitted it and surfaced a fake LinkedIn feed instead.
- **Risk:** MEDIUM
- **Files changed:** `app/_components/LandingPage.tsx`, `app/sections/EducationSection.tsx`
- **Edge cases handled:** no featured flag falls back to the first ordered video; fewer than three videos still render cleanly; missing thumbnails still resolve through the existing media fallback helper.
- **Known limitations:** Full lint/build validation was blocked in this worktree because dependencies are not installed and `npm run lint` fails immediately with `next: command not found`.
