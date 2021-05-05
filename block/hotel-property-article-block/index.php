<?php

defined( 'ABSPATH' ) || exit;

/**
 * Gutenberg Property Article
 */
if ( !function_exists( 'hotel_gutenberg_property_article' ) ) :
	function hotel_gutenberg_property_article() {
		
		wp_register_script(
			'hotel-property-article-js',
			get_template_directory_uri(). '/block/hotel-property-article-block/build/index.js'
		);

		wp_register_style(
			'hotel-property-article-editor',
			get_template_directory_uri(). '/block/hotel-property-article-block/editor.css',
			array( 'wp-edit-blocks' )
		);
        
		register_block_type('hotel/property-article', array(
			'editor_style' => 'hotel-property-article-editor',
			'editor_script' => 'hotel-property-article-js',
			'render_callback' => 'render_dynamic_property_article'
		));
	}
endif;

function render_dynamic_property_article($attributes) {
		extract($attributes);
        global $post;
        $articleCount = $articleCount ?? 3;
        $query = new WP_Query( array(
        'post_type' => 'property',
        'tax_query' => array(
            array(
            'taxonomy' => $selectTaxonomy,
            'field' => 'term_id',
            'terms' => $term
            )
        )
        ));
		ob_start(); ;
        ?>
        <section class="wp-block-hotel-property-articles">
            <div class="container">
                <header class="property-articles-header">
                    <span class="property-term"><?php echo $term['name'] ?></span>
                    <h3 class="property-article__title"><?php echo $title ?></h3>
                    <h5 class="property-article__desc"><?php echo $description ?></h5>
                </header>
                <div class="property-articles-container">
                    <?php
                    if ( $query->have_posts() ) {
                        while ( $query->have_posts() ) {
                            $query->the_post();
                            $img = get_the_post_thumbnail(
                                $post->ID, 
                                'thumbnail',
                                 array('class'=> 'article-thumbnail')
                            );
                    ?>
                    <article class="article-card">
                        <div class="article-thumbnail-wrap">
                            <a href="http://hotel.loc/property/test-10/">
                            <?php if(has_post_thumbnail()) echo $img; ?>
                            <span class="article-price">$<?php echo get_field('price') . ' / ' . __('Night', 'hotel') ?></span></a>
                        </div> 
                        <div class="article-content">
                           <header class="article-meta">
                                <?php if(get_field('location')): ?>
                                <div class="article-geo"><?php the_field('location') ?></div>
                                <?php endif; ?>
                                <div class="article-tags">
                                <?php if(get_field('bedrooms')): ?>
                                    <span rel="tag" class="article-tag"><i class="fas fa-bed" aria-hidden="true"></i> <?php the_field('bedrooms') ?></span> 
                                <?php endif; ?>
                                <?php if(get_field('bathrooms')): ?>
                                    <span rel="tag" class="article-tag"><i class="fas fa-bath" aria-hidden="true"></i> <?php the_field('bathrooms') ?></span> 
                                <?php endif; ?>
                                <?php if(get_field('restrooms')): ?>
                                    <span rel="tag" class="article-tag"><i class="fas fa-tv" aria-hidden="true"></i> <?php the_field('restrooms') ?></span> 
                                <?php endif; ?>
                                <?php if(get_field('sqrt')): ?> 
                                    <span rel="tag" class="article-tag"><i class="far fa-clone" aria-hidden="true"></i> <?php the_field('sqrt') ?> sqft</span>
                                <?php endif; ?>
                                </div>
                            </header> 
                            <div class="article-author-row">
                                <a href="<?php echo get_author_posts_url($post->post_author) ?>">
                                <?php 
                                    echo get_avatar( $post->post_author, '60' ,'' , get_the_author_meta( 'display_name' , $post->post_author )); 
                                ?>
                                </a> 
                                <div>
                                    <a href="<?php echo get_author_posts_url($post->post_author) ?>" class="article-author-name">
                                        <?php echo get_the_author_meta( 'display_name' , $post->post_author ) ?>
                                    </a> 
                                    <time datetime="01.01.2020" class="article-listed-time">
                                        <?php echo __('Listed on', 'hotel') ?>
                                        <?php echo the_date( 'M d, Y') ?>
                                    </time>
                                </div>
                            </div> 
                            <div class="article-footer">
                                <?php echo do_shortcode('[favorite_button]') ?>

                                </span> <a href="<?php echo get_permalink() ?>" class="btn article-btn-details btn-primary-light">
                                    <?php echo __('Details', 'hotel') ?>
                                </a>
                            </div>
                        </div>
                    </article>
                    <?php
                    }
                    }
                    wp_reset_postdata(); 
                    ?>
                </div>
            </div> 
        </section><!-- .wp-block-hotel-property-articles -->
    
        <?php
		$output = ob_get_contents(); // collect output
		ob_end_clean(); // Turn off ouput buffer

		return $output; // Print output
}

add_action('init', 'hotel_gutenberg_property_article');


