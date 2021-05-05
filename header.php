<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Hotel
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="preconnect" href="https://fonts.gstatic.com">
	<?php wp_head(); ?>
    <script>
       window.page_title =  '<?php the_title();?>';
    </script>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'hotel' ); ?></a>
 <header class="site-header">
        <div class="header-container container">
            <div class="site-branding">
                <?php if ( function_exists( 'the_custom_logo' ) ) {
                    the_custom_logo();
                } ?>
            </div><!-- .site-branding -->
            <?php if ( has_nav_menu( 'primary' ) ) : ?>
           	<nav id="site-navigation" class="primary-navigation site-nav" role="navigation" aria-label="<?php esc_attr_e( 'Primary menu', 'hotel' ); ?>">
	        <?php
                wp_nav_menu(
                    array(
                        'theme_location'  => 'primary',
                        //'menu_class'      => 'menu-wrapper',
                        //'container_class' => 'primary-menu-container',
                        'items_wrap'      => '<ul id="primary-menu-list" class="%2$s nav-menu">%3$s</ul>',
                        'fallback_cb'     => false,
                    )
                );
                
            ?>
            </nav><!-- #site-navigation -->
            <?php endif; ?>
            <div class="buy-now">
                <a href="#" class="">
                    <span class="btn btn-primary"><?php _e('Buy Now', 'hotel')?></span>
                </a>
            </div><!-- .buy-now -->
        </div><!--  .site-header-container -->
	</header><!-- .site-header -->
    <main class="site-main">