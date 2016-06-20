<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
$evision_corporate_sections['evision-corporate-layout'] =
    array(
        'priority'       => 20,
        'title'          => __( 'Layout', 'evision-corporate' ),
        'description'    => __( 'Customize layout for Archive/Blog/Single/Page/Post', 'evision-corporate' ),
        'panel'          => 'evision-corporate-options',
    );

/*creating setting control for evision-corporate-layout start*/
$evision_corporate_settings_controls['evision-corporate-layout-page'] =
    array(
        'setting' =>  array(
            'default'              => 'sidebar-right',
        ),
        'control' => array(
            'label'                 =>  __( 'Archive/Blog/Single/Page/Post layout', 'evision-corporate' ),
            'section'               => 'evision-corporate-layout',
            'type'                  => 'select',
            'choices'               => array(
                'sidebar-left' => 'Primary Sidebar - Content',
                'sidebar-right' => 'Content - Primary Sidebar',
                'sidebar-no' => 'Full width, No sidebar'
            ),
            'priority'              => 2,
            'description'           => '',
            'active_callback'       => ''
        )
    );