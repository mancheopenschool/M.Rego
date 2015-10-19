<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
$evision_corporate_sections['evision-corporate-portfolio'] =
    array(
        'priority'       => 20,
        'title'          => __( 'Portfolio section', 'evision-corporate' ),
        'description'       => sprintf( __( 'Please select page for portfolio section. Page title will be portfolio title and page featured image will be portfolio image. You can manage page from %shere%s. Please use appropriate image size( greater than 320*247 ) and select pages that have same size of images', 'evision-corporate' ), '<a href="'.esc_url( admin_url( 'edit.php?post_type=page' ) ).'" target="_self">','</a>' ),
        'panel'          => 'evision-corporate-home',
    );

/*creating setting control for evision-corporate-portfolio start*/
$evision_corporate_settings_controls['evision-corporate-portfolio-enable'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Enable portfolio section', 'evision-corporate' ),
            'section'               => 'evision-corporate-portfolio',
            'type'                  => 'checkbox',
            'priority'              => 2,
            'description'           => '',
        )
    );
/*creating setting control for evision-corporate-portfolio start*/
$evision_corporate_settings_controls['evision-corporate-portfolio-main-title'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Portfolio section main title', 'evision-corporate' ),
            'section'               => 'evision-corporate-portfolio',
            'type'                  => 'text_html',
            'priority'              => 4,
            'description'           => '',
        )
    );
$evision_corporate_settings_controls['evision-corporate-portfolio-main-content'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Portfolio section main content', 'evision-corporate' ),
            'section'               => 'evision-corporate-portfolio',
            'type'                  => 'textarea_html',
            'priority'              => 6,
            'description'           => '',
        )
    );
$evision_corporate_repeated_settings_controls['evision-corporate-portfolio'] =
    array(
        'repeated' => 3,
        'evision-corporate-portfolio-pages' => array(
            'setting' =>     array(
                'default'              => 0,
            ),
            'control' => array(
                'label'                 =>  __( 'Select page for portfolio', 'evision-corporate' ),
                'section'               => 'evision-corporate-portfolio',
                'type'                  => 'dropdown-pages',
                'priority'              => 12,
                'description'           => ''
            )
        ),
        'evision-corporate-portfolio-divider' => array(
            'control' => array(
                'section'               => 'evision-corporate-portfolio',
                'type'                  => 'message',
                'priority'              => 16,
                'description'           => '<br /><hr />'
            )
        )
    );