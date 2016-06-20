<?php
add_action( 'tgmpa_register', 'evision_corporate_recommended_plugins' );

if( ! function_exists( 'evision_corporate_recommended_plugins' ) ) :

  /**
   * Recommended plugins
   *
   * @since  Evision Corporate 1.0.0
   */
  function evision_corporate_recommended_plugins(){
      $evision_corporate_plugins = array(
          array(
              'name'     => __( 'Contact Form 7', 'evision-corporate' ),
              'slug'     => 'contact-form-7',
              'required' => false,
          )
      );
      $evision_corporate_plugins_config = array(
          'dismissable' => true,
      );
      tgmpa( $evision_corporate_plugins, $evision_corporate_plugins_config );
  }
endif;