# RFCI WordPress Scaffold

WordPress handoff package for the RFCI landing page, built to work with:

- WordPress 6.x
- Astra theme
- Elementor or Elementor Pro

This package now includes two implementation paths:

1. `elementor-html/homepage.html`
   Use this if you want the closest conversion of the current landing page with one paste-ready homepage block.
2. `templates/*.json`
   Use these if you prefer section-by-section Elementor template imports and more native Elementor editing afterward.

## What Is Included

```text
wordpress-scaffold/
  elementor-html/
    homepage.html
  rfci-child-theme/
    assets/
      rfci-logo.svg
      media/
        hero-video.mp4
        beautifully-responsible-hero.jpg
        beautifully-responsible-logo.png
        community/
        member-logos/
    functions.php
    style.css
  templates/
    01-hero.json
    ...
    navigation.json
    footer.json
  setup.sh
```

## Recommended Workflow

The most faithful conversion is the HTML route.

### 1. Install Astra + the child theme

Upload `rfci-child-theme/` to `wp-content/themes/` and activate it.

Keep the folder name as `rfci-child-theme`.
The bundled homepage HTML references assets at:

`/wp-content/themes/rfci-child-theme/assets/...`

If you rename the theme folder, update those paths in `elementor-html/homepage.html`.

### 2. Create a blank homepage in WordPress

Recommended page settings:

- Template: `Elementor Full Width` or Astra full-width layout
- Disable page title
- Disable default sidebar
- Use stretched/full-width content

### 3. Paste the converted homepage into Elementor

1. Edit the page with Elementor
2. Add one `HTML` widget to the page
3. Open [`homepage.html`](/Users/bradleyyoung/rfci-landing-page/wordpress-scaffold/elementor-html/homepage.html)
4. Paste the file contents into that HTML widget

That snippet already uses the child-theme CSS and bundled assets.

## Header And Footer

The homepage HTML intentionally covers the page body only.

Use one of these:

- Astra Header Builder and Footer Builder
- Import [`navigation.json`](/Users/bradleyyoung/rfci-landing-page/wordpress-scaffold/templates/navigation.json) and [`footer.json`](/Users/bradleyyoung/rfci-landing-page/wordpress-scaffold/templates/footer.json) into Elementor Theme Builder

For Astra, the cleanest setup is:

- Header: Astra builder
- Footer: Astra builder or Elementor Theme Builder
- Page body: `elementor-html/homepage.html`

## Optional: Use The JSON Templates

If you want more native Elementor structure from the start:

1. Go to `Elementor > Templates > Saved Templates`
2. Import the JSON files from `templates/`
3. Assemble the homepage in order

These templates are still useful, but the HTML version is the more accurate conversion of the current app.

## Design / Styling Notes

The child theme handles:

- RFCI fonts: `Sora` and `DM Sans`
- Design tokens and shared utility classes
- Homepage section styling for the pasted HTML
- Bundled assets for the hero video, campaign art, member logos, and community photography

The conversion keeps the visual hierarchy and section order of the current site, but some React-only behaviors were simplified for WordPress compatibility:

- Motion-heavy scroll effects are reduced
- The standards tabs are converted to styled accordion panels
- The rotating scrapbook arc becomes a static responsive gallery
- The members marquee uses CSS animation only

## Quick Setup Script

`setup.sh` is still included for WP-CLI-based project setup if you want to automate page creation and theme activation.

## Practical Editing Notes

If you paste `homepage.html` first and later want deeper Elementor control:

1. Keep the child theme active
2. Rebuild one section at a time as Elementor containers
3. Reuse the copy, links, and assets from the pasted HTML as your source

That usually gives the fastest path: accurate first, editable second.
