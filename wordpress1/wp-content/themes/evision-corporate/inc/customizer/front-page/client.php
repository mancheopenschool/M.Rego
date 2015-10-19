<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
$evision_corporate_sections['evision-corporate-client'] =
    array(
        'priority'       => 20,
        'title'          => __( 'Client section', 'evision-corporate' ),
        'description'    => __( 'Please upload image for client. Please use appropriate image size( about 130*30 )', 'evision-corporate' ),
        'panel'          => 'evision-corporate-home',
    );

/*creating setting control for evision-corporate-client start*/
$evision_corporate_settings_controls['evision-corporate-client-enable'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Enable client section', 'evision-corporate' ),
            'section'               => 'evision-corporate-client',
            'type'                  => 'checkbox',
            'priority'              => 2,
        )
    );
$evision_corporate_repeated_settings_controls['evision-corporate-client'] =
    array(
        'repeated' => 4,
        'evision-corporate-client-image' => array(
            'control' => array(
                'label'                 =>  __( 'Client image', 'evision-corporate' ),
                'section'               => 'evision-corporate-client',
                'type'                  => 'image',
                'priority'              => 22,
            )
        ),
        'evision-corporate-client-divider' => array(
            'control' => array(
                'section'               => 'evision-corporate-client',
                'type'                  => 'message',
                'priority'              => '',
                'description'           => '<br /><hr />'
            )
        )
    );