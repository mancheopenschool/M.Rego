<?php
/**
 * evision themes init file
 *
 * @package eVision themes
 * @subpackage eVision Corporate
 * @since eVision Corporate 1.0.0
 */

/**
 * Customizer additions.
 */
$evision_corporate_customizer_file_path = evision_corporate_file_directory('inc/customizer/customizer.php');
require $evision_corporate_customizer_file_path;

/**
 * TGM-Plugin-Activation.
 */
$evision_corporate_tgm_plugin_file_path = evision_corporate_file_directory('inc/frameworks/TGM-Plugin-Activation/class-tgm-plugin-activation.php');
require $evision_corporate_tgm_plugin_file_path;

/**
 * Include Functions
 */
$evision_corporate_words_count_file_path = evision_corporate_file_directory('inc/function/words-count.php');
require $evision_corporate_words_count_file_path;

$evision_corporate_front_disable_file_path = evision_corporate_file_directory('inc/function/front-disable.php');
require $evision_corporate_front_disable_file_path;

/**
 * Include Hooks
 */
$evision_corporate_hooks_init_path = evision_corporate_file_directory('inc/hooks/init.php');
require $evision_corporate_hooks_init_path;

$evision_corporate_hooks_tgmpa_file_path = evision_corporate_file_directory('inc/hooks/tgmpa.php');
require $evision_corporate_hooks_tgmpa_file_path;

$evision_corporate_hooks_wp_head_file_path = evision_corporate_file_directory('inc/hooks/wp-head.php');
require $evision_corporate_hooks_wp_head_file_path;

$evision_corporate_hooks_header_file_path = evision_corporate_file_directory('inc/hooks/header.php');
require $evision_corporate_hooks_header_file_path;

$evision_corporate_hooks_footer_file_path = evision_corporate_file_directory('inc/hooks/footer.php');
require $evision_corporate_hooks_footer_file_path;

$evision_corporate_hooks_sidebar_file_path = evision_corporate_file_directory('inc/hooks/sidebar.php');
require $evision_corporate_hooks_sidebar_file_path;

$evision_corporate_hooks_front_page_file_path = evision_corporate_file_directory('inc/hooks/front-page.php');
require $evision_corporate_hooks_front_page_file_path;

/**
 * Include sidebar widgets
 */
$evision_corporate_sidebar_widget_init_path = evision_corporate_file_directory('inc/sidebar-widget-init.php');
require $evision_corporate_sidebar_widget_init_path;