<?php
/**
 * Jetpack Compatibility File
 * See: https://jetpack.me/
 *
 * @package eVision themes
 * @subpackage eVision Corporate
 * @since eVision Corporate 1.0.0
 */

/**
 * Add theme support for Infinite Scroll.
 * See: https://jetpack.me/support/infinite-scroll/
 */
function evision_corporate_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'render'    => 'evision_corporate_infinite_scroll_render',
		'footer'    => 'page',
	) );
} // end function evision_corporate_jetpack_setup
add_action( 'after_setup_theme', 'evision_corporate_jetpack_setup' );

/**
 * Custom render function for Infinite Scroll.
 */
function evision_corporate_infinite_scroll_render() {
	while ( have_posts() ) {
		the_post();
		get_template_part( 'template-parts/content', get_post_format() );
	}
} // end function evision_corporate_infinite_scroll_render
