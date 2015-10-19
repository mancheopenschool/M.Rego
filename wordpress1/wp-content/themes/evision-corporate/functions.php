<?php
/**
 * evision themes functions and definitions
 *
 * @package eVision themes
 * @subpackage eVision Corporate
 * @since eVision Corporate 1.0.0
 */

/**
 * Get the path for the file ( to support child theme )
 *
 * @since eVision Corporate 1.0.0
 *
 * @param string $file_path, path from the theme
 * @return string full path of file inside theme
 *
 */
if( !function_exists('evision_corporate_file_directory') ){
    function evision_corporate_file_directory( $file_path ){

        if( file_exists( trailingslashit( get_stylesheet_directory() ) . $file_path) ){
            return trailingslashit( get_stylesheet_directory() ) . $file_path;
        }
        else{
            return trailingslashit( get_template_directory() ) . $file_path;
        }
    }
}


/**
 * require evision int.
 */
$evision_corporate_init_file_path = evision_corporate_file_directory('inc/init.php');
require $evision_corporate_init_file_path;

if ( ! function_exists( 'evision_corporate_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function evision_corporate_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on evision themes, use a find and replace
	 * to change 'evision-corporate' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'evision-corporate', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 365, 247 , true );
	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'evision-corporate-front-page' => esc_html__( 'Front Page Menu', 'evision-corporate' ),
		'evision-corporate-inner-page' => esc_html__( 'Inner Pages Menu', 'evision-corporate' ),
		'evision-corporate-social' => esc_html__( 'Social Menu', 'evision-corporate' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See http://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'evision_corporate_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif; // evision_corporate_setup
add_action( 'after_setup_theme', 'evision_corporate_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function evision_corporate_content_width() {
    if ( ! isset( $content_width ) ) {
        $content_width = 1200;
    }
}
add_action( 'after_setup_theme', 'evision_corporate_content_width', 0 );

/**
 * Enqueue scripts and styles.
 */
function evision_corporate_scripts() {

	/*Bootstrap css*/
    wp_enqueue_style( 'evision-corporate-bootstrap-css', get_template_directory_uri() . '/assets/frameworks/bootstrap/css/bootstrap.css', array(), '3.3.4' );/*added*/

	/*google font*/
    wp_enqueue_style( 'evision-corporate-googleapis', '//fonts.googleapis.com/css?family=Oswald:300,400,700|Roboto:300italic,400,500,700', array(), '4.0.3' );/*added*/

	/*Font-Awesome-master*/
    wp_enqueue_style( 'evision-corporate-fontawesome', get_template_directory_uri() . '/assets/frameworks/Font-Awesome/css/font-awesome.min.css', array(), '4.3.0' );/*added*/

    /*bxslider css*/
    wp_enqueue_style( 'evision-corporate-bxslider-css', get_template_directory_uri() . '/assets/frameworks/bxslider/css/jquery.bxslider.css', array(), '4.0' );/*added*/

    /*main style*/
    wp_enqueue_style( 'evision-corporate-style', get_stylesheet_uri() );

    /*jquery start*/
    wp_register_script('evision-corporate-easing-js', get_template_directory_uri() . '/assets/frameworks/jquery.easing/jquery.easing.js', array('jquery'), '0.3.6', 1);
    wp_register_script('evision-corporate-bootstrap-js', get_template_directory_uri() . '/assets/frameworks/bootstrap/js/bootstrap.min.js', array('jquery'), '3.3.5', 1);
    wp_register_script('evision-corporate-bxslider-js', get_template_directory_uri() . '/assets/frameworks/bxslider/js/jquery.bxslider.js', array('jquery'), '4.0', 1);
    wp_register_script('evision-corporate-custom', get_template_directory_uri() . '/assets/js/evision-corporate-custom.js', array('jquery'), '4.0', 1);

    wp_enqueue_script('evision-corporate-easing-js');
    wp_enqueue_script('evision-corporate-bootstrap-js');
    wp_enqueue_script('evision-corporate-bxslider-js');

    // Localize the script with new data
    global $evision_corporate_customizer_all_values;
    if(isset($evision_corporate_customizer_all_values['evision-corporate-map-enable'])){
        $evision_corporate_map_enable = $evision_corporate_customizer_all_values['evision-corporate-map-enable'];
    }
    else{
        $evision_corporate_map_enable = 0;
    }
    if( isset($evision_corporate_customizer_all_values['evision-corporate-map-latitude']) && !empty($evision_corporate_customizer_all_values['evision-corporate-map-latitude'])){
        $evision_corporate_map_latitude = $evision_corporate_customizer_all_values['evision-corporate-map-latitude'];
    }
    else{
        $evision_corporate_map_latitude = 40.712784;
    }
    if( isset( $evision_corporate_customizer_all_values['evision-corporate-map-longitude']) && !empty($evision_corporate_customizer_all_values['evision-corporate-map-longitude'] )){
        $evision_corporate_map_longitude = $evision_corporate_customizer_all_values['evision-corporate-map-longitude'];
    }
    else{
        $evision_corporate_map_longitude = -74.005941;
    }
    if( is_front_page() ){
        $evision_corporate_front_page = 1;
    }
    else{
        $evision_corporate_front_page = 0;
    }
    $translation_array = array(
        'evision_corporate_ajaxurl' => admin_url('admin-ajax.php'),
        'evision_corporate_map_enable' => $evision_corporate_map_enable,
        'evision_corporate_map_latitude' => $evision_corporate_map_latitude,
        'evision_corporate_map_longitude' => $evision_corporate_map_longitude,
        'evision_corporate_front_page' => $evision_corporate_front_page,
    );
    wp_localize_script( 'evision-corporate-custom', 'evision_corporate_main', $translation_array );
    wp_enqueue_script( 'evision-corporate-custom' );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) && !(is_front_page()) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'evision_corporate_scripts' );

/**
 * Custom template tags for this theme.
 */
$evision_corporate_template_tags = evision_corporate_file_directory('inc/template-tags.php');
require $evision_corporate_template_tags;

/**
 * Custom functions that act independently of the theme templates.
 */
$evision_corporate_extras_tags = evision_corporate_file_directory('inc/extras.php');
require $evision_corporate_extras_tags;

/**
 * Load Jetpack compatibility file.
 */
$evision_corporate_jetpack_tags = evision_corporate_file_directory('inc/jetpack.php');
require $evision_corporate_jetpack_tags;
