<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Hotel
 */

?>
</main><!-- site-main -->
<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <section class="widget">
                <div class="site-branding">
                    <?php if ( function_exists( 'the_custom_logo' ) ) {
                    the_custom_logo();
                } ?>
                </div><!-- .site-branding-->
                <?php if ( !empty(get_bloginfo('name'))):?>
                     <h1 class="entry-title"><?php echo get_bloginfo('name') ?></h1>
                <?php endif ?>
                <p>
                    <?php echo get_bloginfo('description') ?>
                </p>
            </section><!-- .widget-->
			<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
				<?php dynamic_sidebar( 'sidebar-1' ); ?>
			<?php endif; ?>
        </div><!-- .footer-grid-->
        <div class="site-info">
            <a href="https://wordpress.org/">
                © 2020 YourSite. All Rights Reserved.
            </a>
        </div><!-- .site-info -->
    </div><!-- .container -->
</footer><!-- .site-footer -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>