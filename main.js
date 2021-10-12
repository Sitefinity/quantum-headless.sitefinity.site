(self["webpackChunkQuantumHeadlessAngularApp"] = self["webpackChunkQuantumHeadlessAngularApp"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 16391:
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_news_newsitems_newsitems_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/news/newsitems/newsitems.component */ 66091);
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/not-found/not-found.component */ 1650);
/* harmony import */ var _shared_news_newsitem_newsitem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/news/newsitem/newsitem.component */ 16925);
/* harmony import */ var _shared_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/search/search-result/search-result.component */ 97631);
/* harmony import */ var _shared_showcases_showcases_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/showcases/showcases.component */ 29400);
/* harmony import */ var _shared_showcases_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/showcases/showcase/showcase.component */ 6245);
/* harmony import */ var _shared_config_config_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/config/config.component */ 90741);
/* harmony import */ var _config_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.guard */ 97377);
/* harmony import */ var _route_paths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route-paths */ 18270);
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/layout/layout.component */ 61184);
/* harmony import */ var _shared_auth_oidc_sign_in_redirect_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/auth/oidc/sign-in-redirect/sign-in-redirect.component */ 6797);
/* harmony import */ var _shared_auth_oidc_sign_out_redirect_sign_out_redirect_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/auth/oidc/sign-out-redirect/sign-out-redirect.component */ 17969);
/* harmony import */ var _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/auth/auth.guard */ 15337);
/* harmony import */ var _shared_testimonials_testimonial_form_testimonial_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/testimonials/testimonial-form/testimonial-form.component */ 33513);
/* harmony import */ var _shared_auth_oauth_oauth_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/auth/oauth/oauth-sign-in-redirect.component */ 40705);
/* harmony import */ var _layout_renderer_components_root_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../layout-renderer/components/root.component */ 91996);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: _route_paths__WEBPACK_IMPORTED_MODULE_8__.ROUTE_PATHS.LAYOUT,
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_9__.LayoutComponent,
        canActivate: [_config_guard__WEBPACK_IMPORTED_MODULE_7__.ConfigGuard],
        runGuardsAndResolvers: "always",
        children: [
            { path: "", redirectTo: "news", pathMatch: "full" },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_8__.ROUTE_PATHS.NEWS, component: _shared_news_newsitems_newsitems_component__WEBPACK_IMPORTED_MODULE_0__.NewsItemsComponent, data: { title: "Quantum News", image: "News Head Banner" } },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_8__.ROUTE_PATHS.NEWS + "/:id", component: _shared_news_newsitem_newsitem_component__WEBPACK_IMPORTED_MODULE_2__.NewsItemComponent },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_8__.ROUTE_PATHS.SHOWCASES, component: _shared_showcases_showcases_component__WEBPACK_IMPORTED_MODULE_4__.ShowcasesComponent, data: { title: "Showcases", image: "Development Head Banner" } },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_8__.ROUTE_PATHS.SHOWCASES + "/:id", component: _shared_showcases_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_5__.ShowcaseComponent },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_8__.ROUTE_PATHS.SEARCH_RESULTS + "/:searchTerm", component: _shared_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_3__.SearchResultComponent, data: { title: "Search results", image: "Forums Head Banner" } },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_8__.ROUTE_PATHS.SUBMIT_TESTIMONIAL, component: _shared_testimonials_testimonial_form_testimonial_form_component__WEBPACK_IMPORTED_MODULE_13__.TestimonialFormComponent, canActivate: [_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard] }
        ]
    },
    {
        path: _route_paths__WEBPACK_IMPORTED_MODULE_8__.ROUTE_PATHS.LANDING,
        component: _layout_renderer_components_root_component__WEBPACK_IMPORTED_MODULE_15__.RootComponent,
        canActivate: [_config_guard__WEBPACK_IMPORTED_MODULE_7__.ConfigGuard],
        runGuardsAndResolvers: "always"
    },
    { path: "auth", children: [
            {
                path: "oidc", children: [
                    {
                        path: _route_paths__WEBPACK_IMPORTED_MODULE_8__.AUTH_ROUTE_PATHS.SIGN_IN_REDIRECT, component: _shared_auth_oidc_sign_in_redirect_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_10__.SignInRedirectComponent
                    },
                    {
                        path: _route_paths__WEBPACK_IMPORTED_MODULE_8__.AUTH_ROUTE_PATHS.SIGN_OUT_REDIRECT, component: _shared_auth_oidc_sign_out_redirect_sign_out_redirect_component__WEBPACK_IMPORTED_MODULE_11__.SignOutRedirectComponent
                    }
                ]
            },
            {
                path: "oauth", children: [
                    {
                        path: _route_paths__WEBPACK_IMPORTED_MODULE_8__.AUTH_ROUTE_PATHS.SIGN_IN_REDIRECT, component: _shared_auth_oauth_oauth_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_14__.OauthSignInRedirectComponent
                    }
                ]
            }
        ] },
    { path: _route_paths__WEBPACK_IMPORTED_MODULE_8__.ROUTE_PATHS.CONFIG, component: _shared_config_config_component__WEBPACK_IMPORTED_MODULE_6__.ConfigComponent },
    { path: _route_paths__WEBPACK_IMPORTED_MODULE_8__.ROUTE_PATHS.NOT_FOUND, component: _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ 18270:
/*!********************************************!*\
  !*** ./src/app/app-routing/route-paths.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTE_PATHS": function() { return /* binding */ ROUTE_PATHS; },
/* harmony export */   "AUTH_ROUTE_PATHS": function() { return /* binding */ AUTH_ROUTE_PATHS; }
/* harmony export */ });
var ROUTE_PATHS = {
    LAYOUT: "",
    NEWS: "news",
    SHOWCASES: "showcases",
    SUBMIT_TESTIMONIAL: "testimonial",
    NOT_FOUND: "**",
    NOT_FOUND_ANY: "**",
    SEARCH_RESULTS: "search-results",
    CONFIG: "config",
    LANDING: "landing-page"
};
var AUTH_ROUTE_PATHS = {
    SIGN_IN_REDIRECT: "sign-in",
    SIGN_OUT_REDIRECT: "sign-out"
};


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.ctorParameters = function () { return []; };
    AppComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
            selector: "app-root",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_news_newsitems_newsitems_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/news/newsitems/newsitems.component */ 66091);
/* harmony import */ var _shared_news_newsitem_newsitem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/news/newsitem/newsitem.component */ 16925);
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ 1650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing/app-routing.module */ 16391);
/* harmony import */ var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/search/search.component */ 23437);
/* harmony import */ var _shared_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/search/search-result/search-result.component */ 97631);
/* harmony import */ var _shared_taxa_taxa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/taxa/taxa.component */ 57983);
/* harmony import */ var _shared_showcases_showcases_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/showcases/showcases.component */ 29400);
/* harmony import */ var _shared_showcases_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/showcases/showcase/showcase.component */ 6245);
/* harmony import */ var _shared_config_config_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/config/config.component */ 90741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/storage.service */ 1303);
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/layout/layout.component */ 61184);
/* harmony import */ var _shared_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/testimonials/testimonials.component */ 89347);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 510);
/* harmony import */ var _shared_auth_oidc_oidc_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/auth/oidc/oidc.provider */ 64362);
/* harmony import */ var _shared_auth_oidc_sign_in_redirect_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/auth/oidc/sign-in-redirect/sign-in-redirect.component */ 6797);
/* harmony import */ var _shared_auth_oidc_sign_out_redirect_sign_out_redirect_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/auth/oidc/sign-out-redirect/sign-out-redirect.component */ 17969);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/comments/comments.component */ 5716);
/* harmony import */ var _shared_testimonials_testimonial_form_testimonial_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/testimonials/testimonial-form/testimonial-form.component */ 33513);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ 17500);
/* harmony import */ var _shared_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/common/rx-base/rx-base.component */ 45341);
/* harmony import */ var _shared_auth_oauth_oauth_provider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/auth/oauth/oauth.provider */ 91602);
/* harmony import */ var _shared_common_constants__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/common.constants */ 3580);
/* harmony import */ var _shared_auth_oauth_oauth_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/auth/oauth/oauth-sign-in-redirect.component */ 40705);
/* harmony import */ var _layout_renderer_layout_renderer_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layout-renderer/layout-renderer.module */ 34268);
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
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_26__.NgModule)({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
                _shared_news_newsitems_newsitems_component__WEBPACK_IMPORTED_MODULE_1__.NewsItemsComponent,
                _shared_news_newsitem_newsitem_component__WEBPACK_IMPORTED_MODULE_2__.NewsItemComponent,
                _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent,
                _shared_showcases_showcases_component__WEBPACK_IMPORTED_MODULE_8__.ShowcasesComponent,
                _shared_search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent,
                _shared_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__.SearchResultComponent,
                _shared_taxa_taxa_component__WEBPACK_IMPORTED_MODULE_7__.TaxaComponent,
                _shared_showcases_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_9__.ShowcaseComponent,
                _shared_config_config_component__WEBPACK_IMPORTED_MODULE_10__.ConfigComponent,
                _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__.LayoutComponent,
                _shared_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_13__.TestimonialsComponent,
                _shared_auth_oidc_sign_in_redirect_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_16__.SignInRedirectComponent,
                _shared_auth_oidc_sign_out_redirect_sign_out_redirect_component__WEBPACK_IMPORTED_MODULE_17__.SignOutRedirectComponent,
                _shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_18__.CommentsComponent,
                _shared_testimonials_testimonial_form_testimonial_form_component__WEBPACK_IMPORTED_MODULE_19__.TestimonialFormComponent,
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__.SidebarComponent,
                _shared_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_21__.RxBaseComponent,
                _shared_auth_oauth_oauth_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_24__.OauthSignInRedirectComponent
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule,
                _layout_renderer_layout_renderer_module__WEBPACK_IMPORTED_MODULE_25__.LayoutRendererModule,
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__.CarouselModule.forRoot(),
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_31__.PathLocationStrategy,
                _shared_auth_oidc_oidc_provider__WEBPACK_IMPORTED_MODULE_15__.OIDC_PROVIDER,
                _shared_auth_oauth_oauth_provider__WEBPACK_IMPORTED_MODULE_22__.OAUTH_PROVIDER,
                { provide: "Sitefinity", useValue: window["Sitefinity"] },
                { provide: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_11__.LOCAL_STORAGE, useValue: new _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_11__.StorageService(localStorage) },
                { provide: _shared_common_constants__WEBPACK_IMPORTED_MODULE_23__.WINDOW_TOKEN, useValue: window }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ 97377:
/*!*********************************!*\
  !*** ./src/app/config.guard.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigGuard": function() { return /* binding */ ConfigGuard; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/settings.service */ 54795);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfigGuard = /** @class */ (function () {
    function ConfigGuard(router, settings) {
        this.router = router;
        this.settings = settings;
    }
    ConfigGuard.prototype.canActivate = function (route, state) {
        var sandboxUrl = route.queryParams["url"];
        if (this.settings.url && !sandboxUrl) {
            return true;
        }
        else {
            this.router.navigate(["/config"], { queryParams: { "url": sandboxUrl } });
            return false;
        }
    };
    ConfigGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
        { type: _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService }
    ]; };
    ConfigGuard = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
            providedIn: "root"
        })
    ], ConfigGuard);
    return ConfigGuard;
}());



/***/ }),

/***/ 54417:
/*!**************************************************************!*\
  !*** ./src/app/layout-renderer/components/base.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": function() { return /* binding */ BaseComponent; }
/* harmony export */ });
var BaseComponent = /** @class */ (function () {
    function BaseComponent(pageContentService) {
        this.Model = {};
        this.subscriptions = [];
        this.pageContentService = pageContentService;
    }
    BaseComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) {
            s.unsubscribe();
        });
    };
    BaseComponent.prototype.registerSubscription = function (sub) {
        this.subscriptions.push(sub);
    };
    return BaseComponent;
}());



/***/ }),

/***/ 14318:
/*!*************************************************************************************!*\
  !*** ./src/app/layout-renderer/components/content-block/content-block.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": function() { return /* binding */ ContentComponent; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_content_block_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./content-block.component.html */ 42647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_page_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/page-content.service */ 40663);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ 54417);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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




var ContentComponent = /** @class */ (function (_super) {
    __extends(ContentComponent, _super);
    function ContentComponent(pageContentService) {
        var _this = _super.call(this, pageContentService) || this;
        _this.pageContentService = pageContentService;
        return _this;
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.Model.Properties && this.Model.Properties.SharedContentID && this.Model.Properties.ProviderName) {
            var sub = this.pageContentService.getShared(this.Model.Properties.SharedContentID, this.Model.Properties.ProviderName, this.Model.Culture, this.Model.SiteId)
                .subscribe(function (response) {
                _this.Model.Properties.Content = response.Content;
            });
            this.registerSubscription(sub);
        }
    };
    ContentComponent.ctorParameters = function () { return [
        { type: _services_page_content_service__WEBPACK_IMPORTED_MODULE_1__.PageContentService }
    ]; };
    ContentComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_content_block_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            selector: "app-content"
        })
    ], ContentComponent);
    return ContentComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent));



/***/ }),

/***/ 96568:
/*!***********************************************************************!*\
  !*** ./src/app/layout-renderer/components/layout/layout.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": function() { return /* binding */ LayoutComponent; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./layout.component.html */ 39388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _models_container_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/container-model */ 57380);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ 54417);
/* harmony import */ var _services_page_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/page-content.service */ 40663);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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





var LayoutComponent = /** @class */ (function (_super) {
    __extends(LayoutComponent, _super);
    function LayoutComponent(pageContentService) {
        var _this = _super.call(this, pageContentService) || this;
        _this.pageContentService = pageContentService;
        _this.columns = [];
        return _this;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.rowCss = this.Model.Properties["Row_Css"];
        this.setPlaceholderName(this.rowCss);
        this.generateColumns();
        this.setTemplate();
    };
    LayoutComponent.prototype.generateColumns = function () {
        var columns = _models_container_model__WEBPACK_IMPORTED_MODULE_1__.LayoutColumns[this.Model.ViewName];
        this.generateColumnsModels(columns);
    };
    LayoutComponent.prototype.generateColumnsModels = function (colCount) {
        var columns = [];
        if (!this.rowCss) {
            columns.push(this.getColumn(this.placeholderName));
        }
        else {
            for (var i = 0; i < colCount; i++) {
                var placeholder = "Column" + (i + 1);
                columns.push(this.getColumn(placeholder));
            }
        }
        this.columns = columns;
    };
    LayoutComponent.prototype.getColumn = function (placeholder) {
        var children = this.Model.Children.filter(function (c) { return c.PlaceHolder === placeholder; });
        return {
            children: children,
            placeholder: placeholder,
            css: this.Model.Properties[placeholder + "_Css"],
            label: this.Model.Properties[placeholder + "_Label"],
        };
    };
    LayoutComponent.prototype.setPlaceholderName = function (rowCss) {
        if (!rowCss) {
            var viewType = this.Model.Properties.ViewType;
            this.isContainer = true;
            if (viewType && (viewType === "ContainerFluid")) {
                this.placeholderName = "ContainerFluid";
            }
            else {
                this.placeholderName = "Container";
            }
        }
    };
    LayoutComponent.prototype.setTemplate = function () {
        this.itemTemplateName = this.columnsTemplate;
    };
    LayoutComponent.ctorParameters = function () { return [
        { type: _services_page_content_service__WEBPACK_IMPORTED_MODULE_3__.PageContentService }
    ]; };
    LayoutComponent.propDecorators = {
        containerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ["container", { static: true },] }],
        columnsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ["columnsTemplate", { static: true },] }]
    };
    LayoutComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: "app-layout",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_layout_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], LayoutComponent);
    return LayoutComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent));



/***/ }),

/***/ 91996:
/*!**************************************************************!*\
  !*** ./src/app/layout-renderer/components/root.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootComponent": function() { return /* binding */ RootComponent; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_root_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./root.component.html */ 23205);
/* harmony import */ var _landing_page_styles_quantum_landing_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page-styles/quantum-landing-page.scss */ 83707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_page_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/page-content.service */ 40663);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RootComponent = /** @class */ (function () {
    function RootComponent(route, pageContentService) {
        this.route = route;
        this.pageContentService = pageContentService;
    }
    RootComponent.prototype.ngOnInit = function () {
        var _this = this;
        var query = "?";
        var queryParams = this.route.snapshot.queryParams;
        Object.keys(queryParams).forEach(function (key) {
            query += key + "=" + queryParams[key];
        });
        this.route.url.subscribe(function (r) {
            var pageUrl = "" + r.map(function (u) { return u.path; }).join("/") + query;
            _this.pageContentService.get(pageUrl).subscribe(function (s) {
                _this.content = s.ComponentContext.Components;
                _this.culture = s.Culture;
                _this.siteId = s.SiteId;
            });
        });
    };
    RootComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
        { type: _services_page_content_service__WEBPACK_IMPORTED_MODULE_2__.PageContentService }
    ]; };
    RootComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: "app-root",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_root_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
            styles: [_landing_page_styles_quantum_landing_page_scss__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ 79475:
/*!***************************************************************************!*\
  !*** ./src/app/layout-renderer/directives/component-wrapper.directive.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperComponentDirective": function() { return /* binding */ WrapperComponentDirective; }
/* harmony export */ });
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout/layout.component */ 96568);
/* harmony import */ var _components_content_block_content_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/content-block/content-block.component */ 14318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_page_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/page-content.service */ 40663);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TYPES_MAP = {
    Layout: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
    ContentBlock: _components_content_block_content_block_component__WEBPACK_IMPORTED_MODULE_1__.ContentComponent
};
var WrapperComponentDirective = /** @class */ (function () {
    function WrapperComponentDirective(pageContentService, viewContainer, resolver) {
        this.pageContentService = pageContentService;
        this.viewContainer = viewContainer;
        this.resolver = resolver;
    }
    WrapperComponentDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.componentData) {
            return;
        }
        var type = TYPES_MAP[this.componentData.Name];
        if (!type) {
            return;
        }
        if (this.componentData.Lazy) {
            var component_1 = this.createAndInjectComponent(type);
            this.pageContentService.receivedContent$.subscribe(function (model) {
                if (model.Id === _this.componentData.Id) {
                    Object.assign(_this.componentData, model);
                    _this.setProperties(_this.componentData, component_1);
                }
            });
        }
        else {
            this.createAndInjectComponent(type);
        }
    };
    WrapperComponentDirective.prototype.createAndInjectComponent = function (type) {
        var factory = this.resolver.resolveComponentFactory(type);
        var componentRef = this.viewContainer.createComponent(factory, null, this.viewContainer.injector);
        var componentInstance = componentRef.instance;
        this.setProperties(this.componentData, componentInstance);
        return componentInstance;
    };
    WrapperComponentDirective.prototype.setProperties = function (componentData, componentInstance) {
        if (componentData && componentInstance) {
            Object.keys(componentData).forEach(function (propName) {
                componentInstance.Model[propName] = componentData[propName];
            });
            componentInstance.Model.Culture = this.culture;
            componentInstance.Model.SiteId = this.siteId;
        }
    };
    WrapperComponentDirective.ctorParameters = function () { return [
        { type: _services_page_content_service__WEBPACK_IMPORTED_MODULE_2__.PageContentService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ComponentFactoryResolver }
    ]; };
    WrapperComponentDirective.propDecorators = {
        componentData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ["componentWrapper",] }],
        culture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ["culture",] }],
        siteId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ["siteId",] }]
    };
    WrapperComponentDirective = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive)({
            // tslint:disable-next-line:directive-selector
            selector: "[componentWrapper]"
        })
    ], WrapperComponentDirective);
    return WrapperComponentDirective;
}());



/***/ }),

/***/ 34268:
/*!***********************************************************!*\
  !*** ./src/app/layout-renderer/layout-renderer.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutRendererModule": function() { return /* binding */ LayoutRendererModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_root_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/root.component */ 91996);
/* harmony import */ var _components_content_block_content_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/content-block/content-block.component */ 14318);
/* harmony import */ var _directives_component_wrapper_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/component-wrapper.directive */ 79475);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _services_page_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/page-content.service */ 40663);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout.component */ 96568);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutRendererModule = /** @class */ (function () {
    function LayoutRendererModule() {
    }
    LayoutRendererModule = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
            declarations: [
                _components_root_component__WEBPACK_IMPORTED_MODULE_0__.RootComponent,
                _components_content_block_content_block_component__WEBPACK_IMPORTED_MODULE_1__.ContentComponent,
                _directives_component_wrapper_directive__WEBPACK_IMPORTED_MODULE_2__.WrapperComponentDirective,
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            ],
            providers: [
                _services_page_content_service__WEBPACK_IMPORTED_MODULE_3__.PageContentService
            ]
        })
    ], LayoutRendererModule);
    return LayoutRendererModule;
}());



/***/ }),

/***/ 57380:
/*!***********************************************************!*\
  !*** ./src/app/layout-renderer/models/container-model.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutColumns": function() { return /* binding */ LayoutColumns; }
/* harmony export */ });
var LayoutColumns = {
    "1-column": 1,
    "2-columns": 2,
    "3-columns": 3,
    "4-columns": 4,
    "5-columns": 5,
    "6-columns": 6,
};


/***/ }),

/***/ 40663:
/*!******************************************************************!*\
  !*** ./src/app/layout-renderer/services/page-content.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContentService": function() { return /* binding */ PageContentService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/settings.service */ 54795);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageContentService = /** @class */ (function () {
    function PageContentService(http, settingsService) {
        this.http = http;
        this.settingsService = settingsService;
        this.receivedContent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject();
        this.serviceApi = "api/default";
    }
    PageContentService.prototype.get = function (pageName) {
        var _this = this;
        var return$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        var rootUrl = this.settingsService.url;
        this.http.get(rootUrl + "/" + this.serviceApi + "/pages/Default.Model(url=@param)?@param='" + pageName + "'")
            .subscribe(function (s) {
            return$.next(s);
            if (s.ComponentContext.HasLazyComponents) {
                _this.getLazy(pageName).subscribe(function (r) {
                    r.Components.forEach(function (c) {
                        _this.receivedContent$.next(c);
                    });
                });
            }
        }, function (error) {
            return$.error(error);
        });
        return return$;
    };
    PageContentService.prototype.getLazy = function (url) {
        var return$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        var rootUrl = this.settingsService.url;
        this.http.get(rootUrl + "/" + this.serviceApi + "/Default.LazyComponents(url=@param)?@param='" + url + "'")
            .subscribe(function (s) {
            return$.next(s);
        }, function (error) {
            return$.error(error);
        });
        return return$;
    };
    PageContentService.prototype.getShared = function (id, providerName, cultureName, siteId) {
        var return$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        var rootUrl = this.settingsService.url;
        this.http.get(rootUrl + "/" + this.serviceApi + "/contentitems(" + id + ")?sf_provider=" + providerName + "&sf_culture=" + cultureName + "&sf_site=" + siteId)
            .subscribe(function (s) {
            return$.next(s);
        }, function (error) {
            return$.error(error);
        });
        return return$;
    };
    PageContentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
        { type: _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService }
    ]; };
    PageContentService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
    ], PageContentService);
    return PageContentService;
}());



/***/ }),

/***/ 15337:
/*!*******************************************!*\
  !*** ./src/app/shared/auth/auth.guard.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 40866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 18293);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var isLoggedInSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.authService.init().subscribe(function () {
            _this.authService.isLoggedIn().subscribe(function (isLoggedIn) {
                if (!isLoggedIn) {
                    _this.authService.signIn(state.url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function (err) {
                        console.log(err);
                        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]);
                    })).subscribe(function (res) { return console.log('HTTP response', res); }, function (err) { return console.log('HTTP Error', err); });
                }
                isLoggedInSubject.next(isLoggedIn);
                isLoggedInSubject.complete();
            });
        });
        return isLoggedInSubject.asObservable();
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
    ]; };
    AuthGuard = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
            providedIn: "root"
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ 33642:
/*!**********************************************!*\
  !*** ./src/app/shared/auth/auth.provider.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_PROVIDER_TOKEN": function() { return /* binding */ AUTH_PROVIDER_TOKEN; },
/* harmony export */   "QuantumUser": function() { return /* binding */ QuantumUser; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

var AUTH_PROVIDER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("auth_provider");
var QuantumUser = /** @class */ (function () {
    function QuantumUser() {
    }
    return QuantumUser;
}());



/***/ }),

/***/ 40866:
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.provider */ 33642);
/* harmony import */ var _services_sitefinity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sitefinity.service */ 92661);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthService = /** @class */ (function () {
    function AuthService(providers, sitefinity) {
        this.providers = providers;
        this.sitefinity = sitefinity;
        this.provider = null;
        this.currentToken = null;
    }
    AuthService.prototype.init = function () {
        if (this.provider) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.provider);
        }
        return this.getProvider();
    };
    AuthService.prototype.signIn = function (returnUrl) {
        return this.provider.signIn(returnUrl);
    };
    AuthService.prototype.isLoggedIn = function () {
        if (!this.provider) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
        }
        return this.provider.isLoggedIn();
    };
    AuthService.prototype.getProvider = function () {
        var _this = this;
        // the provider is an observable as we do not know which provider we have to work with - oidc or oauth
        var ready = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject(1);
        var sortedProviders = this.providers.sort(function (a, b) {
            if (a.getPriority() > b.getPriority()) {
                return 1;
            }
            else if (a.getPriority() < b.getPriority()) {
                return -1;
            }
            return 0;
        });
        var availableProv = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({ provider: null, value: false });
        var _loop_1 = function (i) {
            availableProv = availableProv.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(function (result) {
                if (result.value === false) {
                    return sortedProviders[i].isAvailable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (x) {
                        return {
                            provider: sortedProviders[i],
                            value: x
                        };
                    }));
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
            }));
        };
        for (var i = 0; i < sortedProviders.length; i++) {
            _loop_1(i);
        }
        availableProv.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (x) { return x.provider; })).subscribe(function (provider) {
            _this.initProvider(ready, provider);
        });
        return ready.asObservable();
    };
    AuthService.prototype.initProvider = function (ready, provider) {
        var _this = this;
        this.provider = provider;
        this.provider.getToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(function (x) { return !!x; })).subscribe(function (token) {
            _this.currentToken = token;
            _this.sitefinity.token = {
                type: token.type,
                value: token.value
            };
        });
        this.provider.init().subscribe(function () {
            ready.next(_this.provider);
            ready.complete();
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject, args: [_auth_provider__WEBPACK_IMPORTED_MODULE_0__.AUTH_PROVIDER_TOKEN,] }] },
        { type: _services_sitefinity_service__WEBPACK_IMPORTED_MODULE_1__.SitefinityService }
    ]; };
    AuthService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
            providedIn: "root"
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ 40705:
/*!***********************************************************************!*\
  !*** ./src/app/shared/auth/oauth/oauth-sign-in-redirect.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OauthSignInRedirectComponent": function() { return /* binding */ OauthSignInRedirectComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _oauth_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oauth.provider */ 91602);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OauthSignInRedirectComponent = /** @class */ (function () {
    function OauthSignInRedirectComponent(router) {
        this.router = router;
    }
    OauthSignInRedirectComponent.prototype.ngOnInit = function () {
        var fragment = this.router.url.split("#")[1];
        var params = fragment.split("&");
        var parsedParams = {};
        params.forEach(function (param) {
            parsedParams[param.split("=")[0]] = param.split("=")[1];
        });
        var t = parsedParams["access_token"];
        var expires = new Date();
        expires.setSeconds(expires.getSeconds() + parsedParams["expires_in"] * 1000);
        var returnUrl = decodeURIComponent(decodeURIComponent(parsedParams["state"]));
        var token = new _oauth_provider__WEBPACK_IMPORTED_MODULE_0__.OAuthToken();
        token.value = t;
        token.expirationTime = expires;
        token.type = parsedParams["token_type"];
        _oauth_provider__WEBPACK_IMPORTED_MODULE_0__.OauthProvider.setToken(token);
        this.router.navigateByUrl(returnUrl);
    };
    OauthSignInRedirectComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
    ]; };
    OauthSignInRedirectComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: "sf-oauth-sign-in-redirect",
            template: ""
        })
    ], OauthSignInRedirectComponent);
    return OauthSignInRedirectComponent;
}());



/***/ }),

/***/ 91602:
/*!*****************************************************!*\
  !*** ./src/app/shared/auth/oauth/oauth.provider.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OauthProvider": function() { return /* binding */ OauthProvider; },
/* harmony export */   "OAUTH_PROVIDER": function() { return /* binding */ OAUTH_PROVIDER; },
/* harmony export */   "OAuthToken": function() { return /* binding */ OAuthToken; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.provider */ 33642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/settings.service */ 54795);
/* harmony import */ var _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-routing/route-paths */ 18270);
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/url.service */ 89862);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common.constants */ 3580);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var OAUTH_PATH = "Sitefinity/oauth";
var OAUTH_PROVIDER_NAME = "oauth";
var LOGOUT_URL_NO_STS = "/signout?sts_signout=false&redirect_uri=";
var OauthProvider = /** @class */ (function () {
    function OauthProvider(http, urlService, settingsProv, window) {
        this.http = http;
        this.urlService = urlService;
        this.settingsProv = settingsProv;
        this.window = window;
        this.settings = {
            client_id: "sitefinity",
            response_type: "token",
            automaticSilentRenew: false,
            filterProtocolClaims: true,
            loadUserInfo: false,
            authority: null,
            post_logout_redirect_uri: null,
            redirect_uri: null
        };
    }
    OauthProvider_1 = OauthProvider;
    OauthProvider.setToken = function (token) {
        OauthProvider_1.tokenSubject.next({
            type: token.type,
            value: token.value
        });
        OauthProvider_1.token = token;
    };
    OauthProvider.prototype.init = function () {
        this.initSettingsObj();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    };
    OauthProvider.prototype.signIn = function (returnUrl) {
        var redirectUri = encodeURIComponent(this.settings.redirect_uri);
        var encodedReturnUrl = encodeURIComponent(encodeURIComponent(returnUrl));
        var url = this.settings.authority + ("/authorize?response_type=token&client_id=" + this.settings.client_id + "&redirect_uri=" + redirectUri + "&state=" + encodedReturnUrl);
        this.window.location.href = url;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    };
    OauthProvider.prototype.signOut = function (returnUrl) {
        if (!returnUrl) {
            returnUrl = this.urlService.getAbsoluteUrl("/");
        }
        returnUrl = encodeURIComponent(returnUrl);
        var redirectUrl = this.settingsProv.url + "/Sitefinity" + LOGOUT_URL_NO_STS + returnUrl;
        this.window.location.href = redirectUrl;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)();
    };
    OauthProvider.prototype.isLoggedIn = function () {
        var result = !!OauthProvider_1.token && OauthProvider_1.token.expirationTime > new Date();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result);
    };
    OauthProvider.prototype.getToken = function () {
        return OauthProvider_1.tokenSubject.asObservable();
    };
    OauthProvider.prototype.getName = function () {
        return OAUTH_PROVIDER_NAME;
    };
    OauthProvider.prototype.getPriority = function () {
        return 1;
    };
    OauthProvider.prototype.isAvailable = function () {
        this.initSettingsObj();
        var url = this.settingsProv.url + "/sitefinity/authentication/info";
        return this.http.get(url, { observe: "response", responseType: "text" }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (x) {
            var header = x.headers.get("content-type");
            if (header && header.startsWith("application/json")) {
                var result = JSON.parse(x.body);
                return result.protocol === "Default";
            }
            return false;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(function (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
        }));
    };
    OauthProvider.prototype.initSettingsObj = function () {
        if (!this.settings.authority && this.settingsProv.url) {
            this.settings.authority = this.settingsProv.url + "/" + OAUTH_PATH;
            this.settings.post_logout_redirect_uri = this.urlService.getAbsoluteUrl("/auth/oauth/" + _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_2__.AUTH_ROUTE_PATHS.SIGN_OUT_REDIRECT);
            this.settings.redirect_uri = this.urlService.getAbsoluteUrl("/auth/oauth/" + _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_2__.AUTH_ROUTE_PATHS.SIGN_IN_REDIRECT);
        }
    };
    var OauthProvider_1;
    OauthProvider.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject(1);
    OauthProvider.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
        { type: _services_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService },
        { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject, args: [_common_constants__WEBPACK_IMPORTED_MODULE_4__.WINDOW_TOKEN,] }] }
    ]; };
    OauthProvider = OauthProvider_1 = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)()
    ], OauthProvider);
    return OauthProvider;
}());

var OAUTH_PROVIDER = {
    multi: true,
    provide: _auth_provider__WEBPACK_IMPORTED_MODULE_0__.AUTH_PROVIDER_TOKEN,
    useClass: OauthProvider
};
var OAuthToken = /** @class */ (function () {
    function OAuthToken() {
    }
    return OAuthToken;
}());



/***/ }),

/***/ 64362:
/*!***************************************************!*\
  !*** ./src/app/shared/auth/oidc/oidc.provider.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OidcProvider": function() { return /* binding */ OidcProvider; },
/* harmony export */   "OIDC_PROVIDER": function() { return /* binding */ OIDC_PROVIDER; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.provider */ 33642);
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! oidc-client */ 32437);
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ 54795);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 34361);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-routing/route-paths */ 18270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/url.service */ 89862);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common.constants */ 3580);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var OPEN_ID_PATH = "Sitefinity/Authenticate/OpenID";
var OIDC_PROVIDER_NAME = "openid";
var OidcProvider = /** @class */ (function () {
    function OidcProvider(settingsProv, http, router, locationStrategy, window, urlService) {
        this.settingsProv = settingsProv;
        this.http = http;
        this.router = router;
        this.locationStrategy = locationStrategy;
        this.window = window;
        this.urlService = urlService;
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_6__.ReplaySubject(1);
        this.settings = {
            client_id: "sitefinity",
            response_type: "id_token token",
            scope: "openid profile",
            automaticSilentRenew: true,
            filterProtocolClaims: true,
            loadUserInfo: true,
            authority: null,
            post_logout_redirect_uri: null,
            redirect_uri: null,
            silent_redirect_uri: null,
            metadata: null,
            signingKeys: null
        };
    }
    OidcProvider.prototype.init = function () {
        var _this = this;
        this.initSettingsObj();
        var observables = [
            this.http.get(this.authSettingsUrl),
            this.initJwks()
        ];
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)(observables).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (data) {
            var authSettings = data[0];
            _this.settings.scope = authSettings.Scope;
            _this.manager = new oidc_client__WEBPACK_IMPORTED_MODULE_1__.UserManager(_this.settings);
            _this.attachEvents();
        }));
    };
    OidcProvider.prototype.initJwks = function () {
        var _this = this;
        var url = this.settings.authority + "/.well-known/jwks";
        return this.http.get(url, { observe: "response", responseType: "json" })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (x) {
            var signingKeys = x.body.keys;
            if (signingKeys) {
                _this.settings.signingKeys = signingKeys;
            }
        }));
    };
    OidcProvider.prototype.attachEvents = function () {
        var _this = this;
        this.manager.getUser().then(function (user) {
            if (user && !user.expired) {
                _this.manager.storeUser(user);
                _this.emitToken(user);
            }
        });
        this.manager.events.addUserLoaded(function (user) {
            _this.emitToken(user);
        });
    };
    OidcProvider.prototype.emitToken = function (user) {
        this.token.next({
            type: user.token_type,
            value: user.access_token
        });
    };
    OidcProvider.prototype.getName = function () {
        return OIDC_PROVIDER_NAME;
    };
    OidcProvider.prototype.getPriority = function () {
        return 2;
    };
    OidcProvider.prototype.isAvailable = function () {
        var _this = this;
        this.initSettingsObj();
        var url = this.settings.authority + "/.well-known/openid-configuration";
        return this.http.get(url, { observe: "response", responseType: "text" }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (x) {
            var header = x.headers.get("content-type");
            if (header && header.startsWith("application/json")) {
                // This is done to avoid multiple request. This ways the oidc library doesn't
                // make the same request twice.
                _this.settings.metadata = JSON.parse(x.body);
                return true;
            }
            return false;
        }));
    };
    OidcProvider.prototype.initSettingsObj = function () {
        if (!this.settings.authority && this.settingsProv.url) {
            this.settings.authority = this.settingsProv.url + "/" + OPEN_ID_PATH;
            this.settings.post_logout_redirect_uri = this.urlService.getAbsoluteUrl("/auth/oidc/" + _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_3__.AUTH_ROUTE_PATHS.SIGN_OUT_REDIRECT);
            this.settings.redirect_uri = this.urlService.getAbsoluteUrl("/auth/oidc/" + _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_3__.AUTH_ROUTE_PATHS.SIGN_IN_REDIRECT);
            this.settings.silent_redirect_uri = this.urlService.getAbsoluteUrl("/assets/auth/silent-renew.html");
            this.authSettingsUrl = this.settingsProv.systemServiceUrl + "Default.AuthSettings(clientId='" + this.settings.client_id + "')";
        }
    };
    OidcProvider.prototype.signIn = function (returnUrl) {
        var _this = this;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(this.manager.getUser()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(function (user) {
            if (user && user.expired) {
                // if we have a user attempt to sign in the user silently without redirects
                return _this.authenticateSilent(returnUrl);
            }
            return _this.authenticateWithRedirects(returnUrl);
        }));
    };
    OidcProvider.prototype.signOut = function () {
        var signOut = this.manager.signoutRedirect();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(signOut);
    };
    OidcProvider.prototype.isLoggedIn = function () {
        var user = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(this.manager.getUser());
        var session = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(this.manager.querySessionStatus());
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)(user, session).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (data) {
            var user = data[0], session = data[1];
            if (user && session) {
                if (!user.expired && user.profile.sub === session.sub) {
                    return true;
                }
            }
            return false;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(function (error) {
            console.log(error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(false);
        }));
    };
    OidcProvider.prototype.getToken = function () {
        return this.token.asObservable();
    };
    OidcProvider.prototype.authenticateSilent = function (returnUrl) {
        var _this = this;
        var signInSilent = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(this.manager.signinSilent());
        signInSilent.subscribe(function () {
            _this.router.navigateByUrl(returnUrl);
        });
        return signInSilent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (x) { return x; }));
    };
    OidcProvider.prototype.authenticateWithRedirects = function (returnUrl) {
        var signIn = this.manager.signinRedirect({ data: returnUrl });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(signIn);
    };
    OidcProvider.ctorParameters = function () { return [
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.PathLocationStrategy },
        { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Inject, args: [_common_constants__WEBPACK_IMPORTED_MODULE_5__.WINDOW_TOKEN,] }] },
        { type: _services_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService }
    ]; };
    OidcProvider = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Injectable)()
    ], OidcProvider);
    return OidcProvider;
}());

var OIDC_PROVIDER = {
    multi: true,
    provide: _auth_provider__WEBPACK_IMPORTED_MODULE_0__.AUTH_PROVIDER_TOKEN,
    useClass: OidcProvider
};


/***/ }),

/***/ 6797:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/auth/oidc/sign-in-redirect/sign-in-redirect.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInRedirectComponent": function() { return /* binding */ SignInRedirectComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 34361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! oidc-client */ 32437);
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignInRedirectComponent = /** @class */ (function () {
    function SignInRedirectComponent(router) {
        this.router = router;
    }
    SignInRedirectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var redirect = new oidc_client__WEBPACK_IMPORTED_MODULE_0__.UserManager({}).signinRedirectCallback();
        var redirectAsObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(redirect);
        redirectAsObservable.subscribe(function (args) {
            var state = args.state;
            _this.router.navigateByUrl(state);
        });
    };
    SignInRedirectComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
    ]; };
    SignInRedirectComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: "app-sign-in-redirect",
            template: ""
        })
    ], SignInRedirectComponent);
    return SignInRedirectComponent;
}());



/***/ }),

/***/ 17969:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/auth/oidc/sign-out-redirect/sign-out-redirect.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignOutRedirectComponent": function() { return /* binding */ SignOutRedirectComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 34361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! oidc-client */ 32437);
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app-routing/route-paths */ 18270);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignOutRedirectComponent = /** @class */ (function () {
    function SignOutRedirectComponent(router) {
        this.router = router;
    }
    SignOutRedirectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var redirect = new oidc_client__WEBPACK_IMPORTED_MODULE_0__.UserManager({}).signoutRedirectCallback();
        var redirectAsObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(redirect);
        redirectAsObservable.subscribe(function () {
            // navigating to home should trigger login
            _this.router.navigate([_app_routing_route_paths__WEBPACK_IMPORTED_MODULE_1__.ROUTE_PATHS.LAYOUT]);
        });
    };
    SignOutRedirectComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
    ]; };
    SignOutRedirectComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: "app-sign-out-redirect",
            template: ""
        })
    ], SignOutRedirectComponent);
    return SignOutRedirectComponent;
}());



/***/ }),

/***/ 5716:
/*!*******************************************************!*\
  !*** ./src/app/shared/comments/comments.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsComponent": function() { return /* binding */ CommentsComponent; },
/* harmony export */   "Comment": function() { return /* binding */ Comment; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comments_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./comments.component.html */ 8432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 40866);
/* harmony import */ var _services_comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/comments.service */ 38489);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/news.service */ 55536);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ 98613);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(authService, commentsService, router, userService) {
        this.authService = authService;
        this.commentsService = commentsService;
        this.router = router;
        this.userService = userService;
        this.comments = [];
        this.commentsCount = 0;
        this.model = new Comment();
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.init().subscribe(function () {
            _this.authService.isLoggedIn().subscribe(function (isLoggedIn) {
                if (isLoggedIn) {
                    _this.showCommentsForm = true;
                    _this.userService.getUserInfo().subscribe(function (user) {
                        _this.model.Name = user.Username;
                        _this.model.ProfilePictureUrl = user.Picture;
                    });
                }
            });
        });
        this.getComments();
    };
    CommentsComponent.prototype.login = function () {
        var _this = this;
        this.authService.init().subscribe(function () {
            _this.authService.signIn(_this.router.routerState.snapshot.url).subscribe();
        });
    };
    CommentsComponent.prototype.submitComment = function (form) {
        var _this = this;
        if (form.valid) {
            this.creatingComment = true;
            this.commentsService.createComment(_services_news_service__WEBPACK_IMPORTED_MODULE_3__.newsItemsDataOptions, this.model, this.commentableItemId).subscribe(function (isCommentCreated) {
                if (isCommentCreated) {
                    _this.getComments();
                }
            });
        }
    };
    CommentsComponent.prototype.getComments = function () {
        var _this = this;
        this.commentsService.getComments(_services_news_service__WEBPACK_IMPORTED_MODULE_3__.newsItemsDataOptions, this.commentableItemId).subscribe(function (data) {
            var _a;
            if (data) {
                if (_this.comments.length === 0) {
                    _this.comments = data.reverse();
                }
                var elementsToTake = data.length - _this.comments.length;
                var newComments = data.slice(0, elementsToTake).reverse();
                (_a = _this.comments).push.apply(_a, newComments);
                _this.commentsCount = _this.comments.length;
                _this.model.Message = null;
                _this.creatingComment = false;
            }
        });
    };
    CommentsComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
        { type: _services_comments_service__WEBPACK_IMPORTED_MODULE_2__.CommentsService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
    ]; };
    CommentsComponent.propDecorators = {
        commentableItemId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
    };
    CommentsComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
            selector: "app-comments",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comments_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], CommentsComponent);
    return CommentsComponent;
}());

var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ 3580:
/*!********************************************!*\
  !*** ./src/app/shared/common.constants.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WINDOW_TOKEN": function() { return /* binding */ WINDOW_TOKEN; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

var WINDOW_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("Window");


/***/ }),

/***/ 45341:
/*!************************************************************!*\
  !*** ./src/app/shared/common/rx-base/rx-base.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RxBaseComponent": function() { return /* binding */ RxBaseComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
    RxBaseComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({ template: "" })
    ], RxBaseComponent);
    return RxBaseComponent;
}());



/***/ }),

/***/ 90741:
/*!***************************************************!*\
  !*** ./src/app/shared/config/config.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigComponent": function() { return /* binding */ ConfigComponent; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_config_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./config.component.html */ 21135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/settings.service */ 54795);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-routing/route-paths */ 18270);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(settings, router, route) {
        this.settings = settings;
        this.router = router;
        this.route = route;
    }
    ConfigComponent_1 = ConfigComponent;
    ConfigComponent.prototype.ngOnInit = function () {
        var sandboxUrl = this.route.snapshot.queryParams["url"];
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
        enumerable: false,
        configurable: true
    });
    ConfigComponent.prototype.onSave = function () {
        this.currentUrl = ConfigComponent_1.parseSitefinityUrlInput(this.currentUrl);
        this.redirectToHome();
    };
    ConfigComponent.prototype.redirectToHome = function () {
        this.router.navigate([_app_routing_route_paths__WEBPACK_IMPORTED_MODULE_2__.ROUTE_PATHS.LAYOUT]);
    };
    ConfigComponent.parseSitefinityUrlInput = function (str) {
        // trim whitespaces
        str = str.trim();
        // strip end slashes
        while (str.endsWith("/")) {
            str = str.substring(0, str.length - 1);
        }
        // add protocol scheme (https://) if missing
        if (!str.match(/^\w+:\/\//)) {
            str = "http" + str;
        }
        return str;
    };
    var ConfigComponent_1;
    ConfigComponent.ctorParameters = function () { return [
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
    ]; };
    ConfigComponent = ConfigComponent_1 = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: "app-config",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_config_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ 61184:
/*!***************************************************!*\
  !*** ./src/app/shared/layout/layout.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": function() { return /* binding */ LayoutComponent; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./layout.component.html */ 56512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/images.service */ 79822);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ 68470);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(imageService, router, route, titleService) {
        this.imageService = imageService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe((0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd; }), (0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function () { return _this.route; }), (0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), (0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (route) { return route.outlet === "primary"; }), (0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.setImageAndTitle(event);
        });
        this.route.url.subscribe(function () {
            var routeData = _this.route.snapshot.firstChild.data;
            _this.setImageAndTitle(routeData);
        });
        this.logoImage = this.imageService.getImageByTitle("Logo_Quantum");
    };
    LayoutComponent.prototype.setImageAndTitle = function (data) {
        this.bannerImage = this.imageService.getImageByTitle(data["image"]);
        this.title.next(data["title"]);
        this.titleService.setTitle(data["title"]);
    };
    LayoutComponent.ctorParameters = function () { return [
        { type: _services_images_service__WEBPACK_IMPORTED_MODULE_1__.ImagesService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title }
    ]; };
    LayoutComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
            selector: "app-layout",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_layout_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ 16925:
/*!************************************************************!*\
  !*** ./src/app/shared/news/newsitem/newsitem.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsItemComponent": function() { return /* binding */ NewsItemComponent; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newsitem_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./newsitem.component.html */ 39544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/news.service */ 55536);
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/rx-base/rx-base.component */ 45341);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
    };
    NewsItemComponent.prototype.getNewsItem = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        if (id) {
            this.subscription = this.newsService.getNewsItem(id).subscribe(function (data) {
                _this.newsItem = data;
                if (data.Content) {
                    _this.newsItemContent = _this.sanitizer.bypassSecurityTrustHtml(data.Content);
                }
            });
            this.registerSubscription(this.subscription);
        }
    };
    NewsItemComponent.ctorParameters = function () { return [
        { type: _services_news_service__WEBPACK_IMPORTED_MODULE_1__.NewsService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer }
    ]; };
    NewsItemComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: "app-newsitem",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newsitem_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], NewsItemComponent);
    return NewsItemComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__.RxBaseComponent));



/***/ }),

/***/ 66091:
/*!**************************************************************!*\
  !*** ./src/app/shared/news/newsitems/newsitems.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsItemsComponent": function() { return /* binding */ NewsItemsComponent; },
/* harmony export */   "NewsItem": function() { return /* binding */ NewsItem; },
/* harmony export */   "Image": function() { return /* binding */ Image; },
/* harmony export */   "Album": function() { return /* binding */ Album; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newsitems_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./newsitems.component.html */ 26983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/news.service */ 55536);
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/rx-base/rx-base.component */ 45341);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25160);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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





var NewsItemsComponent = /** @class */ (function (_super) {
    __extends(NewsItemsComponent, _super);
    function NewsItemsComponent(newsService) {
        var _this = _super.call(this) || this;
        _this.newsService = newsService;
        _this.newsItems = [];
        _this.allNewsItems = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
        _this.showMoreItemsLink = true;
        return _this;
    }
    Object.defineProperty(NewsItemsComponent.prototype, "shouldShowLoadMore", {
        get: function () {
            return (this.allItemsCount > this.newsItems.length) && this.showMoreItemsLink;
        },
        enumerable: false,
        configurable: true
    });
    NewsItemsComponent.prototype.ngOnInit = function () {
        this.getNewsItems();
        this.getAllNewsItemsCount();
    };
    NewsItemsComponent.prototype.getNewsItemsByTaxa = function (event) {
        var _this = this;
        var taxaName = event.taxaName;
        var taxaId = event.taxa;
        this.newsItemsForTagSubscription = this.newsService.getNewsByTaxa(taxaName, taxaId).subscribe(function (newsItems) {
            if (newsItems) {
                _this.newsItems = newsItems;
            }
        });
        this.registerSubscription(this.newsItemsForTagSubscription);
        this.showMoreItemsLink = false;
    };
    NewsItemsComponent.prototype.LoadMore = function () {
        this.getNewsItems();
    };
    NewsItemsComponent.prototype.getNewsItems = function () {
        var _this = this;
        this.allNewsItems = this.newsService.getNewsItems();
        this.newsSubscription = this.newsService.getNewsItems(6, this.newsItems.length).subscribe(function (data) {
            var _a;
            if (data) {
                (_a = _this.newsItems).push.apply(_a, data);
            }
        });
        this.registerSubscription(this.newsSubscription);
    };
    NewsItemsComponent.prototype.getAllNewsItemsCount = function () {
        var _this = this;
        this.newsItemsCountSubscription = this.newsService.getAllNewsCount().subscribe(function (data) {
            _this.allItemsCount = data;
        });
        this.registerSubscription(this.newsItemsCountSubscription);
    };
    NewsItemsComponent.ctorParameters = function () { return [
        { type: _services_news_service__WEBPACK_IMPORTED_MODULE_1__.NewsService }
    ]; };
    NewsItemsComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: "app-newsitems",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newsitems_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], NewsItemsComponent);
    return NewsItemsComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__.RxBaseComponent));

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

var Album = /** @class */ (function () {
    function Album() {
    }
    return Album;
}());



/***/ }),

/***/ 1650:
/*!*********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": function() { return /* binding */ NotFoundComponent; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./not-found.component.html */ 90172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
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
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
            selector: "app-not-found",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ 97631:
/*!************************************************************************!*\
  !*** ./src/app/shared/search/search-result/search-result.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultComponent": function() { return /* binding */ SearchResultComponent; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_result_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search-result.component.html */ 44596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search.service */ 43763);
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/rx-base/rx-base.component */ 45341);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings.service */ 54795);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
            if (data["searchTerm"]) {
                _this.searchTerm = data["searchTerm"];
                _this.searchService.getItemsBySearchWord(_this.searchTerm);
            }
        });
    };
    SearchResultComponent.ctorParameters = function () { return [
        { type: _services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
    ]; };
    SearchResultComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: "app-search-result",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_result_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], SearchResultComponent);
    return SearchResultComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__.RxBaseComponent));



/***/ }),

/***/ 23437:
/*!***************************************************!*\
  !*** ./src/app/shared/search/search.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": function() { return /* binding */ SearchComponent; },
/* harmony export */   "SearchResultItem": function() { return /* binding */ SearchResultItem; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search.component.html */ 51554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/search.service */ 43763);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
    }
    SearchComponent.prototype.onEnter = function (event) {
        this.searchService.search(event.target.value);
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService }
    ]; };
    SearchComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: "app-search",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], SearchComponent);
    return SearchComponent;
}());

var SearchResultItem = /** @class */ (function () {
    function SearchResultItem() {
    }
    return SearchResultItem;
}());



/***/ }),

/***/ 38489:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/comments.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsService": function() { return /* binding */ CommentsService; },
/* harmony export */   "DataOptions": function() { return /* binding */ DataOptions; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitefinity.service */ 92661);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 13413);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommentsService = /** @class */ (function () {
    function CommentsService(sitefinity) {
        this.sitefinity = sitefinity;
    }
    CommentsService.prototype.getComments = function (contentItemsDataOptions, contentItemId, skip, take) {
        var commentSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.sitefinity.instance.data(contentItemsDataOptions).getSingle({
            key: contentItemId,
            action: "Comments",
            successCb: function (data) { return commentSubject.next(data.value); },
            failureCb: function (data) { return console.log(data); }
        });
        return commentSubject.asObservable();
    };
    CommentsService.prototype.createComment = function (contentItemsDataOptions, comment, contentItemId) {
        var isCommentCreated = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.sitefinity.instance.data({
            urlName: contentItemsDataOptions.urlName,
            providerName: contentItemsDataOptions.providerName,
            cultureName: "en"
        }).create({
            key: contentItemId,
            action: "postcomment",
            data: { "name": comment.Name, "message": comment.Message },
            successCb: function () { return isCommentCreated.next(true); },
            failureCb: function (error) {
                console.log(error);
                isCommentCreated.next(false);
            }
        });
        return isCommentCreated.asObservable();
    };
    CommentsService.ctorParameters = function () { return [
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__.SitefinityService }
    ]; };
    CommentsService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
            providedIn: "root"
        })
    ], CommentsService);
    return CommentsService;
}());

var DataOptions = /** @class */ (function () {
    function DataOptions() {
    }
    return DataOptions;
}());



/***/ }),

/***/ 79822:
/*!***************************************************!*\
  !*** ./src/app/shared/services/images.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageDataOptions": function() { return /* binding */ imageDataOptions; },
/* harmony export */   "albumDataOptions": function() { return /* binding */ albumDataOptions; },
/* harmony export */   "ImagesService": function() { return /* binding */ ImagesService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitefinity.service */ 92661);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.service */ 54795);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var imageDataOptions = {
    urlName: "images",
};
var albumDataOptions = {
    urlName: "albums",
};
var ImagesService = /** @class */ (function () {
    function ImagesService(sitefinity, settingsService, sanitizer) {
        this.sitefinity = sitefinity;
        this.settingsService = settingsService;
        this.sanitizer = sanitizer;
    }
    ImagesService.prototype.getImageByTitle = function (title) {
        var replaySubjectImage = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
        this.sitefinity.instance.data(imageDataOptions).get({
            query: this.sitefinity
                .query
                .order("Title desc")
                .where()
                .eq("Title", title)
                .done(),
            successCb: function (data) { return replaySubjectImage.next(data.value[0]); },
            failureCb: function (data) { return console.log(data); }
        });
        return replaySubjectImage.asObservable();
    };
    ImagesService.prototype.getLibraryByTitle = function (title) {
        var replaySubjectLibrary = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
        this.sitefinity.instance.data(albumDataOptions).get({
            query: this.sitefinity
                .query
                .order("Title desc")
                .where()
                .eq("Title", title)
                .done(),
            successCb: function (data) { return replaySubjectLibrary.next(data.value[0]); },
            failureCb: function (data) { return console.log(data); }
        });
        return replaySubjectLibrary.asObservable();
    };
    ImagesService.prototype.uploadImage = function (libraryId, imageProperties) {
        var upload = { success: false, failure: false, result: null, errorMessage: null };
        var resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
        var success = function (result) {
            var data = result.data[0].response[0].data;
            if (result.isSuccessful) {
                upload.result = data;
                upload.success = true;
                resultSubject.next(upload);
                resultSubject.complete();
            }
            else {
                upload.failure = true;
                upload.errorMessage = data.error;
                resultSubject.next(upload);
            }
        };
        var reject = function (result) {
            upload.failure = true;
            resultSubject.next(upload);
        };
        var progress = function () { };
        var batch = this.sitefinity.instance.batch(success, reject, progress, {
            providerName: "OpenAccessDataProvider",
            cultureName: "en"
        });
        var transaction = batch.beginTransaction();
        var file = imageProperties.File || imageProperties.file;
        var url = window.URL.createObjectURL(file);
        var safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
        var imagePrimitives = {
            ParentId: libraryId,
            DirectUpload: true,
            Height: imageProperties.height,
            Width: imageProperties.width,
            Title: imageProperties.File.name || imageProperties.file
        };
        var uploadedFile = transaction.upload({
            entitySet: "images",
            data: file,
            dataUrl: safeUrl,
            contentType: file.type,
            fileName: file.name,
            uploadProperties: imagePrimitives
        });
        transaction.operation({
            entitySet: "images",
            key: uploadedFile,
            data: {
                action: "Publish"
            }
        });
        batch.endTransaction(transaction);
        batch.execute();
        return resultSubject.asObservable();
    };
    ImagesService.prototype.associateRelatedImage = function (relationalFieldName, relationalField, entitySet, itemId, relationId, transaction) {
        transaction.destroyRelated({
            entitySet: entitySet,
            key: relationId,
            navigationProperty: relationalFieldName
        });
        var relationLink = this.settingsService.url + _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__.endpoint + "images(" + itemId + ")";
        transaction.createRelated({
            entitySet: entitySet,
            key: relationId,
            navigationProperty: relationalFieldName,
            link: relationLink
        });
    };
    ImagesService.prototype.sortFieldValues = function (obj) {
        var sortedFieldValues = { primitives: {}, relational: {} };
        for (var key in obj) {
            if (this.isPrimitiveProperty(obj[key])) {
                sortedFieldValues.primitives[key] = obj[key];
            }
            else {
                sortedFieldValues.relational[key] = obj[key];
            }
        }
        return sortedFieldValues;
    };
    ImagesService.prototype.isPrimitiveProperty = function (property) {
        return !this.isObject(property);
    };
    ImagesService.prototype.isObject = function (val) {
        if (val === null) {
            return false;
        }
        return ((typeof val === "function") || (typeof val === "object"));
    };
    ImagesService.ctorParameters = function () { return [
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__.SitefinityService },
        { type: _settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer }
    ]; };
    ImagesService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
            providedIn: "root"
        })
    ], ImagesService);
    return ImagesService;
}());

var ImagePrimitives = /** @class */ (function () {
    function ImagePrimitives() {
    }
    return ImagePrimitives;
}());
var SortedProperties = /** @class */ (function () {
    function SortedProperties() {
    }
    return SortedProperties;
}());


/***/ }),

/***/ 55536:
/*!*************************************************!*\
  !*** ./src/app/shared/services/news.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newsItemsDataOptions": function() { return /* binding */ newsItemsDataOptions; },
/* harmony export */   "NewsService": function() { return /* binding */ NewsService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitefinity.service */ 92661);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 13413);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var newsItemsDataOptions = {
    urlName: "newsitems",
    providerName: "OpenAccessDataProvider",
    cultureName: "en"
};
var NewsService = /** @class */ (function () {
    function NewsService(sitefinity) {
        this.sitefinity = sitefinity;
    }
    NewsService.prototype.getNewsItems = function (take, skip) {
        var query;
        var newsReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        if ((take !== null && take !== undefined) && (skip !== null && skip !== undefined)) {
            query = this.sitefinity
                .query
                .select("Title", "Id", "Content", "DateCreated", "PublicationDate", "Summary", "UrlName", "Author", "Tags", "Category", "Featured")
                .expand("Thumbnail")
                .order("PublicationDate desc")
                .skip(skip).take(take);
        }
        else {
            query = this.sitefinity
                .query
                .select("Title", "Id", "Content", "DateCreated", "PublicationDate", "Summary", "UrlName", "Author", "Tags", "Category", "Featured")
                .expand("Thumbnail")
                .order("PublicationDate desc");
        }
        this.sitefinity.instance.data(newsItemsDataOptions).get({
            query: query,
            successCb: function (data) { return newsReplaySubject.next(data.value); },
            failureCb: function (data) { return console.log(data); }
        });
        return newsReplaySubject.asObservable();
    };
    NewsService.prototype.getNewsByTaxa = function (propertyName, taxaId) {
        var newsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.sitefinity.instance.data(newsItemsDataOptions).get({
            query: this.sitefinity
                .query
                .select("Title", "Id", "Content", "DateCreated", "Summary", "UrlName", "Author")
                .expand("Thumbnail")
                .order("Title desc")
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
        var newsReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.sitefinity.instance.data(newsItemsDataOptions).getSingle({
            key: id,
            query: this.sitefinity
                .query
                .select("Title", "Id", "Content", "DateCreated", "Summary", "UrlName", "Author", "Tags")
                .expand("Thumbnail")
                .order("Title desc"),
            successCb: function (data) { newsReplaySubject.next(data); },
            failureCb: function (data) { return console.log(data); }
        });
        return newsReplaySubject.asObservable();
    };
    NewsService.prototype.getAllNewsCount = function () {
        var newsReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.sitefinity.instance.data(newsItemsDataOptions).get({
            query: this.sitefinity
                .query
                .count(false),
            successCb: function (data) { return newsReplaySubject.next(data); },
            failureCb: function (data) { return console.log(data); }
        });
        return newsReplaySubject.asObservable();
    };
    NewsService.ctorParameters = function () { return [
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__.SitefinityService }
    ]; };
    NewsService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
            providedIn: "root"
        })
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ 43763:
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": function() { return /* binding */ SearchService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitefinity.service */ 92661);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchService = /** @class */ (function () {
    function SearchService(router, sitefinity) {
        this.router = router;
        this.sitefinity = sitefinity;
        this.searchTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this._searchResults = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
    }
    Object.defineProperty(SearchService.prototype, "searchResults", {
        get: function () {
            return this._searchResults.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    SearchService.prototype.search = function (searchWord) {
        this.router.navigate(["/search-results", searchWord]);
    };
    SearchService.prototype.getItemsBySearchWord = function (searchWord) {
        var _this = this;
        var batch = this.sitefinity.instance.batch(function (data) { return _this._searchResults.next(_this.mapSearchResults(data)); });
        batch.get({ entitySet: "showcases", query: this.sitefinity
                .query
                .select("Title", "Client", "Challenge", "Solution", "Results", "Id")
                .order("Title asc")
                .where()
                .or()
                .contains("Title", searchWord)
                .or()
                .contains("Client", searchWord)
                .or()
                .contains("Challenge", searchWord)
                .or()
                .contains("Solution", searchWord)
                .or()
                .contains("Results", searchWord)
                .done().done().done().done().done().done() });
        batch.get({ entitySet: "images", query: this.sitefinity
                .query
                .where()
                .contains("Title", searchWord)
                .done() });
        batch.get({ entitySet: "newsitems", query: this.sitefinity
                .query
                .select("Title", "Content", "Summary", "Id")
                .order("Title asc")
                .where()
                .or()
                .contains("Title", searchWord)
                .or()
                .contains("Content", searchWord)
                .or()
                .contains("Summary", searchWord)
                .done().done().done().done() });
        batch.execute();
    };
    SearchService.prototype.mapSearchResults = function (result) {
        var searchResults = [];
        var data = result.data;
        if (data.length > 0) {
            data.forEach(function (item) {
                var context = item.response.data["@odata.context"];
                var contentType;
                var valuesArray = item.response.data.value;
                if (context) {
                    contentType = context.substring(context.indexOf("#") + 1, context.indexOf("("));
                }
                if (valuesArray && valuesArray.length > 0) {
                    switch (contentType) {
                        case "newsitems":
                            valuesArray.forEach(function (contentItm) {
                                searchResults.push({ Title: contentItm.Title, DetailLink: "/news/" + contentItm.Id, Content: contentItm.Summary });
                            });
                            break;
                        case "showcases":
                            valuesArray.forEach(function (contentItm) {
                                searchResults.push({ Title: contentItm.Title, DetailLink: "/showcases/" + contentItm.Id, Content: contentItm.Challenge });
                            });
                            break;
                        case "images":
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
    SearchService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__.SitefinityService }
    ]; };
    SearchService.propDecorators = {
        searchTriggered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }]
    };
    SearchService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
            providedIn: "root"
        })
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ 54795:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/settings.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SANDBOX_URL": function() { return /* binding */ SANDBOX_URL; },
/* harmony export */   "SYSTEM_SERVICE_SEGMENT": function() { return /* binding */ SYSTEM_SERVICE_SEGMENT; },
/* harmony export */   "SettingsService": function() { return /* binding */ SettingsService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 1303);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SANDBOX_URL = "sandbox_url";
var SYSTEM_SERVICE_SEGMENT = "/sf/system/";
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "systemServiceUrl", {
        get: function () {
            return this.url + SYSTEM_SERVICE_SEGMENT;
        },
        enumerable: false,
        configurable: true
    });
    SettingsService.ctorParameters = function () { return [
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_storage_service__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE,] }] }
    ]; };
    SettingsService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
            providedIn: "root"
        })
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ 74005:
/*!******************************************************!*\
  !*** ./src/app/shared/services/showcases.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showcasesDataOptions": function() { return /* binding */ showcasesDataOptions; },
/* harmony export */   "ShowcasesService": function() { return /* binding */ ShowcasesService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitefinity.service */ 92661);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var showcasesDataOptions = {
    urlName: "showcases"
};
var ShowcasesService = /** @class */ (function () {
    function ShowcasesService(sitefinity) {
        this.sitefinity = sitefinity;
    }
    ShowcasesService.prototype.getShowcases = function () {
        var showcasesReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.sitefinity.instance.data(showcasesDataOptions).get({
            query: this.sitefinity
                .query
                .select("Title", "Client", "Website", "Challenge", "Solution", "Results", "PublicationDate")
                .expand("Thumbnail", "Download")
                .order("PublicationDate desc"),
            successCb: function (data) { return showcasesReplaySubject.next(data.value); },
            failureCb: function (data) { return console.log(data); }
        });
        return showcasesReplaySubject;
    };
    ShowcasesService.prototype.getShowcaseById = function (id) {
        var showcaseReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.sitefinity.instance.data(showcasesDataOptions).getSingle({
            key: id,
            query: this.sitefinity
                .query
                .select("Title", "Client", "Website", "Challenge", "Solution", "Results", "PublicationDate")
                .expand("Thumbnail", "Download")
                .order("PublicationDate desc"),
            successCb: function (data) { return showcaseReplaySubject.next(data); },
            failureCb: function (data) { return console.log(data); }
        });
        return showcaseReplaySubject;
    };
    ShowcasesService.ctorParameters = function () { return [
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__.SitefinityService }
    ]; };
    ShowcasesService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
            providedIn: "root"
        })
    ], ShowcasesService);
    return ShowcasesService;
}());



/***/ }),

/***/ 92661:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/sitefinity.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endpoint": function() { return /* binding */ endpoint; },
/* harmony export */   "SitefinityService": function() { return /* binding */ SitefinityService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.service */ 54795);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var endpoint = "/api/default/";
var SitefinityService = /** @class */ (function () {
    function SitefinityService(sf, settings) {
        this.sf = sf;
        this.settings = settings;
    }
    Object.defineProperty(SitefinityService.prototype, "instance", {
        get: function () {
            if (!this.sitefinity) {
                this.initializeInstance();
            }
            return this.sitefinity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SitefinityService.prototype, "query", {
        get: function () {
            return this.queryInstance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SitefinityService.prototype, "token", {
        get: function () {
            return this.instance.authentication.getToken();
        },
        set: function (value) {
            this.instance.authentication.setToken(value);
        },
        enumerable: false,
        configurable: true
    });
    SitefinityService.prototype.initializeInstance = function () {
        var serviceUrl = "" + this.settings.url + endpoint;
        if (serviceUrl) {
            this.sitefinity = new this.sf({ serviceUrl: serviceUrl });
            this.queryInstance = new this.sf.Query();
        }
    };
    SitefinityService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: ["Sitefinity",] }] },
        { type: _settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService }
    ]; };
    SitefinityService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
            providedIn: "root"
        })
    ], SitefinityService);
    return SitefinityService;
}());



/***/ }),

/***/ 1303:
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCAL_STORAGE": function() { return /* binding */ LOCAL_STORAGE; },
/* harmony export */   "StorageService": function() { return /* binding */ StorageService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LOCAL_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("LocalStorage");
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
    StorageService.ctorParameters = function () { return [
        { type: Storage }
    ]; };
    StorageService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
            providedIn: "root"
        })
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ 43282:
/*!*************************************************!*\
  !*** ./src/app/shared/services/taxa.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tagsOptions": function() { return /* binding */ tagsOptions; },
/* harmony export */   "categoriesOptions": function() { return /* binding */ categoriesOptions; },
/* harmony export */   "tagsProperty": function() { return /* binding */ tagsProperty; },
/* harmony export */   "categoryProperty": function() { return /* binding */ categoryProperty; },
/* harmony export */   "TaxaService": function() { return /* binding */ TaxaService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitefinity.service */ 92661);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 13413);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var tagsOptions = {
    taxonomyId: "cb0f3a19-a211-48a7-88ec-77495c0f5374",
    taxonomyOptions: {
        urlName: "flat-taxa"
    }
};
var categoriesOptions = {
    taxonomyId: "e5cd6d69-1543-427b-ad62-688a99f5e7d4",
    taxonomyOptions: {
        urlName: "hierarchy-taxa"
    }
};
var tagsProperty = "Tags";
var categoryProperty = "Category";
var TaxaService = /** @class */ (function () {
    function TaxaService(sitefinity) {
        this.sitefinity = sitefinity;
    }
    TaxaService.prototype.getAllTaxa = function (taxonomyOptions) {
        var tagsReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.sitefinity.instance.data(taxonomyOptions.taxonomyOptions).get({
            query: this.sitefinity
                .query
                .select("Title", "Id")
                .order("Title desc")
                .where()
                .eq("TaxonomyId", taxonomyOptions.taxonomyId)
                .done(),
            successCb: function (data) { return tagsReplaySubject.next(data.value); },
            failureCb: function (data) { return console.log(data); }
        });
        return tagsReplaySubject.asObservable();
    };
    TaxaService.prototype.getTaxaForIds = function (taxonomyOptions, ids) {
        var _this = this;
        var tagsByIdReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
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
    TaxaService.ctorParameters = function () { return [
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__.SitefinityService }
    ]; };
    TaxaService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
            providedIn: "root"
        })
    ], TaxaService);
    return TaxaService;
}());



/***/ }),

/***/ 52838:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/testimonials.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testimonialDataOptions": function() { return /* binding */ testimonialDataOptions; },
/* harmony export */   "TestimonialsService": function() { return /* binding */ TestimonialsService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitefinity.service */ 92661);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images.service */ 79822);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var testimonialDataOptions = {
    urlName: "testimonials",
    providerName: "dynamicProvider5",
    cultureName: "en"
};
var TestimonialsService = /** @class */ (function () {
    function TestimonialsService(sitefinity, imageService) {
        this.sitefinity = sitefinity;
        this.imageService = imageService;
    }
    TestimonialsService.prototype.getTestimonials = function () {
        var testimonialReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
        this.sitefinity.instance.data(testimonialDataOptions).get({
            query: this.sitefinity
                .query
                .select("JobTitle", "TestimonialAuthor", "Quote", "Company", "PublicationDate")
                .expand("Photo")
                .order("PublicationDate desc"),
            successCb: function (data) { return testimonialReplaySubject.next(data.value); },
            failureCb: function (data) { return console.log(data); }
        });
        return testimonialReplaySubject.asObservable();
    };
    TestimonialsService.prototype.createTestimonial = function (testimonial) {
        var _this = this;
        var isTestimonialCreated = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
        var sortedFields = this.imageService.sortFieldValues(testimonial);
        var primitiveFields = sortedFields.primitives;
        var relationalFields = sortedFields.relational;
        this.imageService.getLibraryByTitle("Default library").subscribe(function (library) {
            var parentId = library.RootId ? library.RootId : library.Id;
            _this.imageService.uploadImage(parentId, relationalFields["Photo"]).subscribe((function (upload) {
                if (upload.success) {
                    var success = function (result) {
                        if (result.isSuccessful) {
                            isTestimonialCreated.next(true);
                        }
                        else {
                            isTestimonialCreated.next(false);
                        }
                    };
                    var failure = function () {
                        isTestimonialCreated.next(false);
                    };
                    var batch = _this.sitefinity.instance.batch(success, failure, { providerName: testimonialDataOptions.providerName, cultureName: testimonialDataOptions.cultureName });
                    var transaction = batch.beginTransaction();
                    var entitySet = "testimonials";
                    var operation = { action: "Publish" };
                    var testimonialItemId = transaction.create({
                        entitySet: entitySet,
                        data: primitiveFields
                    });
                    _this.imageService.associateRelatedImage("Photo", relationalFields["Photo"], entitySet, upload.result.Id, testimonialItemId, transaction);
                    transaction.operation({
                        entitySet: entitySet,
                        key: testimonialItemId,
                        data: operation
                    });
                    batch.endTransaction(transaction);
                    batch.execute();
                }
                else {
                    isTestimonialCreated.next(false);
                }
            }));
        });
        return isTestimonialCreated.asObservable();
    };
    TestimonialsService.ctorParameters = function () { return [
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__.SitefinityService },
        { type: _images_service__WEBPACK_IMPORTED_MODULE_1__.ImagesService }
    ]; };
    TestimonialsService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
            providedIn: "root"
        })
    ], TestimonialsService);
    return TestimonialsService;
}());



/***/ }),

/***/ 89862:
/*!************************************************!*\
  !*** ./src/app/shared/services/url.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlService": function() { return /* binding */ UrlService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common.constants */ 3580);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FORWARD_SLASH = "/";
var UrlService = /** @class */ (function () {
    function UrlService(locationStrategy, window) {
        this.locationStrategy = locationStrategy;
        this.window = window;
    }
    UrlService.prototype.getAbsoluteUrl = function (urlPath) {
        var baseUrl = this.locationStrategy.getBaseHref();
        var trimmedUrlPath = this.trimForwardSlash(urlPath);
        var result = this.window.location.origin;
        if (baseUrl !== FORWARD_SLASH) {
            result = result + baseUrl;
        }
        if (trimmedUrlPath.length === 0) {
            return result;
        }
        if (!result.endsWith(FORWARD_SLASH)) {
            result = result + FORWARD_SLASH;
        }
        result = result + trimmedUrlPath;
        return result;
    };
    UrlService.prototype.trimForwardSlash = function (path) {
        var result = path;
        while (result.startsWith(FORWARD_SLASH)) {
            result = result.substring(FORWARD_SLASH.length);
        }
        while (result.endsWith(FORWARD_SLASH)) {
            result = result.substring(0, result.length - FORWARD_SLASH.length);
        }
        return result;
    };
    UrlService.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__.PathLocationStrategy },
        { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_common_constants__WEBPACK_IMPORTED_MODULE_0__.WINDOW_TOKEN,] }] }
    ]; };
    UrlService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
            providedIn: "root"
        })
    ], UrlService);
    return UrlService;
}());



/***/ }),

/***/ 98613:
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usersDataOptions": function() { return /* binding */ usersDataOptions; },
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitefinity.service */ 92661);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 13413);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var usersDataOptions = {
    urlName: "users"
};
var UserService = /** @class */ (function () {
    function UserService(sitefinity) {
        this.sitefinity = sitefinity;
    }
    UserService.prototype.getUserInfo = function () {
        var usersReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.sitefinity.instance.data(usersDataOptions).getSingle({
            key: "current",
            query: this.sitefinity
                .query
                .select("Username", "Avatar"),
            successCb: function (data) { usersReplaySubject.next(data); },
            failureCb: function (data) { return console.log(data); }
        });
        return usersReplaySubject.asObservable();
    };
    UserService.ctorParameters = function () { return [
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_0__.SitefinityService }
    ]; };
    UserService = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
            providedIn: "root"
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ 6245:
/*!*****************************************************************!*\
  !*** ./src/app/shared/showcases/showcase/showcase.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseComponent": function() { return /* binding */ ShowcaseComponent; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_showcase_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./showcase.component.html */ 7361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_showcases_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/showcases.service */ 74005);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
        var id = this.route.snapshot.paramMap.get("id");
        if (id) {
            this.showcase = this.showcasesService.getShowcaseById(id);
        }
    };
    ShowcaseComponent.ctorParameters = function () { return [
        { type: _services_showcases_service__WEBPACK_IMPORTED_MODULE_1__.ShowcasesService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
    ]; };
    ShowcaseComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: "app-showcase",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_showcase_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], ShowcaseComponent);
    return ShowcaseComponent;
}());



/***/ }),

/***/ 29400:
/*!*********************************************************!*\
  !*** ./src/app/shared/showcases/showcases.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcasesComponent": function() { return /* binding */ ShowcasesComponent; },
/* harmony export */   "Showcase": function() { return /* binding */ Showcase; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_showcases_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./showcases.component.html */ 33783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_showcases_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/showcases.service */ 74005);
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/rx-base/rx-base.component */ 45341);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
    ShowcasesComponent.ctorParameters = function () { return [
        { type: _services_showcases_service__WEBPACK_IMPORTED_MODULE_1__.ShowcasesService }
    ]; };
    ShowcasesComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: "app-showcases",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_showcases_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], ShowcasesComponent);
    return ShowcasesComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__.RxBaseComponent));

var Showcase = /** @class */ (function () {
    function Showcase() {
    }
    return Showcase;
}());



/***/ }),

/***/ 17500:
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": function() { return /* binding */ SidebarComponent; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sidebar.component.html */ 90842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var _services_taxa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/taxa.service */ 43282);
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/rx-base/rx-base.component */ 45341);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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





var SidebarComponent = /** @class */ (function (_super) {
    __extends(SidebarComponent, _super);
    function SidebarComponent(taxaService) {
        var _this = _super.call(this) || this;
        _this.taxaService = taxaService;
        _this.tagsName = _services_taxa_service__WEBPACK_IMPORTED_MODULE_1__.tagsProperty;
        _this.categoryName = _services_taxa_service__WEBPACK_IMPORTED_MODULE_1__.categoryProperty;
        _this.taxaClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        return _this;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.tags = this.getTaxa(_services_taxa_service__WEBPACK_IMPORTED_MODULE_1__.tagsOptions, _services_taxa_service__WEBPACK_IMPORTED_MODULE_1__.tagsProperty);
        this.categories = this.getTaxa(_services_taxa_service__WEBPACK_IMPORTED_MODULE_1__.categoriesOptions, _services_taxa_service__WEBPACK_IMPORTED_MODULE_1__.categoryProperty);
    };
    SidebarComponent.prototype.onTaxaClicked = function (taxaName, taxa) {
        this.taxaClicked.emit({ taxaName: taxaName, taxa: taxa });
    };
    SidebarComponent.prototype.getTaxa = function (taxaOptions, propertyName) {
        var _this = this;
        var taxaReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1);
        this.contentItemsSubscription = this.contentItems.subscribe(function (data) {
            var itemsTaxas = [];
            if (data) {
                data.forEach(function (item) {
                    if (item[propertyName]) {
                        itemsTaxas.push.apply(itemsTaxas, item[propertyName]);
                    }
                });
                _this.taxaServiceSubscription = _this.taxaService.getTaxaForIds(taxaOptions, itemsTaxas).subscribe(function (data) { return taxaReplaySubject.next(data); });
                _this.registerSubscription(_this.taxaServiceSubscription);
            }
        });
        this.registerSubscription(this.contentItemsSubscription);
        return taxaReplaySubject.asObservable();
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _services_taxa_service__WEBPACK_IMPORTED_MODULE_1__.TaxaService }
    ]; };
    SidebarComponent.propDecorators = {
        contentItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        taxaClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
    };
    SidebarComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'app-sidebar',
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], SidebarComponent);
    return SidebarComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_2__.RxBaseComponent));



/***/ }),

/***/ 57983:
/*!***********************************************!*\
  !*** ./src/app/shared/taxa/taxa.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxaComponent": function() { return /* binding */ TaxaComponent; },
/* harmony export */   "Taxa": function() { return /* binding */ Taxa; },
/* harmony export */   "TaxaOptions": function() { return /* binding */ TaxaOptions; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_taxa_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./taxa.component.html */ 29958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TaxaComponent = /** @class */ (function () {
    function TaxaComponent() {
        this.taxaClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    TaxaComponent.prototype.handleClick = function (taxa) {
        this.taxaClicked.emit(taxa);
    };
    TaxaComponent.propDecorators = {
        taxas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
        taxaClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }]
    };
    TaxaComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
            selector: "app-taxa",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_taxa_component_html__WEBPACK_IMPORTED_MODULE_0__.default
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

/***/ 33513:
/*!************************************************************************************!*\
  !*** ./src/app/shared/testimonials/testimonial-form/testimonial-form.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialFormComponent": function() { return /* binding */ TestimonialFormComponent; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_testimonial_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./testimonial-form.component.html */ 58676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _testimonials_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../testimonials.component */ 89347);
/* harmony import */ var _services_testimonials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/testimonials.service */ 52838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TestimonialFormComponent = /** @class */ (function () {
    function TestimonialFormComponent(testimonialsService, router) {
        this.testimonialsService = testimonialsService;
        this.router = router;
        this.model = new _testimonials_component__WEBPACK_IMPORTED_MODULE_1__.Testimonial();
        this.createdTestimonialMessage = null;
    }
    TestimonialFormComponent.prototype.submitTestimonial = function (testimonialForm) {
        var _this = this;
        if (testimonialForm.valid && this.isPhotoSelected) {
            this.creatingTestimonial = true;
            this.testimonialsService.createTestimonial(this.model).subscribe(function (isCreated) {
                _this.creatingTestimonial = false;
                if (isCreated) {
                    _this.createdTestimonialMessage = "Thank you for your testimonial!";
                    _this.model = new _testimonials_component__WEBPACK_IMPORTED_MODULE_1__.Testimonial();
                }
                else {
                    _this.createdTestimonialMessage = "Whoops! Something went wrong";
                }
            });
        }
    };
    TestimonialFormComponent.prototype.onImageChange = function (event) {
        var _this = this;
        var image = event.target.files[0];
        var fr = new FileReader();
        fr.onload = function () {
            var img = new Image();
            img.onload = function () {
                _this.model.Photo = { File: image, Width: img.width, Height: img.height };
            };
            img.src = fr.result.toString();
        };
        fr.readAsDataURL(image);
        this.isPhotoSelected = true;
    };
    TestimonialFormComponent.ctorParameters = function () { return [
        { type: _services_testimonials_service__WEBPACK_IMPORTED_MODULE_2__.TestimonialsService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
    ]; };
    TestimonialFormComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: "app-testimonial-form",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_testimonial_form_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], TestimonialFormComponent);
    return TestimonialFormComponent;
}());



/***/ }),

/***/ 89347:
/*!***************************************************************!*\
  !*** ./src/app/shared/testimonials/testimonials.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialsComponent": function() { return /* binding */ TestimonialsComponent; },
/* harmony export */   "TestimonialImage": function() { return /* binding */ TestimonialImage; },
/* harmony export */   "Testimonial": function() { return /* binding */ Testimonial; }
/* harmony export */ });
/* harmony import */ var _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./testimonials.component.html */ 13093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_testimonials_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/testimonials.service */ 52838);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 510);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app-routing/route-paths */ 18270);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent(testimonialsService, router) {
        this.testimonialsService = testimonialsService;
        this.router = router;
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
        this.getTestimonials();
    };
    TestimonialsComponent.prototype.openTestimonialForm = function () {
        this.router.navigate([_app_routing_route_paths__WEBPACK_IMPORTED_MODULE_3__.ROUTE_PATHS.SUBMIT_TESTIMONIAL]);
    };
    TestimonialsComponent.prototype.getTestimonials = function () {
        this.testimonials = this.testimonialsService.getTestimonials();
    };
    TestimonialsComponent.ctorParameters = function () { return [
        { type: _services_testimonials_service__WEBPACK_IMPORTED_MODULE_1__.TestimonialsService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
    ]; };
    TestimonialsComponent = __decorate([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: "app-testimonials",
            template: _D_RepositoriesReal_QuantumHeadlessAngularApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselConfig, useValue: { interval: 8000, noPause: true, showIndicators: true } }
            ]
        })
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());

var TestimonialImage = /** @class */ (function () {
    function TestimonialImage() {
    }
    return TestimonialImage;
}());

var Testimonial = /** @class */ (function () {
    function Testimonial() {
    }
    return Testimonial;
}());



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
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
// import "zone.js/plugins/zone-error";  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 61882);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ 42647:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout-renderer/components/content-block/content-block.component.html ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [attr.class]=\"Model.Properties.WrapperCssClass\" [innerHTML]=\"Model.Properties.Content\"></div>\r\n");

/***/ }),

/***/ 39388:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout-renderer/components/layout/layout.component.html ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngTemplateOutlet=\"itemTemplateName ? itemTemplateName : defaultTemplate; context: { columns: columns, isContainer: isContainer }\">\r\n</ng-container>\r\n\r\n<ng-template #defaultTemplate let-widget>\r\n    <div>Unknown Template</div>\r\n</ng-template>\r\n\r\n<ng-template #columnsTemplate>\r\n  <div [class]=\"rowCss\" *ngIf=\"!isContainer; else columnChildren\">\r\n    <ng-container *ngTemplateOutlet=\"columnChildren;\"></ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #columnChildren>\r\n  <div *ngFor=\"let col of columns\" [class]=\"col.css\">\r\n    <ng-template *ngFor=\"let child of col.children\" [componentWrapper]=\"child\" [culture]=\"Model.Culture\" [siteId]=\"Model.SiteId\">\r\n    </ng-template>\r\n  </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ 23205:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout-renderer/components/root.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <ng-container *ngFor=\"let data of content\" [componentWrapper]=\"data\" [culture]=\"culture\" [siteId]=\"siteId\">\r\n    </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ 8432:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/comments/comments.component.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sf-Comments\">\r\n  <div *ngIf=\"comments\" class=\"row sf-Comments-header\">\r\n    <div class=\"col-md-7\">\r\n      <h3>\r\n        <span class=\"comments-total-count\">{{commentsCount}} </span>\r\n        <span class=\"comments-header\">{{commentsCount === 1 ? 'comment' : 'comments'}}</span>\r\n      </h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"media-list sf-Comments-list\">\r\n    <div class=\"media sf-media\" *ngFor=\"let comment of comments\">\r\n      <div class=\"media-left sf-img-thmb\"><img [src]=\"comment.ProfilePictureUrl\" alt=\"author\"></div>\r\n      <div class=\"media-body sf-media-body\">\r\n        <span class=\"text-muted sf-Comments-list-author\">{{comment.Name}}</span>\r\n\r\n        <span class=\"text-muted pl-05\">{{comment.DateCreated | date:'medium'}}</span>\r\n        <p>{{comment.Message}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"showCommentsForm\" class=\"media sf-media\">\r\n    <div *ngIf=\"model.ProfilePictureUrl\" class=\"media-left sf-img-thmb\">\r\n      <img [src]=\"model.ProfilePictureUrl\" alt=\"\" width=\"40\" height=\"40\">\r\n    </div>\r\n    <div class=\"media-body sf-media-body\">\r\n      <form #f=\"ngForm\" (ngSubmit)=\"submitComment(f)\" class=\"form-group\">\r\n        <div class=\"form-group\">\r\n          <label class=\"sr-only\">Leave a comment</label>\r\n          <textarea [(ngModel)]=\"model.Message\" name=\"message\" class=\"form-control\" placeholder=\"Leave a comment\"></textarea>\r\n        </div>\r\n        <div>\r\n          <button class=\"btn btn-primary\">Submit</button>\r\n          <div *ngIf=\"creatingComment\" class=\"sf-loading mt-1\"><span></span></div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!showCommentsForm\" class=\"alert alert-info\">Please <a (click)=\"login()\">log in</a> to comment</div>\r\n</div>\r\n");

/***/ }),

/***/ 21135:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/config/config.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<form #f=\"ngForm\" (ngSubmit)=\"onSave()\">\r\n  <div class=\"container col-md-offset-3 col-md-6\">\r\n    <h3>Enter url to a Sitefinity hosted trial instance below:</h3>\r\n    <div class=\"form-group mt-3\">\r\n      <label for=\"configInput\">Sandbox Url:</label>\r\n      <input class=\"form-control\"\r\n             name=\"configInput\"\r\n             id=\"configInput\"\r\n             type=\"text\"\r\n             ngDefaultControl\r\n             required\r\n             [(ngModel)]=\"currentUrl\">\r\n    </div>\r\n    <div>\r\n      <button class=\"btn btn-primary btn-quantum-homepage\" [disabled]=\"!f.valid\" type=\"submit\">Save</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n");

/***/ }),

/***/ 56512:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/layout/layout.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <div class=\"github-banner container-fluid\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n          Check out the new <a class=\"bold github-link\" target=\"_blank\" href=\"https://github.com/Sitefinity/QuantumHeadlessAngularApp/tree/peleva/edit\"> Sitefinity Headless Sample in GitHub</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-3 col-xs-2\">\r\n            <div class=\"sf-Long-text\">\r\n              <p>\r\n                <a routerLink=\"/news\">\r\n                  <img *ngIf=\"logoImage | async\" style=\"margin-top: 20px;\" [alt]=\"(logoImage | async).AlternativeText\" [src]=\"(logoImage | async).Url\" [title]=\"(logoImage | async).AlternativeText\">\r\n                </a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-9 col-xs-10\">\r\n            <nav class=\"navbar navbar-default  blue-horizontal\">\r\n              <div class=\"container-fluid\">\r\n                <div class=\"collapse navbar-collapse\">\r\n                  <ul class=\"nav navbar-nav\">\r\n                    <li class=\"dropdown\"><a class=\"upper-nav dropdown-toggle\" routerLink=\"/news\" routerLinkActive=\"active\">News</a></li>\r\n                    <li class=\"dropdown\"><a class=\"upper-nav dropdown-toggle\" routerLink=\"/showcases\" routerLinkActive=\"active\">Showcases</a></li>\r\n                    <li class=\"dropdown\"><a class=\"upper-nav dropdown-toggle\" routerLink=\"/landing-page1\" routerLinkActive=\"active\">Landing page</a></li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 header-right-group\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <app-search></app-search>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n<main class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"homepage-card-banner\" style=\"width: 1903px; height: 429px\">\r\n      <img width=\"1903\" height=\"429\" *ngIf=\"bannerImage | async\" [alt]=\"(bannerImage | async).AlternativeText\" [src]=\"(bannerImage | async).Url\" [title]=\"(bannerImage | async).AlternativeText\" class=\"splash\">\r\n      <div class=\"container\">\r\n        <div class=\"homepage-card-banner-text\">\r\n          <h2 *ngIf=\"title | async; let title\">{{title}}</h2>\r\n          <p *ngIf=\"(title | async) === 'Showcases'\">We create hard-working web systems that put you in control. Fully integrated, and using the very latest tech.</p>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n");

/***/ }),

/***/ 39544:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/news/newsitem/newsitem.component.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"newsItem\" class=\"row\">\r\n  <div class=\"container\">\r\n    <ng-container>\r\n      <h2>{{newsItem.Title}}</h2>\r\n      <div class=\"text-muted\">{{newsItem.DateCreated | date:\"medium\"}} by {{newsItem.Author}}</div>\r\n      <div class=\"news_image news_image_detail\">\r\n        <img style=\"display: block; min-height: 230px;\" *ngIf=\"newsItem.Thumbnail\" [src]=\"newsItem.Thumbnail.Url\" [alt]=\"newsItem.Thumbnail.AlternativeText\"/>\r\n      </div>\r\n      <div class=\"news_summary\" [innerHtml]=\"newsItem.Summary\">\r\n      </div>\r\n      <div [innerHtml]=\"newsItemContent\">\r\n      </div>\r\n    </ng-container>\r\n    <app-comments [commentableItemId]=\"newsItem.Id\" ></app-comments>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 26983:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/news/newsitems/newsitems.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n      <div *ngIf=\"newsItems && newsItems.length>0\">\r\n        <ng-container *ngFor=\"let newsItem of newsItems; let i = index\">\r\n          <ul *ngIf=\"i % 3 == 0\" class=\"list-unstyled row news-list-page\">\r\n            <li class=\"col-md-4\">\r\n              <ng-container\r\n                *ngTemplateOutlet=\"newsItemTemplate; context: { item: newsItem}\">\r\n              </ng-container>\r\n            </li>\r\n            <li class=\"col-md-4\" *ngIf=\"i + 1 < newsItems.length\">\r\n              <ng-container\r\n                *ngTemplateOutlet=\"newsItemTemplate; context: { item: newsItems[i + 1]}\">\r\n              </ng-container>\r\n            </li>\r\n            <li class=\"col-md-4\" *ngIf=\"i + 2 < newsItems.length\">\r\n              <ng-container\r\n                *ngTemplateOutlet=\"newsItemTemplate; context: { item: newsItems[i + 2]}\">\r\n              </ng-container>\r\n            </li>\r\n          </ul>\r\n        </ng-container>\r\n\r\n        <div *ngIf=\"shouldShowLoadMore\" class=\"load-more text-center u-mt4\">\r\n          <a (click)=\"LoadMore()\" style=\"cursor: pointer;\">\r\n            Load 10 more news\r\n            <br />\r\n            <span class=\"glyphicon glyphicon-chevron-down glyph-bordered\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-sidebar [contentItems]=\"allNewsItems\" (taxaClicked)=\"getNewsItemsByTaxa($event)\"></app-sidebar>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #newsItemTemplate let-newsItem=\"item\">\r\n  <div [ngClass]=\"{'featured_news_recent': newsItem.Featured}\" class=\"col-xs-12 news_item_recent news_text homepage_news\">\r\n    <a routerLink=\"/news/{{newsItem.Id}}\">\r\n      <img class=\"img-circle\" *ngIf=\"newsItem.Thumbnail && newsItem.Thumbnail[0]\" [src]=\"newsItem.Thumbnail[0].Url\" [alt]=\"newsItem.Thumbnail[0].AlternativeText\"/>\r\n    </a>\r\n    <div class=\"homepage_news_text\">\r\n      <h4>\r\n        <a routerLink=\"/news/{{newsItem.Id}}\">\r\n          {{newsItem.Title}}\r\n        </a>\r\n      </h4>\r\n      <span class=\"text-muted\">\r\n        {{newsItem.DateCreated | date: \"medium\"}} <br>\r\n         by\r\n        {{newsItem.Author}}\r\n    </span>\r\n      <p [innerHtml]=\"newsItem.Summary\">\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"newsItem.Featured\" class=\"ribbon\"><span>FEATURED</span></div>\r\n</ng-template>\r\n");

/***/ }),

/***/ 90172:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/not-found/not-found.component.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>\r\n      The page you're looking for doesn't exist\r\n    </h2>\r\n    <div class=\"form-group\">\r\n      <a routerLink=\"/news\" class=\"btn btn-primary btn-quantum-homepage\">Go home</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 44596:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/search/search-result/search-result.component.html ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"row--border\">\r\n      <ng-container *ngIf=\"(searchResults | async) && (searchResults | async).length > 0\">\r\n        <div class=\"mt-3 col-md-12\">\r\n          <h3>{{(searchResults | async).length}} results for <em>{{searchTerm}}</em></h3>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"sf-search-results media-list u-mb4 mt-3\">\r\n            <div *ngFor=\"let result of (searchResults | async)\" class=\"media sf-media u-mb3\">\r\n              <div *ngIf=\"result.ImageUrl\" class=\"media-left sf-img-thmb\">\r\n                <a [attr.href]=\"result.ImageUrl\"><img [src]=\"result.ImageUrl\" [alt]=\"result.Title\"/></a>\r\n              </div>\r\n              <div class=\"media-body sf-media-body\">\r\n                <h3>\r\n                  <a *ngIf=\"result.DetailLink\" [routerLink]=\"result.DetailLink\" style=\"cursor: pointer;\">{{result.Title}}</a>\r\n                  <a *ngIf=\"result.ImageUrl\" [attr.href]=\"result.ImageUrl\" style=\"cursor: pointer;\">{{result.Title}}</a>\r\n                </h3>\r\n                <p *ngIf=\"result.Content\" [innerHtml]=\"result.Content\"></p>\r\n                <a *ngIf=\"result.DetailLink\" [routerLink]=\"result.DetailLink\" style=\"cursor: pointer;\">{{settings.url + result.DetailLink}}</a>\r\n                <a *ngIf=\"result.ImageUrl\" [attr.href]=\"result.ImageUrl\" style=\"cursor: pointer;\">{{result.ImageUrl}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"(searchResults | async) && (searchResults | async).length === 0\">\r\n        <div class=\"mt-3 col-md-12\">\r\n            <h3>No search results</h3>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 51554:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/search/search.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-inline\">\r\n  <div class=\"form-group\">\r\n    <div [ngClass]=\"{'open': open }\" class=\"dropdown\">\r\n      <button (click)=\"open=!open\" type=\"button\" class=\"dropdown-toggle search-button-icon\">\r\n        <svg class=\"svg-inline--fa fa-search fa-w-16\" aria-hidden=\"true\" data-prefix=\"fa\" data-icon=\"search\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" data-fa-i2svg=\"\"><path fill=\"currentColor\" d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\"></path></svg>\r\n      </button>\r\n      <div class=\"dropdown-menu mega-menu search-dropdown-menu\">\r\n        <input #input (blur)=\"open = false\" (focus)=\"input.value = null;\" (keydown.enter)='onEnter($event); open = false;' type=\"search\" placeholder=\"Search\" class=\"form-control ui-autocomplete-input\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 7361:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/showcases/showcase/showcase.component.html ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"(showcase | async) as showcase\" class=\"row showcase_row\">\r\n  <div class=\"container\">\r\n    <h2>\r\n      {{showcase.Title}}\r\n    </h2>\r\n    <div class=\"col-md-4 showcase_image pr-2\">\r\n      <div *ngIf=\"showcase.Thumbnail\">\r\n        <img [src]=\"showcase.Thumbnail.Url\" [alt]=\"showcase.Thumbnail.AlternativeText\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-8 showcase_summary\">\r\n      <div class=\"row showcase-info\">\r\n        <div class=\"col-md-6 no-padding\">\r\n          <div>\r\n            <strong>Client</strong>\r\n\r\n            <p>{{showcase.Client}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div>\r\n            <strong>Website</strong>\r\n\r\n            <p><a [href]=\"showcase.Website\" target=\"_blank\">{{showcase.Website}}</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"showcase-info\">\r\n            <strong>Challenge</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Challenge\"></p>\r\n          </div>\r\n\r\n          <div class=\"showcase-info\">\r\n            <strong> Solution</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Solution\"></p>\r\n          </div>\r\n\r\n          <div class=\"showcase-info showcase-info-last\">\r\n            <strong>Results</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Results\"></p>\r\n          </div>\r\n\r\n          <div *ngIf=\"showcase.Download\">\r\n            <a class=\"btn btn-primary btn-quantum-homepage mt-3 ml-2\" [href]=\"showcase.Download.Url\">Read the story</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 33783:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/showcases/showcases.component.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row mb-5\">\r\n  <div class=\"container\">\r\n    <app-testimonials></app-testimonials>\r\n  </div>\r\n</div>\r\n<div [ngClass]=\"{'showcase': i % 2 === 0}\" *ngFor=\"let showcase of (showcases | async); index as i\" class=\"row showcase_row\">\r\n  <div class=\"container\">\r\n    <h2>\r\n    {{showcase.Title}}\r\n    </h2>\r\n    <div class=\"col-md-4 showcase_image pr-2\">\r\n      <div *ngIf=\"showcase.Thumbnail\">\r\n        <img [src]=\"showcase.Thumbnail.Url\" [alt]=\"showcase.Thumbnail.AlternativeText\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-8 showcase_summary\">\r\n      <div class=\"row showcase-info\">\r\n        <div class=\"col-md-6 no-padding\">\r\n          <div>\r\n            <strong>Client</strong>\r\n\r\n            <p>{{showcase.Client}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div>\r\n            <strong>Website</strong>\r\n\r\n            <p><a [href]=\"showcase.Website\" target=\"_blank\">{{showcase.Website}}</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"showcase-info\">\r\n            <strong>Challenge</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Challenge\"></p>\r\n          </div>\r\n\r\n          <div class=\"showcase-info\">\r\n            <strong> Solution</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Solution\"></p>\r\n          </div>\r\n\r\n          <div class=\"showcase-info showcase-info-last\">\r\n            <strong>Results</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Results\"></p>\r\n          </div>\r\n\r\n          <div *ngIf=\"showcase.Download\">\r\n            <a class=\"btn btn-primary btn-quantum-homepage mt-3 ml-2\" [href]=\"showcase.Download.Url\">Read the story</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 90842:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/sidebar/sidebar.component.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"(categories | async) && (tags | async)\" class=\"col-md-3 gray_column\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"sf-Long-text\">\r\n        <h5 class=\"text-align-left\">Categories</h5>\r\n      </div>\r\n      <app-taxa classes=\"list-unstyled categories-list\" [taxas]=\"categories | async\" (taxaClicked)=\"onTaxaClicked(categoryName, $event)\"></app-taxa>\r\n      <div class=\"sf-Long-text\">\r\n        <h5 class=\"text-align-left\">Tags</h5>\r\n      </div>\r\n      <app-taxa classes=\"categories-list list-unstyled\" [taxas]=\"tags | async\" (taxaClicked)=\"onTaxaClicked(tagsName, $event)\"></app-taxa>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 29958:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/taxa/taxa.component.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul [attr.class]=\"classes\">\n  <li *ngFor=\"let taxa of taxas\">\n    <a (click)=\"handleClick(taxa.Id)\">{{taxa.Title}}</a>\n    <span *ngIf=\"taxa.Count\" class=\"text-muted\">\n    ({{taxa.Count}})\n  </span>\n  </li>\n</ul>\n\n");

/***/ }),

/***/ 58676:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/testimonials/testimonial-form/testimonial-form.component.html ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-small container mt-6\">\r\n  <form #f=\"ngForm\" (ngSubmit)=\"submitTestimonial(f)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"Author\">Author:</label>\r\n      <input\r\n        [(ngModel)]=\"model.TestimonialAuthor\"\r\n        class=\"form-control\"\r\n        required\r\n        id=\"Author\"\r\n        type=\"text\"\r\n        name=\"Author\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"JobTitle\">Job Title:</label>\r\n      <input\r\n        class=\"form-control\"\r\n        [(ngModel)]=\"model.JobTitle\"\r\n        id=\"JobTitle\"\r\n        name=\"JobTitle\"\r\n        type=\"text\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"Company\">Company:</label>\r\n      <input\r\n        [(ngModel)]=\"model.Company\"\r\n        class=\"form-control\"\r\n        id=\"Company\"\r\n        name=\"Company\"\r\n        type=\"text\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"Company\">Photo:</label>\r\n      <input\r\n        required\r\n        (change)=\"onImageChange($event)\"\r\n        id=\"Photo\"\r\n        name=\"Photo\"\r\n        type=\"file\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"Quote\">Quote:</label>\r\n      <textarea\r\n        [(ngModel)]=\"model.Quote\"\r\n        class=\"form-control\"\r\n        required\r\n        id=\"Quote\"\r\n        name=\"Quote\"></textarea>\r\n    </div>\r\n    <button [disabled]=\"f.invalid || !isPhotoSelected\" type=\"submit\" class=\"btn btn-primary btn-quantum-homepage\">Submit</button>\r\n    <div *ngIf=\"creatingTestimonial\" class=\"sf-loading mt-1\"><span></span></div>\r\n  </form>\r\n  <div class=\"alert alert-info mt-3\" *ngIf=\"createdTestimonialMessage\">\r\n    {{createdTestimonialMessage}}\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ 13093:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/testimonials/testimonials.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel *ngIf=\"testimonials | async\">\r\n  <slide *ngFor=\"let testimonial of (testimonials | async)\">\r\n    <div class=\"col-md-2 testimonial-quote-icon\">\r\n      <img src=\"assets/images/quote-image.png\" alt=\"quote-image\">\r\n    </div>\r\n    <div class=\"col-md-10 testimonial-quote\">\r\n      <h3>{{testimonial.Quote}}</h3>\r\n      <div class=\"testimonial-image\">\r\n        <div *ngIf=\"testimonial.Photo && testimonial.Photo[0]\" class=\"col-md-2\">\r\n          <img [src]=\"testimonial.Photo[0].Url\" [alt]=\"testimonial.Photo[0].AlternativeText\">\r\n        </div>\r\n        <div>\r\n          <strong>{{testimonial.TestimonialAuthor}}</strong>\r\n          <br>\r\n          <span>{{testimonial.JobTitle}},</span>\r\n          <span>{{testimonial.Company}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n<div class=\"center-text form-group\">\r\n  <button class=\"btn btn-primary btn-quantum-homepage\" (click)=\"openTestimonialForm()\" type=\"button\">Submit a testimonial</button>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ 83707:
/*!******************************************************************************************!*\
  !*** ./src/app/layout-renderer/components/landing-page-styles/quantum-landing-page.scss ***!
  \******************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "@charset \"UTF-8\";\n/*!\n * Bootstrap Reboot v4.6.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n}\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\ndt {\n  font-weight: 700;\n}\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\nblockquote {\n  margin: 0 0 1rem;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n}\na:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\na:not([href]):not([class]) {\n  color: inherit;\n  text-decoration: none;\n}\na:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em;\n}\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\nfigure {\n  margin: 0 0 1rem;\n}\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n}\ntable {\n  border-collapse: collapse;\n}\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\nbutton {\n  border-radius: 0;\n}\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nbutton,\ninput {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\n[role=button] {\n  cursor: pointer;\n}\nselect {\n  word-wrap: normal;\n}\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\nbutton:not(:disabled),\n[type=button]:not(:disabled),\n[type=reset]:not(:disabled),\n[type=submit]:not(:disabled) {\n  cursor: pointer;\n}\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ninput[type=radio],\ninput[type=checkbox] {\n  box-sizing: border-box;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\nprogress {\n  vertical-align: baseline;\n}\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\noutput {\n  display: inline-block;\n}\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\ntemplate {\n  display: none;\n}\n[hidden] {\n  display: none !important;\n}\n.align-baseline {\n  vertical-align: baseline !important;\n}\n.align-top {\n  vertical-align: top !important;\n}\n.align-middle {\n  vertical-align: middle !important;\n}\n.align-bottom {\n  vertical-align: bottom !important;\n}\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n.align-text-top {\n  vertical-align: text-top !important;\n}\n.bg-primary {\n  background-color: #007bff !important;\n}\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #0062cc !important;\n}\n.bg-secondary {\n  background-color: #6c757d !important;\n}\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important;\n}\n.bg-success {\n  background-color: #28a745 !important;\n}\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #1e7e34 !important;\n}\n.bg-info {\n  background-color: #17a2b8 !important;\n}\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important;\n}\n.bg-warning {\n  background-color: #ffc107 !important;\n}\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #d39e00 !important;\n}\n.bg-danger {\n  background-color: #dc3545 !important;\n}\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #bd2130 !important;\n}\n.bg-light {\n  background-color: #f8f9fa !important;\n}\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important;\n}\n.bg-dark {\n  background-color: #343a40 !important;\n}\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important;\n}\n.bg-white {\n  background-color: #fff !important;\n}\n.bg-transparent {\n  background-color: transparent !important;\n}\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n.border-right {\n  border-right: 1px solid #dee2e6 !important;\n}\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n.border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n.border-0 {\n  border: 0 !important;\n}\n.border-top-0 {\n  border-top: 0 !important;\n}\n.border-right-0 {\n  border-right: 0 !important;\n}\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n.border-left-0 {\n  border-left: 0 !important;\n}\n.border-primary {\n  border-color: #007bff !important;\n}\n.border-secondary {\n  border-color: #6c757d !important;\n}\n.border-success {\n  border-color: #28a745 !important;\n}\n.border-info {\n  border-color: #17a2b8 !important;\n}\n.border-warning {\n  border-color: #ffc107 !important;\n}\n.border-danger {\n  border-color: #dc3545 !important;\n}\n.border-light {\n  border-color: #f8f9fa !important;\n}\n.border-dark {\n  border-color: #343a40 !important;\n}\n.border-white {\n  border-color: #fff !important;\n}\n.rounded-sm {\n  border-radius: 0.2rem !important;\n}\n.rounded {\n  border-radius: 0.25rem !important;\n}\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-lg {\n  border-radius: 0.3rem !important;\n}\n.rounded-circle {\n  border-radius: 50% !important;\n}\n.rounded-pill {\n  border-radius: 50rem !important;\n}\n.rounded-0 {\n  border-radius: 0 !important;\n}\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.d-none {\n  display: none !important;\n}\n.d-inline {\n  display: inline !important;\n}\n.d-inline-block {\n  display: inline-block !important;\n}\n.d-block {\n  display: block !important;\n}\n.d-table {\n  display: table !important;\n}\n.d-table-row {\n  display: table-row !important;\n}\n.d-table-cell {\n  display: table-cell !important;\n}\n.d-flex {\n  display: flex !important;\n}\n.d-inline-flex {\n  display: inline-flex !important;\n}\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important;\n  }\n\n  .d-sm-inline {\n    display: inline !important;\n  }\n\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-sm-block {\n    display: block !important;\n  }\n\n  .d-sm-table {\n    display: table !important;\n  }\n\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-sm-flex {\n    display: flex !important;\n  }\n\n  .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important;\n  }\n\n  .d-md-inline {\n    display: inline !important;\n  }\n\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-md-block {\n    display: block !important;\n  }\n\n  .d-md-table {\n    display: table !important;\n  }\n\n  .d-md-table-row {\n    display: table-row !important;\n  }\n\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-md-flex {\n    display: flex !important;\n  }\n\n  .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important;\n  }\n\n  .d-lg-inline {\n    display: inline !important;\n  }\n\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-lg-block {\n    display: block !important;\n  }\n\n  .d-lg-table {\n    display: table !important;\n  }\n\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-lg-flex {\n    display: flex !important;\n  }\n\n  .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 1280px) {\n  .d-xl-none {\n    display: none !important;\n  }\n\n  .d-xl-inline {\n    display: inline !important;\n  }\n\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-xl-block {\n    display: block !important;\n  }\n\n  .d-xl-table {\n    display: table !important;\n  }\n\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-xl-flex {\n    display: flex !important;\n  }\n\n  .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media print {\n  .d-print-none {\n    display: none !important;\n  }\n\n  .d-print-inline {\n    display: inline !important;\n  }\n\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-print-block {\n    display: block !important;\n  }\n\n  .d-print-table {\n    display: table !important;\n  }\n\n  .d-print-table-row {\n    display: table-row !important;\n  }\n\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-print-flex {\n    display: flex !important;\n  }\n\n  .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive::before {\n  display: block;\n  content: \"\";\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-21by9::before {\n  padding-top: 42.8571428571%;\n}\n.embed-responsive-16by9::before {\n  padding-top: 56.25%;\n}\n.embed-responsive-4by3::before {\n  padding-top: 75%;\n}\n.embed-responsive-1by1::before {\n  padding-top: 100%;\n}\n.flex-row {\n  flex-direction: row !important;\n}\n.flex-column {\n  flex-direction: column !important;\n}\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n.justify-content-center {\n  justify-content: center !important;\n}\n.justify-content-between {\n  justify-content: space-between !important;\n}\n.justify-content-around {\n  justify-content: space-around !important;\n}\n.align-items-start {\n  align-items: flex-start !important;\n}\n.align-items-end {\n  align-items: flex-end !important;\n}\n.align-items-center {\n  align-items: center !important;\n}\n.align-items-baseline {\n  align-items: baseline !important;\n}\n.align-items-stretch {\n  align-items: stretch !important;\n}\n.align-content-start {\n  align-content: flex-start !important;\n}\n.align-content-end {\n  align-content: flex-end !important;\n}\n.align-content-center {\n  align-content: center !important;\n}\n.align-content-between {\n  align-content: space-between !important;\n}\n.align-content-around {\n  align-content: space-around !important;\n}\n.align-content-stretch {\n  align-content: stretch !important;\n}\n.align-self-auto {\n  align-self: auto !important;\n}\n.align-self-start {\n  align-self: flex-start !important;\n}\n.align-self-end {\n  align-self: flex-end !important;\n}\n.align-self-center {\n  align-self: center !important;\n}\n.align-self-baseline {\n  align-self: baseline !important;\n}\n.align-self-stretch {\n  align-self: stretch !important;\n}\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important;\n  }\n\n  .flex-sm-column {\n    flex-direction: column !important;\n  }\n\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-sm-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-sm-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-sm-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-sm-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-sm-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-sm-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-sm-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-sm-center {\n    align-items: center !important;\n  }\n\n  .align-items-sm-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-sm-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-sm-center {\n    align-content: center !important;\n  }\n\n  .align-content-sm-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-sm-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-sm-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-sm-center {\n    align-self: center !important;\n  }\n\n  .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important;\n  }\n\n  .flex-md-column {\n    flex-direction: column !important;\n  }\n\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-md-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-md-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-md-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-md-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-md-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-md-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-md-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-md-center {\n    align-items: center !important;\n  }\n\n  .align-items-md-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-md-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-md-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-md-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-md-center {\n    align-content: center !important;\n  }\n\n  .align-content-md-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-md-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-md-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-md-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-md-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-md-center {\n    align-self: center !important;\n  }\n\n  .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important;\n  }\n\n  .flex-lg-column {\n    flex-direction: column !important;\n  }\n\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-lg-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-lg-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-lg-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-lg-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-lg-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-lg-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-lg-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-lg-center {\n    align-items: center !important;\n  }\n\n  .align-items-lg-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-lg-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-lg-center {\n    align-content: center !important;\n  }\n\n  .align-content-lg-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-lg-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-lg-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-lg-center {\n    align-self: center !important;\n  }\n\n  .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 1280px) {\n  .flex-xl-row {\n    flex-direction: row !important;\n  }\n\n  .flex-xl-column {\n    flex-direction: column !important;\n  }\n\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-xl-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-xl-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-xl-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-xl-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-xl-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-xl-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-xl-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-xl-center {\n    align-items: center !important;\n  }\n\n  .align-items-xl-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-xl-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-xl-center {\n    align-content: center !important;\n  }\n\n  .align-content-xl-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-xl-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-xl-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-xl-center {\n    align-self: center !important;\n  }\n\n  .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n}\n.float-left {\n  float: left !important;\n}\n.float-right {\n  float: right !important;\n}\n.float-none {\n  float: none !important;\n}\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important;\n  }\n\n  .float-sm-right {\n    float: right !important;\n  }\n\n  .float-sm-none {\n    float: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important;\n  }\n\n  .float-md-right {\n    float: right !important;\n  }\n\n  .float-md-none {\n    float: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important;\n  }\n\n  .float-lg-right {\n    float: right !important;\n  }\n\n  .float-lg-none {\n    float: none !important;\n  }\n}\n@media (min-width: 1280px) {\n  .float-xl-left {\n    float: left !important;\n  }\n\n  .float-xl-right {\n    float: right !important;\n  }\n\n  .float-xl-none {\n    float: none !important;\n  }\n}\n.user-select-all {\n  -webkit-user-select: all !important;\n     -moz-user-select: all !important;\n      -ms-user-select: all !important;\n          user-select: all !important;\n}\n.user-select-auto {\n  -webkit-user-select: auto !important;\n     -moz-user-select: auto !important;\n      -ms-user-select: auto !important;\n          user-select: auto !important;\n}\n.user-select-none {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n.overflow-auto {\n  overflow: auto !important;\n}\n.overflow-hidden {\n  overflow: hidden !important;\n}\n.position-static {\n  position: static !important;\n}\n.position-relative {\n  position: relative !important;\n}\n.position-absolute {\n  position: absolute !important;\n}\n.position-fixed {\n  position: fixed !important;\n}\n.position-sticky {\n  position: sticky !important;\n}\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n@supports (position: sticky) {\n  .sticky-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n.shadow-none {\n  box-shadow: none !important;\n}\n.w-25 {\n  width: 25% !important;\n}\n.w-50 {\n  width: 50% !important;\n}\n.w-75 {\n  width: 75% !important;\n}\n.w-100 {\n  width: 100% !important;\n}\n.w-auto {\n  width: auto !important;\n}\n.h-25 {\n  height: 25% !important;\n}\n.h-50 {\n  height: 50% !important;\n}\n.h-75 {\n  height: 75% !important;\n}\n.h-100 {\n  height: 100% !important;\n}\n.h-auto {\n  height: auto !important;\n}\n.mw-100 {\n  max-width: 100% !important;\n}\n.mh-100 {\n  max-height: 100% !important;\n}\n.min-vw-100 {\n  min-width: 100vw !important;\n}\n.min-vh-100 {\n  min-height: 100vh !important;\n}\n.vw-100 {\n  width: 100vw !important;\n}\n.vh-100 {\n  height: 100vh !important;\n}\n.m-0 {\n  margin: 0 !important;\n}\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n.m-1 {\n  margin: 0.25rem !important;\n}\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n.m-2 {\n  margin: 0.5rem !important;\n}\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n.m-3 {\n  margin: 1rem !important;\n}\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n.m-4 {\n  margin: 1.5rem !important;\n}\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n.m-5 {\n  margin: 3rem !important;\n}\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n.p-0 {\n  padding: 0 !important;\n}\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n.p-1 {\n  padding: 0.25rem !important;\n}\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n.p-2 {\n  padding: 0.5rem !important;\n}\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n.p-3 {\n  padding: 1rem !important;\n}\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n.p-4 {\n  padding: 1.5rem !important;\n}\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n.p-5 {\n  padding: 3rem !important;\n}\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n.m-n1 {\n  margin: -0.25rem !important;\n}\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important;\n}\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important;\n}\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important;\n}\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important;\n}\n.m-n2 {\n  margin: -0.5rem !important;\n}\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important;\n}\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important;\n}\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important;\n}\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important;\n}\n.m-n3 {\n  margin: -1rem !important;\n}\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important;\n}\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important;\n}\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important;\n}\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important;\n}\n.m-n4 {\n  margin: -1.5rem !important;\n}\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important;\n}\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important;\n}\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important;\n}\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important;\n}\n.m-n5 {\n  margin: -3rem !important;\n}\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important;\n}\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important;\n}\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important;\n}\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important;\n}\n.m-auto {\n  margin: auto !important;\n}\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n\n  .mt-sm-0,\n.my-sm-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-sm-0,\n.mx-sm-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-sm-0,\n.my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-sm-0,\n.mx-sm-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-sm-1,\n.my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-sm-1,\n.mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-sm-1,\n.my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-sm-1,\n.mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-sm-2,\n.my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-sm-2,\n.mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-sm-2,\n.my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-sm-2,\n.mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-sm-3,\n.my-sm-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-sm-3,\n.mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-sm-3,\n.my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-sm-3,\n.mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-sm-4,\n.my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-sm-4,\n.mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-sm-4,\n.my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-sm-4,\n.mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-sm-5,\n.my-sm-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-sm-5,\n.mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-sm-5,\n.my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-sm-5,\n.mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n\n  .pt-sm-0,\n.py-sm-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-sm-0,\n.px-sm-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-sm-0,\n.py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-sm-0,\n.px-sm-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-sm-1,\n.py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-sm-1,\n.px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-sm-1,\n.py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-sm-1,\n.px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-sm-2,\n.py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-sm-2,\n.px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-sm-2,\n.py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-sm-2,\n.px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-sm-3,\n.py-sm-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-sm-3,\n.px-sm-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-sm-3,\n.py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-sm-3,\n.px-sm-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-sm-4,\n.py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-sm-4,\n.px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-sm-4,\n.py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-sm-4,\n.px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-sm-5,\n.py-sm-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-sm-5,\n.px-sm-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-sm-5,\n.py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-sm-5,\n.px-sm-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-sm-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-sm-n1,\n.my-sm-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-sm-n1,\n.mx-sm-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-sm-n1,\n.my-sm-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-sm-n1,\n.mx-sm-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-sm-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-sm-n2,\n.my-sm-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-sm-n2,\n.mx-sm-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-sm-n2,\n.my-sm-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-sm-n2,\n.mx-sm-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-sm-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-sm-n3,\n.my-sm-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-sm-n3,\n.mx-sm-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-sm-n3,\n.my-sm-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-sm-n3,\n.mx-sm-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-sm-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-sm-n4,\n.my-sm-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-sm-n4,\n.mx-sm-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-sm-n4,\n.my-sm-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-sm-n4,\n.mx-sm-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-sm-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-sm-n5,\n.my-sm-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-sm-n5,\n.mx-sm-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-sm-n5,\n.my-sm-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-sm-n5,\n.mx-sm-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-sm-auto {\n    margin: auto !important;\n  }\n\n  .mt-sm-auto,\n.my-sm-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-sm-auto,\n.mx-sm-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-sm-auto,\n.my-sm-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-sm-auto,\n.mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n\n  .mt-md-0,\n.my-md-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-md-0,\n.mx-md-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-md-0,\n.my-md-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-md-0,\n.mx-md-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-md-1,\n.my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-md-1,\n.mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-md-1,\n.my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-md-1,\n.mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-md-2,\n.my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-md-2,\n.mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-md-2,\n.my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-md-2,\n.mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-md-3,\n.my-md-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-md-3,\n.mx-md-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-md-3,\n.my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-md-3,\n.mx-md-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-md-4,\n.my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-md-4,\n.mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-md-4,\n.my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-md-4,\n.mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-md-5,\n.my-md-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-md-5,\n.mx-md-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-md-5,\n.my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-md-5,\n.mx-md-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-md-0 {\n    padding: 0 !important;\n  }\n\n  .pt-md-0,\n.py-md-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-md-0,\n.px-md-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-md-0,\n.py-md-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-md-0,\n.px-md-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-md-1,\n.py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-md-1,\n.px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-md-1,\n.py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-md-1,\n.px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-md-2,\n.py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-md-2,\n.px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-md-2,\n.py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-md-2,\n.px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-md-3,\n.py-md-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-md-3,\n.px-md-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-md-3,\n.py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-md-3,\n.px-md-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-md-4,\n.py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-md-4,\n.px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-md-4,\n.py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-md-4,\n.px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-md-5,\n.py-md-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-md-5,\n.px-md-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-md-5,\n.py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-md-5,\n.px-md-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-md-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-md-n1,\n.my-md-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-md-n1,\n.mx-md-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-md-n1,\n.my-md-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-md-n1,\n.mx-md-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-md-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-md-n2,\n.my-md-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-md-n2,\n.mx-md-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-md-n2,\n.my-md-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-md-n2,\n.mx-md-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-md-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-md-n3,\n.my-md-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-md-n3,\n.mx-md-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-md-n3,\n.my-md-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-md-n3,\n.mx-md-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-md-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-md-n4,\n.my-md-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-md-n4,\n.mx-md-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-md-n4,\n.my-md-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-md-n4,\n.mx-md-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-md-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-md-n5,\n.my-md-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-md-n5,\n.mx-md-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-md-n5,\n.my-md-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-md-n5,\n.mx-md-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-md-auto {\n    margin: auto !important;\n  }\n\n  .mt-md-auto,\n.my-md-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-md-auto,\n.mx-md-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-md-auto,\n.my-md-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-md-auto,\n.mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n\n  .mt-lg-0,\n.my-lg-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-lg-0,\n.mx-lg-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-lg-0,\n.my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-lg-0,\n.mx-lg-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-lg-1,\n.my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-lg-1,\n.mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-lg-1,\n.my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-lg-1,\n.mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-lg-2,\n.my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-lg-2,\n.mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-lg-2,\n.my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-lg-2,\n.mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-lg-3,\n.my-lg-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-lg-3,\n.mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-lg-3,\n.my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-lg-3,\n.mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-lg-4,\n.my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-lg-4,\n.mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-lg-4,\n.my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-lg-4,\n.mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-lg-5,\n.my-lg-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-lg-5,\n.mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-lg-5,\n.my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-lg-5,\n.mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n\n  .pt-lg-0,\n.py-lg-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-lg-0,\n.px-lg-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-lg-0,\n.py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-lg-0,\n.px-lg-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-lg-1,\n.py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-lg-1,\n.px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-lg-1,\n.py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-lg-1,\n.px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-lg-2,\n.py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-lg-2,\n.px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-lg-2,\n.py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-lg-2,\n.px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-lg-3,\n.py-lg-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-lg-3,\n.px-lg-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-lg-3,\n.py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-lg-3,\n.px-lg-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-lg-4,\n.py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-lg-4,\n.px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-lg-4,\n.py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-lg-4,\n.px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-lg-5,\n.py-lg-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-lg-5,\n.px-lg-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-lg-5,\n.py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-lg-5,\n.px-lg-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-lg-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-lg-n1,\n.my-lg-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-lg-n1,\n.mx-lg-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-lg-n1,\n.my-lg-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-lg-n1,\n.mx-lg-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-lg-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-lg-n2,\n.my-lg-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-lg-n2,\n.mx-lg-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-lg-n2,\n.my-lg-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-lg-n2,\n.mx-lg-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-lg-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-lg-n3,\n.my-lg-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-lg-n3,\n.mx-lg-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-lg-n3,\n.my-lg-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-lg-n3,\n.mx-lg-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-lg-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-lg-n4,\n.my-lg-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-lg-n4,\n.mx-lg-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-lg-n4,\n.my-lg-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-lg-n4,\n.mx-lg-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-lg-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-lg-n5,\n.my-lg-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-lg-n5,\n.mx-lg-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-lg-n5,\n.my-lg-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-lg-n5,\n.mx-lg-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-lg-auto {\n    margin: auto !important;\n  }\n\n  .mt-lg-auto,\n.my-lg-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-lg-auto,\n.mx-lg-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-lg-auto,\n.my-lg-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-lg-auto,\n.mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 1280px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n\n  .mt-xl-0,\n.my-xl-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-xl-0,\n.mx-xl-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-xl-0,\n.my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-xl-0,\n.mx-xl-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-xl-1,\n.my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-xl-1,\n.mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-xl-1,\n.my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-xl-1,\n.mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-xl-2,\n.my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-xl-2,\n.mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-xl-2,\n.my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-xl-2,\n.mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-xl-3,\n.my-xl-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-xl-3,\n.mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-xl-3,\n.my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-xl-3,\n.mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-xl-4,\n.my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-xl-4,\n.mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-xl-4,\n.my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-xl-4,\n.mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-xl-5,\n.my-xl-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-xl-5,\n.mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-xl-5,\n.my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-xl-5,\n.mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n\n  .pt-xl-0,\n.py-xl-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-xl-0,\n.px-xl-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-xl-0,\n.py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-xl-0,\n.px-xl-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-xl-1,\n.py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-xl-1,\n.px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-xl-1,\n.py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-xl-1,\n.px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-xl-2,\n.py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-xl-2,\n.px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-xl-2,\n.py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-xl-2,\n.px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-xl-3,\n.py-xl-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-xl-3,\n.px-xl-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-xl-3,\n.py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-xl-3,\n.px-xl-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-xl-4,\n.py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-xl-4,\n.px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-xl-4,\n.py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-xl-4,\n.px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-xl-5,\n.py-xl-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-xl-5,\n.px-xl-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-xl-5,\n.py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-xl-5,\n.px-xl-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-xl-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-xl-n1,\n.my-xl-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-xl-n1,\n.mx-xl-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-xl-n1,\n.my-xl-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-xl-n1,\n.mx-xl-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-xl-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-xl-n2,\n.my-xl-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-xl-n2,\n.mx-xl-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-xl-n2,\n.my-xl-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-xl-n2,\n.mx-xl-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-xl-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-xl-n3,\n.my-xl-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-xl-n3,\n.mx-xl-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-xl-n3,\n.my-xl-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-xl-n3,\n.mx-xl-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-xl-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-xl-n4,\n.my-xl-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-xl-n4,\n.mx-xl-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-xl-n4,\n.my-xl-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-xl-n4,\n.mx-xl-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-xl-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-xl-n5,\n.my-xl-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-xl-n5,\n.mx-xl-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-xl-n5,\n.my-xl-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-xl-n5,\n.mx-xl-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-xl-auto {\n    margin: auto !important;\n  }\n\n  .mt-xl-auto,\n.my-xl-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-xl-auto,\n.mx-xl-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-xl-auto,\n.my-xl-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-xl-auto,\n.mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: auto;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0);\n}\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n\n  .text-sm-right {\n    text-align: right !important;\n  }\n\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n\n  .text-md-right {\n    text-align: right !important;\n  }\n\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n\n  .text-lg-right {\n    text-align: right !important;\n  }\n\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1280px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n\n  .text-xl-right {\n    text-align: right !important;\n  }\n\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #007bff !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #0056b3 !important;\n}\n.text-secondary {\n  color: #6c757d !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #494f54 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #dc3545 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #a71d2a !important;\n}\n.text-light {\n  color: #f8f9fa !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #cbd3da !important;\n}\n.text-dark {\n  color: #343a40 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #121416 !important;\n}\n.text-body {\n  color: #212529 !important;\n}\n.text-muted {\n  color: #6c757d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.visible {\n  visibility: visible !important;\n}\n.invisible {\n  visibility: hidden !important;\n}\n/*!\n * Bootstrap Grid v4.6.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\nhtml {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n.container,\n.container-fluid,\n.container-xl,\n.container-lg,\n.container-md,\n.container-sm {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  .container-sm, .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container-md, .container-sm, .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container-lg, .container-md, .container-sm, .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1280px) {\n  .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1240px;\n  }\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n.no-gutters > .col,\n.no-gutters > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.col-xl,\n.col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg,\n.col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md,\n.col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm,\n.col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col,\n.col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1 {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n.row-cols-1 > * {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.row-cols-2 > * {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.row-cols-3 > * {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.row-cols-4 > * {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.row-cols-5 > * {\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n.row-cols-6 > * {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n.col-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.col-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.col-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.col-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.col-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.col-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.col-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.col-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.order-first {\n  order: -1;\n}\n.order-last {\n  order: 13;\n}\n.order-0 {\n  order: 0;\n}\n.order-1 {\n  order: 1;\n}\n.order-2 {\n  order: 2;\n}\n.order-3 {\n  order: 3;\n}\n.order-4 {\n  order: 4;\n}\n.order-5 {\n  order: 5;\n}\n.order-6 {\n  order: 6;\n}\n.order-7 {\n  order: 7;\n}\n.order-8 {\n  order: 8;\n}\n.order-9 {\n  order: 9;\n}\n.order-10 {\n  order: 10;\n}\n.order-11 {\n  order: 11;\n}\n.order-12 {\n  order: 12;\n}\n.offset-1 {\n  margin-left: 8.3333333333%;\n}\n.offset-2 {\n  margin-left: 16.6666666667%;\n}\n.offset-3 {\n  margin-left: 25%;\n}\n.offset-4 {\n  margin-left: 33.3333333333%;\n}\n.offset-5 {\n  margin-left: 41.6666666667%;\n}\n.offset-6 {\n  margin-left: 50%;\n}\n.offset-7 {\n  margin-left: 58.3333333333%;\n}\n.offset-8 {\n  margin-left: 66.6666666667%;\n}\n.offset-9 {\n  margin-left: 75%;\n}\n.offset-10 {\n  margin-left: 83.3333333333%;\n}\n.offset-11 {\n  margin-left: 91.6666666667%;\n}\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-sm-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-sm-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-sm-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-sm-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-sm-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-sm-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-sm-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-sm-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-sm-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-sm-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-sm-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-sm-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-sm-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-sm-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-sm-first {\n    order: -1;\n  }\n\n  .order-sm-last {\n    order: 13;\n  }\n\n  .order-sm-0 {\n    order: 0;\n  }\n\n  .order-sm-1 {\n    order: 1;\n  }\n\n  .order-sm-2 {\n    order: 2;\n  }\n\n  .order-sm-3 {\n    order: 3;\n  }\n\n  .order-sm-4 {\n    order: 4;\n  }\n\n  .order-sm-5 {\n    order: 5;\n  }\n\n  .order-sm-6 {\n    order: 6;\n  }\n\n  .order-sm-7 {\n    order: 7;\n  }\n\n  .order-sm-8 {\n    order: 8;\n  }\n\n  .order-sm-9 {\n    order: 9;\n  }\n\n  .order-sm-10 {\n    order: 10;\n  }\n\n  .order-sm-11 {\n    order: 11;\n  }\n\n  .order-sm-12 {\n    order: 12;\n  }\n\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n\n  .offset-sm-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-sm-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n\n  .offset-sm-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-sm-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n\n  .offset-sm-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-sm-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n\n  .offset-sm-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-sm-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-md-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-md-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-md-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-md-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-md-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-md-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-md-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-md-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-md-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-md-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-md-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-md-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-md-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-md-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-md-first {\n    order: -1;\n  }\n\n  .order-md-last {\n    order: 13;\n  }\n\n  .order-md-0 {\n    order: 0;\n  }\n\n  .order-md-1 {\n    order: 1;\n  }\n\n  .order-md-2 {\n    order: 2;\n  }\n\n  .order-md-3 {\n    order: 3;\n  }\n\n  .order-md-4 {\n    order: 4;\n  }\n\n  .order-md-5 {\n    order: 5;\n  }\n\n  .order-md-6 {\n    order: 6;\n  }\n\n  .order-md-7 {\n    order: 7;\n  }\n\n  .order-md-8 {\n    order: 8;\n  }\n\n  .order-md-9 {\n    order: 9;\n  }\n\n  .order-md-10 {\n    order: 10;\n  }\n\n  .order-md-11 {\n    order: 11;\n  }\n\n  .order-md-12 {\n    order: 12;\n  }\n\n  .offset-md-0 {\n    margin-left: 0;\n  }\n\n  .offset-md-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-md-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n\n  .offset-md-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-md-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n\n  .offset-md-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-md-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n\n  .offset-md-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-md-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-lg-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-lg-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-lg-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-lg-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-lg-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-lg-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-lg-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-lg-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-lg-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-lg-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-lg-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-lg-first {\n    order: -1;\n  }\n\n  .order-lg-last {\n    order: 13;\n  }\n\n  .order-lg-0 {\n    order: 0;\n  }\n\n  .order-lg-1 {\n    order: 1;\n  }\n\n  .order-lg-2 {\n    order: 2;\n  }\n\n  .order-lg-3 {\n    order: 3;\n  }\n\n  .order-lg-4 {\n    order: 4;\n  }\n\n  .order-lg-5 {\n    order: 5;\n  }\n\n  .order-lg-6 {\n    order: 6;\n  }\n\n  .order-lg-7 {\n    order: 7;\n  }\n\n  .order-lg-8 {\n    order: 8;\n  }\n\n  .order-lg-9 {\n    order: 9;\n  }\n\n  .order-lg-10 {\n    order: 10;\n  }\n\n  .order-lg-11 {\n    order: 11;\n  }\n\n  .order-lg-12 {\n    order: 12;\n  }\n\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n\n  .offset-lg-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-lg-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n\n  .offset-lg-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-lg-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n\n  .offset-lg-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-lg-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n\n  .offset-lg-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-lg-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n@media (min-width: 1280px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-xl-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-xl-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-xl-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-xl-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-xl-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-xl-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-xl-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-xl-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-xl-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-xl-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-xl-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-xl-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-xl-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-xl-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-xl-first {\n    order: -1;\n  }\n\n  .order-xl-last {\n    order: 13;\n  }\n\n  .order-xl-0 {\n    order: 0;\n  }\n\n  .order-xl-1 {\n    order: 1;\n  }\n\n  .order-xl-2 {\n    order: 2;\n  }\n\n  .order-xl-3 {\n    order: 3;\n  }\n\n  .order-xl-4 {\n    order: 4;\n  }\n\n  .order-xl-5 {\n    order: 5;\n  }\n\n  .order-xl-6 {\n    order: 6;\n  }\n\n  .order-xl-7 {\n    order: 7;\n  }\n\n  .order-xl-8 {\n    order: 8;\n  }\n\n  .order-xl-9 {\n    order: 9;\n  }\n\n  .order-xl-10 {\n    order: 10;\n  }\n\n  .order-xl-11 {\n    order: 11;\n  }\n\n  .order-xl-12 {\n    order: 12;\n  }\n\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n\n  .offset-xl-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-xl-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n\n  .offset-xl-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-xl-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n\n  .offset-xl-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-xl-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n\n  .offset-xl-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-xl-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n.d-none {\n  display: none !important;\n}\n.d-inline {\n  display: inline !important;\n}\n.d-inline-block {\n  display: inline-block !important;\n}\n.d-block {\n  display: block !important;\n}\n.d-table {\n  display: table !important;\n}\n.d-table-row {\n  display: table-row !important;\n}\n.d-table-cell {\n  display: table-cell !important;\n}\n.d-flex {\n  display: flex !important;\n}\n.d-inline-flex {\n  display: inline-flex !important;\n}\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important;\n  }\n\n  .d-sm-inline {\n    display: inline !important;\n  }\n\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-sm-block {\n    display: block !important;\n  }\n\n  .d-sm-table {\n    display: table !important;\n  }\n\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-sm-flex {\n    display: flex !important;\n  }\n\n  .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important;\n  }\n\n  .d-md-inline {\n    display: inline !important;\n  }\n\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-md-block {\n    display: block !important;\n  }\n\n  .d-md-table {\n    display: table !important;\n  }\n\n  .d-md-table-row {\n    display: table-row !important;\n  }\n\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-md-flex {\n    display: flex !important;\n  }\n\n  .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important;\n  }\n\n  .d-lg-inline {\n    display: inline !important;\n  }\n\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-lg-block {\n    display: block !important;\n  }\n\n  .d-lg-table {\n    display: table !important;\n  }\n\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-lg-flex {\n    display: flex !important;\n  }\n\n  .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 1280px) {\n  .d-xl-none {\n    display: none !important;\n  }\n\n  .d-xl-inline {\n    display: inline !important;\n  }\n\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-xl-block {\n    display: block !important;\n  }\n\n  .d-xl-table {\n    display: table !important;\n  }\n\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-xl-flex {\n    display: flex !important;\n  }\n\n  .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media print {\n  .d-print-none {\n    display: none !important;\n  }\n\n  .d-print-inline {\n    display: inline !important;\n  }\n\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-print-block {\n    display: block !important;\n  }\n\n  .d-print-table {\n    display: table !important;\n  }\n\n  .d-print-table-row {\n    display: table-row !important;\n  }\n\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-print-flex {\n    display: flex !important;\n  }\n\n  .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n}\n.flex-row {\n  flex-direction: row !important;\n}\n.flex-column {\n  flex-direction: column !important;\n}\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n.justify-content-center {\n  justify-content: center !important;\n}\n.justify-content-between {\n  justify-content: space-between !important;\n}\n.justify-content-around {\n  justify-content: space-around !important;\n}\n.align-items-start {\n  align-items: flex-start !important;\n}\n.align-items-end {\n  align-items: flex-end !important;\n}\n.align-items-center {\n  align-items: center !important;\n}\n.align-items-baseline {\n  align-items: baseline !important;\n}\n.align-items-stretch {\n  align-items: stretch !important;\n}\n.align-content-start {\n  align-content: flex-start !important;\n}\n.align-content-end {\n  align-content: flex-end !important;\n}\n.align-content-center {\n  align-content: center !important;\n}\n.align-content-between {\n  align-content: space-between !important;\n}\n.align-content-around {\n  align-content: space-around !important;\n}\n.align-content-stretch {\n  align-content: stretch !important;\n}\n.align-self-auto {\n  align-self: auto !important;\n}\n.align-self-start {\n  align-self: flex-start !important;\n}\n.align-self-end {\n  align-self: flex-end !important;\n}\n.align-self-center {\n  align-self: center !important;\n}\n.align-self-baseline {\n  align-self: baseline !important;\n}\n.align-self-stretch {\n  align-self: stretch !important;\n}\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important;\n  }\n\n  .flex-sm-column {\n    flex-direction: column !important;\n  }\n\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-sm-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-sm-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-sm-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-sm-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-sm-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-sm-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-sm-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-sm-center {\n    align-items: center !important;\n  }\n\n  .align-items-sm-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-sm-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-sm-center {\n    align-content: center !important;\n  }\n\n  .align-content-sm-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-sm-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-sm-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-sm-center {\n    align-self: center !important;\n  }\n\n  .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important;\n  }\n\n  .flex-md-column {\n    flex-direction: column !important;\n  }\n\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-md-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-md-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-md-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-md-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-md-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-md-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-md-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-md-center {\n    align-items: center !important;\n  }\n\n  .align-items-md-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-md-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-md-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-md-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-md-center {\n    align-content: center !important;\n  }\n\n  .align-content-md-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-md-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-md-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-md-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-md-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-md-center {\n    align-self: center !important;\n  }\n\n  .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important;\n  }\n\n  .flex-lg-column {\n    flex-direction: column !important;\n  }\n\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-lg-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-lg-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-lg-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-lg-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-lg-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-lg-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-lg-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-lg-center {\n    align-items: center !important;\n  }\n\n  .align-items-lg-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-lg-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-lg-center {\n    align-content: center !important;\n  }\n\n  .align-content-lg-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-lg-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-lg-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-lg-center {\n    align-self: center !important;\n  }\n\n  .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 1280px) {\n  .flex-xl-row {\n    flex-direction: row !important;\n  }\n\n  .flex-xl-column {\n    flex-direction: column !important;\n  }\n\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-xl-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-xl-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-xl-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-xl-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-xl-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-xl-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-xl-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-xl-center {\n    align-items: center !important;\n  }\n\n  .align-items-xl-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-xl-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-xl-center {\n    align-content: center !important;\n  }\n\n  .align-content-xl-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-xl-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-xl-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-xl-center {\n    align-self: center !important;\n  }\n\n  .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n}\n.m-0 {\n  margin: 0 !important;\n}\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n.m-1 {\n  margin: 0.25rem !important;\n}\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n.m-2 {\n  margin: 0.5rem !important;\n}\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n.m-3 {\n  margin: 1rem !important;\n}\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n.m-4 {\n  margin: 1.5rem !important;\n}\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n.m-5 {\n  margin: 3rem !important;\n}\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n.p-0 {\n  padding: 0 !important;\n}\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n.p-1 {\n  padding: 0.25rem !important;\n}\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n.p-2 {\n  padding: 0.5rem !important;\n}\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n.p-3 {\n  padding: 1rem !important;\n}\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n.p-4 {\n  padding: 1.5rem !important;\n}\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n.p-5 {\n  padding: 3rem !important;\n}\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n.m-n1 {\n  margin: -0.25rem !important;\n}\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important;\n}\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important;\n}\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important;\n}\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important;\n}\n.m-n2 {\n  margin: -0.5rem !important;\n}\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important;\n}\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important;\n}\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important;\n}\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important;\n}\n.m-n3 {\n  margin: -1rem !important;\n}\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important;\n}\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important;\n}\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important;\n}\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important;\n}\n.m-n4 {\n  margin: -1.5rem !important;\n}\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important;\n}\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important;\n}\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important;\n}\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important;\n}\n.m-n5 {\n  margin: -3rem !important;\n}\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important;\n}\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important;\n}\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important;\n}\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important;\n}\n.m-auto {\n  margin: auto !important;\n}\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n\n  .mt-sm-0,\n.my-sm-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-sm-0,\n.mx-sm-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-sm-0,\n.my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-sm-0,\n.mx-sm-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-sm-1,\n.my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-sm-1,\n.mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-sm-1,\n.my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-sm-1,\n.mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-sm-2,\n.my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-sm-2,\n.mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-sm-2,\n.my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-sm-2,\n.mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-sm-3,\n.my-sm-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-sm-3,\n.mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-sm-3,\n.my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-sm-3,\n.mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-sm-4,\n.my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-sm-4,\n.mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-sm-4,\n.my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-sm-4,\n.mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-sm-5,\n.my-sm-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-sm-5,\n.mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-sm-5,\n.my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-sm-5,\n.mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n\n  .pt-sm-0,\n.py-sm-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-sm-0,\n.px-sm-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-sm-0,\n.py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-sm-0,\n.px-sm-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-sm-1,\n.py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-sm-1,\n.px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-sm-1,\n.py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-sm-1,\n.px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-sm-2,\n.py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-sm-2,\n.px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-sm-2,\n.py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-sm-2,\n.px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-sm-3,\n.py-sm-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-sm-3,\n.px-sm-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-sm-3,\n.py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-sm-3,\n.px-sm-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-sm-4,\n.py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-sm-4,\n.px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-sm-4,\n.py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-sm-4,\n.px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-sm-5,\n.py-sm-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-sm-5,\n.px-sm-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-sm-5,\n.py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-sm-5,\n.px-sm-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-sm-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-sm-n1,\n.my-sm-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-sm-n1,\n.mx-sm-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-sm-n1,\n.my-sm-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-sm-n1,\n.mx-sm-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-sm-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-sm-n2,\n.my-sm-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-sm-n2,\n.mx-sm-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-sm-n2,\n.my-sm-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-sm-n2,\n.mx-sm-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-sm-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-sm-n3,\n.my-sm-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-sm-n3,\n.mx-sm-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-sm-n3,\n.my-sm-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-sm-n3,\n.mx-sm-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-sm-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-sm-n4,\n.my-sm-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-sm-n4,\n.mx-sm-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-sm-n4,\n.my-sm-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-sm-n4,\n.mx-sm-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-sm-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-sm-n5,\n.my-sm-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-sm-n5,\n.mx-sm-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-sm-n5,\n.my-sm-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-sm-n5,\n.mx-sm-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-sm-auto {\n    margin: auto !important;\n  }\n\n  .mt-sm-auto,\n.my-sm-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-sm-auto,\n.mx-sm-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-sm-auto,\n.my-sm-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-sm-auto,\n.mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n\n  .mt-md-0,\n.my-md-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-md-0,\n.mx-md-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-md-0,\n.my-md-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-md-0,\n.mx-md-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-md-1,\n.my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-md-1,\n.mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-md-1,\n.my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-md-1,\n.mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-md-2,\n.my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-md-2,\n.mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-md-2,\n.my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-md-2,\n.mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-md-3,\n.my-md-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-md-3,\n.mx-md-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-md-3,\n.my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-md-3,\n.mx-md-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-md-4,\n.my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-md-4,\n.mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-md-4,\n.my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-md-4,\n.mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-md-5,\n.my-md-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-md-5,\n.mx-md-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-md-5,\n.my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-md-5,\n.mx-md-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-md-0 {\n    padding: 0 !important;\n  }\n\n  .pt-md-0,\n.py-md-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-md-0,\n.px-md-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-md-0,\n.py-md-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-md-0,\n.px-md-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-md-1,\n.py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-md-1,\n.px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-md-1,\n.py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-md-1,\n.px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-md-2,\n.py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-md-2,\n.px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-md-2,\n.py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-md-2,\n.px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-md-3,\n.py-md-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-md-3,\n.px-md-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-md-3,\n.py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-md-3,\n.px-md-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-md-4,\n.py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-md-4,\n.px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-md-4,\n.py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-md-4,\n.px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-md-5,\n.py-md-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-md-5,\n.px-md-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-md-5,\n.py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-md-5,\n.px-md-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-md-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-md-n1,\n.my-md-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-md-n1,\n.mx-md-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-md-n1,\n.my-md-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-md-n1,\n.mx-md-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-md-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-md-n2,\n.my-md-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-md-n2,\n.mx-md-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-md-n2,\n.my-md-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-md-n2,\n.mx-md-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-md-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-md-n3,\n.my-md-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-md-n3,\n.mx-md-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-md-n3,\n.my-md-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-md-n3,\n.mx-md-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-md-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-md-n4,\n.my-md-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-md-n4,\n.mx-md-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-md-n4,\n.my-md-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-md-n4,\n.mx-md-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-md-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-md-n5,\n.my-md-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-md-n5,\n.mx-md-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-md-n5,\n.my-md-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-md-n5,\n.mx-md-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-md-auto {\n    margin: auto !important;\n  }\n\n  .mt-md-auto,\n.my-md-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-md-auto,\n.mx-md-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-md-auto,\n.my-md-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-md-auto,\n.mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n\n  .mt-lg-0,\n.my-lg-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-lg-0,\n.mx-lg-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-lg-0,\n.my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-lg-0,\n.mx-lg-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-lg-1,\n.my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-lg-1,\n.mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-lg-1,\n.my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-lg-1,\n.mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-lg-2,\n.my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-lg-2,\n.mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-lg-2,\n.my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-lg-2,\n.mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-lg-3,\n.my-lg-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-lg-3,\n.mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-lg-3,\n.my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-lg-3,\n.mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-lg-4,\n.my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-lg-4,\n.mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-lg-4,\n.my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-lg-4,\n.mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-lg-5,\n.my-lg-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-lg-5,\n.mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-lg-5,\n.my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-lg-5,\n.mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n\n  .pt-lg-0,\n.py-lg-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-lg-0,\n.px-lg-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-lg-0,\n.py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-lg-0,\n.px-lg-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-lg-1,\n.py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-lg-1,\n.px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-lg-1,\n.py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-lg-1,\n.px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-lg-2,\n.py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-lg-2,\n.px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-lg-2,\n.py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-lg-2,\n.px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-lg-3,\n.py-lg-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-lg-3,\n.px-lg-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-lg-3,\n.py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-lg-3,\n.px-lg-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-lg-4,\n.py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-lg-4,\n.px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-lg-4,\n.py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-lg-4,\n.px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-lg-5,\n.py-lg-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-lg-5,\n.px-lg-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-lg-5,\n.py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-lg-5,\n.px-lg-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-lg-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-lg-n1,\n.my-lg-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-lg-n1,\n.mx-lg-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-lg-n1,\n.my-lg-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-lg-n1,\n.mx-lg-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-lg-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-lg-n2,\n.my-lg-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-lg-n2,\n.mx-lg-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-lg-n2,\n.my-lg-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-lg-n2,\n.mx-lg-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-lg-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-lg-n3,\n.my-lg-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-lg-n3,\n.mx-lg-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-lg-n3,\n.my-lg-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-lg-n3,\n.mx-lg-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-lg-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-lg-n4,\n.my-lg-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-lg-n4,\n.mx-lg-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-lg-n4,\n.my-lg-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-lg-n4,\n.mx-lg-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-lg-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-lg-n5,\n.my-lg-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-lg-n5,\n.mx-lg-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-lg-n5,\n.my-lg-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-lg-n5,\n.mx-lg-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-lg-auto {\n    margin: auto !important;\n  }\n\n  .mt-lg-auto,\n.my-lg-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-lg-auto,\n.mx-lg-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-lg-auto,\n.my-lg-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-lg-auto,\n.mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 1280px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n\n  .mt-xl-0,\n.my-xl-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-xl-0,\n.mx-xl-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-xl-0,\n.my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-xl-0,\n.mx-xl-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-xl-1,\n.my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-xl-1,\n.mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-xl-1,\n.my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-xl-1,\n.mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-xl-2,\n.my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-xl-2,\n.mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-xl-2,\n.my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-xl-2,\n.mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-xl-3,\n.my-xl-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-xl-3,\n.mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-xl-3,\n.my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-xl-3,\n.mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-xl-4,\n.my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-xl-4,\n.mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-xl-4,\n.my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-xl-4,\n.mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-xl-5,\n.my-xl-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-xl-5,\n.mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-xl-5,\n.my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-xl-5,\n.mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n\n  .pt-xl-0,\n.py-xl-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-xl-0,\n.px-xl-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-xl-0,\n.py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-xl-0,\n.px-xl-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-xl-1,\n.py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-xl-1,\n.px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-xl-1,\n.py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-xl-1,\n.px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-xl-2,\n.py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-xl-2,\n.px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-xl-2,\n.py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-xl-2,\n.px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-xl-3,\n.py-xl-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-xl-3,\n.px-xl-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-xl-3,\n.py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-xl-3,\n.px-xl-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-xl-4,\n.py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-xl-4,\n.px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-xl-4,\n.py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-xl-4,\n.px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-xl-5,\n.py-xl-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-xl-5,\n.px-xl-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-xl-5,\n.py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-xl-5,\n.px-xl-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-xl-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-xl-n1,\n.my-xl-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-xl-n1,\n.mx-xl-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-xl-n1,\n.my-xl-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-xl-n1,\n.mx-xl-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-xl-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-xl-n2,\n.my-xl-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-xl-n2,\n.mx-xl-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-xl-n2,\n.my-xl-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-xl-n2,\n.mx-xl-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-xl-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-xl-n3,\n.my-xl-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-xl-n3,\n.mx-xl-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-xl-n3,\n.my-xl-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-xl-n3,\n.mx-xl-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-xl-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-xl-n4,\n.my-xl-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-xl-n4,\n.mx-xl-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-xl-n4,\n.my-xl-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-xl-n4,\n.mx-xl-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-xl-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-xl-n5,\n.my-xl-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-xl-n5,\n.mx-xl-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-xl-n5,\n.my-xl-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-xl-n5,\n.mx-xl-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-xl-auto {\n    margin: auto !important;\n  }\n\n  .mt-xl-auto,\n.my-xl-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-xl-auto,\n.mx-xl-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-xl-auto,\n.my-xl-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-xl-auto,\n.mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n.figure {\n  display: inline-block;\n}\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d;\n}\n.-qu-txt-white {\n  color: #FFF;\n}\n.-qu-txt-black {\n  color: #333;\n}\n.-qu-txt-gray {\n  color: #777;\n}\n.-qu-txt-center {\n  text-align: center;\n}\n.-qu-txt-smaller {\n  font-size: 13px;\n}\n.-qu-txt-base {\n  font-size: 15px;\n}\n.-qu-txt-larger {\n  font-size: 20px;\n}\nbody {\n  color: #333;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 15px;\n  font-weight: 300;\n  font-style: normal;\n  line-height: normal;\n}\nhtml, body {\n  height: 100%;\n}\nhr {\n  display: block;\n  height: 2px;\n  width: 178px;\n  margin-left: 0;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  background-color: #00B4C9;\n  border: 0;\n}\n.qu-main {\n  padding-top: 50px;\n  padding-bottom: 130px;\n  background: linear-gradient(180deg, #00b4c9 0%, #81dfb0 25%, white 58%, white 100%);\n}\n.qu-footer {\n  padding-top: 50px;\n  padding-bottom: 30px;\n  background: linear-gradient(180deg, #81dfb0 0%, #00b4c9 100%);\n  background-color: #01B5C9;\n}\nh1 {\n  font-size: 60px;\n  line-height: 1.1;\n}\nh2 {\n  font-size: 36px;\n  color: #333;\n}\nh1,\nh2 {\n  font-weight: 300;\n}\nh4,\nb,\nstrong {\n  font-weight: 600;\n}\n.qu-logo {\n  display: block;\n  height: 165px;\n  height: 42px;\n  background-repeat: no-repeat;\n}\n.qu-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 178px;\n  height: 46px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #00B4C9;\n  border: 2px solid #00B4C9;\n  border-radius: 25px;\n  text-transform: uppercase;\n}\n.qu-button:hover {\n  color: #00B4C9;\n  text-decoration: none;\n  background-color: rgba(0, 180, 201, 0.05);\n}\n.qu-button.-action {\n  background: #FFF;\n  border-color: #FFF;\n}\n.qu-button.-action:hover {\n  background-color: #fafafa;\n  border-color: #fafafa;\n}\n.qu-button.-secondary {\n  color: #FFF;\n  border-color: #FFF;\n}\n.qu-button.-secondary:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.qu-media {\n  display: flex;\n  align-items: flex-start;\n}\n.qu-media.-align-center {\n  align-items: center;\n}\n.qu-media__body {\n  flex: 1;\n}\n.qu-media img {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n}\n.qu-media img.-small {\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n}\n.qu-quote {\n  position: relative;\n  display: inline-flex;\n  width: 55px;\n  height: 55px;\n}\n.qu-quote::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-family: \"Gill Sans\", sans-serif;\n  font-weight: 800;\n  content: \"”\";\n}\n.qu-quote.-large {\n  font-size: 66px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YW50dW0tbGFuZGluZy1wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwLXNjc3NcXGJvb3RzdHJhcC1yZWJvb3Quc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcX3JlYm9vdC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcC1zY3NzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwLXNjc3NcXHZlbmRvclxcX3Jmcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcC1zY3NzXFxtaXhpbnNcXF9ob3Zlci5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcC1zY3NzXFx1dGlsaXRpZXNcXF9hbGlnbi5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcC1zY3NzXFxtaXhpbnNcXF9iYWNrZ3JvdW5kLXZhcmlhbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcdXRpbGl0aWVzXFxfYmFja2dyb3VuZC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcC1zY3NzXFx1dGlsaXRpZXNcXF9ib3JkZXJzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwLXNjc3NcXG1peGluc1xcX2NsZWFyZml4LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwLXNjc3NcXHV0aWxpdGllc1xcX2Rpc3BsYXkuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcdXRpbGl0aWVzXFxfZW1iZWQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcdXRpbGl0aWVzXFxfZmxleC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcC1zY3NzXFx1dGlsaXRpZXNcXF9mbG9hdC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcC1zY3NzXFx1dGlsaXRpZXNcXF9pbnRlcmFjdGlvbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcdXRpbGl0aWVzXFxfb3ZlcmZsb3cuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcdXRpbGl0aWVzXFxfcG9zaXRpb24uc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcdXRpbGl0aWVzXFxfc2NyZWVucmVhZGVycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcC1zY3NzXFxtaXhpbnNcXF9zY3JlZW4tcmVhZGVyLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwLXNjc3NcXHV0aWxpdGllc1xcX3NoYWRvd3Muc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcdXRpbGl0aWVzXFxfc2l6aW5nLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwLXNjc3NcXHV0aWxpdGllc1xcX3NwYWNpbmcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcdXRpbGl0aWVzXFxfc3RyZXRjaGVkLWxpbmsuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcdXRpbGl0aWVzXFxfdGV4dC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcC1zY3NzXFxtaXhpbnNcXF90ZXh0LXRydW5jYXRlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwLXNjc3NcXG1peGluc1xcX3RleHQtZW1waGFzaXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcbWl4aW5zXFxfdGV4dC1oaWRlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwLXNjc3NcXHV0aWxpdGllc1xcX3Zpc2liaWxpdHkuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcYm9vdHN0cmFwLWdyaWQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcX2dyaWQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXAtc2Nzc1xcbWl4aW5zXFxfZ3JpZC5zY3NzIiwidmVuZG9yc1xcX2Jvb3RzdHJhcC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcC1zY3NzXFxtaXhpbnNcXF9ncmlkLWZyYW1ld29yay5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcC1zY3NzXFxfaW1hZ2VzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwLXNjc3NcXG1peGluc1xcX2ltYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwLXNjc3NcXG1peGluc1xcX2JvcmRlci1yYWRpdXMuc2NzcyIsInV0aWxpdGllc1xcX3RleHQuc2NzcyIsInNldHRpbmdzXFxfY29sb3JzLnNjc3MiLCJiYXNlXFxfYm9keS5zY3NzIiwiYmFzZVxcX2hyLnNjc3MiLCJsYXlvdXRcXF9tYWluLnNjc3MiLCJsYXlvdXRcXF9mb290ZXIuc2NzcyIsImNvbXBvbmVudHNcXF90eXBvZ3JhcGh5LnNjc3MiLCJjb21wb25lbnRzXFxfbG9nby5zY3NzIiwiY29tcG9uZW50c1xcX2J1dHRvbi5zY3NzIiwiY29tcG9uZW50c1xcX21lZGlhLnNjc3MiLCJjb21wb25lbnRzXFxfaWNvbi5zY3NzIiwic2V0dGluZ3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7OztFQUFBO0FDa0JBOzs7RUFHRSxzQkFBQTtBRlRGO0FFWUE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2Q0FBQTtBRlRGO0FFZUE7RUFDRSxjQUFBO0FGWkY7QUVzQkE7RUFDRSxTQUFBO0VBQ0EscU5DcU80QjtFQ3JKeEIsZUF0Q2E7RUZ4Q2pCLGdCQzhPNEI7RUQ3TzVCLGdCQ2tQNEI7RURqUDVCLGNDbkNTO0VEb0NULGdCQUFBO0VBQ0Esc0JDOUNTO0FIMkJYO0FFK0JBO0VBQ0UscUJBQUE7QUY1QkY7QUVxQ0E7RUFDRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBRmxDRjtBRStDQTtFQUNFLGFBQUE7RUFDQSxxQkNnTjRCO0FINVA5QjtBRW1EQTtFQUNFLGFBQUE7RUFDQSxtQkNvRjBCO0FIcEk1QjtBRTJEQTs7RUFFRSwwQkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FGeERGO0FFMkRBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FGeERGO0FFMkRBOzs7RUFHRSxhQUFBO0VBQ0EsbUJBQUE7QUZ4REY7QUUyREE7Ozs7RUFJRSxnQkFBQTtBRnhERjtBRTJEQTtFQUNFLGdCQ2lKNEI7QUh6TTlCO0FFMkRBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FGeERGO0FFMkRBO0VBQ0UsZ0JBQUE7QUZ4REY7QUUyREE7O0VBRUUsbUJDb0k0QjtBSDVMOUI7QUUyREE7RUV4RkksY0FBQTtBSmlDSjtBRWdFQTs7RUFFRSxrQkFBQTtFRW5HRSxjQUFBO0VGcUdGLGNBQUE7RUFDQSx3QkFBQTtBRjdERjtBRWdFQTtFQUFNLGVBQUE7QUY1RE47QUU2REE7RUFBTSxXQUFBO0FGekROO0FFZ0VBO0VBQ0UsY0NYd0M7RURZeEMscUJDWHdDO0VEWXhDLDZCQUFBO0FGN0RGO0FLbkhFO0VIbUxFLGNDZHNDO0VEZXRDLDBCQ2RzQztBSC9DMUM7QUVzRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUZuRUY7QUs1SEU7RUhrTUUsY0FBQTtFQUNBLHFCQUFBO0FGbkVKO0FFNEVBOzs7O0VBSUUsaUdDeUQ0QjtFQzdNMUIsY0FBQTtBSjRFSjtBRTRFQTtFQUVFLGFBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFHQSw2QkFBQTtBRjlFRjtBRXNGQTtFQUVFLGdCQUFBO0FGcEZGO0FFNEZBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBRnpGRjtBRTRGQTtFQUdFLGdCQUFBO0VBQ0Esc0JBQUE7QUYzRkY7QUVtR0E7RUFDRSx5QkFBQTtBRmhHRjtBRW1HQTtFQUNFLG9CQzZFNEI7RUQ1RTVCLHVCQzRFNEI7RUQzRTVCLGNDdFFTO0VEdVFULGdCQUFBO0VBQ0Esb0JBQUE7QUZoR0Y7QUV1R0E7RUFFRSxtQkFBQTtFQUNBLGdDQUFBO0FGckdGO0FFNkdBO0VBRUUscUJBQUE7RUFDQSxxQkMySnNDO0FIdFF4QztBRWlIQTtFQUVFLGdCQUFBO0FGL0dGO0FFdUhBO0VBQ0UsVUFBQTtBRnBIRjtBRXVIQTs7Ozs7RUFLRSxTQUFBO0VBQ0Esb0JBQUE7RUU1UEUsa0JBQUE7RUY4UEYsb0JBQUE7QUZwSEY7QUV1SEE7O0VBRUUsaUJBQUE7QUZwSEY7QUV1SEE7O0VBRUUsb0JBQUE7QUZwSEY7QUUwSEE7RUFDRSxlQUFBO0FGdkhGO0FFNkhBO0VBQ0UsaUJBQUE7QUYxSEY7QUVpSUE7Ozs7RUFJRSwwQkFBQTtBRjlIRjtBRXVJSTs7OztFQUNFLGVBQUE7QUZqSU47QUV1SUE7Ozs7RUFJRSxVQUFBO0VBQ0Esa0JBQUE7QUZwSUY7QUV1SUE7O0VBRUUsc0JBQUE7RUFDQSxVQUFBO0FGcElGO0FFd0lBO0VBQ0UsY0FBQTtFQUVBLGdCQUFBO0FGdElGO0FFeUlBO0VBTUUsWUFBQTtFQUVBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBRjVJRjtBRWlKQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFRW5TSSxpQkF0Q2E7RUYyVWpCLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FGOUlGO0FFaUpBO0VBQ0Usd0JBQUE7QUY5SUY7QUVrSkE7O0VBRUUsWUFBQTtBRi9JRjtBRWtKQTtFQUtFLG9CQUFBO0VBQ0Esd0JBQUE7QUZuSkY7QUUwSkE7RUFDRSx3QkFBQTtBRnZKRjtBRStKQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtBRjVKRjtBRW1LQTtFQUNFLHFCQUFBO0FGaEtGO0FFbUtBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FGaEtGO0FFbUtBO0VBQ0UsYUFBQTtBRmhLRjtBRXFLQTtFQUNFLHdCQUFBO0FGbEtGO0FNOVRBO0VBQXFCLG1DQUFBO0FOa1VyQjtBTWpVQTtFQUFxQiw4QkFBQTtBTnFVckI7QU1wVUE7RUFBcUIsaUNBQUE7QU53VXJCO0FNdlVBO0VBQXFCLGlDQUFBO0FOMlVyQjtBTTFVQTtFQUFxQixzQ0FBQTtBTjhVckI7QU03VUE7RUFBcUIsbUNBQUE7QU5pVnJCO0FPblZFO0VBQ0Usb0NBQUE7QVBzVko7QUs1VUU7OztFRUxJLG9DQUFBO0FQdVZOO0FPN1ZFO0VBQ0Usb0NBQUE7QVBnV0o7QUt0VkU7OztFRUxJLG9DQUFBO0FQaVdOO0FPdldFO0VBQ0Usb0NBQUE7QVAwV0o7QUtoV0U7OztFRUxJLG9DQUFBO0FQMldOO0FPalhFO0VBQ0Usb0NBQUE7QVBvWEo7QUsxV0U7OztFRUxJLG9DQUFBO0FQcVhOO0FPM1hFO0VBQ0Usb0NBQUE7QVA4WEo7QUtwWEU7OztFRUxJLG9DQUFBO0FQK1hOO0FPcllFO0VBQ0Usb0NBQUE7QVB3WUo7QUs5WEU7OztFRUxJLG9DQUFBO0FQeVlOO0FPL1lFO0VBQ0Usb0NBQUE7QVBrWko7QUt4WUU7OztFRUxJLG9DQUFBO0FQbVpOO0FPelpFO0VBQ0Usb0NBQUE7QVA0Wko7QUtsWkU7OztFRUxJLG9DQUFBO0FQNlpOO0FRNVpBO0VBQ0UsaUNBQUE7QVIrWkY7QVE1WkE7RUFDRSx3Q0FBQTtBUitaRjtBUzFhQTtFQUFrQixvQ0FBQTtBVDhhbEI7QVM3YUE7RUFBa0Isd0NBQUE7QVRpYmxCO0FTaGJBO0VBQWtCLDBDQUFBO0FUb2JsQjtBU25iQTtFQUFrQiwyQ0FBQTtBVHVibEI7QVN0YkE7RUFBa0IseUNBQUE7QVQwYmxCO0FTeGJBO0VBQW1CLG9CQUFBO0FUNGJuQjtBUzNiQTtFQUFtQix3QkFBQTtBVCtibkI7QVM5YkE7RUFBbUIsMEJBQUE7QVRrY25CO0FTamNBO0VBQW1CLDJCQUFBO0FUcWNuQjtBU3BjQTtFQUFtQix5QkFBQTtBVHdjbkI7QVNyY0U7RUFDRSxnQ0FBQTtBVHdjSjtBU3pjRTtFQUNFLGdDQUFBO0FUNGNKO0FTN2NFO0VBQ0UsZ0NBQUE7QVRnZEo7QVNqZEU7RUFDRSxnQ0FBQTtBVG9kSjtBU3JkRTtFQUNFLGdDQUFBO0FUd2RKO0FTemRFO0VBQ0UsZ0NBQUE7QVQ0ZEo7QVM3ZEU7RUFDRSxnQ0FBQTtBVGdlSjtBU2plRTtFQUNFLGdDQUFBO0FUb2VKO0FTaGVBO0VBQ0UsNkJBQUE7QVRtZUY7QVM1ZEE7RUFDRSxnQ0FBQTtBVCtkRjtBUzVkQTtFQUNFLGlDQUFBO0FUK2RGO0FTNWRBO0VBQ0UsMENBQUE7RUFDQSwyQ0FBQTtBVCtkRjtBUzVkQTtFQUNFLDJDQUFBO0VBQ0EsOENBQUE7QVQrZEY7QVM1ZEE7RUFDRSw4Q0FBQTtFQUNBLDZDQUFBO0FUK2RGO0FTNWRBO0VBQ0UsMENBQUE7RUFDQSw2Q0FBQTtBVCtkRjtBUzVkQTtFQUNFLGdDQUFBO0FUK2RGO0FTNWRBO0VBQ0UsNkJBQUE7QVQrZEY7QVM1ZEE7RUFDRSwrQkFBQTtBVCtkRjtBUzVkQTtFQUNFLDJCQUFBO0FUK2RGO0FVdmlCRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBVjBpQko7QVduaUJNO0VBQXdCLHdCQUFBO0FYdWlCOUI7QVd2aUJNO0VBQXdCLDBCQUFBO0FYMmlCOUI7QVczaUJNO0VBQXdCLGdDQUFBO0FYK2lCOUI7QVcvaUJNO0VBQXdCLHlCQUFBO0FYbWpCOUI7QVduakJNO0VBQXdCLHlCQUFBO0FYdWpCOUI7QVd2akJNO0VBQXdCLDZCQUFBO0FYMmpCOUI7QVczakJNO0VBQXdCLDhCQUFBO0FYK2pCOUI7QVcvakJNO0VBQXdCLHdCQUFBO0FYbWtCOUI7QVdua0JNO0VBQXdCLCtCQUFBO0FYdWtCOUI7QVl0aEJJO0VEakRFO0lBQXdCLHdCQUFBO0VYNGtCNUI7O0VXNWtCSTtJQUF3QiwwQkFBQTtFWGdsQjVCOztFV2hsQkk7SUFBd0IsZ0NBQUE7RVhvbEI1Qjs7RVdwbEJJO0lBQXdCLHlCQUFBO0VYd2xCNUI7O0VXeGxCSTtJQUF3Qix5QkFBQTtFWDRsQjVCOztFVzVsQkk7SUFBd0IsNkJBQUE7RVhnbUI1Qjs7RVdobUJJO0lBQXdCLDhCQUFBO0VYb21CNUI7O0VXcG1CSTtJQUF3Qix3QkFBQTtFWHdtQjVCOztFV3htQkk7SUFBd0IsK0JBQUE7RVg0bUI1QjtBQUNGO0FZNWpCSTtFRGpERTtJQUF3Qix3QkFBQTtFWGluQjVCOztFV2puQkk7SUFBd0IsMEJBQUE7RVhxbkI1Qjs7RVdybkJJO0lBQXdCLGdDQUFBO0VYeW5CNUI7O0VXem5CSTtJQUF3Qix5QkFBQTtFWDZuQjVCOztFVzduQkk7SUFBd0IseUJBQUE7RVhpb0I1Qjs7RVdqb0JJO0lBQXdCLDZCQUFBO0VYcW9CNUI7O0VXcm9CSTtJQUF3Qiw4QkFBQTtFWHlvQjVCOztFV3pvQkk7SUFBd0Isd0JBQUE7RVg2b0I1Qjs7RVc3b0JJO0lBQXdCLCtCQUFBO0VYaXBCNUI7QUFDRjtBWWptQkk7RURqREU7SUFBd0Isd0JBQUE7RVhzcEI1Qjs7RVd0cEJJO0lBQXdCLDBCQUFBO0VYMHBCNUI7O0VXMXBCSTtJQUF3QixnQ0FBQTtFWDhwQjVCOztFVzlwQkk7SUFBd0IseUJBQUE7RVhrcUI1Qjs7RVdscUJJO0lBQXdCLHlCQUFBO0VYc3FCNUI7O0VXdHFCSTtJQUF3Qiw2QkFBQTtFWDBxQjVCOztFVzFxQkk7SUFBd0IsOEJBQUE7RVg4cUI1Qjs7RVc5cUJJO0lBQXdCLHdCQUFBO0VYa3JCNUI7O0VXbHJCSTtJQUF3QiwrQkFBQTtFWHNyQjVCO0FBQ0Y7QVl0b0JJO0VEakRFO0lBQXdCLHdCQUFBO0VYMnJCNUI7O0VXM3JCSTtJQUF3QiwwQkFBQTtFWCtyQjVCOztFVy9yQkk7SUFBd0IsZ0NBQUE7RVhtc0I1Qjs7RVduc0JJO0lBQXdCLHlCQUFBO0VYdXNCNUI7O0VXdnNCSTtJQUF3Qix5QkFBQTtFWDJzQjVCOztFVzNzQkk7SUFBd0IsNkJBQUE7RVgrc0I1Qjs7RVcvc0JJO0lBQXdCLDhCQUFBO0VYbXRCNUI7O0VXbnRCSTtJQUF3Qix3QkFBQTtFWHV0QjVCOztFV3Z0Qkk7SUFBd0IsK0JBQUE7RVgydEI1QjtBQUNGO0FXbHRCQTtFQUVJO0lBQXFCLHdCQUFBO0VYb3RCdkI7O0VXcHRCRTtJQUFxQiwwQkFBQTtFWHd0QnZCOztFV3h0QkU7SUFBcUIsZ0NBQUE7RVg0dEJ2Qjs7RVc1dEJFO0lBQXFCLHlCQUFBO0VYZ3VCdkI7O0VXaHVCRTtJQUFxQix5QkFBQTtFWG91QnZCOztFV3B1QkU7SUFBcUIsNkJBQUE7RVh3dUJ2Qjs7RVd4dUJFO0lBQXFCLDhCQUFBO0VYNHVCdkI7O0VXNXVCRTtJQUFxQix3QkFBQTtFWGd2QnZCOztFV2h2QkU7SUFBcUIsK0JBQUE7RVhvdkJ2QjtBQUNGO0FhMXdCQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QWI0d0JGO0FhMXdCRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FiNHdCSjtBYXp3QkU7Ozs7O0VBS0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QWIyd0JKO0FhbHdCSTtFQUNFLDJCQUFBO0FicXdCTjtBYXR3Qkk7RUFDRSxtQkFBQTtBYnl3Qk47QWExd0JJO0VBQ0UsZ0JBQUE7QWI2d0JOO0FhOXdCSTtFQUNFLGlCQUFBO0FiaXhCTjtBYzF5Qkk7RUFBZ0MsOEJBQUE7QWQ4eUJwQztBYzd5Qkk7RUFBZ0MsaUNBQUE7QWRpekJwQztBY2h6Qkk7RUFBZ0Msc0NBQUE7QWRvekJwQztBY256Qkk7RUFBZ0MseUNBQUE7QWR1ekJwQztBY3J6Qkk7RUFBOEIsMEJBQUE7QWR5ekJsQztBY3h6Qkk7RUFBOEIsNEJBQUE7QWQ0ekJsQztBYzN6Qkk7RUFBOEIsa0NBQUE7QWQrekJsQztBYzl6Qkk7RUFBOEIseUJBQUE7QWRrMEJsQztBY2owQkk7RUFBOEIsdUJBQUE7QWRxMEJsQztBY3AwQkk7RUFBOEIsdUJBQUE7QWR3MEJsQztBY3YwQkk7RUFBOEIseUJBQUE7QWQyMEJsQztBYzEwQkk7RUFBOEIseUJBQUE7QWQ4MEJsQztBYzUwQkk7RUFBb0Msc0NBQUE7QWRnMUJ4QztBYy8wQkk7RUFBb0Msb0NBQUE7QWRtMUJ4QztBY2wxQkk7RUFBb0Msa0NBQUE7QWRzMUJ4QztBY3IxQkk7RUFBb0MseUNBQUE7QWR5MUJ4QztBY3gxQkk7RUFBb0Msd0NBQUE7QWQ0MUJ4QztBYzExQkk7RUFBaUMsa0NBQUE7QWQ4MUJyQztBYzcxQkk7RUFBaUMsZ0NBQUE7QWRpMkJyQztBY2gyQkk7RUFBaUMsOEJBQUE7QWRvMkJyQztBY24yQkk7RUFBaUMsZ0NBQUE7QWR1MkJyQztBY3QyQkk7RUFBaUMsK0JBQUE7QWQwMkJyQztBY3gyQkk7RUFBa0Msb0NBQUE7QWQ0MkJ0QztBYzMyQkk7RUFBa0Msa0NBQUE7QWQrMkJ0QztBYzkyQkk7RUFBa0MsZ0NBQUE7QWRrM0J0QztBY2ozQkk7RUFBa0MsdUNBQUE7QWRxM0J0QztBY3AzQkk7RUFBa0Msc0NBQUE7QWR3M0J0QztBY3YzQkk7RUFBa0MsaUNBQUE7QWQyM0J0QztBY3ozQkk7RUFBZ0MsMkJBQUE7QWQ2M0JwQztBYzUzQkk7RUFBZ0MsaUNBQUE7QWRnNEJwQztBYy8zQkk7RUFBZ0MsK0JBQUE7QWRtNEJwQztBY2w0Qkk7RUFBZ0MsNkJBQUE7QWRzNEJwQztBY3I0Qkk7RUFBZ0MsK0JBQUE7QWR5NEJwQztBY3g0Qkk7RUFBZ0MsOEJBQUE7QWQ0NEJwQztBWWg0Qkk7RUVsREE7SUFBZ0MsOEJBQUE7RWR1N0JsQzs7RWN0N0JFO0lBQWdDLGlDQUFBO0VkMDdCbEM7O0VjejdCRTtJQUFnQyxzQ0FBQTtFZDY3QmxDOztFYzU3QkU7SUFBZ0MseUNBQUE7RWRnOEJsQzs7RWM5N0JFO0lBQThCLDBCQUFBO0VkazhCaEM7O0VjajhCRTtJQUE4Qiw0QkFBQTtFZHE4QmhDOztFY3A4QkU7SUFBOEIsa0NBQUE7RWR3OEJoQzs7RWN2OEJFO0lBQThCLHlCQUFBO0VkMjhCaEM7O0VjMThCRTtJQUE4Qix1QkFBQTtFZDg4QmhDOztFYzc4QkU7SUFBOEIsdUJBQUE7RWRpOUJoQzs7RWNoOUJFO0lBQThCLHlCQUFBO0VkbzlCaEM7O0VjbjlCRTtJQUE4Qix5QkFBQTtFZHU5QmhDOztFY3I5QkU7SUFBb0Msc0NBQUE7RWR5OUJ0Qzs7RWN4OUJFO0lBQW9DLG9DQUFBO0VkNDlCdEM7O0VjMzlCRTtJQUFvQyxrQ0FBQTtFZCs5QnRDOztFYzk5QkU7SUFBb0MseUNBQUE7RWRrK0J0Qzs7RWNqK0JFO0lBQW9DLHdDQUFBO0VkcStCdEM7O0VjbitCRTtJQUFpQyxrQ0FBQTtFZHUrQm5DOztFY3QrQkU7SUFBaUMsZ0NBQUE7RWQwK0JuQzs7RWN6K0JFO0lBQWlDLDhCQUFBO0VkNitCbkM7O0VjNStCRTtJQUFpQyxnQ0FBQTtFZGcvQm5DOztFYy8rQkU7SUFBaUMsK0JBQUE7RWRtL0JuQzs7RWNqL0JFO0lBQWtDLG9DQUFBO0VkcS9CcEM7O0VjcC9CRTtJQUFrQyxrQ0FBQTtFZHcvQnBDOztFY3YvQkU7SUFBa0MsZ0NBQUE7RWQyL0JwQzs7RWMxL0JFO0lBQWtDLHVDQUFBO0VkOC9CcEM7O0VjNy9CRTtJQUFrQyxzQ0FBQTtFZGlnQ3BDOztFY2hnQ0U7SUFBa0MsaUNBQUE7RWRvZ0NwQzs7RWNsZ0NFO0lBQWdDLDJCQUFBO0Vkc2dDbEM7O0VjcmdDRTtJQUFnQyxpQ0FBQTtFZHlnQ2xDOztFY3hnQ0U7SUFBZ0MsK0JBQUE7RWQ0Z0NsQzs7RWMzZ0NFO0lBQWdDLDZCQUFBO0VkK2dDbEM7O0VjOWdDRTtJQUFnQywrQkFBQTtFZGtoQ2xDOztFY2poQ0U7SUFBZ0MsOEJBQUE7RWRxaENsQztBQUNGO0FZMWdDSTtFRWxEQTtJQUFnQyw4QkFBQTtFZGdrQ2xDOztFYy9qQ0U7SUFBZ0MsaUNBQUE7RWRta0NsQzs7RWNsa0NFO0lBQWdDLHNDQUFBO0Vkc2tDbEM7O0VjcmtDRTtJQUFnQyx5Q0FBQTtFZHlrQ2xDOztFY3ZrQ0U7SUFBOEIsMEJBQUE7RWQya0NoQzs7RWMxa0NFO0lBQThCLDRCQUFBO0VkOGtDaEM7O0VjN2tDRTtJQUE4QixrQ0FBQTtFZGlsQ2hDOztFY2hsQ0U7SUFBOEIseUJBQUE7RWRvbENoQzs7RWNubENFO0lBQThCLHVCQUFBO0VkdWxDaEM7O0VjdGxDRTtJQUE4Qix1QkFBQTtFZDBsQ2hDOztFY3psQ0U7SUFBOEIseUJBQUE7RWQ2bENoQzs7RWM1bENFO0lBQThCLHlCQUFBO0VkZ21DaEM7O0VjOWxDRTtJQUFvQyxzQ0FBQTtFZGttQ3RDOztFY2ptQ0U7SUFBb0Msb0NBQUE7RWRxbUN0Qzs7RWNwbUNFO0lBQW9DLGtDQUFBO0Vkd21DdEM7O0Vjdm1DRTtJQUFvQyx5Q0FBQTtFZDJtQ3RDOztFYzFtQ0U7SUFBb0Msd0NBQUE7RWQ4bUN0Qzs7RWM1bUNFO0lBQWlDLGtDQUFBO0VkZ25DbkM7O0VjL21DRTtJQUFpQyxnQ0FBQTtFZG1uQ25DOztFY2xuQ0U7SUFBaUMsOEJBQUE7RWRzbkNuQzs7RWNybkNFO0lBQWlDLGdDQUFBO0VkeW5DbkM7O0VjeG5DRTtJQUFpQywrQkFBQTtFZDRuQ25DOztFYzFuQ0U7SUFBa0Msb0NBQUE7RWQ4bkNwQzs7RWM3bkNFO0lBQWtDLGtDQUFBO0VkaW9DcEM7O0VjaG9DRTtJQUFrQyxnQ0FBQTtFZG9vQ3BDOztFY25vQ0U7SUFBa0MsdUNBQUE7RWR1b0NwQzs7RWN0b0NFO0lBQWtDLHNDQUFBO0VkMG9DcEM7O0Vjem9DRTtJQUFrQyxpQ0FBQTtFZDZvQ3BDOztFYzNvQ0U7SUFBZ0MsMkJBQUE7RWQrb0NsQzs7RWM5b0NFO0lBQWdDLGlDQUFBO0Vka3BDbEM7O0VjanBDRTtJQUFnQywrQkFBQTtFZHFwQ2xDOztFY3BwQ0U7SUFBZ0MsNkJBQUE7RWR3cENsQzs7RWN2cENFO0lBQWdDLCtCQUFBO0VkMnBDbEM7O0VjMXBDRTtJQUFnQyw4QkFBQTtFZDhwQ2xDO0FBQ0Y7QVlucENJO0VFbERBO0lBQWdDLDhCQUFBO0VkeXNDbEM7O0VjeHNDRTtJQUFnQyxpQ0FBQTtFZDRzQ2xDOztFYzNzQ0U7SUFBZ0Msc0NBQUE7RWQrc0NsQzs7RWM5c0NFO0lBQWdDLHlDQUFBO0Vka3RDbEM7O0VjaHRDRTtJQUE4QiwwQkFBQTtFZG90Q2hDOztFY250Q0U7SUFBOEIsNEJBQUE7RWR1dENoQzs7RWN0dENFO0lBQThCLGtDQUFBO0VkMHRDaEM7O0VjenRDRTtJQUE4Qix5QkFBQTtFZDZ0Q2hDOztFYzV0Q0U7SUFBOEIsdUJBQUE7RWRndUNoQzs7RWMvdENFO0lBQThCLHVCQUFBO0VkbXVDaEM7O0VjbHVDRTtJQUE4Qix5QkFBQTtFZHN1Q2hDOztFY3J1Q0U7SUFBOEIseUJBQUE7RWR5dUNoQzs7RWN2dUNFO0lBQW9DLHNDQUFBO0VkMnVDdEM7O0VjMXVDRTtJQUFvQyxvQ0FBQTtFZDh1Q3RDOztFYzd1Q0U7SUFBb0Msa0NBQUE7RWRpdkN0Qzs7RWNodkNFO0lBQW9DLHlDQUFBO0Vkb3ZDdEM7O0VjbnZDRTtJQUFvQyx3Q0FBQTtFZHV2Q3RDOztFY3J2Q0U7SUFBaUMsa0NBQUE7RWR5dkNuQzs7RWN4dkNFO0lBQWlDLGdDQUFBO0VkNHZDbkM7O0VjM3ZDRTtJQUFpQyw4QkFBQTtFZCt2Q25DOztFYzl2Q0U7SUFBaUMsZ0NBQUE7RWRrd0NuQzs7RWNqd0NFO0lBQWlDLCtCQUFBO0VkcXdDbkM7O0VjbndDRTtJQUFrQyxvQ0FBQTtFZHV3Q3BDOztFY3R3Q0U7SUFBa0Msa0NBQUE7RWQwd0NwQzs7RWN6d0NFO0lBQWtDLGdDQUFBO0VkNndDcEM7O0VjNXdDRTtJQUFrQyx1Q0FBQTtFZGd4Q3BDOztFYy93Q0U7SUFBa0Msc0NBQUE7RWRteENwQzs7RWNseENFO0lBQWtDLGlDQUFBO0Vkc3hDcEM7O0VjcHhDRTtJQUFnQywyQkFBQTtFZHd4Q2xDOztFY3Z4Q0U7SUFBZ0MsaUNBQUE7RWQyeENsQzs7RWMxeENFO0lBQWdDLCtCQUFBO0VkOHhDbEM7O0VjN3hDRTtJQUFnQyw2QkFBQTtFZGl5Q2xDOztFY2h5Q0U7SUFBZ0MsK0JBQUE7RWRveUNsQzs7RWNueUNFO0lBQWdDLDhCQUFBO0VkdXlDbEM7QUFDRjtBWTV4Q0k7RUVsREE7SUFBZ0MsOEJBQUE7RWRrMUNsQzs7RWNqMUNFO0lBQWdDLGlDQUFBO0VkcTFDbEM7O0VjcDFDRTtJQUFnQyxzQ0FBQTtFZHcxQ2xDOztFY3YxQ0U7SUFBZ0MseUNBQUE7RWQyMUNsQzs7RWN6MUNFO0lBQThCLDBCQUFBO0VkNjFDaEM7O0VjNTFDRTtJQUE4Qiw0QkFBQTtFZGcyQ2hDOztFYy8xQ0U7SUFBOEIsa0NBQUE7RWRtMkNoQzs7RWNsMkNFO0lBQThCLHlCQUFBO0VkczJDaEM7O0VjcjJDRTtJQUE4Qix1QkFBQTtFZHkyQ2hDOztFY3gyQ0U7SUFBOEIsdUJBQUE7RWQ0MkNoQzs7RWMzMkNFO0lBQThCLHlCQUFBO0VkKzJDaEM7O0VjOTJDRTtJQUE4Qix5QkFBQTtFZGszQ2hDOztFY2gzQ0U7SUFBb0Msc0NBQUE7RWRvM0N0Qzs7RWNuM0NFO0lBQW9DLG9DQUFBO0VkdTNDdEM7O0VjdDNDRTtJQUFvQyxrQ0FBQTtFZDAzQ3RDOztFY3ozQ0U7SUFBb0MseUNBQUE7RWQ2M0N0Qzs7RWM1M0NFO0lBQW9DLHdDQUFBO0VkZzRDdEM7O0VjOTNDRTtJQUFpQyxrQ0FBQTtFZGs0Q25DOztFY2o0Q0U7SUFBaUMsZ0NBQUE7RWRxNENuQzs7RWNwNENFO0lBQWlDLDhCQUFBO0VkdzRDbkM7O0VjdjRDRTtJQUFpQyxnQ0FBQTtFZDI0Q25DOztFYzE0Q0U7SUFBaUMsK0JBQUE7RWQ4NENuQzs7RWM1NENFO0lBQWtDLG9DQUFBO0VkZzVDcEM7O0VjLzRDRTtJQUFrQyxrQ0FBQTtFZG01Q3BDOztFY2w1Q0U7SUFBa0MsZ0NBQUE7RWRzNUNwQzs7RWNyNUNFO0lBQWtDLHVDQUFBO0VkeTVDcEM7O0VjeDVDRTtJQUFrQyxzQ0FBQTtFZDQ1Q3BDOztFYzM1Q0U7SUFBa0MsaUNBQUE7RWQrNUNwQzs7RWM3NUNFO0lBQWdDLDJCQUFBO0VkaTZDbEM7O0VjaDZDRTtJQUFnQyxpQ0FBQTtFZG82Q2xDOztFY242Q0U7SUFBZ0MsK0JBQUE7RWR1NkNsQzs7RWN0NkNFO0lBQWdDLDZCQUFBO0VkMDZDbEM7O0VjejZDRTtJQUFnQywrQkFBQTtFZDY2Q2xDOztFYzU2Q0U7SUFBZ0MsOEJBQUE7RWRnN0NsQztBQUNGO0FlMzlDSTtFQUF3QixzQkFBQTtBZjg5QzVCO0FlNzlDSTtFQUF3Qix1QkFBQTtBZmkrQzVCO0FlaCtDSTtFQUF3QixzQkFBQTtBZm8rQzVCO0FZaDdDSTtFR3REQTtJQUF3QixzQkFBQTtFZjIrQzFCOztFZTErQ0U7SUFBd0IsdUJBQUE7RWY4K0MxQjs7RWU3K0NFO0lBQXdCLHNCQUFBO0VmaS9DMUI7QUFDRjtBWTk3Q0k7RUd0REE7SUFBd0Isc0JBQUE7RWZ3L0MxQjs7RWV2L0NFO0lBQXdCLHVCQUFBO0VmMi9DMUI7O0VlMS9DRTtJQUF3QixzQkFBQTtFZjgvQzFCO0FBQ0Y7QVkzOENJO0VHdERBO0lBQXdCLHNCQUFBO0VmcWdEMUI7O0VlcGdERTtJQUF3Qix1QkFBQTtFZndnRDFCOztFZXZnREU7SUFBd0Isc0JBQUE7RWYyZ0QxQjtBQUNGO0FZeDlDSTtFR3REQTtJQUF3QixzQkFBQTtFZmtoRDFCOztFZWpoREU7SUFBd0IsdUJBQUE7RWZxaEQxQjs7RWVwaERFO0lBQXdCLHNCQUFBO0Vmd2hEMUI7QUFDRjtBZ0I5aERFO0VBQXlCLG1DQUFBO0tBQUEsZ0NBQUE7TUFBQSwrQkFBQTtVQUFBLDJCQUFBO0FoQmlpRDNCO0FnQmppREU7RUFBeUIsb0NBQUE7S0FBQSxpQ0FBQTtNQUFBLGdDQUFBO1VBQUEsNEJBQUE7QWhCcWlEM0I7QWdCcmlERTtFQUF5QixvQ0FBQTtLQUFBLGlDQUFBO01BQUEsZ0NBQUE7VUFBQSw0QkFBQTtBaEJ5aUQzQjtBaUJ6aURFO0VBQXNCLHlCQUFBO0FqQjZpRHhCO0FpQjdpREU7RUFBc0IsMkJBQUE7QWpCaWpEeEI7QWtCaGpERTtFQUF5QiwyQkFBQTtBbEJvakQzQjtBa0JwakRFO0VBQXlCLDZCQUFBO0FsQndqRDNCO0FrQnhqREU7RUFBeUIsNkJBQUE7QWxCNGpEM0I7QWtCNWpERTtFQUF5QiwwQkFBQTtBbEJna0QzQjtBa0Joa0RFO0VBQXlCLDJCQUFBO0FsQm9rRDNCO0FrQi9qREE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsYWZncUJrQztBSGs2QnBDO0FrQi9qREE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYWZ3cEJrQztBSDA2QnBDO0FrQjlqREU7RUFERjtJQUVJLGdCQUFBO0lBQ0EsTUFBQTtJQUNBLGFmZ3BCZ0M7RUhrN0JsQztBQUNGO0FtQjVsREE7RUNFRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FwQjhsREY7QW9CcGxERTtFQUVFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBcEJzbERKO0FxQm5uREE7RUFBYSw4REFBQTtBckJ1bkRiO0FxQnRuREE7RUFBVSx3REFBQTtBckIwbkRWO0FxQnpuREE7RUFBYSx1REFBQTtBckI2bkRiO0FxQjVuREE7RUFBZSwyQkFBQTtBckJnb0RmO0FzQi9uREk7RUFBdUIscUJBQUE7QXRCbW9EM0I7QXNCbm9ESTtFQUF1QixxQkFBQTtBdEJ1b0QzQjtBc0J2b0RJO0VBQXVCLHFCQUFBO0F0QjJvRDNCO0FzQjNvREk7RUFBdUIsc0JBQUE7QXRCK29EM0I7QXNCL29ESTtFQUF1QixzQkFBQTtBdEJtcEQzQjtBc0JucERJO0VBQXVCLHNCQUFBO0F0QnVwRDNCO0FzQnZwREk7RUFBdUIsc0JBQUE7QXRCMnBEM0I7QXNCM3BESTtFQUF1QixzQkFBQTtBdEIrcEQzQjtBc0IvcERJO0VBQXVCLHVCQUFBO0F0Qm1xRDNCO0FzQm5xREk7RUFBdUIsdUJBQUE7QXRCdXFEM0I7QXNCbnFEQTtFQUFVLDBCQUFBO0F0QnVxRFY7QXNCdHFEQTtFQUFVLDJCQUFBO0F0QjBxRFY7QXNCdHFEQTtFQUFjLDJCQUFBO0F0QjBxRGQ7QXNCenFEQTtFQUFjLDRCQUFBO0F0QjZxRGQ7QXNCM3FEQTtFQUFVLHVCQUFBO0F0QitxRFY7QXNCOXFEQTtFQUFVLHdCQUFBO0F0QmtyRFY7QXVCM3JEUTtFQUFnQyxvQkFBQTtBdkIrckR4QztBdUI5ckRROztFQUVFLHdCQUFBO0F2QmlzRFY7QXVCL3JEUTs7RUFFRSwwQkFBQTtBdkJrc0RWO0F1QmhzRFE7O0VBRUUsMkJBQUE7QXZCbXNEVjtBdUJqc0RROztFQUVFLHlCQUFBO0F2Qm9zRFY7QXVCbnREUTtFQUFnQywwQkFBQTtBdkJ1dER4QztBdUJ0dERROztFQUVFLDhCQUFBO0F2Qnl0RFY7QXVCdnREUTs7RUFFRSxnQ0FBQTtBdkIwdERWO0F1Qnh0RFE7O0VBRUUsaUNBQUE7QXZCMnREVjtBdUJ6dERROztFQUVFLCtCQUFBO0F2QjR0RFY7QXVCM3VEUTtFQUFnQyx5QkFBQTtBdkIrdUR4QztBdUI5dURROztFQUVFLDZCQUFBO0F2Qml2RFY7QXVCL3VEUTs7RUFFRSwrQkFBQTtBdkJrdkRWO0F1Qmh2RFE7O0VBRUUsZ0NBQUE7QXZCbXZEVjtBdUJqdkRROztFQUVFLDhCQUFBO0F2Qm92RFY7QXVCbndEUTtFQUFnQyx1QkFBQTtBdkJ1d0R4QztBdUJ0d0RROztFQUVFLDJCQUFBO0F2Qnl3RFY7QXVCdndEUTs7RUFFRSw2QkFBQTtBdkIwd0RWO0F1Qnh3RFE7O0VBRUUsOEJBQUE7QXZCMndEVjtBdUJ6d0RROztFQUVFLDRCQUFBO0F2QjR3RFY7QXVCM3hEUTtFQUFnQyx5QkFBQTtBdkIreER4QztBdUI5eERROztFQUVFLDZCQUFBO0F2Qml5RFY7QXVCL3hEUTs7RUFFRSwrQkFBQTtBdkJreURWO0F1Qmh5RFE7O0VBRUUsZ0NBQUE7QXZCbXlEVjtBdUJqeURROztFQUVFLDhCQUFBO0F2Qm95RFY7QXVCbnpEUTtFQUFnQyx1QkFBQTtBdkJ1ekR4QztBdUJ0ekRROztFQUVFLDJCQUFBO0F2Qnl6RFY7QXVCdnpEUTs7RUFFRSw2QkFBQTtBdkIwekRWO0F1Qnh6RFE7O0VBRUUsOEJBQUE7QXZCMnpEVjtBdUJ6ekRROztFQUVFLDRCQUFBO0F2QjR6RFY7QXVCMzBEUTtFQUFnQyxxQkFBQTtBdkIrMER4QztBdUI5MERROztFQUVFLHlCQUFBO0F2QmkxRFY7QXVCLzBEUTs7RUFFRSwyQkFBQTtBdkJrMURWO0F1QmgxRFE7O0VBRUUsNEJBQUE7QXZCbTFEVjtBdUJqMURROztFQUVFLDBCQUFBO0F2Qm8xRFY7QXVCbjJEUTtFQUFnQywyQkFBQTtBdkJ1MkR4QztBdUJ0MkRROztFQUVFLCtCQUFBO0F2QnkyRFY7QXVCdjJEUTs7RUFFRSxpQ0FBQTtBdkIwMkRWO0F1QngyRFE7O0VBRUUsa0NBQUE7QXZCMjJEVjtBdUJ6MkRROztFQUVFLGdDQUFBO0F2QjQyRFY7QXVCMzNEUTtFQUFnQywwQkFBQTtBdkIrM0R4QztBdUI5M0RROztFQUVFLDhCQUFBO0F2Qmk0RFY7QXVCLzNEUTs7RUFFRSxnQ0FBQTtBdkJrNERWO0F1Qmg0RFE7O0VBRUUsaUNBQUE7QXZCbTREVjtBdUJqNERROztFQUVFLCtCQUFBO0F2Qm80RFY7QXVCbjVEUTtFQUFnQyx3QkFBQTtBdkJ1NUR4QztBdUJ0NURROztFQUVFLDRCQUFBO0F2Qnk1RFY7QXVCdjVEUTs7RUFFRSw4QkFBQTtBdkIwNURWO0F1Qng1RFE7O0VBRUUsK0JBQUE7QXZCMjVEVjtBdUJ6NURROztFQUVFLDZCQUFBO0F2QjQ1RFY7QXVCMzZEUTtFQUFnQywwQkFBQTtBdkIrNkR4QztBdUI5NkRROztFQUVFLDhCQUFBO0F2Qmk3RFY7QXVCLzZEUTs7RUFFRSxnQ0FBQTtBdkJrN0RWO0F1Qmg3RFE7O0VBRUUsaUNBQUE7QXZCbTdEVjtBdUJqN0RROztFQUVFLCtCQUFBO0F2Qm83RFY7QXVCbjhEUTtFQUFnQyx3QkFBQTtBdkJ1OER4QztBdUJ0OERROztFQUVFLDRCQUFBO0F2Qnk4RFY7QXVCdjhEUTs7RUFFRSw4QkFBQTtBdkIwOERWO0F1Qng4RFE7O0VBRUUsK0JBQUE7QXZCMjhEVjtBdUJ6OERROztFQUVFLDZCQUFBO0F2QjQ4RFY7QXVCcDhEUTtFQUF3QiwyQkFBQTtBdkJ3OERoQztBdUJ2OERROztFQUVFLCtCQUFBO0F2QjA4RFY7QXVCeDhEUTs7RUFFRSxpQ0FBQTtBdkIyOERWO0F1Qno4RFE7O0VBRUUsa0NBQUE7QXZCNDhEVjtBdUIxOERROztFQUVFLGdDQUFBO0F2QjY4RFY7QXVCNTlEUTtFQUF3QiwwQkFBQTtBdkJnK0RoQztBdUIvOURROztFQUVFLDhCQUFBO0F2QmsrRFY7QXVCaCtEUTs7RUFFRSxnQ0FBQTtBdkJtK0RWO0F1QmorRFE7O0VBRUUsaUNBQUE7QXZCbytEVjtBdUJsK0RROztFQUVFLCtCQUFBO0F2QnErRFY7QXVCcC9EUTtFQUF3Qix3QkFBQTtBdkJ3L0RoQztBdUJ2L0RROztFQUVFLDRCQUFBO0F2QjAvRFY7QXVCeC9EUTs7RUFFRSw4QkFBQTtBdkIyL0RWO0F1QnovRFE7O0VBRUUsK0JBQUE7QXZCNC9EVjtBdUIxL0RROztFQUVFLDZCQUFBO0F2QjYvRFY7QXVCNWdFUTtFQUF3QiwwQkFBQTtBdkJnaEVoQztBdUIvZ0VROztFQUVFLDhCQUFBO0F2QmtoRVY7QXVCaGhFUTs7RUFFRSxnQ0FBQTtBdkJtaEVWO0F1QmpoRVE7O0VBRUUsaUNBQUE7QXZCb2hFVjtBdUJsaEVROztFQUVFLCtCQUFBO0F2QnFoRVY7QXVCcGlFUTtFQUF3Qix3QkFBQTtBdkJ3aUVoQztBdUJ2aUVROztFQUVFLDRCQUFBO0F2QjBpRVY7QXVCeGlFUTs7RUFFRSw4QkFBQTtBdkIyaUVWO0F1QnppRVE7O0VBRUUsK0JBQUE7QXZCNGlFVjtBdUIxaUVROztFQUVFLDZCQUFBO0F2QjZpRVY7QXVCdmlFSTtFQUFtQix1QkFBQTtBdkIyaUV2QjtBdUIxaUVJOztFQUVFLDJCQUFBO0F2QjZpRU47QXVCM2lFSTs7RUFFRSw2QkFBQTtBdkI4aUVOO0F1QjVpRUk7O0VBRUUsOEJBQUE7QXZCK2lFTjtBdUI3aUVJOztFQUVFLDRCQUFBO0F2QmdqRU47QVl6akVJO0VXbERJO0lBQWdDLG9CQUFBO0V2QmduRXRDOztFdUIvbUVNOztJQUVFLHdCQUFBO0V2QmtuRVI7O0V1QmhuRU07O0lBRUUsMEJBQUE7RXZCbW5FUjs7RXVCam5FTTs7SUFFRSwyQkFBQTtFdkJvbkVSOztFdUJsbkVNOztJQUVFLHlCQUFBO0V2QnFuRVI7O0V1QnBvRU07SUFBZ0MsMEJBQUE7RXZCd29FdEM7O0V1QnZvRU07O0lBRUUsOEJBQUE7RXZCMG9FUjs7RXVCeG9FTTs7SUFFRSxnQ0FBQTtFdkIyb0VSOztFdUJ6b0VNOztJQUVFLGlDQUFBO0V2QjRvRVI7O0V1QjFvRU07O0lBRUUsK0JBQUE7RXZCNm9FUjs7RXVCNXBFTTtJQUFnQyx5QkFBQTtFdkJncUV0Qzs7RXVCL3BFTTs7SUFFRSw2QkFBQTtFdkJrcUVSOztFdUJocUVNOztJQUVFLCtCQUFBO0V2Qm1xRVI7O0V1QmpxRU07O0lBRUUsZ0NBQUE7RXZCb3FFUjs7RXVCbHFFTTs7SUFFRSw4QkFBQTtFdkJxcUVSOztFdUJwckVNO0lBQWdDLHVCQUFBO0V2QndyRXRDOztFdUJ2ckVNOztJQUVFLDJCQUFBO0V2QjByRVI7O0V1QnhyRU07O0lBRUUsNkJBQUE7RXZCMnJFUjs7RXVCenJFTTs7SUFFRSw4QkFBQTtFdkI0ckVSOztFdUIxckVNOztJQUVFLDRCQUFBO0V2QjZyRVI7O0V1QjVzRU07SUFBZ0MseUJBQUE7RXZCZ3RFdEM7O0V1Qi9zRU07O0lBRUUsNkJBQUE7RXZCa3RFUjs7RXVCaHRFTTs7SUFFRSwrQkFBQTtFdkJtdEVSOztFdUJqdEVNOztJQUVFLGdDQUFBO0V2Qm90RVI7O0V1Qmx0RU07O0lBRUUsOEJBQUE7RXZCcXRFUjs7RXVCcHVFTTtJQUFnQyx1QkFBQTtFdkJ3dUV0Qzs7RXVCdnVFTTs7SUFFRSwyQkFBQTtFdkIwdUVSOztFdUJ4dUVNOztJQUVFLDZCQUFBO0V2QjJ1RVI7O0V1Qnp1RU07O0lBRUUsOEJBQUE7RXZCNHVFUjs7RXVCMXVFTTs7SUFFRSw0QkFBQTtFdkI2dUVSOztFdUI1dkVNO0lBQWdDLHFCQUFBO0V2Qmd3RXRDOztFdUIvdkVNOztJQUVFLHlCQUFBO0V2Qmt3RVI7O0V1Qmh3RU07O0lBRUUsMkJBQUE7RXZCbXdFUjs7RXVCandFTTs7SUFFRSw0QkFBQTtFdkJvd0VSOztFdUJsd0VNOztJQUVFLDBCQUFBO0V2QnF3RVI7O0V1QnB4RU07SUFBZ0MsMkJBQUE7RXZCd3hFdEM7O0V1QnZ4RU07O0lBRUUsK0JBQUE7RXZCMHhFUjs7RXVCeHhFTTs7SUFFRSxpQ0FBQTtFdkIyeEVSOztFdUJ6eEVNOztJQUVFLGtDQUFBO0V2QjR4RVI7O0V1QjF4RU07O0lBRUUsZ0NBQUE7RXZCNnhFUjs7RXVCNXlFTTtJQUFnQywwQkFBQTtFdkJnekV0Qzs7RXVCL3lFTTs7SUFFRSw4QkFBQTtFdkJrekVSOztFdUJoekVNOztJQUVFLGdDQUFBO0V2Qm16RVI7O0V1Qmp6RU07O0lBRUUsaUNBQUE7RXZCb3pFUjs7RXVCbHpFTTs7SUFFRSwrQkFBQTtFdkJxekVSOztFdUJwMEVNO0lBQWdDLHdCQUFBO0V2QncwRXRDOztFdUJ2MEVNOztJQUVFLDRCQUFBO0V2QjAwRVI7O0V1QngwRU07O0lBRUUsOEJBQUE7RXZCMjBFUjs7RXVCejBFTTs7SUFFRSwrQkFBQTtFdkI0MEVSOztFdUIxMEVNOztJQUVFLDZCQUFBO0V2QjYwRVI7O0V1QjUxRU07SUFBZ0MsMEJBQUE7RXZCZzJFdEM7O0V1Qi8xRU07O0lBRUUsOEJBQUE7RXZCazJFUjs7RXVCaDJFTTs7SUFFRSxnQ0FBQTtFdkJtMkVSOztFdUJqMkVNOztJQUVFLGlDQUFBO0V2Qm8yRVI7O0V1QmwyRU07O0lBRUUsK0JBQUE7RXZCcTJFUjs7RXVCcDNFTTtJQUFnQyx3QkFBQTtFdkJ3M0V0Qzs7RXVCdjNFTTs7SUFFRSw0QkFBQTtFdkIwM0VSOztFdUJ4M0VNOztJQUVFLDhCQUFBO0V2QjIzRVI7O0V1QnozRU07O0lBRUUsK0JBQUE7RXZCNDNFUjs7RXVCMTNFTTs7SUFFRSw2QkFBQTtFdkI2M0VSOztFdUJyM0VNO0lBQXdCLDJCQUFBO0V2QnkzRTlCOztFdUJ4M0VNOztJQUVFLCtCQUFBO0V2QjIzRVI7O0V1QnozRU07O0lBRUUsaUNBQUE7RXZCNDNFUjs7RXVCMTNFTTs7SUFFRSxrQ0FBQTtFdkI2M0VSOztFdUIzM0VNOztJQUVFLGdDQUFBO0V2QjgzRVI7O0V1Qjc0RU07SUFBd0IsMEJBQUE7RXZCaTVFOUI7O0V1Qmg1RU07O0lBRUUsOEJBQUE7RXZCbTVFUjs7RXVCajVFTTs7SUFFRSxnQ0FBQTtFdkJvNUVSOztFdUJsNUVNOztJQUVFLGlDQUFBO0V2QnE1RVI7O0V1Qm41RU07O0lBRUUsK0JBQUE7RXZCczVFUjs7RXVCcjZFTTtJQUF3Qix3QkFBQTtFdkJ5NkU5Qjs7RXVCeDZFTTs7SUFFRSw0QkFBQTtFdkIyNkVSOztFdUJ6NkVNOztJQUVFLDhCQUFBO0V2QjQ2RVI7O0V1QjE2RU07O0lBRUUsK0JBQUE7RXZCNjZFUjs7RXVCMzZFTTs7SUFFRSw2QkFBQTtFdkI4NkVSOztFdUI3N0VNO0lBQXdCLDBCQUFBO0V2Qmk4RTlCOztFdUJoOEVNOztJQUVFLDhCQUFBO0V2Qm04RVI7O0V1Qmo4RU07O0lBRUUsZ0NBQUE7RXZCbzhFUjs7RXVCbDhFTTs7SUFFRSxpQ0FBQTtFdkJxOEVSOztFdUJuOEVNOztJQUVFLCtCQUFBO0V2QnM4RVI7O0V1QnI5RU07SUFBd0Isd0JBQUE7RXZCeTlFOUI7O0V1Qng5RU07O0lBRUUsNEJBQUE7RXZCMjlFUjs7RXVCejlFTTs7SUFFRSw4QkFBQTtFdkI0OUVSOztFdUIxOUVNOztJQUVFLCtCQUFBO0V2QjY5RVI7O0V1QjM5RU07O0lBRUUsNkJBQUE7RXZCODlFUjs7RXVCeDlFRTtJQUFtQix1QkFBQTtFdkI0OUVyQjs7RXVCMzlFRTs7SUFFRSwyQkFBQTtFdkI4OUVKOztFdUI1OUVFOztJQUVFLDZCQUFBO0V2Qis5RUo7O0V1Qjc5RUU7O0lBRUUsOEJBQUE7RXZCZytFSjs7RXVCOTlFRTs7SUFFRSw0QkFBQTtFdkJpK0VKO0FBQ0Y7QVkzK0VJO0VXbERJO0lBQWdDLG9CQUFBO0V2QmlpRnRDOztFdUJoaUZNOztJQUVFLHdCQUFBO0V2Qm1pRlI7O0V1QmppRk07O0lBRUUsMEJBQUE7RXZCb2lGUjs7RXVCbGlGTTs7SUFFRSwyQkFBQTtFdkJxaUZSOztFdUJuaUZNOztJQUVFLHlCQUFBO0V2QnNpRlI7O0V1QnJqRk07SUFBZ0MsMEJBQUE7RXZCeWpGdEM7O0V1QnhqRk07O0lBRUUsOEJBQUE7RXZCMmpGUjs7RXVCempGTTs7SUFFRSxnQ0FBQTtFdkI0akZSOztFdUIxakZNOztJQUVFLGlDQUFBO0V2QjZqRlI7O0V1QjNqRk07O0lBRUUsK0JBQUE7RXZCOGpGUjs7RXVCN2tGTTtJQUFnQyx5QkFBQTtFdkJpbEZ0Qzs7RXVCaGxGTTs7SUFFRSw2QkFBQTtFdkJtbEZSOztFdUJqbEZNOztJQUVFLCtCQUFBO0V2Qm9sRlI7O0V1QmxsRk07O0lBRUUsZ0NBQUE7RXZCcWxGUjs7RXVCbmxGTTs7SUFFRSw4QkFBQTtFdkJzbEZSOztFdUJybUZNO0lBQWdDLHVCQUFBO0V2QnltRnRDOztFdUJ4bUZNOztJQUVFLDJCQUFBO0V2QjJtRlI7O0V1QnptRk07O0lBRUUsNkJBQUE7RXZCNG1GUjs7RXVCMW1GTTs7SUFFRSw4QkFBQTtFdkI2bUZSOztFdUIzbUZNOztJQUVFLDRCQUFBO0V2QjhtRlI7O0V1QjduRk07SUFBZ0MseUJBQUE7RXZCaW9GdEM7O0V1QmhvRk07O0lBRUUsNkJBQUE7RXZCbW9GUjs7RXVCam9GTTs7SUFFRSwrQkFBQTtFdkJvb0ZSOztFdUJsb0ZNOztJQUVFLGdDQUFBO0V2QnFvRlI7O0V1Qm5vRk07O0lBRUUsOEJBQUE7RXZCc29GUjs7RXVCcnBGTTtJQUFnQyx1QkFBQTtFdkJ5cEZ0Qzs7RXVCeHBGTTs7SUFFRSwyQkFBQTtFdkIycEZSOztFdUJ6cEZNOztJQUVFLDZCQUFBO0V2QjRwRlI7O0V1QjFwRk07O0lBRUUsOEJBQUE7RXZCNnBGUjs7RXVCM3BGTTs7SUFFRSw0QkFBQTtFdkI4cEZSOztFdUI3cUZNO0lBQWdDLHFCQUFBO0V2QmlyRnRDOztFdUJockZNOztJQUVFLHlCQUFBO0V2Qm1yRlI7O0V1QmpyRk07O0lBRUUsMkJBQUE7RXZCb3JGUjs7RXVCbHJGTTs7SUFFRSw0QkFBQTtFdkJxckZSOztFdUJuckZNOztJQUVFLDBCQUFBO0V2QnNyRlI7O0V1QnJzRk07SUFBZ0MsMkJBQUE7RXZCeXNGdEM7O0V1QnhzRk07O0lBRUUsK0JBQUE7RXZCMnNGUjs7RXVCenNGTTs7SUFFRSxpQ0FBQTtFdkI0c0ZSOztFdUIxc0ZNOztJQUVFLGtDQUFBO0V2QjZzRlI7O0V1QjNzRk07O0lBRUUsZ0NBQUE7RXZCOHNGUjs7RXVCN3RGTTtJQUFnQywwQkFBQTtFdkJpdUZ0Qzs7RXVCaHVGTTs7SUFFRSw4QkFBQTtFdkJtdUZSOztFdUJqdUZNOztJQUVFLGdDQUFBO0V2Qm91RlI7O0V1Qmx1Rk07O0lBRUUsaUNBQUE7RXZCcXVGUjs7RXVCbnVGTTs7SUFFRSwrQkFBQTtFdkJzdUZSOztFdUJydkZNO0lBQWdDLHdCQUFBO0V2Qnl2RnRDOztFdUJ4dkZNOztJQUVFLDRCQUFBO0V2QjJ2RlI7O0V1Qnp2Rk07O0lBRUUsOEJBQUE7RXZCNHZGUjs7RXVCMXZGTTs7SUFFRSwrQkFBQTtFdkI2dkZSOztFdUIzdkZNOztJQUVFLDZCQUFBO0V2Qjh2RlI7O0V1Qjd3Rk07SUFBZ0MsMEJBQUE7RXZCaXhGdEM7O0V1Qmh4Rk07O0lBRUUsOEJBQUE7RXZCbXhGUjs7RXVCanhGTTs7SUFFRSxnQ0FBQTtFdkJveEZSOztFdUJseEZNOztJQUVFLGlDQUFBO0V2QnF4RlI7O0V1Qm54Rk07O0lBRUUsK0JBQUE7RXZCc3hGUjs7RXVCcnlGTTtJQUFnQyx3QkFBQTtFdkJ5eUZ0Qzs7RXVCeHlGTTs7SUFFRSw0QkFBQTtFdkIyeUZSOztFdUJ6eUZNOztJQUVFLDhCQUFBO0V2QjR5RlI7O0V1QjF5Rk07O0lBRUUsK0JBQUE7RXZCNnlGUjs7RXVCM3lGTTs7SUFFRSw2QkFBQTtFdkI4eUZSOztFdUJ0eUZNO0lBQXdCLDJCQUFBO0V2QjB5RjlCOztFdUJ6eUZNOztJQUVFLCtCQUFBO0V2QjR5RlI7O0V1QjF5Rk07O0lBRUUsaUNBQUE7RXZCNnlGUjs7RXVCM3lGTTs7SUFFRSxrQ0FBQTtFdkI4eUZSOztFdUI1eUZNOztJQUVFLGdDQUFBO0V2Qit5RlI7O0V1Qjl6Rk07SUFBd0IsMEJBQUE7RXZCazBGOUI7O0V1QmowRk07O0lBRUUsOEJBQUE7RXZCbzBGUjs7RXVCbDBGTTs7SUFFRSxnQ0FBQTtFdkJxMEZSOztFdUJuMEZNOztJQUVFLGlDQUFBO0V2QnMwRlI7O0V1QnAwRk07O0lBRUUsK0JBQUE7RXZCdTBGUjs7RXVCdDFGTTtJQUF3Qix3QkFBQTtFdkIwMUY5Qjs7RXVCejFGTTs7SUFFRSw0QkFBQTtFdkI0MUZSOztFdUIxMUZNOztJQUVFLDhCQUFBO0V2QjYxRlI7O0V1QjMxRk07O0lBRUUsK0JBQUE7RXZCODFGUjs7RXVCNTFGTTs7SUFFRSw2QkFBQTtFdkIrMUZSOztFdUI5MkZNO0lBQXdCLDBCQUFBO0V2QmszRjlCOztFdUJqM0ZNOztJQUVFLDhCQUFBO0V2Qm8zRlI7O0V1QmwzRk07O0lBRUUsZ0NBQUE7RXZCcTNGUjs7RXVCbjNGTTs7SUFFRSxpQ0FBQTtFdkJzM0ZSOztFdUJwM0ZNOztJQUVFLCtCQUFBO0V2QnUzRlI7O0V1QnQ0Rk07SUFBd0Isd0JBQUE7RXZCMDRGOUI7O0V1Qno0Rk07O0lBRUUsNEJBQUE7RXZCNDRGUjs7RXVCMTRGTTs7SUFFRSw4QkFBQTtFdkI2NEZSOztFdUIzNEZNOztJQUVFLCtCQUFBO0V2Qjg0RlI7O0V1QjU0Rk07O0lBRUUsNkJBQUE7RXZCKzRGUjs7RXVCejRGRTtJQUFtQix1QkFBQTtFdkI2NEZyQjs7RXVCNTRGRTs7SUFFRSwyQkFBQTtFdkIrNEZKOztFdUI3NEZFOztJQUVFLDZCQUFBO0V2Qmc1Rko7O0V1Qjk0RkU7O0lBRUUsOEJBQUE7RXZCaTVGSjs7RXVCLzRGRTs7SUFFRSw0QkFBQTtFdkJrNUZKO0FBQ0Y7QVk1NUZJO0VXbERJO0lBQWdDLG9CQUFBO0V2Qms5RnRDOztFdUJqOUZNOztJQUVFLHdCQUFBO0V2Qm85RlI7O0V1Qmw5Rk07O0lBRUUsMEJBQUE7RXZCcTlGUjs7RXVCbjlGTTs7SUFFRSwyQkFBQTtFdkJzOUZSOztFdUJwOUZNOztJQUVFLHlCQUFBO0V2QnU5RlI7O0V1QnQrRk07SUFBZ0MsMEJBQUE7RXZCMCtGdEM7O0V1QnorRk07O0lBRUUsOEJBQUE7RXZCNCtGUjs7RXVCMStGTTs7SUFFRSxnQ0FBQTtFdkI2K0ZSOztFdUIzK0ZNOztJQUVFLGlDQUFBO0V2QjgrRlI7O0V1QjUrRk07O0lBRUUsK0JBQUE7RXZCKytGUjs7RXVCOS9GTTtJQUFnQyx5QkFBQTtFdkJrZ0d0Qzs7RXVCamdHTTs7SUFFRSw2QkFBQTtFdkJvZ0dSOztFdUJsZ0dNOztJQUVFLCtCQUFBO0V2QnFnR1I7O0V1Qm5nR007O0lBRUUsZ0NBQUE7RXZCc2dHUjs7RXVCcGdHTTs7SUFFRSw4QkFBQTtFdkJ1Z0dSOztFdUJ0aEdNO0lBQWdDLHVCQUFBO0V2QjBoR3RDOztFdUJ6aEdNOztJQUVFLDJCQUFBO0V2QjRoR1I7O0V1QjFoR007O0lBRUUsNkJBQUE7RXZCNmhHUjs7RXVCM2hHTTs7SUFFRSw4QkFBQTtFdkI4aEdSOztFdUI1aEdNOztJQUVFLDRCQUFBO0V2QitoR1I7O0V1QjlpR007SUFBZ0MseUJBQUE7RXZCa2pHdEM7O0V1QmpqR007O0lBRUUsNkJBQUE7RXZCb2pHUjs7RXVCbGpHTTs7SUFFRSwrQkFBQTtFdkJxakdSOztFdUJuakdNOztJQUVFLGdDQUFBO0V2QnNqR1I7O0V1QnBqR007O0lBRUUsOEJBQUE7RXZCdWpHUjs7RXVCdGtHTTtJQUFnQyx1QkFBQTtFdkIwa0d0Qzs7RXVCemtHTTs7SUFFRSwyQkFBQTtFdkI0a0dSOztFdUIxa0dNOztJQUVFLDZCQUFBO0V2QjZrR1I7O0V1QjNrR007O0lBRUUsOEJBQUE7RXZCOGtHUjs7RXVCNWtHTTs7SUFFRSw0QkFBQTtFdkIra0dSOztFdUI5bEdNO0lBQWdDLHFCQUFBO0V2QmttR3RDOztFdUJqbUdNOztJQUVFLHlCQUFBO0V2Qm9tR1I7O0V1QmxtR007O0lBRUUsMkJBQUE7RXZCcW1HUjs7RXVCbm1HTTs7SUFFRSw0QkFBQTtFdkJzbUdSOztFdUJwbUdNOztJQUVFLDBCQUFBO0V2QnVtR1I7O0V1QnRuR007SUFBZ0MsMkJBQUE7RXZCMG5HdEM7O0V1QnpuR007O0lBRUUsK0JBQUE7RXZCNG5HUjs7RXVCMW5HTTs7SUFFRSxpQ0FBQTtFdkI2bkdSOztFdUIzbkdNOztJQUVFLGtDQUFBO0V2QjhuR1I7O0V1QjVuR007O0lBRUUsZ0NBQUE7RXZCK25HUjs7RXVCOW9HTTtJQUFnQywwQkFBQTtFdkJrcEd0Qzs7RXVCanBHTTs7SUFFRSw4QkFBQTtFdkJvcEdSOztFdUJscEdNOztJQUVFLGdDQUFBO0V2QnFwR1I7O0V1Qm5wR007O0lBRUUsaUNBQUE7RXZCc3BHUjs7RXVCcHBHTTs7SUFFRSwrQkFBQTtFdkJ1cEdSOztFdUJ0cUdNO0lBQWdDLHdCQUFBO0V2QjBxR3RDOztFdUJ6cUdNOztJQUVFLDRCQUFBO0V2QjRxR1I7O0V1QjFxR007O0lBRUUsOEJBQUE7RXZCNnFHUjs7RXVCM3FHTTs7SUFFRSwrQkFBQTtFdkI4cUdSOztFdUI1cUdNOztJQUVFLDZCQUFBO0V2QitxR1I7O0V1QjlyR007SUFBZ0MsMEJBQUE7RXZCa3NHdEM7O0V1QmpzR007O0lBRUUsOEJBQUE7RXZCb3NHUjs7RXVCbHNHTTs7SUFFRSxnQ0FBQTtFdkJxc0dSOztFdUJuc0dNOztJQUVFLGlDQUFBO0V2QnNzR1I7O0V1QnBzR007O0lBRUUsK0JBQUE7RXZCdXNHUjs7RXVCdHRHTTtJQUFnQyx3QkFBQTtFdkIwdEd0Qzs7RXVCenRHTTs7SUFFRSw0QkFBQTtFdkI0dEdSOztFdUIxdEdNOztJQUVFLDhCQUFBO0V2QjZ0R1I7O0V1QjN0R007O0lBRUUsK0JBQUE7RXZCOHRHUjs7RXVCNXRHTTs7SUFFRSw2QkFBQTtFdkIrdEdSOztFdUJ2dEdNO0lBQXdCLDJCQUFBO0V2QjJ0RzlCOztFdUIxdEdNOztJQUVFLCtCQUFBO0V2QjZ0R1I7O0V1QjN0R007O0lBRUUsaUNBQUE7RXZCOHRHUjs7RXVCNXRHTTs7SUFFRSxrQ0FBQTtFdkIrdEdSOztFdUI3dEdNOztJQUVFLGdDQUFBO0V2Qmd1R1I7O0V1Qi91R007SUFBd0IsMEJBQUE7RXZCbXZHOUI7O0V1Qmx2R007O0lBRUUsOEJBQUE7RXZCcXZHUjs7RXVCbnZHTTs7SUFFRSxnQ0FBQTtFdkJzdkdSOztFdUJwdkdNOztJQUVFLGlDQUFBO0V2QnV2R1I7O0V1QnJ2R007O0lBRUUsK0JBQUE7RXZCd3ZHUjs7RXVCdndHTTtJQUF3Qix3QkFBQTtFdkIyd0c5Qjs7RXVCMXdHTTs7SUFFRSw0QkFBQTtFdkI2d0dSOztFdUIzd0dNOztJQUVFLDhCQUFBO0V2Qjh3R1I7O0V1QjV3R007O0lBRUUsK0JBQUE7RXZCK3dHUjs7RXVCN3dHTTs7SUFFRSw2QkFBQTtFdkJneEdSOztFdUIveEdNO0lBQXdCLDBCQUFBO0V2Qm15RzlCOztFdUJseUdNOztJQUVFLDhCQUFBO0V2QnF5R1I7O0V1Qm55R007O0lBRUUsZ0NBQUE7RXZCc3lHUjs7RXVCcHlHTTs7SUFFRSxpQ0FBQTtFdkJ1eUdSOztFdUJyeUdNOztJQUVFLCtCQUFBO0V2Qnd5R1I7O0V1QnZ6R007SUFBd0Isd0JBQUE7RXZCMnpHOUI7O0V1QjF6R007O0lBRUUsNEJBQUE7RXZCNnpHUjs7RXVCM3pHTTs7SUFFRSw4QkFBQTtFdkI4ekdSOztFdUI1ekdNOztJQUVFLCtCQUFBO0V2Qit6R1I7O0V1Qjd6R007O0lBRUUsNkJBQUE7RXZCZzBHUjs7RXVCMXpHRTtJQUFtQix1QkFBQTtFdkI4ekdyQjs7RXVCN3pHRTs7SUFFRSwyQkFBQTtFdkJnMEdKOztFdUI5ekdFOztJQUVFLDZCQUFBO0V2QmkwR0o7O0V1Qi96R0U7O0lBRUUsOEJBQUE7RXZCazBHSjs7RXVCaDBHRTs7SUFFRSw0QkFBQTtFdkJtMEdKO0FBQ0Y7QVk3MEdJO0VXbERJO0lBQWdDLG9CQUFBO0V2Qm00R3RDOztFdUJsNEdNOztJQUVFLHdCQUFBO0V2QnE0R1I7O0V1Qm40R007O0lBRUUsMEJBQUE7RXZCczRHUjs7RXVCcDRHTTs7SUFFRSwyQkFBQTtFdkJ1NEdSOztFdUJyNEdNOztJQUVFLHlCQUFBO0V2Qnc0R1I7O0V1QnY1R007SUFBZ0MsMEJBQUE7RXZCMjVHdEM7O0V1QjE1R007O0lBRUUsOEJBQUE7RXZCNjVHUjs7RXVCMzVHTTs7SUFFRSxnQ0FBQTtFdkI4NUdSOztFdUI1NUdNOztJQUVFLGlDQUFBO0V2Qis1R1I7O0V1Qjc1R007O0lBRUUsK0JBQUE7RXZCZzZHUjs7RXVCLzZHTTtJQUFnQyx5QkFBQTtFdkJtN0d0Qzs7RXVCbDdHTTs7SUFFRSw2QkFBQTtFdkJxN0dSOztFdUJuN0dNOztJQUVFLCtCQUFBO0V2QnM3R1I7O0V1QnA3R007O0lBRUUsZ0NBQUE7RXZCdTdHUjs7RXVCcjdHTTs7SUFFRSw4QkFBQTtFdkJ3N0dSOztFdUJ2OEdNO0lBQWdDLHVCQUFBO0V2QjI4R3RDOztFdUIxOEdNOztJQUVFLDJCQUFBO0V2QjY4R1I7O0V1QjM4R007O0lBRUUsNkJBQUE7RXZCODhHUjs7RXVCNThHTTs7SUFFRSw4QkFBQTtFdkIrOEdSOztFdUI3OEdNOztJQUVFLDRCQUFBO0V2Qmc5R1I7O0V1Qi85R007SUFBZ0MseUJBQUE7RXZCbStHdEM7O0V1QmwrR007O0lBRUUsNkJBQUE7RXZCcStHUjs7RXVCbitHTTs7SUFFRSwrQkFBQTtFdkJzK0dSOztFdUJwK0dNOztJQUVFLGdDQUFBO0V2QnUrR1I7O0V1QnIrR007O0lBRUUsOEJBQUE7RXZCdytHUjs7RXVCdi9HTTtJQUFnQyx1QkFBQTtFdkIyL0d0Qzs7RXVCMS9HTTs7SUFFRSwyQkFBQTtFdkI2L0dSOztFdUIzL0dNOztJQUVFLDZCQUFBO0V2QjgvR1I7O0V1QjUvR007O0lBRUUsOEJBQUE7RXZCKy9HUjs7RXVCNy9HTTs7SUFFRSw0QkFBQTtFdkJnZ0hSOztFdUIvZ0hNO0lBQWdDLHFCQUFBO0V2Qm1oSHRDOztFdUJsaEhNOztJQUVFLHlCQUFBO0V2QnFoSFI7O0V1Qm5oSE07O0lBRUUsMkJBQUE7RXZCc2hIUjs7RXVCcGhITTs7SUFFRSw0QkFBQTtFdkJ1aEhSOztFdUJyaEhNOztJQUVFLDBCQUFBO0V2QndoSFI7O0V1QnZpSE07SUFBZ0MsMkJBQUE7RXZCMmlIdEM7O0V1QjFpSE07O0lBRUUsK0JBQUE7RXZCNmlIUjs7RXVCM2lITTs7SUFFRSxpQ0FBQTtFdkI4aUhSOztFdUI1aUhNOztJQUVFLGtDQUFBO0V2QitpSFI7O0V1QjdpSE07O0lBRUUsZ0NBQUE7RXZCZ2pIUjs7RXVCL2pITTtJQUFnQywwQkFBQTtFdkJta0h0Qzs7RXVCbGtITTs7SUFFRSw4QkFBQTtFdkJxa0hSOztFdUJua0hNOztJQUVFLGdDQUFBO0V2QnNrSFI7O0V1QnBrSE07O0lBRUUsaUNBQUE7RXZCdWtIUjs7RXVCcmtITTs7SUFFRSwrQkFBQTtFdkJ3a0hSOztFdUJ2bEhNO0lBQWdDLHdCQUFBO0V2QjJsSHRDOztFdUIxbEhNOztJQUVFLDRCQUFBO0V2QjZsSFI7O0V1QjNsSE07O0lBRUUsOEJBQUE7RXZCOGxIUjs7RXVCNWxITTs7SUFFRSwrQkFBQTtFdkIrbEhSOztFdUI3bEhNOztJQUVFLDZCQUFBO0V2QmdtSFI7O0V1Qi9tSE07SUFBZ0MsMEJBQUE7RXZCbW5IdEM7O0V1QmxuSE07O0lBRUUsOEJBQUE7RXZCcW5IUjs7RXVCbm5ITTs7SUFFRSxnQ0FBQTtFdkJzbkhSOztFdUJwbkhNOztJQUVFLGlDQUFBO0V2QnVuSFI7O0V1QnJuSE07O0lBRUUsK0JBQUE7RXZCd25IUjs7RXVCdm9ITTtJQUFnQyx3QkFBQTtFdkIyb0h0Qzs7RXVCMW9ITTs7SUFFRSw0QkFBQTtFdkI2b0hSOztFdUIzb0hNOztJQUVFLDhCQUFBO0V2QjhvSFI7O0V1QjVvSE07O0lBRUUsK0JBQUE7RXZCK29IUjs7RXVCN29ITTs7SUFFRSw2QkFBQTtFdkJncEhSOztFdUJ4b0hNO0lBQXdCLDJCQUFBO0V2QjRvSDlCOztFdUIzb0hNOztJQUVFLCtCQUFBO0V2QjhvSFI7O0V1QjVvSE07O0lBRUUsaUNBQUE7RXZCK29IUjs7RXVCN29ITTs7SUFFRSxrQ0FBQTtFdkJncEhSOztFdUI5b0hNOztJQUVFLGdDQUFBO0V2QmlwSFI7O0V1QmhxSE07SUFBd0IsMEJBQUE7RXZCb3FIOUI7O0V1Qm5xSE07O0lBRUUsOEJBQUE7RXZCc3FIUjs7RXVCcHFITTs7SUFFRSxnQ0FBQTtFdkJ1cUhSOztFdUJycUhNOztJQUVFLGlDQUFBO0V2QndxSFI7O0V1QnRxSE07O0lBRUUsK0JBQUE7RXZCeXFIUjs7RXVCeHJITTtJQUF3Qix3QkFBQTtFdkI0ckg5Qjs7RXVCM3JITTs7SUFFRSw0QkFBQTtFdkI4ckhSOztFdUI1ckhNOztJQUVFLDhCQUFBO0V2QitySFI7O0V1QjdySE07O0lBRUUsK0JBQUE7RXZCZ3NIUjs7RXVCOXJITTs7SUFFRSw2QkFBQTtFdkJpc0hSOztFdUJodEhNO0lBQXdCLDBCQUFBO0V2Qm90SDlCOztFdUJudEhNOztJQUVFLDhCQUFBO0V2QnN0SFI7O0V1QnB0SE07O0lBRUUsZ0NBQUE7RXZCdXRIUjs7RXVCcnRITTs7SUFFRSxpQ0FBQTtFdkJ3dEhSOztFdUJ0dEhNOztJQUVFLCtCQUFBO0V2Qnl0SFI7O0V1Qnh1SE07SUFBd0Isd0JBQUE7RXZCNHVIOUI7O0V1QjN1SE07O0lBRUUsNEJBQUE7RXZCOHVIUjs7RXVCNXVITTs7SUFFRSw4QkFBQTtFdkIrdUhSOztFdUI3dUhNOztJQUVFLCtCQUFBO0V2Qmd2SFI7O0V1Qjl1SE07O0lBRUUsNkJBQUE7RXZCaXZIUjs7RXVCM3VIRTtJQUFtQix1QkFBQTtFdkIrdUhyQjs7RXVCOXVIRTs7SUFFRSwyQkFBQTtFdkJpdkhKOztFdUIvdUhFOztJQUVFLDZCQUFBO0V2Qmt2SEo7O0V1Qmh2SEU7O0lBRUUsOEJBQUE7RXZCbXZISjs7RXVCanZIRTs7SUFFRSw0QkFBQTtFdkJvdkhKO0FBQ0Y7QXdCcnpIRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtFQUNBLFdBQUE7RUFFQSxrQ0FBQTtBeEJxekhKO0F5Qi96SEE7RUFBa0IsNEdBQUE7QXpCbTBIbEI7QXlCL3pIQTtFQUFpQiw4QkFBQTtBekJtMEhqQjtBeUJsMEhBO0VBQWlCLDhCQUFBO0F6QnMwSGpCO0F5QnIwSEE7RUFBaUIsOEJBQUE7QXpCeTBIakI7QXlCeDBIQTtFQ1RFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBMUJxMUhGO0F5QnQwSEk7RUFBd0IsMkJBQUE7QXpCMDBINUI7QXlCejBISTtFQUF3Qiw0QkFBQTtBekI2MEg1QjtBeUI1MEhJO0VBQXdCLDZCQUFBO0F6QmcxSDVCO0FZM3lISTtFYXZDQTtJQUF3QiwyQkFBQTtFekJ1MUgxQjs7RXlCdDFIRTtJQUF3Qiw0QkFBQTtFekIwMUgxQjs7RXlCejFIRTtJQUF3Qiw2QkFBQTtFekI2MUgxQjtBQUNGO0FZenpISTtFYXZDQTtJQUF3QiwyQkFBQTtFekJvMkgxQjs7RXlCbjJIRTtJQUF3Qiw0QkFBQTtFekJ1MkgxQjs7RXlCdDJIRTtJQUF3Qiw2QkFBQTtFekIwMkgxQjtBQUNGO0FZdDBISTtFYXZDQTtJQUF3QiwyQkFBQTtFekJpM0gxQjs7RXlCaDNIRTtJQUF3Qiw0QkFBQTtFekJvM0gxQjs7RXlCbjNIRTtJQUF3Qiw2QkFBQTtFekJ1M0gxQjtBQUNGO0FZbjFISTtFYXZDQTtJQUF3QiwyQkFBQTtFekI4M0gxQjs7RXlCNzNIRTtJQUF3Qiw0QkFBQTtFekJpNEgxQjs7RXlCaDRIRTtJQUF3Qiw2QkFBQTtFekJvNEgxQjtBQUNGO0F5Qi8zSEE7RUFBbUIsb0NBQUE7QXpCazRIbkI7QXlCajRIQTtFQUFtQixvQ0FBQTtBekJxNEhuQjtBeUJwNEhBO0VBQW1CLHFDQUFBO0F6Qnc0SG5CO0F5QnA0SEE7RUFBdUIsMkJBQUE7QXpCdzRIdkI7QXlCdjRIQTtFQUF1QiwrQkFBQTtBekIyNEh2QjtBeUIxNEhBO0VBQXVCLDJCQUFBO0F6Qjg0SHZCO0F5Qjc0SEE7RUFBdUIsMkJBQUE7QXpCaTVIdkI7QXlCaDVIQTtFQUF1Qiw4QkFBQTtBekJvNUh2QjtBeUJuNUhBO0VBQXVCLDZCQUFBO0F6QnU1SHZCO0F5Qm41SEE7RUFBYyxzQkFBQTtBekJ1NUhkO0EyQjk3SEU7RUFDRSx5QkFBQTtBM0JpOEhKO0FLdjdIRTtFc0JMTSx5QkFBQTtBM0JnOEhSO0EyQnQ4SEU7RUFDRSx5QkFBQTtBM0J5OEhKO0FLLzdIRTtFc0JMTSx5QkFBQTtBM0J3OEhSO0EyQjk4SEU7RUFDRSx5QkFBQTtBM0JpOUhKO0FLdjhIRTtFc0JMTSx5QkFBQTtBM0JnOUhSO0EyQnQ5SEU7RUFDRSx5QkFBQTtBM0J5OUhKO0FLLzhIRTtFc0JMTSx5QkFBQTtBM0J3OUhSO0EyQjk5SEU7RUFDRSx5QkFBQTtBM0JpK0hKO0FLdjlIRTtFc0JMTSx5QkFBQTtBM0JnK0hSO0EyQnQrSEU7RUFDRSx5QkFBQTtBM0J5K0hKO0FLLzlIRTtFc0JMTSx5QkFBQTtBM0J3K0hSO0EyQjkrSEU7RUFDRSx5QkFBQTtBM0JpL0hKO0FLditIRTtFc0JMTSx5QkFBQTtBM0JnL0hSO0EyQnQvSEU7RUFDRSx5QkFBQTtBM0J5L0hKO0FLLytIRTtFc0JMTSx5QkFBQTtBM0J3L0hSO0F5Qmo5SEE7RUFBYSx5QkFBQTtBekJxOUhiO0F5QnA5SEE7RUFBYyx5QkFBQTtBekJ3OUhkO0F5QnQ5SEE7RUFBaUIsb0NBQUE7QXpCMDlIakI7QXlCejlIQTtFQUFpQiwwQ0FBQTtBekI2OUhqQjtBeUJ6OUhBO0VHdkRFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0E1Qm9oSUY7QXlCNzlIQTtFQUF3QixnQ0FBQTtBekJpK0h4QjtBeUIvOUhBO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtBekJrK0hGO0F5Qjc5SEE7RUFBYyx5QkFBQTtBekJpK0hkO0E2QmxpSUE7RUFDRSw4QkFBQTtBN0JxaUlGO0E2QmxpSUE7RUFDRSw2QkFBQTtBN0JxaUlGO0E4QmhqSUE7Ozs7O0VBQUE7QUFPQTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7QTlCa2pJRjtBOEIvaUlBOzs7RUFHRSxtQkFBQTtBOUJraklGO0ErQjNqSUU7Ozs7OztFQ0RBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBaENxa0lGO0FZbGhJSTtFbUJ6Q0U7SUFDRSxnQkVaZTtFakMya0lyQjtBQUNGO0FZeGhJSTtFbUJ6Q0U7SUFDRSxnQkVaZTtFakNnbElyQjtBQUNGO0FZN2hJSTtFbUJ6Q0U7SUFDRSxnQkVaZTtFakNxbElyQjtBQUNGO0FZbGlJSTtFbUJ6Q0U7SUFDRSxpQkVaZTtFakMwbElyQjtBQUNGO0ErQm5qSUU7RUNuQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FoQ3lsSUY7QStCbmpJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0EvQnNqSUo7QStCcGpJSTs7RUFFRSxnQkFBQTtFQUNBLGVBQUE7QS9Cc2pJTjtBa0M1bUlFOzs7Ozs7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FsQ29uSUo7QWtDOWxJTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBbENpbUlSO0FnQ3JrSUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBaEN3a0lKO0FnQzFrSUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBaEM2a0lKO0FnQy9rSUU7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0FoQ2tsSUo7QWdDcGxJRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FoQ3VsSUo7QWdDemxJRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FoQzRsSUo7QWdDOWxJRTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QWhDaW1JSjtBa0NwbklNO0VGQ0osY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FoQ3VuSUY7QWtDcG5JVTtFRmJSLHVCQUFBO0VBSUEsd0JBQUE7QWhDa29JRjtBa0N6bklVO0VGYlIsd0JBQUE7RUFJQSx5QkFBQTtBaEN1b0lGO0FrQzluSVU7RUZiUixhQUFBO0VBSUEsY0FBQTtBaEM0b0lGO0FrQ25vSVU7RUZiUix3QkFBQTtFQUlBLHlCQUFBO0FoQ2lwSUY7QWtDeG9JVTtFRmJSLHdCQUFBO0VBSUEseUJBQUE7QWhDc3BJRjtBa0M3b0lVO0VGYlIsYUFBQTtFQUlBLGNBQUE7QWhDMnBJRjtBa0NscElVO0VGYlIsd0JBQUE7RUFJQSx5QkFBQTtBaENncUlGO0FrQ3ZwSVU7RUZiUix3QkFBQTtFQUlBLHlCQUFBO0FoQ3FxSUY7QWtDNXBJVTtFRmJSLGFBQUE7RUFJQSxjQUFBO0FoQzBxSUY7QWtDanFJVTtFRmJSLHdCQUFBO0VBSUEseUJBQUE7QWhDK3FJRjtBa0N0cUlVO0VGYlIsd0JBQUE7RUFJQSx5QkFBQTtBaENvcklGO0FrQzNxSVU7RUZiUixjQUFBO0VBSUEsZUFBQTtBaEN5cklGO0FrQzFxSU07RUFBd0IsU0FBQTtBbEM4cUk5QjtBa0M1cUlNO0VBQXVCLFNBQUE7QWxDZ3JJN0I7QWtDN3FJUTtFQUF3QixRQURiO0FsQ2tySW5CO0FrQ2pySVE7RUFBd0IsUUFEYjtBbENzckluQjtBa0NycklRO0VBQXdCLFFBRGI7QWxDMHJJbkI7QWtDenJJUTtFQUF3QixRQURiO0FsQzhySW5CO0FrQzdySVE7RUFBd0IsUUFEYjtBbENrc0luQjtBa0Nqc0lRO0VBQXdCLFFBRGI7QWxDc3NJbkI7QWtDcnNJUTtFQUF3QixRQURiO0FsQzBzSW5CO0FrQ3pzSVE7RUFBd0IsUUFEYjtBbEM4c0luQjtBa0M3c0lRO0VBQXdCLFFBRGI7QWxDa3RJbkI7QWtDanRJUTtFQUF3QixRQURiO0FsQ3N0SW5CO0FrQ3J0SVE7RUFBd0IsU0FEYjtBbEMwdEluQjtBa0N6dElRO0VBQXdCLFNBRGI7QWxDOHRJbkI7QWtDN3RJUTtFQUF3QixTQURiO0FsQ2t1SW5CO0FrQzF0SVk7RUZoQlYsMEJBQUE7QWhDOHVJRjtBa0M5dElZO0VGaEJWLDJCQUFBO0FoQ2t2SUY7QWtDbHVJWTtFRmhCVixnQkFBQTtBaENzdklGO0FrQ3R1SVk7RUZoQlYsMkJBQUE7QWhDMHZJRjtBa0MxdUlZO0VGaEJWLDJCQUFBO0FoQzh2SUY7QWtDOXVJWTtFRmhCVixnQkFBQTtBaENrd0lGO0FrQ2x2SVk7RUZoQlYsMkJBQUE7QWhDc3dJRjtBa0N0dklZO0VGaEJWLDJCQUFBO0FoQzB3SUY7QWtDMXZJWTtFRmhCVixnQkFBQTtBaEM4d0lGO0FrQzl2SVk7RUZoQlYsMkJBQUE7QWhDa3hJRjtBa0Nsd0lZO0VGaEJWLDJCQUFBO0FoQ3N4SUY7QVlqeElJO0VzQjNCRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFbENneklOOztFZ0NweElBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RWhDdXhJRjs7RWdDenhJQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VoQzR4SUY7O0VnQzl4SUE7SUFDRSx3QkFBQTtJQUNBLHlCQUFBO0VoQ2l5SUY7O0VnQ255SUE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFaENzeUlGOztFZ0N4eUlBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RWhDMnlJRjs7RWdDN3lJQTtJQUNFLHdCQUFBO0lBQ0EseUJBQUE7RWhDZ3pJRjs7RWtDbjBJSTtJRkNKLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFaENzMElBOztFa0NuMElRO0lGYlIsdUJBQUE7SUFJQSx3QkFBQTtFaENpMUlBOztFa0N4MElRO0lGYlIsd0JBQUE7SUFJQSx5QkFBQTtFaENzMUlBOztFa0M3MElRO0lGYlIsYUFBQTtJQUlBLGNBQUE7RWhDMjFJQTs7RWtDbDFJUTtJRmJSLHdCQUFBO0lBSUEseUJBQUE7RWhDZzJJQTs7RWtDdjFJUTtJRmJSLHdCQUFBO0lBSUEseUJBQUE7RWhDcTJJQTs7RWtDNTFJUTtJRmJSLGFBQUE7SUFJQSxjQUFBO0VoQzAySUE7O0VrQ2oySVE7SUZiUix3QkFBQTtJQUlBLHlCQUFBO0VoQysySUE7O0VrQ3QySVE7SUZiUix3QkFBQTtJQUlBLHlCQUFBO0VoQ28zSUE7O0VrQzMySVE7SUZiUixhQUFBO0lBSUEsY0FBQTtFaEN5M0lBOztFa0NoM0lRO0lGYlIsd0JBQUE7SUFJQSx5QkFBQTtFaEM4M0lBOztFa0NyM0lRO0lGYlIsd0JBQUE7SUFJQSx5QkFBQTtFaENtNElBOztFa0MxM0lRO0lGYlIsY0FBQTtJQUlBLGVBQUE7RWhDdzRJQTs7RWtDejNJSTtJQUF3QixTQUFBO0VsQzYzSTVCOztFa0MzM0lJO0lBQXVCLFNBQUE7RWxDKzNJM0I7O0VrQzUzSU07SUFBd0IsUUFEYjtFbENpNElqQjs7RWtDaDRJTTtJQUF3QixRQURiO0VsQ3E0SWpCOztFa0NwNElNO0lBQXdCLFFBRGI7RWxDeTRJakI7O0VrQ3g0SU07SUFBd0IsUUFEYjtFbEM2NElqQjs7RWtDNTRJTTtJQUF3QixRQURiO0VsQ2k1SWpCOztFa0NoNUlNO0lBQXdCLFFBRGI7RWxDcTVJakI7O0VrQ3A1SU07SUFBd0IsUUFEYjtFbEN5NUlqQjs7RWtDeDVJTTtJQUF3QixRQURiO0VsQzY1SWpCOztFa0M1NUlNO0lBQXdCLFFBRGI7RWxDaTZJakI7O0VrQ2g2SU07SUFBd0IsUUFEYjtFbENxNklqQjs7RWtDcDZJTTtJQUF3QixTQURiO0VsQ3k2SWpCOztFa0N4NklNO0lBQXdCLFNBRGI7RWxDNjZJakI7O0VrQzU2SU07SUFBd0IsU0FEYjtFbENpN0lqQjs7RWtDejZJVTtJRmhCVixjQUFBO0VoQzY3SUE7O0VrQzc2SVU7SUZoQlYsMEJBQUE7RWhDaThJQTs7RWtDajdJVTtJRmhCViwyQkFBQTtFaENxOElBOztFa0NyN0lVO0lGaEJWLGdCQUFBO0VoQ3k4SUE7O0VrQ3o3SVU7SUZoQlYsMkJBQUE7RWhDNjhJQTs7RWtDNzdJVTtJRmhCViwyQkFBQTtFaENpOUlBOztFa0NqOElVO0lGaEJWLGdCQUFBO0VoQ3E5SUE7O0VrQ3I4SVU7SUZoQlYsMkJBQUE7RWhDeTlJQTs7RWtDejhJVTtJRmhCViwyQkFBQTtFaEM2OUlBOztFa0M3OElVO0lGaEJWLGdCQUFBO0VoQ2krSUE7O0VrQ2o5SVU7SUZoQlYsMkJBQUE7RWhDcStJQTs7RWtDcjlJVTtJRmhCViwyQkFBQTtFaEN5K0lBO0FBQ0Y7QVlyK0lJO0VzQjNCRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFbENtZ0pOOztFZ0N2K0lBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RWhDMCtJRjs7RWdDNStJQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VoQysrSUY7O0VnQ2ovSUE7SUFDRSx3QkFBQTtJQUNBLHlCQUFBO0VoQ28vSUY7O0VnQ3QvSUE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFaEN5L0lGOztFZ0MzL0lBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RWhDOC9JRjs7RWdDaGdKQTtJQUNFLHdCQUFBO0lBQ0EseUJBQUE7RWhDbWdKRjs7RWtDdGhKSTtJRkNKLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFaEN5aEpBOztFa0N0aEpRO0lGYlIsdUJBQUE7SUFJQSx3QkFBQTtFaENvaUpBOztFa0MzaEpRO0lGYlIsd0JBQUE7SUFJQSx5QkFBQTtFaEN5aUpBOztFa0NoaUpRO0lGYlIsYUFBQTtJQUlBLGNBQUE7RWhDOGlKQTs7RWtDcmlKUTtJRmJSLHdCQUFBO0lBSUEseUJBQUE7RWhDbWpKQTs7RWtDMWlKUTtJRmJSLHdCQUFBO0lBSUEseUJBQUE7RWhDd2pKQTs7RWtDL2lKUTtJRmJSLGFBQUE7SUFJQSxjQUFBO0VoQzZqSkE7O0VrQ3BqSlE7SUZiUix3QkFBQTtJQUlBLHlCQUFBO0VoQ2trSkE7O0VrQ3pqSlE7SUZiUix3QkFBQTtJQUlBLHlCQUFBO0VoQ3VrSkE7O0VrQzlqSlE7SUZiUixhQUFBO0lBSUEsY0FBQTtFaEM0a0pBOztFa0Nua0pRO0lGYlIsd0JBQUE7SUFJQSx5QkFBQTtFaENpbEpBOztFa0N4a0pRO0lGYlIsd0JBQUE7SUFJQSx5QkFBQTtFaENzbEpBOztFa0M3a0pRO0lGYlIsY0FBQTtJQUlBLGVBQUE7RWhDMmxKQTs7RWtDNWtKSTtJQUF3QixTQUFBO0VsQ2dsSjVCOztFa0M5a0pJO0lBQXVCLFNBQUE7RWxDa2xKM0I7O0VrQy9rSk07SUFBd0IsUUFEYjtFbENvbEpqQjs7RWtDbmxKTTtJQUF3QixRQURiO0VsQ3dsSmpCOztFa0N2bEpNO0lBQXdCLFFBRGI7RWxDNGxKakI7O0VrQzNsSk07SUFBd0IsUUFEYjtFbENnbUpqQjs7RWtDL2xKTTtJQUF3QixRQURiO0VsQ29tSmpCOztFa0NubUpNO0lBQXdCLFFBRGI7RWxDd21KakI7O0VrQ3ZtSk07SUFBd0IsUUFEYjtFbEM0bUpqQjs7RWtDM21KTTtJQUF3QixRQURiO0VsQ2duSmpCOztFa0MvbUpNO0lBQXdCLFFBRGI7RWxDb25KakI7O0VrQ25uSk07SUFBd0IsUUFEYjtFbEN3bkpqQjs7RWtDdm5KTTtJQUF3QixTQURiO0VsQzRuSmpCOztFa0MzbkpNO0lBQXdCLFNBRGI7RWxDZ29KakI7O0VrQy9uSk07SUFBd0IsU0FEYjtFbENvb0pqQjs7RWtDNW5KVTtJRmhCVixjQUFBO0VoQ2dwSkE7O0VrQ2hvSlU7SUZoQlYsMEJBQUE7RWhDb3BKQTs7RWtDcG9KVTtJRmhCViwyQkFBQTtFaEN3cEpBOztFa0N4b0pVO0lGaEJWLGdCQUFBO0VoQzRwSkE7O0VrQzVvSlU7SUZoQlYsMkJBQUE7RWhDZ3FKQTs7RWtDaHBKVTtJRmhCViwyQkFBQTtFaENvcUpBOztFa0NwcEpVO0lGaEJWLGdCQUFBO0VoQ3dxSkE7O0VrQ3hwSlU7SUZoQlYsMkJBQUE7RWhDNHFKQTs7RWtDNXBKVTtJRmhCViwyQkFBQTtFaENnckpBOztFa0NocUpVO0lGaEJWLGdCQUFBO0VoQ29ySkE7O0VrQ3BxSlU7SUZoQlYsMkJBQUE7RWhDd3JKQTs7RWtDeHFKVTtJRmhCViwyQkFBQTtFaEM0ckpBO0FBQ0Y7QVl4ckpJO0VzQjNCRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFbENzdEpOOztFZ0MxckpBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RWhDNnJKRjs7RWdDL3JKQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VoQ2tzSkY7O0VnQ3BzSkE7SUFDRSx3QkFBQTtJQUNBLHlCQUFBO0VoQ3VzSkY7O0VnQ3pzSkE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFaEM0c0pGOztFZ0M5c0pBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RWhDaXRKRjs7RWdDbnRKQTtJQUNFLHdCQUFBO0lBQ0EseUJBQUE7RWhDc3RKRjs7RWtDenVKSTtJRkNKLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFaEM0dUpBOztFa0N6dUpRO0lGYlIsdUJBQUE7SUFJQSx3QkFBQTtFaEN1dkpBOztFa0M5dUpRO0lGYlIsd0JBQUE7SUFJQSx5QkFBQTtFaEM0dkpBOztFa0NudkpRO0lGYlIsYUFBQTtJQUlBLGNBQUE7RWhDaXdKQTs7RWtDeHZKUTtJRmJSLHdCQUFBO0lBSUEseUJBQUE7RWhDc3dKQTs7RWtDN3ZKUTtJRmJSLHdCQUFBO0lBSUEseUJBQUE7RWhDMndKQTs7RWtDbHdKUTtJRmJSLGFBQUE7SUFJQSxjQUFBO0VoQ2d4SkE7O0VrQ3Z3SlE7SUZiUix3QkFBQTtJQUlBLHlCQUFBO0VoQ3F4SkE7O0VrQzV3SlE7SUZiUix3QkFBQTtJQUlBLHlCQUFBO0VoQzB4SkE7O0VrQ2p4SlE7SUZiUixhQUFBO0lBSUEsY0FBQTtFaEMreEpBOztFa0N0eEpRO0lGYlIsd0JBQUE7SUFJQSx5QkFBQTtFaENveUpBOztFa0MzeEpRO0lGYlIsd0JBQUE7SUFJQSx5QkFBQTtFaEN5eUpBOztFa0NoeUpRO0lGYlIsY0FBQTtJQUlBLGVBQUE7RWhDOHlKQTs7RWtDL3hKSTtJQUF3QixTQUFBO0VsQ215SjVCOztFa0NqeUpJO0lBQXVCLFNBQUE7RWxDcXlKM0I7O0VrQ2x5Sk07SUFBd0IsUUFEYjtFbEN1eUpqQjs7RWtDdHlKTTtJQUF3QixRQURiO0VsQzJ5SmpCOztFa0MxeUpNO0lBQXdCLFFBRGI7RWxDK3lKakI7O0VrQzl5Sk07SUFBd0IsUUFEYjtFbENtekpqQjs7RWtDbHpKTTtJQUF3QixRQURiO0VsQ3V6SmpCOztFa0N0ekpNO0lBQXdCLFFBRGI7RWxDMnpKakI7O0VrQzF6Sk07SUFBd0IsUUFEYjtFbEMrekpqQjs7RWtDOXpKTTtJQUF3QixRQURiO0VsQ20wSmpCOztFa0NsMEpNO0lBQXdCLFFBRGI7RWxDdTBKakI7O0VrQ3QwSk07SUFBd0IsUUFEYjtFbEMyMEpqQjs7RWtDMTBKTTtJQUF3QixTQURiO0VsQyswSmpCOztFa0M5MEpNO0lBQXdCLFNBRGI7RWxDbTFKakI7O0VrQ2wxSk07SUFBd0IsU0FEYjtFbEN1MUpqQjs7RWtDLzBKVTtJRmhCVixjQUFBO0VoQ20ySkE7O0VrQ24xSlU7SUZoQlYsMEJBQUE7RWhDdTJKQTs7RWtDdjFKVTtJRmhCViwyQkFBQTtFaEMyMkpBOztFa0MzMUpVO0lGaEJWLGdCQUFBO0VoQysySkE7O0VrQy8xSlU7SUZoQlYsMkJBQUE7RWhDbTNKQTs7RWtDbjJKVTtJRmhCViwyQkFBQTtFaEN1M0pBOztFa0N2MkpVO0lGaEJWLGdCQUFBO0VoQzIzSkE7O0VrQzMySlU7SUZoQlYsMkJBQUE7RWhDKzNKQTs7RWtDLzJKVTtJRmhCViwyQkFBQTtFaENtNEpBOztFa0NuM0pVO0lGaEJWLGdCQUFBO0VoQ3U0SkE7O0VrQ3YzSlU7SUZoQlYsMkJBQUE7RWhDMjRKQTs7RWtDMzNKVTtJRmhCViwyQkFBQTtFaEMrNEpBO0FBQ0Y7QVkzNEpJO0VzQjNCRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFbEN5NkpOOztFZ0M3NEpBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RWhDZzVKRjs7RWdDbDVKQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VoQ3E1SkY7O0VnQ3Y1SkE7SUFDRSx3QkFBQTtJQUNBLHlCQUFBO0VoQzA1SkY7O0VnQzU1SkE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFaEMrNUpGOztFZ0NqNkpBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RWhDbzZKRjs7RWdDdDZKQTtJQUNFLHdCQUFBO0lBQ0EseUJBQUE7RWhDeTZKRjs7RWtDNTdKSTtJRkNKLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFaEMrN0pBOztFa0M1N0pRO0lGYlIsdUJBQUE7SUFJQSx3QkFBQTtFaEMwOEpBOztFa0NqOEpRO0lGYlIsd0JBQUE7SUFJQSx5QkFBQTtFaEMrOEpBOztFa0N0OEpRO0lGYlIsYUFBQTtJQUlBLGNBQUE7RWhDbzlKQTs7RWtDMzhKUTtJRmJSLHdCQUFBO0lBSUEseUJBQUE7RWhDeTlKQTs7RWtDaDlKUTtJRmJSLHdCQUFBO0lBSUEseUJBQUE7RWhDODlKQTs7RWtDcjlKUTtJRmJSLGFBQUE7SUFJQSxjQUFBO0VoQ20rSkE7O0VrQzE5SlE7SUZiUix3QkFBQTtJQUlBLHlCQUFBO0VoQ3crSkE7O0VrQy85SlE7SUZiUix3QkFBQTtJQUlBLHlCQUFBO0VoQzYrSkE7O0VrQ3ArSlE7SUZiUixhQUFBO0lBSUEsY0FBQTtFaENrL0pBOztFa0N6K0pRO0lGYlIsd0JBQUE7SUFJQSx5QkFBQTtFaEN1L0pBOztFa0M5K0pRO0lGYlIsd0JBQUE7SUFJQSx5QkFBQTtFaEM0L0pBOztFa0NuL0pRO0lGYlIsY0FBQTtJQUlBLGVBQUE7RWhDaWdLQTs7RWtDbC9KSTtJQUF3QixTQUFBO0VsQ3MvSjVCOztFa0NwL0pJO0lBQXVCLFNBQUE7RWxDdy9KM0I7O0VrQ3IvSk07SUFBd0IsUUFEYjtFbEMwL0pqQjs7RWtDei9KTTtJQUF3QixRQURiO0VsQzgvSmpCOztFa0M3L0pNO0lBQXdCLFFBRGI7RWxDa2dLakI7O0VrQ2pnS007SUFBd0IsUUFEYjtFbENzZ0tqQjs7RWtDcmdLTTtJQUF3QixRQURiO0VsQzBnS2pCOztFa0N6Z0tNO0lBQXdCLFFBRGI7RWxDOGdLakI7O0VrQzdnS007SUFBd0IsUUFEYjtFbENraEtqQjs7RWtDamhLTTtJQUF3QixRQURiO0VsQ3NoS2pCOztFa0NyaEtNO0lBQXdCLFFBRGI7RWxDMGhLakI7O0VrQ3poS007SUFBd0IsUUFEYjtFbEM4aEtqQjs7RWtDN2hLTTtJQUF3QixTQURiO0VsQ2tpS2pCOztFa0NqaUtNO0lBQXdCLFNBRGI7RWxDc2lLakI7O0VrQ3JpS007SUFBd0IsU0FEYjtFbEMwaUtqQjs7RWtDbGlLVTtJRmhCVixjQUFBO0VoQ3NqS0E7O0VrQ3RpS1U7SUZoQlYsMEJBQUE7RWhDMGpLQTs7RWtDMWlLVTtJRmhCViwyQkFBQTtFaEM4aktBOztFa0M5aUtVO0lGaEJWLGdCQUFBO0VoQ2trS0E7O0VrQ2xqS1U7SUZoQlYsMkJBQUE7RWhDc2tLQTs7RWtDdGpLVTtJRmhCViwyQkFBQTtFaEMwa0tBOztFa0MxaktVO0lGaEJWLGdCQUFBO0VoQzhrS0E7O0VrQzlqS1U7SUZoQlYsMkJBQUE7RWhDa2xLQTs7RWtDbGtLVTtJRmhCViwyQkFBQTtFaENzbEtBOztFa0N0a0tVO0lGaEJWLGdCQUFBO0VoQzBsS0E7O0VrQzFrS1U7SUZoQlYsMkJBQUE7RWhDOGxLQTs7RWtDOWtLVTtJRmhCViwyQkFBQTtFaENrbUtBO0FBQ0Y7QVcvb0tNO0VBQXdCLHdCQUFBO0FYa3BLOUI7QVdscEtNO0VBQXdCLDBCQUFBO0FYc3BLOUI7QVd0cEtNO0VBQXdCLGdDQUFBO0FYMHBLOUI7QVcxcEtNO0VBQXdCLHlCQUFBO0FYOHBLOUI7QVc5cEtNO0VBQXdCLHlCQUFBO0FYa3FLOUI7QVdscUtNO0VBQXdCLDZCQUFBO0FYc3FLOUI7QVd0cUtNO0VBQXdCLDhCQUFBO0FYMHFLOUI7QVcxcUtNO0VBQXdCLHdCQUFBO0FYOHFLOUI7QVc5cUtNO0VBQXdCLCtCQUFBO0FYa3JLOUI7QVlqb0tJO0VEakRFO0lBQXdCLHdCQUFBO0VYdXJLNUI7O0VXdnJLSTtJQUF3QiwwQkFBQTtFWDJySzVCOztFVzNyS0k7SUFBd0IsZ0NBQUE7RVgrcks1Qjs7RVcvcktJO0lBQXdCLHlCQUFBO0VYbXNLNUI7O0VXbnNLSTtJQUF3Qix5QkFBQTtFWHVzSzVCOztFV3ZzS0k7SUFBd0IsNkJBQUE7RVgyc0s1Qjs7RVczc0tJO0lBQXdCLDhCQUFBO0VYK3NLNUI7O0VXL3NLSTtJQUF3Qix3QkFBQTtFWG10SzVCOztFV250S0k7SUFBd0IsK0JBQUE7RVh1dEs1QjtBQUNGO0FZdnFLSTtFRGpERTtJQUF3Qix3QkFBQTtFWDR0SzVCOztFVzV0S0k7SUFBd0IsMEJBQUE7RVhndUs1Qjs7RVdodUtJO0lBQXdCLGdDQUFBO0VYb3VLNUI7O0VXcHVLSTtJQUF3Qix5QkFBQTtFWHd1SzVCOztFV3h1S0k7SUFBd0IseUJBQUE7RVg0dUs1Qjs7RVc1dUtJO0lBQXdCLDZCQUFBO0VYZ3ZLNUI7O0VXaHZLSTtJQUF3Qiw4QkFBQTtFWG92SzVCOztFV3B2S0k7SUFBd0Isd0JBQUE7RVh3dks1Qjs7RVd4dktJO0lBQXdCLCtCQUFBO0VYNHZLNUI7QUFDRjtBWTVzS0k7RURqREU7SUFBd0Isd0JBQUE7RVhpd0s1Qjs7RVdqd0tJO0lBQXdCLDBCQUFBO0VYcXdLNUI7O0VXcndLSTtJQUF3QixnQ0FBQTtFWHl3SzVCOztFV3p3S0k7SUFBd0IseUJBQUE7RVg2d0s1Qjs7RVc3d0tJO0lBQXdCLHlCQUFBO0VYaXhLNUI7O0VXanhLSTtJQUF3Qiw2QkFBQTtFWHF4SzVCOztFV3J4S0k7SUFBd0IsOEJBQUE7RVh5eEs1Qjs7RVd6eEtJO0lBQXdCLHdCQUFBO0VYNnhLNUI7O0VXN3hLSTtJQUF3QiwrQkFBQTtFWGl5SzVCO0FBQ0Y7QVlqdktJO0VEakRFO0lBQXdCLHdCQUFBO0VYc3lLNUI7O0VXdHlLSTtJQUF3QiwwQkFBQTtFWDB5SzVCOztFVzF5S0k7SUFBd0IsZ0NBQUE7RVg4eUs1Qjs7RVc5eUtJO0lBQXdCLHlCQUFBO0VYa3pLNUI7O0VXbHpLSTtJQUF3Qix5QkFBQTtFWHN6SzVCOztFV3R6S0k7SUFBd0IsNkJBQUE7RVgweks1Qjs7RVcxektJO0lBQXdCLDhCQUFBO0VYOHpLNUI7O0VXOXpLSTtJQUF3Qix3QkFBQTtFWGswSzVCOztFV2wwS0k7SUFBd0IsK0JBQUE7RVhzMEs1QjtBQUNGO0FXN3pLQTtFQUVJO0lBQXFCLHdCQUFBO0VYK3pLdkI7O0VXL3pLRTtJQUFxQiwwQkFBQTtFWG0wS3ZCOztFV24wS0U7SUFBcUIsZ0NBQUE7RVh1MEt2Qjs7RVd2MEtFO0lBQXFCLHlCQUFBO0VYMjBLdkI7O0VXMzBLRTtJQUFxQix5QkFBQTtFWCswS3ZCOztFVy8wS0U7SUFBcUIsNkJBQUE7RVhtMUt2Qjs7RVduMUtFO0lBQXFCLDhCQUFBO0VYdTFLdkI7O0VXdjFLRTtJQUFxQix3QkFBQTtFWDIxS3ZCOztFVzMxS0U7SUFBcUIsK0JBQUE7RVgrMUt2QjtBQUNGO0FjNzJLSTtFQUFnQyw4QkFBQTtBZGczS3BDO0FjLzJLSTtFQUFnQyxpQ0FBQTtBZG0zS3BDO0FjbDNLSTtFQUFnQyxzQ0FBQTtBZHMzS3BDO0FjcjNLSTtFQUFnQyx5Q0FBQTtBZHkzS3BDO0FjdjNLSTtFQUE4QiwwQkFBQTtBZDIzS2xDO0FjMTNLSTtFQUE4Qiw0QkFBQTtBZDgzS2xDO0FjNzNLSTtFQUE4QixrQ0FBQTtBZGk0S2xDO0FjaDRLSTtFQUE4Qix5QkFBQTtBZG80S2xDO0FjbjRLSTtFQUE4Qix1QkFBQTtBZHU0S2xDO0FjdDRLSTtFQUE4Qix1QkFBQTtBZDA0S2xDO0FjejRLSTtFQUE4Qix5QkFBQTtBZDY0S2xDO0FjNTRLSTtFQUE4Qix5QkFBQTtBZGc1S2xDO0FjOTRLSTtFQUFvQyxzQ0FBQTtBZGs1S3hDO0FjajVLSTtFQUFvQyxvQ0FBQTtBZHE1S3hDO0FjcDVLSTtFQUFvQyxrQ0FBQTtBZHc1S3hDO0FjdjVLSTtFQUFvQyx5Q0FBQTtBZDI1S3hDO0FjMTVLSTtFQUFvQyx3Q0FBQTtBZDg1S3hDO0FjNTVLSTtFQUFpQyxrQ0FBQTtBZGc2S3JDO0FjLzVLSTtFQUFpQyxnQ0FBQTtBZG02S3JDO0FjbDZLSTtFQUFpQyw4QkFBQTtBZHM2S3JDO0FjcjZLSTtFQUFpQyxnQ0FBQTtBZHk2S3JDO0FjeDZLSTtFQUFpQywrQkFBQTtBZDQ2S3JDO0FjMTZLSTtFQUFrQyxvQ0FBQTtBZDg2S3RDO0FjNzZLSTtFQUFrQyxrQ0FBQTtBZGk3S3RDO0FjaDdLSTtFQUFrQyxnQ0FBQTtBZG83S3RDO0FjbjdLSTtFQUFrQyx1Q0FBQTtBZHU3S3RDO0FjdDdLSTtFQUFrQyxzQ0FBQTtBZDA3S3RDO0FjejdLSTtFQUFrQyxpQ0FBQTtBZDY3S3RDO0FjMzdLSTtFQUFnQywyQkFBQTtBZCs3S3BDO0FjOTdLSTtFQUFnQyxpQ0FBQTtBZGs4S3BDO0FjajhLSTtFQUFnQywrQkFBQTtBZHE4S3BDO0FjcDhLSTtFQUFnQyw2QkFBQTtBZHc4S3BDO0FjdjhLSTtFQUFnQywrQkFBQTtBZDI4S3BDO0FjMThLSTtFQUFnQyw4QkFBQTtBZDg4S3BDO0FZbDhLSTtFRWxEQTtJQUFnQyw4QkFBQTtFZHkvS2xDOztFY3gvS0U7SUFBZ0MsaUNBQUE7RWQ0L0tsQzs7RWMzL0tFO0lBQWdDLHNDQUFBO0VkKy9LbEM7O0VjOS9LRTtJQUFnQyx5Q0FBQTtFZGtnTGxDOztFY2hnTEU7SUFBOEIsMEJBQUE7RWRvZ0xoQzs7RWNuZ0xFO0lBQThCLDRCQUFBO0VkdWdMaEM7O0VjdGdMRTtJQUE4QixrQ0FBQTtFZDBnTGhDOztFY3pnTEU7SUFBOEIseUJBQUE7RWQ2Z0xoQzs7RWM1Z0xFO0lBQThCLHVCQUFBO0VkZ2hMaEM7O0VjL2dMRTtJQUE4Qix1QkFBQTtFZG1oTGhDOztFY2xoTEU7SUFBOEIseUJBQUE7RWRzaExoQzs7RWNyaExFO0lBQThCLHlCQUFBO0VkeWhMaEM7O0VjdmhMRTtJQUFvQyxzQ0FBQTtFZDJoTHRDOztFYzFoTEU7SUFBb0Msb0NBQUE7RWQ4aEx0Qzs7RWM3aExFO0lBQW9DLGtDQUFBO0VkaWlMdEM7O0VjaGlMRTtJQUFvQyx5Q0FBQTtFZG9pTHRDOztFY25pTEU7SUFBb0Msd0NBQUE7RWR1aUx0Qzs7RWNyaUxFO0lBQWlDLGtDQUFBO0VkeWlMbkM7O0VjeGlMRTtJQUFpQyxnQ0FBQTtFZDRpTG5DOztFYzNpTEU7SUFBaUMsOEJBQUE7RWQraUxuQzs7RWM5aUxFO0lBQWlDLGdDQUFBO0Vka2pMbkM7O0VjampMRTtJQUFpQywrQkFBQTtFZHFqTG5DOztFY25qTEU7SUFBa0Msb0NBQUE7RWR1akxwQzs7RWN0akxFO0lBQWtDLGtDQUFBO0VkMGpMcEM7O0VjempMRTtJQUFrQyxnQ0FBQTtFZDZqTHBDOztFYzVqTEU7SUFBa0MsdUNBQUE7RWRna0xwQzs7RWMvakxFO0lBQWtDLHNDQUFBO0VkbWtMcEM7O0VjbGtMRTtJQUFrQyxpQ0FBQTtFZHNrTHBDOztFY3BrTEU7SUFBZ0MsMkJBQUE7RWR3a0xsQzs7RWN2a0xFO0lBQWdDLGlDQUFBO0VkMmtMbEM7O0VjMWtMRTtJQUFnQywrQkFBQTtFZDhrTGxDOztFYzdrTEU7SUFBZ0MsNkJBQUE7RWRpbExsQzs7RWNobExFO0lBQWdDLCtCQUFBO0Vkb2xMbEM7O0VjbmxMRTtJQUFnQyw4QkFBQTtFZHVsTGxDO0FBQ0Y7QVk1a0xJO0VFbERBO0lBQWdDLDhCQUFBO0Vka29MbEM7O0Vjam9MRTtJQUFnQyxpQ0FBQTtFZHFvTGxDOztFY3BvTEU7SUFBZ0Msc0NBQUE7RWR3b0xsQzs7RWN2b0xFO0lBQWdDLHlDQUFBO0VkMm9MbEM7O0Vjem9MRTtJQUE4QiwwQkFBQTtFZDZvTGhDOztFYzVvTEU7SUFBOEIsNEJBQUE7RWRncExoQzs7RWMvb0xFO0lBQThCLGtDQUFBO0VkbXBMaEM7O0VjbHBMRTtJQUE4Qix5QkFBQTtFZHNwTGhDOztFY3JwTEU7SUFBOEIsdUJBQUE7RWR5cExoQzs7RWN4cExFO0lBQThCLHVCQUFBO0VkNHBMaEM7O0VjM3BMRTtJQUE4Qix5QkFBQTtFZCtwTGhDOztFYzlwTEU7SUFBOEIseUJBQUE7RWRrcUxoQzs7RWNocUxFO0lBQW9DLHNDQUFBO0Vkb3FMdEM7O0VjbnFMRTtJQUFvQyxvQ0FBQTtFZHVxTHRDOztFY3RxTEU7SUFBb0Msa0NBQUE7RWQwcUx0Qzs7RWN6cUxFO0lBQW9DLHlDQUFBO0VkNnFMdEM7O0VjNXFMRTtJQUFvQyx3Q0FBQTtFZGdyTHRDOztFYzlxTEU7SUFBaUMsa0NBQUE7RWRrckxuQzs7RWNqckxFO0lBQWlDLGdDQUFBO0VkcXJMbkM7O0VjcHJMRTtJQUFpQyw4QkFBQTtFZHdyTG5DOztFY3ZyTEU7SUFBaUMsZ0NBQUE7RWQyckxuQzs7RWMxckxFO0lBQWlDLCtCQUFBO0VkOHJMbkM7O0VjNXJMRTtJQUFrQyxvQ0FBQTtFZGdzTHBDOztFYy9yTEU7SUFBa0Msa0NBQUE7RWRtc0xwQzs7RWNsc0xFO0lBQWtDLGdDQUFBO0Vkc3NMcEM7O0VjcnNMRTtJQUFrQyx1Q0FBQTtFZHlzTHBDOztFY3hzTEU7SUFBa0Msc0NBQUE7RWQ0c0xwQzs7RWMzc0xFO0lBQWtDLGlDQUFBO0VkK3NMcEM7O0VjN3NMRTtJQUFnQywyQkFBQTtFZGl0TGxDOztFY2h0TEU7SUFBZ0MsaUNBQUE7RWRvdExsQzs7RWNudExFO0lBQWdDLCtCQUFBO0VkdXRMbEM7O0VjdHRMRTtJQUFnQyw2QkFBQTtFZDB0TGxDOztFY3p0TEU7SUFBZ0MsK0JBQUE7RWQ2dExsQzs7RWM1dExFO0lBQWdDLDhCQUFBO0VkZ3VMbEM7QUFDRjtBWXJ0TEk7RUVsREE7SUFBZ0MsOEJBQUE7RWQyd0xsQzs7RWMxd0xFO0lBQWdDLGlDQUFBO0VkOHdMbEM7O0VjN3dMRTtJQUFnQyxzQ0FBQTtFZGl4TGxDOztFY2h4TEU7SUFBZ0MseUNBQUE7RWRveExsQzs7RWNseExFO0lBQThCLDBCQUFBO0Vkc3hMaEM7O0VjcnhMRTtJQUE4Qiw0QkFBQTtFZHl4TGhDOztFY3h4TEU7SUFBOEIsa0NBQUE7RWQ0eExoQzs7RWMzeExFO0lBQThCLHlCQUFBO0VkK3hMaEM7O0VjOXhMRTtJQUE4Qix1QkFBQTtFZGt5TGhDOztFY2p5TEU7SUFBOEIsdUJBQUE7RWRxeUxoQzs7RWNweUxFO0lBQThCLHlCQUFBO0Vkd3lMaEM7O0VjdnlMRTtJQUE4Qix5QkFBQTtFZDJ5TGhDOztFY3p5TEU7SUFBb0Msc0NBQUE7RWQ2eUx0Qzs7RWM1eUxFO0lBQW9DLG9DQUFBO0VkZ3pMdEM7O0VjL3lMRTtJQUFvQyxrQ0FBQTtFZG16THRDOztFY2x6TEU7SUFBb0MseUNBQUE7RWRzekx0Qzs7RWNyekxFO0lBQW9DLHdDQUFBO0VkeXpMdEM7O0VjdnpMRTtJQUFpQyxrQ0FBQTtFZDJ6TG5DOztFYzF6TEU7SUFBaUMsZ0NBQUE7RWQ4ekxuQzs7RWM3ekxFO0lBQWlDLDhCQUFBO0VkaTBMbkM7O0VjaDBMRTtJQUFpQyxnQ0FBQTtFZG8wTG5DOztFY24wTEU7SUFBaUMsK0JBQUE7RWR1MExuQzs7RWNyMExFO0lBQWtDLG9DQUFBO0VkeTBMcEM7O0VjeDBMRTtJQUFrQyxrQ0FBQTtFZDQwTHBDOztFYzMwTEU7SUFBa0MsZ0NBQUE7RWQrMExwQzs7RWM5MExFO0lBQWtDLHVDQUFBO0VkazFMcEM7O0VjajFMRTtJQUFrQyxzQ0FBQTtFZHExTHBDOztFY3AxTEU7SUFBa0MsaUNBQUE7RWR3MUxwQzs7RWN0MUxFO0lBQWdDLDJCQUFBO0VkMDFMbEM7O0VjejFMRTtJQUFnQyxpQ0FBQTtFZDYxTGxDOztFYzUxTEU7SUFBZ0MsK0JBQUE7RWRnMkxsQzs7RWMvMUxFO0lBQWdDLDZCQUFBO0VkbTJMbEM7O0VjbDJMRTtJQUFnQywrQkFBQTtFZHMyTGxDOztFY3IyTEU7SUFBZ0MsOEJBQUE7RWR5MkxsQztBQUNGO0FZOTFMSTtFRWxEQTtJQUFnQyw4QkFBQTtFZG81TGxDOztFY241TEU7SUFBZ0MsaUNBQUE7RWR1NUxsQzs7RWN0NUxFO0lBQWdDLHNDQUFBO0VkMDVMbEM7O0VjejVMRTtJQUFnQyx5Q0FBQTtFZDY1TGxDOztFYzM1TEU7SUFBOEIsMEJBQUE7RWQrNUxoQzs7RWM5NUxFO0lBQThCLDRCQUFBO0VkazZMaEM7O0VjajZMRTtJQUE4QixrQ0FBQTtFZHE2TGhDOztFY3A2TEU7SUFBOEIseUJBQUE7RWR3NkxoQzs7RWN2NkxFO0lBQThCLHVCQUFBO0VkMjZMaEM7O0VjMTZMRTtJQUE4Qix1QkFBQTtFZDg2TGhDOztFYzc2TEU7SUFBOEIseUJBQUE7RWRpN0xoQzs7RWNoN0xFO0lBQThCLHlCQUFBO0VkbzdMaEM7O0VjbDdMRTtJQUFvQyxzQ0FBQTtFZHM3THRDOztFY3I3TEU7SUFBb0Msb0NBQUE7RWR5N0x0Qzs7RWN4N0xFO0lBQW9DLGtDQUFBO0VkNDdMdEM7O0VjMzdMRTtJQUFvQyx5Q0FBQTtFZCs3THRDOztFYzk3TEU7SUFBb0Msd0NBQUE7RWRrOEx0Qzs7RWNoOExFO0lBQWlDLGtDQUFBO0VkbzhMbkM7O0VjbjhMRTtJQUFpQyxnQ0FBQTtFZHU4TG5DOztFY3Q4TEU7SUFBaUMsOEJBQUE7RWQwOExuQzs7RWN6OExFO0lBQWlDLGdDQUFBO0VkNjhMbkM7O0VjNThMRTtJQUFpQywrQkFBQTtFZGc5TG5DOztFYzk4TEU7SUFBa0Msb0NBQUE7RWRrOUxwQzs7RWNqOUxFO0lBQWtDLGtDQUFBO0VkcTlMcEM7O0VjcDlMRTtJQUFrQyxnQ0FBQTtFZHc5THBDOztFY3Y5TEU7SUFBa0MsdUNBQUE7RWQyOUxwQzs7RWMxOUxFO0lBQWtDLHNDQUFBO0VkODlMcEM7O0VjNzlMRTtJQUFrQyxpQ0FBQTtFZGkrTHBDOztFYy85TEU7SUFBZ0MsMkJBQUE7RWRtK0xsQzs7RWNsK0xFO0lBQWdDLGlDQUFBO0VkcytMbEM7O0VjcitMRTtJQUFnQywrQkFBQTtFZHkrTGxDOztFY3grTEU7SUFBZ0MsNkJBQUE7RWQ0K0xsQzs7RWMzK0xFO0lBQWdDLCtCQUFBO0VkKytMbEM7O0VjOStMRTtJQUFnQyw4QkFBQTtFZGsvTGxDO0FBQ0Y7QXVCemhNUTtFQUFnQyxvQkFBQTtBdkI0aE14QztBdUIzaE1ROztFQUVFLHdCQUFBO0F2QjhoTVY7QXVCNWhNUTs7RUFFRSwwQkFBQTtBdkIraE1WO0F1QjdoTVE7O0VBRUUsMkJBQUE7QXZCZ2lNVjtBdUI5aE1ROztFQUVFLHlCQUFBO0F2QmlpTVY7QXVCaGpNUTtFQUFnQywwQkFBQTtBdkJvak14QztBdUJuak1ROztFQUVFLDhCQUFBO0F2QnNqTVY7QXVCcGpNUTs7RUFFRSxnQ0FBQTtBdkJ1ak1WO0F1QnJqTVE7O0VBRUUsaUNBQUE7QXZCd2pNVjtBdUJ0ak1ROztFQUVFLCtCQUFBO0F2QnlqTVY7QXVCeGtNUTtFQUFnQyx5QkFBQTtBdkI0a014QztBdUIza01ROztFQUVFLDZCQUFBO0F2QjhrTVY7QXVCNWtNUTs7RUFFRSwrQkFBQTtBdkIra01WO0F1QjdrTVE7O0VBRUUsZ0NBQUE7QXZCZ2xNVjtBdUI5a01ROztFQUVFLDhCQUFBO0F2QmlsTVY7QXVCaG1NUTtFQUFnQyx1QkFBQTtBdkJvbU14QztBdUJubU1ROztFQUVFLDJCQUFBO0F2QnNtTVY7QXVCcG1NUTs7RUFFRSw2QkFBQTtBdkJ1bU1WO0F1QnJtTVE7O0VBRUUsOEJBQUE7QXZCd21NVjtBdUJ0bU1ROztFQUVFLDRCQUFBO0F2QnltTVY7QXVCeG5NUTtFQUFnQyx5QkFBQTtBdkI0bk14QztBdUIzbk1ROztFQUVFLDZCQUFBO0F2QjhuTVY7QXVCNW5NUTs7RUFFRSwrQkFBQTtBdkIrbk1WO0F1QjduTVE7O0VBRUUsZ0NBQUE7QXZCZ29NVjtBdUI5bk1ROztFQUVFLDhCQUFBO0F2QmlvTVY7QXVCaHBNUTtFQUFnQyx1QkFBQTtBdkJvcE14QztBdUJucE1ROztFQUVFLDJCQUFBO0F2QnNwTVY7QXVCcHBNUTs7RUFFRSw2QkFBQTtBdkJ1cE1WO0F1QnJwTVE7O0VBRUUsOEJBQUE7QXZCd3BNVjtBdUJ0cE1ROztFQUVFLDRCQUFBO0F2QnlwTVY7QXVCeHFNUTtFQUFnQyxxQkFBQTtBdkI0cU14QztBdUIzcU1ROztFQUVFLHlCQUFBO0F2QjhxTVY7QXVCNXFNUTs7RUFFRSwyQkFBQTtBdkIrcU1WO0F1QjdxTVE7O0VBRUUsNEJBQUE7QXZCZ3JNVjtBdUI5cU1ROztFQUVFLDBCQUFBO0F2QmlyTVY7QXVCaHNNUTtFQUFnQywyQkFBQTtBdkJvc014QztBdUJuc01ROztFQUVFLCtCQUFBO0F2QnNzTVY7QXVCcHNNUTs7RUFFRSxpQ0FBQTtBdkJ1c01WO0F1QnJzTVE7O0VBRUUsa0NBQUE7QXZCd3NNVjtBdUJ0c01ROztFQUVFLGdDQUFBO0F2QnlzTVY7QXVCeHRNUTtFQUFnQywwQkFBQTtBdkI0dE14QztBdUIzdE1ROztFQUVFLDhCQUFBO0F2Qjh0TVY7QXVCNXRNUTs7RUFFRSxnQ0FBQTtBdkIrdE1WO0F1Qjd0TVE7O0VBRUUsaUNBQUE7QXZCZ3VNVjtBdUI5dE1ROztFQUVFLCtCQUFBO0F2Qml1TVY7QXVCaHZNUTtFQUFnQyx3QkFBQTtBdkJvdk14QztBdUJudk1ROztFQUVFLDRCQUFBO0F2QnN2TVY7QXVCcHZNUTs7RUFFRSw4QkFBQTtBdkJ1dk1WO0F1QnJ2TVE7O0VBRUUsK0JBQUE7QXZCd3ZNVjtBdUJ0dk1ROztFQUVFLDZCQUFBO0F2Qnl2TVY7QXVCeHdNUTtFQUFnQywwQkFBQTtBdkI0d014QztBdUIzd01ROztFQUVFLDhCQUFBO0F2Qjh3TVY7QXVCNXdNUTs7RUFFRSxnQ0FBQTtBdkIrd01WO0F1Qjd3TVE7O0VBRUUsaUNBQUE7QXZCZ3hNVjtBdUI5d01ROztFQUVFLCtCQUFBO0F2Qml4TVY7QXVCaHlNUTtFQUFnQyx3QkFBQTtBdkJveU14QztBdUJueU1ROztFQUVFLDRCQUFBO0F2QnN5TVY7QXVCcHlNUTs7RUFFRSw4QkFBQTtBdkJ1eU1WO0F1QnJ5TVE7O0VBRUUsK0JBQUE7QXZCd3lNVjtBdUJ0eU1ROztFQUVFLDZCQUFBO0F2Qnl5TVY7QXVCanlNUTtFQUF3QiwyQkFBQTtBdkJxeU1oQztBdUJweU1ROztFQUVFLCtCQUFBO0F2QnV5TVY7QXVCcnlNUTs7RUFFRSxpQ0FBQTtBdkJ3eU1WO0F1QnR5TVE7O0VBRUUsa0NBQUE7QXZCeXlNVjtBdUJ2eU1ROztFQUVFLGdDQUFBO0F2QjB5TVY7QXVCenpNUTtFQUF3QiwwQkFBQTtBdkI2ek1oQztBdUI1ek1ROztFQUVFLDhCQUFBO0F2Qit6TVY7QXVCN3pNUTs7RUFFRSxnQ0FBQTtBdkJnME1WO0F1Qjl6TVE7O0VBRUUsaUNBQUE7QXZCaTBNVjtBdUIvek1ROztFQUVFLCtCQUFBO0F2QmswTVY7QXVCajFNUTtFQUF3Qix3QkFBQTtBdkJxMU1oQztBdUJwMU1ROztFQUVFLDRCQUFBO0F2QnUxTVY7QXVCcjFNUTs7RUFFRSw4QkFBQTtBdkJ3MU1WO0F1QnQxTVE7O0VBRUUsK0JBQUE7QXZCeTFNVjtBdUJ2MU1ROztFQUVFLDZCQUFBO0F2QjAxTVY7QXVCejJNUTtFQUF3QiwwQkFBQTtBdkI2Mk1oQztBdUI1Mk1ROztFQUVFLDhCQUFBO0F2QisyTVY7QXVCNzJNUTs7RUFFRSxnQ0FBQTtBdkJnM01WO0F1QjkyTVE7O0VBRUUsaUNBQUE7QXZCaTNNVjtBdUIvMk1ROztFQUVFLCtCQUFBO0F2QmszTVY7QXVCajRNUTtFQUF3Qix3QkFBQTtBdkJxNE1oQztBdUJwNE1ROztFQUVFLDRCQUFBO0F2QnU0TVY7QXVCcjRNUTs7RUFFRSw4QkFBQTtBdkJ3NE1WO0F1QnQ0TVE7O0VBRUUsK0JBQUE7QXZCeTRNVjtBdUJ2NE1ROztFQUVFLDZCQUFBO0F2QjA0TVY7QXVCcDRNSTtFQUFtQix1QkFBQTtBdkJ3NE12QjtBdUJ2NE1JOztFQUVFLDJCQUFBO0F2QjA0TU47QXVCeDRNSTs7RUFFRSw2QkFBQTtBdkIyNE1OO0F1Qno0TUk7O0VBRUUsOEJBQUE7QXZCNDRNTjtBdUIxNE1JOztFQUVFLDRCQUFBO0F2QjY0TU47QVl0NU1JO0VXbERJO0lBQWdDLG9CQUFBO0V2QjY4TXRDOztFdUI1OE1NOztJQUVFLHdCQUFBO0V2Qis4TVI7O0V1Qjc4TU07O0lBRUUsMEJBQUE7RXZCZzlNUjs7RXVCOThNTTs7SUFFRSwyQkFBQTtFdkJpOU1SOztFdUIvOE1NOztJQUVFLHlCQUFBO0V2Qms5TVI7O0V1QmorTU07SUFBZ0MsMEJBQUE7RXZCcStNdEM7O0V1QnArTU07O0lBRUUsOEJBQUE7RXZCdStNUjs7RXVCcitNTTs7SUFFRSxnQ0FBQTtFdkJ3K01SOztFdUJ0K01NOztJQUVFLGlDQUFBO0V2QnkrTVI7O0V1QnYrTU07O0lBRUUsK0JBQUE7RXZCMCtNUjs7RXVCei9NTTtJQUFnQyx5QkFBQTtFdkI2L010Qzs7RXVCNS9NTTs7SUFFRSw2QkFBQTtFdkIrL01SOztFdUI3L01NOztJQUVFLCtCQUFBO0V2QmdnTlI7O0V1QjkvTU07O0lBRUUsZ0NBQUE7RXZCaWdOUjs7RXVCLy9NTTs7SUFFRSw4QkFBQTtFdkJrZ05SOztFdUJqaE5NO0lBQWdDLHVCQUFBO0V2QnFoTnRDOztFdUJwaE5NOztJQUVFLDJCQUFBO0V2QnVoTlI7O0V1QnJoTk07O0lBRUUsNkJBQUE7RXZCd2hOUjs7RXVCdGhOTTs7SUFFRSw4QkFBQTtFdkJ5aE5SOztFdUJ2aE5NOztJQUVFLDRCQUFBO0V2QjBoTlI7O0V1QnppTk07SUFBZ0MseUJBQUE7RXZCNmlOdEM7O0V1QjVpTk07O0lBRUUsNkJBQUE7RXZCK2lOUjs7RXVCN2lOTTs7SUFFRSwrQkFBQTtFdkJnak5SOztFdUI5aU5NOztJQUVFLGdDQUFBO0V2QmlqTlI7O0V1Qi9pTk07O0lBRUUsOEJBQUE7RXZCa2pOUjs7RXVCamtOTTtJQUFnQyx1QkFBQTtFdkJxa050Qzs7RXVCcGtOTTs7SUFFRSwyQkFBQTtFdkJ1a05SOztFdUJya05NOztJQUVFLDZCQUFBO0V2QndrTlI7O0V1QnRrTk07O0lBRUUsOEJBQUE7RXZCeWtOUjs7RXVCdmtOTTs7SUFFRSw0QkFBQTtFdkIwa05SOztFdUJ6bE5NO0lBQWdDLHFCQUFBO0V2QjZsTnRDOztFdUI1bE5NOztJQUVFLHlCQUFBO0V2QitsTlI7O0V1QjdsTk07O0lBRUUsMkJBQUE7RXZCZ21OUjs7RXVCOWxOTTs7SUFFRSw0QkFBQTtFdkJpbU5SOztFdUIvbE5NOztJQUVFLDBCQUFBO0V2QmttTlI7O0V1QmpuTk07SUFBZ0MsMkJBQUE7RXZCcW5OdEM7O0V1QnBuTk07O0lBRUUsK0JBQUE7RXZCdW5OUjs7RXVCcm5OTTs7SUFFRSxpQ0FBQTtFdkJ3bk5SOztFdUJ0bk5NOztJQUVFLGtDQUFBO0V2QnluTlI7O0V1QnZuTk07O0lBRUUsZ0NBQUE7RXZCMG5OUjs7RXVCem9OTTtJQUFnQywwQkFBQTtFdkI2b050Qzs7RXVCNW9OTTs7SUFFRSw4QkFBQTtFdkIrb05SOztFdUI3b05NOztJQUVFLGdDQUFBO0V2QmdwTlI7O0V1QjlvTk07O0lBRUUsaUNBQUE7RXZCaXBOUjs7RXVCL29OTTs7SUFFRSwrQkFBQTtFdkJrcE5SOztFdUJqcU5NO0lBQWdDLHdCQUFBO0V2QnFxTnRDOztFdUJwcU5NOztJQUVFLDRCQUFBO0V2QnVxTlI7O0V1QnJxTk07O0lBRUUsOEJBQUE7RXZCd3FOUjs7RXVCdHFOTTs7SUFFRSwrQkFBQTtFdkJ5cU5SOztFdUJ2cU5NOztJQUVFLDZCQUFBO0V2QjBxTlI7O0V1QnpyTk07SUFBZ0MsMEJBQUE7RXZCNnJOdEM7O0V1QjVyTk07O0lBRUUsOEJBQUE7RXZCK3JOUjs7RXVCN3JOTTs7SUFFRSxnQ0FBQTtFdkJnc05SOztFdUI5ck5NOztJQUVFLGlDQUFBO0V2QmlzTlI7O0V1Qi9yTk07O0lBRUUsK0JBQUE7RXZCa3NOUjs7RXVCanROTTtJQUFnQyx3QkFBQTtFdkJxdE50Qzs7RXVCcHROTTs7SUFFRSw0QkFBQTtFdkJ1dE5SOztFdUJydE5NOztJQUVFLDhCQUFBO0V2Qnd0TlI7O0V1QnR0Tk07O0lBRUUsK0JBQUE7RXZCeXROUjs7RXVCdnROTTs7SUFFRSw2QkFBQTtFdkIwdE5SOztFdUJsdE5NO0lBQXdCLDJCQUFBO0V2QnN0TjlCOztFdUJydE5NOztJQUVFLCtCQUFBO0V2Qnd0TlI7O0V1QnR0Tk07O0lBRUUsaUNBQUE7RXZCeXROUjs7RXVCdnROTTs7SUFFRSxrQ0FBQTtFdkIwdE5SOztFdUJ4dE5NOztJQUVFLGdDQUFBO0V2QjJ0TlI7O0V1QjF1Tk07SUFBd0IsMEJBQUE7RXZCOHVOOUI7O0V1Qjd1Tk07O0lBRUUsOEJBQUE7RXZCZ3ZOUjs7RXVCOXVOTTs7SUFFRSxnQ0FBQTtFdkJpdk5SOztFdUIvdU5NOztJQUVFLGlDQUFBO0V2Qmt2TlI7O0V1Qmh2Tk07O0lBRUUsK0JBQUE7RXZCbXZOUjs7RXVCbHdOTTtJQUF3Qix3QkFBQTtFdkJzd045Qjs7RXVCcndOTTs7SUFFRSw0QkFBQTtFdkJ3d05SOztFdUJ0d05NOztJQUVFLDhCQUFBO0V2Qnl3TlI7O0V1QnZ3Tk07O0lBRUUsK0JBQUE7RXZCMHdOUjs7RXVCeHdOTTs7SUFFRSw2QkFBQTtFdkIyd05SOztFdUIxeE5NO0lBQXdCLDBCQUFBO0V2Qjh4TjlCOztFdUI3eE5NOztJQUVFLDhCQUFBO0V2Qmd5TlI7O0V1Qjl4Tk07O0lBRUUsZ0NBQUE7RXZCaXlOUjs7RXVCL3hOTTs7SUFFRSxpQ0FBQTtFdkJreU5SOztFdUJoeU5NOztJQUVFLCtCQUFBO0V2Qm15TlI7O0V1Qmx6Tk07SUFBd0Isd0JBQUE7RXZCc3pOOUI7O0V1QnJ6Tk07O0lBRUUsNEJBQUE7RXZCd3pOUjs7RXVCdHpOTTs7SUFFRSw4QkFBQTtFdkJ5ek5SOztFdUJ2ek5NOztJQUVFLCtCQUFBO0V2QjB6TlI7O0V1Qnh6Tk07O0lBRUUsNkJBQUE7RXZCMnpOUjs7RXVCcnpORTtJQUFtQix1QkFBQTtFdkJ5ek5yQjs7RXVCeHpORTs7SUFFRSwyQkFBQTtFdkIyek5KOztFdUJ6ek5FOztJQUVFLDZCQUFBO0V2QjR6Tko7O0V1QjF6TkU7O0lBRUUsOEJBQUE7RXZCNnpOSjs7RXVCM3pORTs7SUFFRSw0QkFBQTtFdkI4ek5KO0FBQ0Y7QVl4ME5JO0VXbERJO0lBQWdDLG9CQUFBO0V2QjgzTnRDOztFdUI3M05NOztJQUVFLHdCQUFBO0V2Qmc0TlI7O0V1QjkzTk07O0lBRUUsMEJBQUE7RXZCaTROUjs7RXVCLzNOTTs7SUFFRSwyQkFBQTtFdkJrNE5SOztFdUJoNE5NOztJQUVFLHlCQUFBO0V2Qm00TlI7O0V1Qmw1Tk07SUFBZ0MsMEJBQUE7RXZCczVOdEM7O0V1QnI1Tk07O0lBRUUsOEJBQUE7RXZCdzVOUjs7RXVCdDVOTTs7SUFFRSxnQ0FBQTtFdkJ5NU5SOztFdUJ2NU5NOztJQUVFLGlDQUFBO0V2QjA1TlI7O0V1Qng1Tk07O0lBRUUsK0JBQUE7RXZCMjVOUjs7RXVCMTZOTTtJQUFnQyx5QkFBQTtFdkI4Nk50Qzs7RXVCNzZOTTs7SUFFRSw2QkFBQTtFdkJnN05SOztFdUI5Nk5NOztJQUVFLCtCQUFBO0V2Qmk3TlI7O0V1Qi82Tk07O0lBRUUsZ0NBQUE7RXZCazdOUjs7RXVCaDdOTTs7SUFFRSw4QkFBQTtFdkJtN05SOztFdUJsOE5NO0lBQWdDLHVCQUFBO0V2QnM4TnRDOztFdUJyOE5NOztJQUVFLDJCQUFBO0V2Qnc4TlI7O0V1QnQ4Tk07O0lBRUUsNkJBQUE7RXZCeThOUjs7RXVCdjhOTTs7SUFFRSw4QkFBQTtFdkIwOE5SOztFdUJ4OE5NOztJQUVFLDRCQUFBO0V2QjI4TlI7O0V1QjE5Tk07SUFBZ0MseUJBQUE7RXZCODlOdEM7O0V1Qjc5Tk07O0lBRUUsNkJBQUE7RXZCZytOUjs7RXVCOTlOTTs7SUFFRSwrQkFBQTtFdkJpK05SOztFdUIvOU5NOztJQUVFLGdDQUFBO0V2QmsrTlI7O0V1QmgrTk07O0lBRUUsOEJBQUE7RXZCbStOUjs7RXVCbC9OTTtJQUFnQyx1QkFBQTtFdkJzL050Qzs7RXVCci9OTTs7SUFFRSwyQkFBQTtFdkJ3L05SOztFdUJ0L05NOztJQUVFLDZCQUFBO0V2QnkvTlI7O0V1QnYvTk07O0lBRUUsOEJBQUE7RXZCMC9OUjs7RXVCeC9OTTs7SUFFRSw0QkFBQTtFdkIyL05SOztFdUIxZ09NO0lBQWdDLHFCQUFBO0V2QjhnT3RDOztFdUI3Z09NOztJQUVFLHlCQUFBO0V2QmdoT1I7O0V1QjlnT007O0lBRUUsMkJBQUE7RXZCaWhPUjs7RXVCL2dPTTs7SUFFRSw0QkFBQTtFdkJraE9SOztFdUJoaE9NOztJQUVFLDBCQUFBO0V2Qm1oT1I7O0V1QmxpT007SUFBZ0MsMkJBQUE7RXZCc2lPdEM7O0V1QnJpT007O0lBRUUsK0JBQUE7RXZCd2lPUjs7RXVCdGlPTTs7SUFFRSxpQ0FBQTtFdkJ5aU9SOztFdUJ2aU9NOztJQUVFLGtDQUFBO0V2QjBpT1I7O0V1QnhpT007O0lBRUUsZ0NBQUE7RXZCMmlPUjs7RXVCMWpPTTtJQUFnQywwQkFBQTtFdkI4ak90Qzs7RXVCN2pPTTs7SUFFRSw4QkFBQTtFdkJna09SOztFdUI5ak9NOztJQUVFLGdDQUFBO0V2QmlrT1I7O0V1Qi9qT007O0lBRUUsaUNBQUE7RXZCa2tPUjs7RXVCaGtPTTs7SUFFRSwrQkFBQTtFdkJta09SOztFdUJsbE9NO0lBQWdDLHdCQUFBO0V2QnNsT3RDOztFdUJybE9NOztJQUVFLDRCQUFBO0V2QndsT1I7O0V1QnRsT007O0lBRUUsOEJBQUE7RXZCeWxPUjs7RXVCdmxPTTs7SUFFRSwrQkFBQTtFdkIwbE9SOztFdUJ4bE9NOztJQUVFLDZCQUFBO0V2QjJsT1I7O0V1QjFtT007SUFBZ0MsMEJBQUE7RXZCOG1PdEM7O0V1QjdtT007O0lBRUUsOEJBQUE7RXZCZ25PUjs7RXVCOW1PTTs7SUFFRSxnQ0FBQTtFdkJpbk9SOztFdUIvbU9NOztJQUVFLGlDQUFBO0V2QmtuT1I7O0V1QmhuT007O0lBRUUsK0JBQUE7RXZCbW5PUjs7RXVCbG9PTTtJQUFnQyx3QkFBQTtFdkJzb090Qzs7RXVCcm9PTTs7SUFFRSw0QkFBQTtFdkJ3b09SOztFdUJ0b09NOztJQUVFLDhCQUFBO0V2QnlvT1I7O0V1QnZvT007O0lBRUUsK0JBQUE7RXZCMG9PUjs7RXVCeG9PTTs7SUFFRSw2QkFBQTtFdkIyb09SOztFdUJub09NO0lBQXdCLDJCQUFBO0V2QnVvTzlCOztFdUJ0b09NOztJQUVFLCtCQUFBO0V2QnlvT1I7O0V1QnZvT007O0lBRUUsaUNBQUE7RXZCMG9PUjs7RXVCeG9PTTs7SUFFRSxrQ0FBQTtFdkIyb09SOztFdUJ6b09NOztJQUVFLGdDQUFBO0V2QjRvT1I7O0V1QjNwT007SUFBd0IsMEJBQUE7RXZCK3BPOUI7O0V1QjlwT007O0lBRUUsOEJBQUE7RXZCaXFPUjs7RXVCL3BPTTs7SUFFRSxnQ0FBQTtFdkJrcU9SOztFdUJocU9NOztJQUVFLGlDQUFBO0V2Qm1xT1I7O0V1QmpxT007O0lBRUUsK0JBQUE7RXZCb3FPUjs7RXVCbnJPTTtJQUF3Qix3QkFBQTtFdkJ1ck85Qjs7RXVCdHJPTTs7SUFFRSw0QkFBQTtFdkJ5ck9SOztFdUJ2ck9NOztJQUVFLDhCQUFBO0V2QjByT1I7O0V1QnhyT007O0lBRUUsK0JBQUE7RXZCMnJPUjs7RXVCenJPTTs7SUFFRSw2QkFBQTtFdkI0ck9SOztFdUIzc09NO0lBQXdCLDBCQUFBO0V2QitzTzlCOztFdUI5c09NOztJQUVFLDhCQUFBO0V2Qml0T1I7O0V1Qi9zT007O0lBRUUsZ0NBQUE7RXZCa3RPUjs7RXVCaHRPTTs7SUFFRSxpQ0FBQTtFdkJtdE9SOztFdUJqdE9NOztJQUVFLCtCQUFBO0V2Qm90T1I7O0V1Qm51T007SUFBd0Isd0JBQUE7RXZCdXVPOUI7O0V1QnR1T007O0lBRUUsNEJBQUE7RXZCeXVPUjs7RXVCdnVPTTs7SUFFRSw4QkFBQTtFdkIwdU9SOztFdUJ4dU9NOztJQUVFLCtCQUFBO0V2QjJ1T1I7O0V1Qnp1T007O0lBRUUsNkJBQUE7RXZCNHVPUjs7RXVCdHVPRTtJQUFtQix1QkFBQTtFdkIwdU9yQjs7RXVCenVPRTs7SUFFRSwyQkFBQTtFdkI0dU9KOztFdUIxdU9FOztJQUVFLDZCQUFBO0V2QjZ1T0o7O0V1QjN1T0U7O0lBRUUsOEJBQUE7RXZCOHVPSjs7RXVCNXVPRTs7SUFFRSw0QkFBQTtFdkIrdU9KO0FBQ0Y7QVl6dk9JO0VXbERJO0lBQWdDLG9CQUFBO0V2Qit5T3RDOztFdUI5eU9NOztJQUVFLHdCQUFBO0V2Qml6T1I7O0V1Qi95T007O0lBRUUsMEJBQUE7RXZCa3pPUjs7RXVCaHpPTTs7SUFFRSwyQkFBQTtFdkJtek9SOztFdUJqek9NOztJQUVFLHlCQUFBO0V2Qm96T1I7O0V1Qm4wT007SUFBZ0MsMEJBQUE7RXZCdTBPdEM7O0V1QnQwT007O0lBRUUsOEJBQUE7RXZCeTBPUjs7RXVCdjBPTTs7SUFFRSxnQ0FBQTtFdkIwME9SOztFdUJ4ME9NOztJQUVFLGlDQUFBO0V2QjIwT1I7O0V1QnowT007O0lBRUUsK0JBQUE7RXZCNDBPUjs7RXVCMzFPTTtJQUFnQyx5QkFBQTtFdkIrMU90Qzs7RXVCOTFPTTs7SUFFRSw2QkFBQTtFdkJpMk9SOztFdUIvMU9NOztJQUVFLCtCQUFBO0V2QmsyT1I7O0V1QmgyT007O0lBRUUsZ0NBQUE7RXZCbTJPUjs7RXVCajJPTTs7SUFFRSw4QkFBQTtFdkJvMk9SOztFdUJuM09NO0lBQWdDLHVCQUFBO0V2QnUzT3RDOztFdUJ0M09NOztJQUVFLDJCQUFBO0V2QnkzT1I7O0V1QnYzT007O0lBRUUsNkJBQUE7RXZCMDNPUjs7RXVCeDNPTTs7SUFFRSw4QkFBQTtFdkIyM09SOztFdUJ6M09NOztJQUVFLDRCQUFBO0V2QjQzT1I7O0V1QjM0T007SUFBZ0MseUJBQUE7RXZCKzRPdEM7O0V1Qjk0T007O0lBRUUsNkJBQUE7RXZCaTVPUjs7RXVCLzRPTTs7SUFFRSwrQkFBQTtFdkJrNU9SOztFdUJoNU9NOztJQUVFLGdDQUFBO0V2Qm01T1I7O0V1Qmo1T007O0lBRUUsOEJBQUE7RXZCbzVPUjs7RXVCbjZPTTtJQUFnQyx1QkFBQTtFdkJ1Nk90Qzs7RXVCdDZPTTs7SUFFRSwyQkFBQTtFdkJ5Nk9SOztFdUJ2Nk9NOztJQUVFLDZCQUFBO0V2QjA2T1I7O0V1Qng2T007O0lBRUUsOEJBQUE7RXZCMjZPUjs7RXVCejZPTTs7SUFFRSw0QkFBQTtFdkI0Nk9SOztFdUIzN09NO0lBQWdDLHFCQUFBO0V2Qis3T3RDOztFdUI5N09NOztJQUVFLHlCQUFBO0V2Qmk4T1I7O0V1Qi83T007O0lBRUUsMkJBQUE7RXZCazhPUjs7RXVCaDhPTTs7SUFFRSw0QkFBQTtFdkJtOE9SOztFdUJqOE9NOztJQUVFLDBCQUFBO0V2Qm84T1I7O0V1Qm45T007SUFBZ0MsMkJBQUE7RXZCdTlPdEM7O0V1QnQ5T007O0lBRUUsK0JBQUE7RXZCeTlPUjs7RXVCdjlPTTs7SUFFRSxpQ0FBQTtFdkIwOU9SOztFdUJ4OU9NOztJQUVFLGtDQUFBO0V2QjI5T1I7O0V1Qno5T007O0lBRUUsZ0NBQUE7RXZCNDlPUjs7RXVCMytPTTtJQUFnQywwQkFBQTtFdkIrK090Qzs7RXVCOStPTTs7SUFFRSw4QkFBQTtFdkJpL09SOztFdUIvK09NOztJQUVFLGdDQUFBO0V2QmsvT1I7O0V1QmgvT007O0lBRUUsaUNBQUE7RXZCbS9PUjs7RXVCai9PTTs7SUFFRSwrQkFBQTtFdkJvL09SOztFdUJuZ1BNO0lBQWdDLHdCQUFBO0V2QnVnUHRDOztFdUJ0Z1BNOztJQUVFLDRCQUFBO0V2QnlnUFI7O0V1QnZnUE07O0lBRUUsOEJBQUE7RXZCMGdQUjs7RXVCeGdQTTs7SUFFRSwrQkFBQTtFdkIyZ1BSOztFdUJ6Z1BNOztJQUVFLDZCQUFBO0V2QjRnUFI7O0V1QjNoUE07SUFBZ0MsMEJBQUE7RXZCK2hQdEM7O0V1QjloUE07O0lBRUUsOEJBQUE7RXZCaWlQUjs7RXVCL2hQTTs7SUFFRSxnQ0FBQTtFdkJraVBSOztFdUJoaVBNOztJQUVFLGlDQUFBO0V2Qm1pUFI7O0V1QmppUE07O0lBRUUsK0JBQUE7RXZCb2lQUjs7RXVCbmpQTTtJQUFnQyx3QkFBQTtFdkJ1alB0Qzs7RXVCdGpQTTs7SUFFRSw0QkFBQTtFdkJ5alBSOztFdUJ2alBNOztJQUVFLDhCQUFBO0V2QjBqUFI7O0V1QnhqUE07O0lBRUUsK0JBQUE7RXZCMmpQUjs7RXVCempQTTs7SUFFRSw2QkFBQTtFdkI0alBSOztFdUJwalBNO0lBQXdCLDJCQUFBO0V2QndqUDlCOztFdUJ2alBNOztJQUVFLCtCQUFBO0V2QjBqUFI7O0V1QnhqUE07O0lBRUUsaUNBQUE7RXZCMmpQUjs7RXVCempQTTs7SUFFRSxrQ0FBQTtFdkI0alBSOztFdUIxalBNOztJQUVFLGdDQUFBO0V2QjZqUFI7O0V1QjVrUE07SUFBd0IsMEJBQUE7RXZCZ2xQOUI7O0V1Qi9rUE07O0lBRUUsOEJBQUE7RXZCa2xQUjs7RXVCaGxQTTs7SUFFRSxnQ0FBQTtFdkJtbFBSOztFdUJqbFBNOztJQUVFLGlDQUFBO0V2Qm9sUFI7O0V1QmxsUE07O0lBRUUsK0JBQUE7RXZCcWxQUjs7RXVCcG1QTTtJQUF3Qix3QkFBQTtFdkJ3bVA5Qjs7RXVCdm1QTTs7SUFFRSw0QkFBQTtFdkIwbVBSOztFdUJ4bVBNOztJQUVFLDhCQUFBO0V2QjJtUFI7O0V1QnptUE07O0lBRUUsK0JBQUE7RXZCNG1QUjs7RXVCMW1QTTs7SUFFRSw2QkFBQTtFdkI2bVBSOztFdUI1blBNO0lBQXdCLDBCQUFBO0V2QmdvUDlCOztFdUIvblBNOztJQUVFLDhCQUFBO0V2QmtvUFI7O0V1QmhvUE07O0lBRUUsZ0NBQUE7RXZCbW9QUjs7RXVCam9QTTs7SUFFRSxpQ0FBQTtFdkJvb1BSOztFdUJsb1BNOztJQUVFLCtCQUFBO0V2QnFvUFI7O0V1QnBwUE07SUFBd0Isd0JBQUE7RXZCd3BQOUI7O0V1QnZwUE07O0lBRUUsNEJBQUE7RXZCMHBQUjs7RXVCeHBQTTs7SUFFRSw4QkFBQTtFdkIycFBSOztFdUJ6cFBNOztJQUVFLCtCQUFBO0V2QjRwUFI7O0V1QjFwUE07O0lBRUUsNkJBQUE7RXZCNnBQUjs7RXVCdnBQRTtJQUFtQix1QkFBQTtFdkIycFByQjs7RXVCMXBQRTs7SUFFRSwyQkFBQTtFdkI2cFBKOztFdUIzcFBFOztJQUVFLDZCQUFBO0V2QjhwUEo7O0V1QjVwUEU7O0lBRUUsOEJBQUE7RXZCK3BQSjs7RXVCN3BQRTs7SUFFRSw0QkFBQTtFdkJncVBKO0FBQ0Y7QVkxcVBJO0VXbERJO0lBQWdDLG9CQUFBO0V2Qmd1UHRDOztFdUIvdFBNOztJQUVFLHdCQUFBO0V2Qmt1UFI7O0V1Qmh1UE07O0lBRUUsMEJBQUE7RXZCbXVQUjs7RXVCanVQTTs7SUFFRSwyQkFBQTtFdkJvdVBSOztFdUJsdVBNOztJQUVFLHlCQUFBO0V2QnF1UFI7O0V1QnB2UE07SUFBZ0MsMEJBQUE7RXZCd3ZQdEM7O0V1QnZ2UE07O0lBRUUsOEJBQUE7RXZCMHZQUjs7RXVCeHZQTTs7SUFFRSxnQ0FBQTtFdkIydlBSOztFdUJ6dlBNOztJQUVFLGlDQUFBO0V2QjR2UFI7O0V1QjF2UE07O0lBRUUsK0JBQUE7RXZCNnZQUjs7RXVCNXdQTTtJQUFnQyx5QkFBQTtFdkJneFB0Qzs7RXVCL3dQTTs7SUFFRSw2QkFBQTtFdkJreFBSOztFdUJoeFBNOztJQUVFLCtCQUFBO0V2Qm14UFI7O0V1Qmp4UE07O0lBRUUsZ0NBQUE7RXZCb3hQUjs7RXVCbHhQTTs7SUFFRSw4QkFBQTtFdkJxeFBSOztFdUJweVBNO0lBQWdDLHVCQUFBO0V2Qnd5UHRDOztFdUJ2eVBNOztJQUVFLDJCQUFBO0V2QjB5UFI7O0V1Qnh5UE07O0lBRUUsNkJBQUE7RXZCMnlQUjs7RXVCenlQTTs7SUFFRSw4QkFBQTtFdkI0eVBSOztFdUIxeVBNOztJQUVFLDRCQUFBO0V2QjZ5UFI7O0V1QjV6UE07SUFBZ0MseUJBQUE7RXZCZzBQdEM7O0V1Qi96UE07O0lBRUUsNkJBQUE7RXZCazBQUjs7RXVCaDBQTTs7SUFFRSwrQkFBQTtFdkJtMFBSOztFdUJqMFBNOztJQUVFLGdDQUFBO0V2Qm8wUFI7O0V1QmwwUE07O0lBRUUsOEJBQUE7RXZCcTBQUjs7RXVCcDFQTTtJQUFnQyx1QkFBQTtFdkJ3MVB0Qzs7RXVCdjFQTTs7SUFFRSwyQkFBQTtFdkIwMVBSOztFdUJ4MVBNOztJQUVFLDZCQUFBO0V2QjIxUFI7O0V1QnoxUE07O0lBRUUsOEJBQUE7RXZCNDFQUjs7RXVCMTFQTTs7SUFFRSw0QkFBQTtFdkI2MVBSOztFdUI1MlBNO0lBQWdDLHFCQUFBO0V2QmczUHRDOztFdUIvMlBNOztJQUVFLHlCQUFBO0V2QmszUFI7O0V1QmgzUE07O0lBRUUsMkJBQUE7RXZCbTNQUjs7RXVCajNQTTs7SUFFRSw0QkFBQTtFdkJvM1BSOztFdUJsM1BNOztJQUVFLDBCQUFBO0V2QnEzUFI7O0V1QnA0UE07SUFBZ0MsMkJBQUE7RXZCdzRQdEM7O0V1QnY0UE07O0lBRUUsK0JBQUE7RXZCMDRQUjs7RXVCeDRQTTs7SUFFRSxpQ0FBQTtFdkIyNFBSOztFdUJ6NFBNOztJQUVFLGtDQUFBO0V2QjQ0UFI7O0V1QjE0UE07O0lBRUUsZ0NBQUE7RXZCNjRQUjs7RXVCNTVQTTtJQUFnQywwQkFBQTtFdkJnNlB0Qzs7RXVCLzVQTTs7SUFFRSw4QkFBQTtFdkJrNlBSOztFdUJoNlBNOztJQUVFLGdDQUFBO0V2Qm02UFI7O0V1Qmo2UE07O0lBRUUsaUNBQUE7RXZCbzZQUjs7RXVCbDZQTTs7SUFFRSwrQkFBQTtFdkJxNlBSOztFdUJwN1BNO0lBQWdDLHdCQUFBO0V2Qnc3UHRDOztFdUJ2N1BNOztJQUVFLDRCQUFBO0V2QjA3UFI7O0V1Qng3UE07O0lBRUUsOEJBQUE7RXZCMjdQUjs7RXVCejdQTTs7SUFFRSwrQkFBQTtFdkI0N1BSOztFdUIxN1BNOztJQUVFLDZCQUFBO0V2QjY3UFI7O0V1QjU4UE07SUFBZ0MsMEJBQUE7RXZCZzlQdEM7O0V1Qi84UE07O0lBRUUsOEJBQUE7RXZCazlQUjs7RXVCaDlQTTs7SUFFRSxnQ0FBQTtFdkJtOVBSOztFdUJqOVBNOztJQUVFLGlDQUFBO0V2Qm85UFI7O0V1Qmw5UE07O0lBRUUsK0JBQUE7RXZCcTlQUjs7RXVCcCtQTTtJQUFnQyx3QkFBQTtFdkJ3K1B0Qzs7RXVCditQTTs7SUFFRSw0QkFBQTtFdkIwK1BSOztFdUJ4K1BNOztJQUVFLDhCQUFBO0V2QjIrUFI7O0V1QnorUE07O0lBRUUsK0JBQUE7RXZCNCtQUjs7RXVCMStQTTs7SUFFRSw2QkFBQTtFdkI2K1BSOztFdUJyK1BNO0lBQXdCLDJCQUFBO0V2QnkrUDlCOztFdUJ4K1BNOztJQUVFLCtCQUFBO0V2QjIrUFI7O0V1QnorUE07O0lBRUUsaUNBQUE7RXZCNCtQUjs7RXVCMStQTTs7SUFFRSxrQ0FBQTtFdkI2K1BSOztFdUIzK1BNOztJQUVFLGdDQUFBO0V2QjgrUFI7O0V1QjcvUE07SUFBd0IsMEJBQUE7RXZCaWdROUI7O0V1QmhnUU07O0lBRUUsOEJBQUE7RXZCbWdRUjs7RXVCamdRTTs7SUFFRSxnQ0FBQTtFdkJvZ1FSOztFdUJsZ1FNOztJQUVFLGlDQUFBO0V2QnFnUVI7O0V1Qm5nUU07O0lBRUUsK0JBQUE7RXZCc2dRUjs7RXVCcmhRTTtJQUF3Qix3QkFBQTtFdkJ5aFE5Qjs7RXVCeGhRTTs7SUFFRSw0QkFBQTtFdkIyaFFSOztFdUJ6aFFNOztJQUVFLDhCQUFBO0V2QjRoUVI7O0V1QjFoUU07O0lBRUUsK0JBQUE7RXZCNmhRUjs7RXVCM2hRTTs7SUFFRSw2QkFBQTtFdkI4aFFSOztFdUI3aVFNO0lBQXdCLDBCQUFBO0V2QmlqUTlCOztFdUJoalFNOztJQUVFLDhCQUFBO0V2Qm1qUVI7O0V1QmpqUU07O0lBRUUsZ0NBQUE7RXZCb2pRUjs7RXVCbGpRTTs7SUFFRSxpQ0FBQTtFdkJxalFSOztFdUJualFNOztJQUVFLCtCQUFBO0V2QnNqUVI7O0V1QnJrUU07SUFBd0Isd0JBQUE7RXZCeWtROUI7O0V1QnhrUU07O0lBRUUsNEJBQUE7RXZCMmtRUjs7RXVCemtRTTs7SUFFRSw4QkFBQTtFdkI0a1FSOztFdUIxa1FNOztJQUVFLCtCQUFBO0V2QjZrUVI7O0V1QjNrUU07O0lBRUUsNkJBQUE7RXZCOGtRUjs7RXVCeGtRRTtJQUFtQix1QkFBQTtFdkI0a1FyQjs7RXVCM2tRRTs7SUFFRSwyQkFBQTtFdkI4a1FKOztFdUI1a1FFOztJQUVFLDZCQUFBO0V2QitrUUo7O0V1QjdrUUU7O0lBRUUsOEJBQUE7RXZCZ2xRSjs7RXVCOWtRRTs7SUFFRSw0QkFBQTtFdkJpbFFKO0FBQ0Y7QW1DaHBRQTtFQ0lFLGVBQUE7RUFHQSxZQUFBO0FwQzZvUUY7QW1DOW9RQTtFQUNFLGdCaENtZ0NrQztFZ0NsZ0NsQyxzQmhDUlM7RWdDU1QseUJBQUE7RUVFRSxzQkFBQTtFRFBGLGVBQUE7RUFHQSxZQUFBO0FwQ3NwUUY7QW1DeG9RQTtFQUVFLHFCQUFBO0FuQzBvUUY7QW1Ddm9RQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBbkMwb1FGO0FtQ3ZvUUE7RS9Ca0NJLGNBQUE7RStCaENGLGNoQzNCUztBSHFxUVg7QXNDbHJRQTtFQUNFLFdDRU07QXZDbXJRUjtBc0NsclFBO0VBQ0UsV0NETTtBdkNzclFSO0FzQ2xyUUE7RUFDRSxXQ0pLO0F2Q3lyUVA7QXNDbHJRQTtFQUNFLGtCQUFBO0F0Q3FyUUY7QXNDbHJRQTtFQUNFLGVBQUE7QXRDcXJRRjtBc0NsclFBO0VBQ0UsZUFBQTtBdENxclFGO0FzQ2xyUUE7RUFDRSxlQUFBO0F0Q3FyUUY7QXdDOXNRQTtFQUNFLFdER007RUNGTixvQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QXhDaXRRRjtBd0M5c1FBO0VBQ0UsWUFBQTtBeENpdFFGO0F5QzN0UUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRlBRO0VFUVIsU0FBQTtBekM4dFFGO0EwQ3R1UUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUZBQUE7QTFDeXVRRjtBMkM1dVFBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZEQUFBO0VBQ0EseUJKSGM7QXZDa3ZRaEI7QTRDbnZRQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBNUNzdlFGO0E0Q252UUE7RUFDRSxlQUFBO0VBQ0EsV0xITTtBdkN5dlFSO0E0Q252UUE7O0VBRUUsZ0JBQUE7QTVDc3ZRRjtBNENudlFBOzs7RUFHRSxnQkFBQTtBNUNzdlFGO0E2Q3h3UUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBN0Myd1FGO0E4Qy93UUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNQUlE7RU9TUix5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QTlDa3hRRjtBOENoeFFFO0VBQ0UsY1BkTTtFT2VOLHFCQUFBO0VBQ0EseUNBQUE7QTlDa3hRSjtBOEMvd1FFO0VBQ0UsZ0JQakJJO0VPa0JKLGtCUGxCSTtBdkNteVFSO0E4Qy93UUk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0E5Q2l4UU47QThDN3dRRTtFQUNFLFdQM0JJO0VPNEJKLGtCUDVCSTtBdkMyeVFSO0E4Qzd3UUk7RUFDRSwyQ0FBQTtBOUMrd1FOO0ErQ2p6UUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QS9Db3pRRjtBK0NselFFO0VBQ0UsbUJBQUE7QS9Db3pRSjtBK0NqelFFO0VBQ0UsT0FBQTtBL0NtelFKO0ErQ2h6UUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0EvQ2t6UUo7QStDaHpRSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QS9Da3pRTjtBZ0R0MFFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FoRHkwUUY7QWdEdjBRRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQ1RpQjtFRFVqQixnQkFBQTtFQUNBLFlBQUE7QWhEeTBRSjtBZ0R0MFFFO0VBQ0UsZUFBQTtBaER3MFFKIiwiZmlsZSI6InF1YW50dW0tbGFuZGluZy1wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiFcbiAqIEJvb3RzdHJhcCBSZWJvb3QgdjQuNi4wIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICogQ29weXJpZ2h0IDIwMTEtMjAyMSBUaGUgQm9vdHN0cmFwIEF1dGhvcnNcbiAqIENvcHlyaWdodCAyMDExLTIwMjEgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiBGb3JrZWQgZnJvbSBOb3JtYWxpemUuY3NzLCBsaWNlbnNlZCBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcbiAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbmFydGljbGUsIGFzaWRlLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1haW4sIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgXCJMaWJlcmF0aW9uIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5bdGFiaW5kZXg9XCItMVwiXTpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpIHtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuYWJiclt0aXRsZV0sXG5hYmJyW2RhdGEtb3JpZ2luYWwtdGl0bGVdIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgY3Vyc29yOiBoZWxwO1xuICBib3JkZXItYm90dG9tOiAwO1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XG59XG5cbmFkZHJlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG5vbCxcbnVsLFxuZGwge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5vbCBvbCxcbnVsIHVsLFxub2wgdWwsXG51bCBvbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmR0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuZGQge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG5ibG9ja3F1b3RlIHtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbnN1YixcbnN1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbmEge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogIzAwNTZiMztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmE6bm90KFtocmVmXSk6bm90KFtjbGFzc10pIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6bm90KFtocmVmXSk6bm90KFtjbGFzc10pOmhvdmVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxucHJlLFxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbnByZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjtcbn1cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5zdmcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbmNhcHRpb24ge1xuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjYXB0aW9uLXNpZGU6IGJvdHRvbTtcbn1cblxudGgge1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuYnV0dG9uOmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSkge1xuICBvdXRsaW5lOiAwO1xufVxuXG5pbnB1dCxcbmJ1dHRvbixcbnNlbGVjdCxcbm9wdGdyb3VwLFxudGV4dGFyZWEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG5idXR0b24sXG5pbnB1dCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuW3JvbGU9YnV0dG9uXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc2VsZWN0IHtcbiAgd29yZC13cmFwOiBub3JtYWw7XG59XG5cbmJ1dHRvbixcblt0eXBlPWJ1dHRvbl0sXG5bdHlwZT1yZXNldF0sXG5bdHlwZT1zdWJtaXRdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbmJ1dHRvbjpub3QoOmRpc2FibGVkKSxcblt0eXBlPWJ1dHRvbl06bm90KDpkaXNhYmxlZCksXG5bdHlwZT1yZXNldF06bm90KDpkaXNhYmxlZCksXG5bdHlwZT1zdWJtaXRdOm5vdCg6ZGlzYWJsZWQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10sXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDtcbn1cblxubGVnZW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cblt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5bdHlwZT1zZWFyY2hdIHtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG5vdXRwdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWJhc2VsaW5lIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi10b3Age1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1taWRkbGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1ib3R0b20ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi10ZXh0LWJvdHRvbSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbSAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tdGV4dC10b3Age1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3AgIWltcG9ydGFudDtcbn1cblxuLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG59XG5cbmEuYmctcHJpbWFyeTpob3ZlciwgYS5iZy1wcmltYXJ5OmZvY3VzLFxuYnV0dG9uLmJnLXByaW1hcnk6aG92ZXIsXG5idXR0b24uYmctcHJpbWFyeTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDYyY2MgIWltcG9ydGFudDtcbn1cblxuLmJnLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcbn1cblxuYS5iZy1zZWNvbmRhcnk6aG92ZXIsIGEuYmctc2Vjb25kYXJ5OmZvY3VzLFxuYnV0dG9uLmJnLXNlY29uZGFyeTpob3ZlcixcbmJ1dHRvbi5iZy1zZWNvbmRhcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1YjYyICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xufVxuXG5hLmJnLXN1Y2Nlc3M6aG92ZXIsIGEuYmctc3VjY2Vzczpmb2N1cyxcbmJ1dHRvbi5iZy1zdWNjZXNzOmhvdmVyLFxuYnV0dG9uLmJnLXN1Y2Nlc3M6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU3ZTM0ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xufVxuXG5hLmJnLWluZm86aG92ZXIsIGEuYmctaW5mbzpmb2N1cyxcbmJ1dHRvbi5iZy1pbmZvOmhvdmVyLFxuYnV0dG9uLmJnLWluZm86Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE3YThiICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuXG5hLmJnLXdhcm5pbmc6aG92ZXIsIGEuYmctd2FybmluZzpmb2N1cyxcbmJ1dHRvbi5iZy13YXJuaW5nOmhvdmVyLFxuYnV0dG9uLmJnLXdhcm5pbmc6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM5ZTAwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbmEuYmctZGFuZ2VyOmhvdmVyLCBhLmJnLWRhbmdlcjpmb2N1cyxcbmJ1dHRvbi5iZy1kYW5nZXI6aG92ZXIsXG5idXR0b24uYmctZGFuZ2VyOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkMjEzMCAhaW1wb3J0YW50O1xufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG59XG5cbmEuYmctbGlnaHQ6aG92ZXIsIGEuYmctbGlnaHQ6Zm9jdXMsXG5idXR0b24uYmctbGlnaHQ6aG92ZXIsXG5idXR0b24uYmctbGlnaHQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MCAhaW1wb3J0YW50O1xufVxuXG5hLmJnLWRhcms6aG92ZXIsIGEuYmctZGFyazpmb2N1cyxcbmJ1dHRvbi5iZy1kYXJrOmhvdmVyLFxuYnV0dG9uLmJnLWRhcms6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTI0ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmJnLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLTAge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci10b3AtMCB7XG4gIGJvcmRlci10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodC0wIHtcbiAgYm9yZGVyLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLTAge1xuICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC0wIHtcbiAgYm9yZGVyLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wcmltYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWluZm8ge1xuICBib3JkZXItY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci13YXJuaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFuZ2VyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGlnaHQge1xuICBib3JkZXItY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYXJrIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzQzYTQwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2hpdGUge1xuICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWQtc20ge1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW0gIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZGVkLXRvcCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWQtcmlnaHQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZC1ib3R0b20ge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZGVkLWxlZnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWQtbGcge1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW0gIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWQtY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZGVkLXBpbGwge1xuICBib3JkZXItcmFkaXVzOiA1MHJlbSAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZC0wIHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuXG4uY2xlYXJmaXg6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uZC1ub25lIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZC1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxuLmQtaW5saW5lLWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmQtdGFibGUge1xuICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xufVxuXG4uZC10YWJsZS1yb3cge1xuICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbn1cblxuLmQtdGFibGUtY2VsbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cblxuLmQtaW5saW5lLWZsZXgge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmQtc20tbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtc20taW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXNtLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC1zbS1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXNtLXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtc20tdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXNtLXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXNtLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXNtLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmQtbWQtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbWQtaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLW1kLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC1tZC1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLW1kLXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbWQtdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLW1kLXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLW1kLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLW1kLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmQtbGctbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbGctaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLWxnLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC1sZy1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLWxnLXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbGctdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLWxnLXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLWxnLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLWxnLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIC5kLXhsLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXhsLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC14bC1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQteGwtYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC14bC10YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXhsLXRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC14bC10YWJsZS1jZWxsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC14bC1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC14bC1pbmxpbmUtZmxleCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHByaW50IHtcbiAgLmQtcHJpbnQtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtcHJpbnQtaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXByaW50LWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC1wcmludC1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXByaW50LXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtcHJpbnQtdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXByaW50LXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXByaW50LWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXByaW50LWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB9XG59XG4uZW1iZWQtcmVzcG9uc2l2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmVtYmVkLXJlc3BvbnNpdmU6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xufVxuLmVtYmVkLXJlc3BvbnNpdmUgLmVtYmVkLXJlc3BvbnNpdmUtaXRlbSxcbi5lbWJlZC1yZXNwb25zaXZlIGlmcmFtZSxcbi5lbWJlZC1yZXNwb25zaXZlIGVtYmVkLFxuLmVtYmVkLXJlc3BvbnNpdmUgb2JqZWN0LFxuLmVtYmVkLXJlc3BvbnNpdmUgdmlkZW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDA7XG59XG5cbi5lbWJlZC1yZXNwb25zaXZlLTIxYnk5OjpiZWZvcmUge1xuICBwYWRkaW5nLXRvcDogNDIuODU3MTQyODU3MSU7XG59XG5cbi5lbWJlZC1yZXNwb25zaXZlLTE2Ynk5OjpiZWZvcmUge1xuICBwYWRkaW5nLXRvcDogNTYuMjUlO1xufVxuXG4uZW1iZWQtcmVzcG9uc2l2ZS00YnkzOjpiZWZvcmUge1xuICBwYWRkaW5nLXRvcDogNzUlO1xufVxuXG4uZW1iZWQtcmVzcG9uc2l2ZS0xYnkxOjpiZWZvcmUge1xuICBwYWRkaW5nLXRvcDogMTAwJTtcbn1cblxuLmZsZXgtcm93IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LXJvdy1yZXZlcnNlIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LWNvbHVtbi1yZXZlcnNlIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtbm93cmFwIHtcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtd3JhcC1yZXZlcnNlIHtcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtZmlsbCB7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LWdyb3ctMCB7XG4gIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1ncm93LTEge1xuICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtc2hyaW5rLTAge1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1zaHJpbmstMSB7XG4gIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmp1c3RpZnktY29udGVudC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWl0ZW1zLXN0YXJ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWl0ZW1zLWVuZCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24taXRlbXMtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWl0ZW1zLXN0cmV0Y2gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tY29udGVudC1zdGFydCB7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWNvbnRlbnQtZW5kIHtcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWNvbnRlbnQtY2VudGVyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1jb250ZW50LWJldHdlZW4ge1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1jb250ZW50LWFyb3VuZCB7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tY29udGVudC1zdHJldGNoIHtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tc2VsZi1hdXRvIHtcbiAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tc2VsZi1zdGFydCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLXNlbGYtZW5kIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1zZWxmLWJhc2VsaW5lIHtcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLXNlbGYtc3RyZXRjaCB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5mbGV4LXNtLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtc20tY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1zbS1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1zbS1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1zbS13cmFwIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXNtLW5vd3JhcCB7XG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXNtLXdyYXAtcmV2ZXJzZSB7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXNtLWZpbGwge1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1zbS1ncm93LTAge1xuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtc20tZ3Jvdy0xIHtcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXNtLXNocmluay0wIHtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtc20tc2hyaW5rLTEge1xuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LXNtLXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LXNtLWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LXNtLWFyb3VuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1zbS1zdGFydCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1zbS1lbmQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWl0ZW1zLXNtLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWl0ZW1zLXNtLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1zbS1zdHJldGNoIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQtc20tc3RhcnQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LXNtLWVuZCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LXNtLWNlbnRlciB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC1zbS1iZXR3ZWVuIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC1zbS1hcm91bmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQtc20tc3RyZXRjaCB7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLXNlbGYtc20tYXV0byB7XG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLXNlbGYtc20tc3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLXNtLWVuZCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLXNtLWNlbnRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi1zbS1iYXNlbGluZSB7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLXNtLXN0cmV0Y2gge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mbGV4LW1kLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbWQtY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1tZC1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1tZC1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1tZC13cmFwIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LW1kLW5vd3JhcCB7XG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LW1kLXdyYXAtcmV2ZXJzZSB7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LW1kLWZpbGwge1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1tZC1ncm93LTAge1xuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbWQtZ3Jvdy0xIHtcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LW1kLXNocmluay0wIHtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbWQtc2hyaW5rLTEge1xuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LW1kLXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LW1kLWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LW1kLWFyb3VuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1tZC1zdGFydCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1tZC1lbmQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWl0ZW1zLW1kLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWl0ZW1zLW1kLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1tZC1zdHJldGNoIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQtbWQtc3RhcnQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LW1kLWVuZCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LW1kLWNlbnRlciB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC1tZC1iZXR3ZWVuIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC1tZC1hcm91bmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQtbWQtc3RyZXRjaCB7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLXNlbGYtbWQtYXV0byB7XG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLXNlbGYtbWQtc3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLW1kLWVuZCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLW1kLWNlbnRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi1tZC1iYXNlbGluZSB7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLW1kLXN0cmV0Y2gge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5mbGV4LWxnLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbGctY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1sZy1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1sZy1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1sZy13cmFwIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LWxnLW5vd3JhcCB7XG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LWxnLXdyYXAtcmV2ZXJzZSB7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LWxnLWZpbGwge1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1sZy1ncm93LTAge1xuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbGctZ3Jvdy0xIHtcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LWxnLXNocmluay0wIHtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbGctc2hyaW5rLTEge1xuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LWxnLXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LWxnLWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LWxnLWFyb3VuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1sZy1zdGFydCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1sZy1lbmQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWl0ZW1zLWxnLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWl0ZW1zLWxnLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1sZy1zdHJldGNoIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQtbGctc3RhcnQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LWxnLWVuZCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LWxnLWNlbnRlciB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC1sZy1iZXR3ZWVuIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC1sZy1hcm91bmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQtbGctc3RyZXRjaCB7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLXNlbGYtbGctYXV0byB7XG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLXNlbGYtbGctc3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLWxnLWVuZCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLWxnLWNlbnRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi1sZy1iYXNlbGluZSB7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLWxnLXN0cmV0Y2gge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAuZmxleC14bC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXhsLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgteGwtcm93LXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgteGwtY29sdW1uLXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgteGwtd3JhcCB7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC14bC1ub3dyYXAge1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC14bC13cmFwLXJldmVyc2Uge1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC14bC1maWxsIHtcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgteGwtZ3Jvdy0wIHtcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXhsLWdyb3ctMSB7XG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC14bC1zaHJpbmstMCB7XG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXhsLXNocmluay0xIHtcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC14bC1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LXhsLWVuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC14bC1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LXhsLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC14bC1hcm91bmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMteGwtc3RhcnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMteGwtZW5kIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy14bC1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy14bC1iYXNlbGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMteGwtc3RyZXRjaCB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LXhsLXN0YXJ0IHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC14bC1lbmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC14bC1jZW50ZXIge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQteGwtYmV0d2VlbiB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQteGwtYXJvdW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LXhsLXN0cmV0Y2gge1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLXhsLWF1dG8ge1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLXhsLXN0YXJ0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi14bC1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi14bC1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLXNlbGYteGwtYmFzZWxpbmUge1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi14bC1zdHJldGNoIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5mbG9hdC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5mbG9hdC1ub25lIHtcbiAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5mbG9hdC1zbS1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsb2F0LXNtLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbG9hdC1zbS1ub25lIHtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZsb2F0LW1kLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxvYXQtbWQtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsb2F0LW1kLW5vbmUge1xuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuZmxvYXQtbGctbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbG9hdC1sZy1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxvYXQtbGctbm9uZSB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAuZmxvYXQteGwtbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbG9hdC14bC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxvYXQteGwtbm9uZSB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLnVzZXItc2VsZWN0LWFsbCB7XG4gIHVzZXItc2VsZWN0OiBhbGwgIWltcG9ydGFudDtcbn1cblxuLnVzZXItc2VsZWN0LWF1dG8ge1xuICB1c2VyLXNlbGVjdDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4udXNlci1zZWxlY3Qtbm9uZSB7XG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVyZmxvdy1hdXRvIHtcbiAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm92ZXJmbG93LWhpZGRlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLnBvc2l0aW9uLXN0YXRpYyB7XG4gIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbn1cblxuLnBvc2l0aW9uLXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG59XG5cbi5wb3NpdGlvbi1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xufVxuXG4ucG9zaXRpb24tZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbn1cblxuLnBvc2l0aW9uLXN0aWNreSB7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbn1cblxuLmZpeGVkLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAzMDtcbn1cblxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAzMDtcbn1cblxuQHN1cHBvcnRzIChwb3NpdGlvbjogc3RpY2t5KSB7XG4gIC5zdGlja3ktdG9wIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDIwO1xuICB9XG59XG5cbi5zci1vbmx5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IDA7XG59XG5cbi5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsIC5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBjbGlwOiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uc2hhZG93LXNtIHtcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpICFpbXBvcnRhbnQ7XG59XG5cbi5zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cblxuLnNoYWRvdy1sZyB7XG4gIGJveC1zaGFkb3c6IDAgMXJlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC4xNzUpICFpbXBvcnRhbnQ7XG59XG5cbi5zaGFkb3ctbm9uZSB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnctMjUge1xuICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XG59XG5cbi53LTUwIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4udy03NSB7XG4gIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcbn1cblxuLnctMTAwIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnctYXV0byB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5oLTI1IHtcbiAgaGVpZ2h0OiAyNSUgIWltcG9ydGFudDtcbn1cblxuLmgtNTAge1xuICBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4uaC03NSB7XG4gIGhlaWdodDogNzUlICFpbXBvcnRhbnQ7XG59XG5cbi5oLTEwMCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uaC1hdXRvIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tdy0xMDAge1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm1oLTEwMCB7XG4gIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm1pbi12dy0xMDAge1xuICBtaW4td2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG59XG5cbi5taW4tdmgtMTAwIHtcbiAgbWluLWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cblxuLnZ3LTEwMCB7XG4gIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xufVxuXG4udmgtMTAwIHtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufVxuXG4ubS0wIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0wLFxuLm15LTAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tci0wLFxuLm14LTAge1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLm1iLTAsXG4ubXktMCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLm1sLTAsXG4ubXgtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tLTEge1xuICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTEsXG4ubXktMSB7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLTEsXG4ubXgtMSB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItMSxcbi5teS0xIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtMSxcbi5teC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tMiB7XG4gIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0yLFxuLm15LTIge1xuICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLTIsXG4ubXgtMiB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi0yLFxuLm15LTIge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLTIsXG4ubXgtMiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tMyB7XG4gIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtMyxcbi5teS0zIHtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItMyxcbi5teC0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi0zLFxuLm15LTMge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tbC0zLFxuLm14LTMge1xuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS00IHtcbiAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTQsXG4ubXktNCB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItNCxcbi5teC00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTQsXG4ubXktNCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtNCxcbi5teC00IHtcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS01IHtcbiAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC01LFxuLm15LTUge1xuICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci01LFxuLm14LTUge1xuICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTUsXG4ubXktNSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLTUsXG4ubXgtNSB7XG4gIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wLTAge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0wLFxuLnB5LTAge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ucHItMCxcbi5weC0wIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4ucGItMCxcbi5weS0wIHtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLnBsLTAsXG4ucHgtMCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4ucC0xIHtcbiAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtMSxcbi5weS0xIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnByLTEsXG4ucHgtMSB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTEsXG4ucHktMSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0xLFxuLnB4LTEge1xuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnAtMiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtMixcbi5weS0yIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHItMixcbi5weC0yIHtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYi0yLFxuLnB5LTIge1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0yLFxuLnB4LTIge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucC0zIHtcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtMyxcbi5weS0zIHtcbiAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnByLTMsXG4ucHgtMyB7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTMsXG4ucHktMyB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0zLFxuLnB4LTMge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnAtNCB7XG4gIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtNCxcbi5weS00IHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHItNCxcbi5weC00IHtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYi00LFxuLnB5LTQge1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC00LFxuLnB4LTQge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucC01IHtcbiAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtNSxcbi5weS01IHtcbiAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnByLTUsXG4ucHgtNSB7XG4gIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTUsXG4ucHktNSB7XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC01LFxuLnB4LTUge1xuICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tbjEge1xuICBtYXJnaW46IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uMSxcbi5teS1uMSB7XG4gIG1hcmdpbi10b3A6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci1uMSxcbi5teC1uMSB7XG4gIG1hcmdpbi1yaWdodDogLTAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLW4xLFxuLm15LW4xIHtcbiAgbWFyZ2luLWJvdHRvbTogLTAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW4xLFxuLm14LW4xIHtcbiAgbWFyZ2luLWxlZnQ6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLW4yIHtcbiAgbWFyZ2luOiAtMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uMixcbi5teS1uMiB7XG4gIG1hcmdpbi10b3A6IC0wLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLW4yLFxuLm14LW4yIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi1uMixcbi5teS1uMiB7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW4yLFxuLm14LW4yIHtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tbjMge1xuICBtYXJnaW46IC0xcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uMyxcbi5teS1uMyB7XG4gIG1hcmdpbi10b3A6IC0xcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci1uMyxcbi5teC1uMyB7XG4gIG1hcmdpbi1yaWdodDogLTFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLW4zLFxuLm15LW4zIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW4zLFxuLm14LW4zIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLW40IHtcbiAgbWFyZ2luOiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uNCxcbi5teS1uNCB7XG4gIG1hcmdpbi10b3A6IC0xLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLW40LFxuLm14LW40IHtcbiAgbWFyZ2luLXJpZ2h0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi1uNCxcbi5teS1uNCB7XG4gIG1hcmdpbi1ib3R0b206IC0xLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW40LFxuLm14LW40IHtcbiAgbWFyZ2luLWxlZnQ6IC0xLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tbjUge1xuICBtYXJnaW46IC0zcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uNSxcbi5teS1uNSB7XG4gIG1hcmdpbi10b3A6IC0zcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci1uNSxcbi5teC1uNSB7XG4gIG1hcmdpbi1yaWdodDogLTNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLW41LFxuLm15LW41IHtcbiAgbWFyZ2luLWJvdHRvbTogLTNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW41LFxuLm14LW41IHtcbiAgbWFyZ2luLWxlZnQ6IC0zcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLWF1dG8ge1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm10LWF1dG8sXG4ubXktYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1yLWF1dG8sXG4ubXgtYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubWItYXV0byxcbi5teS1hdXRvIHtcbiAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubWwtYXV0byxcbi5teC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5tLXNtLTAge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLTAsXG4ubXktc20tMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXNtLTAsXG4ubXgtc20tMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItc20tMCxcbi5teS1zbS0wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tMCxcbi5teC1zbS0wIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tc20tMSB7XG4gICAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtc20tMSxcbi5teS1zbS0xIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItc20tMSxcbi5teC1zbS0xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1zbS0xLFxuLm15LXNtLTEge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1zbS0xLFxuLm14LXNtLTEge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1zbS0yIHtcbiAgICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLTIsXG4ubXktc20tMiB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItc20tMixcbi5teC1zbS0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXNtLTIsXG4ubXktc20tMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tMixcbi5teC1zbS0yIHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1zbS0zIHtcbiAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1zbS0zLFxuLm15LXNtLTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1zbS0zLFxuLm14LXNtLTMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXNtLTMsXG4ubXktc20tMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXNtLTMsXG4ubXgtc20tMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLXNtLTQge1xuICAgIG1hcmdpbjogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtc20tNCxcbi5teS1zbS00IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1zbS00LFxuLm14LXNtLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItc20tNCxcbi5teS1zbS00IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1zbS00LFxuLm14LXNtLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLXNtLTUge1xuICAgIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLTUsXG4ubXktc20tNSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXNtLTUsXG4ubXgtc20tNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItc20tNSxcbi5teS1zbS01IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tNSxcbi5teC1zbS01IHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAtc20tMCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0LXNtLTAsXG4ucHktc20tMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wci1zbS0wLFxuLnB4LXNtLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi1zbS0wLFxuLnB5LXNtLTAge1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGwtc20tMCxcbi5weC1zbS0wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLXNtLTEge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC1zbS0xLFxuLnB5LXNtLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHItc20tMSxcbi5weC1zbS0xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGItc20tMSxcbi5weS1zbS0xIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLXNtLTEsXG4ucHgtc20tMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC1zbS0yIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC1zbS0yLFxuLnB5LXNtLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wci1zbS0yLFxuLnB4LXNtLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLXNtLTIsXG4ucHktc20tMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLXNtLTIsXG4ucHgtc20tMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLXNtLTMge1xuICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC1zbS0zLFxuLnB5LXNtLTMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHItc20tMyxcbi5weC1zbS0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGItc20tMyxcbi5weS1zbS0zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLXNtLTMsXG4ucHgtc20tMyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC1zbS00IHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC1zbS00LFxuLnB5LXNtLTQge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wci1zbS00LFxuLnB4LXNtLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLXNtLTQsXG4ucHktc20tNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLXNtLTQsXG4ucHgtc20tNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLXNtLTUge1xuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC1zbS01LFxuLnB5LXNtLTUge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHItc20tNSxcbi5weC1zbS01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGItc20tNSxcbi5weS1zbS01IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLXNtLTUsXG4ucHgtc20tNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1zbS1uMSB7XG4gICAgbWFyZ2luOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLW4xLFxuLm15LXNtLW4xIHtcbiAgICBtYXJnaW4tdG9wOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXNtLW4xLFxuLm14LXNtLW4xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItc20tbjEsXG4ubXktc20tbjEge1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tbjEsXG4ubXgtc20tbjEge1xuICAgIG1hcmdpbi1sZWZ0OiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tc20tbjIge1xuICAgIG1hcmdpbjogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLW4yLFxuLm15LXNtLW4yIHtcbiAgICBtYXJnaW4tdG9wOiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItc20tbjIsXG4ubXgtc20tbjIge1xuICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXNtLW4yLFxuLm15LXNtLW4yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tbjIsXG4ubXgtc20tbjIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1zbS1uMyB7XG4gICAgbWFyZ2luOiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLW4zLFxuLm15LXNtLW4zIHtcbiAgICBtYXJnaW4tdG9wOiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXNtLW4zLFxuLm14LXNtLW4zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItc20tbjMsXG4ubXktc20tbjMge1xuICAgIG1hcmdpbi1ib3R0b206IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tbjMsXG4ubXgtc20tbjMge1xuICAgIG1hcmdpbi1sZWZ0OiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tc20tbjQge1xuICAgIG1hcmdpbjogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLW40LFxuLm15LXNtLW40IHtcbiAgICBtYXJnaW4tdG9wOiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItc20tbjQsXG4ubXgtc20tbjQge1xuICAgIG1hcmdpbi1yaWdodDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXNtLW40LFxuLm15LXNtLW40IHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tbjQsXG4ubXgtc20tbjQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1zbS1uNSB7XG4gICAgbWFyZ2luOiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLW41LFxuLm15LXNtLW41IHtcbiAgICBtYXJnaW4tdG9wOiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXNtLW41LFxuLm14LXNtLW41IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItc20tbjUsXG4ubXktc20tbjUge1xuICAgIG1hcmdpbi1ib3R0b206IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tbjUsXG4ubXgtc20tbjUge1xuICAgIG1hcmdpbi1sZWZ0OiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tc20tYXV0byB7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtc20tYXV0byxcbi5teS1zbS1hdXRvIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItc20tYXV0byxcbi5teC1zbS1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1zbS1hdXRvLFxuLm15LXNtLWF1dG8ge1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1zbS1hdXRvLFxuLm14LXNtLWF1dG8ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubS1tZC0wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC0wLFxuLm15LW1kLTAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1tZC0wLFxuLm14LW1kLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLW1kLTAsXG4ubXktbWQtMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLTAsXG4ubXgtbWQtMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLW1kLTEge1xuICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LW1kLTEsXG4ubXktbWQtMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLW1kLTEsXG4ubXgtbWQtMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItbWQtMSxcbi5teS1tZC0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtbWQtMSxcbi5teC1tZC0xIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbWQtMiB7XG4gICAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC0yLFxuLm15LW1kLTIge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLW1kLTIsXG4ubXgtbWQtMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1tZC0yLFxuLm15LW1kLTIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLTIsXG4ubXgtbWQtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbWQtMyB7XG4gICAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbWQtMyxcbi5teS1tZC0zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbWQtMyxcbi5teC1tZC0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1tZC0zLFxuLm15LW1kLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1tZC0zLFxuLm14LW1kLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1tZC00IHtcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LW1kLTQsXG4ubXktbWQtNCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbWQtNCxcbi5teC1tZC00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLW1kLTQsXG4ubXktbWQtNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtbWQtNCxcbi5teC1tZC00IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1tZC01IHtcbiAgICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC01LFxuLm15LW1kLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1tZC01LFxuLm14LW1kLTUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLW1kLTUsXG4ubXktbWQtNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLTUsXG4ubXgtbWQtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLW1kLTAge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC1tZC0wLFxuLnB5LW1kLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHItbWQtMCxcbi5weC1tZC0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGItbWQtMCxcbi5weS1tZC0wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLW1kLTAsXG4ucHgtbWQtMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC1tZC0xIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtbWQtMSxcbi5weS1tZC0xIHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLW1kLTEsXG4ucHgtbWQtMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLW1kLTEsXG4ucHktbWQtMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC1tZC0xLFxuLnB4LW1kLTEge1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAtbWQtMiB7XG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtbWQtMixcbi5weS1tZC0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHItbWQtMixcbi5weC1tZC0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi1tZC0yLFxuLnB5LW1kLTIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC1tZC0yLFxuLnB4LW1kLTIge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC1tZC0zIHtcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtbWQtMyxcbi5weS1tZC0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLW1kLTMsXG4ucHgtbWQtMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLW1kLTMsXG4ucHktbWQtMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC1tZC0zLFxuLnB4LW1kLTMge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAtbWQtNCB7XG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtbWQtNCxcbi5weS1tZC00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHItbWQtNCxcbi5weC1tZC00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi1tZC00LFxuLnB5LW1kLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC1tZC00LFxuLnB4LW1kLTQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC1tZC01IHtcbiAgICBwYWRkaW5nOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtbWQtNSxcbi5weS1tZC01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLW1kLTUsXG4ucHgtbWQtNSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLW1kLTUsXG4ucHktbWQtNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC1tZC01LFxuLnB4LW1kLTUge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbWQtbjEge1xuICAgIG1hcmdpbjogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC1uMSxcbi5teS1tZC1uMSB7XG4gICAgbWFyZ2luLXRvcDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1tZC1uMSxcbi5teC1tZC1uMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLW1kLW4xLFxuLm15LW1kLW4xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLW4xLFxuLm14LW1kLW4xIHtcbiAgICBtYXJnaW4tbGVmdDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLW1kLW4yIHtcbiAgICBtYXJnaW46IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC1uMixcbi5teS1tZC1uMiB7XG4gICAgbWFyZ2luLXRvcDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLW1kLW4yLFxuLm14LW1kLW4yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1tZC1uMixcbi5teS1tZC1uMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLW4yLFxuLm14LW1kLW4yIHtcbiAgICBtYXJnaW4tbGVmdDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbWQtbjMge1xuICAgIG1hcmdpbjogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC1uMyxcbi5teS1tZC1uMyB7XG4gICAgbWFyZ2luLXRvcDogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1tZC1uMyxcbi5teC1tZC1uMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLW1kLW4zLFxuLm15LW1kLW4zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLW4zLFxuLm14LW1kLW4zIHtcbiAgICBtYXJnaW4tbGVmdDogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLW1kLW40IHtcbiAgICBtYXJnaW46IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC1uNCxcbi5teS1tZC1uNCB7XG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLW1kLW40LFxuLm14LW1kLW40IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1tZC1uNCxcbi5teS1tZC1uNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLW40LFxuLm14LW1kLW40IHtcbiAgICBtYXJnaW4tbGVmdDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbWQtbjUge1xuICAgIG1hcmdpbjogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC1uNSxcbi5teS1tZC1uNSB7XG4gICAgbWFyZ2luLXRvcDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1tZC1uNSxcbi5teC1tZC1uNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLW1kLW41LFxuLm15LW1kLW41IHtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLW41LFxuLm14LW1kLW41IHtcbiAgICBtYXJnaW4tbGVmdDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLW1kLWF1dG8ge1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LW1kLWF1dG8sXG4ubXktbWQtYXV0byB7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLW1kLWF1dG8sXG4ubXgtbWQtYXV0byB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItbWQtYXV0byxcbi5teS1tZC1hdXRvIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtbWQtYXV0byxcbi5teC1tZC1hdXRvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm0tbGctMCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctMCxcbi5teS1sZy0wIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbGctMCxcbi5teC1sZy0wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1sZy0wLFxuLm15LWxnLTAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy0wLFxuLm14LWxnLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1sZy0xIHtcbiAgICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1sZy0xLFxuLm15LWxnLTEge1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1sZy0xLFxuLm14LWxnLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLWxnLTEsXG4ubXktbGctMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLWxnLTEsXG4ubXgtbGctMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLWxnLTIge1xuICAgIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctMixcbi5teS1sZy0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1sZy0yLFxuLm14LWxnLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItbGctMixcbi5teS1sZy0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy0yLFxuLm14LWxnLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLWxnLTMge1xuICAgIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LWxnLTMsXG4ubXktbGctMyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLWxnLTMsXG4ubXgtbGctMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItbGctMyxcbi5teS1sZy0zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtbGctMyxcbi5teC1sZy0zIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbGctNCB7XG4gICAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1sZy00LFxuLm15LWxnLTQge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLWxnLTQsXG4ubXgtbGctNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1sZy00LFxuLm15LWxnLTQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLWxnLTQsXG4ubXgtbGctNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbGctNSB7XG4gICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctNSxcbi5teS1sZy01IHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbGctNSxcbi5teC1sZy01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1sZy01LFxuLm15LWxnLTUge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy01LFxuLm14LWxnLTUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC1sZy0wIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtbGctMCxcbi5weS1sZy0wIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLWxnLTAsXG4ucHgtbGctMCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLWxnLTAsXG4ucHktbGctMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC1sZy0wLFxuLnB4LWxnLTAge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAtbGctMSB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0LWxnLTEsXG4ucHktbGctMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wci1sZy0xLFxuLnB4LWxnLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi1sZy0xLFxuLnB5LWxnLTEge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGwtbGctMSxcbi5weC1sZy0xIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLWxnLTIge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0LWxnLTIsXG4ucHktbGctMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLWxnLTIsXG4ucHgtbGctMiB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGItbGctMixcbi5weS1sZy0yIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGwtbGctMixcbi5weC1sZy0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAtbGctMyB7XG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0LWxnLTMsXG4ucHktbGctMyB7XG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wci1sZy0zLFxuLnB4LWxnLTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi1sZy0zLFxuLnB5LWxnLTMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGwtbGctMyxcbi5weC1sZy0zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLWxnLTQge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0LWxnLTQsXG4ucHktbGctNCB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLWxnLTQsXG4ucHgtbGctNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGItbGctNCxcbi5weS1sZy00IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGwtbGctNCxcbi5weC1sZy00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAtbGctNSB7XG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0LWxnLTUsXG4ucHktbGctNSB7XG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wci1sZy01LFxuLnB4LWxnLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi1sZy01LFxuLnB5LWxnLTUge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGwtbGctNSxcbi5weC1sZy01IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLWxnLW4xIHtcbiAgICBtYXJnaW46IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctbjEsXG4ubXktbGctbjEge1xuICAgIG1hcmdpbi10b3A6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbGctbjEsXG4ubXgtbGctbjEge1xuICAgIG1hcmdpbi1yaWdodDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1sZy1uMSxcbi5teS1sZy1uMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy1uMSxcbi5teC1sZy1uMSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1sZy1uMiB7XG4gICAgbWFyZ2luOiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctbjIsXG4ubXktbGctbjIge1xuICAgIG1hcmdpbi10b3A6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1sZy1uMixcbi5teC1sZy1uMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItbGctbjIsXG4ubXktbGctbjIge1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy1uMixcbi5teC1sZy1uMiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLWxnLW4zIHtcbiAgICBtYXJnaW46IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctbjMsXG4ubXktbGctbjMge1xuICAgIG1hcmdpbi10b3A6IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbGctbjMsXG4ubXgtbGctbjMge1xuICAgIG1hcmdpbi1yaWdodDogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1sZy1uMyxcbi5teS1sZy1uMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy1uMyxcbi5teC1sZy1uMyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1sZy1uNCB7XG4gICAgbWFyZ2luOiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctbjQsXG4ubXktbGctbjQge1xuICAgIG1hcmdpbi10b3A6IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1sZy1uNCxcbi5teC1sZy1uNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItbGctbjQsXG4ubXktbGctbjQge1xuICAgIG1hcmdpbi1ib3R0b206IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy1uNCxcbi5teC1sZy1uNCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLWxnLW41IHtcbiAgICBtYXJnaW46IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctbjUsXG4ubXktbGctbjUge1xuICAgIG1hcmdpbi10b3A6IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbGctbjUsXG4ubXgtbGctbjUge1xuICAgIG1hcmdpbi1yaWdodDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1sZy1uNSxcbi5teS1sZy1uNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy1uNSxcbi5teC1sZy1uNSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1sZy1hdXRvIHtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1sZy1hdXRvLFxuLm15LWxnLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1sZy1hdXRvLFxuLm14LWxnLWF1dG8ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLWxnLWF1dG8sXG4ubXktbGctYXV0byB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLWxnLWF1dG8sXG4ubXgtbGctYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAubS14bC0wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC0wLFxuLm15LXhsLTAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci14bC0wLFxuLm14LXhsLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXhsLTAsXG4ubXkteGwtMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLTAsXG4ubXgteGwtMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLXhsLTEge1xuICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXhsLTEsXG4ubXkteGwtMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXhsLTEsXG4ubXgteGwtMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWIteGwtMSxcbi5teS14bC0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwteGwtMSxcbi5teC14bC0xIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0teGwtMiB7XG4gICAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC0yLFxuLm15LXhsLTIge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXhsLTIsXG4ubXgteGwtMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi14bC0yLFxuLm15LXhsLTIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLTIsXG4ubXgteGwtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0teGwtMyB7XG4gICAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQteGwtMyxcbi5teS14bC0zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXIteGwtMyxcbi5teC14bC0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi14bC0zLFxuLm15LXhsLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC14bC0zLFxuLm14LXhsLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS14bC00IHtcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXhsLTQsXG4ubXkteGwtNCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXIteGwtNCxcbi5teC14bC00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXhsLTQsXG4ubXkteGwtNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwteGwtNCxcbi5teC14bC00IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS14bC01IHtcbiAgICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC01LFxuLm15LXhsLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci14bC01LFxuLm14LXhsLTUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXhsLTUsXG4ubXkteGwtNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLTUsXG4ubXgteGwtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLXhsLTAge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC14bC0wLFxuLnB5LXhsLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHIteGwtMCxcbi5weC14bC0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGIteGwtMCxcbi5weS14bC0wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLXhsLTAsXG4ucHgteGwtMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC14bC0xIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQteGwtMSxcbi5weS14bC0xIHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLXhsLTEsXG4ucHgteGwtMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLXhsLTEsXG4ucHkteGwtMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC14bC0xLFxuLnB4LXhsLTEge1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAteGwtMiB7XG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQteGwtMixcbi5weS14bC0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHIteGwtMixcbi5weC14bC0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi14bC0yLFxuLnB5LXhsLTIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC14bC0yLFxuLnB4LXhsLTIge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC14bC0zIHtcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQteGwtMyxcbi5weS14bC0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLXhsLTMsXG4ucHgteGwtMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLXhsLTMsXG4ucHkteGwtMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC14bC0zLFxuLnB4LXhsLTMge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAteGwtNCB7XG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQteGwtNCxcbi5weS14bC00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHIteGwtNCxcbi5weC14bC00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi14bC00LFxuLnB5LXhsLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC14bC00LFxuLnB4LXhsLTQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC14bC01IHtcbiAgICBwYWRkaW5nOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQteGwtNSxcbi5weS14bC01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLXhsLTUsXG4ucHgteGwtNSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLXhsLTUsXG4ucHkteGwtNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC14bC01LFxuLnB4LXhsLTUge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0teGwtbjEge1xuICAgIG1hcmdpbjogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC1uMSxcbi5teS14bC1uMSB7XG4gICAgbWFyZ2luLXRvcDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci14bC1uMSxcbi5teC14bC1uMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXhsLW4xLFxuLm15LXhsLW4xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLW4xLFxuLm14LXhsLW4xIHtcbiAgICBtYXJnaW4tbGVmdDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLXhsLW4yIHtcbiAgICBtYXJnaW46IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC1uMixcbi5teS14bC1uMiB7XG4gICAgbWFyZ2luLXRvcDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXhsLW4yLFxuLm14LXhsLW4yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi14bC1uMixcbi5teS14bC1uMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLW4yLFxuLm14LXhsLW4yIHtcbiAgICBtYXJnaW4tbGVmdDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0teGwtbjMge1xuICAgIG1hcmdpbjogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC1uMyxcbi5teS14bC1uMyB7XG4gICAgbWFyZ2luLXRvcDogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci14bC1uMyxcbi5teC14bC1uMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXhsLW4zLFxuLm15LXhsLW4zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLW4zLFxuLm14LXhsLW4zIHtcbiAgICBtYXJnaW4tbGVmdDogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLXhsLW40IHtcbiAgICBtYXJnaW46IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC1uNCxcbi5teS14bC1uNCB7XG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXhsLW40LFxuLm14LXhsLW40IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi14bC1uNCxcbi5teS14bC1uNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLW40LFxuLm14LXhsLW40IHtcbiAgICBtYXJnaW4tbGVmdDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0teGwtbjUge1xuICAgIG1hcmdpbjogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC1uNSxcbi5teS14bC1uNSB7XG4gICAgbWFyZ2luLXRvcDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci14bC1uNSxcbi5teC14bC1uNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXhsLW41LFxuLm15LXhsLW41IHtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLW41LFxuLm14LXhsLW41IHtcbiAgICBtYXJnaW4tbGVmdDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLXhsLWF1dG8ge1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXhsLWF1dG8sXG4ubXkteGwtYXV0byB7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXhsLWF1dG8sXG4ubXgteGwtYXV0byB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWIteGwtYXV0byxcbi5teS14bC1hdXRvIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwteGwtYXV0byxcbi5teC14bC1hdXRvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG4uc3RyZXRjaGVkLWxpbms6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4udGV4dC1tb25vc3BhY2Uge1xuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1qdXN0aWZ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC13cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1ub3dyYXAge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXRydW5jYXRlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAudGV4dC1zbS1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGV4dC1zbS1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50ZXh0LXNtLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAudGV4dC1tZC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGV4dC1tZC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50ZXh0LW1kLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudGV4dC1sZy1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGV4dC1sZy1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50ZXh0LWxnLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLnRleHQteGwtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRleHQteGwtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGV4dC14bC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG59XG4udGV4dC1sb3dlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLnRleHQtY2FwaXRhbGl6ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LXdlaWdodC1saWdodCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbn1cblxuLmZvbnQtd2VpZ2h0LWxpZ2h0ZXIge1xuICBmb250LXdlaWdodDogbGlnaHRlciAhaW1wb3J0YW50O1xufVxuXG4uZm9udC13ZWlnaHQtbm9ybWFsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC13ZWlnaHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cblxuLmZvbnQtd2VpZ2h0LWJvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXIgIWltcG9ydGFudDtcbn1cblxuLmZvbnQtaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG59XG5cbmEudGV4dC1wcmltYXJ5OmhvdmVyLCBhLnRleHQtcHJpbWFyeTpmb2N1cyB7XG4gIGNvbG9yOiAjMDA1NmIzICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG59XG5cbmEudGV4dC1zZWNvbmRhcnk6aG92ZXIsIGEudGV4dC1zZWNvbmRhcnk6Zm9jdXMge1xuICBjb2xvcjogIzQ5NGY1NCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1zdWNjZXNzIHtcbiAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcbn1cblxuYS50ZXh0LXN1Y2Nlc3M6aG92ZXIsIGEudGV4dC1zdWNjZXNzOmZvY3VzIHtcbiAgY29sb3I6ICMxOTY5MmMgIWltcG9ydGFudDtcbn1cblxuLnRleHQtaW5mbyB7XG4gIGNvbG9yOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XG59XG5cbmEudGV4dC1pbmZvOmhvdmVyLCBhLnRleHQtaW5mbzpmb2N1cyB7XG4gIGNvbG9yOiAjMGY2Njc0ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXdhcm5pbmcge1xuICBjb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuXG5hLnRleHQtd2FybmluZzpob3ZlciwgYS50ZXh0LXdhcm5pbmc6Zm9jdXMge1xuICBjb2xvcjogI2JhOGIwMCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1kYW5nZXIge1xuICBjb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuXG5hLnRleHQtZGFuZ2VyOmhvdmVyLCBhLnRleHQtZGFuZ2VyOmZvY3VzIHtcbiAgY29sb3I6ICNhNzFkMmEgIWltcG9ydGFudDtcbn1cblxuLnRleHQtbGlnaHQge1xuICBjb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xufVxuXG5hLnRleHQtbGlnaHQ6aG92ZXIsIGEudGV4dC1saWdodDpmb2N1cyB7XG4gIGNvbG9yOiAjY2JkM2RhICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWRhcmsge1xuICBjb2xvcjogIzM0M2E0MCAhaW1wb3J0YW50O1xufVxuXG5hLnRleHQtZGFyazpob3ZlciwgYS50ZXh0LWRhcms6Zm9jdXMge1xuICBjb2xvcjogIzEyMTQxNiAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1ib2R5IHtcbiAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbn1cblxuLnRleHQtbXV0ZWQge1xuICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1ibGFjay01MCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcbn1cblxuLnRleHQtd2hpdGUtNTAge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWhpZGUge1xuICBmb250OiAwLzAgYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLnRleHQtZGVjb3JhdGlvbi1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWJyZWFrIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbn1cblxuLnRleHQtcmVzZXQge1xuICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4udmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbn1cblxuLmludmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4vKiFcbiAqIEJvb3RzdHJhcCBHcmlkIHY0LjYuMCAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcbiAqIENvcHlyaWdodCAyMDExLTIwMjEgVGhlIEJvb3RzdHJhcCBBdXRob3JzXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDIxIFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICovXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbi5jb250YWluZXIsXG4uY29udGFpbmVyLWZsdWlkLFxuLmNvbnRhaW5lci14bCxcbi5jb250YWluZXItbGcsXG4uY29udGFpbmVyLW1kLFxuLmNvbnRhaW5lci1zbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuY29udGFpbmVyLXNtLCAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lci1tZCwgLmNvbnRhaW5lci1zbSwgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXItbGcsIC5jb250YWluZXItbWQsIC5jb250YWluZXItc20sIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLmNvbnRhaW5lci14bCwgLmNvbnRhaW5lci1sZywgLmNvbnRhaW5lci1tZCwgLmNvbnRhaW5lci1zbSwgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMjQwcHg7XG4gIH1cbn1cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLm5vLWd1dHRlcnMge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLm5vLWd1dHRlcnMgPiAuY29sLFxuLm5vLWd1dHRlcnMgPiBbY2xhc3MqPWNvbC1dIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uY29sLXhsLFxuLmNvbC14bC1hdXRvLCAuY29sLXhsLTEyLCAuY29sLXhsLTExLCAuY29sLXhsLTEwLCAuY29sLXhsLTksIC5jb2wteGwtOCwgLmNvbC14bC03LCAuY29sLXhsLTYsIC5jb2wteGwtNSwgLmNvbC14bC00LCAuY29sLXhsLTMsIC5jb2wteGwtMiwgLmNvbC14bC0xLCAuY29sLWxnLFxuLmNvbC1sZy1hdXRvLCAuY29sLWxnLTEyLCAuY29sLWxnLTExLCAuY29sLWxnLTEwLCAuY29sLWxnLTksIC5jb2wtbGctOCwgLmNvbC1sZy03LCAuY29sLWxnLTYsIC5jb2wtbGctNSwgLmNvbC1sZy00LCAuY29sLWxnLTMsIC5jb2wtbGctMiwgLmNvbC1sZy0xLCAuY29sLW1kLFxuLmNvbC1tZC1hdXRvLCAuY29sLW1kLTEyLCAuY29sLW1kLTExLCAuY29sLW1kLTEwLCAuY29sLW1kLTksIC5jb2wtbWQtOCwgLmNvbC1tZC03LCAuY29sLW1kLTYsIC5jb2wtbWQtNSwgLmNvbC1tZC00LCAuY29sLW1kLTMsIC5jb2wtbWQtMiwgLmNvbC1tZC0xLCAuY29sLXNtLFxuLmNvbC1zbS1hdXRvLCAuY29sLXNtLTEyLCAuY29sLXNtLTExLCAuY29sLXNtLTEwLCAuY29sLXNtLTksIC5jb2wtc20tOCwgLmNvbC1zbS03LCAuY29sLXNtLTYsIC5jb2wtc20tNSwgLmNvbC1zbS00LCAuY29sLXNtLTMsIC5jb2wtc20tMiwgLmNvbC1zbS0xLCAuY29sLFxuLmNvbC1hdXRvLCAuY29sLTEyLCAuY29sLTExLCAuY29sLTEwLCAuY29sLTksIC5jb2wtOCwgLmNvbC03LCAuY29sLTYsIC5jb2wtNSwgLmNvbC00LCAuY29sLTMsIC5jb2wtMiwgLmNvbC0xIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uY29sIHtcbiAgZmxleC1iYXNpczogMDtcbiAgZmxleC1ncm93OiAxO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5yb3ctY29scy0xID4gKiB7XG4gIGZsZXg6IDAgMCAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5yb3ctY29scy0yID4gKiB7XG4gIGZsZXg6IDAgMCA1MCU7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4ucm93LWNvbHMtMyA+ICoge1xuICBmbGV4OiAwIDAgMzMuMzMzMzMzMzMzMyU7XG4gIG1heC13aWR0aDogMzMuMzMzMzMzMzMzMyU7XG59XG5cbi5yb3ctY29scy00ID4gKiB7XG4gIGZsZXg6IDAgMCAyNSU7XG4gIG1heC13aWR0aDogMjUlO1xufVxuXG4ucm93LWNvbHMtNSA+ICoge1xuICBmbGV4OiAwIDAgMjAlO1xuICBtYXgtd2lkdGg6IDIwJTtcbn1cblxuLnJvdy1jb2xzLTYgPiAqIHtcbiAgZmxleDogMCAwIDE2LjY2NjY2NjY2NjclO1xuICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xufVxuXG4uY29sLWF1dG8ge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNvbC0xIHtcbiAgZmxleDogMCAwIDguMzMzMzMzMzMzMyU7XG4gIG1heC13aWR0aDogOC4zMzMzMzMzMzMzJTtcbn1cblxuLmNvbC0yIHtcbiAgZmxleDogMCAwIDE2LjY2NjY2NjY2NjclO1xuICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xufVxuXG4uY29sLTMge1xuICBmbGV4OiAwIDAgMjUlO1xuICBtYXgtd2lkdGg6IDI1JTtcbn1cblxuLmNvbC00IHtcbiAgZmxleDogMCAwIDMzLjMzMzMzMzMzMzMlO1xuICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xufVxuXG4uY29sLTUge1xuICBmbGV4OiAwIDAgNDEuNjY2NjY2NjY2NyU7XG4gIG1heC13aWR0aDogNDEuNjY2NjY2NjY2NyU7XG59XG5cbi5jb2wtNiB7XG4gIGZsZXg6IDAgMCA1MCU7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4uY29sLTcge1xuICBmbGV4OiAwIDAgNTguMzMzMzMzMzMzMyU7XG4gIG1heC13aWR0aDogNTguMzMzMzMzMzMzMyU7XG59XG5cbi5jb2wtOCB7XG4gIGZsZXg6IDAgMCA2Ni42NjY2NjY2NjY3JTtcbiAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcbn1cblxuLmNvbC05IHtcbiAgZmxleDogMCAwIDc1JTtcbiAgbWF4LXdpZHRoOiA3NSU7XG59XG5cbi5jb2wtMTAge1xuICBmbGV4OiAwIDAgODMuMzMzMzMzMzMzMyU7XG4gIG1heC13aWR0aDogODMuMzMzMzMzMzMzMyU7XG59XG5cbi5jb2wtMTEge1xuICBmbGV4OiAwIDAgOTEuNjY2NjY2NjY2NyU7XG4gIG1heC13aWR0aDogOTEuNjY2NjY2NjY2NyU7XG59XG5cbi5jb2wtMTIge1xuICBmbGV4OiAwIDAgMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ub3JkZXItZmlyc3Qge1xuICBvcmRlcjogLTE7XG59XG5cbi5vcmRlci1sYXN0IHtcbiAgb3JkZXI6IDEzO1xufVxuXG4ub3JkZXItMCB7XG4gIG9yZGVyOiAwO1xufVxuXG4ub3JkZXItMSB7XG4gIG9yZGVyOiAxO1xufVxuXG4ub3JkZXItMiB7XG4gIG9yZGVyOiAyO1xufVxuXG4ub3JkZXItMyB7XG4gIG9yZGVyOiAzO1xufVxuXG4ub3JkZXItNCB7XG4gIG9yZGVyOiA0O1xufVxuXG4ub3JkZXItNSB7XG4gIG9yZGVyOiA1O1xufVxuXG4ub3JkZXItNiB7XG4gIG9yZGVyOiA2O1xufVxuXG4ub3JkZXItNyB7XG4gIG9yZGVyOiA3O1xufVxuXG4ub3JkZXItOCB7XG4gIG9yZGVyOiA4O1xufVxuXG4ub3JkZXItOSB7XG4gIG9yZGVyOiA5O1xufVxuXG4ub3JkZXItMTAge1xuICBvcmRlcjogMTA7XG59XG5cbi5vcmRlci0xMSB7XG4gIG9yZGVyOiAxMTtcbn1cblxuLm9yZGVyLTEyIHtcbiAgb3JkZXI6IDEyO1xufVxuXG4ub2Zmc2V0LTEge1xuICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMzMzJTtcbn1cblxuLm9mZnNldC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclO1xufVxuXG4ub2Zmc2V0LTMge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4ub2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMzMyU7XG59XG5cbi5vZmZzZXQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NjY3JTtcbn1cblxuLm9mZnNldC02IHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuLm9mZnNldC03IHtcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzMzMlO1xufVxuXG4ub2Zmc2V0LTgge1xuICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjY2NyU7XG59XG5cbi5vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5vZmZzZXQtMTAge1xuICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMzMyU7XG59XG5cbi5vZmZzZXQtMTEge1xuICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjY2NyU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuY29sLXNtIHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucm93LWNvbHMtc20tMSA+ICoge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5yb3ctY29scy1zbS0yID4gKiB7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5yb3ctY29scy1zbS0zID4gKiB7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzMzMzMzMlO1xuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAucm93LWNvbHMtc20tNCA+ICoge1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWF4LXdpZHRoOiAyNSU7XG4gIH1cblxuICAucm93LWNvbHMtc20tNSA+ICoge1xuICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgbWF4LXdpZHRoOiAyMCU7XG4gIH1cblxuICAucm93LWNvbHMtc20tNiA+ICoge1xuICAgIGZsZXg6IDAgMCAxNi42NjY2NjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1zbS1hdXRvIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY29sLXNtLTEge1xuICAgIGZsZXg6IDAgMCA4LjMzMzMzMzMzMzMlO1xuICAgIG1heC13aWR0aDogOC4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtc20tMiB7XG4gICAgZmxleDogMCAwIDE2LjY2NjY2NjY2NjclO1xuICAgIG1heC13aWR0aDogMTYuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLXNtLTMge1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWF4LXdpZHRoOiAyNSU7XG4gIH1cblxuICAuY29sLXNtLTQge1xuICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1zbS01IHtcbiAgICBmbGV4OiAwIDAgNDEuNjY2NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtc20tNiB7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5jb2wtc20tNyB7XG4gICAgZmxleDogMCAwIDU4LjMzMzMzMzMzMzMlO1xuICAgIG1heC13aWR0aDogNTguMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLXNtLTgge1xuICAgIGZsZXg6IDAgMCA2Ni42NjY2NjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1zbS05IHtcbiAgICBmbGV4OiAwIDAgNzUlO1xuICAgIG1heC13aWR0aDogNzUlO1xuICB9XG5cbiAgLmNvbC1zbS0xMCB7XG4gICAgZmxleDogMCAwIDgzLjMzMzMzMzMzMzMlO1xuICAgIG1heC13aWR0aDogODMuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLXNtLTExIHtcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtc20tMTIge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5vcmRlci1zbS1maXJzdCB7XG4gICAgb3JkZXI6IC0xO1xuICB9XG5cbiAgLm9yZGVyLXNtLWxhc3Qge1xuICAgIG9yZGVyOiAxMztcbiAgfVxuXG4gIC5vcmRlci1zbS0wIHtcbiAgICBvcmRlcjogMDtcbiAgfVxuXG4gIC5vcmRlci1zbS0xIHtcbiAgICBvcmRlcjogMTtcbiAgfVxuXG4gIC5vcmRlci1zbS0yIHtcbiAgICBvcmRlcjogMjtcbiAgfVxuXG4gIC5vcmRlci1zbS0zIHtcbiAgICBvcmRlcjogMztcbiAgfVxuXG4gIC5vcmRlci1zbS00IHtcbiAgICBvcmRlcjogNDtcbiAgfVxuXG4gIC5vcmRlci1zbS01IHtcbiAgICBvcmRlcjogNTtcbiAgfVxuXG4gIC5vcmRlci1zbS02IHtcbiAgICBvcmRlcjogNjtcbiAgfVxuXG4gIC5vcmRlci1zbS03IHtcbiAgICBvcmRlcjogNztcbiAgfVxuXG4gIC5vcmRlci1zbS04IHtcbiAgICBvcmRlcjogODtcbiAgfVxuXG4gIC5vcmRlci1zbS05IHtcbiAgICBvcmRlcjogOTtcbiAgfVxuXG4gIC5vcmRlci1zbS0xMCB7XG4gICAgb3JkZXI6IDEwO1xuICB9XG5cbiAgLm9yZGVyLXNtLTExIHtcbiAgICBvcmRlcjogMTE7XG4gIH1cblxuICAub3JkZXItc20tMTIge1xuICAgIG9yZGVyOiAxMjtcbiAgfVxuXG4gIC5vZmZzZXQtc20tMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAub2Zmc2V0LXNtLTEge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC1zbS0yIHtcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAub2Zmc2V0LXNtLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cblxuICAub2Zmc2V0LXNtLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5vZmZzZXQtc20tNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLm9mZnNldC1zbS02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICB9XG5cbiAgLm9mZnNldC1zbS03IHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMzMyU7XG4gIH1cblxuICAub2Zmc2V0LXNtLTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5vZmZzZXQtc20tOSB7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbiAgfVxuXG4gIC5vZmZzZXQtc20tMTAge1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5vZmZzZXQtc20tMTEge1xuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NjY3JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb2wtbWQge1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5yb3ctY29scy1tZC0xID4gKiB7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnJvdy1jb2xzLW1kLTIgPiAqIHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG5cbiAgLnJvdy1jb2xzLW1kLTMgPiAqIHtcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5yb3ctY29scy1tZC00ID4gKiB7XG4gICAgZmxleDogMCAwIDI1JTtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgfVxuXG4gIC5yb3ctY29scy1tZC01ID4gKiB7XG4gICAgZmxleDogMCAwIDIwJTtcbiAgICBtYXgtd2lkdGg6IDIwJTtcbiAgfVxuXG4gIC5yb3ctY29scy1tZC02ID4gKiB7XG4gICAgZmxleDogMCAwIDE2LjY2NjY2NjY2NjclO1xuICAgIG1heC13aWR0aDogMTYuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLW1kLWF1dG8ge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb2wtbWQtMSB7XG4gICAgZmxleDogMCAwIDguMzMzMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1tZC0yIHtcbiAgICBmbGV4OiAwIDAgMTYuNjY2NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtbWQtMyB7XG4gICAgZmxleDogMCAwIDI1JTtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgfVxuXG4gIC5jb2wtbWQtNCB7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzMzMzMzMlO1xuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLW1kLTUge1xuICAgIGZsZXg6IDAgMCA0MS42NjY2NjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1tZC02IHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG5cbiAgLmNvbC1tZC03IHtcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtbWQtOCB7XG4gICAgZmxleDogMCAwIDY2LjY2NjY2NjY2NjclO1xuICAgIG1heC13aWR0aDogNjYuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLW1kLTkge1xuICAgIGZsZXg6IDAgMCA3NSU7XG4gICAgbWF4LXdpZHRoOiA3NSU7XG4gIH1cblxuICAuY29sLW1kLTEwIHtcbiAgICBmbGV4OiAwIDAgODMuMzMzMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtbWQtMTEge1xuICAgIGZsZXg6IDAgMCA5MS42NjY2NjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1tZC0xMiB7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm9yZGVyLW1kLWZpcnN0IHtcbiAgICBvcmRlcjogLTE7XG4gIH1cblxuICAub3JkZXItbWQtbGFzdCB7XG4gICAgb3JkZXI6IDEzO1xuICB9XG5cbiAgLm9yZGVyLW1kLTAge1xuICAgIG9yZGVyOiAwO1xuICB9XG5cbiAgLm9yZGVyLW1kLTEge1xuICAgIG9yZGVyOiAxO1xuICB9XG5cbiAgLm9yZGVyLW1kLTIge1xuICAgIG9yZGVyOiAyO1xuICB9XG5cbiAgLm9yZGVyLW1kLTMge1xuICAgIG9yZGVyOiAzO1xuICB9XG5cbiAgLm9yZGVyLW1kLTQge1xuICAgIG9yZGVyOiA0O1xuICB9XG5cbiAgLm9yZGVyLW1kLTUge1xuICAgIG9yZGVyOiA1O1xuICB9XG5cbiAgLm9yZGVyLW1kLTYge1xuICAgIG9yZGVyOiA2O1xuICB9XG5cbiAgLm9yZGVyLW1kLTcge1xuICAgIG9yZGVyOiA3O1xuICB9XG5cbiAgLm9yZGVyLW1kLTgge1xuICAgIG9yZGVyOiA4O1xuICB9XG5cbiAgLm9yZGVyLW1kLTkge1xuICAgIG9yZGVyOiA5O1xuICB9XG5cbiAgLm9yZGVyLW1kLTEwIHtcbiAgICBvcmRlcjogMTA7XG4gIH1cblxuICAub3JkZXItbWQtMTEge1xuICAgIG9yZGVyOiAxMTtcbiAgfVxuXG4gIC5vcmRlci1tZC0xMiB7XG4gICAgb3JkZXI6IDEyO1xuICB9XG5cbiAgLm9mZnNldC1tZC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC5vZmZzZXQtbWQtMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMzMyU7XG4gIH1cblxuICAub2Zmc2V0LW1kLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5vZmZzZXQtbWQtMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuXG4gIC5vZmZzZXQtbWQtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC1tZC01IHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAub2Zmc2V0LW1kLTYge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cblxuICAub2Zmc2V0LW1kLTcge1xuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5vZmZzZXQtbWQtOCB7XG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLm9mZnNldC1tZC05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xuICB9XG5cbiAgLm9mZnNldC1tZC0xMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC1tZC0xMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY2NjclO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbC1sZyB7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnJvdy1jb2xzLWxnLTEgPiAqIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucm93LWNvbHMtbGctMiA+ICoge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cblxuICAucm93LWNvbHMtbGctMyA+ICoge1xuICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLnJvdy1jb2xzLWxnLTQgPiAqIHtcbiAgICBmbGV4OiAwIDAgMjUlO1xuICAgIG1heC13aWR0aDogMjUlO1xuICB9XG5cbiAgLnJvdy1jb2xzLWxnLTUgPiAqIHtcbiAgICBmbGV4OiAwIDAgMjAlO1xuICAgIG1heC13aWR0aDogMjAlO1xuICB9XG5cbiAgLnJvdy1jb2xzLWxnLTYgPiAqIHtcbiAgICBmbGV4OiAwIDAgMTYuNjY2NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtbGctYXV0byB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbC1sZy0xIHtcbiAgICBmbGV4OiAwIDAgOC4zMzMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLWxnLTIge1xuICAgIGZsZXg6IDAgMCAxNi42NjY2NjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1sZy0zIHtcbiAgICBmbGV4OiAwIDAgMjUlO1xuICAgIG1heC13aWR0aDogMjUlO1xuICB9XG5cbiAgLmNvbC1sZy00IHtcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtbGctNSB7XG4gICAgZmxleDogMCAwIDQxLjY2NjY2NjY2NjclO1xuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLWxnLTYge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cblxuICAuY29sLWxnLTcge1xuICAgIGZsZXg6IDAgMCA1OC4zMzMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1sZy04IHtcbiAgICBmbGV4OiAwIDAgNjYuNjY2NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtbGctOSB7XG4gICAgZmxleDogMCAwIDc1JTtcbiAgICBtYXgtd2lkdGg6IDc1JTtcbiAgfVxuXG4gIC5jb2wtbGctMTAge1xuICAgIGZsZXg6IDAgMCA4My4zMzMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1sZy0xMSB7XG4gICAgZmxleDogMCAwIDkxLjY2NjY2NjY2NjclO1xuICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLWxnLTEyIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAub3JkZXItbGctZmlyc3Qge1xuICAgIG9yZGVyOiAtMTtcbiAgfVxuXG4gIC5vcmRlci1sZy1sYXN0IHtcbiAgICBvcmRlcjogMTM7XG4gIH1cblxuICAub3JkZXItbGctMCB7XG4gICAgb3JkZXI6IDA7XG4gIH1cblxuICAub3JkZXItbGctMSB7XG4gICAgb3JkZXI6IDE7XG4gIH1cblxuICAub3JkZXItbGctMiB7XG4gICAgb3JkZXI6IDI7XG4gIH1cblxuICAub3JkZXItbGctMyB7XG4gICAgb3JkZXI6IDM7XG4gIH1cblxuICAub3JkZXItbGctNCB7XG4gICAgb3JkZXI6IDQ7XG4gIH1cblxuICAub3JkZXItbGctNSB7XG4gICAgb3JkZXI6IDU7XG4gIH1cblxuICAub3JkZXItbGctNiB7XG4gICAgb3JkZXI6IDY7XG4gIH1cblxuICAub3JkZXItbGctNyB7XG4gICAgb3JkZXI6IDc7XG4gIH1cblxuICAub3JkZXItbGctOCB7XG4gICAgb3JkZXI6IDg7XG4gIH1cblxuICAub3JkZXItbGctOSB7XG4gICAgb3JkZXI6IDk7XG4gIH1cblxuICAub3JkZXItbGctMTAge1xuICAgIG9yZGVyOiAxMDtcbiAgfVxuXG4gIC5vcmRlci1sZy0xMSB7XG4gICAgb3JkZXI6IDExO1xuICB9XG5cbiAgLm9yZGVyLWxnLTEyIHtcbiAgICBvcmRlcjogMTI7XG4gIH1cblxuICAub2Zmc2V0LWxnLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgLm9mZnNldC1sZy0xIHtcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5vZmZzZXQtbGctMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLm9mZnNldC1sZy0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG5cbiAgLm9mZnNldC1sZy00IHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAub2Zmc2V0LWxnLTUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5vZmZzZXQtbGctNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgfVxuXG4gIC5vZmZzZXQtbGctNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC1sZy04IHtcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAub2Zmc2V0LWxnLTkge1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG4gIH1cblxuICAub2Zmc2V0LWxnLTEwIHtcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAub2Zmc2V0LWxnLTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjY2NyU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLmNvbC14bCB7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnJvdy1jb2xzLXhsLTEgPiAqIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucm93LWNvbHMteGwtMiA+ICoge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cblxuICAucm93LWNvbHMteGwtMyA+ICoge1xuICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLnJvdy1jb2xzLXhsLTQgPiAqIHtcbiAgICBmbGV4OiAwIDAgMjUlO1xuICAgIG1heC13aWR0aDogMjUlO1xuICB9XG5cbiAgLnJvdy1jb2xzLXhsLTUgPiAqIHtcbiAgICBmbGV4OiAwIDAgMjAlO1xuICAgIG1heC13aWR0aDogMjAlO1xuICB9XG5cbiAgLnJvdy1jb2xzLXhsLTYgPiAqIHtcbiAgICBmbGV4OiAwIDAgMTYuNjY2NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteGwtYXV0byB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbC14bC0xIHtcbiAgICBmbGV4OiAwIDAgOC4zMzMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLXhsLTIge1xuICAgIGZsZXg6IDAgMCAxNi42NjY2NjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC14bC0zIHtcbiAgICBmbGV4OiAwIDAgMjUlO1xuICAgIG1heC13aWR0aDogMjUlO1xuICB9XG5cbiAgLmNvbC14bC00IHtcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteGwtNSB7XG4gICAgZmxleDogMCAwIDQxLjY2NjY2NjY2NjclO1xuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLXhsLTYge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cblxuICAuY29sLXhsLTcge1xuICAgIGZsZXg6IDAgMCA1OC4zMzMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14bC04IHtcbiAgICBmbGV4OiAwIDAgNjYuNjY2NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteGwtOSB7XG4gICAgZmxleDogMCAwIDc1JTtcbiAgICBtYXgtd2lkdGg6IDc1JTtcbiAgfVxuXG4gIC5jb2wteGwtMTAge1xuICAgIGZsZXg6IDAgMCA4My4zMzMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14bC0xMSB7XG4gICAgZmxleDogMCAwIDkxLjY2NjY2NjY2NjclO1xuICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLXhsLTEyIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAub3JkZXIteGwtZmlyc3Qge1xuICAgIG9yZGVyOiAtMTtcbiAgfVxuXG4gIC5vcmRlci14bC1sYXN0IHtcbiAgICBvcmRlcjogMTM7XG4gIH1cblxuICAub3JkZXIteGwtMCB7XG4gICAgb3JkZXI6IDA7XG4gIH1cblxuICAub3JkZXIteGwtMSB7XG4gICAgb3JkZXI6IDE7XG4gIH1cblxuICAub3JkZXIteGwtMiB7XG4gICAgb3JkZXI6IDI7XG4gIH1cblxuICAub3JkZXIteGwtMyB7XG4gICAgb3JkZXI6IDM7XG4gIH1cblxuICAub3JkZXIteGwtNCB7XG4gICAgb3JkZXI6IDQ7XG4gIH1cblxuICAub3JkZXIteGwtNSB7XG4gICAgb3JkZXI6IDU7XG4gIH1cblxuICAub3JkZXIteGwtNiB7XG4gICAgb3JkZXI6IDY7XG4gIH1cblxuICAub3JkZXIteGwtNyB7XG4gICAgb3JkZXI6IDc7XG4gIH1cblxuICAub3JkZXIteGwtOCB7XG4gICAgb3JkZXI6IDg7XG4gIH1cblxuICAub3JkZXIteGwtOSB7XG4gICAgb3JkZXI6IDk7XG4gIH1cblxuICAub3JkZXIteGwtMTAge1xuICAgIG9yZGVyOiAxMDtcbiAgfVxuXG4gIC5vcmRlci14bC0xMSB7XG4gICAgb3JkZXI6IDExO1xuICB9XG5cbiAgLm9yZGVyLXhsLTEyIHtcbiAgICBvcmRlcjogMTI7XG4gIH1cblxuICAub2Zmc2V0LXhsLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgLm9mZnNldC14bC0xIHtcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5vZmZzZXQteGwtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLm9mZnNldC14bC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG5cbiAgLm9mZnNldC14bC00IHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAub2Zmc2V0LXhsLTUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5vZmZzZXQteGwtNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgfVxuXG4gIC5vZmZzZXQteGwtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLm9mZnNldC14bC04IHtcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAub2Zmc2V0LXhsLTkge1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG4gIH1cblxuICAub2Zmc2V0LXhsLTEwIHtcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMzMyU7XG4gIH1cblxuICAub2Zmc2V0LXhsLTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjY2NyU7XG4gIH1cbn1cbi5kLW5vbmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG4uZC1pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmQtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uZC10YWJsZSB7XG4gIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5kLXRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xufVxuXG4uZC10YWJsZS1jZWxsIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4uZC1pbmxpbmUtZmxleCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuZC1zbS1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC1zbS1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtc20taW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXNtLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtc20tdGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC1zbS10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtc20tdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtc20tZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtc20taW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZC1tZC1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC1tZC1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbWQtaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLW1kLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbWQtdGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC1tZC10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbWQtdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbWQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbWQtaW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuZC1sZy1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC1sZy1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbGctaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLWxnLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbGctdGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC1sZy10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbGctdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbGctZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtbGctaW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLmQteGwtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQteGwtaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXhsLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC14bC1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXhsLXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQteGwtdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXhsLXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXhsLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXhsLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgcHJpbnQge1xuICAuZC1wcmludC1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC1wcmludC1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtcHJpbnQtaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kLXByaW50LWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtcHJpbnQtdGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC1wcmludC10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtcHJpbnQtdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtcHJpbnQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmQtcHJpbnQtaW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5mbGV4LXJvdyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtY29sdW1uIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1yb3ctcmV2ZXJzZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1jb2x1bW4tcmV2ZXJzZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xufVxuXG4uZmxleC13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LW5vd3JhcCB7XG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LXdyYXAtcmV2ZXJzZSB7XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LWZpbGwge1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1ncm93LTAge1xuICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtZ3Jvdy0xIHtcbiAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LXNocmluay0wIHtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtc2hyaW5rLTEge1xuICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xufVxuXG4uanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4uanVzdGlmeS1jb250ZW50LWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1pdGVtcy1zdGFydCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1pdGVtcy1lbmQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1pdGVtcy1zdHJldGNoIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWNvbnRlbnQtc3RhcnQge1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1jb250ZW50LWVuZCB7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1jb250ZW50LWNlbnRlciB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tY29udGVudC1iZXR3ZWVuIHtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tY29udGVudC1hcm91bmQge1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWNvbnRlbnQtc3RyZXRjaCB7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuLmFsaWduLXNlbGYtYXV0byB7XG4gIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmFsaWduLXNlbGYtc3RhcnQge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1zZWxmLWVuZCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tc2VsZi1iYXNlbGluZSB7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1zZWxmLXN0cmV0Y2gge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuZmxleC1zbS1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXNtLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtc20tcm93LXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtc20tY29sdW1uLXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtc20td3JhcCB7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1zbS1ub3dyYXAge1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1zbS13cmFwLXJldmVyc2Uge1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1zbS1maWxsIHtcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtc20tZ3Jvdy0wIHtcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXNtLWdyb3ctMSB7XG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1zbS1zaHJpbmstMCB7XG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXNtLXNocmluay0xIHtcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC1zbS1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LXNtLWVuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC1zbS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LXNtLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC1zbS1hcm91bmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMtc20tc3RhcnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMtc20tZW5kIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1zbS1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1zbS1iYXNlbGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMtc20tc3RyZXRjaCB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LXNtLXN0YXJ0IHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC1zbS1lbmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC1zbS1jZW50ZXIge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQtc20tYmV0d2VlbiB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQtc20tYXJvdW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LXNtLXN0cmV0Y2gge1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLXNtLWF1dG8ge1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLXNtLXN0YXJ0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi1zbS1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi1zbS1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLXNlbGYtc20tYmFzZWxpbmUge1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi1zbS1zdHJldGNoIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZmxleC1tZC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LW1kLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbWQtcm93LXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbWQtY29sdW1uLXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbWQtd3JhcCB7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1tZC1ub3dyYXAge1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1tZC13cmFwLXJldmVyc2Uge1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1tZC1maWxsIHtcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbWQtZ3Jvdy0wIHtcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LW1kLWdyb3ctMSB7XG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1tZC1zaHJpbmstMCB7XG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LW1kLXNocmluay0xIHtcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC1tZC1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LW1kLWVuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC1tZC1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LW1kLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC1tZC1hcm91bmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMtbWQtc3RhcnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMtbWQtZW5kIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1tZC1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1tZC1iYXNlbGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMtbWQtc3RyZXRjaCB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LW1kLXN0YXJ0IHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC1tZC1lbmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC1tZC1jZW50ZXIge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQtbWQtYmV0d2VlbiB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQtbWQtYXJvdW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LW1kLXN0cmV0Y2gge1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLW1kLWF1dG8ge1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLW1kLXN0YXJ0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi1tZC1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi1tZC1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLXNlbGYtbWQtYmFzZWxpbmUge1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi1tZC1zdHJldGNoIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuZmxleC1sZy1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LWxnLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbGctcm93LXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbGctY29sdW1uLXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbGctd3JhcCB7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1sZy1ub3dyYXAge1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1sZy13cmFwLXJldmVyc2Uge1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1sZy1maWxsIHtcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtbGctZ3Jvdy0wIHtcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LWxnLWdyb3ctMSB7XG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC1sZy1zaHJpbmstMCB7XG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LWxnLXNocmluay0xIHtcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC1sZy1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LWxnLWVuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC1sZy1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuanVzdGlmeS1jb250ZW50LWxnLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC1sZy1hcm91bmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMtbGctc3RhcnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMtbGctZW5kIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1sZy1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1pdGVtcy1sZy1iYXNlbGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMtbGctc3RyZXRjaCB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LWxnLXN0YXJ0IHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC1sZy1lbmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC1sZy1jZW50ZXIge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQtbGctYmV0d2VlbiB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQtbGctYXJvdW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LWxnLXN0cmV0Y2gge1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLWxnLWF1dG8ge1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLWxnLXN0YXJ0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi1sZy1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi1sZy1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLXNlbGYtbGctYmFzZWxpbmUge1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi1sZy1zdHJldGNoIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLmZsZXgteGwtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC14bC1jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXhsLXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXhsLWNvbHVtbi1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXhsLXdyYXAge1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgteGwtbm93cmFwIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgteGwtd3JhcC1yZXZlcnNlIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgteGwtZmlsbCB7XG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LXhsLWdyb3ctMCB7XG4gICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC14bC1ncm93LTEge1xuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgteGwtc2hyaW5rLTAge1xuICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmxleC14bC1zaHJpbmstMSB7XG4gICAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtc3RhcnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC14bC1lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmp1c3RpZnktY29udGVudC14bC1iZXR3ZWVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtYXJvdW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWl0ZW1zLXhsLXN0YXJ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWl0ZW1zLXhsLWVuZCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMteGwtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24taXRlbXMteGwtYmFzZWxpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWl0ZW1zLXhsLXN0cmV0Y2gge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC14bC1zdGFydCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQteGwtZW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLWNvbnRlbnQteGwtY2VudGVyIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LXhsLWJldHdlZW4ge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1jb250ZW50LXhsLWFyb3VuZCB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tY29udGVudC14bC1zdHJldGNoIHtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi14bC1hdXRvIHtcbiAgICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxpZ24tc2VsZi14bC1zdGFydCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLXNlbGYteGwtZW5kIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLXNlbGYteGwtY2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbGlnbi1zZWxmLXhsLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFsaWduLXNlbGYteGwtc3RyZXRjaCB7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG59XG4ubS0wIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0wLFxuLm15LTAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tci0wLFxuLm14LTAge1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLm1iLTAsXG4ubXktMCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLm1sLTAsXG4ubXgtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tLTEge1xuICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTEsXG4ubXktMSB7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLTEsXG4ubXgtMSB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItMSxcbi5teS0xIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtMSxcbi5teC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tMiB7XG4gIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0yLFxuLm15LTIge1xuICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLTIsXG4ubXgtMiB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi0yLFxuLm15LTIge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLTIsXG4ubXgtMiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tMyB7XG4gIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtMyxcbi5teS0zIHtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItMyxcbi5teC0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi0zLFxuLm15LTMge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tbC0zLFxuLm14LTMge1xuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS00IHtcbiAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTQsXG4ubXktNCB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItNCxcbi5teC00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTQsXG4ubXktNCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtNCxcbi5teC00IHtcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS01IHtcbiAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC01LFxuLm15LTUge1xuICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci01LFxuLm14LTUge1xuICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTUsXG4ubXktNSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLTUsXG4ubXgtNSB7XG4gIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wLTAge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0wLFxuLnB5LTAge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ucHItMCxcbi5weC0wIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4ucGItMCxcbi5weS0wIHtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLnBsLTAsXG4ucHgtMCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4ucC0xIHtcbiAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtMSxcbi5weS0xIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnByLTEsXG4ucHgtMSB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTEsXG4ucHktMSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0xLFxuLnB4LTEge1xuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnAtMiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtMixcbi5weS0yIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHItMixcbi5weC0yIHtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYi0yLFxuLnB5LTIge1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0yLFxuLnB4LTIge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucC0zIHtcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtMyxcbi5weS0zIHtcbiAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnByLTMsXG4ucHgtMyB7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTMsXG4ucHktMyB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0zLFxuLnB4LTMge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnAtNCB7XG4gIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtNCxcbi5weS00IHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHItNCxcbi5weC00IHtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYi00LFxuLnB5LTQge1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC00LFxuLnB4LTQge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucC01IHtcbiAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtNSxcbi5weS01IHtcbiAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnByLTUsXG4ucHgtNSB7XG4gIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTUsXG4ucHktNSB7XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC01LFxuLnB4LTUge1xuICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tbjEge1xuICBtYXJnaW46IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uMSxcbi5teS1uMSB7XG4gIG1hcmdpbi10b3A6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci1uMSxcbi5teC1uMSB7XG4gIG1hcmdpbi1yaWdodDogLTAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLW4xLFxuLm15LW4xIHtcbiAgbWFyZ2luLWJvdHRvbTogLTAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW4xLFxuLm14LW4xIHtcbiAgbWFyZ2luLWxlZnQ6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLW4yIHtcbiAgbWFyZ2luOiAtMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uMixcbi5teS1uMiB7XG4gIG1hcmdpbi10b3A6IC0wLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLW4yLFxuLm14LW4yIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi1uMixcbi5teS1uMiB7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW4yLFxuLm14LW4yIHtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tbjMge1xuICBtYXJnaW46IC0xcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uMyxcbi5teS1uMyB7XG4gIG1hcmdpbi10b3A6IC0xcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci1uMyxcbi5teC1uMyB7XG4gIG1hcmdpbi1yaWdodDogLTFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLW4zLFxuLm15LW4zIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW4zLFxuLm14LW4zIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLW40IHtcbiAgbWFyZ2luOiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uNCxcbi5teS1uNCB7XG4gIG1hcmdpbi10b3A6IC0xLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLW40LFxuLm14LW40IHtcbiAgbWFyZ2luLXJpZ2h0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi1uNCxcbi5teS1uNCB7XG4gIG1hcmdpbi1ib3R0b206IC0xLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW40LFxuLm14LW40IHtcbiAgbWFyZ2luLWxlZnQ6IC0xLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tbjUge1xuICBtYXJnaW46IC0zcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uNSxcbi5teS1uNSB7XG4gIG1hcmdpbi10b3A6IC0zcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci1uNSxcbi5teC1uNSB7XG4gIG1hcmdpbi1yaWdodDogLTNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLW41LFxuLm15LW41IHtcbiAgbWFyZ2luLWJvdHRvbTogLTNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW41LFxuLm14LW41IHtcbiAgbWFyZ2luLWxlZnQ6IC0zcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLWF1dG8ge1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm10LWF1dG8sXG4ubXktYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1yLWF1dG8sXG4ubXgtYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubWItYXV0byxcbi5teS1hdXRvIHtcbiAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubWwtYXV0byxcbi5teC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5tLXNtLTAge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLTAsXG4ubXktc20tMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXNtLTAsXG4ubXgtc20tMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItc20tMCxcbi5teS1zbS0wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tMCxcbi5teC1zbS0wIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tc20tMSB7XG4gICAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtc20tMSxcbi5teS1zbS0xIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItc20tMSxcbi5teC1zbS0xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1zbS0xLFxuLm15LXNtLTEge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1zbS0xLFxuLm14LXNtLTEge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1zbS0yIHtcbiAgICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLTIsXG4ubXktc20tMiB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItc20tMixcbi5teC1zbS0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXNtLTIsXG4ubXktc20tMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tMixcbi5teC1zbS0yIHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1zbS0zIHtcbiAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1zbS0zLFxuLm15LXNtLTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1zbS0zLFxuLm14LXNtLTMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXNtLTMsXG4ubXktc20tMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXNtLTMsXG4ubXgtc20tMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLXNtLTQge1xuICAgIG1hcmdpbjogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtc20tNCxcbi5teS1zbS00IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1zbS00LFxuLm14LXNtLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItc20tNCxcbi5teS1zbS00IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1zbS00LFxuLm14LXNtLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLXNtLTUge1xuICAgIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLTUsXG4ubXktc20tNSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXNtLTUsXG4ubXgtc20tNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItc20tNSxcbi5teS1zbS01IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tNSxcbi5teC1zbS01IHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAtc20tMCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0LXNtLTAsXG4ucHktc20tMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wci1zbS0wLFxuLnB4LXNtLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi1zbS0wLFxuLnB5LXNtLTAge1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGwtc20tMCxcbi5weC1zbS0wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLXNtLTEge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC1zbS0xLFxuLnB5LXNtLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHItc20tMSxcbi5weC1zbS0xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGItc20tMSxcbi5weS1zbS0xIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLXNtLTEsXG4ucHgtc20tMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC1zbS0yIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC1zbS0yLFxuLnB5LXNtLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wci1zbS0yLFxuLnB4LXNtLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLXNtLTIsXG4ucHktc20tMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLXNtLTIsXG4ucHgtc20tMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLXNtLTMge1xuICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC1zbS0zLFxuLnB5LXNtLTMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHItc20tMyxcbi5weC1zbS0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGItc20tMyxcbi5weS1zbS0zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLXNtLTMsXG4ucHgtc20tMyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC1zbS00IHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC1zbS00LFxuLnB5LXNtLTQge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wci1zbS00LFxuLnB4LXNtLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLXNtLTQsXG4ucHktc20tNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLXNtLTQsXG4ucHgtc20tNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLXNtLTUge1xuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC1zbS01LFxuLnB5LXNtLTUge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHItc20tNSxcbi5weC1zbS01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGItc20tNSxcbi5weS1zbS01IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLXNtLTUsXG4ucHgtc20tNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1zbS1uMSB7XG4gICAgbWFyZ2luOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLW4xLFxuLm15LXNtLW4xIHtcbiAgICBtYXJnaW4tdG9wOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXNtLW4xLFxuLm14LXNtLW4xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItc20tbjEsXG4ubXktc20tbjEge1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tbjEsXG4ubXgtc20tbjEge1xuICAgIG1hcmdpbi1sZWZ0OiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tc20tbjIge1xuICAgIG1hcmdpbjogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLW4yLFxuLm15LXNtLW4yIHtcbiAgICBtYXJnaW4tdG9wOiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItc20tbjIsXG4ubXgtc20tbjIge1xuICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXNtLW4yLFxuLm15LXNtLW4yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tbjIsXG4ubXgtc20tbjIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1zbS1uMyB7XG4gICAgbWFyZ2luOiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLW4zLFxuLm15LXNtLW4zIHtcbiAgICBtYXJnaW4tdG9wOiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXNtLW4zLFxuLm14LXNtLW4zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItc20tbjMsXG4ubXktc20tbjMge1xuICAgIG1hcmdpbi1ib3R0b206IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tbjMsXG4ubXgtc20tbjMge1xuICAgIG1hcmdpbi1sZWZ0OiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tc20tbjQge1xuICAgIG1hcmdpbjogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLW40LFxuLm15LXNtLW40IHtcbiAgICBtYXJnaW4tdG9wOiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItc20tbjQsXG4ubXgtc20tbjQge1xuICAgIG1hcmdpbi1yaWdodDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXNtLW40LFxuLm15LXNtLW40IHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tbjQsXG4ubXgtc20tbjQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1zbS1uNSB7XG4gICAgbWFyZ2luOiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXNtLW41LFxuLm15LXNtLW41IHtcbiAgICBtYXJnaW4tdG9wOiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXNtLW41LFxuLm14LXNtLW41IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItc20tbjUsXG4ubXktc20tbjUge1xuICAgIG1hcmdpbi1ib3R0b206IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtc20tbjUsXG4ubXgtc20tbjUge1xuICAgIG1hcmdpbi1sZWZ0OiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tc20tYXV0byB7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtc20tYXV0byxcbi5teS1zbS1hdXRvIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItc20tYXV0byxcbi5teC1zbS1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1zbS1hdXRvLFxuLm15LXNtLWF1dG8ge1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1zbS1hdXRvLFxuLm14LXNtLWF1dG8ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubS1tZC0wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC0wLFxuLm15LW1kLTAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1tZC0wLFxuLm14LW1kLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLW1kLTAsXG4ubXktbWQtMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLTAsXG4ubXgtbWQtMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLW1kLTEge1xuICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LW1kLTEsXG4ubXktbWQtMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLW1kLTEsXG4ubXgtbWQtMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItbWQtMSxcbi5teS1tZC0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtbWQtMSxcbi5teC1tZC0xIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbWQtMiB7XG4gICAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC0yLFxuLm15LW1kLTIge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLW1kLTIsXG4ubXgtbWQtMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1tZC0yLFxuLm15LW1kLTIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLTIsXG4ubXgtbWQtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbWQtMyB7XG4gICAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbWQtMyxcbi5teS1tZC0zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbWQtMyxcbi5teC1tZC0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1tZC0zLFxuLm15LW1kLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1tZC0zLFxuLm14LW1kLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1tZC00IHtcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LW1kLTQsXG4ubXktbWQtNCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbWQtNCxcbi5teC1tZC00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLW1kLTQsXG4ubXktbWQtNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtbWQtNCxcbi5teC1tZC00IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1tZC01IHtcbiAgICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC01LFxuLm15LW1kLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1tZC01LFxuLm14LW1kLTUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLW1kLTUsXG4ubXktbWQtNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLTUsXG4ubXgtbWQtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLW1kLTAge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC1tZC0wLFxuLnB5LW1kLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHItbWQtMCxcbi5weC1tZC0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGItbWQtMCxcbi5weS1tZC0wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLW1kLTAsXG4ucHgtbWQtMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC1tZC0xIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtbWQtMSxcbi5weS1tZC0xIHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLW1kLTEsXG4ucHgtbWQtMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLW1kLTEsXG4ucHktbWQtMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC1tZC0xLFxuLnB4LW1kLTEge1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAtbWQtMiB7XG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtbWQtMixcbi5weS1tZC0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHItbWQtMixcbi5weC1tZC0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi1tZC0yLFxuLnB5LW1kLTIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC1tZC0yLFxuLnB4LW1kLTIge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC1tZC0zIHtcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtbWQtMyxcbi5weS1tZC0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLW1kLTMsXG4ucHgtbWQtMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLW1kLTMsXG4ucHktbWQtMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC1tZC0zLFxuLnB4LW1kLTMge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAtbWQtNCB7XG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtbWQtNCxcbi5weS1tZC00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHItbWQtNCxcbi5weC1tZC00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi1tZC00LFxuLnB5LW1kLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC1tZC00LFxuLnB4LW1kLTQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC1tZC01IHtcbiAgICBwYWRkaW5nOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtbWQtNSxcbi5weS1tZC01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLW1kLTUsXG4ucHgtbWQtNSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLW1kLTUsXG4ucHktbWQtNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC1tZC01LFxuLnB4LW1kLTUge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbWQtbjEge1xuICAgIG1hcmdpbjogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC1uMSxcbi5teS1tZC1uMSB7XG4gICAgbWFyZ2luLXRvcDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1tZC1uMSxcbi5teC1tZC1uMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLW1kLW4xLFxuLm15LW1kLW4xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLW4xLFxuLm14LW1kLW4xIHtcbiAgICBtYXJnaW4tbGVmdDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLW1kLW4yIHtcbiAgICBtYXJnaW46IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC1uMixcbi5teS1tZC1uMiB7XG4gICAgbWFyZ2luLXRvcDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLW1kLW4yLFxuLm14LW1kLW4yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1tZC1uMixcbi5teS1tZC1uMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLW4yLFxuLm14LW1kLW4yIHtcbiAgICBtYXJnaW4tbGVmdDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbWQtbjMge1xuICAgIG1hcmdpbjogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC1uMyxcbi5teS1tZC1uMyB7XG4gICAgbWFyZ2luLXRvcDogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1tZC1uMyxcbi5teC1tZC1uMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLW1kLW4zLFxuLm15LW1kLW4zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLW4zLFxuLm14LW1kLW4zIHtcbiAgICBtYXJnaW4tbGVmdDogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLW1kLW40IHtcbiAgICBtYXJnaW46IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC1uNCxcbi5teS1tZC1uNCB7XG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLW1kLW40LFxuLm14LW1kLW40IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1tZC1uNCxcbi5teS1tZC1uNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLW40LFxuLm14LW1kLW40IHtcbiAgICBtYXJnaW4tbGVmdDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbWQtbjUge1xuICAgIG1hcmdpbjogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1tZC1uNSxcbi5teS1tZC1uNSB7XG4gICAgbWFyZ2luLXRvcDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1tZC1uNSxcbi5teC1tZC1uNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLW1kLW41LFxuLm15LW1kLW41IHtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLW1kLW41LFxuLm14LW1kLW41IHtcbiAgICBtYXJnaW4tbGVmdDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLW1kLWF1dG8ge1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LW1kLWF1dG8sXG4ubXktbWQtYXV0byB7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLW1kLWF1dG8sXG4ubXgtbWQtYXV0byB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItbWQtYXV0byxcbi5teS1tZC1hdXRvIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtbWQtYXV0byxcbi5teC1tZC1hdXRvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm0tbGctMCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctMCxcbi5teS1sZy0wIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbGctMCxcbi5teC1sZy0wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1sZy0wLFxuLm15LWxnLTAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy0wLFxuLm14LWxnLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1sZy0xIHtcbiAgICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1sZy0xLFxuLm15LWxnLTEge1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1sZy0xLFxuLm14LWxnLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLWxnLTEsXG4ubXktbGctMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLWxnLTEsXG4ubXgtbGctMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLWxnLTIge1xuICAgIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctMixcbi5teS1sZy0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1sZy0yLFxuLm14LWxnLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItbGctMixcbi5teS1sZy0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy0yLFxuLm14LWxnLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLWxnLTMge1xuICAgIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LWxnLTMsXG4ubXktbGctMyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLWxnLTMsXG4ubXgtbGctMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItbGctMyxcbi5teS1sZy0zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwtbGctMyxcbi5teC1sZy0zIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbGctNCB7XG4gICAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1sZy00LFxuLm15LWxnLTQge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLWxnLTQsXG4ubXgtbGctNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1sZy00LFxuLm15LWxnLTQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLWxnLTQsXG4ubXgtbGctNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tbGctNSB7XG4gICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctNSxcbi5teS1sZy01IHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbGctNSxcbi5teC1sZy01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1sZy01LFxuLm15LWxnLTUge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy01LFxuLm14LWxnLTUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC1sZy0wIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtbGctMCxcbi5weS1sZy0wIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLWxnLTAsXG4ucHgtbGctMCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLWxnLTAsXG4ucHktbGctMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC1sZy0wLFxuLnB4LWxnLTAge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAtbGctMSB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0LWxnLTEsXG4ucHktbGctMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wci1sZy0xLFxuLnB4LWxnLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi1sZy0xLFxuLnB5LWxnLTEge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGwtbGctMSxcbi5weC1sZy0xIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLWxnLTIge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0LWxnLTIsXG4ucHktbGctMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLWxnLTIsXG4ucHgtbGctMiB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGItbGctMixcbi5weS1sZy0yIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGwtbGctMixcbi5weC1sZy0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAtbGctMyB7XG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0LWxnLTMsXG4ucHktbGctMyB7XG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wci1sZy0zLFxuLnB4LWxnLTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi1sZy0zLFxuLnB5LWxnLTMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGwtbGctMyxcbi5weC1sZy0zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLWxnLTQge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0LWxnLTQsXG4ucHktbGctNCB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLWxnLTQsXG4ucHgtbGctNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGItbGctNCxcbi5weS1sZy00IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGwtbGctNCxcbi5weC1sZy00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAtbGctNSB7XG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0LWxnLTUsXG4ucHktbGctNSB7XG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wci1sZy01LFxuLnB4LWxnLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi1sZy01LFxuLnB5LWxnLTUge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGwtbGctNSxcbi5weC1sZy01IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLWxnLW4xIHtcbiAgICBtYXJnaW46IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctbjEsXG4ubXktbGctbjEge1xuICAgIG1hcmdpbi10b3A6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbGctbjEsXG4ubXgtbGctbjEge1xuICAgIG1hcmdpbi1yaWdodDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1sZy1uMSxcbi5teS1sZy1uMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy1uMSxcbi5teC1sZy1uMSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1sZy1uMiB7XG4gICAgbWFyZ2luOiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctbjIsXG4ubXktbGctbjIge1xuICAgIG1hcmdpbi10b3A6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1sZy1uMixcbi5teC1sZy1uMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItbGctbjIsXG4ubXktbGctbjIge1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy1uMixcbi5teC1sZy1uMiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLWxnLW4zIHtcbiAgICBtYXJnaW46IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctbjMsXG4ubXktbGctbjMge1xuICAgIG1hcmdpbi10b3A6IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbGctbjMsXG4ubXgtbGctbjMge1xuICAgIG1hcmdpbi1yaWdodDogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1sZy1uMyxcbi5teS1sZy1uMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy1uMyxcbi5teC1sZy1uMyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1sZy1uNCB7XG4gICAgbWFyZ2luOiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctbjQsXG4ubXktbGctbjQge1xuICAgIG1hcmdpbi10b3A6IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1sZy1uNCxcbi5teC1sZy1uNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWItbGctbjQsXG4ubXktbGctbjQge1xuICAgIG1hcmdpbi1ib3R0b206IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy1uNCxcbi5teC1sZy1uNCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLWxnLW41IHtcbiAgICBtYXJnaW46IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQtbGctbjUsXG4ubXktbGctbjUge1xuICAgIG1hcmdpbi10b3A6IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXItbGctbjUsXG4ubXgtbGctbjUge1xuICAgIG1hcmdpbi1yaWdodDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi1sZy1uNSxcbi5teS1sZy1uNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC1sZy1uNSxcbi5teC1sZy1uNSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS1sZy1hdXRvIHtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC1sZy1hdXRvLFxuLm15LWxnLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci1sZy1hdXRvLFxuLm14LWxnLWF1dG8ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLWxnLWF1dG8sXG4ubXktbGctYXV0byB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLWxnLWF1dG8sXG4ubXgtbGctYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAubS14bC0wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC0wLFxuLm15LXhsLTAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci14bC0wLFxuLm14LXhsLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXhsLTAsXG4ubXkteGwtMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLTAsXG4ubXgteGwtMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLXhsLTEge1xuICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXhsLTEsXG4ubXkteGwtMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXhsLTEsXG4ubXgteGwtMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWIteGwtMSxcbi5teS14bC0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwteGwtMSxcbi5teC14bC0xIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0teGwtMiB7XG4gICAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC0yLFxuLm15LXhsLTIge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXhsLTIsXG4ubXgteGwtMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi14bC0yLFxuLm15LXhsLTIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLTIsXG4ubXgteGwtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0teGwtMyB7XG4gICAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQteGwtMyxcbi5teS14bC0zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXIteGwtMyxcbi5teC14bC0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi14bC0zLFxuLm15LXhsLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC14bC0zLFxuLm14LXhsLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS14bC00IHtcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXhsLTQsXG4ubXkteGwtNCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXIteGwtNCxcbi5teC14bC00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXhsLTQsXG4ubXkteGwtNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwteGwtNCxcbi5teC14bC00IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubS14bC01IHtcbiAgICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC01LFxuLm15LXhsLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci14bC01LFxuLm14LXhsLTUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXhsLTUsXG4ubXkteGwtNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLTUsXG4ubXgteGwtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wLXhsLTAge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC14bC0wLFxuLnB5LXhsLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHIteGwtMCxcbi5weC14bC0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGIteGwtMCxcbi5weS14bC0wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBsLXhsLTAsXG4ucHgteGwtMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC14bC0xIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQteGwtMSxcbi5weS14bC0xIHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLXhsLTEsXG4ucHgteGwtMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLXhsLTEsXG4ucHkteGwtMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC14bC0xLFxuLnB4LXhsLTEge1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAteGwtMiB7XG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQteGwtMixcbi5weS14bC0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHIteGwtMixcbi5weC14bC0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi14bC0yLFxuLnB5LXhsLTIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC14bC0yLFxuLnB4LXhsLTIge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC14bC0zIHtcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQteGwtMyxcbi5weS14bC0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLXhsLTMsXG4ucHgteGwtMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLXhsLTMsXG4ucHkteGwtMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC14bC0zLFxuLnB4LXhsLTMge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnAteGwtNCB7XG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQteGwtNCxcbi5weS14bC00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHIteGwtNCxcbi5weC14bC00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYi14bC00LFxuLnB5LXhsLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC14bC00LFxuLnB4LXhsLTQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucC14bC01IHtcbiAgICBwYWRkaW5nOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQteGwtNSxcbi5weS14bC01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByLXhsLTUsXG4ucHgteGwtNSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLXhsLTUsXG4ucHkteGwtNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbC14bC01LFxuLnB4LXhsLTUge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0teGwtbjEge1xuICAgIG1hcmdpbjogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC1uMSxcbi5teS14bC1uMSB7XG4gICAgbWFyZ2luLXRvcDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci14bC1uMSxcbi5teC14bC1uMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXhsLW4xLFxuLm15LXhsLW4xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLW4xLFxuLm14LXhsLW4xIHtcbiAgICBtYXJnaW4tbGVmdDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLXhsLW4yIHtcbiAgICBtYXJnaW46IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC1uMixcbi5teS14bC1uMiB7XG4gICAgbWFyZ2luLXRvcDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXhsLW4yLFxuLm14LXhsLW4yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi14bC1uMixcbi5teS14bC1uMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLW4yLFxuLm14LXhsLW4yIHtcbiAgICBtYXJnaW4tbGVmdDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0teGwtbjMge1xuICAgIG1hcmdpbjogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC1uMyxcbi5teS14bC1uMyB7XG4gICAgbWFyZ2luLXRvcDogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci14bC1uMyxcbi5teC14bC1uMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXhsLW4zLFxuLm15LXhsLW4zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLW4zLFxuLm14LXhsLW4zIHtcbiAgICBtYXJnaW4tbGVmdDogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLXhsLW40IHtcbiAgICBtYXJnaW46IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC1uNCxcbi5teS14bC1uNCB7XG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXhsLW40LFxuLm14LXhsLW40IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYi14bC1uNCxcbi5teS14bC1uNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLW40LFxuLm14LXhsLW40IHtcbiAgICBtYXJnaW4tbGVmdDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0teGwtbjUge1xuICAgIG1hcmdpbjogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tdC14bC1uNSxcbi5teS14bC1uNSB7XG4gICAgbWFyZ2luLXRvcDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tci14bC1uNSxcbi5teC14bC1uNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1iLXhsLW41LFxuLm15LXhsLW41IHtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLXhsLW41LFxuLm14LXhsLW41IHtcbiAgICBtYXJnaW4tbGVmdDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLXhsLWF1dG8ge1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm10LXhsLWF1dG8sXG4ubXkteGwtYXV0byB7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLXhsLWF1dG8sXG4ubXgteGwtYXV0byB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWIteGwtYXV0byxcbi5teS14bC1hdXRvIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWwteGwtYXV0byxcbi5teC14bC1hdXRvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG4uaW1nLWZsdWlkIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbWctdGh1bWJuYWlsIHtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5maWd1cmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5maWd1cmUtaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmZpZ3VyZS1jYXB0aW9uIHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4uLXF1LXR4dC13aGl0ZSB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uLXF1LXR4dC1ibGFjayB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uLXF1LXR4dC1ncmF5IHtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi4tcXUtdHh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLi1xdS10eHQtc21hbGxlciB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLi1xdS10eHQtYmFzZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLi1xdS10eHQtbGFyZ2VyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaHIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAxNzhweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEI0Qzk7XG4gIGJvcmRlcjogMDtcbn1cblxuLnF1LW1haW4ge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEzMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDBiNGM5IDAlLCAjODFkZmIwIDI1JSwgd2hpdGUgNTglLCB3aGl0ZSAxMDAlKTtcbn1cblxuLnF1LWZvb3RlciB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzgxZGZiMCAwJSwgIzAwYjRjOSAxMDAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxQjVDOTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuaDEsXG5oMiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmg0LFxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5xdS1sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTY1cHg7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnF1LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDE3OHB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMEI0Qzk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMEI0Qzk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ucXUtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMwMEI0Qzk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxODAsIDIwMSwgMC4wNSk7XG59XG4ucXUtYnV0dG9uLi1hY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBib3JkZXItY29sb3I6ICNGRkY7XG59XG4ucXUtYnV0dG9uLi1hY3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBib3JkZXItY29sb3I6ICNmYWZhZmE7XG59XG4ucXUtYnV0dG9uLi1zZWNvbmRhcnkge1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGO1xufVxuLnF1LWJ1dHRvbi4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbn1cblxuLnF1LW1lZGlhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ucXUtbWVkaWEuLWFsaWduLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucXUtbWVkaWFfX2JvZHkge1xuICBmbGV4OiAxO1xufVxuLnF1LW1lZGlhIGltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5xdS1tZWRpYSBpbWcuLXNtYWxsIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucXUtcXVvdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuLnF1LXF1b3RlOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29udGVudDogXCLigJ1cIjtcbn1cbi5xdS1xdW90ZS4tbGFyZ2Uge1xuICBmb250LXNpemU6IDY2cHg7XG59IiwiLyohXG4gKiBCb290c3RyYXAgUmVib290IHY0LjYuMCAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcbiAqIENvcHlyaWdodCAyMDExLTIwMjEgVGhlIEJvb3RzdHJhcCBBdXRob3JzXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDIxIFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogRm9ya2VkIGZyb20gTm9ybWFsaXplLmNzcywgbGljZW5zZWQgTUlUIChodHRwczovL2dpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQpXG4gKi9cblxuQGltcG9ydCBcImZ1bmN0aW9uc1wiO1xuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIm1peGluc1wiO1xuQGltcG9ydCBcInJlYm9vdFwiO1xuIiwiLy8gc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50LCBzZWxlY3Rvci1uby1xdWFsaWZ5aW5nLXR5cGUsIHByb3BlcnR5LW5vLXZlbmRvci1wcmVmaXhcblxuLy8gUmVib290XG4vL1xuLy8gTm9ybWFsaXphdGlvbiBvZiBIVE1MIGVsZW1lbnRzLCBtYW51YWxseSBmb3JrZWQgZnJvbSBOb3JtYWxpemUuY3NzIHRvIHJlbW92ZVxuLy8gc3R5bGVzIHRhcmdldGluZyBpcnJlbGV2YW50IGJyb3dzZXJzIHdoaWxlIGFwcGx5aW5nIG5ldyBzdHlsZXMuXG4vL1xuLy8gTm9ybWFsaXplIGlzIGxpY2Vuc2VkIE1JVC4gaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzc1xuXG5cbi8vIERvY3VtZW50XG4vL1xuLy8gMS4gQ2hhbmdlIGZyb20gYGJveC1zaXppbmc6IGNvbnRlbnQtYm94YCBzbyB0aGF0IGB3aWR0aGAgaXMgbm90IGFmZmVjdGVkIGJ5IGBwYWRkaW5nYCBvciBgYm9yZGVyYC5cbi8vIDIuIENoYW5nZSB0aGUgZGVmYXVsdCBmb250IGZhbWlseSBpbiBhbGwgYnJvd3NlcnMuXG4vLyAzLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4vLyA0LiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIElFIG9uIFdpbmRvd3MgUGhvbmUgYW5kIGluIGlPUy5cbi8vIDUuIENoYW5nZSB0aGUgZGVmYXVsdCB0YXAgaGlnaGxpZ2h0IHRvIGJlIGNvbXBsZXRlbHkgdHJhbnNwYXJlbnQgaW4gaU9TLlxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvLyAxXG59XG5cbmh0bWwge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLy8gMlxuICBsaW5lLWhlaWdodDogMS4xNTsgLy8gM1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8vIDRcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKCRibGFjaywgMCk7IC8vIDVcbn1cblxuLy8gU2hpbSBmb3IgXCJuZXdcIiBIVE1MNSBzdHJ1Y3R1cmFsIGVsZW1lbnRzIHRvIGRpc3BsYXkgY29ycmVjdGx5IChJRTEwLCBvbGRlciBicm93c2Vycylcbi8vIFRPRE86IHJlbW92ZSBpbiB2NVxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlbGVjdG9yLWxpc3QtY29tbWEtbmV3bGluZS1hZnRlclxuYXJ0aWNsZSwgYXNpZGUsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbmF2LCBzZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8vIEJvZHlcbi8vXG4vLyAxLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4vLyAyLiBBcyBhIGJlc3QgcHJhY3RpY2UsIGFwcGx5IGEgZGVmYXVsdCBgYmFja2dyb3VuZC1jb2xvcmAuXG4vLyAzLiBTZXQgYW4gZXhwbGljaXQgaW5pdGlhbCB0ZXh0LWFsaWduIHZhbHVlIHNvIHRoYXQgd2UgY2FuIGxhdGVyIHVzZVxuLy8gICAgdGhlIGBpbmhlcml0YCB2YWx1ZSBvbiB0aGluZ3MgbGlrZSBgPHRoPmAgZWxlbWVudHMuXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8vIDFcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xuICBAaW5jbHVkZSBmb250LXNpemUoJGZvbnQtc2l6ZS1iYXNlKTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIGNvbG9yOiAkYm9keS1jb2xvcjtcbiAgdGV4dC1hbGlnbjogbGVmdDsgLy8gM1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZzsgLy8gMlxufVxuXG4vLyBGdXR1cmUtcHJvb2YgcnVsZTogaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IDpmb2N1cy12aXNpYmxlLCBzdXBwcmVzcyB0aGUgZm9jdXMgb3V0bGluZVxuLy8gb24gZWxlbWVudHMgdGhhdCBwcm9ncmFtbWF0aWNhbGx5IHJlY2VpdmUgZm9jdXMgYnV0IHdvdWxkbid0IG5vcm1hbGx5IHNob3cgYSB2aXNpYmxlXG4vLyBmb2N1cyBvdXRsaW5lLiBJbiBnZW5lcmFsLCB0aGlzIHdvdWxkIG1lYW4gdGhhdCB0aGUgb3V0bGluZSBpcyBvbmx5IGFwcGxpZWQgaWYgdGhlXG4vLyBpbnRlcmFjdGlvbiB0aGF0IGxlZCB0byB0aGUgZWxlbWVudCByZWNlaXZpbmcgcHJvZ3JhbW1hdGljIGZvY3VzIHdhcyBhIGtleWJvYXJkIGludGVyYWN0aW9uLFxuLy8gb3IgdGhlIGJyb3dzZXIgaGFzIHNvbWVob3cgZGV0ZXJtaW5lZCB0aGF0IHRoZSB1c2VyIGlzIHByaW1hcmlseSBhIGtleWJvYXJkIHVzZXIgYW5kL29yXG4vLyB3YW50cyBmb2N1cyBvdXRsaW5lcyB0byBhbHdheXMgYmUgcHJlc2VudGVkLlxuLy9cbi8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvOmZvY3VzLXZpc2libGVcbi8vIGFuZCBodHRwczovL2RldmVsb3Blci5wYWNpZWxsb2dyb3VwLmNvbS9ibG9nLzIwMTgvMDMvZm9jdXMtdmlzaWJsZS1hbmQtYmFja3dhcmRzLWNvbXBhdGliaWxpdHkvXG5bdGFiaW5kZXg9XCItMVwiXTpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpIHtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xufVxuXG5cbi8vIENvbnRlbnQgZ3JvdXBpbmdcbi8vXG4vLyAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuLy8gMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8vIDFcbiAgaGVpZ2h0OiAwOyAvLyAxXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvLyAyXG59XG5cblxuLy9cbi8vIFR5cG9ncmFwaHlcbi8vXG5cbi8vIFJlbW92ZSB0b3AgbWFyZ2lucyBmcm9tIGhlYWRpbmdzXG4vL1xuLy8gQnkgZGVmYXVsdCwgYDxoMT5gLWA8aDY+YCBhbGwgcmVjZWl2ZSB0b3AgYW5kIGJvdHRvbSBtYXJnaW5zLiBXZSBudWtlIHRoZSB0b3Bcbi8vIG1hcmdpbiBmb3IgZWFzaWVyIGNvbnRyb2wgd2l0aGluIHR5cGUgc2NhbGVzIGFzIGl0IGF2b2lkcyBtYXJnaW4gY29sbGFwc2luZy5cbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWxlY3Rvci1saXN0LWNvbW1hLW5ld2xpbmUtYWZ0ZXJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAkaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTtcbn1cblxuLy8gUmVzZXQgbWFyZ2lucyBvbiBwYXJhZ3JhcGhzXG4vL1xuLy8gU2ltaWxhcmx5LCB0aGUgdG9wIG1hcmdpbiBvbiBgPHA+YHMgZ2V0IHJlc2V0LiBIb3dldmVyLCB3ZSBhbHNvIHJlc2V0IHRoZVxuLy8gYm90dG9tIG1hcmdpbiB0byB1c2UgYHJlbWAgdW5pdHMgaW5zdGVhZCBvZiBgZW1gLlxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206ICRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTtcbn1cblxuLy8gQWJicmV2aWF0aW9uc1xuLy9cbi8vIDEuIER1cGxpY2F0ZSBiZWhhdmlvciB0byB0aGUgZGF0YS0qIGF0dHJpYnV0ZSBmb3Igb3VyIHRvb2x0aXAgcGx1Z2luXG4vLyAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuLy8gMy4gQWRkIGV4cGxpY2l0IGN1cnNvciB0byBpbmRpY2F0ZSBjaGFuZ2VkIGJlaGF2aW9yLlxuLy8gNC4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIEZpcmVmb3ggMzktLlxuLy8gNS4gUHJldmVudCB0aGUgdGV4dC1kZWNvcmF0aW9uIHRvIGJlIHNraXBwZWQuXG5cbmFiYnJbdGl0bGVdLFxuYWJicltkYXRhLW9yaWdpbmFsLXRpdGxlXSB7IC8vIDFcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8vIDJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvLyAyXG4gIGN1cnNvcjogaGVscDsgLy8gM1xuICBib3JkZXItYm90dG9tOiAwOyAvLyA0XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogbm9uZTsgLy8gNVxufVxuXG5hZGRyZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxub2wsXG51bCxcbmRsIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxub2wgb2wsXG51bCB1bCxcbm9sIHVsLFxudWwgb2wge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5kdCB7XG4gIGZvbnQtd2VpZ2h0OiAkZHQtZm9udC13ZWlnaHQ7XG59XG5cbmRkIHtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwOyAvLyBVbmRvIGJyb3dzZXIgZGVmYXVsdFxufVxuXG5ibG9ja3F1b3RlIHtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZGVyOyAvLyBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpXG59XG5cbnNtYWxsIHtcbiAgQGluY2x1ZGUgZm9udC1zaXplKDgwJSk7IC8vIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzXG59XG5cbi8vXG4vLyBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbi8vIGFsbCBicm93c2Vycy5cbi8vXG5cbnN1YixcbnN1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgQGluY2x1ZGUgZm9udC1zaXplKDc1JSk7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7IGJvdHRvbTogLS4yNWVtOyB9XG5zdXAgeyB0b3A6IC0uNWVtOyB9XG5cblxuLy9cbi8vIExpbmtzXG4vL1xuXG5hIHtcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xuICB0ZXh0LWRlY29yYXRpb246ICRsaW5rLWRlY29yYXRpb247XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvLyBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG5cbiAgQGluY2x1ZGUgaG92ZXIoKSB7XG4gICAgY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogJGxpbmstaG92ZXItZGVjb3JhdGlvbjtcbiAgfVxufVxuXG4vLyBBbmQgdW5kbyB0aGVzZSBzdHlsZXMgZm9yIHBsYWNlaG9sZGVyIGxpbmtzL25hbWVkIGFuY2hvcnMgKHdpdGhvdXQgaHJlZikuXG4vLyBJdCB3b3VsZCBiZSBtb3JlIHN0cmFpZ2h0Zm9yd2FyZCB0byBqdXN0IHVzZSBhW2hyZWZdIGluIHByZXZpb3VzIGJsb2NrLCBidXQgdGhhdFxuLy8gY2F1c2VzIHNwZWNpZmljaXR5IGlzc3VlcyBpbiBtYW55IG90aGVyIHN0eWxlcyB0aGF0IGFyZSB0b28gY29tcGxleCB0byBmaXguXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xOTQwMlxuXG5hOm5vdChbaHJlZl0pOm5vdChbY2xhc3NdKSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgQGluY2x1ZGUgaG92ZXIoKSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG5cblxuLy9cbi8vIENvZGVcbi8vXG5cbnByZSxcbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1tb25vc3BhY2U7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgxZW0pOyAvLyBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG59XG5cbnByZSB7XG4gIC8vIFJlbW92ZSBicm93c2VyIGRlZmF1bHQgdG9wIG1hcmdpblxuICBtYXJnaW4tdG9wOiAwO1xuICAvLyBSZXNldCBicm93c2VyIGRlZmF1bHQgb2YgYDFlbWAgdG8gdXNlIGByZW1gc1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAvLyBEb24ndCBhbGxvdyBjb250ZW50IHRvIGJyZWFrIG91dHNpZGVcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8vIERpc2FibGUgYXV0by1oaWRpbmcgc2Nyb2xsYmFyIGluIElFICYgbGVnYWN5IEVkZ2UgdG8gYXZvaWQgb3ZlcmxhcCxcbiAgLy8gbWFraW5nIGl0IGltcG9zc2libGUgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgY29udGVudFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjtcbn1cblxuXG4vL1xuLy8gRmlndXJlc1xuLy9cblxuZmlndXJlIHtcbiAgLy8gQXBwbHkgYSBjb25zaXN0ZW50IG1hcmdpbiBzdHJhdGVneSAobWF0Y2hlcyBvdXIgdHlwZSBzdHlsZXMpLlxuICBtYXJnaW46IDAgMCAxcmVtO1xufVxuXG5cbi8vXG4vLyBJbWFnZXMgYW5kIGNvbnRlbnRcbi8vXG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1zdHlsZTogbm9uZTsgLy8gUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC0uXG59XG5cbnN2ZyB7XG4gIC8vIFdvcmthcm91bmQgZm9yIHRoZSBTVkcgb3ZlcmZsb3cgYnVnIGluIElFMTAvMTEgaXMgc3RpbGwgcmVxdWlyZWQuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI2ODc4XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cblxuLy9cbi8vIFRhYmxlc1xuLy9cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvLyBQcmV2ZW50IGRvdWJsZSBib3JkZXJzXG59XG5cbmNhcHRpb24ge1xuICBwYWRkaW5nLXRvcDogJHRhYmxlLWNlbGwtcGFkZGluZztcbiAgcGFkZGluZy1ib3R0b206ICR0YWJsZS1jZWxsLXBhZGRpbmc7XG4gIGNvbG9yOiAkdGFibGUtY2FwdGlvbi1jb2xvcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY2FwdGlvbi1zaWRlOiBib3R0b207XG59XG5cbi8vIDEuIFJlbW92ZXMgZm9udC13ZWlnaHQgYm9sZCBieSBpbmhlcml0aW5nXG4vLyAyLiBNYXRjaGVzIGRlZmF1bHQgYDx0ZD5gIGFsaWdubWVudCBieSBpbmhlcml0aW5nIGB0ZXh0LWFsaWduYC5cbi8vIDMuIEZpeCBhbGlnbm1lbnQgZm9yIFNhZmFyaVxuXG50aCB7XG4gIGZvbnQtd2VpZ2h0OiAkdGFibGUtdGgtZm9udC13ZWlnaHQ7IC8vIDFcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDsgLy8gMlxuICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDsgLy8gM1xufVxuXG5cbi8vXG4vLyBGb3Jtc1xuLy9cblxubGFiZWwge1xuICAvLyBBbGxvdyBsYWJlbHMgdG8gdXNlIGBtYXJnaW5gIGZvciBzcGFjaW5nLlxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206ICRsYWJlbC1tYXJnaW4tYm90dG9tO1xufVxuXG4vLyBSZW1vdmUgdGhlIGRlZmF1bHQgYGJvcmRlci1yYWRpdXNgIHRoYXQgbWFjT1MgQ2hyb21lIGFkZHMuXG4vL1xuLy8gRGV0YWlscyBhdCBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI0MDkzXG5idXR0b24ge1xuICAvLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvcGVydHktZGlzYWxsb3dlZC1saXN0XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi8vIEV4cGxpY2l0bHkgcmVtb3ZlIGZvY3VzIG91dGxpbmUgaW4gQ2hyb21pdW0gd2hlbiBpdCBzaG91bGRuJ3QgYmVcbi8vIHZpc2libGUgKGUuZy4gYXMgcmVzdWx0IG9mIG1vdXNlIGNsaWNrIG9yIHRvdWNoIHRhcCkuIEl0IGFscmVhZHlcbi8vIHNob3VsZCBiZSBkb2luZyB0aGlzIGF1dG9tYXRpY2FsbHksIGJ1dCBzZWVtcyB0byBjdXJyZW50bHkgYmVcbi8vIGNvbmZ1c2VkIGFuZCBhcHBsaWVzIGl0cyB2ZXJ5IHZpc2libGUgdHdvLXRvbmUgb3V0bGluZSBhbnl3YXkuXG5cbmJ1dHRvbjpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpIHtcbiAgb3V0bGluZTogMDtcbn1cblxuaW5wdXQsXG5idXR0b24sXG5zZWxlY3QsXG5vcHRncm91cCxcbnRleHRhcmVhIHtcbiAgbWFyZ2luOiAwOyAvLyBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmlcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZShpbmhlcml0KTtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbixcbmlucHV0IHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8vIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2Vcbn1cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IC8vIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveFxufVxuXG4vLyBTZXQgdGhlIGN1cnNvciBmb3Igbm9uLWA8YnV0dG9uPmAgYnV0dG9uc1xuLy9cbi8vIERldGFpbHMgYXQgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMzA1NjJcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vLyBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHdvcmQtd3JhcCBpbiBTYWZhcmkuXG4vL1xuLy8gRGV0YWlscyBhdCBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI0OTkwXG5zZWxlY3Qge1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cblxuXG4vLyAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2AgYW5kIGB2aWRlb2Bcbi8vICAgIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cbi8vIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSwgLy8gMVxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8vIDJcbn1cblxuLy8gT3BpbmlvbmF0ZWQ6IGFkZCBcImhhbmRcIiBjdXJzb3IgdG8gbm9uLWRpc2FibGVkIGJ1dHRvbiBlbGVtZW50cy5cbkBpZiAkZW5hYmxlLXBvaW50ZXItY3Vyc29yLWZvci1idXR0b25zIHtcbiAgYnV0dG9uLFxuICBbdHlwZT1cImJ1dHRvblwiXSxcbiAgW3R5cGU9XCJyZXNldFwiXSxcbiAgW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgICY6bm90KDpkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4vLyBSZW1vdmUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGZyb20gRmlyZWZveCwgYnV0IGRvbid0IHJlc3RvcmUgdGhlIG91dGxpbmUgbGlrZSBOb3JtYWxpemUuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLy8gMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtXG4gIHBhZGRpbmc6IDA7IC8vIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC1cbn1cblxuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvOyAvLyBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFLlxuICAvLyBUZXh0YXJlYXMgc2hvdWxkIHJlYWxseSBvbmx5IHJlc2l6ZSB2ZXJ0aWNhbGx5IHNvIHRoZXkgZG9uJ3QgYnJlYWsgdGhlaXIgKGhvcml6b250YWwpIGNvbnRhaW5lcnMuXG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmZpZWxkc2V0IHtcbiAgLy8gQnJvd3NlcnMgc2V0IGEgZGVmYXVsdCBgbWluLXdpZHRoOiBtaW4tY29udGVudDtgIG9uIGZpZWxkc2V0cyxcbiAgLy8gdW5saWtlIGUuZy4gYDxkaXY+YHMsIHdoaWNoIGhhdmUgYG1pbi13aWR0aDogMDtgIGJ5IGRlZmF1bHQuXG4gIC8vIFNvIHdlIHJlc2V0IHRoYXQgdG8gZW5zdXJlIGZpZWxkc2V0cyBiZWhhdmUgbW9yZSBsaWtlIGEgc3RhbmRhcmQgYmxvY2sgZWxlbWVudC5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTIzNTlcbiAgLy8gYW5kIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlLyN0aGUtZmllbGRzZXQtYW5kLWxlZ2VuZC1lbGVtZW50c1xuICBtaW4td2lkdGg6IDA7XG4gIC8vIFJlc2V0IHRoZSBkZWZhdWx0IG91dGxpbmUgYmVoYXZpb3Igb2YgZmllbGRzZXRzIHNvIHRoZXkgZG9uJ3QgYWZmZWN0IHBhZ2UgbGF5b3V0LlxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbi8vIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cbmxlZ2VuZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlOyAvLyAxXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBAaW5jbHVkZSBmb250LXNpemUoMS41cmVtKTtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0OyAvLyAyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8vIDFcbn1cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8vIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG59XG5cbi8vIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cblt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLy8gVGhpcyBvdmVycmlkZXMgdGhlIGV4dHJhIHJvdW5kZWQgY29ybmVycyBvbiBzZWFyY2ggaW5wdXRzIGluIGlPUyBzbyB0aGF0IG91clxuICAvLyBgLmZvcm0tY29udHJvbGAgY2xhc3MgY2FuIHByb3Blcmx5IHN0eWxlIHRoZW0uIE5vdGUgdGhhdCB0aGlzIGNhbm5vdCBzaW1wbHlcbiAgLy8gYmUgYWRkZWQgdG8gYC5mb3JtLWNvbnRyb2xgIGFzIGl0J3Mgbm90IHNwZWNpZmljIGVub3VnaC4gRm9yIGRldGFpbHMsIHNlZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNTg2LlxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLy8gMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLy9cbi8vIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbi8vXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vL1xuLy8gMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbi8vIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cbi8vXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICBmb250OiBpbmhlcml0OyAvLyAyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvLyAxXG59XG5cbi8vXG4vLyBDb3JyZWN0IGVsZW1lbnQgZGlzcGxheXNcbi8vXG5cbm91dHB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTsgLy8gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzXG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lOyAvLyBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRVxufVxuXG4vLyBBbHdheXMgaGlkZSBhbiBlbGVtZW50IHdpdGggdGhlIGBoaWRkZW5gIEhUTUwgYXR0cmlidXRlIChmcm9tIFB1cmVDU1MpLlxuLy8gTmVlZGVkIGZvciBwcm9wZXIgZGlzcGxheSBpbiBJRSAxMC0uXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cbi8vIENvbG9yIHN5c3RlbVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4kZ3JheXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICksXG4gICRncmF5c1xuKTtcblxuJGJsdWU6ICAgICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNmZmMxMDcgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzI4YTc0NSAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMxN2EyYjggIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICgpICFkZWZhdWx0O1xuJGNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJibHVlXCI6ICAgICAgICRibHVlLFxuICAgIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxuICAgIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxuICAgIFwicGlua1wiOiAgICAgICAkcGluayxcbiAgICBcInJlZFwiOiAgICAgICAgJHJlZCxcbiAgICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcbiAgICBcInllbGxvd1wiOiAgICAgJHllbGxvdyxcbiAgICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxuICAgIFwidGVhbFwiOiAgICAgICAkdGVhbCxcbiAgICBcImN5YW5cIjogICAgICAgJGN5YW4sXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcbiAgICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxuICAgIFwiZ3JheS1kYXJrXCI6ICAkZ3JheS04MDBcbiAgKSxcbiAgJGNvbG9yc1xuKTtcblxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIFNldCBhIHNwZWNpZmljIGp1bXAgcG9pbnQgZm9yIHJlcXVlc3RpbmcgY29sb3IganVtcHNcbiR0aGVtZS1jb2xvci1pbnRlcnZhbDogICAgICA4JSAhZGVmYXVsdDtcblxuLy8gVGhlIHlpcSBsaWdodG5lc3MgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZW4gdGhlIGxpZ2h0bmVzcyBvZiBjb2xvciBjaGFuZ2VzIGZyb20gXCJkYXJrXCIgdG8gXCJsaWdodFwiLiBBY2NlcHRhYmxlIHZhbHVlcyBhcmUgYmV0d2VlbiAwIGFuZCAyNTUuXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAgMTUwICFkZWZhdWx0O1xuXG4vLyBDdXN0b21pemUgdGhlIGxpZ2h0IGFuZCBkYXJrIHRleHQgY29sb3JzIGZvciB1c2UgaW4gb3VyIFlJUSBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiR5aXEtdGV4dC1kYXJrOiAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4keWlxLXRleHQtbGlnaHQ6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4vLyBDaGFyYWN0ZXJzIHdoaWNoIGFyZSBlc2NhcGVkIGJ5IHRoZSBlc2NhcGUtc3ZnIGZ1bmN0aW9uXG4kZXNjYXBlZC1jaGFyYWN0ZXJzOiAoXG4gIChcIjxcIiwgXCIlM2NcIiksXG4gIChcIj5cIiwgXCIlM2VcIiksXG4gIChcIiNcIiwgXCIlMjNcIiksXG4gIChcIihcIiwgXCIlMjhcIiksXG4gIChcIilcIiwgXCIlMjlcIiksXG4pICFkZWZhdWx0O1xuXG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJlZmVycy1yZWR1Y2VkLW1vdGlvbi1tZWRpYS1xdWVyeTogICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkLCBubyBsb25nZXIgYWZmZWN0cyBhbnkgY29tcGlsZWQgQ1NTXG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6ICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZGVwcmVjYXRpb24tbWVzc2FnZXM6ICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuXG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgIDM6ICRzcGFjZXIsXG4gICAgNDogKCRzcGFjZXIgKiAxLjUpLFxuICAgIDU6ICgkc3BhY2VyICogMylcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG5cbi8vIFRoaXMgdmFyaWFibGUgYWZmZWN0cyB0aGUgYC5oLSpgIGFuZCBgLnctKmAgY2xhc3Nlcy5cbiRzaXplczogKCkgIWRlZmF1bHQ7XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDI1OiAyNSUsXG4gICAgNTA6IDUwJSxcbiAgICA3NTogNzUlLFxuICAgIDEwMDogMTAwJSxcbiAgICBhdXRvOiBhdXRvXG4gICksXG4gICRzaXplc1xuKTtcblxuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJGxpbmstZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgIHVuZGVybGluZSAhZGVmYXVsdDtcbi8vIERhcmtlbiBwZXJjZW50YWdlIGZvciBsaW5rcyB3aXRoIGAudGV4dC0qYCBjbGFzcyAoZS5nLiBgLnRleHQtc3VjY2Vzc2ApXG4kZW1waGFzaXplZC1saW5rLWhvdmVyLWRhcmtlbi1wZXJjZW50YWdlOiAxNSUgIWRlZmF1bHQ7XG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogICAxcmVtICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuQGluY2x1ZGUgX2Fzc2VydC1zdGFydHMtYXQtemVybygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGNvbnRhaW5lci1tYXgtd2lkdGhzLCBcIiRjb250YWluZXItbWF4LXdpZHRoc1wiKTtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGdyaWQtcm93LWNvbHVtbnM6ICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcblxuJHJvdW5kZWQtcGlsbDogICAgICAgICAgICAgICAgNTByZW0gIWRlZmF1bHQ7XG5cbiRib3gtc2hhZG93LXNtOiAgICAgICAgICAgICAgIDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6ICAgICAgICAgICAgICAgMCAxcmVtIDNyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG5cbiRjYXJldC13aWR0aDogICAgICAgICAgICAgICAgIC4zZW0gIWRlZmF1bHQ7XG4kY2FyZXQtdmVydGljYWwtYWxpZ246ICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG4kY2FyZXQtc3BhY2luZzogICAgICAgICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5IC4xNXMgbGluZWFyICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcblxuJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvczogKCkgIWRlZmF1bHQ7XG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiBqb2luKFxuICAoXG4gICAgKDIxIDkpLFxuICAgICgxNiA5KSxcbiAgICAoNCAzKSxcbiAgICAoMSAxKSxcbiAgKSxcbiAgJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvc1xuKTtcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIFwiTGliZXJhdGlvbiBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC44NzUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgICAgICBudWxsICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXNpemU6ICAgICAgICAgICAgICAgNnJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5Mi1zaXplOiAgICAgICAgICAgICAgIDUuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5My1zaXplOiAgICAgICAgICAgICAgIDQuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5NC1zaXplOiAgICAgICAgICAgICAgIDMuNXJlbSAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkyLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkzLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXk0LXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICAgICAgICAgJGhlYWRpbmdzLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kbGVhZC1mb250LXNpemU6ICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGxlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAgICAgICAgICAgICA4MCUgIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtc21hbGwtZm9udC1zaXplOiAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG5cbiRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kaHItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xuXG4kZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGtiZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAtLjFyZW0gMCByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcbiRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4kbGlzdC1pbmxpbmUtcGFkZGluZzogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcblxuJGhyLW1hcmdpbi15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4zcmVtICFkZWZhdWx0O1xuXG4kdGFibGUtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1jb2xvcjogICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiR0YWJsZS10aC1mb250LXdlaWdodDogICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJnOiAgICAgICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWFjY2VudC1iZzogICAgICAgIHJnYmEoJHdoaXRlLCAuMDUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICAgICAgJHRhYmxlLWRhcmstY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ob3Zlci1iZzogICAgICAgICByZ2JhKCR3aGl0ZSwgLjA3NSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICAgICBsaWdodGVuKCR0YWJsZS1kYXJrLWJnLCA3LjUlKSAhZGVmYXVsdDtcblxuJHRhYmxlLXN0cmlwZWQtb3JkZXI6ICAgICAgICAgb2RkICFkZWZhdWx0O1xuXG4kdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJHRhYmxlLWJnLWxldmVsOiAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLWxldmVsOiAgICAgICAgICAtNiAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1mYW1pbHk6ICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAgICAgICByZ2JhKCRjb21wb25lbnQtYWN0aXZlLWJnLCAuMjUpICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgMCAwIDAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAgICAkbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAkbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLXBhZGRpbmcteTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGJ0bi1mb250LWZhbWlseTogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplOiAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodDogICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRidG4td2hpdGUtc3BhY2U6ICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7IC8vIFNldCB0byBgbm93cmFwYCB0byBwcmV2ZW50IHRleHQgd3JhcHBpbmdcblxuJGJ0bi1wYWRkaW5nLXktc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodC1zbTogICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGJ0bi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodC1sZzogICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGJ0bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoJHdoaXRlLCAuMTUpLCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy13aWR0aDogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIC42NSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6ICAgICAgIGluc2V0IDAgM3B4IDVweCByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG5cbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGlucHV0LWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDI1JSkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGlucHV0LXBsYWludGV4dC1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCAkaW5wdXQtcGFkZGluZy15ICogMikgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbSwgJGlucHV0LXBhZGRpbmcteSAvIDIpICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXkgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LXNtICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1zbSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtbGcgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LWxnICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kZm9ybS10ZXh0LW1hcmdpbi10b3A6ICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi15OiAgICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi14OiAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4teDogICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbmxpbmUtaW5wdXQtbWFyZ2luLXg6ICAgICAgLjMxMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1ndXR0ZXI6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1zcGFjZXIteDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWN1cnNvcjogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDUwJSA1MCUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJveC1zaGFkb3c6ICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1sYWJlbC1jb2xvcjogICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6ICByZ2JhKHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSwgLjUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgbnVsbCAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJvcmRlci1jb2xvcjogICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICBudWxsICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNmwyLjk3NCAyLjk5TDggMi4xOTN6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNCcgdmlld0JveD0nMCAwIDQgNCc+PHBhdGggc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBkPSdNMCAyaDQnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJveC1zaGFkb3c6ICAgbnVsbCAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICA1MCUgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplICogMS43NSAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAvIDIgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAgICAgICAgICBzdWJ0cmFjdCgkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUsICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICogNCkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXg6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1mYW1pbHk6ICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplOiAgICAgICAgICAgJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogICAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcbiRjdXN0b20tc2VsZWN0LWZvbnQtd2VpZ2h0OiAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWxpbmUtaGVpZ2h0OiAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgIDhweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJhY2tncm91bmQ6ICAgICAgICAgIGVzY2FwZS1zdmcoJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yKSByaWdodCAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyIC8gJGN1c3RvbS1zZWxlY3QtYmctc2l6ZSBuby1yZXBlYXQgIWRlZmF1bHQ7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXG5cbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodDogYWRkKDFlbSAqIC43NSwgKDIgKiAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXkgKiAuNzUpICsgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogICAgICBjZW50ZXIgcmlnaHQgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6ICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogICAgICAgICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAgICAwIDAgMCAkY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICAgICAgICAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogICAgICAgICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogICAgICAgICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gSUUvRWRnZVxuJGN1c3RvbS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLWhlaWdodDogICAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXJhZGl1czogICAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAgICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG5cbiRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICB0aGVtZS1jb2xvcihcImRhbmdlclwiKSAhZGVmYXVsdDtcblxuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PScwIDAgMTIgMTInPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKSAhZGVmYXVsdDtcbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXG4gICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZFxuICAgICksXG4gICAgXCJpbnZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcbiAgICApLFxuICApLFxuICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuKTtcblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcbiR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuXG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuXG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRuYXZiYXItcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXG4kbmF2LWxpbmstaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcblxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtc2Nyb2xsLW1heC1oZWlnaHQ6ICAgICAgNzV2aCAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbiRkcm9wZG93bi1taW4td2lkdGg6ICAgICAgICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogICAgICBzdWJ0cmFjdCgkZHJvcGRvd24tYm9yZGVyLXJhZGl1cywgJGRyb3Bkb3duLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogICAgICAgICAkbmF2LWRpdmlkZXItbWFyZ2luLXkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICBkYXJrZW4oJGdyYXktOTAwLCA1JSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24taGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAkZHJvcGRvd24tcGFkZGluZy15ICRkcm9wZG93bi1pdGVtLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogICAgICAgICAgICAxLjI1ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMtc206ICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG5cbi8vIEp1bWJvdHJvblxuXG4kanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBDYXJkc1xuXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgc3VidHJhY3QoJGNhcmQtYm9yZGVyLXJhZGl1cywgJGNhcmQtYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xuJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggLyAyICFkZWZhdWx0O1xuJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xuXG4kY2FyZC1jb2x1bW5zLWNvdW50OiAgICAgICAgICAgICAgICAzICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xuXG5cbi8vIFRvb2x0aXBzXG5cbiR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcblxuLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogICAgICR0b29sdGlwLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogICAgICAgJHRvb2x0aXAtb3BhY2l0eSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHBvcG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjc2cHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJHBvcG92ZXItaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgc3VidHJhY3QoJHBvcG92ZXItYm9yZGVyLXJhZGl1cywgJHBvcG92ZXItYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBUb2FzdHNcblxuJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNzVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIDc1JSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNGVtICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcbiRiYWRnZS1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG5cbiRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XG4vLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXG4vLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXG4kYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcblxuXG4vLyBNb2RhbHNcblxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4vLyBNYXJnaW4gYmV0d2VlbiBlbGVtZW50cyBpbiBmb290ZXIsIG11c3QgYmUgbG93ZXIgdGhhbiBvciBlcXVhbCB0byAyICogJG1vZGFsLWlubmVyLXBhZGRpbmdcbiRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogICAgICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kbW9kYWwtY29udGVudC1jb2xvcjogICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KCRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXMsICRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG5cbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgIC41ICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogICAgICAgICAgICAgICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0OyAvLyBLZWVwIHRoaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgIDgwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcblxuJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcbiRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xuJG1vZGFsLXNjYWxlLXRyYW5zZm9ybTogICAgICAgICAgICAgc2NhbGUoMS4wMikgIWRlZmF1bHQ7XG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJGFsZXJ0LWNvbG9yLWxldmVsOiAgICAgICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xuXG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cblxuLy8gRmlndXJlc1xuXG4kZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICA5MCUgIWRlZmF1bHQ7XG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cblxuLy8gQnJlYWRjcnVtYnNcblxuJGJyZWFkY3J1bWItZm9udC1zaXplOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMjBweCAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNUw0LjI1IDRsMi41LTIuNUw1LjI1IDB6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjVMMy43NSA0bC0yLjUgMi41TDIuNzUgOGw0LTQtNC00eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcbiRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXG5cblxuLy8gU3Bpbm5lcnNcblxuJHNwaW5uZXItd2lkdGg6ICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodDogICAgICAgICRzcGlubmVyLXdpZHRoICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgLjI1ZW0gIWRlZmF1bHQ7XG5cbiRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IC4yZW0gIWRlZmF1bHQ7XG5cblxuLy8gQ2xvc2VcblxuJGNsb3NlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGNsb3NlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICAwIDFweCAwICR3aGl0ZSAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgIDg3LjUlICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XG5cbiRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4ka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4ka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgICAgICAgIDM0MHB4ICFkZWZhdWx0O1xuXG5cbi8vIFV0aWxpdGllc1xuXG4kZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCwgaW5saW5lLWZsZXggIWRlZmF1bHQ7XG4kb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4gIWRlZmF1bHQ7XG4kcG9zaXRpb25zOiBzdGF0aWMsIHJlbGF0aXZlLCBhYnNvbHV0ZSwgZml4ZWQsIHN0aWNreSAhZGVmYXVsdDtcbiR1c2VyLXNlbGVjdHM6IGFsbCwgYXV0bywgbm9uZSAhZGVmYXVsdDtcblxuXG4vLyBQcmludGluZ1xuXG4kcHJpbnQtcGFnZS1zaXplOiAgICAgICAgICAgICAgICAgICBhMyAhZGVmYXVsdDtcbiRwcmludC1ib2R5LW1pbi13aWR0aDogICAgICAgICAgICAgIG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikgIWRlZmF1bHQ7XG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBwcm9wZXJ0eS1ibGFja2xpc3QsIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcblxuLy8gU0NTUyBSRlMgbWl4aW5cbi8vXG4vLyBBdXRvbWF0ZWQgZm9udC1yZXNpemluZ1xuLy9cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9yZnNcblxuLy8gQ29uZmlndXJhdGlvblxuXG4vLyBCYXNlIGZvbnQgc2l6ZVxuJHJmcy1iYXNlLWZvbnQtc2l6ZTogMS4yNXJlbSAhZGVmYXVsdDtcbiRyZnMtZm9udC1zaXplLXVuaXQ6IHJlbSAhZGVmYXVsdDtcblxuLy8gQnJlYWtwb2ludCBhdCB3aGVyZSBmb250LXNpemUgc3RhcnRzIGRlY3JlYXNpbmcgaWYgc2NyZWVuIHdpZHRoIGlzIHNtYWxsZXJcbiRyZnMtYnJlYWtwb2ludDogMTIwMHB4ICFkZWZhdWx0O1xuJHJmcy1icmVha3BvaW50LXVuaXQ6IHB4ICFkZWZhdWx0O1xuXG4vLyBSZXNpemUgZm9udC1zaXplIGJhc2VkIG9uIHNjcmVlbiBoZWlnaHQgYW5kIHdpZHRoXG4kcmZzLXR3by1kaW1lbnNpb25hbDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIEZhY3RvciBvZiBkZWNyZWFzZVxuJHJmcy1mYWN0b3I6IDEwICFkZWZhdWx0O1xuXG5AaWYgdHlwZS1vZigkcmZzLWZhY3RvcikgIT0gXCJudW1iZXJcIiBvciAkcmZzLWZhY3RvciA8PSAxIHtcbiAgQGVycm9yIFwiYCN7JHJmcy1mYWN0b3J9YCBpcyBub3QgYSB2YWxpZCAgJHJmcy1mYWN0b3IsIGl0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDEuXCI7XG59XG5cbi8vIEdlbmVyYXRlIGVuYWJsZSBvciBkaXNhYmxlIGNsYXNzZXMuIFBvc3NpYmlsaXRpZXM6IGZhbHNlLCBcImVuYWJsZVwiIG9yIFwiZGlzYWJsZVwiXG4kcmZzLWNsYXNzOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gMSByZW0gPSAkcmZzLXJlbS12YWx1ZSBweFxuJHJmcy1yZW0tdmFsdWU6IDE2ICFkZWZhdWx0O1xuXG4vLyBTYWZhcmkgaWZyYW1lIHJlc2l6ZSBidWc6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL3Jmcy9pc3N1ZXMvMTRcbiRyZnMtc2FmYXJpLWlmcmFtZS1yZXNpemUtYnVnLWZpeDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIERpc2FibGUgUkZTIGJ5IHNldHRpbmcgJGVuYWJsZS1yZXNwb25zaXZlLWZvbnQtc2l6ZXMgdG8gZmFsc2VcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiB0cnVlICFkZWZhdWx0O1xuXG4vLyBDYWNoZSAkcmZzLWJhc2UtZm9udC1zaXplIHVuaXRcbiRyZnMtYmFzZS1mb250LXNpemUtdW5pdDogdW5pdCgkcmZzLWJhc2UtZm9udC1zaXplKTtcblxuLy8gUmVtb3ZlIHB4LXVuaXQgZnJvbSAkcmZzLWJhc2UtZm9udC1zaXplIGZvciBjYWxjdWxhdGlvbnNcbkBpZiAkcmZzLWJhc2UtZm9udC1zaXplLXVuaXQgPT0gXCJweFwiIHtcbiAgJHJmcy1iYXNlLWZvbnQtc2l6ZTogJHJmcy1iYXNlLWZvbnQtc2l6ZSAvICgkcmZzLWJhc2UtZm9udC1zaXplICogMCArIDEpO1xufVxuQGVsc2UgaWYgJHJmcy1iYXNlLWZvbnQtc2l6ZS11bml0ID09IFwicmVtXCIge1xuICAkcmZzLWJhc2UtZm9udC1zaXplOiAkcmZzLWJhc2UtZm9udC1zaXplIC8gKCRyZnMtYmFzZS1mb250LXNpemUgKiAwICsgMSAvICRyZnMtcmVtLXZhbHVlKTtcbn1cblxuLy8gQ2FjaGUgJHJmcy1icmVha3BvaW50IHVuaXQgdG8gcHJldmVudCBtdWx0aXBsZSBjYWxsc1xuJHJmcy1icmVha3BvaW50LXVuaXQtY2FjaGU6IHVuaXQoJHJmcy1icmVha3BvaW50KTtcblxuLy8gUmVtb3ZlIHVuaXQgZnJvbSAkcmZzLWJyZWFrcG9pbnQgZm9yIGNhbGN1bGF0aW9uc1xuQGlmICRyZnMtYnJlYWtwb2ludC11bml0LWNhY2hlID09IFwicHhcIiB7XG4gICRyZnMtYnJlYWtwb2ludDogJHJmcy1icmVha3BvaW50IC8gKCRyZnMtYnJlYWtwb2ludCAqIDAgKyAxKTtcbn1cbkBlbHNlIGlmICRyZnMtYnJlYWtwb2ludC11bml0LWNhY2hlID09IFwicmVtXCIgb3IgJHJmcy1icmVha3BvaW50LXVuaXQtY2FjaGUgPT0gXCJlbVwiIHtcbiAgJHJmcy1icmVha3BvaW50OiAkcmZzLWJyZWFrcG9pbnQgLyAoJHJmcy1icmVha3BvaW50ICogMCArIDEgLyAkcmZzLXJlbS12YWx1ZSk7XG59XG5cbi8vIFJlc3BvbnNpdmUgZm9udC1zaXplIG1peGluXG5AbWl4aW4gcmZzKCRmcywgJGltcG9ydGFudDogZmFsc2UpIHtcbiAgLy8gQ2FjaGUgJGZzIHVuaXRcbiAgJGZzLXVuaXQ6IGlmKHR5cGUtb2YoJGZzKSA9PSBcIm51bWJlclwiLCB1bml0KCRmcyksIGZhbHNlKTtcblxuICAvLyBBZGQgIWltcG9ydGFudCBzdWZmaXggaWYgbmVlZGVkXG4gICRyZnMtc3VmZml4OiBpZigkaW1wb3J0YW50LCBcIiAhaW1wb3J0YW50XCIsIFwiXCIpO1xuXG4gIC8vIElmICRmcyBpc24ndCBhIG51bWJlciAobGlrZSBpbmhlcml0KSBvciAkZnMgaGFzIGEgdW5pdCAobm90IHB4IG9yIHJlbSwgbGlrZSAxLjVlbSkgb3IgJCBpcyAwLCBqdXN0IHByaW50IHRoZSB2YWx1ZVxuICBAaWYgbm90ICRmcy11bml0IG9yICRmcy11bml0ICE9IFwiXCIgYW5kICRmcy11bml0ICE9IFwicHhcIiBhbmQgJGZzLXVuaXQgIT0gXCJyZW1cIiBvciAkZnMgPT0gMCB7XG4gICAgZm9udC1zaXplOiAjeyRmc30jeyRyZnMtc3VmZml4fTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gVmFyaWFibGVzIGZvciBzdG9yaW5nIHN0YXRpYyBhbmQgZmx1aWQgcmVzY2FsaW5nXG4gICAgJHJmcy1zdGF0aWM6IG51bGw7XG4gICAgJHJmcy1mbHVpZDogbnVsbDtcblxuICAgIC8vIFJlbW92ZSBweC11bml0IGZyb20gJGZzIGZvciBjYWxjdWxhdGlvbnNcbiAgICBAaWYgJGZzLXVuaXQgPT0gXCJweFwiIHtcbiAgICAgICRmczogJGZzIC8gKCRmcyAqIDAgKyAxKTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGZzLXVuaXQgPT0gXCJyZW1cIiB7XG4gICAgICAkZnM6ICRmcyAvICgkZnMgKiAwICsgMSAvICRyZnMtcmVtLXZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmb250LXNpemVcbiAgICBAaWYgJHJmcy1mb250LXNpemUtdW5pdCA9PSByZW0ge1xuICAgICAgJHJmcy1zdGF0aWM6ICN7JGZzIC8gJHJmcy1yZW0tdmFsdWV9cmVtI3skcmZzLXN1ZmZpeH07XG4gICAgfVxuICAgIEBlbHNlIGlmICRyZnMtZm9udC1zaXplLXVuaXQgPT0gcHgge1xuICAgICAgJHJmcy1zdGF0aWM6ICN7JGZzfXB4I3skcmZzLXN1ZmZpeH07XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIEBlcnJvciBcImAjeyRyZnMtZm9udC1zaXplLXVuaXR9YCBpcyBub3QgYSB2YWxpZCB1bml0IGZvciAkcmZzLWZvbnQtc2l6ZS11bml0LiBVc2UgYHB4YCBvciBgcmVtYC5cIjtcbiAgICB9XG5cbiAgICAvLyBPbmx5IGFkZCBtZWRpYSBxdWVyeSBpZiBmb250LXNpemUgaXMgYmlnZ2VyIGFzIHRoZSBtaW5pbXVtIGZvbnQtc2l6ZVxuICAgIC8vIElmICRyZnMtZmFjdG9yID09IDEsIG5vIHJlc2NhbGluZyB3aWxsIHRha2UgcGxhY2VcbiAgICBAaWYgJGZzID4gJHJmcy1iYXNlLWZvbnQtc2l6ZSBhbmQgJGVuYWJsZS1yZXNwb25zaXZlLWZvbnQtc2l6ZXMge1xuICAgICAgJG1pbi13aWR0aDogbnVsbDtcbiAgICAgICR2YXJpYWJsZS11bml0OiBudWxsO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgbWluaW11bSBmb250LXNpemUgZm9yIGdpdmVuIGZvbnQtc2l6ZVxuICAgICAgJGZzLW1pbjogJHJmcy1iYXNlLWZvbnQtc2l6ZSArICgkZnMgLSAkcmZzLWJhc2UtZm9udC1zaXplKSAvICRyZnMtZmFjdG9yO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGdpdmVuIGZvbnQtc2l6ZSBhbmQgbWluaW11bSBmb250LXNpemUgZm9yIGdpdmVuIGZvbnQtc2l6ZVxuICAgICAgJGZzLWRpZmY6ICRmcyAtICRmcy1taW47XG5cbiAgICAgIC8vIEJhc2UgZm9udC1zaXplIGZvcm1hdHRpbmdcbiAgICAgIC8vIE5vIG5lZWQgdG8gY2hlY2sgaWYgdGhlIHVuaXQgaXMgdmFsaWQsIGJlY2F1c2Ugd2UgZGlkIHRoYXQgYmVmb3JlXG4gICAgICAkbWluLXdpZHRoOiBpZigkcmZzLWZvbnQtc2l6ZS11bml0ID09IHJlbSwgI3skZnMtbWluIC8gJHJmcy1yZW0tdmFsdWV9cmVtLCAjeyRmcy1taW59cHgpO1xuXG4gICAgICAvLyBJZiB0d28tZGltZW5zaW9uYWwsIHVzZSBzbWFsbGVzdCBvZiBzY3JlZW4gd2lkdGggYW5kIGhlaWdodFxuICAgICAgJHZhcmlhYmxlLXVuaXQ6IGlmKCRyZnMtdHdvLWRpbWVuc2lvbmFsLCB2bWluLCB2dyk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdmFyaWFibGUgd2lkdGggYmV0d2VlbiAwIGFuZCAkcmZzLWJyZWFrcG9pbnRcbiAgICAgICR2YXJpYWJsZS13aWR0aDogI3skZnMtZGlmZiAqIDEwMCAvICRyZnMtYnJlYWtwb2ludH0jeyR2YXJpYWJsZS11bml0fTtcblxuICAgICAgLy8gU2V0IHRoZSBjYWxjdWxhdGVkIGZvbnQtc2l6ZS5cbiAgICAgICRyZnMtZmx1aWQ6IGNhbGMoI3skbWluLXdpZHRofSArICN7JHZhcmlhYmxlLXdpZHRofSkgI3skcmZzLXN1ZmZpeH07XG4gICAgfVxuXG4gICAgLy8gUmVuZGVyaW5nXG4gICAgQGlmICRyZnMtZmx1aWQgPT0gbnVsbCB7XG4gICAgICAvLyBPbmx5IHJlbmRlciBzdGF0aWMgZm9udC1zaXplIGlmIG5vIGZsdWlkIGZvbnQtc2l6ZSBpcyBhdmFpbGFibGVcbiAgICAgIGZvbnQtc2l6ZTogJHJmcy1zdGF0aWM7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICRtcS12YWx1ZTogbnVsbDtcblxuICAgICAgLy8gUkZTIGJyZWFrcG9pbnQgZm9ybWF0dGluZ1xuICAgICAgQGlmICRyZnMtYnJlYWtwb2ludC11bml0ID09IGVtIG9yICRyZnMtYnJlYWtwb2ludC11bml0ID09IHJlbSB7XG4gICAgICAgICRtcS12YWx1ZTogI3skcmZzLWJyZWFrcG9pbnQgLyAkcmZzLXJlbS12YWx1ZX0jeyRyZnMtYnJlYWtwb2ludC11bml0fTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIGlmICRyZnMtYnJlYWtwb2ludC11bml0ID09IHB4IHtcbiAgICAgICAgJG1xLXZhbHVlOiAjeyRyZnMtYnJlYWtwb2ludH1weDtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgQGVycm9yIFwiYCN7JHJmcy1icmVha3BvaW50LXVuaXR9YCBpcyBub3QgYSB2YWxpZCB1bml0IGZvciAkcmZzLWJyZWFrcG9pbnQtdW5pdC4gVXNlIGBweGAsIGBlbWAgb3IgYHJlbWAuXCI7XG4gICAgICB9XG5cbiAgICAgIEBpZiAkcmZzLWNsYXNzID09IFwiZGlzYWJsZVwiIHtcbiAgICAgICAgLy8gQWRkaW5nIGFuIGV4dHJhIGNsYXNzIGluY3JlYXNlcyBzcGVjaWZpY2l0eSxcbiAgICAgICAgLy8gd2hpY2ggcHJldmVudHMgdGhlIG1lZGlhIHF1ZXJ5IHRvIG92ZXJyaWRlIHRoZSBmb250IHNpemVcbiAgICAgICAgJixcbiAgICAgICAgLmRpc2FibGUtcmVzcG9uc2l2ZS1mb250LXNpemUgJixcbiAgICAgICAgJi5kaXNhYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplIHtcbiAgICAgICAgICBmb250LXNpemU6ICRyZnMtc3RhdGljO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJHJmcy1zdGF0aWM7XG4gICAgICB9XG5cbiAgICAgIEBpZiAkcmZzLXR3by1kaW1lbnNpb25hbCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRtcS12YWx1ZX0pLCAobWF4LWhlaWdodDogI3skbXEtdmFsdWV9KSB7XG4gICAgICAgICAgQGlmICRyZnMtY2xhc3MgPT0gXCJlbmFibGVcIiB7XG4gICAgICAgICAgICAuZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplICYsXG4gICAgICAgICAgICAmLmVuYWJsZS1yZXNwb25zaXZlLWZvbnQtc2l6ZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHJmcy1mbHVpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQGVsc2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAkcmZzLWZsdWlkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBpZiAkcmZzLXNhZmFyaS1pZnJhbWUtcmVzaXplLWJ1Zy1maXgge1xuICAgICAgICAgICAgLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGxlbmd0aC16ZXJvLW5vLXVuaXRcbiAgICAgICAgICAgIG1pbi13aWR0aDogMHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogI3skbXEtdmFsdWV9KSB7XG4gICAgICAgICAgQGlmICRyZnMtY2xhc3MgPT0gXCJlbmFibGVcIiB7XG4gICAgICAgICAgICAuZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplICYsXG4gICAgICAgICAgICAmLmVuYWJsZS1yZXNwb25zaXZlLWZvbnQtc2l6ZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHJmcy1mbHVpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQGVsc2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAkcmZzLWZsdWlkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBpZiAkcmZzLXNhZmFyaS1pZnJhbWUtcmVzaXplLWJ1Zy1maXgge1xuICAgICAgICAgICAgLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGxlbmd0aC16ZXJvLW5vLXVuaXRcbiAgICAgICAgICAgIG1pbi13aWR0aDogMHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgZm9udC1zaXplICYgcmVzcG9uc2l2ZS1mb250LXNpemUgbWl4aW4gdXNlcyBSRlMgdG8gcmVzY2FsZSBmb250IHNpemVzXG5AbWl4aW4gZm9udC1zaXplKCRmcywgJGltcG9ydGFudDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcmZzKCRmcywgJGltcG9ydGFudCk7XG59XG5cbkBtaXhpbiByZXNwb25zaXZlLWZvbnQtc2l6ZSgkZnMsICRpbXBvcnRhbnQ6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHJmcygkZnMsICRpbXBvcnRhbnQpO1xufVxuIiwiLy8gSG92ZXIgbWl4aW4gYW5kIGAkZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5YCBhcmUgZGVwcmVjYXRlZC5cbi8vXG4vLyBPcmlnaW5hbGx5IGFkZGVkIGR1cmluZyBvdXIgYWxwaGFzIGFuZCBtYWludGFpbmVkIGR1cmluZyBiZXRhcywgdGhpcyBtaXhpbiB3YXNcbi8vIGRlc2lnbmVkIHRvIHByZXZlbnQgYDpob3ZlcmAgc3RpY2tpbmVzcyBvbiBpT1MtYW4gaXNzdWUgd2hlcmUgaG92ZXIgc3R5bGVzXG4vLyB3b3VsZCBwZXJzaXN0IGFmdGVyIGluaXRpYWwgdG91Y2guXG4vL1xuLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIHdlJ3ZlIGtlcHQgdGhlc2UgbWl4aW5zIGFuZCB1cGRhdGVkIHRoZW0gdG9cbi8vIGFsd2F5cyByZXR1cm4gdGhlaXIgcmVndWxhciBwc2V1ZG8tY2xhc3NlcyBpbnN0ZWFkIG9mIGEgc2hpbW1lZCBtZWRpYSBxdWVyeS5cbi8vXG4vLyBJc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNTE5NVxuXG5AbWl4aW4gaG92ZXIoKSB7XG4gICY6aG92ZXIgeyBAY29udGVudDsgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMoKSB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBwbGFpbi1ob3Zlci1mb2N1cygpIHtcbiAgJixcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGhvdmVyLWZvY3VzLWFjdGl2ZSgpIHtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcblxuLmFsaWduLWJhc2VsaW5lICAgIHsgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH0gLy8gQnJvd3NlciBkZWZhdWx0XG4uYWxpZ24tdG9wICAgICAgICAgeyB2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7IH1cbi5hbGlnbi1taWRkbGUgICAgICB7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDsgfVxuLmFsaWduLWJvdHRvbSAgICAgIHsgdmVydGljYWwtYWxpZ246IGJvdHRvbSAhaW1wb3J0YW50OyB9XG4uYWxpZ24tdGV4dC1ib3R0b20geyB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b20gIWltcG9ydGFudDsgfVxuLmFsaWduLXRleHQtdG9wICAgIHsgdmVydGljYWwtYWxpZ246IHRleHQtdG9wICFpbXBvcnRhbnQ7IH1cbiIsIi8vIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudFxuXG4vLyBDb250ZXh0dWFsIGJhY2tncm91bmRzXG5cbkBtaXhpbiBiZy12YXJpYW50KCRwYXJlbnQsICRjb2xvciwgJGlnbm9yZS13YXJuaW5nOiBmYWxzZSkge1xuICAjeyRwYXJlbnR9IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcbiAgfVxuICBhI3skcGFyZW50fSxcbiAgYnV0dG9uI3skcGFyZW50fSB7XG4gICAgQGluY2x1ZGUgaG92ZXItZm9jdXMoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLCAxMCUpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIEBpbmNsdWRlIGRlcHJlY2F0ZShcIlRoZSBgYmctdmFyaWFudGAgbWl4aW5cIiwgXCJ2NC40LjBcIiwgXCJ2NVwiLCAkaWdub3JlLXdhcm5pbmcpO1xufVxuXG5AbWl4aW4gYmctZ3JhZGllbnQtdmFyaWFudCgkcGFyZW50LCAkY29sb3IsICRpZ25vcmUtd2FybmluZzogZmFsc2UpIHtcbiAgI3skcGFyZW50fSB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIG1peCgkYm9keS1iZywgJGNvbG9yLCAxNSUpLCAkY29sb3IpIHJlcGVhdC14ICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGluY2x1ZGUgZGVwcmVjYXRlKFwiVGhlIGBiZy1ncmFkaWVudC12YXJpYW50YCBtaXhpblwiLCBcInY0LjUuMFwiLCBcInY1XCIsICRpZ25vcmUtd2FybmluZyk7XG59XG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcblxuQGVhY2ggJGNvbG9yLCAkdmFsdWUgaW4gJHRoZW1lLWNvbG9ycyB7XG4gIEBpbmNsdWRlIGJnLXZhcmlhbnQoXCIuYmctI3skY29sb3J9XCIsICR2YWx1ZSwgdHJ1ZSk7XG59XG5cbkBpZiAkZW5hYmxlLWdyYWRpZW50cyB7XG4gIEBlYWNoICRjb2xvciwgJHZhbHVlIGluICR0aGVtZS1jb2xvcnMge1xuICAgIEBpbmNsdWRlIGJnLWdyYWRpZW50LXZhcmlhbnQoXCIuYmctZ3JhZGllbnQtI3skY29sb3J9XCIsICR2YWx1ZSwgdHJ1ZSk7XG4gIH1cbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBwcm9wZXJ0eS1kaXNhbGxvd2VkLWxpc3QsIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudFxuXG4vL1xuLy8gQm9yZGVyXG4vL1xuXG4uYm9yZGVyICAgICAgICAgeyBib3JkZXI6ICRib3JkZXItd2lkdGggc29saWQgJGJvcmRlci1jb2xvciAhaW1wb3J0YW50OyB9XG4uYm9yZGVyLXRvcCAgICAgeyBib3JkZXItdG9wOiAkYm9yZGVyLXdpZHRoIHNvbGlkICRib3JkZXItY29sb3IgIWltcG9ydGFudDsgfVxuLmJvcmRlci1yaWdodCAgIHsgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyLXdpZHRoIHNvbGlkICRib3JkZXItY29sb3IgIWltcG9ydGFudDsgfVxuLmJvcmRlci1ib3R0b20gIHsgYm9yZGVyLWJvdHRvbTogJGJvcmRlci13aWR0aCBzb2xpZCAkYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7IH1cbi5ib3JkZXItbGVmdCAgICB7IGJvcmRlci1sZWZ0OiAkYm9yZGVyLXdpZHRoIHNvbGlkICRib3JkZXItY29sb3IgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLTAgICAgICAgIHsgYm9yZGVyOiAwICFpbXBvcnRhbnQ7IH1cbi5ib3JkZXItdG9wLTAgICAgeyBib3JkZXItdG9wOiAwICFpbXBvcnRhbnQ7IH1cbi5ib3JkZXItcmlnaHQtMCAgeyBib3JkZXItcmlnaHQ6IDAgIWltcG9ydGFudDsgfVxuLmJvcmRlci1ib3R0b20tMCB7IGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDsgfVxuLmJvcmRlci1sZWZ0LTAgICB7IGJvcmRlci1sZWZ0OiAwICFpbXBvcnRhbnQ7IH1cblxuQGVhY2ggJGNvbG9yLCAkdmFsdWUgaW4gJHRoZW1lLWNvbG9ycyB7XG4gIC5ib3JkZXItI3skY29sb3J9IHtcbiAgICBib3JkZXItY29sb3I6ICR2YWx1ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5ib3JkZXItd2hpdGUge1xuICBib3JkZXItY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4vL1xuLy8gQm9yZGVyLXJhZGl1c1xuLy9cblxuLnJvdW5kZWQtc20ge1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbSAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZGVkLXRvcCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZC1yaWdodCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWQtYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZGVkLWxlZnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZC1sZyB7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxnICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZGVkLWNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZC1waWxsIHtcbiAgYm9yZGVyLXJhZGl1czogJHJvdW5kZWQtcGlsbCAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZC0wIHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuIiwiQG1peGluIGNsZWFyZml4KCkge1xuICAmOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgY29udGVudDogXCJcIjtcbiAgfVxufVxuIiwiLy8gc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50XG5cbi8vXG4vLyBVdGlsaXRpZXMgZm9yIGNvbW1vbiBgZGlzcGxheWAgdmFsdWVzXG4vL1xuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG5cbiAgICBAZWFjaCAkdmFsdWUgaW4gJGRpc3BsYXlzIHtcbiAgICAgIC5kI3skaW5maXh9LSN7JHZhbHVlfSB7IGRpc3BsYXk6ICR2YWx1ZSAhaW1wb3J0YW50OyB9XG4gICAgfVxuICB9XG59XG5cblxuLy9cbi8vIFV0aWxpdGllcyBmb3IgdG9nZ2xpbmcgYGRpc3BsYXlgIGluIHByaW50XG4vL1xuXG5AbWVkaWEgcHJpbnQge1xuICBAZWFjaCAkdmFsdWUgaW4gJGRpc3BsYXlzIHtcbiAgICAuZC1wcmludC0jeyR2YWx1ZX0geyBkaXNwbGF5OiAkdmFsdWUgIWltcG9ydGFudDsgfVxuICB9XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENyZWRpdDogTmljb2xhcyBHYWxsYWdoZXIgYW5kIFNVSVQgQ1NTLlxuXG4uZW1iZWQtcmVzcG9uc2l2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogXCJcIjtcbiAgfVxuXG4gIC5lbWJlZC1yZXNwb25zaXZlLWl0ZW0sXG4gIGlmcmFtZSxcbiAgZW1iZWQsXG4gIG9iamVjdCxcbiAgdmlkZW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG5AZWFjaCAkZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW8gaW4gJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvcyB7XG4gICRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpby14OiBudGgoJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvLCAxKTtcbiAgJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvLXk6IG50aCgkZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW8sIDIpO1xuXG4gIC5lbWJlZC1yZXNwb25zaXZlLSN7JGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvLXh9YnkjeyRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpby15fSB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIHBhZGRpbmctdG9wOiBwZXJjZW50YWdlKCRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpby15IC8gJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvLXgpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50XG5cbi8vIEZsZXggdmFyaWF0aW9uXG4vL1xuLy8gQ3VzdG9tIHN0eWxlcyBmb3IgYWRkaXRpb25hbCBmbGV4IGFsaWdubWVudCBvcHRpb25zLlxuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG5cbiAgICAuZmxleCN7JGluZml4fS1yb3cgICAgICAgICAgICB7IGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LWNvbHVtbiAgICAgICAgIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50OyB9XG4gICAgLmZsZXgjeyRpbmZpeH0tcm93LXJldmVyc2UgICAgeyBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LWNvbHVtbi1yZXZlcnNlIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cblxuICAgIC5mbGV4I3skaW5maXh9LXdyYXAgICAgICAgICB7IGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50OyB9XG4gICAgLmZsZXgjeyRpbmZpeH0tbm93cmFwICAgICAgIHsgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LXdyYXAtcmV2ZXJzZSB7IGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgICAuZmxleCN7JGluZml4fS1maWxsICAgICAgICAgeyBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50OyB9XG4gICAgLmZsZXgjeyRpbmZpeH0tZ3Jvdy0wICAgICAgIHsgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7IH1cbiAgICAuZmxleCN7JGluZml4fS1ncm93LTEgICAgICAgeyBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LXNocmluay0wICAgICB7IGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7IH1cbiAgICAuZmxleCN7JGluZml4fS1zaHJpbmstMSAgICAgeyBmbGV4LXNocmluazogMSAhaW1wb3J0YW50OyB9XG5cbiAgICAuanVzdGlmeS1jb250ZW50I3skaW5maXh9LXN0YXJ0ICAgeyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAgIC5qdXN0aWZ5LWNvbnRlbnQjeyRpbmZpeH0tZW5kICAgICB7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAgIC5qdXN0aWZ5LWNvbnRlbnQjeyRpbmZpeH0tY2VudGVyICB7IGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgICAuanVzdGlmeS1jb250ZW50I3skaW5maXh9LWJldHdlZW4geyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuICAgIC5qdXN0aWZ5LWNvbnRlbnQjeyRpbmZpeH0tYXJvdW5kICB7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7IH1cblxuICAgIC5hbGlnbi1pdGVtcyN7JGluZml4fS1zdGFydCAgICB7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24taXRlbXMjeyRpbmZpeH0tZW5kICAgICAgeyBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1pdGVtcyN7JGluZml4fS1jZW50ZXIgICB7IGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1pdGVtcyN7JGluZml4fS1iYXNlbGluZSB7IGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWl0ZW1zI3skaW5maXh9LXN0cmV0Y2ggIHsgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuXG4gICAgLmFsaWduLWNvbnRlbnQjeyRpbmZpeH0tc3RhcnQgICB7IGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1jb250ZW50I3skaW5maXh9LWVuZCAgICAgeyBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWNvbnRlbnQjeyRpbmZpeH0tY2VudGVyICB7IGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWNvbnRlbnQjeyRpbmZpeH0tYmV0d2VlbiB7IGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1jb250ZW50I3skaW5maXh9LWFyb3VuZCAgeyBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1jb250ZW50I3skaW5maXh9LXN0cmV0Y2ggeyBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cblxuICAgIC5hbGlnbi1zZWxmI3skaW5maXh9LWF1dG8gICAgIHsgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLXNlbGYjeyRpbmZpeH0tc3RhcnQgICAgeyBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tc2VsZiN7JGluZml4fS1lbmQgICAgICB7IGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tc2VsZiN7JGluZml4fS1jZW50ZXIgICB7IGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLXNlbGYjeyRpbmZpeH0tYmFzZWxpbmUgeyBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLXNlbGYjeyRpbmZpeH0tc3RyZXRjaCAgeyBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cbiAgfVxufVxuIiwiLy8gc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50XG5cbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAkaW5maXg6IGJyZWFrcG9pbnQtaW5maXgoJGJyZWFrcG9pbnQsICRncmlkLWJyZWFrcG9pbnRzKTtcblxuICAgIC5mbG9hdCN7JGluZml4fS1sZWZ0ICB7IGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7IH1cbiAgICAuZmxvYXQjeyRpbmZpeH0tcmlnaHQgeyBmbG9hdDogcmlnaHQgIWltcG9ydGFudDsgfVxuICAgIC5mbG9hdCN7JGluZml4fS1ub25lICB7IGZsb2F0OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgfVxufVxuIiwiLy8gc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50XG5cbkBlYWNoICR2YWx1ZSBpbiAkdXNlci1zZWxlY3RzIHtcbiAgLnVzZXItc2VsZWN0LSN7JHZhbHVlfSB7IHVzZXItc2VsZWN0OiAkdmFsdWUgIWltcG9ydGFudDsgfVxufVxuIiwiLy8gc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50XG5cbkBlYWNoICR2YWx1ZSBpbiAkb3ZlcmZsb3dzIHtcbiAgLm92ZXJmbG93LSN7JHZhbHVlfSB7IG92ZXJmbG93OiAkdmFsdWUgIWltcG9ydGFudDsgfVxufVxuIiwiLy8gc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50XG5cbi8vIENvbW1vbiB2YWx1ZXNcbkBlYWNoICRwb3NpdGlvbiBpbiAkcG9zaXRpb25zIHtcbiAgLnBvc2l0aW9uLSN7JHBvc2l0aW9ufSB7IHBvc2l0aW9uOiAkcG9zaXRpb24gIWltcG9ydGFudDsgfVxufVxuXG4vLyBTaG9ydGhhbmRcblxuLmZpeGVkLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1maXhlZDtcbn1cblxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1maXhlZDtcbn1cblxuLnN0aWNreS10b3Age1xuICBAc3VwcG9ydHMgKHBvc2l0aW9uOiBzdGlja3kpIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAkemluZGV4LXN0aWNreTtcbiAgfVxufVxuIiwiLy9cbi8vIFNjcmVlbnJlYWRlcnNcbi8vXG5cbi5zci1vbmx5IHtcbiAgQGluY2x1ZGUgc3Itb25seSgpO1xufVxuXG4uc3Itb25seS1mb2N1c2FibGUge1xuICBAaW5jbHVkZSBzci1vbmx5LWZvY3VzYWJsZSgpO1xufVxuIiwiLy8gT25seSBkaXNwbGF5IGNvbnRlbnQgdG8gc2NyZWVuIHJlYWRlcnNcbi8vXG4vLyBTZWU6IGh0dHBzOi8vd3d3LmExMXlwcm9qZWN0LmNvbS9wb3N0cy8yMDEzLTAxLTExLWhvdy10by1oaWRlLWNvbnRlbnQvXG4vLyBTZWU6IGh0dHBzOi8vaHVnb2dpcmF1ZGVsLmNvbS8yMDE2LzEwLzEzL2Nzcy1oaWRlLWFuZC1zZWVrL1xuXG5AbWl4aW4gc3Itb25seSgpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAtMXB4OyAvLyBGaXggZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjU2ODZcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiAwO1xufVxuXG4vLyBVc2UgaW4gY29uanVuY3Rpb24gd2l0aCAuc3Itb25seSB0byBvbmx5IGRpc3BsYXkgY29udGVudCB3aGVuIGl0J3MgZm9jdXNlZC5cbi8vXG4vLyBVc2VmdWwgZm9yIFwiU2tpcCB0byBtYWluIGNvbnRlbnRcIiBsaW5rczsgc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDEzL05PVEUtV0NBRzIwLVRFQ0hTLTIwMTMwOTA1L0cxXG4vL1xuLy8gQ3JlZGl0OiBIVE1MNSBCb2lsZXJwbGF0ZVxuXG5AbWl4aW4gc3Itb25seS1mb2N1c2FibGUoKSB7XG4gICY6YWN0aXZlLFxuICAmOmZvY3VzIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBjbGlwOiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIH1cbn1cbiIsIi8vIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudFxuXG4uc2hhZG93LXNtIHsgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctc20gIWltcG9ydGFudDsgfVxuLnNoYWRvdyB7IGJveC1zaGFkb3c6ICRib3gtc2hhZG93ICFpbXBvcnRhbnQ7IH1cbi5zaGFkb3ctbGcgeyBib3gtc2hhZG93OiAkYm94LXNoYWRvdy1sZyAhaW1wb3J0YW50OyB9XG4uc2hhZG93LW5vbmUgeyBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7IH1cbiIsIi8vIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudFxuXG4vLyBXaWR0aCBhbmQgaGVpZ2h0XG5cbkBlYWNoICRwcm9wLCAkYWJicmV2IGluICh3aWR0aDogdywgaGVpZ2h0OiBoKSB7XG4gIEBlYWNoICRzaXplLCAkbGVuZ3RoIGluICRzaXplcyB7XG4gICAgLiN7JGFiYnJldn0tI3skc2l6ZX0geyAjeyRwcm9wfTogJGxlbmd0aCAhaW1wb3J0YW50OyB9XG4gIH1cbn1cblxuLm13LTEwMCB7IG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9XG4ubWgtMTAwIHsgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50OyB9XG5cbi8vIFZpZXdwb3J0IGFkZGl0aW9uYWwgaGVscGVyc1xuXG4ubWluLXZ3LTEwMCB7IG1pbi13aWR0aDogMTAwdncgIWltcG9ydGFudDsgfVxuLm1pbi12aC0xMDAgeyBtaW4taGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50OyB9XG5cbi52dy0xMDAgeyB3aWR0aDogMTAwdncgIWltcG9ydGFudDsgfVxuLnZoLTEwMCB7IGhlaWdodDogMTAwdmggIWltcG9ydGFudDsgfVxuIiwiLy8gc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50XG5cbi8vIE1hcmdpbiBhbmQgUGFkZGluZ1xuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG5cbiAgICBAZWFjaCAkcHJvcCwgJGFiYnJldiBpbiAobWFyZ2luOiBtLCBwYWRkaW5nOiBwKSB7XG4gICAgICBAZWFjaCAkc2l6ZSwgJGxlbmd0aCBpbiAkc3BhY2VycyB7XG4gICAgICAgIC4jeyRhYmJyZXZ9I3skaW5maXh9LSN7JHNpemV9IHsgI3skcHJvcH06ICRsZW5ndGggIWltcG9ydGFudDsgfVxuICAgICAgICAuI3skYWJicmV2fXQjeyRpbmZpeH0tI3skc2l6ZX0sXG4gICAgICAgIC4jeyRhYmJyZXZ9eSN7JGluZml4fS0jeyRzaXplfSB7XG4gICAgICAgICAgI3skcHJvcH0tdG9wOiAkbGVuZ3RoICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLiN7JGFiYnJldn1yI3skaW5maXh9LSN7JHNpemV9LFxuICAgICAgICAuI3skYWJicmV2fXgjeyRpbmZpeH0tI3skc2l6ZX0ge1xuICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiAkbGVuZ3RoICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLiN7JGFiYnJldn1iI3skaW5maXh9LSN7JHNpemV9LFxuICAgICAgICAuI3skYWJicmV2fXkjeyRpbmZpeH0tI3skc2l6ZX0ge1xuICAgICAgICAgICN7JHByb3B9LWJvdHRvbTogJGxlbmd0aCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC4jeyRhYmJyZXZ9bCN7JGluZml4fS0jeyRzaXplfSxcbiAgICAgICAgLiN7JGFiYnJldn14I3skaW5maXh9LSN7JHNpemV9IHtcbiAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiAkbGVuZ3RoICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOZWdhdGl2ZSBtYXJnaW5zIChlLmcuLCB3aGVyZSBgLm1iLW4xYCBpcyBuZWdhdGl2ZSB2ZXJzaW9uIG9mIGAubWItMWApXG4gICAgQGVhY2ggJHNpemUsICRsZW5ndGggaW4gJHNwYWNlcnMge1xuICAgICAgQGlmICRzaXplICE9IDAge1xuICAgICAgICAubSN7JGluZml4fS1uI3skc2l6ZX0geyBtYXJnaW46IC0kbGVuZ3RoICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgLm10I3skaW5maXh9LW4jeyRzaXplfSxcbiAgICAgICAgLm15I3skaW5maXh9LW4jeyRzaXplfSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLSRsZW5ndGggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubXIjeyRpbmZpeH0tbiN7JHNpemV9LFxuICAgICAgICAubXgjeyRpbmZpeH0tbiN7JHNpemV9IHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0kbGVuZ3RoICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLm1iI3skaW5maXh9LW4jeyRzaXplfSxcbiAgICAgICAgLm15I3skaW5maXh9LW4jeyRzaXplfSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLSRsZW5ndGggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubWwjeyRpbmZpeH0tbiN7JHNpemV9LFxuICAgICAgICAubXgjeyRpbmZpeH0tbiN7JHNpemV9IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLSRsZW5ndGggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNvbWUgc3BlY2lhbCBtYXJnaW4gdXRpbHNcbiAgICAubSN7JGluZml4fS1hdXRvIHsgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgICAubXQjeyRpbmZpeH0tYXV0byxcbiAgICAubXkjeyRpbmZpeH0tYXV0byB7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tciN7JGluZml4fS1hdXRvLFxuICAgIC5teCN7JGluZml4fS1hdXRvIHtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubWIjeyRpbmZpeH0tYXV0byxcbiAgICAubXkjeyRpbmZpeH0tYXV0byB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tbCN7JGluZml4fS1hdXRvLFxuICAgIC5teCN7JGluZml4fS1hdXRvIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gU3RyZXRjaGVkIGxpbmtcbi8vXG5cbi5zdHJldGNoZWQtbGluayB7XG4gICY6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgLy8gSnVzdCBpbiBjYXNlIGBwb2ludGVyLWV2ZW50czogbm9uZWAgaXMgc2V0IG9uIGEgcGFyZW50XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgY29udGVudDogXCJcIjtcbiAgICAvLyBJRTEwIGJ1Z2ZpeCwgc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2OTQ3OTY3L2llMTAtaG92ZXItcHNldWRvLWNsYXNzLWRvZXNudC13b3JrLXdpdGhvdXQtYmFja2dyb3VuZC1jb2xvclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIH1cbn1cbiIsIi8vIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudFxuXG4vL1xuLy8gVGV4dFxuLy9cblxuLnRleHQtbW9ub3NwYWNlIHsgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1tb25vc3BhY2UgIWltcG9ydGFudDsgfVxuXG4vLyBBbGlnbm1lbnRcblxuLnRleHQtanVzdGlmeSAgeyB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7IH1cbi50ZXh0LXdyYXAgICAgIHsgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50OyB9XG4udGV4dC1ub3dyYXAgICB7IHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDsgfVxuLnRleHQtdHJ1bmNhdGUgeyBAaW5jbHVkZSB0ZXh0LXRydW5jYXRlKCk7IH1cblxuLy8gUmVzcG9uc2l2ZSBhbGlnbm1lbnRcblxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJGdyaWQtYnJlYWtwb2ludHMpO1xuXG4gICAgLnRleHQjeyRpbmZpeH0tbGVmdCAgIHsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50OyB9XG4gICAgLnRleHQjeyRpbmZpeH0tcmlnaHQgIHsgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDsgfVxuICAgIC50ZXh0I3skaW5maXh9LWNlbnRlciB7IHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIH1cbn1cblxuLy8gVHJhbnNmb3JtYXRpb25cblxuLnRleHQtbG93ZXJjYXNlICB7IHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDsgfVxuLnRleHQtdXBwZXJjYXNlICB7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDsgfVxuLnRleHQtY2FwaXRhbGl6ZSB7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7IH1cblxuLy8gV2VpZ2h0IGFuZCBpdGFsaWNzXG5cbi5mb250LXdlaWdodC1saWdodCAgIHsgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1saWdodCAhaW1wb3J0YW50OyB9XG4uZm9udC13ZWlnaHQtbGlnaHRlciB7IGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbGlnaHRlciAhaW1wb3J0YW50OyB9XG4uZm9udC13ZWlnaHQtbm9ybWFsICB7IGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFpbXBvcnRhbnQ7IH1cbi5mb250LXdlaWdodC1ib2xkICAgIHsgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkICFpbXBvcnRhbnQ7IH1cbi5mb250LXdlaWdodC1ib2xkZXIgIHsgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkZXIgIWltcG9ydGFudDsgfVxuLmZvbnQtaXRhbGljICAgICAgICAgeyBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDsgfVxuXG4vLyBDb250ZXh0dWFsIGNvbG9yc1xuXG4udGV4dC13aGl0ZSB7IGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDsgfVxuXG5AZWFjaCAkY29sb3IsICR2YWx1ZSBpbiAkdGhlbWUtY29sb3JzIHtcbiAgQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KFwiLnRleHQtI3skY29sb3J9XCIsICR2YWx1ZSwgdHJ1ZSk7XG59XG5cbi50ZXh0LWJvZHkgeyBjb2xvcjogJGJvZHktY29sb3IgIWltcG9ydGFudDsgfVxuLnRleHQtbXV0ZWQgeyBjb2xvcjogJHRleHQtbXV0ZWQgIWltcG9ydGFudDsgfVxuXG4udGV4dC1ibGFjay01MCB7IGNvbG9yOiByZ2JhKCRibGFjaywgLjUpICFpbXBvcnRhbnQ7IH1cbi50ZXh0LXdoaXRlLTUwIHsgY29sb3I6IHJnYmEoJHdoaXRlLCAuNSkgIWltcG9ydGFudDsgfVxuXG4vLyBNaXNjXG5cbi50ZXh0LWhpZGUge1xuICBAaW5jbHVkZSB0ZXh0LWhpZGUoJGlnbm9yZS13YXJuaW5nOiB0cnVlKTtcbn1cblxuLnRleHQtZGVjb3JhdGlvbi1ub25lIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtYnJlYWsge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkICFpbXBvcnRhbnQ7IC8vIERlcHJlY2F0ZWQsIGJ1dCBhdm9pZHMgaXNzdWVzIHdpdGggZmxleCBjb250YWluZXJzXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50OyAvLyBVc2VkIGluc3RlYWQgb2YgYG92ZXJmbG93LXdyYXBgIGZvciBJRSAmIEVkZ2UgTGVnYWN5XG59XG5cbi8vIFJlc2V0XG5cbi50ZXh0LXJlc2V0IHsgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDsgfVxuIiwiLy8gVGV4dCB0cnVuY2F0ZVxuLy8gUmVxdWlyZXMgaW5saW5lLWJsb2NrIG9yIGJsb2NrIGZvciBwcm9wZXIgc3R5bGluZ1xuXG5AbWl4aW4gdGV4dC10cnVuY2F0ZSgpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcblxuLy8gVHlwb2dyYXBoeVxuXG5AbWl4aW4gdGV4dC1lbXBoYXNpcy12YXJpYW50KCRwYXJlbnQsICRjb2xvciwgJGlnbm9yZS13YXJuaW5nOiBmYWxzZSkge1xuICAjeyRwYXJlbnR9IHtcbiAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGlmICRlbXBoYXNpemVkLWxpbmstaG92ZXItZGFya2VuLXBlcmNlbnRhZ2UgIT0gMCB7XG4gICAgYSN7JHBhcmVudH0ge1xuICAgICAgQGluY2x1ZGUgaG92ZXItZm9jdXMoKSB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yLCAkZW1waGFzaXplZC1saW5rLWhvdmVyLWRhcmtlbi1wZXJjZW50YWdlKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAaW5jbHVkZSBkZXByZWNhdGUoXCJgdGV4dC1lbXBoYXNpcy12YXJpYW50KClgXCIsIFwidjQuNC4wXCIsIFwidjVcIiwgJGlnbm9yZS13YXJuaW5nKTtcbn1cbiIsIi8vIENTUyBpbWFnZSByZXBsYWNlbWVudFxuQG1peGluIHRleHQtaGlkZSgkaWdub3JlLXdhcm5pbmc6IGZhbHNlKSB7XG4gIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBmb250LWZhbWlseS1uby1taXNzaW5nLWdlbmVyaWMtZmFtaWx5LWtleXdvcmRcbiAgZm9udDogMC8wIGE7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG5cbiAgQGluY2x1ZGUgZGVwcmVjYXRlKFwiYHRleHQtaGlkZSgpYFwiLCBcInY0LjEuMFwiLCBcInY1XCIsICRpZ25vcmUtd2FybmluZyk7XG59XG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcblxuLy9cbi8vIFZpc2liaWxpdHkgdXRpbGl0aWVzXG4vL1xuXG4udmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbn1cblxuLmludmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuIiwiLyohXG4gKiBCb290c3RyYXAgR3JpZCB2NC42LjAgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDIxIFRoZSBCb290c3RyYXAgQXV0aG9yc1xuICogQ29weXJpZ2h0IDIwMTEtMjAyMSBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqL1xuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbkBpbXBvcnQgXCJmdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQGltcG9ydCBcIm1peGlucy9kZXByZWNhdGVcIjtcbkBpbXBvcnQgXCJtaXhpbnMvYnJlYWtwb2ludHNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvZ3JpZC1mcmFtZXdvcmtcIjtcbkBpbXBvcnQgXCJtaXhpbnMvZ3JpZFwiO1xuXG5AaW1wb3J0IFwiZ3JpZFwiO1xuQGltcG9ydCBcInV0aWxpdGllcy9kaXNwbGF5XCI7XG5AaW1wb3J0IFwidXRpbGl0aWVzL2ZsZXhcIjtcbkBpbXBvcnQgXCJ1dGlsaXRpZXMvc3BhY2luZ1wiO1xuIiwiLy8gQ29udGFpbmVyIHdpZHRoc1xuLy9cbi8vIFNldCB0aGUgY29udGFpbmVyIHdpZHRoLCBhbmQgb3ZlcnJpZGUgaXQgZm9yIGZpeGVkIG5hdmJhcnMgaW4gbWVkaWEgcXVlcmllcy5cblxuQGlmICRlbmFibGUtZ3JpZC1jbGFzc2VzIHtcbiAgLy8gU2luZ2xlIGNvbnRhaW5lciBjbGFzcyB3aXRoIGJyZWFrcG9pbnQgbWF4LXdpZHRoc1xuICAuY29udGFpbmVyLFxuICAvLyAxMDAlIHdpZGUgY29udGFpbmVyIGF0IGFsbCBicmVha3BvaW50c1xuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBAaW5jbHVkZSBtYWtlLWNvbnRhaW5lcigpO1xuICB9XG5cbiAgLy8gUmVzcG9uc2l2ZSBjb250YWluZXJzIHRoYXQgYXJlIDEwMCUgd2lkZSB1bnRpbCBhIGJyZWFrcG9pbnRcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICRjb250YWluZXItbWF4LXdpZHRoIGluICRjb250YWluZXItbWF4LXdpZHRocyB7XG4gICAgLmNvbnRhaW5lci0jeyRicmVha3BvaW50fSB7XG4gICAgICBAZXh0ZW5kIC5jb250YWluZXItZmx1aWQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgICAgICVyZXNwb25zaXZlLWNvbnRhaW5lci0jeyRicmVha3BvaW50fSB7XG4gICAgICAgIG1heC13aWR0aDogJGNvbnRhaW5lci1tYXgtd2lkdGg7XG4gICAgICB9XG5cbiAgICAgIC8vIEV4dGVuZCBlYWNoIGJyZWFrcG9pbnQgd2hpY2ggaXMgc21hbGxlciBvciBlcXVhbCB0byB0aGUgY3VycmVudCBicmVha3BvaW50XG4gICAgICAkZXh0ZW5kLWJyZWFrcG9pbnQ6IHRydWU7XG5cbiAgICAgIEBlYWNoICRuYW1lLCAkd2lkdGggaW4gJGdyaWQtYnJlYWtwb2ludHMge1xuICAgICAgICBAaWYgKCRleHRlbmQtYnJlYWtwb2ludCkge1xuICAgICAgICAgIC5jb250YWluZXIje2JyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRncmlkLWJyZWFrcG9pbnRzKX0ge1xuICAgICAgICAgICAgQGV4dGVuZCAlcmVzcG9uc2l2ZS1jb250YWluZXItI3skYnJlYWtwb2ludH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT25jZSB0aGUgY3VycmVudCBicmVha3BvaW50IGlzIHJlYWNoZWQsIHN0b3AgZXh0ZW5kaW5nXG4gICAgICAgICAgQGlmICgkYnJlYWtwb2ludCA9PSAkbmFtZSkge1xuICAgICAgICAgICAgJGV4dGVuZC1icmVha3BvaW50OiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vLyBSb3dcbi8vXG4vLyBSb3dzIGNvbnRhaW4geW91ciBjb2x1bW5zLlxuXG5AaWYgJGVuYWJsZS1ncmlkLWNsYXNzZXMge1xuICAucm93IHtcbiAgICBAaW5jbHVkZSBtYWtlLXJvdygpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSBuZWdhdGl2ZSBtYXJnaW4gZnJvbSBkZWZhdWx0IC5yb3csIHRoZW4gdGhlIGhvcml6b250YWwgcGFkZGluZ1xuICAvLyBmcm9tIGFsbCBpbW1lZGlhdGUgY2hpbGRyZW4gY29sdW1ucyAodG8gcHJldmVudCBydW5hd2F5IHN0eWxlIGluaGVyaXRhbmNlKS5cbiAgLm5vLWd1dHRlcnMge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogMDtcblxuICAgID4gLmNvbCxcbiAgICA+IFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuICB9XG59XG5cbi8vIENvbHVtbnNcbi8vXG4vLyBDb21tb24gc3R5bGVzIGZvciBzbWFsbCBhbmQgbGFyZ2UgZ3JpZCBjb2x1bW5zXG5cbkBpZiAkZW5hYmxlLWdyaWQtY2xhc3NlcyB7XG4gIEBpbmNsdWRlIG1ha2UtZ3JpZC1jb2x1bW5zKCk7XG59XG4iLCIvLy8gR3JpZCBzeXN0ZW1cbi8vXG4vLyBHZW5lcmF0ZSBzZW1hbnRpYyBncmlkIGNvbHVtbnMgd2l0aCB0aGVzZSBtaXhpbnMuXG5cbkBtaXhpbiBtYWtlLWNvbnRhaW5lcigkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6ICRndXR0ZXIgLyAyO1xuICBwYWRkaW5nLWxlZnQ6ICRndXR0ZXIgLyAyO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5AbWl4aW4gbWFrZS1yb3coJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtJGd1dHRlciAvIDI7XG4gIG1hcmdpbi1sZWZ0OiAtJGd1dHRlciAvIDI7XG59XG5cbi8vIEZvciBlYWNoIGJyZWFrcG9pbnQsIGRlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgY29udGFpbmVyIGluIGEgbWVkaWEgcXVlcnlcbkBtaXhpbiBtYWtlLWNvbnRhaW5lci1tYXgtd2lkdGhzKCRtYXgtd2lkdGhzOiAkY29udGFpbmVyLW1heC13aWR0aHMsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICRjb250YWluZXItbWF4LXdpZHRoIGluICRtYXgtd2lkdGhzIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIG1heC13aWR0aDogJGNvbnRhaW5lci1tYXgtd2lkdGg7XG4gICAgfVxuICB9XG4gIEBpbmNsdWRlIGRlcHJlY2F0ZShcIlRoZSBgbWFrZS1jb250YWluZXItbWF4LXdpZHRoc2AgbWl4aW5cIiwgXCJ2NC41LjJcIiwgXCJ2NVwiKTtcbn1cblxuQG1peGluIG1ha2UtY29sLXJlYWR5KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIFByZXZlbnQgY29sdW1ucyBmcm9tIGJlY29taW5nIHRvbyBuYXJyb3cgd2hlbiBhdCBzbWFsbGVyIGdyaWQgdGllcnMgYnlcbiAgLy8gYWx3YXlzIHNldHRpbmcgYHdpZHRoOiAxMDAlO2AuIFRoaXMgd29ya3MgYmVjYXVzZSB3ZSB1c2UgYGZsZXhgIHZhbHVlc1xuICAvLyBsYXRlciBvbiB0byBvdmVycmlkZSB0aGlzIGluaXRpYWwgd2lkdGguXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAkZ3V0dGVyIC8gMjtcbiAgcGFkZGluZy1sZWZ0OiAkZ3V0dGVyIC8gMjtcbn1cblxuQG1peGluIG1ha2UtY29sKCRzaXplLCAkY29sdW1uczogJGdyaWQtY29sdW1ucykge1xuICBmbGV4OiAwIDAgcGVyY2VudGFnZSgkc2l6ZSAvICRjb2x1bW5zKTtcbiAgLy8gQWRkIGEgYG1heC13aWR0aGAgdG8gZW5zdXJlIGNvbnRlbnQgd2l0aGluIGVhY2ggY29sdW1uIGRvZXMgbm90IGJsb3cgb3V0XG4gIC8vIHRoZSB3aWR0aCBvZiB0aGUgY29sdW1uLiBBcHBsaWVzIHRvIElFMTArIGFuZCBGaXJlZm94LiBDaHJvbWUgYW5kIFNhZmFyaVxuICAvLyBkbyBub3QgYXBwZWFyIHRvIHJlcXVpcmUgdGhpcy5cbiAgbWF4LXdpZHRoOiBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtYXV0bygpIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7IC8vIFJlc2V0IGVhcmxpZXIgZ3JpZCB0aWVyc1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtb2Zmc2V0KCRzaXplLCAkY29sdW1uczogJGdyaWQtY29sdW1ucykge1xuICAkbnVtOiAkc2l6ZSAvICRjb2x1bW5zO1xuICBtYXJnaW4tbGVmdDogaWYoJG51bSA9PSAwLCAwLCBwZXJjZW50YWdlKCRudW0pKTtcbn1cblxuLy8gUm93IGNvbHVtbnNcbi8vXG4vLyBTcGVjaWZ5IG9uIGEgcGFyZW50IGVsZW1lbnQoZS5nLiwgLnJvdykgdG8gZm9yY2UgaW1tZWRpYXRlIGNoaWxkcmVuIGludG8gTk5cbi8vIG51bWJlcm9mIGNvbHVtbnMuIFN1cHBvcnRzIHdyYXBwaW5nIHRvIG5ldyBsaW5lcywgYnV0IGRvZXMgbm90IGRvIGEgTWFzb25yeVxuLy8gc3R5bGUgZ3JpZC5cbkBtaXhpbiByb3ctY29scygkY291bnQpIHtcbiAgPiAqIHtcbiAgICBmbGV4OiAwIDAgMTAwJSAvICRjb3VudDtcbiAgICBtYXgtd2lkdGg6IDEwMCUgLyAkY291bnQ7XG4gIH1cbn1cbiIsIiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDU3NnB4LFxyXG4gIG1kOiA3NjhweCxcclxuICBsZzogOTkycHgsXHJcbiAgeGw6IDEyODBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXHJcbiAgc206IDU0MHB4LFxyXG4gIG1kOiA3MjBweCxcclxuICBsZzogOTYwcHgsXHJcbiAgeGw6IDEyNDBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuQGltcG9ydCBcIn5ib290c3RyYXAtc2Nzcy9ib290c3RyYXAtcmVib290XCI7XHJcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwLXNjc3MvdXRpbGl0aWVzXCI7XHJcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwLXNjc3MvYm9vdHN0cmFwLWdyaWRcIjtcclxuQGltcG9ydCBcIn5ib290c3RyYXAtc2Nzcy9pbWFnZXNcIjtcclxuIiwiLy8gRnJhbWV3b3JrIGdyaWQgZ2VuZXJhdGlvblxuLy9cbi8vIFVzZWQgb25seSBieSBCb290c3RyYXAgdG8gZ2VuZXJhdGUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIGdyaWQgY2xhc3NlcyBnaXZlblxuLy8gYW55IHZhbHVlIG9mIGAkZ3JpZC1jb2x1bW5zYC5cblxuQG1peGluIG1ha2UtZ3JpZC1jb2x1bW5zKCRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zLCAkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgLy8gQ29tbW9uIHByb3BlcnRpZXMgZm9yIGFsbCBicmVha3BvaW50c1xuICAlZ3JpZC1jb2x1bW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAkZ3V0dGVyIC8gMjtcbiAgICBwYWRkaW5nLWxlZnQ6ICRndXR0ZXIgLyAyO1xuICB9XG5cbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGJyZWFrcG9pbnRzKSB7XG4gICAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpO1xuXG4gICAgQGlmICRjb2x1bW5zID4gMCB7XG4gICAgICAvLyBBbGxvdyBjb2x1bW5zIHRvIHN0cmV0Y2ggZnVsbCB3aWR0aCBiZWxvdyB0aGVpciBicmVha3BvaW50c1xuICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkY29sdW1ucyB7XG4gICAgICAgIC5jb2wjeyRpbmZpeH0tI3skaX0ge1xuICAgICAgICAgIEBleHRlbmQgJWdyaWQtY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbCN7JGluZml4fSxcbiAgICAuY29sI3skaW5maXh9LWF1dG8ge1xuICAgICAgQGV4dGVuZCAlZ3JpZC1jb2x1bW47XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICAvLyBQcm92aWRlIGJhc2ljIGAuY29sLXticH1gIGNsYXNzZXMgZm9yIGVxdWFsLXdpZHRoIGZsZXhib3ggY29sdW1uc1xuICAgICAgLmNvbCN7JGluZml4fSB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBAaWYgJGdyaWQtcm93LWNvbHVtbnMgPiAwIHtcbiAgICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZ3JpZC1yb3ctY29sdW1ucyB7XG4gICAgICAgICAgLnJvdy1jb2xzI3skaW5maXh9LSN7JGl9IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHJvdy1jb2xzKCRpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbCN7JGluZml4fS1hdXRvIHtcbiAgICAgICAgQGluY2x1ZGUgbWFrZS1jb2wtYXV0bygpO1xuICAgICAgfVxuXG4gICAgICBAaWYgJGNvbHVtbnMgPiAwIHtcbiAgICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkY29sdW1ucyB7XG4gICAgICAgICAgLmNvbCN7JGluZml4fS0jeyRpfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBtYWtlLWNvbCgkaSwgJGNvbHVtbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAub3JkZXIjeyRpbmZpeH0tZmlyc3QgeyBvcmRlcjogLTE7IH1cblxuICAgICAgLm9yZGVyI3skaW5maXh9LWxhc3QgeyBvcmRlcjogJGNvbHVtbnMgKyAxOyB9XG5cbiAgICAgIEBmb3IgJGkgZnJvbSAwIHRocm91Z2ggJGNvbHVtbnMge1xuICAgICAgICAub3JkZXIjeyRpbmZpeH0tI3skaX0geyBvcmRlcjogJGk7IH1cbiAgICAgIH1cblxuICAgICAgQGlmICRjb2x1bW5zID4gMCB7XG4gICAgICAgIC8vIGAkY29sdW1ucyAtIDFgIGJlY2F1c2Ugb2Zmc2V0dGluZyBieSB0aGUgd2lkdGggb2YgYW4gZW50aXJlIHJvdyBpc24ndCBwb3NzaWJsZVxuICAgICAgICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICgkY29sdW1ucyAtIDEpIHtcbiAgICAgICAgICBAaWYgbm90ICgkaW5maXggPT0gXCJcIiBhbmQgJGkgPT0gMCkgeyAvLyBBdm9pZCBlbWl0dGluZyB1c2VsZXNzIC5vZmZzZXQtMFxuICAgICAgICAgICAgLm9mZnNldCN7JGluZml4fS0jeyRpfSB7XG4gICAgICAgICAgICAgIEBpbmNsdWRlIG1ha2UtY29sLW9mZnNldCgkaSwgJGNvbHVtbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gUmVzcG9uc2l2ZSBpbWFnZXMgKGVuc3VyZSBpbWFnZXMgZG9uJ3Qgc2NhbGUgYmV5b25kIHRoZWlyIHBhcmVudHMpXG4vL1xuLy8gVGhpcyBpcyBwdXJwb3NlZnVsbHkgb3B0LWluIHZpYSBhbiBleHBsaWNpdCBjbGFzcyByYXRoZXIgdGhhbiBiZWluZyB0aGUgZGVmYXVsdCBmb3IgYWxsIGA8aW1nPmBzLlxuLy8gV2UgcHJldmlvdXNseSB0cmllZCB0aGUgXCJpbWFnZXMgYXJlIHJlc3BvbnNpdmUgYnkgZGVmYXVsdFwiIGFwcHJvYWNoIGluIEJvb3RzdHJhcCB2Mixcbi8vIGFuZCBhYmFuZG9uZWQgaXQgaW4gQm9vdHN0cmFwIHYzIGJlY2F1c2UgaXQgYnJlYWtzIGxvdHMgb2YgdGhpcmQtcGFydHkgd2lkZ2V0cyAoaW5jbHVkaW5nIEdvb2dsZSBNYXBzKVxuLy8gd2hpY2ggd2VyZW4ndCBleHBlY3RpbmcgdGhlIGltYWdlcyB3aXRoaW4gdGhlbXNlbHZlcyB0byBiZSBpbnZvbHVudGFyaWx5IHJlc2l6ZWQuXG4vLyBTZWUgYWxzbyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzE4MTc4XG4uaW1nLWZsdWlkIHtcbiAgQGluY2x1ZGUgaW1nLWZsdWlkKCk7XG59XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuLmltZy10aHVtYm5haWwge1xuICBwYWRkaW5nOiAkdGh1bWJuYWlsLXBhZGRpbmc7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0aHVtYm5haWwtYmc7XG4gIGJvcmRlcjogJHRodW1ibmFpbC1ib3JkZXItd2lkdGggc29saWQgJHRodW1ibmFpbC1ib3JkZXItY29sb3I7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzKTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygkdGh1bWJuYWlsLWJveC1zaGFkb3cpO1xuXG4gIC8vIEtlZXAgdGhlbSBhdCBtb3N0IDEwMCUgd2lkZVxuICBAaW5jbHVkZSBpbWctZmx1aWQoKTtcbn1cblxuLy9cbi8vIEZpZ3VyZXNcbi8vXG5cbi5maWd1cmUge1xuICAvLyBFbnN1cmVzIHRoZSBjYXB0aW9uJ3MgdGV4dCBhbGlnbnMgd2l0aCB0aGUgaW1hZ2UuXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZpZ3VyZS1pbWcge1xuICBtYXJnaW4tYm90dG9tOiAkc3BhY2VyIC8gMjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5maWd1cmUtY2FwdGlvbiB7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkZmlndXJlLWNhcHRpb24tZm9udC1zaXplKTtcbiAgY29sb3I6ICRmaWd1cmUtY2FwdGlvbi1jb2xvcjtcbn1cbiIsIi8vIEltYWdlIE1peGluc1xuLy8gLSBSZXNwb25zaXZlIGltYWdlXG4vLyAtIFJldGluYSBpbWFnZVxuXG5cbi8vIFJlc3BvbnNpdmUgaW1hZ2Vcbi8vXG4vLyBLZWVwIGltYWdlcyBmcm9tIHNjYWxpbmcgYmV5b25kIHRoZSB3aWR0aCBvZiB0aGVpciBwYXJlbnRzLlxuXG5AbWl4aW4gaW1nLWZsdWlkKCkge1xuICAvLyBQYXJ0IDE6IFNldCBhIG1heGltdW0gcmVsYXRpdmUgdG8gdGhlIHBhcmVudFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8vIFBhcnQgMjogT3ZlcnJpZGUgdGhlIGhlaWdodCB0byBhdXRvLCBvdGhlcndpc2UgaW1hZ2VzIHdpbGwgYmUgc3RyZXRjaGVkXG4gIC8vIHdoZW4gc2V0dGluZyBhIHdpZHRoIGFuZCBoZWlnaHQgYXR0cmlidXRlIG9uIHRoZSBpbWcgZWxlbWVudC5cbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5cbi8vIFJldGluYSBpbWFnZVxuLy9cbi8vIFNob3J0IHJldGluYSBtaXhpbiBmb3Igc2V0dGluZyBiYWNrZ3JvdW5kLWltYWdlIGFuZCAtc2l6ZS5cblxuQG1peGluIGltZy1yZXRpbmEoJGZpbGUtMXgsICRmaWxlLTJ4LCAkd2lkdGgtMXgsICRoZWlnaHQtMXgpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRmaWxlLTF4KTtcblxuICAvLyBBdXRvcHJlZml4ZXIgdGFrZXMgY2FyZSBvZiBhZGRpbmcgLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvIGFuZCAtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvLFxuICAvLyBidXQgZG9lc24ndCBjb252ZXJ0IGRwcHg9PmRwaS5cbiAgLy8gVGhlcmUncyBubyBzdWNoIHRoaW5nIGFzIHVucHJlZml4ZWQgbWluLWRldmljZS1waXhlbC1yYXRpbyBzaW5jZSBpdCdzIG5vbnN0YW5kYXJkLlxuICAvLyBDb21wYXRpYmlsaXR5IGluZm86IGh0dHBzOi8vY2FuaXVzZS5jb20vY3NzLW1lZGlhLXJlc29sdXRpb25cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksIC8vIElFOS0xMSBkb24ndCBzdXBwb3J0IGRwcHhcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgeyAvLyBTdGFuZGFyZGl6ZWRcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGZpbGUtMngpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogJHdpZHRoLTF4ICRoZWlnaHQtMXg7XG4gIH1cbiAgQGluY2x1ZGUgZGVwcmVjYXRlKFwiYGltZy1yZXRpbmEoKWBcIiwgXCJ2NC4zLjBcIiwgXCJ2NVwiKTtcbn1cbiIsIi8vIHN0eWxlbGludC1kaXNhYmxlIHByb3BlcnR5LWRpc2FsbG93ZWQtbGlzdFxuLy8gU2luZ2xlIHNpZGUgYm9yZGVyLXJhZGl1c1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcmVwbGFjZSBuZWdhdGl2ZSB2YWx1ZXMgd2l0aCAwXG5AZnVuY3Rpb24gdmFsaWQtcmFkaXVzKCRyYWRpdXMpIHtcbiAgJHJldHVybjogKCk7XG4gIEBlYWNoICR2YWx1ZSBpbiAkcmFkaXVzIHtcbiAgICBAaWYgdHlwZS1vZigkdmFsdWUpID09IG51bWJlciB7XG4gICAgICAkcmV0dXJuOiBhcHBlbmQoJHJldHVybiwgbWF4KCR2YWx1ZSwgMCkpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJHJldHVybjogYXBwZW5kKCRyZXR1cm4sICR2YWx1ZSk7XG4gICAgfVxuICB9XG4gIEByZXR1cm4gJHJldHVybjtcbn1cblxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1czogJGJvcmRlci1yYWRpdXMsICRmYWxsYmFjay1ib3JkZXItcmFkaXVzOiBmYWxzZSkge1xuICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcbiAgICBib3JkZXItcmFkaXVzOiB2YWxpZC1yYWRpdXMoJHJhZGl1cyk7XG4gIH1cbiAgQGVsc2UgaWYgJGZhbGxiYWNrLWJvcmRlci1yYWRpdXMgIT0gZmFsc2Uge1xuICAgIGJvcmRlci1yYWRpdXM6ICRmYWxsYmFjay1ib3JkZXItcmFkaXVzO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJhZGl1cygkcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhbGlkLXJhZGl1cygkcmFkaXVzKTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItcmlnaHQtcmFkaXVzKCRyYWRpdXMpIHtcbiAgQGlmICRlbmFibGUtcm91bmRlZCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhbGlkLXJhZGl1cygkcmFkaXVzKTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJhZGl1cygkcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YWxpZC1yYWRpdXMoJHJhZGl1cyk7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItbGVmdC1yYWRpdXMoJHJhZGl1cykge1xuICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YWxpZC1yYWRpdXMoJHJhZGl1cyk7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzKCRyYWRpdXMpIHtcbiAgQGlmICRlbmFibGUtcm91bmRlZCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YWxpZC1yYWRpdXMoJHJhZGl1cyk7XG4gIH1cbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzKCRyYWRpdXMpIHtcbiAgQGlmICRlbmFibGUtcm91bmRlZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhbGlkLXJhZGl1cygkcmFkaXVzKTtcbiAgfVxufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cygkcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhbGlkLXJhZGl1cygkcmFkaXVzKTtcbiAgfVxufVxuIiwiLi0jeyRzZWxlY3Rvci1wcmVmaXh9LXR4dC13aGl0ZSB7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxufVxyXG5cclxuLi0jeyRzZWxlY3Rvci1wcmVmaXh9LXR4dC1ibGFjayB7XHJcbiAgY29sb3I6ICRibGFjaztcclxufVxyXG5cclxuLi0jeyRzZWxlY3Rvci1wcmVmaXh9LXR4dC1ncmF5IHtcclxuICBjb2xvcjogJGdyYXk7XHJcbn1cclxuXHJcbi4tI3skc2VsZWN0b3ItcHJlZml4fS10eHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi4tI3skc2VsZWN0b3ItcHJlZml4fS10eHQtc21hbGxlciB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uLSN7JHNlbGVjdG9yLXByZWZpeH0tdHh0LWJhc2Uge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLi0jeyRzZWxlY3Rvci1wcmVmaXh9LXR4dC1sYXJnZXIge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4iLCIkcHJpbWFyeTogIzAwQjRDOTtcclxuJGdyYWRpZW50LWJsdWU6ICMwMUI1Qzk7XHJcbiRncmFkaWVudC1ncmVlbjogIzc3ZGFhNztcclxuJHdoaXRlOiAjRkZGO1xyXG4kYmxhY2s6ICMzMzM7XHJcbiRncmF5OiAjNzc3O1xyXG4iLCJib2R5IHtcclxuICBjb2xvcjogJGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iLCJociB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgd2lkdGg6IDE3OHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuIiwiLiN7JHNlbGVjdG9yLXByZWZpeH0tbWFpbiB7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEzMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwxODAsMjAxLDEpIDAlLCByZ2JhKDEyOSwyMjMsMTc2LDEpIDI1JSwgcmdiYSgyNTUsMjU1LDI1NSwxKSA1OCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XHJcbn1cclxuIiwiLiN7JHNlbGVjdG9yLXByZWZpeH0tZm9vdGVyIHtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDEyOSwyMjMsMTc2LDEpIDAlLCByZ2JhKDAsMTgwLDIwMSwxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JhZGllbnQtYmx1ZTtcclxufVxyXG4iLCJoMSB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgY29sb3I6ICRibGFjaztcclxufVxyXG5cclxuaDEsXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5oNCxcclxuYixcclxuc3Ryb25nIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiIsIi4jeyRzZWxlY3Rvci1wcmVmaXh9LWxvZ28ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTY1cHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuIiwiLiN7JHNlbGVjdG9yLXByZWZpeH0tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxNzhweDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICRwcmltYXJ5O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRwcmltYXJ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJHByaW1hcnksICRhbHBoYTogLjA1KTtcclxuICB9XHJcblxyXG4gICYuLWFjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCR3aGl0ZSwgMiUpO1xyXG4gICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkd2hpdGUsIDIlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuLXNlY29uZGFyeSB7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkd2hpdGUsICRhbHBoYTogLjA1KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLiN7JHNlbGVjdG9yLXByZWZpeH0tbWVkaWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICYuLWFsaWduLWNlbnRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9keSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICYuLXNtYWxsIHtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuI3skc2VsZWN0b3ItcHJlZml4fS1xdW90ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1zeW1ib2w7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29udGVudDogXCJcXDIwMURcIjtcclxuICB9XHJcblxyXG4gICYuLWxhcmdlIHtcclxuICAgIGZvbnQtc2l6ZTogNjZweDtcclxuICB9XHJcbn1cclxuIiwiJHNlbGVjdG9yLXByZWZpeDogXCJxdVwiO1xyXG5cclxuJGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktc3ltYm9sOiBcIkdpbGwgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4iXX0= */";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map