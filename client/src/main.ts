import { enableProdMode } from "client/client/node_modules/@angular/core/core";
import { platformBrowserDynamic } from "client/client/node_modules/@angular/platform-browser-dynamic/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
