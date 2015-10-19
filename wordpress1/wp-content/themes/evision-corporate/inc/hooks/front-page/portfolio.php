<?php
if ( ! function_exists( 'evision_corporate_front_portfolio' ) ) :
    /**
     * portfolio
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_front_portfolio() {

        global $evision_corporate_customizer_all_values;
        $evision_corporate_portfolios = coder_get_repeated_all_value('evision-corporate-portfolio');
        if( isset( $evision_corporate_customizer_all_values['evision-corporate-portfolio-enable'] ) && 1 == $evision_corporate_customizer_all_values['evision-corporate-portfolio-enable'] ) {

            $evision_corporate_portfolio_pages_ids = array();
            if( null != $evision_corporate_portfolios ) {
                foreach($evision_corporate_portfolios as $evision_corporate_portfolio) {
                    if( 0 != $evision_corporate_portfolio['evision-corporate-portfolio-pages'] ){
                        $evision_corporate_portfolio_pages_ids[] = $evision_corporate_portfolio['evision-corporate-portfolio-pages'];
                    }
                }
            }
            ?>
            <!-- *****************************************
                  portfolio section start
            ****************************************** -->

            <section class="wrapper block-portfolio block-section" id="evision-corporate-portfolio">
                <div class="container">
                    <div class="block-title">
                        <?php
                        if(isset($evision_corporate_customizer_all_values['evision-corporate-portfolio-main-title']) && !empty($evision_corporate_customizer_all_values['evision-corporate-portfolio-main-title']) ){
                            echo '<h2>'.wp_kses_post( $evision_corporate_customizer_all_values['evision-corporate-portfolio-main-title'] ).'</h2>';
                            echo '<div class="block-title-divider"><span><i class="fa fa-circle"></i></span></div>';
                        }
                        if( isset( $evision_corporate_customizer_all_values['evision-corporate-portfolio-main-content'] ) && !empty( $evision_corporate_customizer_all_values['evision-corporate-portfolio-main-content'] )){
                            echo '<p class="lead">'.wp_kses_post( $evision_corporate_customizer_all_values['evision-corporate-portfolio-main-content'] ).'</p>';
                        }
                        ?>
                    </div>
                    <?php
                    if( !empty( $evision_corporate_portfolio_pages_ids ) ){
                        $evision_corporate_portfolio_query = new WP_Query(
                            array(
                                'post_type' => 'page',
                                'post__in' => $evision_corporate_portfolio_pages_ids,
                                'posts_per_page' => 3,
                                'orderby' => 'post__in'
                            )
                        );
                        ?>
                        <div class="row thumb-container">
                            <div class="row-same-height">
                                <?php
                                // the query
                                if ( $evision_corporate_portfolio_query->have_posts() ) :
                                    /*loop*/
                                    while ( $evision_corporate_portfolio_query->have_posts() ) :
                                        $evision_corporate_portfolio_query->the_post();
                                        ?>
                                        <div class="col-xs-12 col-sm-12 col-md-4 col-md-height single-thumb-block">
                                            <div class="thumb-inner">
                                                <div class="thumb-img evision-corporate-thumb-size">
                                                    <?php
                                                    if ( '' != get_the_post_thumbnail() ) {
                                                        the_post_thumbnail();
                                                    } else {
                                                        echo "<img src='".esc_url(get_template_directory_uri().'/assets/img/no-image.jpg')."' alt='".__('evision-corporate-no-image','evision-corporate')."'>";
                                                    }
                                                    ?>
                                                    <div class="thumb-overlay thumb-overlay-content">
                                                    <span class="thumb-detail">
                                                        <h3>
                                                            <a href="<?php the_permalink()?>">
                                                                <?php the_title();?>
                                                            </a>
                                                        </h3>
                                                    </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <?php endwhile; ?>
                                    <!-- end of the loop -->
                                    <?php wp_reset_postdata(); ?>
                                <?php else : ?>
                                    <!--Probably this message never display-->
                                    <p><?php _e( 'Please select pages for portfolio, also make sure to have featured image for all pages', 'evision-corporate' )?></p>
                                <?php endif;?>
                            </div>
                        </div>
                    <?php
                    }
                    ?>
                </div>
            </section>
            <!-- *****************************************
                     portfolio section ends
            ****************************************** -->
        <?php
        }
    }
endif;
add_action( 'evision_corporate_action_front_portfolio', 'evision_corporate_front_portfolio', 10 );