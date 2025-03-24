import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class WordPressService {
  private wordpressApiBaseUrl = environment.wordpressApiBaseUrl;

  constructor(private _http: HttpClient) { }

  /**
   * Fetches posts from the WordPress API with the provided parameters.
   * @param params - The query parameters to be sent with the HTTP request.
   * @returns An observable containing the response data from the API.
   */
  getPosts(params: any) {
    return this._http.get(`${this.wordpressApiBaseUrl}/posts`, { params: params });
  }

}