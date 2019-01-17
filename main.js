(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_news_newsitems_newsitems_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/news/newsitems/newsitems.component */ "./src/app/shared/news/newsitems/newsitems.component.ts");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/not-found/not-found.component */ "./src/app/shared/not-found/not-found.component.ts");
/* harmony import */ var _shared_news_newsitem_newsitem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/news/newsitem/newsitem.component */ "./src/app/shared/news/newsitem/newsitem.component.ts");
/* harmony import */ var _shared_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/search/search-result/search-result.component */ "./src/app/shared/search/search-result/search-result.component.ts");
/* harmony import */ var _shared_showcases_showcases_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/showcases/showcases.component */ "./src/app/shared/showcases/showcases.component.ts");
/* harmony import */ var _shared_showcases_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/showcases/showcase/showcase.component */ "./src/app/shared/showcases/showcase/showcase.component.ts");
/* harmony import */ var _shared_config_config_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/config/config.component */ "./src/app/shared/config/config.component.ts");
/* harmony import */ var _config_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config.guard */ "./src/app/config.guard.ts");
/* harmony import */ var _route_paths__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./route-paths */ "./src/app/app-routing/route-paths.ts");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].LAYOUT,
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
        canActivate: [_config_guard__WEBPACK_IMPORTED_MODULE_10__["ConfigGuard"]],
        children: [
            { path: '', redirectTo: 'news', pathMatch: 'full' },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].NEWS, component: _shared_news_newsitems_newsitems_component__WEBPACK_IMPORTED_MODULE_3__["NewsItemsComponent"], canActivate: [_config_guard__WEBPACK_IMPORTED_MODULE_10__["ConfigGuard"]], data: { title: 'Quantum News', image: 'News Head Banner' } },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].NEWS + '/:id', component: _shared_news_newsitem_newsitem_component__WEBPACK_IMPORTED_MODULE_5__["NewsItemComponent"], canActivate: [_config_guard__WEBPACK_IMPORTED_MODULE_10__["ConfigGuard"]] },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].SHOWCASES, component: _shared_showcases_showcases_component__WEBPACK_IMPORTED_MODULE_7__["ShowcasesComponent"], canActivate: [_config_guard__WEBPACK_IMPORTED_MODULE_10__["ConfigGuard"]], data: { title: 'Showcases', image: 'Development Head Banner' } },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].SHOWCASES + '/:id', component: _shared_showcases_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_8__["ShowcaseComponent"], canActivate: [_config_guard__WEBPACK_IMPORTED_MODULE_10__["ConfigGuard"]] },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].SEARCH_RESULTS + '/:searchTerm', component: _shared_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultComponent"], canActivate: [_config_guard__WEBPACK_IMPORTED_MODULE_10__["ConfigGuard"]], data: { title: 'Search results', image: 'Forums Head Banner' } }
        ]
    },
    { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].CONFIG, component: _shared_config_config_component__WEBPACK_IMPORTED_MODULE_9__["ConfigComponent"] },
    { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].NOT_FOUND, component: _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
    { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].NOT_FOUND_ANY, redirectTo: 'not-found', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/route-paths.ts":
/*!********************************************!*\
  !*** ./src/app/app-routing/route-paths.ts ***!
  \********************************************/
/*! exports provided: ROUTE_PATHS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_PATHS", function() { return ROUTE_PATHS; });
var ROUTE_PATHS = {
    LAYOUT: "",
    NEWS: "news",
    SHOWCASES: "showcases",
    NOT_FOUND: "**",
    NOT_FOUND_ANY: "**",
    SEARCH_RESULTS: "search-results",
    CONFIG: "config"
};


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_news_newsitems_newsitems_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/news/newsitems/newsitems.component */ "./src/app/shared/news/newsitems/newsitems.component.ts");
/* harmony import */ var _shared_news_newsitem_newsitem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/news/newsitem/newsitem.component */ "./src/app/shared/news/newsitem/newsitem.component.ts");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "./src/app/shared/not-found/not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/search/search.component */ "./src/app/shared/search/search.component.ts");
/* harmony import */ var _shared_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/search/search-result/search-result.component */ "./src/app/shared/search/search-result/search-result.component.ts");
/* harmony import */ var _shared_taxa_taxa_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/taxa/taxa.component */ "./src/app/shared/taxa/taxa.component.ts");
/* harmony import */ var _shared_showcases_showcases_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/showcases/showcases.component */ "./src/app/shared/showcases/showcases.component.ts");
/* harmony import */ var _shared_showcases_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/showcases/showcase/showcase.component */ "./src/app/shared/showcases/showcase/showcase.component.ts");
/* harmony import */ var _shared_config_config_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/config/config.component */ "./src/app/shared/config/config.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _shared_news_newsitems_newsitems_component__WEBPACK_IMPORTED_MODULE_4__["NewsItemsComponent"],
                _shared_news_newsitem_newsitem_component__WEBPACK_IMPORTED_MODULE_5__["NewsItemComponent"],
                _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                _shared_showcases_showcases_component__WEBPACK_IMPORTED_MODULE_12__["ShowcasesComponent"],
                _shared_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                _shared_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_10__["SearchResultComponent"],
                _shared_taxa_taxa_component__WEBPACK_IMPORTED_MODULE_11__["TaxaComponent"],
                _shared_showcases_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_13__["ShowcaseComponent"],
                _shared_config_config_component__WEBPACK_IMPORTED_MODULE_14__["ConfigComponent"],
                _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__["LayoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
            ],
            providers: [
                { provide: 'Sitefinity', useValue: window['Sitefinity'] },
                { provide: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_16__["LOCAL_STORAGE"], useValue: new _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_16__["StorageService"](localStorage) },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.guard.ts":
/*!*********************************!*\
  !*** ./src/app/config.guard.ts ***!
  \*********************************/
/*! exports provided: ConfigGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigGuard", function() { return ConfigGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/settings.service */ "./src/app/shared/services/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigGuard = /** @class */ (function () {
    function ConfigGuard(router, settings) {
        this.router = router;
        this.settings = settings;
    }
    ConfigGuard.prototype.canActivate = function (route, state) {
        var sandboxUrl = route.queryParams['url'];
        if (this.settings.url && !sandboxUrl) {
            return true;
        }
        else {
            this.router.navigate(["/config"], { queryParams: { 'url': sandboxUrl } });
            return false;
        }
    };
    ConfigGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], ConfigGuard);
    return ConfigGuard;
}());



