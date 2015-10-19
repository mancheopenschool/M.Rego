<?php
if ( ! function_exists( 'evision_corporate_front_service' ) ) :
    /**
     * service
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_front_service() {
        global $evision_corporate_customizer_all_values;
        $evision_corporate_services = coder_get_repeated_all_value('evision-corporate-service');
        if( isset( $evision_corporate_customizer_all_values['evision-corporate-service-enable'] ) && 1 == $evision_corporate_customizer_all_values['evision-corporate-service-enable'] ) {
            $evision_corporate_service_pages_ids = array();
            if( null != $evision_corporate_services ){
                foreach($evision_corporate_services as $evision_corporate_service) {
                    if( 0 != $evision_corporate_service['evision-corporate-service-pages'] ) {
                        $evision_corporate_service_pages_ids[] = $evision_corporate_service['evision-corporate-service-pages'];
                    }
                }
            }

            ?>
            <!-- *****************************************
                 service section start
            ****************************************** -->
            <section class="wrapper block-service block-section block-bg-image" id="evision-corporate-service">
                <div class="block-overlay"> &nbsp; </div>
                <div class="block-overlay-content">
                    <div class="container">
                        <div class="block-title">
                            <?php
                            if(isset($evision_corporate_customizer_all_values['evision-corporate-service-main-title']) && !empty($evision_corporate_customizer_all_values['evision-corporate-service-main-title']) ){
                                echo '<h2>'.wp_kses_post( $evision_corporate_customizer_all_values['evision-corporate-service-main-title'] ).'</h2>';
                                echo '<div class="block-title-divider"><span><i class="fa fa-circle"></i></span></div>';
                            }
                            if( isset( $evision_corporate_customizer_all_values['evision-corporate-service-main-content'] ) && !empty( $evision_corporate_customizer_all_values['evision-corporate-service-main-content'] )){
                                echo '<p class="lead">'.wp_kses_post( $evision_corporate_customizer_all_values['evision-corporate-service-main-content'] ).'</p>';
                            }
                            ?>
                        </div>
                        <?php
                        if( !empty ( $evision_corporate_service_pages_ids ) ) {
                            $evision_corporate_service_query = new WP_Query(
                                array(
                                    'post_type' => 'page',
                                    'post__in' => $evision_corporate_service_pages_ids,
                                    'posts_per_page' => 3,
                                    'orderby' => 'post__in'
                                )
                            );
                            ?>
                            <div class="row">
                                <div class="row-same-height">
                                    <?php
                                    // the query
                                    if ( $evision_corporate_service_query->have_posts() ) :
                                        /*loop*/
                                        $evision_corporate_services_index = 1;
                                        while ( $evision_corporate_service_query->have_posts() ) :
                                            $evision_corporate_service_query->the_post();
                                            ?>
                                            <div class="col-xs-12 col-sm-4 col-sm-height">
                                                <div class="single-circle">
                                                    <div class="single-circle-icon">
                                                        <span>
                                                            <?php if( isset( $evision_corporate_services[$evision_corporate_services_index] ) &&  isset( $evision_corporate_services[$evision_corporate_services_index]['evision-corporate-service-icon'] ) && !empty( $evision_corporate_services[$evision_corporate_services_index]['evision-corporate-service-icon'] ) ){
                                                                echo '<i class="fa '.esc_attr($evision_corporate_services[$evision_corporate_services_index]['evision-corporate-service-icon']).' fa-3x"></i>';
                                                            }
                                                            else {
                                                                echo '<i class="fa fa-desktop fa-3x"></i>';
                                                            }
                                                            ?>
                                                        </span>
                                                    </div>
                                                    <div class="single-circle-inner">
                                                        <h3>
                                                            <?php the_title(); ?>
                                                        </h3>
                                                        <div class="btn-section">
                                                            <a href="<?php the_permalink();?>" class="btn-outline">
                                                                <?php _e( 'Know more', 'evision-corporate' );?>
                                                                <i class="fa fa-angle-double-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <?php
                                            $evision_corporate_services_index ++;
                                        endwhile;?>
                                        <!-- end of the loop -->
                                        <?php wp_reset_postdata(); ?>
                                    <?php else : ?>
                                        <!--Probably this message never display-->
                                        <p><?php _e( 'Please select pages for service', 'evision-corporate' )?></p>
                                    <?php endif;
                                    ?>
                                </div>
                            </div>
                        <?php
                        }
                        ?>
                    </div>
                </div>
            </section>
            <!-- *****************************************
                      service section ends
            ****************************************** -->
        <?php
        }
    }
endif;
add_action( 'evision_corporate_action_front_service', 'evision_corporate_front_service', 10 );