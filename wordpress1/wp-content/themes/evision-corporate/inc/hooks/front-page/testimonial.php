<?php
if ( ! function_exists( 'evision_corporate_front_testimonial' ) ) :
    /**
     * testimonial
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_front_testimonial() {

        global $evision_corporate_customizer_all_values;
        $evision_corporate_testimonials = coder_get_repeated_all_value('evision-corporate-testimonial');

        if( isset( $evision_corporate_customizer_all_values['evision-corporate-testimonial-enable']) && 1 == $evision_corporate_customizer_all_values['evision-corporate-testimonial-enable'] ) {
            $evision_corporate_testimonial_pages_ids = array();
            if( null != $evision_corporate_testimonials ) {
                foreach($evision_corporate_testimonials as $evision_corporate_testimonial) {
                    if( 0 != $evision_corporate_testimonial['evision-corporate-testimonial-pages'] ){
                        $evision_corporate_testimonial_pages_ids[] = $evision_corporate_testimonial['evision-corporate-testimonial-pages'];
                    }
                }
            }
            ?>
            <!-- *****************************************
                 testimonial section start
            ****************************************** -->

            <section id="evision-corporate-testimonial" class="wrapper block-testimonial block-section block-bg-image">
                <div class="block-overlay"> &nbsp; </div>
                <div class="block-overlay-content">
                    <div class="container">
                        <div class="block-title">
                            <?php
                            if(isset($evision_corporate_customizer_all_values['evision-corporate-testimonial-main-title']) && !empty($evision_corporate_customizer_all_values['evision-corporate-testimonial-main-title']) ){
                                echo '<h2>'.wp_kses_post( $evision_corporate_customizer_all_values['evision-corporate-testimonial-main-title'] ).'</h2>';
                                echo '<div class="block-title-divider"><span><i class="fa fa-circle"></i></span></div>';
                            }
                            ?>
                        </div>
                        <?php
                        if( !empty ( $evision_corporate_testimonial_pages_ids ) ) {
                          ?>
                            <div class="testimonial-container">
                                <div id='evision-corporate-testimonial-slide' class="carousel slide" data-ride="carousel">
                                    <!-- Wrapper for slides -->
                                    <div class="carousel-inner" role="listbox">
                                        <?php
                                        $evision_corporate_testimonial_query = new WP_Query(
                                            array(
                                                'post_type' => 'page',
                                                'post__in' => $evision_corporate_testimonial_pages_ids,
                                                'posts_per_page' => 3,
                                                'orderby' => 'post__in'
                                            )
                                        );
                                        // the query
                                        if ( $evision_corporate_testimonial_query->have_posts() ) :
                                            /*loop*/
                                            $testimonial_index = 0;
                                            while ( $evision_corporate_testimonial_query->have_posts() ) :
                                                $evision_corporate_testimonial_query->the_post();
                                                if( 0 == $testimonial_index){
                                                    $evision_corporate_active= 'active';
                                                }
                                                else{
                                                    $evision_corporate_active= '';
                                                }
                                                ?>
                                                <div class="item <?php echo esc_attr( $evision_corporate_active );?>">
                                                    <div class="testimonial-content evision-corporate-carousel-fixed-content">
                                                        <?php echo evision_corporate_words_count( 50, get_the_content() )?>
                                                    </div>
                                                    <div class="testimonial-sayer">
                                                        <?php the_title();?>
                                                    </div>
                                                </div>
                                                <?php
                                                $testimonial_index++;
                                                ?>
                                            <?php endwhile; ?>
                                            <!-- end of the loop -->
                                            <?php wp_reset_postdata(); ?>
                                        <?php else : ?>
                                            <!--Probably this message never display-->
                                            <p><?php _e( 'Please select pages for testimonial, also make sure to have featured image for all pages', 'evision-corporate' )?></p>
                                        <?php endif;?>
                                    </div>
                                    <!-- Indicators -->
                                    <ol class="carousel-indicators">
                                        <?php
                                        // the query
                                        if ( $evision_corporate_testimonial_query->have_posts() ) :
                                            /*loop*/
                                            $testimonial_index = 0;
                                            while ( $evision_corporate_testimonial_query->have_posts() ) :
                                                $evision_corporate_testimonial_query->the_post();
                                                if( 0 == $testimonial_index){
                                                    $evision_corporate_active= 'active';
                                                }
                                                else{
                                                    $evision_corporate_active= '';
                                                }
                                                ?>
                                                <li class="evision-corporate-indicators-image <?php echo esc_attr( $evision_corporate_active );?>" data-target="#evision-corporate-testimonial-slide" data-slide-to="<?php echo esc_attr( $testimonial_index );?>">
                                                    <?php
                                                    if ( '' != get_the_post_thumbnail() ) {
                                                        the_post_thumbnail();
                                                    } else {
                                                        echo "<img src='".esc_url(get_template_directory_uri().'/assets/img/avatar.png')."' alt='".__('evision-corporate-no-image','evision-corporate')."'>";
                                                    }
                                                    ?>

                                                </li>
                                                <?php
                                                $testimonial_index++;
                                                ?>
                                            <?php endwhile; ?>
                                            <!-- end of the loop -->
                                            <?php wp_reset_postdata(); ?>
                                        <?php else : ?>
                                            <p><?php _e( 'Please select pages for testimonial, also make sure to have all pages have featured image', 'evision-corporate' )?></p>
                                        <?php endif;?>
                                    </ol>
                                </div>
                            </div>
                        <?php
                        }
                        ?>
                    </div>
                </div>
            </section>

            <!-- *****************************************
                     testimonial section ends
            ****************************************** -->
        <?php
        }
    }
endif;
add_action( 'evision_corporate_action_front_testimonial', 'evision_corporate_front_testimonial', 10 );