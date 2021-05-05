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
  class Get_All_Property_Taxonomies_Rest
{
    public function __construct()
    {
        register_rest_route('hotel/v1/properties', '/all-terms', 
        array(
            'methods' => 'GET',
            'callback' => array($this, 'get_all_terms'),
        ));
    }

    public function get_all_terms($object)
    {
        $taxonomies = get_object_taxonomies( 'property', 'objects' );
        
        $taxonomy = [];
        foreach ($taxonomies as $taxonomy_name) {
            //print_r($taxonomy_name);exit;
             $taxonomy[] = array(
                'name' => $taxonomy_name->label,
                'query_var' => $taxonomy_name->query_var,
                'id' => $taxonomy_name->query_var,
                'data' => get_terms(array(
                    'taxonomy' => $taxonomy_name->name,
                    'hide_empty' => false,
                ))
        ); 
        }
        return new WP_REST_Response($taxonomy, 200);
    }
}

add_action('rest_api_init', function () {
    $all_terms = new Get_All_Property_Taxonomies_Rest;
});