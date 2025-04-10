import { ApplicationConfig, importProvidersFrom, APP_INITIALIZER, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideServiceWorker } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Meta, Title } from '@angular/platform-browser';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader{
  return new TranslateHttpLoader(http, '/i18n/', ".json");
}

export const provideTranslation = () => ({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: createTranslateLoader,
    deps: [HttpClient],
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,  withComponentInputBinding()),
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch(),

    ),

    importProvidersFrom([
      HttpClientModule, 
      TranslateModule.forRoot(provideTranslation())
    ]),
    provideClientHydration(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    Meta,
    Title
  ]
};
