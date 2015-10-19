<?php
/**
 * Implement Editor Styles
 *
 * @since eVision Corporate 1.0.0.5
 *
 * @param null
 * @return null
 *
 */
add_action( 'init', 'evision_corporate_add_editor_styles' );

if ( ! function_exists( 'evision_corporate_add_editor_styles' ) ) :
    function evision_corporate_add_editor_styles() {
        add_editor_style( 'editor-style.css' );
    }
endif;