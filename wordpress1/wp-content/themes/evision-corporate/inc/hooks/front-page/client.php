<?php
if ( ! function_exists( 'evision_corporate_front_client' ) ) :
    /**
     * client
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_front_client() {

        global $evision_corporate_customizer_all_values;
        $evision_corporate_clients = coder_get_repeated_all_value('evision-corporate-client');

        if( isset( $evision_corporate_customizer_all_values['evision-corporate-client-enable']) && 1 == $evision_corporate_customizer_all_values['evision-corporate-client-enable'] && null != $evision_corporate_clients ) { ?>
            <!-- *****************************************
                 client section start
            ****************************************** -->
            <section class="wrapper block-client block-section block-solid-bg" id="evision-corporate-client">
                <div class="container">
                    <div class="row">
                        <div class="logos-container">
                            <ul class="row-same-height">
                                <?php foreach( $evision_corporate_clients as $evision_corporate_client ) {
                                    if( isset( $evision_corporate_client['evision-corporate-client-image'] ) && !empty( $evision_corporate_client['evision-corporate-client-image'] ) ) {
                                        ?>
                                        <li class="col-xs-12 col-sm-12 col-md-4 col-md-height">
                                            <img src="<?php echo esc_url( $evision_corporate_client['evision-corporate-client-image'] ); ?>" alt="<?php _e('client logo','evision-corporate');?>">
                                        </li>
                                    <?php
                                    }
                                }
                                ?>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <!-- *****************************************
                     client section ends
            ****************************************** -->
        <?php
        }
    }
endif;
add_action( 'evision_corporate_action_front_client', 'evision_corporate_front_client', 10 );