/***/ }),

/***/ "./src/app/shared/common/rx-base/rx-base.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/common/rx-base/rx-base.component.ts ***!
  \************************************************************/
/*! exports provided: RxBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxBaseComponent", function() { return RxBaseComponent; });
var RxBaseComponent = /** @class */ (function () {
    function RxBaseComponent() {
        this.subscriptions = [];
    }
    RxBaseComponent.prototype.registerSubscription = function (sub) {
        this.subscriptions.push((sub));
    };
    RxBaseComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            if (sub) {
                sub.unsubscribe();
            }
        });
    };
    return RxBaseComponent;
}());



/***/ }),

/***/ "./src/app/shared/config/config.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/config/config.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form #f=\"ngForm\" (ngSubmit)=\"onSave()\">\n  <div class=\"container col-md-offset-3 col-md-6\">\n    <h3>Enter url to a Sitefinity hosted trial instance below:</h3>\n    <div class=\"form-group mt-3\">\n      <label for=\"configInput\">Sandbox Url:</label>\n      <input class=\"form-control\"\n             name=\"configInput\"\n             id=\"configInput\"\n             type=\"text\"\n             ngDefaultControl\n             required\n             [(ngModel)]=\"currentUrl\">\n    </div>\n    <div>\n      <button class=\"btn btn-primary btn-quantum-homepage\" [disabled]=\"!f.valid\" type=\"submit\">Save</button>\n    </div>\n  </div>\n</form>\n\n"

/***/ }),

/***/ "./src/app/shared/config/config.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/config/config.component.ts ***!
  \***************************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/shared/services/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app-routing/route-paths */ "./src/app/app-routing/route-paths.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(settings, router, route) {
        this.settings = settings;
        this.router = router;
        this.route = route;
    }
    ConfigComponent.prototype.ngOnInit = function () {
        var sandboxUrl = this.route.snapshot.queryParams['url'];
        if (sandboxUrl) {
            this.currentUrl = sandboxUrl;
            this.onSave();
        }
    };
    Object.defineProperty(ConfigComponent.prototype, "currentUrl", {
        get: function () {
            return this.settings.url;
        },
        set: function (value) {
            this.settings.url = value;
        },
        enumerable: true,
        configurable: true
    });
    ConfigComponent.prototype.onSave = function () {
        this.currentUrl = this.parseSitefinityUrlInput(this.currentUrl);
        this.redirectToHome();
    };
    ConfigComponent.prototype.redirectToHome = function () {
        this.router.navigate([_app_routing_route_paths__WEBPACK_IMPORTED_MODULE_3__["ROUTE_PATHS"].LAYOUT]);
    };
    ConfigComponent.prototype.parseSitefinityUrlInput = function (str) {
        // trim whitespaces
        str = str.trim();
        // strip end slashes
        while (str.endsWith('/')) {
            str = str.substring(0, str.length - 1);
        }
        // add protocol scheme (https://) if missing
        if (!str.match(/^\w+:\/\//)) {
            str = "http" + str;
        }
        return str;
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/shared/config/config.component.html")
        }),
        __metadata("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/layout.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/layout.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"github-banner container-fluid\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          Check the code on Github: <a class=\"bold\" target=\"_blank\" href=\"https://github.com/Sitefinity/QuantumHeadlessAngularApp\">https://github.com/Sitefinity/QuantumHeadlessAngularApp</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-3 col-xs-2\">\r\n            <div class=\"sf-Long-text\">\r\n              <p>\r\n                <a routerLink=\"/news\">\r\n                  <img *ngIf=\"logoImage | async\" style=\"margin-top: 20px;\" [alt]=\"(logoImage | async).AlternativeText\" [src]=\"(logoImage | async).Url\" [title]=\"(logoImage | async).AlternativeText\">\r\n                </a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-9 col-xs-10\">\r\n            <nav class=\"navbar navbar-default  blue-horizontal\">\r\n              <div class=\"container-fluid\">\r\n                <div class=\"collapse navbar-collapse\">\r\n                  <ul class=\"nav navbar-nav\">\r\n                    <li class=\"dropdown\"><a class=\"upper-nav dropdown-toggle\" routerLink=\"/news\" routerLinkActive=\"active\">News</a></li>\r\n                    <li class=\"dropdown\"><a class=\"upper-nav dropdown-toggle\" routerLink=\"/showcases\" routerLinkActive=\"active\">Showcases</a></li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 header-right-group\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <app-search></app-search>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n<main class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div *ngIf=\"bannerImage | async\" class=\"homepage-card-banner\">\r\n      <img *ngIf=\"bannerImage | async\" [alt]=\"(bannerImage | async).AlternativeText\" [src]=\"(bannerImage | async).Url\" [title]=\"(bannerImage | async).AlternativeText\" class=\"splash\">\r\n      <div class=\"container\">\r\n        <div class=\"homepage-card-banner-text\">\r\n          <h2 *ngIf=\"title | async; let title\">{{title}}</h2>\r\n          <p *ngIf=\"(title | async) === 'Showcases'\">We create hard-working web systems that put you in control. Fully integrated, and using the very latest tech.</p>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/shared/layout/layout.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/images.service */ "./src/app/shared/services/images.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(imageService, router, route, titleService) {
        this.imageService = imageService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return _this.route; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.setImageAndTitle(event);
        });
        this.route.url.subscribe(function () {
            var routeData = _this.route.snapshot.firstChild.data;
            _this.setImageAndTitle(routeData);
        });
        this.logoImage = this.imageService.getImageByTitle('Logo_Quantum');
    };
    LayoutComponent.prototype.setImageAndTitle = function (data) {
        this.bannerImage = this.imageService.getImageByTitle(data['image']);
        this.title.next(data['title']);
        this.titleService.setTitle(data['title']);
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/shared/layout/layout.component.html")
        }),
        __metadata("design:paramtypes", [_services_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/news/newsitem/newsitem.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/news/newsitem/newsitem.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"newsItem\" class=\"row\">\n  <div class=\"container\">\n    <ng-container>\n      <h2>{{newsItem.Title}}</h2>\n      <div class=\"text-muted\">{{newsItem.DateCreated | date:'medium'}} by {{newsItem.Author}}</div>\n      <div class=\"news_image news_image_detail\">\n        <img style=\"display: block; min-height: 230px;\" *ngIf=\"newsItem.Thumbnail\" [src]=\"newsItem.Thumbnail.Url\" [alt]=\"newsItem.Thumbnail.AlternativeText\"/>\n      </div>\n      <div class=\"news_summary\" [innerHtml]=\"newsItem.Summary\">\n      </div>\n      <div [innerHtml]=\"newsItemContent\">\n      </div>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/news/newsitem/newsitem.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/news/newsitem/newsitem.component.ts ***!
  \************************************************************/
/*! exports provided: NewsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemComponent", function() { return NewsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/news.service */ "./src/app/shared/services/news.service.ts");
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/rx-base/rx-base.component */ "./src/app/shared/common/rx-base/rx-base.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsItemComponent = /** @class */ (function (_super) {
    __extends(NewsItemComponent, _super);
    function NewsItemComponent(newsService, route, sanitizer) {
        var _this = _super.call(this) || this;
        _this.newsService = newsService;
        _this.route = route;
        _this.sanitizer = sanitizer;
        return _this;
    }
    NewsItemComponent.prototype.ngOnInit = function () {
        this.getNewsItem();
        this.registerSubscription(this.subscription);
    };
    NewsItemComponent.prototype.getNewsItem = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.subscription = this.newsService.getNewsItem(id).subscribe(function (data) {
                _this.newsItem = data;
                if (data.Content) {
                    _this.newsItemContent = _this.sanitizer.bypassSecurityTrustHtml(data.Content);
                }
            });
        }
    };
    NewsItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsitem',
            template: __webpack_require__(/*! ./newsitem.component.html */ "./src/app/shared/news/newsitem/newsitem.component.html")
        }),
        __metadata("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], NewsItemComponent);
    return NewsItemComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_3__["RxBaseComponent"]));



