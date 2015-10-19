<?php

if ( ! function_exists( 'evision_corporate_front_contact' ) ) :
    /**
     * contact
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_front_contact() {

        global $evision_corporate_customizer_all_values;

        if( isset( $evision_corporate_customizer_all_values['evision-corporate-contact-enable']) && 1 == $evision_corporate_customizer_all_values['evision-corporate-contact-enable'] && isset($evision_corporate_customizer_all_values['evision-corporate-contact-cf7'])) { ?>
            <!-- *****************************************
                 Contact Form section start
            ****************************************** -->
            <section class="wrapper block-contact block-section block-bg-image" id="evision-corporate-contact">
                <div class="container">
                    <div class="block-title">
                        <?php
                        if(isset($evision_corporate_customizer_all_values['evision-corporate-contact-main-title']) && !empty($evision_corporate_customizer_all_values['evision-corporate-contact-main-title']) ){
                            echo '<h2>'.wp_kses_post( $evision_corporate_customizer_all_values['evision-corporate-contact-main-title'] ).'</h2>';
                            echo '<div class="block-title-divider"><span><i class="fa fa-circle"></i></span></div>';
                        }
                        ?>
                    </div>
                    <?php
                    if(function_exists( 'wpcf7' ) && isset( $evision_corporate_customizer_all_values['evision-corporate-contact-cf7'] )){
                        ?>
                        <div class="row form-container">
                            <div class="col-md-1"></div>
                            <div class="col-md-10">
                                <div class="form-inner row">
                                    <?php
                                    if(function_exists( 'wpcf7' ) && isset( $evision_corporate_customizer_all_values['evision-corporate-contact-cf7'] )){
                                        echo do_shortcode($evision_corporate_customizer_all_values['evision-corporate-contact-cf7']);
                                    }
                                    ?>
                                </div>
                            </div>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </section>
            <!-- *****************************************
                     Contact Form section ends
            ****************************************** -->
        <?php
        }
    }
endif;
add_action( 'evision_corporate_action_front_contact', 'evision_corporate_front_contact', 10 );
