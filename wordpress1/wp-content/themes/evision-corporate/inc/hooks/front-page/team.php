<?php
if ( ! function_exists( 'evision_corporate_front_team' ) ) :
    /**
     * team
     *
     * @since eVision Corporate 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function evision_corporate_front_team() {

        global $evision_corporate_customizer_all_values;
        $evision_corporate_teams = coder_get_repeated_all_value('evision-corporate-team');

        if( isset( $evision_corporate_customizer_all_values['evision-corporate-team-enable'] ) && 1 == $evision_corporate_customizer_all_values['evision-corporate-team-enable'] ) { ?>
            <?php
            $evision_corporate_team_pages_ids = array();
            if( null != $evision_corporate_teams ) {
                foreach($evision_corporate_teams as $evision_corporate_team) {
                    if( 0 != $evision_corporate_team['evision-corporate-team-pages'] ){
                        $evision_corporate_team_pages_ids[] = $evision_corporate_team['evision-corporate-team-pages'];
                    }
                }
            }
            ?>
            <!-- *****************************************
                 Team section start
            ****************************************** -->

            <section class="wrapper block-team block-section block-bg-image" id="evision-corporate-team">
                <div class="container">
                    <div class="block-title">
                        <?php
                        if(isset($evision_corporate_customizer_all_values['evision-corporate-team-main-title']) && !empty($evision_corporate_customizer_all_values['evision-corporate-team-main-title']) ){
                            echo '<h2>'.wp_kses_post( $evision_corporate_customizer_all_values['evision-corporate-team-main-title'] ).'</h2>';
                            echo '<div class="block-title-divider"><span><i class="fa fa-circle"></i></span></div>';
                        }
                        if( isset( $evision_corporate_customizer_all_values['evision-corporate-team-main-content'] ) && !empty( $evision_corporate_customizer_all_values['evision-corporate-team-main-content'] )){
                            echo '<p class="lead">'.wp_kses_post( $evision_corporate_customizer_all_values['evision-corporate-team-main-content'] ).'</p>';
                        }
                        ?>
                    </div>
                    <?php
                    if( !empty( $evision_corporate_team_pages_ids ) ){
                        ?>
                        <div class="row thumb-circle-container">
                            <div class="row-same-height">
                                <?php
                                $evision_corporate_team_query = new WP_Query(
                                    array(
                                        'post_type' => 'page',
                                        'post__in' => $evision_corporate_team_pages_ids,
                                        'posts_per_page' => 4,
                                        'orderby' => 'post__in'
                                    )
                                );
                                // the query
                                if ( $evision_corporate_team_query->have_posts() ) :
                                    /*loop*/
                                    while ( $evision_corporate_team_query->have_posts() ) :
                                        $evision_corporate_team_query->the_post();
                                        ?>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-md-height">
                                            <div class="thumb-circle-inner">
                                                <div class="thumb-circle-img">
                                                    <a href="<?php the_permalink()?>" title="<?php _e('link','evision-corporate');?>">
                                                        <?php the_post_thumbnail('thumbnail')?>
                                                    </a>
                                                </div>
                                                <div class="thumb-circle-detail">
                                                    <a href="<?php the_permalink()?>" title="<?php _e('view details','evision-corporate');?>">
                                                        <h3><?php the_title()?></h3>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    <?php endwhile; ?>
                                    <!-- end of the loop -->
                                    <?php wp_reset_postdata(); ?>
                                <?php else : ?>
                                    <!--Probably this message never display-->
                                    <p><?php _e( 'Please select pages for team, also make sure to have featured image for all pages', 'evision-corporate' )?></p>
                                <?php endif;
                                ?>
                            </div>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </section>

            <!-- *****************************************
                     Team section ends
            ****************************************** -->
        <?php
        }
    }
endif;
add_action( 'evision_corporate_action_front_team', 'evision_corporate_front_team', 10 );