<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Hotel
 */

get_header();

/* Start the Loop */
while ( have_posts() ) :
	the_post();
	if(is_front_page() || is_home()):
		get_template_part( 'template-parts/content-home' );
	else:
		get_template_part( 'template-parts/content-page' );
	endif;
	// If comments are open or there is at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) {
		comments_template();
	}
endwhile; // End of the loop.

get_footer();