/***/ }),

/***/ "./src/app/shared/news/newsitems/newsitems.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/news/newsitems/newsitems.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n      <div *ngIf=\"newsItems && newsItems.length>0\">\n        <ng-container *ngFor=\"let newsItem of newsItems; let i = index\">\n          <ul *ngIf=\"i % 3 == 0\" class=\"list-unstyled row news-list-page\">\n            <li class=\"col-md-4\">\n              <ng-container\n                *ngTemplateOutlet=\"newsItemTemplate; context: { item: newsItem}\">\n              </ng-container>\n            </li>\n            <li class=\"col-md-4\" *ngIf=\"i + 1 < newsItems.length\">\n              <ng-container\n                *ngTemplateOutlet=\"newsItemTemplate; context: { item: newsItems[i + 1]}\">\n              </ng-container>\n            </li>\n            <li class=\"col-md-4\" *ngIf=\"i + 2 < newsItems.length\">\n              <ng-container\n                *ngTemplateOutlet=\"newsItemTemplate; context: { item: newsItems[i + 2]}\">\n              </ng-container>\n            </li>\n          </ul>\n        </ng-container>\n\n        <div *ngIf=\"shouldShowLoadMore\" class=\"load-more text-center u-mt4\">\n          <a (click)=\"LoadMore()\" style=\"cursor: pointer;\">\n            Load 10 more news\n            <br />\n            <span class=\"glyphicon glyphicon-chevron-down glyph-bordered\"></span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n    <div *ngIf=\"(categories | async) && (tags | async)\" class=\"col-md-3 gray_column\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"sf-Long-text\">\n            <h5 style=\"text-align: left\">Categories</h5>\n          </div>\n          <app-taxa classes=\"list-unstyled categories-list\" [taxas]=\"categories | async\" (taxaClicked)=\"getNewsItemsByTaxa(categoryName, $event)\"></app-taxa>\n          <div class=\"sf-Long-text\">\n            <h5 style=\"text-align: left\">Tags</h5>\n          </div>\n          <app-taxa classes=\"categories-list list-unstyled\" [taxas]=\"tags | async\" (taxaClicked)=\"getNewsItemsByTaxa(tagsName, $event)\"></app-taxa>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #newsItemTemplate let-newsItem=\"item\">\n  <div [ngClass]=\"{'featured_news_recent': newsItem.Featured}\" class=\"col-xs-12 news_item_recent news_text homepage_news\">\n    <a routerLink=\"/news/{{newsItem.Id}}\">\n      <img class=\"img-circle\" *ngIf=\"newsItem.Thumbnail\" [src]=\"newsItem.Thumbnail.Url\" [alt]=\"newsItem.Thumbnail.AlternativeText\"/>\n    </a>\n    <div class=\"homepage_news_text\">\n      <h4>\n        <a routerLink=\"/news/{{newsItem.Id}}\">\n          {{newsItem.Title}}\n        </a>\n      </h4>\n      <span class=\"text-muted\">\n        {{newsItem.DateCreated}} <br>\n         by\n        {{newsItem.Author}}\n    </span>\n      <p [innerHtml]=\"newsItem.Summary\">\n      </p>\n    </div>\n  </div>\n  <div *ngIf=\"newsItem.Featured\" class=\"ribbon\"><span>FEATURED</span></div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/shared/news/newsitems/newsitems.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/news/newsitems/newsitems.component.ts ***!
  \**************************************************************/
