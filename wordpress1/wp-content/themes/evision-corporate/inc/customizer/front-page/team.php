<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
$evision_corporate_sections['evision-corporate-team'] =
    array(
        'priority'       => 20,
        'title'          => __( 'Team section', 'evision-corporate' ),
        'description'    => sprintf( __( 'Please select page for team section. Page title will be  name/position of the member and page featured image will be member image. You can manage page from %shere%s. Please use appropriate image size( greater than 175*175 ) and select pages that have same size of images', 'evision-corporate' ), '<a href="'.esc_url( admin_url( 'edit.php?post_type=page' ) ).'" target="_self">','</a>' ),
        'panel'          => 'evision-corporate-home',
    );

/*creating setting control for evision-corporate-team start*/
$evision_corporate_settings_controls['evision-corporate-team-enable'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Enable team section', 'evision-corporate' ),
            'section'               => 'evision-corporate-team',
            'type'                  => 'checkbox',
            'priority'              => 2,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_settings_controls['evision-corporate-team-main-title'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Team section main title', 'evision-corporate' ),
            'section'               => 'evision-corporate-team',
            'type'                  => 'text',
            'priority'              => 4,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_settings_controls['evision-corporate-team-main-content'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Team section main content', 'evision-corporate' ),
            'section'               => 'evision-corporate-team',
            'type'                  => 'textarea_html',
            'priority'              => 6,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_settings_controls['evision-corporate-team-background'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Team section background', 'evision-corporate' ),
            'section'               => 'evision-corporate-team',
            'type'                  => 'image',
            'priority'              => 8,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_repeated_settings_controls['evision-corporate-team'] =
    array(
        'repeated' => 4,
        'evision-corporate-team-pages' => array(
            'setting' =>     array(
                'default'              => 0,
            ),
            'control' => array(
                'label'                 =>  __( 'Select page for team', 'evision-corporate' ),
                'section'               => 'evision-corporate-team',
                'type'                  => 'dropdown-pages',
                'priority'              => 12,
                'description'           => ''
            )
        ),
        'evision-corporate-team-divider' => array(
            'control' => array(
                'section'               => 'evision-corporate-team',
                'type'                  => 'message',
                'priority'              => '',
                'description'           => '<br /><hr />'
            )
        )
    );