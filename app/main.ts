import {nativeScriptBootstrap} from "nativescript-angular/application";
import { HTTP_PROVIDERS } from '@angular/http';
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {AppComponent} from "./app.component";

nativeScriptBootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);
