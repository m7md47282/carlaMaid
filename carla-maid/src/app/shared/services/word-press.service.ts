import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable, switchMap } from 'rxjs';

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
   * Fetches posts from a specific category, identified by its name, with the provided parameters.
   * 
   * This method first retrieves the list of categories from the WordPress API and searches for the category
   * with the specified name. Once the category is found, it fetches the posts that belong to that category
   * using the `getPosts` method.
   * 
   * @param categoryName - The name of the category for which to fetch posts.
   * @param postsParams - Additional query parameters for fetching posts (e.g., `orderby`, `order`, `per_page`).
   * 
   * @returns An observable containing the response data from the API, which is an array of posts belonging to the specified category.
   * 
   * @throws {Error} If the category is not found, an error will be thrown with a message indicating that the category was not found.
   */
  getPostsByCategoryName(categoryName: string, postsParams: any): Observable<any> {
    return this.getCategories().pipe(
      switchMap((categories) => {
        const category = categories.find(
          (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
        );

        if (category) {
          const categoryId = category.id;
          const params = {
            categories: categoryId.toString(),
            ...postsParams
          };
          return this.getPosts(params);
        } else {
          throw new Error(`Category "${categoryName}" not found`);
        }
      })
    );
  }


}