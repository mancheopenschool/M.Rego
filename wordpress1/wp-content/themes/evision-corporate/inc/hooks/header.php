<?php

if ( ! function_exists( 'evision_corporate_set_global' ) ) :
    /**
     * Doctype Declaration
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_set_global() {
        /*Getting saved values start*/
        $GLOBALS['evision_corporate_customizer_all_values'] = coder_get_customizer_all_values();
        /*Getting saved values end*/
    }
endif;
add_action( 'evision_corporate_action_before_head', 'evision_corporate_set_global', 0 );

if ( ! function_exists( 'evision_corporate_doctype' ) ) :
    /**
     * Doctype Declaration
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_doctype() {
        /*Getting saved values start*/
        $GLOBALS['evision_corporate_customizer_all_values'] = coder_get_customizer_all_values();
        /*Getting saved values end*/
        ?>
        <!DOCTYPE html> <html <?php language_attributes(); ?>>
    <?php
    }
endif;
add_action( 'evision_corporate_action_before_head', 'evision_corporate_doctype', 10 );

if ( ! function_exists( 'evision_corporate_before_wp_head' ) ) :
    /**
     * Before wp head codes
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_before_wp_head() {
        global $evision_corporate_customizer_all_values;
        ?>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php
        if ( isset($evision_corporate_customizer_all_values['evision-corporate-general-favicon']) && !empty($evision_corporate_customizer_all_values['evision-corporate-general-favicon'])){
            /*Favicons*/
            echo '<link rel="shortcut icon" href="'.esc_url($evision_corporate_customizer_all_values['evision-corporate-general-favicon']).'">';
        }
        ?>
        <?php
        if ( isset($evision_corporate_customizer_all_values['evision-corporate-general-webclipicon']) && !empty($evision_corporate_customizer_all_values['evision-corporate-general-webclipicon'])){
            /*Web clip icon*/
            echo '    <link rel="apple-touch-icon" href="'.esc_url($evision_corporate_customizer_all_values['evision-corporate-general-webclipicon']).'" sizes="57x57">';
        }
        ?>
        <link rel="profile" href="<?php echo esc_url('http://gmpg.org/xfn/11')?>">
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <?php
    }
endif;
add_action( 'evision_corporate_action_before_wp_head', 'evision_corporate_before_wp_head', 10 );

if ( ! function_exists( 'evision_corporate_body_class' ) ) :
    /**
     * add body class
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_body_class( $evision_corporate_body_classes ) {
        if(!is_front_page()){
            global $evision_corporate_customizer_all_values;
            if( isset($evision_corporate_customizer_all_values['evision-corporate-layout-page']) ){
                $evision_corporate_layout_page = $evision_corporate_customizer_all_values['evision-corporate-layout-page'];
                if( 'sidebar-left' == $evision_corporate_layout_page ){
                    $evision_corporate_body_classes[] = 'evision-corporate-sidebar-left';
                }
                elseif( 'sidebar-right' == $evision_corporate_layout_page ){
                    $evision_corporate_body_classes[] = 'evision-corporate-sidebar-right';
                }
                elseif( 'sidebar-no' == $evision_corporate_layout_page ){
                    $evision_corporate_body_classes[] = 'evision-corporate-no-sidebar';
                }
                else{
                    $evision_corporate_body_classes[] = 'evision-corporate-sidebar-right';
                }
            }
            else{
                $evision_corporate_body_classes[] = 'evision-corporate-sidebar-right';
            }
        }
        return $evision_corporate_body_classes;

    }
endif;
add_action( 'body_class', 'evision_corporate_body_class', 10, 1);

if ( ! function_exists( 'evision_corporate_body_attr' ) ) :
    /**
     * add body attributes
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_body_attr() {
        echo 'data-spy="scroll" data-target="#site-navigation"';
    }
endif;
//add_action( 'evision_corporate_action_body_attr', 'evision_corporate_body_attr', 10 );

if ( ! function_exists( 'evision_corporate_before_page_start' ) ) :
    /**
     * intro loader and backto top
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_before_page_start() {
        ?>
        <div id="evision-corporate-intro-loader" style="display: none">
            <div id="evision-corporate-mask"><?php _e('Loading','evision-corporate')?></div>
        </div>
    <?php
    }
endif;
add_action( 'evision_corporate_action_before', 'evision_corporate_before_page_start', 10 );

if ( ! function_exists( 'evision_corporate_page_start' ) ) :
    /**
     * page start
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
function evision_corporate_page_start() {
    ?>
<div id="page" class="hfeed site">
<?php
}
endif;
add_action( 'evision_corporate_action_before', 'evision_corporate_page_start', 15 );

if ( ! function_exists( 'evision_corporate_skip_to_content' ) ) :
    /**
     * Skip to content
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_skip_to_content() {
        ?>
        <a class="skip-link screen-reader-text" href="#content" title="link"><?php esc_html_e( 'Skip to content', 'evision-corporate' ); ?></a>
    <?php
    }
endif;
add_action( 'evision_corporate_action_before_header', 'evision_corporate_skip_to_content', 10 );

if ( ! function_exists( 'evision_corporate_header' ) ) :
    /**
     * Main header
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_header() {
        global $evision_corporate_customizer_all_values;
        ?>
        <header class="wrapper wrap-header navbar-fixed-top" role="banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <h1 class="site-title">
                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" title="<?php _e('link','evision-corporate');?>">
                                <?php if ( isset($evision_corporate_customizer_all_values['evision-corporate-header-logo']) && !empty($evision_corporate_customizer_all_values['evision-corporate-header-logo'])) : ?>
                                    <img src="<?php echo esc_url($evision_corporate_customizer_all_values['evision-corporate-header-logo']); ?>" alt="<?php _e('evision-corporate-image', 'evision-corporate')?>">
                                <?php
                                else :
                                    bloginfo( 'name' ); ?>
                                <?php if ( isset($evision_corporate_customizer_all_values['evision-corporate-enable-tagline']) && 1 == $evision_corporate_customizer_all_values['evision-corporate-enable-tagline'] ) : ?>
                                    <h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
                                <?php endif; ?>
                                <?php
                                endif; // End header image check. ?>
                            </a>
                        </h1>
                    </div>
                    <div class="col-md-9">
                        <nav id="site-navigation" class="main-navigation" role="navigation">
                            <div class="nav nav-tabs">
                                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><i class="fa fa-bars"></i></button>
                                <?php
                                if ( !is_front_page() ) {
                                    if ( has_nav_menu( 'evision-corporate-inner-page' ) ) :
                                        wp_nav_menu( array( 'theme_location' => 'evision-corporate-inner-page', 'menu_id' => 'evision-corporate-inner-page' ) );
                                    endif;
                                }
                                else {
                                    if ( has_nav_menu( 'evision-corporate-front-page' ) ) :
                                        wp_nav_menu( array( 'theme_location' => 'evision-corporate-front-page', 'menu_id' => 'evision-corporate-front-page' ) );
                                    endif;
                                }
                                ?>
                            </div>
                        </nav><!-- #site-navigation -->
                    </div>
                </div>

        </header>
    <?php
    }
endif;
add_action( 'evision_corporate_action_header', 'evision_corporate_header', 10 );


if ( ! function_exists( 'evision_corporate_before_content' ) ) :
    /**
     * Before main content
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_before_content() {
        if ( !is_front_page() || ( is_front_page() && 'posts' == get_option( 'show_on_front' ) ) ) {
            echo'<div id="content" class="site-content">';
        }
    }
endif;
add_action( 'evision_corporate_action_after_header', 'evision_corporate_before_content', 10 );
