# Blog Featured Images Fix

## Problem
Blog thumbnails in the blogs list were showing static/default images instead of the actual post images.

## Root Cause
The application was only trying to extract images from the post content HTML, but WordPress stores **Featured Images** separately in the media library and requires a special API parameter (`_embed`) to fetch them.

## Solution Implemented

### 1. Updated WordPress Service
**File:** `src/app/shared/services/word-press.service.ts`

Added `_embed: true` parameter to the `getPosts()` method to fetch embedded media data (including featured images) from WordPress API.

```typescript
getPosts(params: any) {
  // Add _embed parameter to get featured media
  const paramsWithEmbed = { ...params, _embed: true };
  return this._http.get(`${this.wordpressApiBaseUrl}/posts`, { params: paramsWithEmbed });
}
```

### 2. Updated Image Extraction Methods
**Files Modified:**
- `src/app/blogs-list/blogs-list.component.ts`
- `src/app/blogs-open/blogs-open.component.ts`
- `src/app/landing/landing.component.ts`

Replaced `getFirstImage(html: string)` with `getPostImage(post: any)` that:
1. **First checks** for WordPress featured media in `post._embedded['wp:featuredmedia']`
2. **Optimizes performance** by preferring medium_large or medium sized images
3. **Falls back** to extracting first image from post content if no featured image exists
4. **Returns default** image if nothing is found

### 3. Updated HTML Templates
**Files Modified:**
- `src/app/blogs-list/blogs-list.component.html`
- `src/app/landing/landing.component.html`

Changed method calls from:
```html
[src]="getFirstImage(post.content.rendered)"
```

To:
```html
[src]="getPostImage(post)"
```

## How to Set Featured Images in WordPress

### For New Blog Posts:
1. Log in to WordPress admin panel
2. Create or edit a post
3. In the right sidebar, find the **"Featured Image"** section
4. Click **"Set featured image"**
5. Upload or select an image from the media library
6. Click **"Set featured image"** button
7. Publish or update the post

### For Existing Blog Posts:
1. Go to Posts → All Posts
2. Edit each post that needs a featured image
3. Follow steps 3-7 above

### Image Recommendations:
- **Recommended size:** 1200x630px (or 16:9 aspect ratio)
- **Format:** JPG or PNG
- **File size:** Keep under 500KB for optimal loading
- **Alt text:** Always add descriptive alt text for SEO

## Benefits of This Fix

✅ **Dynamic Thumbnails:** Each blog post can have its unique featured image  
✅ **Better Performance:** Uses optimized medium-sized images instead of full resolution  
✅ **Fallback Support:** Still works if posts only have images in content  
✅ **WordPress Best Practices:** Uses the proper featured image system  
✅ **No Content Limitation:** No need to embed images in post content for thumbnails

## Testing

After deploying these changes:
1. Set featured images for a few blog posts in WordPress
2. Visit the blogs list page
3. Verify that each post shows its respective featured image
4. Posts without featured images should show the default placeholder

## WordPress API Response Structure

With `_embed=true`, the API returns:
```json
{
  "id": 123,
  "title": { "rendered": "Blog Title" },
  "content": { "rendered": "<p>Content...</p>" },
  "_embedded": {
    "wp:featuredmedia": [
      {
        "source_url": "https://example.com/image.jpg",
        "media_details": {
          "sizes": {
            "medium": { "source_url": "..." },
            "medium_large": { "source_url": "..." },
            "full": { "source_url": "..." }
          }
        }
      }
    ]
  }
}
```

## Future Improvements

Consider adding:
- Image lazy loading for better performance
- Placeholder/skeleton loading while images load
- Image caching strategy
- Responsive image srcset for different screen sizes


