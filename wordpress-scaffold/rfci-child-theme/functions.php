<?php
/**
 * RFCI Astra Child Theme - functions.php
 *
 * Enqueues Google Fonts, registers navigation menus,
 * and sets Elementor/Astra defaults for the RFCI design system.
 */

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Enqueue parent theme stylesheet + Google Fonts
 */
function rfci_enqueue_styles() {
    // Parent theme
    wp_enqueue_style(
        'astra-parent',
        get_template_directory_uri() . '/style.css'
    );

    // Child theme
    wp_enqueue_style(
        'rfci-child',
        get_stylesheet_uri(),
        array( 'astra-parent' ),
        wp_get_theme()->get( 'Version' )
    );

    // Google Fonts - Sora (headings) + DM Sans (body)
    wp_enqueue_style(
        'rfci-google-fonts',
        'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap',
        array(),
        null
    );
}
add_action( 'wp_enqueue_scripts', 'rfci_enqueue_styles' );

/**
 * Load fonts and child-theme styles in Elementor editor so HTML snippets
 * look close to the front-end while editing.
 */
function rfci_editor_styles() {
    wp_enqueue_style(
        'rfci-google-fonts-editor',
        'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap',
        array(),
        null
    );

    wp_enqueue_style(
        'rfci-child-editor',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get( 'Version' )
    );
}
add_action( 'elementor/editor/after_enqueue_styles', 'rfci_editor_styles' );

/**
 * Register navigation menus
 */
function rfci_register_menus() {
    register_nav_menus( array(
        'primary'   => __( 'Primary Navigation', 'rfci-child' ),
        'footer'    => __( 'Footer Navigation', 'rfci-child' ),
    ) );
}
add_action( 'after_setup_theme', 'rfci_register_menus' );

/**
 * Add Sora and DM Sans to Elementor's font list
 */
function rfci_add_elementor_fonts( $fonts ) {
    $fonts['Sora'] = 'googlefonts';
    $fonts['DM Sans'] = 'googlefonts';
    return $fonts;
}
add_filter( 'elementor/fonts/additional_fonts', 'rfci_add_elementor_fonts' );

/**
 * Set Elementor default colors to RFCI palette
 * These appear in the color picker's "Global Colors" panel
 */
function rfci_elementor_default_colors( $config ) {
    $config['default_scheme_color'] = array(
        1 => '#0164DB', // Primary - RFCI Blue
        2 => '#00C2D1', // Secondary - RFCI Teal
        3 => '#121212', // Text - RFCI Black
        4 => '#F5F5F0', // Accent - Cream
    );
    return $config;
}
add_filter( 'elementor/schemes/default_color', 'rfci_elementor_default_colors' );

/**
 * Set default content width to 1280px
 */
function rfci_astra_content_width() {
    return 1280;
}
add_filter( 'astra_content_width', 'rfci_astra_content_width' );

/**
 * Disable default Astra header/footer when using Elementor Theme Builder
 * Uncomment these if you build header/footer in Elementor Theme Builder
 */
// add_filter( 'astra_header_disable', '__return_true' );
// add_filter( 'astra_footer_disable', '__return_true' );

/**
 * Add custom image sizes for card thumbnails
 */
function rfci_custom_image_sizes() {
    add_image_size( 'rfci-card', 600, 400, true );
    add_image_size( 'rfci-hero', 1920, 1080, true );
    add_image_size( 'rfci-member-logo', 300, 200, false );
}
add_action( 'after_setup_theme', 'rfci_custom_image_sizes' );

/**
 * Allow SVG uploads (for member logos)
 */
function rfci_allow_svg( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter( 'upload_mimes', 'rfci_allow_svg' );
