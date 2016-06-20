<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
$evision_corporate_sections['evision-corporate-header'] =
    array(
        'priority'       => 20,
        'title'          => __( 'Header', 'evision-corporate' ),
        'description'    => __( 'Customize header section', 'evision-corporate' ),
        'panel'          => 'evision-corporate-options',
    );

/*creating setting control for evision-corporate-header start*/
$evision_corporate_settings_controls['evision-corporate-header-logo'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Logo', 'evision-corporate' ),
            'section'               => 'evision-corporate-header',
            'type'                  => 'image',
            'priority'              => 2,
            'description'           =>  __( 'When you upload logo, the title and description will be replaced', 'evision-corporate' ),
            'active_callback'       => ''
        )
    );