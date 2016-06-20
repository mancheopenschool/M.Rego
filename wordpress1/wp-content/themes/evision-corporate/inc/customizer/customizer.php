<?php
/**
 * evision themes Theme Customizer
 *
 * @package eVision themes
 * @subpackage eVision Corporate
 * @since eVision Corporate 1.0.0
 */
add_filter('coder_customizer_framework_url', 'evision_corporate_customizer_framework_url');

if( ! function_exists( 'evision_corporate_customizer_framework_url' ) ):

    function evision_corporate_customizer_framework_url(){
        return trailingslashit( get_template_directory_uri() ) . 'inc/frameworks/coder-customizer-framework/';
    }

endif;

add_filter('coder_customizer_framework_path', 'evision_corporate_customizer_framework_path');

if( ! function_exists( 'evision_corporate_customizer_framework_path' ) ):

    function evision_corporate_customizer_framework_path(){
        return trailingslashit( get_template_directory() ) . 'inc/frameworks/coder-customizer-framework/';
    }

endif;

/**
 * Customizer additions.
 */
$evision_corporate_coder_customizer_file_path = evision_corporate_file_directory('inc/frameworks/coder-customizer-framework/coder-customizer-framework.php');
require $evision_corporate_coder_customizer_file_path;

global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
/*creating panel for general*/
$evision_corporate_panels['evision_corporate_general'] =
    array(
        'title'          => __( 'General options', 'evision-corporate' ),
        'description'    => __( 'Customize you awesome home page', 'evision-corporate' ),
    );

/******************************************
 Front Page panel section setting control start
*******************************************/
/*creating panel for home*/
$evision_corporate_panels['evision-corporate-home'] =
    array(
        'title'          => __( 'Front Page', 'evision-corporate' ),
        'description'    => __( 'Customize you awesome home page', 'evision-corporate' ),
    );

/*
 * creating sections for evision-corporate-home => evision-corporate-slider
 */
$evision_corporate_customizer_front_page_slider_file_path = evision_corporate_file_directory('inc/customizer/front-page/slider.php');
require $evision_corporate_customizer_front_page_slider_file_path;

/*
 * creating sections for evision-corporate-home => evision-corporate-about
 */
$evision_corporate_customizer_front_page_about_file_path = evision_corporate_file_directory('inc/customizer/front-page/about.php');
require $evision_corporate_customizer_front_page_about_file_path;

/*
 * creating setting control for evision-corporate-service
 */
$evision_corporate_customizer_front_page_service_file_path = evision_corporate_file_directory('inc/customizer/front-page/service.php');
require $evision_corporate_customizer_front_page_service_file_path;

/*
 * creating sections for evision-corporate-home => evision-corporate-portfolio
 */
$evision_corporate_customizer_front_page_portfolio_file_path = evision_corporate_file_directory('inc/customizer/front-page/portfolio.php');
require $evision_corporate_customizer_front_page_portfolio_file_path;


/*
 * creating sections for evision-corporate-home => evision-corporate-client
 */
$evision_corporate_customizer_front_page_client_file_path = evision_corporate_file_directory('inc/customizer/front-page/client.php');
require $evision_corporate_customizer_front_page_client_file_path;

/*
 * creating sections for evision-corporate-home => evision-corporate-testimonial
 */
$evision_corporate_customizer_front_page_testimonial_file_path = evision_corporate_file_directory('inc/customizer/front-page/testimonial.php');
require $evision_corporate_customizer_front_page_testimonial_file_path;

/*
 * creating sections for evision-corporate-home => evision-corporate-blog
 */
$evision_corporate_customizer_front_page_blog_file_path = evision_corporate_file_directory('inc/customizer/front-page/blog.php');
require $evision_corporate_customizer_front_page_blog_file_path;

/*
 * creating sections for evision-corporate-home => evision-corporate-team
 */
$evision_corporate_customizer_front_page_team_file_path = evision_corporate_file_directory('inc/customizer/front-page/team.php');
require $evision_corporate_customizer_front_page_team_file_path;

/*
 * creating sections for evision-corporate-home => evision-corporate-map
 */
$evision_corporate_customizer_front_page_map_file_path = evision_corporate_file_directory('inc/customizer/front-page/map.php');
require $evision_corporate_customizer_front_page_map_file_path;

/*
 * creating sections for evision-corporate-home => evision-corporate-contact
 */
$evision_corporate_customizer_front_page_contact_file_path = evision_corporate_file_directory('inc/customizer/front-page/contact.php');
require $evision_corporate_customizer_front_page_contact_file_path;

/******************************************
Front Page panel section setting control end
 *******************************************/

/******************************************
General panel section setting control start
 *******************************************/
/*creating panel for general*/
$evision_corporate_panels['evision-corporate-options'] =
    array(
        'title'          => __( 'Theme options', 'evision-corporate' ),
        'description'    => __( 'Customize your awesome site with theme options ', 'evision-corporate' ),
    );

/*
 * creating sections for evision-corporate-options => evision-corporate-general
 */
$evision_corporate_customizer_options_general_file_path = evision_corporate_file_directory('inc/customizer/options/general.php');
require $evision_corporate_customizer_options_general_file_path;

/*
 * creating sections for evision-corporate-options => evision-corporate-layout
 */
$evision_corporate_customizer_options_layout_file_path = evision_corporate_file_directory('inc/customizer/options/layout.php');
require $evision_corporate_customizer_options_layout_file_path;

/*
 * creating sections for evision-corporate-options => evision-corporate-header
 */
$evision_corporate_customizer_options_header_file_path = evision_corporate_file_directory('inc/customizer/options/header.php');
require $evision_corporate_customizer_options_header_file_path;

/*
 * creating sections for evision-corporate-options => evision-corporate-footer
 */
$evision_corporate_customizer_options_footer_file_path = evision_corporate_file_directory('inc/customizer/options/footer.php');
require $evision_corporate_customizer_options_footer_file_path;


/*
 * creating sections for evision-corporate-options => evision-corporate-advanced
 * */
$evision_corporate_customizer_options_advanced_file_path = evision_corporate_file_directory('inc/customizer/options/advanced.php');
require $evision_corporate_customizer_options_advanced_file_path;
/*creating setting control for evision-corporate-advanced end*/
/******************************************
General panel section setting control end
 *******************************************/

/******************************************
Removing section setting control
 *******************************************/
$evision_corporate_remove_sections =
    array(
        'header_image'
    );
$evision_corporate_remove_settings_controls =
    array(
        'header_textcolor'
    );
$evision_corporate_customizer_args = array(
    'panels'            => $evision_corporate_panels, /*always use key panels */
    'sections'          => $evision_corporate_sections,/*always use key sections*/
    'settings_controls' => $evision_corporate_settings_controls,/*always use key settings_controls*/
    'repeated_settings_controls' => $evision_corporate_repeated_settings_controls,/*always use key sections*/
    'remove_sections'   => $evision_corporate_remove_sections,/*always use key remove_sections*/
    'remove_settings_controls' => $evision_corporate_remove_settings_controls/*always use key remove_settings_controls*/
);

/*registering panel section setting and control start*/
function evision_corporate_add_panels_sections_settings() {
    global $evision_corporate_customizer_args;
    return $evision_corporate_customizer_args;
}
add_filter( 'coder_panels_sections_settings', 'evision_corporate_add_panels_sections_settings' );
/*registering panel section setting and control end*/
