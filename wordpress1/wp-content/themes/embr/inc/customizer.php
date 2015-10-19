<?php
/**
 * embr Theme Customizer
 *
 * @package embr
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function embr_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	/* Header Section */
	$wp_customize->add_panel( 'embr_header_options', array(
		'priority'       => 600,
		'capability'     => 'edit_theme_options',
		'title'      => __('Header Options', 'embr'),
	) );
	
   	$wp_customize->add_section( 'embr_header_type' , array(
		'title'      => __('Select Header Type', 'embr'),
		'panel'  => 'embr_header_options',
		'priority'   => 100,
   	) );
	$wp_customize->add_setting(
		'embr_header_type', array(
        'default'        => 'one',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'embr_sanitize_header_option',
    ));
    $wp_customize->add_control( 'embr_header_type', array(
        'label'   => __('Select custom header or header one:', 'embr'),
        'section' => 'embr_header_type',
        'type'    => 'select',
		'priority'   => 100,
        'choices' => array('one'=>__('Header One', 'embr'), 'two'=>__('Custom Header', 'embr')),
    ));		
	
   	$wp_customize->add_section( 'header_image' , array(
		'title'      => __('Custom Header Settings', 'embr'),
		'panel'  => 'embr_header_options',
		'priority'   => 200,
   	) );
	
   	$wp_customize->add_section( 'embr_header_one' , array(
		'title'      => __('Header One Settings', 'embr'),
		'panel'  => 'embr_header_options',
		'priority'   => 300,
   	) );
	$wp_customize->add_setting(
		'embr_header_one_image', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
	$wp_customize->add_control(
		   new WP_Customize_Image_Control(
			   $wp_customize,
			   'embr_header_one_image',
			   array(
				   'label'          => __( 'Upload a 2000x750 for header Image', 'embr' ),
				   'section'        => 'embr_header_one',
				   'priority'   => 100,
			   )
		   )
	);
	$wp_customize->add_setting(
		'embr_header_one_name', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_header_one_name', array(
        'label'   => __('Header Headline :', 'embr'),
        'section' => 'embr_header_one',
        'type'    => 'text',
		'priority'   => 140,
    ));
	$wp_customize->add_setting(
		'embr_header_one_text', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_header_one_text', array(
        'label'   => __('Header Text :', 'embr'),
        'section' => 'embr_header_one',
        'type'    => 'text',
		'priority'   => 140,
    ));
	$wp_customize->add_setting(
		'embr_header_one_cta', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_header_one_cta', array(
        'label'   => __('Header CTA :', 'embr'),
        'section' => 'embr_header_one',
        'type'    => 'text',
		'priority'   => 150,
    ));
	$wp_customize->add_setting(
		'embr_header_one_cta_link', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_header_one_cta_link', array(
        'label'   => __('Header CTA Link:', 'embr'),
        'section' => 'embr_header_one',
        'type'    => 'text',
		'priority'   => 160,
    ));						
	
	/* Front Page Section */	
	$wp_customize->add_panel( 'embr_frontpage_options', array(
		'priority'       => 700,
		'capability'     => 'edit_theme_options',
		'title'      => __('Static Front Page Options', 'embr'),
	) );	
	
   	$wp_customize->add_section( 'static_front_page' , array(
		'title'      => __('Static front page', 'embr'),
		'panel'  => 'embr_frontpage_options',
		'priority'   => 100,
   	) );
	$wp_customize->add_setting(
		'embr_show_frontpage_posts', array(
        'default'        => 'no',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'embr_sanitize_yes_no',
    ));
    $wp_customize->add_control( 'embr_show_frontpage_posts', array(
        'label'   => __('Disable both posts and pages on front page:', 'embr'),
        'section' => 'static_front_page',
        'type'    => 'select',
		'priority'   => 900,
        'choices' => array('yes'=>__('Yes', 'embr'), 'no'=>__('No', 'embr')),
    ));	


   	$wp_customize->add_section( 'embr_frontpage_welcome' , array(
		'title'      => __('Front Page Welcome Section', 'embr'),
		'panel'  => 'embr_frontpage_options',
		'priority'   => 200,
   	) );
	$wp_customize->add_setting(
		'embr_frontpage_welcome_headline', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_welcome_headline', array(
        'label'   => __('Front Page Welcome Headline :', 'embr'),
        'section' => 'embr_frontpage_welcome',
        'type'    => 'text',
		'priority'   => 100,
    ));		
	$wp_customize->add_setting(
		'embr_frontpage_welcome_text', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_welcome_text', array(
        'label'   => __('Front Page Welcome Text :', 'embr'),
        'section' => 'embr_frontpage_welcome',
        'type'    => 'text',
		'priority'   => 110,
    ));
	
   	$wp_customize->add_section( 'embr_frontpage_left_product' , array(
		'title'      => __('Front Page Left Product Section', 'embr'),
		'panel'  => 'embr_frontpage_options',
		'priority'   => 300,
   	) );
	$wp_customize->add_setting(
		'embr_frontpage_left_large', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
	$wp_customize->add_control(
		   new WP_Customize_Image_Control(
			   $wp_customize,
			   'embr_frontpage_left_large',
			   array(
				   'label'          => __( 'Upload a 720x420 for Left Section Large Image', 'embr' ),
				   'section'        => 'embr_frontpage_left_product',
				   'priority'   => 120,
			   )
		   )
	);
	$wp_customize->add_setting(
		'embr_frontpage_left_small', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
	$wp_customize->add_control(
		   new WP_Customize_Image_Control(
			   $wp_customize,
			   'embr_frontpage_left_small',
			   array(
				   'label'          => __( 'Upload a 130x130 for Left Section Small Image', 'embr' ),
				   'section'        => 'embr_frontpage_left_product',
				   'priority'   => 130,
			   )
		   )
	);
	$wp_customize->add_setting(
		'embr_frontpage_left_name', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_left_name', array(
        'label'   => __('Left Section Name :', 'embr'),
        'section' => 'embr_frontpage_left_product',
        'type'    => 'text',
		'priority'   => 140,
    ));
	$wp_customize->add_setting(
		'embr_frontpage_left_text', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_left_text', array(
        'label'   => __('Left Section Text :', 'embr'),
        'section' => 'embr_frontpage_left_product',
        'type'    => 'text',
		'priority'   => 140,
    ));
	$wp_customize->add_setting(
		'embr_frontpage_left_cta', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_left_cta', array(
        'label'   => __('Left Section CTA :', 'embr'),
        'section' => 'embr_frontpage_left_product',
        'type'    => 'text',
		'priority'   => 150,
    ));
	$wp_customize->add_setting(
		'embr_frontpage_left_cta_link', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_left_cta_link', array(
        'label'   => __('Left Section CTA Link:', 'embr'),
        'section' => 'embr_frontpage_left_product',
        'type'    => 'text',
		'priority'   => 160,
    ));	
	
   	$wp_customize->add_section( 'embr_frontpage_center_product' , array(
		'title'      => __('Front Page Center Product  Section', 'embr'),
		'panel'  => 'embr_frontpage_options',
		'priority'   => 400,
   	) );
	$wp_customize->add_setting(
		'embr_frontpage_center_large', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
	$wp_customize->add_control(
		   new WP_Customize_Image_Control(
			   $wp_customize,
			   'embr_frontpage_center_large',
			   array(
				   'label'          => __( 'Upload a 720x420 for Center Section Large Image', 'embr' ),
				   'section'        => 'embr_frontpage_center_product',
				   'priority'   => 170,
			   )
		   )
	);
	$wp_customize->add_setting(
		'embr_frontpage_center_small', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
	$wp_customize->add_control(
		   new WP_Customize_Image_Control(
			   $wp_customize,
			   'embr_frontpage_center_small',
			   array(
				   'label'          => __( 'Upload a 130x130 for Center Section Small Image', 'embr' ),
				   'section'        => 'embr_frontpage_center_product',
				   'priority'   => 180,
			   )
		   )
	);
	$wp_customize->add_setting(
		'embr_frontpage_center_name', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_center_name', array(
        'label'   => __('center Section Name :', 'embr'),
        'section' => 'embr_frontpage_center_product',
        'type'    => 'text',
		'priority'   => 190,
    ));
	$wp_customize->add_setting(
		'embr_frontpage_center_text', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_center_text', array(
        'label'   => __('center Section Text :', 'embr'),
        'section' => 'embr_frontpage_center_product',
        'type'    => 'text',
		'priority'   => 200,
    ));
	$wp_customize->add_setting(
		'embr_frontpage_center_cta', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_center_cta', array(
        'label'   => __('center Section CTA :', 'embr'),
        'section' => 'embr_frontpage_center_product',
        'type'    => 'text',
		'priority'   => 210,
    ));
	$wp_customize->add_setting(
		'embr_frontpage_center_cta_link', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_center_cta_link', array(
        'label'   => __('center Section CTA Link:', 'embr'),
        'section' => 'embr_frontpage_center_product',
        'type'    => 'text',
		'priority'   => 220,
    ));	
	
   	$wp_customize->add_section( 'embr_frontpage_right_product' , array(
		'title'      => __('Front Page Right Product  Section', 'embr'),
		'panel'  => 'embr_frontpage_options',
		'priority'   => 500,
   	) );
	$wp_customize->add_setting(
		'embr_frontpage_right_large', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
	$wp_customize->add_control(
		   new WP_Customize_Image_Control(
			   $wp_customize,
			   'embr_frontpage_right_large',
			   array(
				   'label'          => __( 'Upload a 720x420 for Right Section Large Image', 'embr' ),
				   'section'        => 'embr_frontpage_right_product',
				   'priority'   => 230,
			   )
		   )
	);
	$wp_customize->add_setting(
		'embr_frontpage_right_small', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
	$wp_customize->add_control(
		   new WP_Customize_Image_Control(
			   $wp_customize,
			   'embr_frontpage_right_small',
			   array(
				   'label'          => __( 'Upload a 130x130 for Right Section Small Image', 'embr' ),
				   'section'        => 'embr_frontpage_right_product',
				   'priority'   => 240,
			   )
		   )
	);
	$wp_customize->add_setting(
		'embr_frontpage_right_name', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_right_name', array(
        'label'   => __('right Section Name :', 'embr'),
        'section' => 'embr_frontpage_right_product',
        'type'    => 'text',
		'priority'   => 250,
    ));
	$wp_customize->add_setting(
		'embr_frontpage_right_text', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_right_text', array(
        'label'   => __('right Section Text :', 'embr'),
        'section' => 'embr_frontpage_right_product',
        'type'    => 'text',
		'priority'   => 260,
    ));
	$wp_customize->add_setting(
		'embr_frontpage_right_cta', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_right_cta', array(
        'label'   => __('right Section CTA :', 'embr'),
        'section' => 'embr_frontpage_right_product',
        'type'    => 'text',
		'priority'   => 270,
    ));
	$wp_customize->add_setting(
		'embr_frontpage_right_cta_link', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_frontpage_right_cta_link', array(
        'label'   => __('right Section CTA Link:', 'embr'),
        'section' => 'embr_frontpage_right_product',
        'type'    => 'text',
		'priority'   => 280,
    ));
								
				
	/* Footer Section */
	$wp_customize->add_panel( 'embr_footer_options', array(
		'priority'       => 800,
		'capability'     => 'edit_theme_options',
		'title'      => __('Footer Section', 'embr'),
	) );
	
   	$wp_customize->add_section( 'embr_footer_quote_options' , array(
		'title'      => __('Quote Options', 'embr'),
		'panel'  => 'embr_footer_options',
		'priority'   => 100,
   	) );
	$wp_customize->add_setting(
		'embr_show_footer_quote_section', array(
        'default'        => 'yes',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'embr_sanitize_yes_no',
    ));
    $wp_customize->add_control( 'embr_show_footer_quote_section', array(
        'label'   => __('Show Footer Section:', 'embr'),
        'section' => 'embr_footer_quote_options',
        'type'    => 'select',
		'priority'   => 100,
        'choices' => array('yes'=>__('Yes', 'embr'), 'no'=>__('No', 'embr')),
    ));
	$wp_customize->add_setting(
		'embr_footer_quote_text', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_footer_quote_text', array(
        'label'   => __('Quote Text :', 'embr'),
        'section' => 'embr_footer_quote_options',
        'type'    => 'text',
		'priority'   => 110,
    ));
	$wp_customize->add_setting(
		'embr_footer_quote_text_name', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'embr_footer_quote_text_name', array(
        'label'   => __('Client Name :', 'embr'),
        'section' => 'embr_footer_quote_options',
        'type'    => 'text',
		'priority'   => 120,
    ));	
	
   	$wp_customize->add_section( 'embr_footer_social_options' , array(
		'title'      => __('Social Options', 'embr'),
		'panel'  => 'embr_footer_options',
		'priority'   => 200,
   	) );
	$wp_customize->add_setting(
		'embr_show_social_section', array(
        'default'        => 'yes',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'embr_sanitize_yes_no',
    ));
    $wp_customize->add_control( 'embr_show_social_section', array(
        'label'   => __('Show Social Section:', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'select',
		'priority'   => 110,
        'choices' => array('yes'=>__('Yes', 'embr'), 'no'=>__('No', 'embr')),
    ));
	$wp_customize->add_setting(
		'embr_social_facebook', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_facebook', array(
        'label'   => __('Facebook Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 120,
    ));
	$wp_customize->add_setting(
		'embr_social_twitter', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_twitter', array(
        'label'   => __('Twitter Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 130,
    ));
	$wp_customize->add_setting(
		'embr_social_behance', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_behance', array(
        'label'   => __('Behance Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 140,
    ));
	$wp_customize->add_setting(
		'embr_social_bitbucket', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_bitbucket', array(
        'label'   => __('BitBucket Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 150,
    ));
	$wp_customize->add_setting(
		'embr_social_github', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_github', array(
        'label'   => __('GitHub Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 160,
    ));
	$wp_customize->add_setting(
		'embr_social_instagram', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_instagram', array(
        'label'   => __('InstaGram Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 169,
    ));
	$wp_customize->add_setting(
		'embr_social_youtube', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_youtube', array(
        'label'   => __('YouTube Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 170,
    ));
	$wp_customize->add_setting(
		'embr_social_dribble', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_dribble', array(
        'label'   => __('Dribble Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 180,
    ));
	$wp_customize->add_setting(
		'embr_social_googleplus', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_googleplus', array(
        'label'   => __('Google Plus Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 190,
    ));
	$wp_customize->add_setting(
		'embr_social_tumblr', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_tumblr', array(
        'label'   => __('Tunblr Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 200,
    ));	
	$wp_customize->add_setting(
		'embr_social_vine', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_vine', array(
        'label'   => __('Vine Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 210,
    ));
	$wp_customize->add_setting(
		'embr_social_wp', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_wp', array(
        'label'   => __('WordPress Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 220,
    ));
	$wp_customize->add_setting(
		'embr_social_spotify', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_spotify', array(
        'label'   => __('Spotify Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 230,
    ));
	$wp_customize->add_setting(
		'embr_social_soundcloud', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_soundcloud', array(
        'label'   => __('SoundCloud Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 240,
    ));
	$wp_customize->add_setting(
		'embr_social_reddit', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_reddit', array(
        'label'   => __('Reddit Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 250,
    ));
	$wp_customize->add_setting(
		'embr_social_pinterest', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_pinterest', array(
        'label'   => __('Pinterest Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 260,
    ));
	$wp_customize->add_setting(
		'embr_social_linkedin', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_linkedin', array(
        'label'   => __('LinkedIn Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 270,
    ));
	$wp_customize->add_setting(
		'embr_social_flickr', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_flickr', array(
        'label'   => __('Flickr Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 280,
    ));
	$wp_customize->add_setting(
		'embr_social_stackexchange', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'embr_social_stackexchange', array(
        'label'   => __('StackExchange Link :', 'embr'),
        'section' => 'embr_footer_social_options',
        'type'    => 'text',
		'priority'   => 290,
    ));										
	
	/* Single Post Section */
   	$wp_customize->add_section( 'embr_single_post' , array(
		'title'      => __('Single Post Options', 'embr'),
		'priority'   => 900,
   	) );

	$wp_customize->add_setting(
		'embr_show_title_post', array(
        'default'        => 'yes',
		'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'embr_sanitize_yes_no',
    ));
	$wp_customize->add_control( 'embr_show_title_post', array(
        'label'   => __('Show Title on Single Post:', 'embr'),
        'section' => 'embr_single_post',
        'type'    => 'select',
		'priority'   => 200,
        'choices' => array('yes'=>__('Yes', 'embr'), 'no'=>__('No', 'embr')),
    ));
	$wp_customize->add_setting(
		'embr_show_meta_post', array(
        'default'        => 'yes',
		'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'embr_sanitize_yes_no',
    ));
	$wp_customize->add_control( 'embr_show_meta_post', array(
        'label'   => __('Show Meta on Single Post:', 'embr'),
        'section' => 'embr_single_post',
        'type'    => 'select',
		'priority'   => 300,
        'choices' => array('yes'=>__('Yes', 'embr'), 'no'=>__('No', 'embr')),
    ));

	$wp_customize->add_setting(
		'embr_show_cats_post', array(
        'default'        => 'yes',
		'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'embr_sanitize_yes_no',
    ));
	$wp_customize->add_control( 'embr_show_cats_post', array(
        'label'   => __('Show Categories on Single Post:', 'embr'),
        'section' => 'embr_single_post',
        'type'    => 'select',
		'priority'   => 400,
        'choices' => array('yes'=>__('Yes', 'embr'), 'no'=>__('No', 'embr')),
    ));
	$wp_customize->add_setting(
		'embr_show_tags_post', array(
        'default'        => 'yes',
		'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'embr_sanitize_yes_no',
    ));
	$wp_customize->add_control( 'embr_show_tags_post', array(
        'label'   => __('Show Tags on Single Post:', 'embr'),
        'section' => 'embr_single_post',
        'type'    => 'select',
		'priority'   => 500,
        'choices' => array('yes'=>__('Yes', 'embr'), 'no'=>__('No', 'embr')),
    ));

	$wp_customize->add_setting(
		'embr_show_nav_post', array(
        'default'        => 'yes',
		'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'embr_sanitize_yes_no',
    ));
	$wp_customize->add_control( 'embr_show_nav_post', array(
        'label'   => __('Show Nav Section on Single Post:', 'embr'),
        'section' => 'embr_single_post',
        'type'    => 'select',
		'priority'   => 700,
        'choices' => array('yes'=>__('Yes', 'embr'), 'no'=>__('No', 'embr')),
    ));
	
	/* Page Section */
   	$wp_customize->add_section( 'embr_page_options' , array(
		'title'      => __('Page Options', 'embr'),
		'priority'   => 910,
   	) );

	$wp_customize->add_setting(
		'embr_show_title_page', array(
        'default'        => 'yes',
		'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'embr_sanitize_yes_no',
    ));
	$wp_customize->add_control( 'embr_show_title_page', array(
        'label'   => __('Show Title on Page:', 'embr'),
        'section' => 'embr_page_options',
        'type'    => 'select',
		'priority'   => 100,
        'choices' => array('yes'=>__('Yes', 'embr'), 'no'=>__('No', 'embr')),
    ));
	
	/* Archive Section */
   	$wp_customize->add_section( 'embr_category_page' , array(
		'title'      => __('Archive Pages Options', 'embr'),
		'priority'   => 920,
   	) );

	$wp_customize->add_setting(
		'embr_show_excerpt_categories', array(
        'default'        => 'yes',
		'capability'     => 'edit_theme_options',
		'sanitize_callback' => 'embr_sanitize_yes_no',
    ));
	$wp_customize->add_control( 'embr_show_excerpt_categories', array(
        'label'   => __('Show tags/categories on Archive Pages:', 'embr'),
        'section' => 'embr_category_page',
        'type'    => 'select',
		'priority'   => 200,
        'choices' => array('yes'=>__('Yes', 'embr'), 'no'=>__('No', 'embr')),
    ));	
	
}
add_action( 'customize_register', 'embr_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function embr_customize_preview_js() {
	wp_enqueue_script( 'embr_customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20130508', true );
}
add_action( 'customize_preview_init', 'embr_customize_preview_js' );

function embr_sanitize_yes_no( $value ) {
    if ( ! in_array( $value, array( 'yes', 'no' ) ) ){
        $value = 'yes';
	}
    return $value;
}
function embr_sanitize_header_option( $value ) {
    if ( ! in_array( $value, array( 'one', 'two' ) ) ){
        $value = 'one';
	}
    return $value;
}