<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
$evision_corporate_sections['evision-corporate-advanced'] =
    array(
        'priority'       => 20,
        'title'          => __( 'Advanced', 'evision-corporate' ),
        'description'    => __( 'Write custom css here to change looks', 'evision-corporate' ),
        'panel'          => 'evision-corporate-options',
    );

/*creating setting control for evision-corporate-advanced start*/
$evision_corporate_settings_controls['evision-corporate-advanced-custom-css'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Custom css', 'evision-corporate' ),
            'section'               => 'evision-corporate-advanced',
            'type'                  => 'textarea_css',
            'priority'              => 2,
            'description'           => '',
            'active_callback'       => ''
        )
    );