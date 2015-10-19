<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
$evision_corporate_sections['evision-corporate-blog'] =
    array(
        'priority'       => 20,
        'title'          => __( 'Blog section', 'evision-corporate' ),
        'description'    => __( 'The recent 3 posts will display in blog section', 'evision-corporate' ),
        'panel'          => 'evision-corporate-home',
    );

/*creating setting control for evision-corporate-blog start*/
$evision_corporate_settings_controls['evision-corporate-blog-enable'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Enable blog section', 'evision-corporate' ),
            'section'               => 'evision-corporate-blog',
            'type'                  => 'checkbox',
            'priority'              => 2,
        )
    );
$evision_corporate_settings_controls['evision-corporate-blog-main-title'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Blog section main title', 'evision-corporate' ),
            'section'               => 'evision-corporate-blog',
            'type'                  => 'text_html',
            'priority'              => 4,
            'description'           => '',
            'active_callback'       => ''
        )
    );