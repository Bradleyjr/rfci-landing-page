#!/bin/bash
# ============================================================================
# RFCI WordPress Setup Script
# Run this via WP-CLI after WordPress + Elementor Pro + Astra are installed.
# Usage: bash setup.sh
# ============================================================================

set -e

echo "🔧 RFCI WordPress Setup"
echo "========================"

# ── 1. Check prerequisites ─────────────────────────────────────────────────
if ! command -v wp &> /dev/null; then
    echo "❌ WP-CLI is not installed. Install it first: https://wp-cli.org/"
    exit 1
fi

echo "✓ WP-CLI found"

# ── 2. Activate Astra child theme ──────────────────────────────────────────
echo ""
echo "📦 Installing child theme..."

# Copy the child theme folder to wp-content/themes/
THEME_DIR=$(wp theme path)/rfci-child
if [ ! -d "$THEME_DIR" ]; then
    cp -r "$(dirname "$0")/rfci-child-theme" "$THEME_DIR"
    echo "  Copied rfci-child-theme → $THEME_DIR"
fi

wp theme activate rfci-child
echo "✓ RFCI child theme activated"

# ── 3. Set site settings ───────────────────────────────────────────────────
echo ""
echo "⚙️  Configuring site settings..."

wp option update blogname "RFCI"
wp option update blogdescription "Resilient Floor Covering Institute"
wp option update timezone_string "America/New_York"
wp option update permalink_structure "/%postname%/"
echo "✓ Site settings configured"

# ── 4. Create pages ────────────────────────────────────────────────────────
echo ""
echo "📄 Creating pages..."

create_page() {
    local title="$1"
    local slug="$2"
    local template="$3"

    if wp post list --post_type=page --name="$slug" --format=count | grep -q '^0$'; then
        wp post create --post_type=page --post_title="$title" --post_name="$slug" --post_status=publish --page_template="$template"
        echo "  Created: $title (/$slug)"
    else
        echo "  Exists: $title (/$slug)"
    fi
}

# Homepage
create_page "Home" "home" "elementor_canvas"
wp option update show_on_front "page"
HOME_ID=$(wp post list --post_type=page --name="home" --field=ID)
wp option update page_on_front "$HOME_ID"

# Subpages
create_page "About RFCI" "about" "elementor_canvas"
create_page "Why Resilient" "why-resilient" "elementor_canvas"
create_page "Flooring Types" "flooring" "elementor_canvas"
create_page "Inspiration" "inspiration" "elementor_canvas"
create_page "Video Library" "videos" "elementor_canvas"
create_page "FAQ" "faq" "elementor_canvas"
create_page "Sustainability" "sustainability" "elementor_canvas"
create_page "FloorScore" "floorscore" "elementor_canvas"
create_page "ASSURE" "assure" "elementor_canvas"
create_page "AFFIRM" "affirm" "elementor_canvas"
create_page "EPDs" "epds" "elementor_canvas"
create_page "Member Directory" "members" "elementor_canvas"
create_page "Community" "community" "elementor_canvas"
create_page "Contact" "contact" "elementor_canvas"
create_page "Privacy Policy" "privacy" "elementor_canvas"
create_page "Terms of Use" "terms" "elementor_canvas"

echo "✓ Pages created"

# ── 5. Create navigation menus ─────────────────────────────────────────────
echo ""
echo "🧭 Creating navigation menus..."

# Primary menu
wp menu create "Primary Navigation" 2>/dev/null || true
MENU_ID=$(wp menu list --format=csv | grep "Primary Navigation" | cut -d',' -f1)

wp menu item add-post "$MENU_ID" $(wp post list --post_type=page --name="about" --field=ID) --title="About"
wp menu item add-post "$MENU_ID" $(wp post list --post_type=page --name="flooring" --field=ID) --title="Resources"
wp menu item add-post "$MENU_ID" $(wp post list --post_type=page --name="sustainability" --field=ID) --title="Sustainability"
wp menu item add-post "$MENU_ID" $(wp post list --post_type=page --name="members" --field=ID) --title="Member Directory"
wp menu item add-post "$MENU_ID" $(wp post list --post_type=page --name="contact" --field=ID) --title="Contact"

wp menu location assign "$MENU_ID" primary
echo "✓ Primary navigation created"

# Footer menu
wp menu create "Footer Navigation" 2>/dev/null || true
FOOTER_MENU_ID=$(wp menu list --format=csv | grep "Footer Navigation" | cut -d',' -f1)
wp menu location assign "$FOOTER_MENU_ID" footer
echo "✓ Footer navigation created"

# ── 6. Set Elementor defaults ──────────────────────────────────────────────
echo ""
echo "🎨 Configuring Elementor defaults..."

# Set default fonts
wp option update elementor_default_generic_fonts "DM Sans"
wp option update elementor_container_width 1280

echo "✓ Elementor defaults set"

# ── 7. Astra settings ──────────────────────────────────────────────────────
echo ""
echo "🎯 Configuring Astra theme settings..."

# These are set via Customize API — run manually in Customize if wp option doesn't work
wp option update astra-settings '{"site-content-width":1280,"header-main-layout":"header-main-layout-1"}' --format=json 2>/dev/null || echo "  (Set Astra content width to 1280px manually in Customize)"

echo "✓ Astra configured"

# ── 8. Summary ──────────────────────────────────────────────────────────────
echo ""
echo "============================================="
echo "✅ RFCI WordPress setup complete!"
echo "============================================="
echo ""
echo "Next steps:"
echo "  1. Go to Elementor > Templates > Import Templates"
echo "  2. Import each JSON file from the templates/ folder"
echo "     (01-hero.json through 12-education.json)"
echo "  3. Edit the Home page with Elementor"
echo "  4. Insert each imported template in section order"
echo "  5. Import navigation.json and footer.json for"
echo "     Elementor Theme Builder header/footer"
echo ""
echo "  For mega-menu: Install JetMenu or ElementsKit plugin"
echo "  For marquee:   The CSS animation is in the child theme"
echo ""
echo "  See README.md for detailed instructions."
