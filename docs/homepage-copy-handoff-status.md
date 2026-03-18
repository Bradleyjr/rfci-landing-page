# Homepage Copy Handoff Status

## Current state

- The homepage implementation is already wired to shared content settings in [`app/_data/site-settings.ts`](/Users/bradleyyoung/rfci-landing-page/app/_data/site-settings.ts).
- The local repo contains scaffold files only:
  - [`docs/homepage-copy-scaffold.md`](/Users/bradleyyoung/rfci-landing-page/docs/homepage-copy-scaffold.md)
  - [`docs/homepage-copy-scaffold.docx`](/Users/bradleyyoung/rfci-landing-page/docs/homepage-copy-scaffold.docx)
- Paul's approved homepage copy does not appear to be present in the repository, so the final schedule-protection package cannot be truthfully assembled from local files alone.

## Homepage sections already ready for copy mapping

| Homepage area | Data or component target | Notes |
| --- | --- | --- |
| Hero | [`app/_data/site-settings.ts`](/Users/bradleyyoung/rfci-landing-page/app/_data/site-settings.ts) | `heroLine1`, `heroLine2`, `heroSubheading`, `heroCta`, and `heroBoxText` are ready for final copy. |
| Materials | [`app/_data/site-settings.ts`](/Users/bradleyyoung/rfci-landing-page/app/_data/site-settings.ts) | `materialsHeading` controls the section lead-in. |
| Environments | [`app/_data/site-settings.ts`](/Users/bradleyyoung/rfci-landing-page/app/_data/site-settings.ts) and [`app/_data/environments.ts`](/Users/bradleyyoung/rfci-landing-page/app/_data/environments.ts) | Heading, subheading, and each card's back-side description now live in shared data. |
| Why Resilient | [`app/_data/site-settings.ts`](/Users/bradleyyoung/rfci-landing-page/app/_data/site-settings.ts) | Heading, subheading, stat, and benefits are data-driven. |
| Mission | [`app/_data/site-settings.ts`](/Users/bradleyyoung/rfci-landing-page/app/_data/site-settings.ts) | Label, heading, descriptions, and pillars are already centralized. |
| Standards | [`app/_data/site-settings.ts`](/Users/bradleyyoung/rfci-landing-page/app/_data/site-settings.ts) | Heading, subheading, and CTA text are already centralized. |
| Members | [`app/_data/site-settings.ts`](/Users/bradleyyoung/rfci-landing-page/app/_data/site-settings.ts) | Heading, subheading, and CTA are already centralized. |

## Next handoff step

1. Retrieve the approved homepage copy from Paul's email or the shared project folder.
2. Replace scaffold placeholders with the approved text.
3. Update the matching keys in [`app/_data/site-settings.ts`](/Users/bradleyyoung/rfci-landing-page/app/_data/site-settings.ts) and any needed environment-card text in [`app/_data/environments.ts`](/Users/bradleyyoung/rfci-landing-page/app/_data/environments.ts).
4. Re-run a desktop and mobile fit pass for line breaks, CTA length, and section rhythm.
