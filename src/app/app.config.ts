import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { HomeComponent } from './component/home/home.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    HomeComponent,
    provideHttpClient()]
};
