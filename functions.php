<?php
/**
 * Hotel functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Hotel
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'hotel_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function hotel_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Hotel, use a find and replace
		 * to change 'hotel' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'hotel', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		add_image_size( 'gallery_thumbnail', 460, 250, true );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary', 'hotel' ),
				'footer'  => __( 'Secondary menu', 'twentytwentyone' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'hotel_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'hotel_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function hotel_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'hotel_content_width', 1140 );
}
add_action( 'after_setup_theme', 'hotel_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function hotel_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer', 'hotel' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here to appear in your footer.', 'hotel' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h5 class="widget-title">',
			'after_title'   => '</h5>',
		)
	);
}
add_action( 'widgets_init', 'hotel_widgets_init' );


function hotel_scripts() {
	wp_enqueue_style( 'hotel-style', get_stylesheet_uri(), array(), _S_VERSION );

    wp_enqueue_style( 'hotel-app-style', get_template_directory_uri() . '/assets/css/app.css', array());

	wp_enqueue_script( 'hotel-manifest-js', get_template_directory_uri() . '/assets/js/manifest.js', array(), '1.0', true);
	wp_enqueue_script( 'hotel-vendor-js', get_template_directory_uri() . '/assets/js/vendor.js', array(), '1.0', true);
	wp_enqueue_script( 'hotel-app-js', get_template_directory_uri() . '/assets/js/app.js', array(), '1.0', true);
	if(is_front_page() || is_home()){
		wp_enqueue_script( 'hotel-vue-app-js', get_template_directory_uri() . '/assets/js/vue-app.js', array(), '1.0', true);
	}
	wp_enqueue_style( 'fonts_googleapis', 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&amp;display=swap', array());

	//Fontawesome script
	//wp_register_script('kit_fontawesome', 'https://kit.fontawesome.com/8769ae9c40.js', array(), '', true); 
   // wp_enqueue_script('kit_fontawesome');
   // wp_script_add_data( 'kit_fontawesome', array( 'crossorigin' ) , array('anonymous' ) );


	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'hotel_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
//require get_template_directory() . '/inc/customizer.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/custom-customizer.php';


/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Custom Gutenberg Blocks
 */
//hotel-amenities-block
 require get_template_directory() . '/block/hotel-amenities-block/index.php';
//hotel-number-block
require get_template_directory() . '/block/hotel-number-list-block/index.php';
//hotel-reviews-block
require get_template_directory() . '/block/hotel-reviews-block/index.php';
//hotel-property-article-block
require get_template_directory() . '/block/hotel-property-article-block/index.php';
//hotel-download-block
require get_template_directory() . '/block/hotel-download-block/index.php';
//hotel-reserve-form-block
require get_template_directory() . '/block/hotel-reserve-form-block/index.php';


//Disable emojis in WordPress
add_action( 'init', 'smartwp_disable_emojis' );

function smartwp_disable_emojis() {
  remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
  remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
  remove_action( 'wp_print_styles', 'print_emoji_styles' );
  remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
  remove_action( 'admin_print_styles', 'print_emoji_styles' );
  remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
  remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
  add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
}

function disable_emojis_tinymce( $plugins ) {
  if ( is_array( $plugins ) ) {
    return array_diff( $plugins, array( 'wpemoji' ) );
  } else {
    return array();
  }
}

