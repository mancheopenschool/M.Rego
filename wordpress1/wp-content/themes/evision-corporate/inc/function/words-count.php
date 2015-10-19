<?php
/**
* Returns word count of the sentences.
*
* @since @since Evision Corporate 1.0.0
*/
if ( ! function_exists( 'evision_corporate_words_count' ) ) :
	function evision_corporate_words_count( $length = 25, $evision_corporate_content = null ) {
		$length = absint( $length );
		$source_content = preg_replace( '`\[[^\]]*\]`', '', $evision_corporate_content );
		$trimmed_content = wp_trim_words( $source_content, $length, '...' );
		return $trimmed_content;
	}
endif;