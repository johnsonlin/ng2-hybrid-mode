import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppModule as Ng2AppModule } from './app/app.module';
import { Ng1AppModule } from './ng1/app';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(Ng2AppModule)
  .then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, [Ng1AppModule.name], {strictDi: true});
  });
