/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  console.log($localize`Challenge by Frontend Mentor. Coded by Johnny Gérard.`);
  console.log($localize`Portfolio: https://www.frontendmentor.io/profile/johnnygerard`);
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
