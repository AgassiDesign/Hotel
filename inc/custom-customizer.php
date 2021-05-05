<?php
/**
 * Hotel Theme Customizer
 *
 * @package Hotel
 */
 
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function hotel_customize_register( $wp_customize ) {
	
	$wp_customize->add_section( 'quick_buy_section' , array(
		'title'    => __( 'Quick Buy', 'hotel' ),
		'priority' => 30,
	) );

	$wp_customize->add_setting( 'quick_buy_ckeckbox' , array(
		'default'           => 1,
		'sanitize_callback' => 'hotel_sanitize_checkbox',
		 'capability'       => 'edit_theme_options',
	) );

	$wp_customize->add_setting( 'quick_buy_input' , array(
		'default' 	 => 'Buy Now',
		'capability' => 'edit_theme_options',
	) );

	$wp_customize->add_setting( 'quick_buy_link' , array(
		'sanitize_callback' => 'hotel_sanitize_url',
		'capability' => 'edit_theme_options',
	) );


	function hotel_sanitize_url( $url ) {
	  return esc_url_raw( $url );
	}

	function hotel_sanitize_checkbox( $checked ) {
	  return ( ( isset( $checked ) && true == $checked ) ? true : false );
	}

	$wp_customize->add_control( 'quick_buy_show', array(
		'label'      => __( 'Show Button', 'hotel' ),
		'section'    => 'quick_buy_section',
		'settings'   => 'quick_buy_ckeckbox',
		 'type'      => 'checkbox',
	)   );


	$wp_customize->add_control( 'quick_buy_input', array(
		'label'      => __( 'Button Text', 'hotel' ),
		'section'    => 'quick_buy_section',
		'settings'   => 'quick_buy_input',
		'description' => __( 'Input custom button text' ),
		 'type'      => 'text',
	)   );

	$wp_customize->add_control( 'quick_buy_link', array(
			'type' 	      => 'url',
			'section'     => 'quick_buy_section', 
			'label'       => __( 'Button Link' ),
			'description' => __( 'Input custom button url' ),
			'input_attrs' => array(
				'placeholder' => __( 'http://www.google.com' ),
			),
	)   );
}
add_action( 'customize_register', 'hotel_customize_register' );
