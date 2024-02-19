import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    // necessaire pour utiliser httpClient
    provideHttpClient(withFetch()),
    provideRouter(routes),
    // necessaire pour utiliser http dans un fichier isolé
    provideClientHydration(),
    provideAnimations()
  ]
};
