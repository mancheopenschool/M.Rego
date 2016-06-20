<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package eVision themes
 * @subpackage eVision Corporate
 * @since eVision Corporate 1.0.0
 */

/**
 * evision_corporate_action_after_content hook
 * @since eVision Corporate 1.0.0
 *
 * @hooked evision_corporate_after_content - 10
 */
do_action( 'evision_corporate_action_after_content' );

/**
 * evision_corporate_action_before_footer hook
 * @since eVision Corporate 1.0.0
 *
 * @hooked null
 */
do_action( 'evision_corporate_action_before_footer' );

/**
 * evision_corporate_action_footer hook
 * @since eVision Corporate 1.0.0
 *
 * @hooked evision_corporate_footer - 10
 */
do_action( 'evision_corporate_action_footer' );

/**
 * evision_corporate_action_after_footer hook
 * @since eVision Corporate 1.0.0
 *
 * @hooked null
 */
do_action( 'evision_corporate_action_after_footer' );

/**
 * evision_corporate_action_after hook
 * @since eVision Corporate 1.0.0
 *
 * @hooked evision_corporate_page_end - 10
 */
do_action( 'evision_corporate_action_after' );
?>
<?php wp_footer(); ?>
</body>
</html>
