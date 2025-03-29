import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Params {
  [key: string]: string | number | boolean | (string | number | boolean)[];
}

interface Options {
  allowNull?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  /**
   * Prepares the query parameters for HTTP requests.
   * @param {Object} params - The parameters to be processed.
   * @param {Options} [options] - Optional settings for null values.
   * @returns {HttpParams} The processed HTTP parameters.
   */
  prepareParams({ params, options }: { params: Params; options?: Options }): HttpParams {
    let httpParams = new HttpParams();

    if (params) {
      if (!options?.allowNull) {
        params = Object.fromEntries(
          Object.entries(params).filter(([_, value]) => value !== null && value !== undefined && value !== '')
        );
      }

      for (const [key, value] of Object.entries(params)) {
        if (Array.isArray(value)) {
          value.forEach((val, index) => {
            httpParams = httpParams.append(`${key}[${index}]`, String(val));
          });
        } else {
          httpParams = httpParams.set(key, String(value));
        }
      }
    }

    return httpParams;
  }

  /**
   * Sanitizes HTML content for safe usage in the application.
   * @param {string} content - The HTML content to sanitize.
   * @returns {SafeHtml} The sanitized HTML content.
   */
  sanitizeHtml(content: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(content);
  }

  /**
   * Removes all HTML tags and decodes HTML entities from a given string.
   *
   * @param {string} html - The input HTML string containing HTML content.
   * @returns {string} The plain text content without HTML tags and with decoded entities.
   */
  stripHtml(html: string): string {
    const text = html.replace(/<[^>]*>/g, '');

    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  }

}