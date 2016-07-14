"use strict";
var application_1 = require("nativescript-angular/application");
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_ng2_fonticon_1 = require('nativescript-ng2-fonticon');
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(nativescript_ng2_fonticon_1.TNSFontIconService, {
        useFactory: function () {
            return new nativescript_ng2_fonticon_1.TNSFontIconService({
                'fa': './font-awesome.css'
            }, true);
        }
    })
]);
//# sourceMappingURL=main.js.map