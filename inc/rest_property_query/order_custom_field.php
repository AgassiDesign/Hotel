<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


/**
* add order custom filed
*/
$order_by = esc_html($request->get_param( 'orderby' ));

if (!empty($order_by) && 'price' === $order_by) {
		
    $args['meta_query'][] = array(
		'relation' => 'AND',
		array(
        'key'     => 'price',
        'value'   => 0,
        'compare' => '>=',
		'type' => 'numeric'
		),
	);      
}