/*! exports provided: NewsItemsComponent, NewsItem, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemsComponent", function() { return NewsItemsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItem", function() { return NewsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/news.service */ "./src/app/shared/services/news.service.ts");
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/rx-base/rx-base.component */ "./src/app/shared/common/rx-base/rx-base.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_taxa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/taxa.service */ "./src/app/shared/services/taxa.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsItemsComponent = /** @class */ (function (_super) {
    __extends(NewsItemsComponent, _super);
    function NewsItemsComponent(newsService, taxaService) {
        var _this = _super.call(this) || this;
        _this.newsService = newsService;
        _this.taxaService = taxaService;
        _this.newsItems = [];
        _this.tagsName = _services_taxa_service__WEBPACK_IMPORTED_MODULE_4__["tagsProperty"];
        _this.categoryName = _services_taxa_service__WEBPACK_IMPORTED_MODULE_4__["categoryProperty"];
        _this.showMoreItemsLink = true;
        return _this;
    }
    Object.defineProperty(NewsItemsComponent.prototype, "shouldShowLoadMore", {
        get: function () {
            return (this.allItemsCount > this.newsItems.length) && this.showMoreItemsLink;
        },
        enumerable: true,
        configurable: true
    });
    NewsItemsComponent.prototype.ngOnInit = function () {
        this.getNewsItems();
        this.getTagsAndCategories();
        this.getAllNewsItemsCount();
        this.registerSubscription(this.subscription);
        this.registerSubscription(this.newsItemsCountSubscription);
        this.registerSubscription(this.newsItemsForTagSubscription);
        this.registerSubscription(this.taxaServiceSubscription);
    };
    NewsItemsComponent.prototype.LoadMore = function () {
        this.getNewsItems();
    };
    NewsItemsComponent.prototype.getTagsAndCategories = function () {
        var _this = this;
        this.allNewsItemsSubscription = this.newsService.getNewsItems().subscribe(function (data) {
            _this.tags = _this.getTaxa(_services_taxa_service__WEBPACK_IMPORTED_MODULE_4__["tagsOptions"], _services_taxa_service__WEBPACK_IMPORTED_MODULE_4__["tagsProperty"]);
            _this.categories = _this.getTaxa(_services_taxa_service__WEBPACK_IMPORTED_MODULE_4__["categoriesOptions"], _services_taxa_service__WEBPACK_IMPORTED_MODULE_4__["categoryProperty"]);
        });
    };
    NewsItemsComponent.prototype.getTaxa = function (taxaOptions, propertyName) {
        var _this = this;
        var taxaReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.allNewsItemsSubscription = this.newsService.getNewsItems().subscribe(function (data) {
            var newsItemsTaxas = [];
            if (data) {
                data.forEach(function (newsItem) {
                    if (newsItem[propertyName]) {
                        newsItemsTaxas.push.apply(newsItemsTaxas, newsItem[propertyName]);
                    }
                });
                _this.taxaServiceSubscription = _this.taxaService.getTaxaForIds(taxaOptions, newsItemsTaxas).subscribe(function (data) { return taxaReplaySubject.next(data); });
            }
        });
        return taxaReplaySubject.asObservable();
    };
    NewsItemsComponent.prototype.getNewsItems = function () {
        var _this = this;
        this.subscription = this.newsService.getNewsItems(6, this.newsItems.length).subscribe(function (data) {
            if (data) {
                (_a = _this.newsItems).push.apply(_a, data);
            }
            var _a;
        });
    };
    NewsItemsComponent.prototype.getNewsItemsByTaxa = function (taxaName, taxaId) {
        var _this = this;
        this.newsItemsForTagSubscription = this.newsService.getNewsByTaxa(taxaName, taxaId).subscribe(function (newsItems) {
            if (newsItems) {
                _this.newsItems = newsItems;
            }
        });
        this.showMoreItemsLink = false;
    };
    NewsItemsComponent.prototype.getAllNewsItemsCount = function () {
        var _this = this;
        this.newsItemsCountSubscription = this.newsService.getAllNewsCount().subscribe(function (data) {
            _this.allItemsCount = data;
        });
    };
    NewsItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsitems',
            template: __webpack_require__(/*! ./newsitems.component.html */ "./src/app/shared/news/newsitems/newsitems.component.html")
        }),
        __metadata("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"], _services_taxa_service__WEBPACK_IMPORTED_MODULE_4__["TaxaService"]])
    ], NewsItemsComponent);
    return NewsItemsComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__["RxBaseComponent"]));

var NewsItem = /** @class */ (function () {
    function NewsItem() {
    }
    return NewsItem;
}());

var Image = /** @class */ (function () {
    function Image() {
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/shared/not-found/not-found.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-6 col-md-offset-3\">\n    <h2>\n      The page you're looking for doesn't exist\n    </h2>\n    <div class=\"form-group\">\n      <a routerLink=\"/news\" class=\"btn btn-primary\">Go home</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/not-found/not-found.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/shared/not-found/not-found.component.html")
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/search/search-result/search-result.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/search/search-result/search-result.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"row--border\">\n      <ng-container *ngIf=\"(searchResults | async) && (searchResults | async).length > 0\">\n        <div class=\"mt-3 col-md-12\">\n          <h3>{{(searchResults | async).length}} results for <em>{{searchTerm}}</em></h3>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"sf-search-results media-list u-mb4 mt-3\">\n            <div *ngFor=\"let result of (searchResults | async)\" class=\"media sf-media u-mb3\">\n              <div *ngIf=\"result.ImageUrl\" class=\"media-left sf-img-thmb\">\n                <a [attr.href]=\"result.ImageUrl\"><img [src]=\"result.ImageUrl\" [alt]=\"result.Title\"/></a>\n              </div>\n              <div class=\"media-body sf-media-body\">\n                <h3>\n                  <a *ngIf=\"result.DetailLink\" [routerLink]=\"result.DetailLink\" style=\"cursor: pointer;\">{{result.Title}}</a>\n                  <a *ngIf=\"result.ImageUrl\" [attr.href]=\"result.ImageUrl\" style=\"cursor: pointer;\">{{result.Title}}</a>\n                </h3>\n                <p *ngIf=\"result.Content\" [innerHtml]=\"result.Content\"></p>\n                <a *ngIf=\"result.DetailLink\" [routerLink]=\"result.DetailLink\" style=\"cursor: pointer;\">{{settings.url + result.DetailLink}}</a>\n                <a *ngIf=\"result.ImageUrl\" [attr.href]=\"result.ImageUrl\" style=\"cursor: pointer;\">{{result.ImageUrl}}</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"(searchResults | async) && (searchResults | async).length === 0\">\n        <div class=\"mt-3 col-md-12\">\n            <h3>No search results</h3>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/search/search-result/search-result.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/search/search-result/search-result.component.ts ***!
  \************************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/rx-base/rx-base.component */ "./src/app/shared/common/rx-base/rx-base.component.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/shared/services/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchResultComponent = /** @class */ (function (_super) {
    __extends(SearchResultComponent, _super);
    function SearchResultComponent(searchService, settings, route) {
        var _this = _super.call(this) || this;
        _this.searchService = searchService;
        _this.settings = settings;
        _this.route = route;
        return _this;
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchResults = this.searchService.searchResults;
        this.route.params.subscribe(function (data) {
            if (data['searchTerm']) {
                _this.searchTerm = data['searchTerm'];
                _this.searchService.getItemsBySearchWord(_this.searchTerm);
            }
        });
    };
    SearchResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-result',
            template: __webpack_require__(/*! ./search-result.component.html */ "./src/app/shared/search/search-result/search-result.component.html")
        }),
        __metadata("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"], _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SearchResultComponent);
    return SearchResultComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__["RxBaseComponent"]));



