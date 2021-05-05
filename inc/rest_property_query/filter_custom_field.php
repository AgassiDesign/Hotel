<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// search  from custom filed
$location = esc_html($request->get_param( 'location' ));
$date_in = esc_html($request->get_param( 'date_in' ));
$date_out = esc_html($request->get_param( 'date_out' ));
if ( !empty($location)) {
	
        $args['meta_query'][] = array(
		'relation' => 'AND',
		array(
        'key'     => 'location',
        'value'   => $location,
        'compare' => 'LIKE',
     )
);
}
if (!empty($date_in) && !empty($date_out)) {
	
    $args['meta_query'][] = array(
		'relation' => 'OR',
		array(
        'key'     => 'date_out',
        'value'   => date('Y-m-d', strtotime($date_in)),//acf bug formating date
        'compare' => '<',
		'type' => 'date'
		),
		array(
		'key'		=> 'date_in',
		'compare'	=> '>',
		'type'		=> 'date',
		'value'		=>  date('Y-m-d', strtotime($date_out)),
		)
	);      
}