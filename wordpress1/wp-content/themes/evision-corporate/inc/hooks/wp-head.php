<?php
add_action( 'wp_head', 'evision_corporate_wp_head' );

if( ! function_exists( 'evision_corporate_wp_head' ) ) :

    /**
     * evision_corporate_wp_head
     *
     * @since  Evision Corporate 1.0.0
     */
    function evision_corporate_wp_head(){
        global $evision_corporate_customizer_all_values;
        ?>
        <style type="text/css">
            <?php if(isset($evision_corporate_customizer_all_values['evision-corporate-service-background']) && !empty($evision_corporate_customizer_all_values['evision-corporate-service-background'])) { ?>
            .block-service{
                background: url(<?php echo $evision_corporate_customizer_all_values['evision-corporate-service-background']?>) no-repeat center center;
            }
            <?php
            }
            ?>
            <?php if(isset($evision_corporate_customizer_all_values['evision-corporate-testimonial-background']) && !empty($evision_corporate_customizer_all_values['evision-corporate-testimonial-background'])) { ?>
            .block-testimonial{
                background: url(<?php echo $evision_corporate_customizer_all_values['evision-corporate-testimonial-background']?>) no-repeat center center;
            }
            <?php
            }
            ?>
            <?php if(isset($evision_corporate_customizer_all_values['evision-corporate-team-background']) && !empty($evision_corporate_customizer_all_values['evision-corporate-team-background'])) { ?>
            .block-team{
                background:url(<?php echo $evision_corporate_customizer_all_values['evision-corporate-team-background']?>) no-repeat center center;
            }
            <?php
            }
            ?>
            <?php if(isset($evision_corporate_customizer_all_values['evision-corporate-contact-background']) && !empty($evision_corporate_customizer_all_values['evision-corporate-contact-background'])) { ?>
            .block-contact{
                background:url(<?php echo $evision_corporate_customizer_all_values['evision-corporate-contact-background']?>) no-repeat center center;
            }
            <?php
            }
            $evision_corporate_custom_css = $evision_corporate_customizer_all_values['evision-corporate-advanced-custom-css'];
            $evision_corporate_custom_css_output = '';
            if ( ! empty( $evision_corporate_custom_css ) ) {
            $evision_corporate_custom_css_output .= esc_textarea( $evision_corporate_custom_css ) ;
            }
            echo $evision_corporate_custom_css_output;
            ?>
        </style>
    <?php
    }
endif;