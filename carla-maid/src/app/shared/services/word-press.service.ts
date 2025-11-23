import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable, switchMap, map, forkJoin, of } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class WordPressService {
  private wordpressApiBaseUrl = environment.wordpressApiBaseUrl;

  constructor(private _http: HttpClient, private _sharedService: SharedService) { }

  /**
   * Fetches posts from the WordPress API with the provided parameters.
   * 
   * @param params - The query parameters to be sent with the HTTP request. This can include filters like
   *                 `orderby`, `order`, `per_page`, and others.
   * 
   * @returns An observable containing the response data from the API, which is an array of posts.
   */
  getPosts(params: any) {
    // Add _embed parameter to get featured media
    const paramsWithEmbed = { ...params, _embed: true };
    return this._http.get(`${this.wordpressApiBaseUrl}/posts`, { params: paramsWithEmbed });
  }

  /**
   * Fetches all categories from the WordPress API.
   * 
   * @returns An observable containing the response data from the API, which is an array of categories.
   */
  getCategories() {
    return this._http.get<any[]>(`${this.wordpressApiBaseUrl}/categories`);
  }

  /**
   * Fetches posts from specific categories, identified by their names, with the provided parameters.
   * 
   * @param categoryNames - An array of category names for which to fetch posts.
   * @param postsParams - Additional query parameters for fetching posts (e.g., `orderby`, `order`, `per_page`).
   * 
   * @returns An observable containing an array of posts belonging to the specified categories.
   * 
   * @throws {Error} If none of the categories are found, an error will be thrown.
   */
  getPostsByCategoriesNames(postsPage: string, categoryNames: string[], postsParams: any): Observable<any[]> {
    return this.getCategories().pipe(
      switchMap(categories => {
        const categoryIds = categories
          .filter(cat => categoryNames.some(name => cat.name.toLowerCase() === name.toLowerCase()))
          .map(cat => cat.id);

          const postsPageCategoryId = categories.find(cat => cat.name.toLowerCase() === postsPage.toLowerCase())?.id;
        
        if (categoryIds.length !== categoryNames.length) {
          return of([]);
        }
        const preparedParams = this._sharedService.prepareParams({ 
          params: { ...postsParams, ...{ categories: postsPageCategoryId } } 
        });
        
        return this.getPosts(preparedParams).pipe(
          map(posts => 
            (posts as any[]).filter(post =>
              categoryIds.every(catId => post.categories.includes(catId))
            )
          )
        );
      })
    );
  }
  

}