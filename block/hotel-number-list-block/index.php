<?php

defined( 'ABSPATH' ) || exit;

/**
 * Gutenberg Numbet List Block
 */
if ( !function_exists( 'hotel_gutenberg_number_list' ) ) :
	function hotel_gutenberg_number_list() {
		
		wp_register_script(
			'hotel-number-list-js',
			get_template_directory_uri(). '/block/hotel-number-list-block/build/index.js',
			['wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n', 'wp-polyfill']
		);

		wp_register_style(
			'hotel-number-list-editor',
			get_template_directory_uri(). '/block/hotel-number-list-block/editor.css',
			array( 'wp-edit-blocks' )
		);

		wp_register_style(
			'hotel-number-list',
			get_template_directory_uri(). '/block/hotel-number-list-block/style.css',
			array()
		);


		register_block_type('hotel/number-list', array(
			'style' => 'number-list',
			'editor_style' => 'hotel-number-list-editor',
			'editor_script' => 'hotel-number-list-js',
			'render_callback' => 'render_dynamic_number_list'
		));
	}
endif;

function render_dynamic_number_list($attributes) {
		ob_start();
		$content = preg_split('~</li>~', preg_replace('/<li>/', '', $attributes['content']));
		//$content = preg_split('~№~', preg_replace('/<[^>]*>/', '№', $attributes['content']));
		$marker = 1;
		?>
			<div class="wp-block-number-list-block">
                <ul class="number-list">
		<?php for($i = 0; $i < count($content); $i = $i+2, $marker++): ?>	
			<?php if($content[$i] && $content[$i+1]):?>
                    <li class="number-list-item">
                        <span class="number-list__marker"><?php echo $marker ?></span>
                        <p class="list-item__title"><?php echo $content[$i];?></p>
                        <span class="list-item__desc"><?php echo $content[$i+1];?></span>
                    </li>
			<?php endif; ?>
		<?php endfor; ?>
		    	</ul><!-- .number-list -->
        	</div>
		<?php
		$output = ob_get_contents(); // collect output
		ob_end_clean(); // Turn off ouput buffer

		return $output; // Print output
}

add_action('init', 'hotel_gutenberg_number_list');


