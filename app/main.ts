import {nativeScriptBootstrap} from "nativescript-angular/application";
import {provide} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {AppComponent} from "./app.component";
import {registerElement} from "nativescript-angular/element-registry";
import {TNSFontIconService, TNSFontIconPipe} from 'nativescript-ng2-fonticon';

registerElement("CardView", () => require("nativescript-cardview").CardView);
nativeScriptBootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(TNSFontIconService, {
    useFactory: () => {
      return new TNSFontIconService({
        'fa': './font-awesome.css'
      },true);
    }
  })
]);
