<?php

/**
 * The front-page template file.
 *
 * @package eVision themes
 * @subpackage eVision Corporate
 * @since eVision Corporate 1.0.0
 */

get_header();?>
<?php
/**
 * evision_corporate_action_front_page hook
 * @since eVision Corporate 1.0.0
 *
 * @hooked evision_corporate_action_front_page -  10
 * @sub_hooked evision_corporate_action_front_page -  10
 */
do_action( 'evision_corporate_action_front_page' );

get_footer();
?>