// Remove .recentcomments Styles in WordPress Manually
function wpschool_remove_recentcomments_css() {
    global $wp_widget_factory;
    remove_action( 'wp_head', array( $wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style' ) );
}
add_action( 'widgets_init', 'wpschool_remove_recentcomments_css' );


// Remove admin bar
function remove_admin_bar() {

  show_admin_bar(false);

}
add_action('after_setup_theme', 'remove_admin_bar');

// TGM Plugin Activation Class
require_once get_template_directory() . '/inc/TGM-Plugin-Activation/class-tgm-plugin-activation.php';

add_action( 'tgmpa_register', 'hotel_register_required_plugins' );

/**
 * Register the required plugins for this theme.
 */
function hotel_register_required_plugins() {
	/*
	 * Array of plugin arrays. Required keys are name and slug.
	 * If the source is NOT from the .org repo, then source is also required.
	 */
	$plugins = array(

		// This is an example of how to include a plugin bundled with a theme.
		array(
			'name'      => 'Custom Post Type UI',
			'slug'      => 'custom-post-type-ui',
			'required'  => true,
		),
		array(
			'name'     => 'Advanced Custom Fields', 
			'slug'     => 'advanced-custom-fields', 
			'required' => true, 
		),
		array(
			'name'      => 'ACF Photo Gallery Field',
			'slug'      => 'navz-photo-gallery',
			'required'  => true,
		),
		array(
			'name'      => 'ACF to REST API',
			'slug'      => 'acf-to-rest-api',
			'required'  => true,
		),
		array(
			'name'      => 'Favorites',
			'slug'      => 'favorites',
			'required'  => true,
		),
		array(
			'name'      => 'Font Awesome',
			'slug'      => 'font-awesome',
			'required'  => true,
		),
		array(
			'name'      => 'SVG Support',
			'slug'      => 'svg-support',
			'required'  => true,
		),
		array(
			'name'      => 'Disable Comments for Any Post Types',
			'slug'      => 'comments-plus',
			'required'  => true,
		),
		array(
			'name'      => 'Contact Form 7',
			'slug'      => 'contact-form-7',
			'required'  => true,
		),
		array(
			'name'      => 'Contact Form 7 Dynamic Text Extension',
			'slug'      => 'contact-form-7-dynamic-text-extension',
			'required'  => true,
		),
		array(
			'name'      => 'UpdraftPlus WordPress Backup Plugin',
			'slug'      => 'updraftplus',
			'required'  => true,
		),
	);

	/*
	 * Array of configuration settings. Amend each line as needed.
	 *
	 * TGMPA will start providing localized text strings soon. If you already have translations of our standard
	 * strings available, please help us make TGMPA even better by giving us access to these translations or by
	 * sending in a pull-request with .po file(s) with the translations.
	 *
	 * Only uncomment the strings in the config array if you want to customize the strings.
	 */
	$config = array(
		'id'           => 'Hotel',                 // Unique ID for hashing notices for multiple instances of TGMPA.
		'default_path' => '',                      // Default absolute path to bundled plugins.
		'menu'         => 'tgmpa-install-plugins', // Menu slug.
		'parent_slug'  => 'themes.php',            // Parent menu slug.
		'capability'   => 'edit_theme_options',    // Capability needed to view plugin install page, should be a capability associated with the parent menu used.
		'has_notices'  => true,                    // Show admin notices or not.
		'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
		'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
		'is_automatic' => false,                   // Automatically activate plugins after installation or not.
		'message'      => '',                      // Message to output right before the plugins table.
	);

	tgmpa( $plugins, $config );
}


// json_api_encode_acf
// Enable the option show in rest
add_filter( 'acf/rest_api/field_settings/show_in_rest', '__return_true' );


/**
 * Custom REST url hotel/v1/properties/all-terms
 */
 require get_template_directory() . '/inc/Get_All_Property_Taxonomies_Rest.php';


/**
 * Add Rest Filter ACF data
 */
add_filter( 'rest_query_vars', function ( $valid_vars ) {
    return array_merge( $valid_vars, array(  'date_in', 'date_out', 'location',  'meta_query' ) );
} );


// And this for a custom post type called 'price'
add_filter( 'rest_property_collection_params', 'filter_add_rest_orderby_params', 10, 1 );
/**
 * Add price to the list of permitted orderby values
 */
function filter_add_rest_orderby_params( $params ) {
	$params['orderby']['enum'][] = 'price';
	return $params;
}

/**
 * Add Custom Block Category
 */
function my_plugin_block_categories( $categories, $post ) {
    return array_merge(
        array(
            array(
                'slug' => 'hotel',
                'title' => __( 'Hotel', 'hotel' ),
                'icon'  => 'wordpress',
            ),
        )
	,
	$categories
    );
}
add_filter( 'block_categories', 'my_plugin_block_categories', 10, 2 );

// Apply to fields named "my_field_name".
function my_acf_format_value( $value, $post_id, $field ) {
	return str_replace(".", ",", $value);
}

add_filter('acf/format_value/name=sqrt', 'my_acf_format_value', 10, 3);

/**
 * Add Rest rest_property_query
 */
add_filter( 'rest_property_query', function( $args, $request ) {
	/**
	 * add filter custom filed
	 */
	require get_template_directory() . '/inc/rest_property_query/filter_custom_field.php';

	/**
	 * add order custom filed
	 */
	require get_template_directory() . '/inc/rest_property_query/order_custom_field.php';


	// update filter taxonomy relation AND
	if ( $args[ 'tax_query' ] ) {
		for ( $i = 0; $i < count( $args[ 'tax_query' ] ); $i++) {
			$args[ 'tax_query' ][$i]['operator'] = 'AND';
		}
    }
	$tax_query = ['relation' => 'AND', $args['tax_query']];
	unset( $args[ 'tax_query' ] );
	$args[ 'tax_query' ] = $tax_query;

	
    return $args;
}, 10, 2);