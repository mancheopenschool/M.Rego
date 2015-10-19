<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
$evision_corporate_sections['evision-corporate-general'] =
    array(
        'priority'       => 20,
        'title'          => __( 'General', 'evision-corporate' ),
        'description'    => __( 'Customize general setting', 'evision-corporate' ),
        'panel'          => 'evision-corporate-options',
    );

/*enable option for enable tagline in header*/
$evision_corporate_settings_controls['evision-corporate-enable-tagline'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Enable tagline', 'evision-corporate' ),
            'section'               => 'title_tagline',
            'type'                  => 'checkbox',
            'priority'              => 30,
            'active_callback'       => ''
        )
    );