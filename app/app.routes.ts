import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {SearchPageComponent} from "./pages/search/search.component";
import {ListPageComponent} from "./pages/list/list.component";

export const routes: RouterConfig = [
  { path: "", component: SearchPageComponent },
  { path: "List/:text", component: ListPageComponent }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { enableTracing: false })
];
