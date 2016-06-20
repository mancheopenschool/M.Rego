<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
$evision_corporate_sections['evision-corporate-contact'] =
    array(
        'priority'       => 110,
        'title'          => __( 'Contact section', 'evision-corporate' ),
        'description'    => __( 'This section uses shortcode of a famous plugin contact form 7', 'evision-corporate' ),
        'panel'          => 'evision-corporate-home',
    );
/*creating setting control for evision-corporate-contact start*/
$evision_corporate_settings_controls['evision-corporate-contact-enable'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Enable contact section', 'evision-corporate' ),
            'section'               => 'evision-corporate-contact',
            'type'                  => 'checkbox',
            'priority'              => 2,
            'description'           => '',
        )
    );
$evision_corporate_settings_controls['evision-corporate-contact-main-title'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Contact section main title', 'evision-corporate' ),
            'section'               => 'evision-corporate-contact',
            'type'                  => 'text',
            'priority'              => 4,
            'description'           => '',
        )
    );
$evision_corporate_settings_controls['evision-corporate-contact-background'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Contact section background', 'evision-corporate' ),
            'section'               => 'evision-corporate-contact',
            'type'                  => 'image',
            'priority'              => 8,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_settings_controls['evision-corporate-contact-cf7'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Enter CF7 shortcode', 'evision-corporate' ),
            'section'               => 'evision-corporate-contact',
            'type'                  => 'text_html',
            'priority'              => 12,
            'description'       => sprintf( __( 'Requires %sContact Form 7%s plugin', 'evision-corporate' ), '<a href="'.esc_url('https://wordpress.org/plugins/contact-form-7/').'" target="_blank">','</a>' ),
        )
    );
$evision_corporate_settings_controls['evision-corporate-contact-background'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Contact section background', 'evision-corporate' ),
            'section'               => 'evision-corporate-contact',
            'type'                  => 'image',
            'priority'              => 16,
            'description'           => '',
        )
    );