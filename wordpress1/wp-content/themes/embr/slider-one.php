    <div class="header-one">
        
        <div class="responsive-container">
       
       		<div class="header-one-overlay">
            
            	<h1>
                	<?php
						if( get_theme_mod('embr_header_one_name') ){
							echo get_theme_mod('embr_header_one_name');
						}else{
							_e( 'Responsive Business Theme', 'embr' );
						}
					?>
                </h1>
                <p>
                	<?php
						if( get_theme_mod('embr_header_one_text') ){
							echo get_theme_mod('embr_header_one_text');
						}else{
							_e( 'Awesome Theme with header, product sections, client testimonials, social icons.', 'embr' );
						}
					?>                
                </p>
                <p>
                <a href="<?php (get_theme_mod('embr_header_one_cta_link')) ? $embr_header_link = get_theme_mod('embr_header_one_cta_link') : $embr_header_link = "#"; echo $embr_header_link; ?>">
                	<?php
						if( get_theme_mod('embr_header_one_cta') ){
							echo get_theme_mod('embr_header_one_cta');
						}else{
							_e( 'Download Now', 'embr' );
						}
					?>                
                </a>
                </p>
            
            </div><!-- .header-one-content -->
        
        </div>
         
    </div>