/***/ }),

/***/ "./src/app/shared/search/search.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/search/search.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-inline\">\r\n  <div class=\"form-group\">\r\n    <div [ngClass]=\"{'open': open }\" class=\"dropdown\">\r\n      <button (click)=\"open=!open\" type=\"button\" class=\"dropdown-toggle search-button-icon\">\r\n        <svg class=\"svg-inline--fa fa-search fa-w-16\" aria-hidden=\"true\" data-prefix=\"fa\" data-icon=\"search\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" data-fa-i2svg=\"\"><path fill=\"currentColor\" d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\"></path></svg>\r\n      </button>\r\n      <div class=\"dropdown-menu mega-menu search-dropdown-menu\">\r\n        <input #input (blur)=\"open = false\" (focus)=\"input.value = null;\" (keydown.enter)='onEnter($event); open = false;' type=\"search\" placeholder=\"Search\" class=\"form-control ui-autocomplete-input\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent, SearchResultItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultItem", function() { return SearchResultItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/search.service */ "./src/app/shared/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
    }
    SearchComponent.prototype.onEnter = function (event) {
        this.searchService.search(event.target.value);
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/shared/search/search.component.html")
        }),
        __metadata("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());

var SearchResultItem = /** @class */ (function () {
    function SearchResultItem() {
    }
    return SearchResultItem;
}());



/***/ }),

/***/ "./src/app/shared/services/images.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/images.service.ts ***!
  \***************************************************/
/*! exports provided: imageDataOptions, ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageDataOptions", function() { return imageDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitefinity.service */ "./src/app/shared/services/sitefinity.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var imageDataOptions = {
    urlName: 'images',
};
var ImagesService = /** @class */ (function () {
    function ImagesService(sitefinity) {
        this.sitefinity = sitefinity;
    }
    ImagesService.prototype.getImageByTitle = function (title) {
        var replaySubjectImage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.sitefinity.instance.data(imageDataOptions).get({
            query: this.sitefinity
                .query
                .order('Title desc')
                .where()
                .eq('Title', title)
                .done(),
            successCb: function (data) { return replaySubjectImage.next(data.value[0]); },
            failureCb: function (data) { return console.log(data); }
        });
        return replaySubjectImage.asObservable();
    };
    ImagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"]])
    ], ImagesService);
    return ImagesService;
}());



/***/ }),

/***/ "./src/app/shared/services/news.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/news.service.ts ***!
  \*************************************************/
