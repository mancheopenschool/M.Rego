<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
$evision_corporate_sections['evision-corporate-about'] =
    array(
        'priority'       => 20,
        'title'          => __( 'About section', 'evision-corporate' ),
        'description'    => sprintf( __( 'Please select page for about section. Page title will be about title and page content will be about content. You can manage page from %shere%s. Also you will be able to select font awesome icon as about icon', 'evision-corporate' ), '<a href="'.esc_url( admin_url( 'edit.php?post_type=page' ) ).'" target="_self">','</a>' ),
        'panel'          => 'evision-corporate-home',
    );

/*creating setting control for evision-corporate-about start*/
$evision_corporate_settings_controls['evision-corporate-about-enable'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Enable about section', 'evision-corporate' ),
            'section'               => 'evision-corporate-about',
            'type'                  => 'checkbox',
            'priority'              => 2,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_settings_controls['evision-corporate-about-main-title'] =
    array(
        'control' => array(
            'label'                 =>  __( 'About section main title', 'evision-corporate' ),
            'section'               => 'evision-corporate-about',
            'type'                  => 'text_html',
            'priority'              => 4,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_settings_controls['evision-corporate-about-main-content'] =
    array(
        'control' => array(
            'label'                 =>  __( 'About section main content', 'evision-corporate' ),
            'section'               => 'evision-corporate-about',
            'type'                  => 'textarea_html',
            'priority'              => 6,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_repeated_settings_controls['evision-corporate-about'] =
    array(
        'repeated' => 3,
        'evision-corporate-about-icon' => array(
            'control' => array(
                'label'                 =>  __( 'About icon', 'evision-corporate' ),
                'section'               => 'evision-corporate-about',
                'type'                  => 'text',
                'priority'              => 20,
                'description'           => sprintf( __( 'Use font awesome icon: Eg: %s. %sSee more here%s', 'evision-corporate' ), 'fa-user','<a href="'.esc_url('http://fontawesome.io/cheatsheet/').'" target="_blank">','</a>' ),
            )
        ),
        'evision-corporate-about-pages' => array(
            'setting' =>     array(
                'default'              => 0,
            ),
            'control' => array(
                'label'                 =>  __( 'Select page for about', 'evision-corporate' ),
                'section'               => 'evision-corporate-about',
                'type'                  => 'dropdown-pages',
                'priority'              => 24,
                'description'           => ''
            )
        ),
        'evision-corporate-about-divider' => array(
            'control' => array(
                'section'               => 'evision-corporate-about',
                'type'                  => 'message',
                'priority'              => 28,
                'description'           => '<br /><hr />'
            )
        )
    );