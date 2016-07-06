"use strict";
var router_1 = require("nativescript-angular/router");
var search_component_1 = require("./pages/search/search.component");
var list_component_1 = require("./pages/list/list.component");
exports.routes = [
    { path: "", component: search_component_1.SearchPageComponent },
    { path: "List/:text", component: list_component_1.ListPageComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, { enableTracing: false })
];
//# sourceMappingURL=app.routes.js.map