/*! exports provided: newsItemsDataOptions, NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsItemsDataOptions", function() { return newsItemsDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitefinity.service */ "./src/app/shared/services/sitefinity.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var newsItemsDataOptions = {
    urlName: 'newsitems',
    providerName: 'OpenAccessDataProvider',
    cultureName: 'en'
};
var NewsService = /** @class */ (function () {
    function NewsService(sitefinity) {
        this.sitefinity = sitefinity;
    }
    NewsService.prototype.getNewsItems = function (take, skip) {
        var query;
        var newsReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        if ((take !== null && take !== undefined) && (skip !== null && skip !== undefined)) {
            query = this.sitefinity
                .query
                .select('Title', 'Id', 'Content', 'DateCreated', 'PublicationDate', 'Summary', 'UrlName', 'Author', 'Tags', 'Category', 'Featured')
                .expand('Thumbnail')
                .order('PublicationDate desc')
                .skip(skip).take(take);
        }
        else {
            query = this.sitefinity
                .query
                .select('Title', 'Id', 'Content', 'DateCreated', 'PublicationDate', 'Summary', 'UrlName', 'Author', 'Tags', 'Category', 'Featured')
                .expand('Thumbnail')
                .order('PublicationDate desc');
        }
        this.sitefinity.instance.data(newsItemsDataOptions).get({
            query: query,
            successCb: function (data) { return newsReplaySubject.next(data.value); },
            failureCb: function (data) { return console.log(data); }
        });
        return newsReplaySubject.asObservable();
    };
    NewsService.prototype.getNewsByTaxa = function (propertyName, taxaId) {
        var newsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.sitefinity.instance.data(newsItemsDataOptions).get({
            query: this.sitefinity
                .query
                .select('Title', 'Id', 'Content', 'DateCreated', 'Summary', 'UrlName', 'Author')
                .expand('Thumbnail')
                .order('Title desc')
                .where()
                .any()
                .eq(propertyName, taxaId)
                .done().done(),
            successCb: function (data) { return newsSubject.next(data.value); },
            failureCb: function (data) { return console.log(data); }
        });
        return newsSubject.asObservable();
    };
    NewsService.prototype.getNewsItem = function (id) {
        var newsReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.sitefinity.instance.data(newsItemsDataOptions).getSingle({
            key: id,
            query: this.sitefinity
                .query
                .select('Title', 'Id', 'Content', 'DateCreated', 'Summary', 'UrlName', 'Author', 'Tags')
                .expand('Thumbnail')
                .order('Title desc'),
            successCb: function (data) { newsReplaySubject.next(data); },
            failureCb: function (data) { return console.log(data); }
        });
        return newsReplaySubject.asObservable();
    };
    NewsService.prototype.getAllNewsCount = function () {
        var newsReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.sitefinity.instance.data(newsItemsDataOptions).get({
            query: this.sitefinity
                .query
                .count(false),
            successCb: function (data) { return newsReplaySubject.next(data); },
            failureCb: function (data) { return console.log(data); }
        });
        return newsReplaySubject.asObservable();
    };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/shared/services/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitefinity.service */ "./src/app/shared/services/sitefinity.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = /** @class */ (function () {
    function SearchService(router, sitefinity) {
        this.router = router;
        this.sitefinity = sitefinity;
        this.searchTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._searchResults = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    Object.defineProperty(SearchService.prototype, "searchResults", {
        get: function () {
            return this._searchResults.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SearchService.prototype.search = function (searchWord) {
        this.router.navigate(['/search-results', searchWord]);
    };
    SearchService.prototype.getItemsBySearchWord = function (searchWord) {
        var _this = this;
        var batch = this.sitefinity.instance.batch(function (data) { return _this._searchResults.next(_this.mapSearchResults(data)); });
        batch.get({ entitySet: 'showcases', query: this.sitefinity
                .query
                .select('Title', 'Client', 'Challenge', 'Solution', 'Results', 'Id')
                .order('Title asc')
                .where()
                .or()
                .contains('Title', searchWord)
                .or()
                .contains('Client', searchWord)
                .or()
                .contains('Challenge', searchWord)
                .or()
                .contains('Solution', searchWord)
                .or()
                .contains('Results', searchWord)
                .done().done().done().done().done().done() });
        batch.get({ entitySet: 'images', query: this.sitefinity
                .query
                .where()
                .contains('Title', searchWord)
                .done() });
        batch.get({ entitySet: 'newsitems', query: this.sitefinity
                .query
                .select('Title', 'Content', 'Summary', 'Id')
                .order('Title asc')
                .where()
                .or()
                .contains('Title', searchWord)
                .or()
                .contains('Content', searchWord)
                .or()
                .contains('Summary', searchWord)
                .done().done().done().done() });
        batch.execute();
    };
    SearchService.prototype.mapSearchResults = function (result) {
        var searchResults = [];
        var data = result.data;
        if (data.length > 0) {
            data.forEach(function (item) {
                var context = item.response.data['@odata.context'];
                var contentType;
                var valuesArray = item.response.data.value;
                if (context) {
                    contentType = context.substring(context.indexOf('#') + 1, context.indexOf('('));
                }
                if (valuesArray && valuesArray.length > 0) {
                    switch (contentType) {
                        case 'newsitems':
                            valuesArray.forEach(function (contentItm) {
                                searchResults.push({ Title: contentItm.Title, DetailLink: '/news/' + contentItm.Id, Content: contentItm.Summary });
                            });
                            break;
                        case 'showcases':
                            valuesArray.forEach(function (contentItm) {
                                searchResults.push({ Title: contentItm.Title, DetailLink: '/showcases/' + contentItm.Id, Content: contentItm.Challenge });
                            });
                            break;
                        case 'images':
                            valuesArray.forEach(function (contentItm) {
                                searchResults.push({ Title: contentItm.Title, ImageUrl: contentItm.Url });
                            });
                            break;
                        default:
                            break;
                    }
                }
            });
        }
        return searchResults;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchService.prototype, "searchTriggered", void 0);
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/shared/services/settings.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/settings.service.ts ***!
  \*****************************************************/
/*! exports provided: SANDBOX_URL, SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANDBOX_URL", function() { return SANDBOX_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "./src/app/shared/services/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SANDBOX_URL = "sandbox_url";
var SettingsService = /** @class */ (function () {
    function SettingsService(storage) {
        this.storage = storage;
    }
    Object.defineProperty(SettingsService.prototype, "url", {
        get: function () {
            return this.storage.getItem(SANDBOX_URL);
        },
        set: function (url) {
            this.storage.setItem(SANDBOX_URL, url);
        },
        enumerable: true,
        configurable: true
    });
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_storage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/shared/services/showcases.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/showcases.service.ts ***!
  \******************************************************/
/*! exports provided: showcasesDataOptions, ShowcasesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showcasesDataOptions", function() { return showcasesDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcasesService", function() { return ShowcasesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sitefinity.service */ "./src/app/shared/services/sitefinity.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var showcasesDataOptions = {
    urlName: 'showcases'
};
var ShowcasesService = /** @class */ (function () {
    function ShowcasesService(sitefinity) {
        this.sitefinity = sitefinity;
    }
    ShowcasesService.prototype.getShowcases = function () {
        var showcasesReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.sitefinity.instance.data(showcasesDataOptions).get({
            query: this.sitefinity
                .query
                .select('Title', 'Client', 'Website', 'Challenge', 'Solution', 'Results', 'PublicationDate')
                .expand('Thumbnail', 'Download')
                .order('PublicationDate desc'),
            successCb: function (data) { return showcasesReplaySubject.next(data.value); },
            failureCb: function (data) { return console.log(data); }
        });
        return showcasesReplaySubject;
    };
    ShowcasesService.prototype.getShowcaseById = function (id) {
        var showcaseReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.sitefinity.instance.data(showcasesDataOptions).getSingle({
            key: id,
            query: this.sitefinity
                .query
                .select('Title', 'Client', 'Website', 'Challenge', 'Solution', 'Results', 'PublicationDate')
                .expand('Thumbnail', 'Download')
                .order('PublicationDate desc'),
            successCb: function (data) { return showcaseReplaySubject.next(data); },
            failureCb: function (data) { return console.log(data); }
        });
        return showcaseReplaySubject;
    };
    ShowcasesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_sitefinity_service__WEBPACK_IMPORTED_MODULE_2__["SitefinityService"]])
    ], ShowcasesService);
    return ShowcasesService;
}());



/***/ }),

/***/ "./src/app/shared/services/sitefinity.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/sitefinity.service.ts ***!
  \*******************************************************/
/*! exports provided: SitefinityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitefinityService", function() { return SitefinityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.service */ "./src/app/shared/services/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var endpoint = '/api/default/';
var SitefinityService = /** @class */ (function () {
    function SitefinityService(sf, settings) {
        this.sf = sf;
        this.settings = settings;
        //defines whether everyone or just authenticated users can access the webservices
        this._hasAuthentication = false;
    }
    Object.defineProperty(SitefinityService.prototype, "instance", {
        get: function () {
            if (!this.sitefinity) {
                this.initializeInstance();
            }
            return this.sitefinity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitefinityService.prototype, "query", {
        get: function () {
            return this.queryInstance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SitefinityService.prototype, "hasAuthentication", {
        get: function () {
            return this._hasAuthentication;
        },
        enumerable: true,
        configurable: true
    });
    SitefinityService.prototype.initializeInstance = function () {
        var serviceUrl = "" + this.settings.url + endpoint;
        if (serviceUrl) {
            this.sitefinity = new this.sf({ serviceUrl: serviceUrl });
            this.queryInstance = new this.sf.Query();
        }
    };
    SitefinityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('Sitefinity')),
        __metadata("design:paramtypes", [Object, _settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], SitefinityService);
    return SitefinityService;
}());



/***/ }),

/***/ "./src/app/shared/services/storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/*! exports provided: LOCAL_STORAGE, StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE", function() { return LOCAL_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LOCAL_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("LocalStorage");
var StorageService = /** @class */ (function () {
    function StorageService(storage) {
        this.storage = storage;
    }
    StorageService.prototype.getItem = function (key) {
        var item;
        if (this.storage) {
            item = this.storage.getItem(key);
        }
        return item;
    };
    StorageService.prototype.setItem = function (key, data) {
        if (this.storage) {
            this.storage.setItem(key, data);
        }
    };
    StorageService.prototype.removeItem = function (key) {
        if (this.storage) {
            this.storage.removeItem(key);
        }
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Storage])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/shared/services/taxa.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/taxa.service.ts ***!
  \*************************************************/
/*! exports provided: tagsOptions, categoriesOptions, tagsProperty, categoryProperty, TaxaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagsOptions", function() { return tagsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoriesOptions", function() { return categoriesOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagsProperty", function() { return tagsProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryProperty", function() { return categoryProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxaService", function() { return TaxaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitefinity.service */ "./src/app/shared/services/sitefinity.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var tagsOptions = {
    taxonomyId: 'cb0f3a19-a211-48a7-88ec-77495c0f5374',
    taxonomyOptions: {
        urlName: 'flat-taxa'
    }
};
var categoriesOptions = {
    taxonomyId: 'e5cd6d69-1543-427b-ad62-688a99f5e7d4',
    taxonomyOptions: {
        urlName: 'hierarchy-taxa'
    }
};
var tagsProperty = 'Tags';
var categoryProperty = 'Category';
var TaxaService = /** @class */ (function () {
    function TaxaService(sitefinity) {
        this.sitefinity = sitefinity;
    }
    TaxaService.prototype.getAllTaxa = function (taxonomyOptions) {
        var tagsReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.sitefinity.instance.data(taxonomyOptions.taxonomyOptions).get({
            query: this.sitefinity
                .query
                .select('Title', 'Id')
                .order('Title desc')
                .where()
                .eq('TaxonomyId', taxonomyOptions.taxonomyId)
                .done(),
            successCb: function (data) { return tagsReplaySubject.next(data.value); },
            failureCb: function (data) { return console.log(data); }
        });
        return tagsReplaySubject.asObservable();
    };
    TaxaService.prototype.getTaxaForIds = function (taxonomyOptions, ids) {
        var _this = this;
        var tagsByIdReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.getAllTaxa(taxonomyOptions).subscribe(function (data) {
            var taxas = [];
            if (data) {
                data.forEach(function (taxa) {
                    var occurencesInArray = _this.getCountInArray(ids, taxa.Id);
                    if (occurencesInArray > 0) {
                        taxas.push({ Title: taxa.Title, Id: taxa.Id, Count: occurencesInArray });
                    }
                });
                tagsByIdReplaySubject.next(taxas);
            }
        });
        return tagsByIdReplaySubject.asObservable();
    };
    TaxaService.prototype.getCountInArray = function (arr, item) {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count++;
            }
        }
        return count;
    };
    TaxaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"]])
    ], TaxaService);
    return TaxaService;
}());



