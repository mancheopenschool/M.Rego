<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;

$evision_corporate_sections['evision-corporate-slider'] =
    array(
        'priority'       => 12,
        'title'          => __( 'Slider section', 'evision-corporate' ),
        'description'       => sprintf( __( 'Please select page for slider section. Page title will be slider title, page content will be slider content and page featured image will be slider image. You can manage page from %shere%s. Please use appropriate image size( about 1920*690 ) and select pages that have same size of images', 'evision-corporate' ), '<a href="'.esc_url( admin_url( 'edit.php?post_type=page' ) ).'" target="_self">','</a>' ),
        'panel'          => 'evision-corporate-home',
    );

/*creating setting control for evision-corporate-slider start*/
$evision_corporate_settings_controls['evision-corporate-slider-enable'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Enable slider section', 'evision-corporate' ),
            'section'               => 'evision-corporate-slider',
            'type'                  => 'checkbox',
            'priority'              => 10,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_repeated_settings_controls['evision-corporate-slider'] =
    array(
        'repeated' => 2,
        'evision-corporate-slider-pages' => array(
            'setting' =>     array(
                'default'              => 0,
            ),
            'control' => array(
                'label'                 =>  __( 'Select page for slider', 'evision-corporate' ),
                'section'               => 'evision-corporate-slider',
                'type'                  => 'dropdown-pages',
                'priority'              => 12,
                'description'           => ''
            )
        ),
        'evision-corporate-slider-divider' => array(
            'control' => array(
                'section'               => 'evision-corporate-slider',
                'type'                  => 'message',
                'priority'              => '',
                'description'           => '<br /><hr />'
            )
        )
    );