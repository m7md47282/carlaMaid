/**
 * Debug helper to check WordPress API responses
 * Run this in browser console to see what data is being returned
 */

// Add this to your component temporarily to debug
export function debugWordPressAPI() {
  const apiUrl = 'https://carlamaid.qa/wordpress/index.php/wp-json/wp/v2/posts?_embed=true&per_page=5&categories=YOUR_CATEGORY_ID';
  
  console.log('🔍 Fetching WordPress posts...');
  
  fetch(apiUrl)
    .then(response => {
      console.log('📡 Response status:', response.status);
      return response.json();
    })
    .then(posts => {
      console.log('📝 Total posts returned:', posts.length);
      
      if (posts.length === 0) {
        console.warn('⚠️ No posts found! Check your WordPress categories.');
        return;
      }
      
      posts.forEach((post: any, index: number) => {
        console.group(`📰 Post ${index + 1}: ${post.title?.rendered || 'No title'}`);
        console.log('Post ID:', post.id);
        console.log('Has _embedded?', !!post._embedded);
        console.log('Has featured media?', !!post._embedded?.['wp:featuredmedia']);
        
        if (post._embedded?.['wp:featuredmedia']?.[0]) {
          const media = post._embedded['wp:featuredmedia'][0];
          console.log('✅ Featured Media Found!');
          console.log('  - Source URL:', media.source_url);
          console.log('  - Has media_details?', !!media.media_details);
          console.log('  - Available sizes:', Object.keys(media.media_details?.sizes || {}));
          
          // Show all available image sizes
          if (media.media_details?.sizes) {
            console.table(
              Object.entries(media.media_details.sizes).map(([name, size]: [string, any]) => ({
                Size: name,
                Width: size.width,
                Height: size.height,
                URL: size.source_url
              }))
            );
          }
        } else {
          console.warn('❌ No featured image set for this post');
          console.log('Tip: Set a featured image in WordPress admin');
        }
        
        // Check if there are images in content
        if (post.content?.rendered) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(post.content.rendered, 'text/html');
          const imgs = doc.querySelectorAll('img');
          if (imgs.length > 0) {
            console.log(`📷 Found ${imgs.length} image(s) in content:`, 
              Array.from(imgs).map(img => img.getAttribute('src'))
            );
          } else {
            console.log('📷 No images in post content');
          }
        }
        
        console.groupEnd();
      });
    })
    .catch(error => {
      console.error('❌ Error fetching posts:', error);
    });
}

// Example usage in browser console:
// Copy and paste this in your browser's DevTools console while on localhost:4200
console.log('💡 To debug WordPress images, run: debugWordPressAPI()');