/***/ }),

/***/ "./src/app/shared/showcases/showcase/showcase.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/showcases/showcase/showcase.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(showcase | async) as showcase\" class=\"row showcase_row\">\n  <div class=\"container\">\n    <h2>\n      {{showcase.Title}}\n    </h2>\n    <div class=\"col-md-4 showcase_image pr-2\">\n      <div *ngIf=\"showcase.Thumbnail\">\n        <img [src]=\"showcase.Thumbnail.Url\" [alt]=\"showcase.Thumbnail.AlternativeText\" />\n      </div>\n    </div>\n\n    <div class=\"col-md-8 showcase_summary\">\n      <div class=\"row showcase-info\">\n        <div class=\"col-md-6 no-padding\">\n          <div>\n            <strong>Client</strong>\n\n            <p>{{showcase.Client}}</p>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div>\n            <strong>Website</strong>\n\n            <p><a [href]=\"showcase.Website\" target=\"_blank\">{{showcase.Website}}</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"showcase-info\">\n            <strong>Challenge</strong>\n\n            <p [innerHtml]=\"showcase.Challenge\"></p>\n          </div>\n\n          <div class=\"showcase-info\">\n            <strong> Solution</strong>\n\n            <p [innerHtml]=\"showcase.Solution\"></p>\n          </div>\n\n          <div class=\"showcase-info showcase-info-last\">\n            <strong>Results</strong>\n\n            <p [innerHtml]=\"showcase.Results\"></p>\n          </div>\n\n          <div *ngIf=\"showcase.Download\">\n            <a class=\"btn btn-primary btn-quantum-homepage mt-3 ml-2\" [href]=\"showcase.Download.Url\">Read the story</a>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/showcases/showcase/showcase.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/showcases/showcase/showcase.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function() { return ShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_showcases_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/showcases.service */ "./src/app/shared/services/showcases.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowcaseComponent = /** @class */ (function () {
    function ShowcaseComponent(showcasesService, route) {
        this.showcasesService = showcasesService;
        this.route = route;
    }
    ShowcaseComponent.prototype.ngOnInit = function () {
        this.getShowcase();
    };
    ShowcaseComponent.prototype.getShowcase = function () {
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.showcase = this.showcasesService.getShowcaseById(id);
        }
    };
    ShowcaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showcase',
            template: __webpack_require__(/*! ./showcase.component.html */ "./src/app/shared/showcases/showcase/showcase.component.html")
        }),
        __metadata("design:paramtypes", [_services_showcases_service__WEBPACK_IMPORTED_MODULE_2__["ShowcasesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ShowcaseComponent);
    return ShowcaseComponent;
}());



/***/ }),

