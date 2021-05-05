<?php

defined( 'ABSPATH' ) || exit;

/**
 * Gutenberg Numbet List Block
 */
if ( !function_exists( 'hotel_gutenberg_amenities_list' ) ) :
	function hotel_gutenberg_amenities_list() {
		wp_register_script(
			'hotel-amenities-list-js',
			get_template_directory_uri(). '/block/hotel-amenities-block/build/index.js'
		);

		wp_register_style(
			'hotel-amenities-list-editor',
			get_template_directory_uri(). '/block/hotel-amenities-block/editor.css',
			array( 'wp-edit-blocks' )
		);

		register_block_type('hotel/amenities-list', array(
			'style' => 'amenities-list',
			'editor_style' => 'hotel-amenities-list-editor',
			'editor_script' => 'hotel-amenities-list-js'
		));
	}
endif;

add_action('init', 'hotel_gutenberg_amenities_list');


