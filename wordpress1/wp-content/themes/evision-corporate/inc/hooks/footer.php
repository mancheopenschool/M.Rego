<?php
if ( ! function_exists( 'evision_corporate_after_content' ) ) :
    /**
     * if front page div end
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_after_content() {
        if ( !is_front_page() || ( is_front_page() && 'posts' == get_option( 'show_on_front' ) ) ) {
            echo'</div>';/*<!-- #content -->';*/
        }
    }
endif;
add_action( 'evision_corporate_action_after_content', 'evision_corporate_after_content', 10 );

if ( ! function_exists( 'evision_corporate_footer' ) ) :
    /**
     * Footer content
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_footer() {
        global $evision_corporate_customizer_all_values;
        ?>
        <!-- *****************************************
             Footer section starts
    ****************************************** -->
        <footer id="colophon" role="contentinfo" class="wrapper site-footer dark-color-bg">
            <div class="container bottom-footer">
                <div class="row">
                    <div class="col-md-8">
                        <div class="copyright">
                            <?php
                            if(isset($evision_corporate_customizer_all_values['evision-corporate-footer-copyright'])){
                                echo wp_kses_post( $evision_corporate_customizer_all_values['evision-corporate-footer-copyright'] );
                            }
                            ?>
                            <?php printf( __( 'Theme : %1$s by %2$s.', 'evision-corporate' ), 'eVision Corporate', '<a href="http://evisionthemes.com/" rel="designer" target="_blank">eVision Themes</a>' ); ?>
                            <a href="<?php echo esc_url( __( 'http://wordpress.org/', 'evision-corporate' ) ); ?>" target="_blank"><?php printf( __( 'Proudly powered by %s', 'evision-corporate' ), 'WordPress' ); ?></a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <?php
                        if( isset( $evision_corporate_customizer_all_values['evision-corporate-footer-social-enable'] )  && 1 == $evision_corporate_customizer_all_values['evision-corporate-footer-social-enable']) {
                            ?>
                            <div class="social-group-nav social-icon-only evision-corporate-social-section">
                                <?php wp_nav_menu( array( 'theme_location' => 'evision-corporate-social', 'menu_id' => 'primary-menu' ) ); ?>
                            </div>
                        <?php
                        }
                        ?>
                    </div>
                </div>
        </footer>

        <!-- *****************************************
                 Footer section ends
        ****************************************** -->
    <?php
    }
endif;
add_action( 'evision_corporate_action_footer', 'evision_corporate_footer', 10 );

if ( ! function_exists( 'evision_corporate_page_end' ) ) :
    /**
     * Page end
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_page_end() {
        global $evision_corporate_customizer_all_values;
        if( isset( $evision_corporate_customizer_all_values['evision-corporate-footer-gotop-enable'] )  && 1 == $evision_corporate_customizer_all_values['evision-corporate-footer-gotop-enable']) {
        ?>
            <a class="evision-corporate-back-to-top" href="#page"><i class="fa fa-angle-up"></i></a>
        <?php
        }
        ?>
        </div><!-- #page -->
    <?php
    }
endif;
add_action( 'evision_corporate_action_after', 'evision_corporate_page_end', 10 );