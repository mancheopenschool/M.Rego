<?php
/**
 * require evision_corporate_action_front_slider
 */
$evision_corporate_slider_action_file_path = evision_corporate_file_directory('inc/hooks/front-page/slider.php');
require $evision_corporate_slider_action_file_path;

/**
 * require evision_corporate_action_front_about
 */
$evision_corporate_about_action_file_path = evision_corporate_file_directory('inc/hooks/front-page/about.php');
require $evision_corporate_about_action_file_path;

/**
 * require evision_corporate_action_front_service
 */
$evision_corporate_service_action_file_path = evision_corporate_file_directory('inc/hooks/front-page/service.php');
require $evision_corporate_service_action_file_path;

/**
 * require evision_corporate_action_front_portfolio
 */
$evision_corporate_portfolio_action_file_path = evision_corporate_file_directory('inc/hooks/front-page/portfolio.php');
require $evision_corporate_portfolio_action_file_path;

/**
 * require evision_corporate_action_front_client
 */
$evision_corporate_client_action_file_path = evision_corporate_file_directory('inc/hooks/front-page/client.php');
require $evision_corporate_client_action_file_path;

/**
 * require evision_corporate_action_front_testimonial
 */
$evision_corporate_testimonial_action_file_path = evision_corporate_file_directory('inc/hooks/front-page/testimonial.php');
require $evision_corporate_testimonial_action_file_path;

/**
 * require evision_corporate_action_front_blog
 */
$evision_corporate_blog_action_file_path = evision_corporate_file_directory('inc/hooks/front-page/blog.php');
require $evision_corporate_blog_action_file_path;

/**
 * require evision_corporate_action_front_team
 */
$evision_corporate_team_action_file_path = evision_corporate_file_directory('inc/hooks/front-page/team.php');
require $evision_corporate_team_action_file_path;

/**
 * require evision_corporate_action_front_map
 */
$evision_corporate_map_action_file_path = evision_corporate_file_directory('inc/hooks/front-page/map.php');
require $evision_corporate_map_action_file_path;

/**
 * require evision_corporate_action_front_contact
 */
$evision_corporate_contact_action_file_path = evision_corporate_file_directory('inc/hooks/front-page/contact.php');
require $evision_corporate_contact_action_file_path;

if ( ! function_exists( 'evision_corporate_front_page' ) ) :
    /**
     * Before main content
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_front_page() {
        if ( 'posts' == get_option( 'show_on_front' ) ) {
            include( get_home_template() );
        }
        elseif( 1 != evision_corporate_if_all_disable() ) {
            include( get_page_template() );
        }
        else {
            /*home banner section*/
            do_action( 'evision_corporate_action_front_slider' );

            /*about section*/
            do_action( 'evision_corporate_action_front_about' );

            /*service section*/
            do_action( 'evision_corporate_action_front_service' );

            /*portfolio section*/
            do_action( 'evision_corporate_action_front_portfolio' );

            /*client section*/
            do_action( 'evision_corporate_action_front_client' );

            /*testimonial section*/
            do_action( 'evision_corporate_action_front_testimonial' );

            /*blog section*/
            do_action( 'evision_corporate_action_front_blog' );

            /*team section*/
            do_action( 'evision_corporate_action_front_team' );

            /*map section*/
            do_action( 'evision_corporate_action_front_map' );

            /*contact section*/
            do_action( 'evision_corporate_action_front_contact' );
        }

    }
endif;
add_action( 'evision_corporate_action_front_page', 'evision_corporate_front_page', 10 );