<?php
/**
 * @package embr
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( sprintf( '<h1 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h1>' ); ?>

		<?php if ( 'post' == get_post_type() ) : ?>
		<div class="entry-meta">
			<?php embr_posted_on(); ?>
		</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'embr' ) ); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'embr' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<?php if( get_theme_mod('embr_show_excerpt_categories', 'yes') != 'yes' ): ?>
	<footer class="entry-footer">
		<?php if ( 'post' == get_post_type() ) : // Hide category and tag text for pages on Search ?>
			<?php
				/* translators: used between list items, there is a space after the comma */
				$categories_list = get_the_category_list( ' ' );
				if ( $categories_list && embr_categorized_blog() ) :
			?>
			<p class="cat-links">
				<?php printf( __( 'Posted in %1$s', 'embr' ), $categories_list ); ?>
			</p>
			<?php endif; // End if categories ?>

			<?php
				/* translators: used between list items, there is a space after the comma */
				$tags_list = get_the_tag_list( '', '' );
				if ( $tags_list ) :
			?>
			<p class="tags-links">
				<?php printf( __( 'Tagged %1$s', 'embr' ), $tags_list ); ?>
			</p>
			<?php endif; // End if $tags_list ?>
		<?php endif; // End if 'post' == get_post_type() ?>

		<?php edit_post_link( __( 'Edit', 'embr' ), '<p><span class="edit-link">', '</span></p>' ); ?>
	</footer><!-- .entry-footer -->
    <?php else: ?>
    <footer class="entry-footer">
		<?php edit_post_link( __( 'Edit', 'embr' ), '<p><span class="edit-link">', '</span></p>' ); ?>
	</footer><!-- .entry-footer -->
    <?php endif; ?>
</article><!-- #post-## -->