/***/ "./src/app/shared/showcases/showcases.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/showcases/showcases.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'showcase': i % 2 === 0}\" *ngFor=\"let showcase of (showcases | async); index as i\" class=\"row showcase_row\">\r\n  <div class=\"container\">\r\n    <h2>\r\n    {{showcase.Title}}\r\n    </h2>\r\n    <div class=\"col-md-4 showcase_image pr-2\">\r\n      <div *ngIf=\"showcase.Thumbnail\">\r\n        <img [src]=\"showcase.Thumbnail.Url\" [alt]=\"showcase.Thumbnail.AlternativeText\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-8 showcase_summary\">\r\n      <div class=\"row showcase-info\">\r\n        <div class=\"col-md-6 no-padding\">\r\n          <div>\r\n            <strong>Client</strong>\r\n\r\n            <p>{{showcase.Client}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div>\r\n            <strong>Website</strong>\r\n\r\n            <p><a [href]=\"showcase.Website\" target=\"_blank\">{{showcase.Website}}</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"showcase-info\">\r\n            <strong>Challenge</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Challenge\"></p>\r\n          </div>\r\n\r\n          <div class=\"showcase-info\">\r\n            <strong> Solution</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Solution\"></p>\r\n          </div>\r\n\r\n          <div class=\"showcase-info showcase-info-last\">\r\n            <strong>Results</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Results\"></p>\r\n          </div>\r\n\r\n          <div *ngIf=\"showcase.Download\">\r\n            <a class=\"btn btn-primary btn-quantum-homepage mt-3 ml-2\" [href]=\"showcase.Download.Url\">Read the story</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/showcases/showcases.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/showcases/showcases.component.ts ***!
  \*********************************************************/
/*! exports provided: ShowcasesComponent, Showcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcasesComponent", function() { return ShowcasesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Showcase", function() { return Showcase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_showcases_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/showcases.service */ "./src/app/shared/services/showcases.service.ts");
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/rx-base/rx-base.component */ "./src/app/shared/common/rx-base/rx-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowcasesComponent = /** @class */ (function (_super) {
    __extends(ShowcasesComponent, _super);
    function ShowcasesComponent(showcasesService) {
        var _this = _super.call(this) || this;
        _this.showcasesService = showcasesService;
        return _this;
    }
    ShowcasesComponent.prototype.ngOnInit = function () {
        this.showcases = this.showcasesService.getShowcases();
    };
    ShowcasesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showcases',
            template: __webpack_require__(/*! ./showcases.component.html */ "./src/app/shared/showcases/showcases.component.html")
        }),
        __metadata("design:paramtypes", [_services_showcases_service__WEBPACK_IMPORTED_MODULE_1__["ShowcasesService"]])
    ], ShowcasesComponent);
    return ShowcasesComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__["RxBaseComponent"]));

var Showcase = /** @class */ (function () {
    function Showcase() {
    }
    return Showcase;
}());



/***/ }),

/***/ "./src/app/shared/taxa/taxa.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/taxa/taxa.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul [attr.class]=\"classes\">\n  <li *ngFor=\"let taxa of taxas\">\n    <a (click)=\"handleClick(taxa.Id)\">{{taxa.Title}}</a>\n    <span *ngIf=\"taxa.Count\" class=\"text-muted\">\n    ({{taxa.Count}})\n  </span>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/shared/taxa/taxa.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/taxa/taxa.component.ts ***!
  \***********************************************/
/*! exports provided: TaxaComponent, Taxa, TaxaOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxaComponent", function() { return TaxaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Taxa", function() { return Taxa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxaOptions", function() { return TaxaOptions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaxaComponent = /** @class */ (function () {
    function TaxaComponent() {
        this.taxaClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TaxaComponent.prototype.handleClick = function (taxa) {
        this.taxaClicked.emit(taxa);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TaxaComponent.prototype, "taxas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TaxaComponent.prototype, "classes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TaxaComponent.prototype, "taxaClicked", void 0);
    TaxaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taxa',
            template: __webpack_require__(/*! ./taxa.component.html */ "./src/app/shared/taxa/taxa.component.html")
        })
    ], TaxaComponent);
    return TaxaComponent;
}());

var Taxa = /** @class */ (function () {
    function Taxa() {
    }
    return Taxa;
}());

var TaxaOptions = /** @class */ (function () {
    function TaxaOptions() {
    }
    return TaxaOptions;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\RepositoriesReal\QuantumHeadlessAngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map