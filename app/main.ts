import {nativeScriptBootstrap} from "nativescript-angular/application";
import { HTTP_PROVIDERS } from '@angular/http';
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {AppComponent} from "./app.component";
import {registerElement} from "nativescript-angular/element-registry"

registerElement("CardView", () => require("nativescript-cardview").CardView);
nativeScriptBootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);
