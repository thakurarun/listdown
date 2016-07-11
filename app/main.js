"use strict";
var application_1 = require("nativescript-angular/application");
var http_1 = require('@angular/http');
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var element_registry_1 = require("nativescript-angular/element-registry");
var RadListView = require("nativescript-telerik-ui/listview");
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("RadListView", function () { return RadListView.RadListView; });
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map