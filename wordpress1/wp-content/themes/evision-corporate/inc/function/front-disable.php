<?php
/**
 * check if all sections of front page disable
 *
 * @since Evision Corporate 1.1.0.0
 */
if ( ! function_exists( 'evision_corporate_if_all_disable' ) ) :
    function evision_corporate_if_all_disable() {
        global $evision_corporate_customizer_all_values;
        if(
            ( !isset( $evision_corporate_customizer_all_values['evision-corporate-about-enable']) || ( isset( $evision_corporate_customizer_all_values['evision-corporate-about-enable']) &&  1 != $evision_corporate_customizer_all_values['evision-corporate-about-enable'] ) ) &&
            ( !isset( $evision_corporate_customizer_all_values['evision-corporate-blog-enable']) || ( isset( $evision_corporate_customizer_all_values['evision-corporate-blog-enable']) &&  1 != $evision_corporate_customizer_all_values['evision-corporate-blog-enable'] ) ) &&
            ( !isset( $evision_corporate_customizer_all_values['evision-corporate-client-enable']) || ( isset( $evision_corporate_customizer_all_values['evision-corporate-client-enable']) &&  1 != $evision_corporate_customizer_all_values['evision-corporate-client-enable'] ) ) &&
            ( !isset( $evision_corporate_customizer_all_values['evision-corporate-contact-enable']) || ( isset( $evision_corporate_customizer_all_values['evision-corporate-contact-enable']) &&  1 != $evision_corporate_customizer_all_values['evision-corporate-contact-enable'] ) ) &&
            ( !isset( $evision_corporate_customizer_all_values['evision-corporate-map-enable']) || ( isset( $evision_corporate_customizer_all_values['evision-corporate-map-enable']) &&  1 != $evision_corporate_customizer_all_values['evision-corporate-map-enable'] ) ) &&
            ( !isset( $evision_corporate_customizer_all_values['evision-corporate-client-enable']) || ( isset( $evision_corporate_customizer_all_values['evision-corporate-client-enable']) &&  1 != $evision_corporate_customizer_all_values['evision-corporate-client-enable'] ) ) &&
            ( !isset( $evision_corporate_customizer_all_values['evision-corporate-service-enable']) || ( isset( $evision_corporate_customizer_all_values['evision-corporate-service-enable']) &&  1 != $evision_corporate_customizer_all_values['evision-corporate-service-enable'] ) ) &&
            ( !isset( $evision_corporate_customizer_all_values['evision-corporate-slider-enable']) || ( isset( $evision_corporate_customizer_all_values['evision-corporate-slider-enable']) &&  1 != $evision_corporate_customizer_all_values['evision-corporate-slider-enable'] ) ) &&
            ( !isset( $evision_corporate_customizer_all_values['evision-corporate-team-enable']) || ( isset( $evision_corporate_customizer_all_values['evision-corporate-team-enable']) &&  1 != $evision_corporate_customizer_all_values['evision-corporate-team-enable'] ) ) &&
            ( !isset( $evision_corporate_customizer_all_values['evision-corporate-testimonial-enable']) || ( isset( $evision_corporate_customizer_all_values['evision-corporate-testimonial-enable']) &&  1 != $evision_corporate_customizer_all_values['evision-corporate-testimonial-enable'] ) )
        )
        {
            return 0;
        }
        else{
            return 1;
        }
    }
endif;