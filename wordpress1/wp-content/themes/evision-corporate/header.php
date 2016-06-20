<?php
/**
 * The default template for displaying header
 *
 * @package eVision themes
 * @subpackage eVision Corporate
 * @since eVision Corporate 1.0.0
 */

/**
 * evision_corporate_action_before_head hook
 * @since eVision Corporate 1.0.0
 *
 * @hooked evision_corporate_set_global -  0
 * @hooked evision_corporate_doctype -  10
 */
do_action( 'evision_corporate_action_before_head' );?>
    <head>

        <?php
        /**
         * evision_corporate_action_before_wp_head hook
         * @since eVision Corporate 1.0.0
         *
         * @hooked evision_corporate_before_wp_head -  10
         */
        do_action( 'evision_corporate_action_before_wp_head' );

        wp_head();

        /**
         * evision_corporate_action_after_wp_head hook
         * @since eVision Corporate 1.0.0
         *
         * @hooked null
         */
        do_action( 'evision_corporate_action_after_wp_head' );
        ?>

    </head>

<body <?php body_class();
/**
 * evision_corporate_action_body_attr hook
 * @since eVision Corporate 1.0.0
 *
 * @hooked evision_corporate_body_attr- 10
 */
do_action( 'evision_corporate_action_body_attr' );?>>

<?php
/**
 * evision_corporate_action_before hook
 * @since eVision Corporate 1.0.0
 *
 * @hooked evision_corporate_page_start - 10
 * @hooked evision_corporate_page_start - 15
 */
do_action( 'evision_corporate_action_before' );

/**
 * evision_corporate_action_before_header hook
 * @since eVision Corporate 1.0.0
 *
 * @hooked evision_corporate_skip_to_content - 10
 */
do_action( 'evision_corporate_action_before_header' );


/**
 * evision_corporate_action_header hook
 * @since eVision Corporate 1.0.0
 *
 * @hooked evision_corporate_after_header - 10
 */
do_action( 'evision_corporate_action_header' );


/**
 * evision_corporate_action_after_header hook
 * @since eVision Corporate 1.0.0
 *
 * @hooked null
 */
do_action( 'evision_corporate_action_after_header' );


/**
 * evision_corporate_action_before_content hook
 * @since eVision Corporate 1.0.0
 *
 * @hooked evision_corporate_before_content - 10
 */
do_action( 'evision_corporate_action_before_content' );
?>
