import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable, switchMap, map, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordPressService {
  private wordpressApiBaseUrl = environment.wordpressApiBaseUrl;

  constructor(private _http: HttpClient) { }

  /**
   * Fetches posts from the WordPress API with the provided parameters.
   * 
   * @param params - The query parameters to be sent with the HTTP request. This can include filters like
   *                 `orderby`, `order`, `per_page`, and others.
   * 
   * @returns An observable containing the response data from the API, which is an array of posts.
   */
  getPosts(params: any) {
    return this._http.get(`${this.wordpressApiBaseUrl}/posts`, { params: params });
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
  getPostsByCategoriesNames(categoryNames: string[], postsParams: any): Observable<any[]> {
    return forkJoin({
      posts: this.getPosts(postsParams),
      categories: this.getCategories()
    }).pipe(
      map(({ posts, categories }) => {
        const categoryIds = categories
          .filter(cat => categoryNames.some(name => cat.name.toLowerCase() === name.toLowerCase()))
          .map(cat => cat.id);

        if (categoryIds.length === 0) {
          return [];
        }

        return (posts as any[]).filter((post: any) =>
          categoryIds.every(catId => post.categories.includes(catId))
        );
      })
    );
  }

}