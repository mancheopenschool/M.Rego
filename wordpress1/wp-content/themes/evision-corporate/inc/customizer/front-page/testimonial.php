<?php
global $evision_corporate_sections;
global $evision_corporate_settings_controls;
global $evision_corporate_repeated_settings_controls;
$evision_corporate_sections['evision-corporate-testimonial'] =
    array(
        'priority'       => 20,
        'title'          => __( 'Testimonial section', 'evision-corporate' ),
        'description'    => sprintf( __( 'Please select page for testimonial section. Page title will be  name/position of the sayer and page featured image will be sayer image. You can manage page from %shere%s. Please use appropriate image size( about 175*175 ) and select pages that have same size of images', 'evision-corporate' ), '<a href="'.esc_url( admin_url( 'edit.php?post_type=page' ) ).'" target="_self">','</a>' ),
        'panel'          => 'evision-corporate-home',
    );
/*creating setting control for evision-corporate-testimonial start*/
$evision_corporate_settings_controls['evision-corporate-testimonial-enable'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Enable testimonial section', 'evision-corporate' ),
            'section'               => 'evision-corporate-testimonial',
            'type'                  => 'checkbox',
            'priority'              => 2,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_settings_controls['evision-corporate-testimonial-main-title'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Testimonial section main title', 'evision-corporate' ),
            'section'               => 'evision-corporate-testimonial',
            'type'                  => 'text',
            'priority'              => 4,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_settings_controls['evision-corporate-testimonial-background'] =
    array(
        'control' => array(
            'label'                 =>  __( 'Testimonial section background', 'evision-corporate' ),
            'section'               => 'evision-corporate-testimonial',
            'type'                  => 'image',
            'priority'              => 8,
            'description'           => '',
            'active_callback'       => ''
        )
    );
$evision_corporate_repeated_settings_controls['evision-corporate-testimonial'] =
    array(
        'repeated' => 3,
        'evision-corporate-testimonial-pages' => array(
            'setting' =>     array(
                'default'              => 0,
            ),
            'control' => array(
                'label'                 =>  __( 'Select page for testimonial', 'evision-corporate' ),
                'section'               => 'evision-corporate-testimonial',
                'type'                  => 'dropdown-pages',
                'priority'              => 12,
                'description'           => ''
            )
        ),
        'evision-corporate-testimonial-divider' => array(
            'control' => array(
                'section'               => 'evision-corporate-testimonial',
                'type'                  => 'message',
                'priority'              => '',
                'description'           => '<br /><hr />'
            )
        )
    );