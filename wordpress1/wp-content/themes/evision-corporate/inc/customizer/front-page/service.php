<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
/*creating sections for evision-corporate-home => evision-corporate-service*/
$evision_corporate_sections['evision-corporate-service'] =
    array(
        'priority'       => 20,
        'title'          => __( 'Service section', 'evision-corporate' ),
        'description'       => sprintf( __( 'Please select page for service section. Page title will be service title. You can manage page from %shere%s. Also you will be able to select font awesome icon as service icon', 'evision-corporate' ), '<a href="'.esc_url( admin_url( 'edit.php?post_type=page' ) ).'" target="_self">','</a>' ),
        'panel'          => 'evision-corporate-home',
    );

/*creating setting control for evision-corporate-service start*/
$evision_corporate_settings_controls['evision-corporate-service-enable'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Enable service section', 'evision-corporate' ),
            'section'               => 'evision-corporate-service',
            'type'                  => 'checkbox',
            'priority'              => 2,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_settings_controls['evision-corporate-service-main-title'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Service section main title', 'evision-corporate' ),
            'section'               => 'evision-corporate-service',
            'type'                  => 'text_html',
            'priority'              => 4,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_settings_controls['evision-corporate-service-main-content'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Service section main content', 'evision-corporate' ),
            'section'               => 'evision-corporate-service',
            'type'                  => 'textarea_html',
            'priority'              => 6,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_settings_controls['evision-corporate-service-background'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Service section background', 'evision-corporate' ),
            'section'               => 'evision-corporate-service',
            'type'                  => 'image',
            'priority'              => 8,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_repeated_settings_controls['evision-corporate-service'] =
    array(
        'repeated' => 3,
        'evision-corporate-service-icon' => array(
            'control' => array(
                'label'                 =>  __( 'Service icon', 'evision-corporate' ),
                'section'               => 'evision-corporate-service',
                'type'                  => 'text',
                'priority'              => 20,
                'description'           => sprintf( __( 'Use font awesome icon: Eg: %s. %sSee more here%s', 'evision-corporate' ), 'fa-desktop','<a href="'.esc_url('http://fontawesome.io/cheatsheet/').'" target="_blank">','</a>' ),
            )
        ),
        'evision-corporate-service-pages' => array(
            'setting' =>     array(
                'default'              => 0,
            ),
            'control' => array(
                'label'                 =>  __( 'Select page for service', 'evision-corporate' ),
                'section'               => 'evision-corporate-service',
                'type'                  => 'dropdown-pages',
                'priority'              => 24,
                'description'           => ''
            )
        ),
        'evision-corporate-service-divider' => array(
            'control' => array(
                'section'               => 'evision-corporate-service',
                'type'                  => 'message',
                'priority'              => '',
                'description'           => '<br /><hr />'
            )
        )
    );