<?php
if ( ! function_exists( 'evision_corporate_sidebar' ) ) :
/**
 * Sidebar
 *
 * @since eVision Corporate 1.0.0
 *
 * @param null
 * @return null
 *
 */
function evision_corporate_sidebar() {
    global $evision_corporate_customizer_all_values;
    if( isset($evision_corporate_customizer_all_values['evision-corporate-layout-page']) ){
        $evision_corporate_layout_page = $evision_corporate_customizer_all_values['evision-corporate-layout-page'];
        if( 'sidebar-no' == $evision_corporate_layout_page ){
            $evision_corporate_sidebar_active = 0;
        }
        else {
            $evision_corporate_sidebar_active = 1;
        }
    }
    else{
        $evision_corporate_sidebar_active = 1;
    }

    if ( ! is_active_sidebar( 'sidebar-1' ) || 0 == $evision_corporate_sidebar_active ) {
        return;
    }
    ?>

    <div id="secondary" class="widget-area" role="complementary">
        <?php dynamic_sidebar( 'sidebar-1' ); ?>
    </div><!-- #secondary -->
<?php
}
endif;
add_action( 'evision_corporate_action_sidebar', 'evision_corporate_sidebar', 10 );
