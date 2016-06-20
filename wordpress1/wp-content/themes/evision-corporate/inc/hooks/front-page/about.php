<?php
if ( ! function_exists( 'evision_corporate_front_about' ) ) :
    /**
     * about
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_front_about() {

        global $evision_corporate_customizer_all_values;

        $evision_corporate_abouts = coder_get_repeated_all_value('evision-corporate-about');

        if( isset($evision_corporate_customizer_all_values['evision-corporate-about-enable']) &&  1 == $evision_corporate_customizer_all_values['evision-corporate-about-enable'] ) {
            $evision_corporate_about_pages_ids = array();
            if( null != $evision_corporate_abouts ) {
                foreach( $evision_corporate_abouts as $evision_corporate_about ) {
                    if( 0 != $evision_corporate_about['evision-corporate-about-pages'] ){
                        $evision_corporate_about_pages_ids[] = $evision_corporate_about['evision-corporate-about-pages'];
                    }
                }
            }
            ?>
            <!-- *****************************************
                     about section start
                ****************************************** -->
            <section class="wrapper block-about block-section" id="evision-corporate-about">
                <div class="container">
                    <div class="block-title">
                        <?php
                        if(isset($evision_corporate_customizer_all_values['evision-corporate-about-main-title']) && !empty($evision_corporate_customizer_all_values['evision-corporate-about-main-title']) ){
                            echo '<h2>'.wp_kses_post( $evision_corporate_customizer_all_values['evision-corporate-about-main-title'] ).'</h2>';
                            echo '<div class="block-title-divider"><span><i class="fa fa-circle"></i></span></div>';
                        }
                        if( isset( $evision_corporate_customizer_all_values['evision-corporate-about-main-content'] ) && !empty ( $evision_corporate_customizer_all_values['evision-corporate-about-main-content'] )){
                            echo '<p class="lead">'.wp_kses_post( $evision_corporate_customizer_all_values['evision-corporate-about-main-content'] ).'</p>';
                        }
                        ?>
                    </div>
                    <?php
                    if( !empty ( $evision_corporate_about_pages_ids ) ) {
                        $evision_corporate_about_query = new WP_Query(
                            array(
                                'post_type' => 'page',
                                'post__in' => $evision_corporate_about_pages_ids,
                                'posts_per_page' => 3,
                                'orderby' => 'post__in'
                            )
                        );
                        ?>
                        <div class="row single-box-container">
                            <div class="row-same-height">
                                <?php
                                // the query
                                if ( $evision_corporate_about_query->have_posts() ) :
                                    /*loop*/
                                    $evision_corporate_abouts_index = 1;
                                    while ( $evision_corporate_about_query->have_posts() ) :
                                        $evision_corporate_about_query->the_post();
                                        ?>
                                        <div class="col-xs-12 col-sm-4 col-sm-height single-box-item single-box-bdr">
                                            <div class="single-box">
                                                <div class="single-box-icon">
                                                    <?php if( isset( $evision_corporate_abouts[$evision_corporate_abouts_index] ) &&  isset( $evision_corporate_abouts[$evision_corporate_abouts_index]['evision-corporate-about-icon'] ) && !empty( $evision_corporate_abouts[$evision_corporate_abouts_index]['evision-corporate-about-icon'] ) ){
                                                        echo '<i class="fa '.esc_attr($evision_corporate_abouts[$evision_corporate_abouts_index]['evision-corporate-about-icon']).' fa-3x"></i>';
                                                    }
                                                    else{
                                                        echo '<i class="fa fa-user fa-3x"></i>';
                                                    }
                                                    ?>
                                                </div>
                                                <div class="single-box-inner">
                                                    <h3>
                                                        <?php the_title()?>
                                                    </h3>
                                                    <?php
                                                    echo evision_corporate_words_count(30, get_the_content());
                                                    ?>
                                                    <div class="btn-section btn-over-box">
                                                        <a href="<?php the_permalink();?>" class="btn-outline">
                                                            <?php _e( 'Know more', 'evision-corporate' );?>
                                                            <i class="fa fa-angle-double-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <?php
                                        $evision_corporate_abouts_index ++;
                                    endwhile; ?>
                                    <!-- end of the loop -->
                                    <?php wp_reset_postdata(); ?>
                                <?php else : ?>
                                    <!--Probably this message never display-->
                                    <p><?php _e( 'Please select pages for about, also make sure to have featured image for all pages', 'evision-corporate' )?></p>
                                <?php endif;?>
                            </div>
                        </div>
                    <?php
                    }
                    ?>
                </div>
            </section>
                <!-- *****************************************
                          about section ends
                ****************************************** -->
            <?php
        }
    }
endif;

add_action( 'evision_corporate_action_front_about', 'evision_corporate_front_about', 10 );