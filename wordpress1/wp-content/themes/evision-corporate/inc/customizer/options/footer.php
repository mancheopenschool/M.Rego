<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
$evision_corporate_sections['evision-corporate-footer'] =
    array(
        'priority'       => 20,
        'title'          => __( 'Footer', 'evision-corporate' ),
        'description'    => __( 'Customize footer section', 'evision-corporate' ),
        'panel'          => 'evision-corporate-options',
    );

/*creating setting control for evision-corporate-footer start*/
$evision_corporate_settings_controls['evision-corporate-footer-copyright'] =
    array(
        'setting' =>     array(
            'default'              => __( 'Copyright 2015 eVision Themes', 'evision-corporate' ),
        ),
        'control' => array(
            'label'                 =>  __( 'Copyright text', 'evision-corporate' ),
            'section'               => 'evision-corporate-footer',
            'type'                  => 'text_html',
            'priority'              => 2,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_settings_controls['evision-corporate-footer-social'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Social icons', 'evision-corporate' ),
            'section'               => 'evision-corporate-footer',
            'type'                  => 'message',
            'priority'              => 4,
            'description' => __( 'Please assign social menu for enabling social icons .', 'evision-corporate' ) . ' <a href="' . admin_url( 'customize.php' ).'?autofocus[section]=nav">'.__( 'Assign now', 'evision-corporate' ) . '</a>'
        )
    );
$evision_corporate_settings_controls['evision-corporate-footer-social-enable'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Enable social icons', 'evision-corporate' ),
            'section'               => 'evision-corporate-footer',
            'type'                  => 'checkbox',
            'priority'              => 6,
            'description'           => ''
        )
    );
$evision_corporate_settings_controls['evision-corporate-footer-gotop-enable'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Enable go to top', 'evision-corporate' ),
            'section'               => 'evision-corporate-footer',
            'type'                  => 'checkbox',
            'priority'              => 8,
            'description'           => ''
        )
    );