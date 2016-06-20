<?php
if ( ! function_exists( 'evision_corporate_front_slider' ) ) :
    /**
     * slider
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_front_slider() {

        global $evision_corporate_customizer_all_values;
        $evision_corporate_sliders = coder_get_repeated_all_value('evision-corporate-slider');

        if( isset( $evision_corporate_customizer_all_values['evision-corporate-slider-enable'] ) && $evision_corporate_customizer_all_values['evision-corporate-slider-enable'] && null != $evision_corporate_sliders ){
            $evision_corporate_slider_pages_ids = array();
            foreach($evision_corporate_sliders as $evision_corporate_slider) {
                if( 0 != $evision_corporate_slider['evision-corporate-slider-pages'] ){
                    $evision_corporate_slider_pages_ids[] = $evision_corporate_slider['evision-corporate-slider-pages'];
                }
            }
            if( !empty( $evision_corporate_slider_pages_ids ) ) {
                $evision_corporate_slider_query = new WP_Query(
                    array(
                        'post_type' => 'page',
                        'post__in' => $evision_corporate_slider_pages_ids,
                        'posts_per_page' => 2,
                        'orderby' => 'post__in'
                    )
                );
                ?>
                <!-- *****************************************
                      hero banner section start
                  ****************************************** -->
                <section class="wrapper hero-banner-block" id="evision-corporate-slider">
                    <ul class="evision-corporate-main-slider">
                        <?php
                        // the query
                        if ( $evision_corporate_slider_query->have_posts() ) :
                            /*loop*/
                            while ( $evision_corporate_slider_query->have_posts() ) :
                                $evision_corporate_slider_query->the_post();
                                ?>
                                <li>
                                    <?php
                                    if ( has_post_thumbnail() ):
                                        $evision_corporate_slider_image = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
                                    else:
                                        $evision_corporate_slider_image[0] = get_template_directory_uri() . '/assets/img/no-image-1920_690.jpg';
                                    endif;
                                    ?>
                                    <img src="<?php echo $evision_corporate_slider_image[0]; ?>" alt="<?php the_title_attribute(); ?>"/>
                                    <div class="evision-corporate-slider-content">
                                        <div class="container">
                                            <div class="evision-corporate-slider-caption">
                                                <div class="main-title">
                                                    <a href="<?php the_permalink(); ?>">
                                                        <?php the_title()?>
                                                    </a>
                                                </div>
                                                <?php
                                                echo evision_corporate_words_count(40, get_the_content());
                                                ?>
                                                <div class="clearfix"></div>
                                                <a class="big-btn" href="<?php the_permalink(); ?>"><?php _e( 'Know more', 'evision-corporate' )?></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            <?php endwhile; ?>
                            <!-- end of the loop -->
                            <?php wp_reset_postdata(); ?>
                        <?php else : ?>
                            <!--Probably this message never display-->
                            <?php _e( 'Please select pages for slider, also make sure to have featured image for all pages', 'evision-corporate' ); ?>
                        <?php endif;?>
                    </ul>
                </section>
                <!-- *****************************************
                          hero banner section ends
                ****************************************** -->
            <?php
            }
        }
    }
endif;
add_action( 'evision_corporate_action_front_slider', 'evision_corporate_front_slider', 10 );