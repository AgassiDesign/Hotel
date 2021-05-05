<?php

defined( 'ABSPATH' ) || exit;

/**
 * Gutenberg Reserve Form Block
 */
if ( !function_exists( 'hotel_gutenberg_reserve_form' ) ) :
	function hotel_gutenberg_reserve_form() {
		
		wp_register_script(
			'hotel-reserve-form-js',
			get_template_directory_uri(). '/block/hotel-reserve-form-block/build/index.js'
		);

		wp_register_style(
			'hotel-reserve-form-editor',
			get_template_directory_uri(). '/block/hotel-reserve-form-block/build/editor.css',
			array( 'wp-edit-blocks' )
		);
        
		register_block_type('hotel/reserve-form', array(
			'editor_style' => 'hotel-reserve-form-editor',
			'editor_script' => 'hotel-reserve-form-js',
			'render_callback' => 'render_dynamic_reserve_form'
		));
	}
endif;

function render_dynamic_reserve_form($attributes) {
	extract($attributes);
	$price = get_field( "price", 0 );
	$total_price = (int)$price + (int)$serviceFee;
	ob_start(); ;
    ?>
<div class="wp-block-hotel-reserve-form">
    <div class="reserve-form-header">
        <h3 class="reserve-form__title">
            $<?php echo $price ?> / <span>Night</span>
        </h3>
    </div>
    <div class="reserve-form-content">
        <?php echo do_shortcode($shortcode); ?>
    </div>
    <div class="reserve-form-footer">
        <p>
            <?php _e('You won’t be charged yet', 'hotel'); ?>
        </p>
        <p>
            <?php _e('Certain reservations may also require a security deposit.', 'hotel'); ?>
        </p>
    </div>
</div>
<?php
	$output = ob_get_contents(); // collect output
	ob_end_clean(); // Turn off ouput buffer
	 $calc_html ='
	 <div class="form7-calc">
	 	<div class="form7-calc-line form7-price-perday" data-calc_price="' . $price .'"><span>$' . $price .' x 1 nights</span><span>$' . $price .'</span></div>
    	<div class="form7-calc-line"><span>Service fee <i class="far fa-question-circle"></i></span><span>$'. $serviceFee .'</span></div>
    	<div class="form7-calc-line form7-price-total" data-fee="'. $serviceFee .'"><span>Total</span><span>$'. $total_price .'</span></div>
	</div>';
	$output_array = explode('<div class="form7-calc"></div>',  $output);

	if($output_array && $output_array[1]) {
		$output = $output_array[0] . $calc_html . $output_array[1];
	}
	return $output; // Print output
}

add_action('init', 'hotel_gutenberg_reserve_form');