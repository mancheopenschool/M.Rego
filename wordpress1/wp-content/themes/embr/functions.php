<?php
/**
 * embr functions and definitions
 *
 * @package embr
 */


if ( ! function_exists( 'embr_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function embr_setup() {
	
	global $content_width;
	if ( ! isset( $content_width ) ) {
		$content_width = 640; /* pixels */
	}

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on embr, use a find and replace
	 * to change 'embr' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'embr', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	//add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'embr' ),
	) );
	
	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
	) );

	/*
	 * Enable support for Post Formats.
	 * See http://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside', 'image', 'video', 'quote', 'link'
	) );

	// Setup the WordPress core custom background feature.
	if ( get_stylesheet_directory() == get_template_directory() ) {
		add_theme_support( 'custom-background', apply_filters( 'embr_custom_background_args', array(
			'default-color' => '555355',
			'default-image' => get_template_directory_uri() . '/skins/images/embr/page_bg.png',
		) ) );			
	}else {
		add_theme_support( 'custom-background', apply_filters( 'embr_custom_background_args', array(
			'default-color' => '555355',
			'default-image' => get_stylesheet_directory_uri() . 'images/page_bg.png',
		) ) );					  
	}
	  	
}
endif; // embr_setup
add_action( 'after_setup_theme', 'embr_setup' );

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function embr_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'embr' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
	register_sidebar( array(
		'name'          => __( 'Front Page Sidebar', 'embr' ),
		'id'            => 'sidebar-front',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );	
	register_sidebar( array(
		'name'          => __( 'Footer Left Widget Area', 'embr' ),
		'id'            => 'sidebar-footer-left',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
	register_sidebar( array(
		'name'          => __( 'Footer Center Left Widget Area', 'embr' ),
		'id'            => 'sidebar-footer-center-left',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
	register_sidebar( array(
		'name'          => __( 'Footer Center Right Widget Area', 'embr' ),
		'id'            => 'sidebar-footer-center-right',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
	register_sidebar( array(
		'name'          => __( 'Footer Right Widget Area', 'embr' ),
		'id'            => 'sidebar-footer-right',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );				
}
add_action( 'widgets_init', 'embr_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function embr_scripts() {

	wp_enqueue_style( 'embr-google-fonts', '//fonts.googleapis.com/css?family=Open+Sans|Titillium+Web:400,700' );
		
	if ( is_child_theme () ) {
		wp_enqueue_style( 'embr-parent-style', get_template_directory_uri().'/style.css' );
	}
		
	wp_enqueue_style( 'embr-style', get_stylesheet_uri() );
	
	wp_enqueue_script( 'embr-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20120206', true );

	wp_enqueue_script( 'embr-tinynav', get_template_directory_uri() . '/js/tinynav.min.js', array('jquery'), false, false );
	
	wp_enqueue_script( 'embr-general', get_template_directory_uri() . '/js/general.js', array(), false, true );
	wp_localize_script( 'embr-general', 'embr_tinynav_header', array( 'header' => __('Menu', 'embr' ) ) );
	
	wp_enqueue_script( 'embr-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'embr_scripts' );

function embr_header_one_background(){
        echo '<style> .header-one{';
		if( get_theme_mod('embr_header_one_image') ) {
        	$embr_header_one_background = get_theme_mod('embr_header_one_image');
		}else{
        	$embr_header_one_background = get_template_directory_uri().'/skins/images/header.jpg';
		}
		echo 'background:url('.$embr_header_one_background.') no-repeat center center;';
		echo '}</style>';
}
add_action('wp_head', 'embr_header_one_background');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
