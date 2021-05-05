<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Hotel
 */
//Get the images ids from the post_metadata
$images = acf_photo_gallery('gallery', $post->ID);		
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <section class="single-page-gallery <?php echo (!empty($images) ?: 'gallery-center')?>">
		<?php hotel_post_thumbnail(); ?>
		<div class="single-gallery-grid">
			<?php 
				//Check if return array has anything in it
				if( count($images) ):
					//Cool, we got some data so now let's loop over it
				foreach($images as $image):
						//var_dump($image);exit;
						$id = $image['id']; // The attachment id of the media
						$title = $image['title']; //The title
						$caption= $image['caption']; //The caption
						$full_image_url= $image['full_image_url']; //Full size image url
						$full_image_url_resize = acf_photo_gallery_resize_image($full_image_url, 270, 240); //Resized size to 262px width by 160px height image url
						$thumbnail_image_url= $image['thumbnail_image_url']; //Get the thumbnail size image url 150px by 150px
						$url= $image['url']; //Goto any link when clicked
					?>
					<div class="thumbnail">
						<a class="thumbnail-link" title="<?php echo $title ?>" data-fslightbox="gallery" href="<?php echo $full_image_url; ?>"
						style="background-image: url(<?php echo $full_image_url_resize ?>);">
						</a>
					</div>
				<?php endforeach;?>
				<span class="gallery-view btn btn-white"><?php echo __('View Photos', 'hotel') ?></span>
				<?php  endif; ?>
        </div>
	</section><!-- .single-page-gallery -->
	<header class="entry-header container">
        <h1 class="entry-title"><?php the_title() ?></h1>
        <div class="article-meta entry-meta">
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
            </div><!-- .article-tags -->
        </div><!-- .entry-meta -->
    </header><!-- .entry-header -->
	<div class="entry-content">
		<?php
		the_content();
		?>
	</div><!-- .entry-content -->

	<?php if ( get_edit_post_link() ) : ?>
		<footer class="entry-footer">
			<?php
			edit_post_link(
				sprintf(
					wp_kses(
						/* translators: %s: Name of current post. Only visible to screen readers */
						__( 'Edit <span class="screen-reader-text">%s</span>', 'hotel' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					wp_kses_post( get_the_title() )
				),
				'<span class="edit-link">',
				'</span>'
			);
			?>
		</footer><!-- .entry-footer -->
	<?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->
