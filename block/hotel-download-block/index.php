<?php

defined( 'ABSPATH' ) || exit;

/**
 * Gutenberg Download Block
 */
if ( !function_exists( 'hotel_gutenberg_download' ) ) :
	function hotel_gutenberg_download() {
		
		wp_register_script(
			'hotel-download-js',
			get_template_directory_uri(). '/block/hotel-download-block/build/index.js'
		);

		wp_register_style(
			'hotel-download-editor',
			get_template_directory_uri(). '/block/hotel-download-block/build/editor.css',
			array( 'wp-edit-blocks' )
		);
        
		register_block_type('hotel/download', array(
			'editor_style' => 'hotel-download-editor',
			'editor_script' => 'hotel-download-js',
			'render_callback' => 'render_dynamic_download'
		));
	}
endif;

function render_dynamic_download($attributes) {
	extract($attributes);
	ob_start(); ;
    ?>
<div class="wp-block-hotel-download" style="background-color:<?php echo $background_color ?>">
    <div class="container">
        <h3 class="property-download__title"><?php echo $title; ?></h3>
        <div class="property-download__description"><?php echo $description; ?></div>
        <div class="property-download-content">
			<?php foreach($buttons as $button): ?>
            <a class="property-download__button" href="link">
                <i class="<?php echo $button['iconClass'] ?> fa-2x"></i>
                <span>
                    <span><?php echo $button['subText'] ?></span><br><?php echo $button['text'] ?>
                </span>
            </a>
			<?php endforeach; ?>
        </div>
    </div>
</div>
<?php
	$output = ob_get_contents(); // collect output
	ob_end_clean(); // Turn off ouput buffer

	return $output; // Print output
}

add_action('init', 'hotel_gutenberg_download');