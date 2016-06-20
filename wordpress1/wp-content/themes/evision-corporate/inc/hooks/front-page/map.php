<?php
if ( ! function_exists( 'evision_corporate_front_map' ) ) :
    /**
     * map
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_front_map() {

        global $evision_corporate_customizer_all_values;

        if( isset( $evision_corporate_customizer_all_values['evision-corporate-map-enable']) && 1 == $evision_corporate_customizer_all_values['evision-corporate-map-enable'] ) { ?>
            <!-- *****************************************
                 Map section start
            ****************************************** -->

            <section class="wrapper block-section block-full-section" id="evision-corporate-map">
                <div id="map-canvas" style="width: 100%;height: 470px"></div>
            </section>

            <!-- *****************************************
                     Map section ends
            ****************************************** -->
        <?php
        }
    }
endif;
add_action( 'evision_corporate_action_front_map', 'evision_corporate_front_map', 10 );
