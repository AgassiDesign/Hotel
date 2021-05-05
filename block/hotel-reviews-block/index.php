<?php

defined( 'ABSPATH' ) || exit;

/**
 * Gutenberg Numbet Reviews
 */
if ( !function_exists( 'hotel_gutenberg_reviews' ) ) :
	function hotel_gutenberg_reviews() {
		
		wp_register_script(
			'hotel-reviews-js',
			get_template_directory_uri(). '/block/hotel-reviews-block/build/index.js',
			['wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n', 'wp-polyfill']
		);

		wp_register_style(
			'hotel-reviews-editor',
			get_template_directory_uri(). '/block/hotel-reviews-block/editor.css',
			array( 'wp-edit-blocks' )
		);

		wp_register_style(
			'hotel-reviews',
			get_template_directory_uri(). '/block/hotel-reviews-block/style.css',
			array()
		);


		register_block_type('hotel/reviews', array(
			'style' => 'reviews',
			'editor_style' => 'hotel-reviews-editor',
			'editor_script' => 'hotel-reviews-js',
			'render_callback' => 'render_dynamic_reviews'
		));
	}
endif;

function render_dynamic_reviews($attributes) {
		extract($attributes);
        $maxReviewCount = $maxReviewCount ?? 0; 
		ob_start(); 
		$content = $attributes['content'];
		?>
			<div class="wp-block-hotel-reviews">
                <h3 class="reviews-list__title"><?php _e('Reviews', 'hotel') ?></h3>
                <ul class="reviews-list">
                                <li class="reviews-list__item">
                                    <span class="reviews-item"><?php _e('Cleanliness', 'hotel') ?></span>
                                    <progress class="reviews-progress__bar" value="<?php echo $cleanlinessProgress ?>" max="5"></progress>
                                    <span class="reviews-item__value"><?php echo $cleanlinessProgress ?? 0 ?></span>
                                </li>
                               <li class="reviews-list__item">
                                    <span class="reviews-item"><?php _e('Communication', 'hotel') ?></span>
                                    <progress class="reviews-progress__bar" value="<?php echo $communicationProgress ?>" max="5"></progress>
                                    <span class="reviews-item__value"><?php echo $communicationProgress ?? 0 ?></span>
                                </li>
                                <li class="reviews-list__item">
                                    <span class="reviews-item"><?php _e('Check-in', 'hotel') ?></span>
                                    <progress class="reviews-progress__bar" value="<?php echo $checkInProgress ?>" max="5"></progress>
                                    <span class="reviews-item__value"><?php echo $checkInProgress ?? 0 ?></span>
                                </li>
                                <li class="reviews-list__item">
                                    <span class="reviews-item"><?php _e('Accuracy', 'hotel') ?></span>
                                    <progress class="reviews-progress__bar" value="<?php echo $accuracyProgress ?>" max="5"></progress>
                                    <span class="reviews-item__value"><?php echo $accuracyProgress ?? 0 ?></span>
                                </li>
                                <li class="reviews-list__item">
                                    <span class="reviews-item"><?php _e('Location', 'hotel') ?></span>
                                    <progress class="reviews-progress__bar" value="<?php echo $locationProgress ?>" max="5"></progress>
                                    <span class="reviews-item__value"><?php echo $locationProgress ?? 0 ?></span>
                                </li>
                                <li class="reviews-list__item">
                                    <span class="reviews-item"><?php _e('Value', 'hotel') ?></span>
                                    <progress class="reviews-progress__bar" value="<?php echo $valueProgress ?>" max="5"></progress>
                                    <span class="reviews-item__value"><?php echo $valueProgress ?? 0 ?></span>
                                </li>
                </ul>
          
                <div class="reviews-area">
                    <ol class="reviews-post">
                    <?php		
                
                    if( $comments = get_comments(array('post_id' => get_the_ID(),) ) ):

                    for($i = 0; $i < count($comments) && $i < $maxReviewCount; $i++):
                        $comment = $comments[$i]; 
                        $date = strtoupper(get_comment_date( "d M Y", $comment->comment_ID));
                    ?>
                        <li class="review depth-1">
                            <article class="review-body">
                                <div class="review-meta">
                                    <div class="review-avatar">
                                        <?php echo get_avatar($comment) ?>				
                                    </div><!-- .review-author -->
                                    <div class="review-container">
                                        <div class="review-metadata vcard">
                                            <div class="fn">
                                                <span class="url"><?php echo $comment->comment_author ?></span>
                                            </div>
                                            <span>
                                                <time datetime="<?php echo $date ?>"><?php echo $date ?></time>
                                            </span> 				
                                        </div><!-- .review-metadata -->
                                        <div class="review-content">
                                            <?php echo $comment->comment_content; ?>
                                        </div><!-- .review-content -->	
                                    </div>
                                </div><!-- .review-meta -->
            
                            </article><!-- .review-body -->
                        </li><!-- #review-## -->
                <?php
                    endfor; endif;
                    ?>
                    </ol><!-- .reviews-list -->                            
                </div><!-- .reviews-area -->
            </div><!-- .wp-block-hotel-reviews -->
        <?php
		$output = ob_get_contents(); // collect output
		ob_end_clean(); // Turn off ouput buffer

		return $output; // Print output
}

add_action('init', 'hotel_gutenberg_reviews');


