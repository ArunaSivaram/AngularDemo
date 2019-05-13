import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Bootstraps starts angular application by passing the AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
