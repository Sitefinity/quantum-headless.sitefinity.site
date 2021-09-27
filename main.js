(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\RepositoriesReal\QuantumHeadlessAngularApp\src\main.ts */"zUnb");


/***/ }),

/***/ "0MCZ":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _raw_loader_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./layout.component.html */ "b9SZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_images_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/images.service */ "gx82");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "yrbL");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
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
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () { return _this.route; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (route) { return route.outlet === "primary"; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (route) { return route.data; }))
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
        { type: _services_images_service__WEBPACK_IMPORTED_MODULE_4__["ImagesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
    ]; };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-layout",
            template: _raw_loader_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_services_images_service__WEBPACK_IMPORTED_MODULE_4__["ImagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "0rzf":
/*!************************************************************************************!*\
  !*** ./src/app/shared/testimonials/testimonial-form/testimonial-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: TestimonialFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialFormComponent", function() { return TestimonialFormComponent; });
/* harmony import */ var _raw_loader_testimonial_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./testimonial-form.component.html */ "mBnF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _testimonials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../testimonials.component */ "p5ak");
/* harmony import */ var _services_testimonials_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/testimonials.service */ "L5Bb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestimonialFormComponent = /** @class */ (function () {
    function TestimonialFormComponent(testimonialsService, router) {
        this.testimonialsService = testimonialsService;
        this.router = router;
        this.model = new _testimonials_component__WEBPACK_IMPORTED_MODULE_2__["Testimonial"]();
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
                    _this.model = new _testimonials_component__WEBPACK_IMPORTED_MODULE_2__["Testimonial"]();
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
        { type: _services_testimonials_service__WEBPACK_IMPORTED_MODULE_3__["TestimonialsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    TestimonialFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-testimonial-form",
            template: _raw_loader_testimonial_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_services_testimonials_service__WEBPACK_IMPORTED_MODULE_3__["TestimonialsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TestimonialFormComponent);
    return TestimonialFormComponent;
}());



/***/ }),

/***/ "2Ouk":
/*!*****************************************************************!*\
  !*** ./src/app/shared/showcases/showcase/showcase.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function() { return ShowcaseComponent; });
/* harmony import */ var _raw_loader_showcase_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./showcase.component.html */ "k69i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_showcases_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/showcases.service */ "aICz");
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
        var id = this.route.snapshot.paramMap.get("id");
        if (id) {
            this.showcase = this.showcasesService.getShowcaseById(id);
        }
    };
    ShowcaseComponent.ctorParameters = function () { return [
        { type: _services_showcases_service__WEBPACK_IMPORTED_MODULE_3__["ShowcasesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ShowcaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-showcase",
            template: _raw_loader_showcase_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_services_showcases_service__WEBPACK_IMPORTED_MODULE_3__["ShowcasesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ShowcaseComponent);
    return ShowcaseComponent;
}());



/***/ }),

/***/ "70qR":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/search/search-result/search-result.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"row--border\">\r\n      <ng-container *ngIf=\"(searchResults | async) && (searchResults | async).length > 0\">\r\n        <div class=\"mt-3 col-md-12\">\r\n          <h3>{{(searchResults | async).length}} results for <em>{{searchTerm}}</em></h3>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"sf-search-results media-list u-mb4 mt-3\">\r\n            <div *ngFor=\"let result of (searchResults | async)\" class=\"media sf-media u-mb3\">\r\n              <div *ngIf=\"result.ImageUrl\" class=\"media-left sf-img-thmb\">\r\n                <a [attr.href]=\"result.ImageUrl\"><img [src]=\"result.ImageUrl\" [alt]=\"result.Title\"/></a>\r\n              </div>\r\n              <div class=\"media-body sf-media-body\">\r\n                <h3>\r\n                  <a *ngIf=\"result.DetailLink\" [routerLink]=\"result.DetailLink\" style=\"cursor: pointer;\">{{result.Title}}</a>\r\n                  <a *ngIf=\"result.ImageUrl\" [attr.href]=\"result.ImageUrl\" style=\"cursor: pointer;\">{{result.Title}}</a>\r\n                </h3>\r\n                <p *ngIf=\"result.Content\" [innerHtml]=\"result.Content\"></p>\r\n                <a *ngIf=\"result.DetailLink\" [routerLink]=\"result.DetailLink\" style=\"cursor: pointer;\">{{settings.url + result.DetailLink}}</a>\r\n                <a *ngIf=\"result.ImageUrl\" [attr.href]=\"result.ImageUrl\" style=\"cursor: pointer;\">{{result.ImageUrl}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"(searchResults | async) && (searchResults | async).length === 0\">\r\n        <div class=\"mt-3 col-md-12\">\r\n            <h3>No search results</h3>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "84xc":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/taxa/taxa.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul [attr.class]=\"classes\">\n  <li *ngFor=\"let taxa of taxas\">\n    <a (click)=\"handleClick(taxa.Id)\">{{taxa.Title}}</a>\n    <span *ngIf=\"taxa.Count\" class=\"text-muted\">\n    ({{taxa.Count}})\n  </span>\n  </li>\n</ul>\n\n");

/***/ }),

/***/ "8oOO":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/oidc/oidc.provider.ts ***!
  \***************************************************/
/*! exports provided: OidcProvider, OIDC_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OidcProvider", function() { return OidcProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OIDC_PROVIDER", function() { return OIDC_PROVIDER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.provider */ "xqZv");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! oidc-client */ "3Rfw");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings.service */ "DiK8");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../app-routing/route-paths */ "kerV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/url.service */ "l7L4");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common.constants */ "pvuc");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            var authSettings = data[0];
            _this.settings.scope = authSettings.Scope;
            _this.manager = new oidc_client__WEBPACK_IMPORTED_MODULE_2__["UserManager"](_this.settings);
            _this.attachEvents();
        }));
    };
    OidcProvider.prototype.initJwks = function () {
        var _this = this;
        var url = this.settings.authority + "/.well-known/jwks";
        return this.http.get(url, { observe: "response", responseType: "json" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
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
        return this.http.get(url, { observe: "response", responseType: "text" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
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
            this.settings.post_logout_redirect_uri = this.urlService.getAbsoluteUrl("/auth/oidc/" + _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_8__["AUTH_ROUTE_PATHS"].SIGN_OUT_REDIRECT);
            this.settings.redirect_uri = this.urlService.getAbsoluteUrl("/auth/oidc/" + _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_8__["AUTH_ROUTE_PATHS"].SIGN_IN_REDIRECT);
            this.settings.silent_redirect_uri = this.urlService.getAbsoluteUrl("/assets/auth/silent-renew.html");
            this.authSettingsUrl = this.settingsProv.systemServiceUrl + "Default.AuthSettings(clientId='" + this.settings.client_id + "')";
        }
    };
    OidcProvider.prototype.signIn = function (returnUrl) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.manager.getUser()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
            if (user && user.expired) {
                // if we have a user attempt to sign in the user silently without redirects
                return _this.authenticateSilent(returnUrl);
            }
            return _this.authenticateWithRedirects(returnUrl);
        }));
    };
    OidcProvider.prototype.signOut = function () {
        var signOut = this.manager.signoutRedirect();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(signOut);
    };
    OidcProvider.prototype.isLoggedIn = function () {
        var user = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.manager.getUser());
        var session = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.manager.querySessionStatus());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(user, session).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            var user = data[0], session = data[1];
            if (user && session) {
                if (!user.expired && user.profile.sub === session.sub) {
                    return true;
                }
            }
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }));
    };
    OidcProvider.prototype.getToken = function () {
        return this.token.asObservable();
    };
    OidcProvider.prototype.authenticateSilent = function (returnUrl) {
        var _this = this;
        var signInSilent = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.manager.signinSilent());
        signInSilent.subscribe(function () {
            _this.router.navigateByUrl(returnUrl);
        });
        return signInSilent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) { return x; }));
    };
    OidcProvider.prototype.authenticateWithRedirects = function (returnUrl) {
        var signIn = this.manager.signinRedirect({ data: returnUrl });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(signIn);
    };
    OidcProvider.ctorParameters = function () { return [
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["PathLocationStrategy"] },
        { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_common_constants__WEBPACK_IMPORTED_MODULE_11__["WINDOW_TOKEN"],] }] },
        { type: _services_url_service__WEBPACK_IMPORTED_MODULE_10__["UrlService"] }
    ]; };
    OidcProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["PathLocationStrategy"],
            Window,
            _services_url_service__WEBPACK_IMPORTED_MODULE_10__["UrlService"]])
    ], OidcProvider);
    return OidcProvider;
}());

var OIDC_PROVIDER = {
    multi: true,
    provide: _auth_provider__WEBPACK_IMPORTED_MODULE_1__["AUTH_PROVIDER_TOKEN"],
    useClass: OidcProvider
};


/***/ }),

/***/ "9H8w":
/*!***************************************************!*\
  !*** ./src/app/shared/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent, SearchResultItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultItem", function() { return SearchResultItem; });
/* harmony import */ var _raw_loader_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./search.component.html */ "XJFI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service */ "AB0y");
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
    SearchComponent.ctorParameters = function () { return [
        { type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }
    ]; };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search",
            template: _raw_loader_search_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());

var SearchResultItem = /** @class */ (function () {
    function SearchResultItem() {
    }
    return SearchResultItem;
}());



/***/ }),

/***/ "AB0y":
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitefinity.service */ "iiHt");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
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
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"] }
    ]; };
    SearchService.propDecorators = {
        searchTriggered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "AytR":
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
// import "zone.js/dist/zone-error";  // Included with Angular CLI.


/***/ }),

/***/ "DiK8":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/settings.service.ts ***!
  \*****************************************************/
/*! exports provided: SANDBOX_URL, SYSTEM_SERVICE_SEGMENT, SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANDBOX_URL", function() { return SANDBOX_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_SERVICE_SEGMENT", function() { return SYSTEM_SERVICE_SEGMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "fbMX");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_storage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"],] }] }
    ]; };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "K4sn":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/news/newsitems/newsitems.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n      <div *ngIf=\"newsItems && newsItems.length>0\">\r\n        <ng-container *ngFor=\"let newsItem of newsItems; let i = index\">\r\n          <ul *ngIf=\"i % 3 == 0\" class=\"list-unstyled row news-list-page\">\r\n            <li class=\"col-md-4\">\r\n              <ng-container\r\n                *ngTemplateOutlet=\"newsItemTemplate; context: { item: newsItem}\">\r\n              </ng-container>\r\n            </li>\r\n            <li class=\"col-md-4\" *ngIf=\"i + 1 < newsItems.length\">\r\n              <ng-container\r\n                *ngTemplateOutlet=\"newsItemTemplate; context: { item: newsItems[i + 1]}\">\r\n              </ng-container>\r\n            </li>\r\n            <li class=\"col-md-4\" *ngIf=\"i + 2 < newsItems.length\">\r\n              <ng-container\r\n                *ngTemplateOutlet=\"newsItemTemplate; context: { item: newsItems[i + 2]}\">\r\n              </ng-container>\r\n            </li>\r\n          </ul>\r\n        </ng-container>\r\n\r\n        <div *ngIf=\"shouldShowLoadMore\" class=\"load-more text-center u-mt4\">\r\n          <a (click)=\"LoadMore()\" style=\"cursor: pointer;\">\r\n            Load 10 more news\r\n            <br />\r\n            <span class=\"glyphicon glyphicon-chevron-down glyph-bordered\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-sidebar [contentItems]=\"allNewsItems\" (taxaClicked)=\"getNewsItemsByTaxa($event)\"></app-sidebar>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #newsItemTemplate let-newsItem=\"item\">\r\n  <div [ngClass]=\"{'featured_news_recent': newsItem.Featured}\" class=\"col-xs-12 news_item_recent news_text homepage_news\">\r\n    <a routerLink=\"/news/{{newsItem.Id}}\">\r\n      <img class=\"img-circle\" *ngIf=\"newsItem.Thumbnail && newsItem.Thumbnail[0]\" [src]=\"newsItem.Thumbnail[0].Url\" [alt]=\"newsItem.Thumbnail[0].AlternativeText\"/>\r\n    </a>\r\n    <div class=\"homepage_news_text\">\r\n      <h4>\r\n        <a routerLink=\"/news/{{newsItem.Id}}\">\r\n          {{newsItem.Title}}\r\n        </a>\r\n      </h4>\r\n      <span class=\"text-muted\">\r\n        {{newsItem.DateCreated | date: \"medium\"}} <br>\r\n         by\r\n        {{newsItem.Author}}\r\n    </span>\r\n      <p [innerHtml]=\"newsItem.Summary\">\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"newsItem.Featured\" class=\"ribbon\"><span>FEATURED</span></div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "L5Bb":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/testimonials.service.ts ***!
  \*********************************************************/
/*! exports provided: testimonialDataOptions, TestimonialsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testimonialDataOptions", function() { return testimonialDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsService", function() { return TestimonialsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitefinity.service */ "iiHt");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images.service */ "gx82");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        var testimonialReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
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
        var isTestimonialCreated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
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
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"] },
        { type: _images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"] }
    ]; };
    TestimonialsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"],
            _images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"]])
    ], TestimonialsService);
    return TestimonialsService;
}());



/***/ }),

/***/ "MpaO":
/*!*********************************************************!*\
  !*** ./src/app/shared/showcases/showcases.component.ts ***!
  \*********************************************************/
/*! exports provided: ShowcasesComponent, Showcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcasesComponent", function() { return ShowcasesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Showcase", function() { return Showcase; });
/* harmony import */ var _raw_loader_showcases_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./showcases.component.html */ "co3B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_showcases_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/showcases.service */ "aICz");
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/rx-base/rx-base.component */ "lnPu");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
    ShowcasesComponent.ctorParameters = function () { return [
        { type: _services_showcases_service__WEBPACK_IMPORTED_MODULE_2__["ShowcasesService"] }
    ]; };
    ShowcasesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-showcases",
            template: _raw_loader_showcases_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_services_showcases_service__WEBPACK_IMPORTED_MODULE_2__["ShowcasesService"]])
    ], ShowcasesComponent);
    return ShowcasesComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_3__["RxBaseComponent"]));

var Showcase = /** @class */ (function () {
    function Showcase() {
    }
    return Showcase;
}());



/***/ }),

/***/ "O5fe":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/not-found/not-found.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>\r\n      The page you're looking for doesn't exist\r\n    </h2>\r\n    <div class=\"form-group\">\r\n      <a routerLink=\"/news\" class=\"btn btn-primary btn-quantum-homepage\">Go home</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "OoyU":
/*!*********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "O5fe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-not-found",
            template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "QXIk":
/*!************************************************************************!*\
  !*** ./src/app/shared/search/search-result/search-result.component.ts ***!
  \************************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var _raw_loader_search_result_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./search-result.component.html */ "70qR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ "AB0y");
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/rx-base/rx-base.component */ "lnPu");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/settings.service */ "DiK8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (data["searchTerm"]) {
                _this.searchTerm = data["searchTerm"];
                _this.searchService.getItemsBySearchWord(_this.searchTerm);
            }
        });
    };
    SearchResultComponent.ctorParameters = function () { return [
        { type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    SearchResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search-result",
            template: _raw_loader_search_result_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"], _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], SearchResultComponent);
    return SearchResultComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_3__["RxBaseComponent"]));



/***/ }),

/***/ "Qdx7":
/*!***********************************************************************!*\
  !*** ./src/app/shared/auth/oauth/oauth-sign-in-redirect.component.ts ***!
  \***********************************************************************/
/*! exports provided: OauthSignInRedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OauthSignInRedirectComponent", function() { return OauthSignInRedirectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _oauth_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oauth.provider */ "h1au");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        var token = new _oauth_provider__WEBPACK_IMPORTED_MODULE_2__["OAuthToken"]();
        token.value = t;
        token.expirationTime = expires;
        token.type = parsedParams["token_type"];
        _oauth_provider__WEBPACK_IMPORTED_MODULE_2__["OauthProvider"].setToken(token);
        this.router.navigateByUrl(returnUrl);
    };
    OauthSignInRedirectComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    OauthSignInRedirectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "sf-oauth-sign-in-redirect",
            template: ""
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OauthSignInRedirectComponent);
    return OauthSignInRedirectComponent;
}());



/***/ }),

/***/ "S46H":
/*!***************************************************!*\
  !*** ./src/app/shared/config/config.component.ts ***!
  \***************************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _raw_loader_config_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./config.component.html */ "nSzK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settings.service */ "DiK8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-routing/route-paths */ "kerV");
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
        this.router.navigate([_app_routing_route_paths__WEBPACK_IMPORTED_MODULE_4__["ROUTE_PATHS"].LAYOUT]);
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
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    ConfigComponent = ConfigComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-config",
            template: _raw_loader_config_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "SgQx":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/news/newsitem/newsitem.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"newsItem\" class=\"row\">\r\n  <div class=\"container\">\r\n    <ng-container>\r\n      <h2>{{newsItem.Title}}</h2>\r\n      <div class=\"text-muted\">{{newsItem.DateCreated | date:\"medium\"}} by {{newsItem.Author}}</div>\r\n      <div class=\"news_image news_image_detail\">\r\n        <img style=\"display: block; min-height: 230px;\" *ngIf=\"newsItem.Thumbnail\" [src]=\"newsItem.Thumbnail.Url\" [alt]=\"newsItem.Thumbnail.AlternativeText\"/>\r\n      </div>\r\n      <div class=\"news_summary\" [innerHtml]=\"newsItem.Summary\">\r\n      </div>\r\n      <div [innerHtml]=\"newsItemContent\">\r\n      </div>\r\n    </ng-container>\r\n    <app-comments [commentableItemId]=\"newsItem.Id\" ></app-comments>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
    AppComponent.ctorParameters = function () { return []; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "WoVx":
/*!*******************************************!*\
  !*** ./src/app/shared/auth/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "jGGy");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var isLoggedInSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.authService.init().subscribe(function () {
            _this.authService.isLoggedIn().subscribe(function (isLoggedIn) {
                if (!isLoggedIn) {
                    _this.authService.signIn(state.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                        console.log(err);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
                    })).subscribe(function (res) { return console.log('HTTP response', res); }, function (err) { return console.log('HTTP Error', err); });
                }
                isLoggedInSubject.next(isLoggedIn);
                isLoggedInSubject.complete();
            });
        });
        return isLoggedInSubject.asObservable();
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "XJFI":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/search/search.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-inline\">\r\n  <div class=\"form-group\">\r\n    <div [ngClass]=\"{'open': open }\" class=\"dropdown\">\r\n      <button (click)=\"open=!open\" type=\"button\" class=\"dropdown-toggle search-button-icon\">\r\n        <svg class=\"svg-inline--fa fa-search fa-w-16\" aria-hidden=\"true\" data-prefix=\"fa\" data-icon=\"search\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" data-fa-i2svg=\"\"><path fill=\"currentColor\" d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\"></path></svg>\r\n      </button>\r\n      <div class=\"dropdown-menu mega-menu search-dropdown-menu\">\r\n        <input #input (blur)=\"open = false\" (focus)=\"input.value = null;\" (keydown.enter)='onEnter($event); open = false;' type=\"search\" placeholder=\"Search\" class=\"form-control ui-autocomplete-input\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Yfbq":
/*!*************************************************!*\
  !*** ./src/app/shared/services/news.service.ts ***!
  \*************************************************/
/*! exports provided: newsItemsDataOptions, NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsItemsDataOptions", function() { return newsItemsDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitefinity.service */ "iiHt");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
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
        var newsReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
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
        var newsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
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
        var newsReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
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
    NewsService.ctorParameters = function () { return [
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"] }
    ]; };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "Z9/t":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/comments.service.ts ***!
  \*****************************************************/
/*! exports provided: CommentsService, DataOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataOptions", function() { return DataOptions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitefinity.service */ "iiHt");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsService = /** @class */ (function () {
    function CommentsService(sitefinity) {
        this.sitefinity = sitefinity;
    }
    CommentsService.prototype.getComments = function (contentItemsDataOptions, contentItemId, skip, take) {
        var commentSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.sitefinity.instance.data(contentItemsDataOptions).getSingle({
            key: contentItemId,
            action: "Comments",
            successCb: function (data) { return commentSubject.next(data.value); },
            failureCb: function (data) { return console.log(data); }
        });
        return commentSubject.asObservable();
    };
    CommentsService.prototype.createComment = function (contentItemsDataOptions, comment, contentItemId) {
        var isCommentCreated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
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
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"] }
    ]; };
    CommentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"]])
    ], CommentsService);
    return CommentsService;
}());

var DataOptions = /** @class */ (function () {
    function DataOptions() {
    }
    return DataOptions;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_news_newsitems_newsitems_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/news/newsitems/newsitems.component */ "htmu");
/* harmony import */ var _shared_news_newsitem_newsitem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/news/newsitem/newsitem.component */ "mv1p");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "OoyU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "u+pc");
/* harmony import */ var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/search/search.component */ "9H8w");
/* harmony import */ var _shared_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/search/search-result/search-result.component */ "QXIk");
/* harmony import */ var _shared_taxa_taxa_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/taxa/taxa.component */ "g/im");
/* harmony import */ var _shared_showcases_showcases_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/showcases/showcases.component */ "MpaO");
/* harmony import */ var _shared_showcases_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/showcases/showcase/showcase.component */ "2Ouk");
/* harmony import */ var _shared_config_config_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/config/config.component */ "S46H");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/storage.service */ "fbMX");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/layout/layout.component */ "0MCZ");
/* harmony import */ var _shared_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/testimonials/testimonials.component */ "p5ak");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var _shared_auth_oidc_oidc_provider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/auth/oidc/oidc.provider */ "8oOO");
/* harmony import */ var _shared_auth_oidc_sign_in_redirect_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/auth/oidc/sign-in-redirect/sign-in-redirect.component */ "cGQN");
/* harmony import */ var _shared_auth_oidc_sign_out_redirect_sign_out_redirect_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/auth/oidc/sign-out-redirect/sign-out-redirect.component */ "vbiN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/comments/comments.component */ "fbZM");
/* harmony import */ var _shared_testimonials_testimonial_form_testimonial_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/testimonials/testimonial-form/testimonial-form.component */ "0rzf");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "sRhs");
/* harmony import */ var _shared_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/common/rx-base/rx-base.component */ "lnPu");
/* harmony import */ var _shared_auth_oauth_oauth_provider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/auth/oauth/oauth.provider */ "h1au");
/* harmony import */ var _shared_common_constants__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/common.constants */ "pvuc");
/* harmony import */ var _shared_auth_oauth_oauth_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/auth/oauth/oauth-sign-in-redirect.component */ "Qdx7");
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
                _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__["LayoutComponent"],
                _shared_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_18__["TestimonialsComponent"],
                _shared_auth_oidc_sign_in_redirect_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_21__["SignInRedirectComponent"],
                _shared_auth_oidc_sign_out_redirect_sign_out_redirect_component__WEBPACK_IMPORTED_MODULE_22__["SignOutRedirectComponent"],
                _shared_comments_comments_component__WEBPACK_IMPORTED_MODULE_24__["CommentsComponent"],
                _shared_testimonials_testimonial_form_testimonial_form_component__WEBPACK_IMPORTED_MODULE_25__["TestimonialFormComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_26__["SidebarComponent"],
                _shared_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_27__["RxBaseComponent"],
                _shared_auth_oauth_oauth_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_30__["OauthSignInRedirectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_19__["CarouselModule"].forRoot()
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_23__["PathLocationStrategy"],
                _shared_auth_oidc_oidc_provider__WEBPACK_IMPORTED_MODULE_20__["OIDC_PROVIDER"],
                _shared_auth_oauth_oauth_provider__WEBPACK_IMPORTED_MODULE_28__["OAUTH_PROVIDER"],
                { provide: "Sitefinity", useValue: window["Sitefinity"] },
                { provide: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_16__["LOCAL_STORAGE"], useValue: new _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_16__["StorageService"](localStorage) },
                { provide: _shared_common_constants__WEBPACK_IMPORTED_MODULE_29__["WINDOW_TOKEN"], useValue: window }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "aICz":
/*!******************************************************!*\
  !*** ./src/app/shared/services/showcases.service.ts ***!
  \******************************************************/
/*! exports provided: showcasesDataOptions, ShowcasesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showcasesDataOptions", function() { return showcasesDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcasesService", function() { return ShowcasesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sitefinity.service */ "iiHt");
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
    urlName: "showcases"
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
                .select("Title", "Client", "Website", "Challenge", "Solution", "Results", "PublicationDate")
                .expand("Thumbnail", "Download")
                .order("PublicationDate desc"),
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
                .select("Title", "Client", "Website", "Challenge", "Solution", "Results", "PublicationDate")
                .expand("Thumbnail", "Download")
                .order("PublicationDate desc"),
            successCb: function (data) { return showcaseReplaySubject.next(data); },
            failureCb: function (data) { return console.log(data); }
        });
        return showcaseReplaySubject;
    };
    ShowcasesService.ctorParameters = function () { return [
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_2__["SitefinityService"] }
    ]; };
    ShowcasesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_sitefinity_service__WEBPACK_IMPORTED_MODULE_2__["SitefinityService"]])
    ], ShowcasesService);
    return ShowcasesService;
}());



/***/ }),

/***/ "b9SZ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/layout.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <div class=\"github-banner container-fluid\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n          Check out the new <a class=\"bold github-link\" target=\"_blank\" href=\"https://github.com/Sitefinity/QuantumHeadlessAngularApp\"> Sitefinity Headless Sample in GitHub</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-3 col-xs-2\">\r\n            <div class=\"sf-Long-text\">\r\n              <p>\r\n                <a routerLink=\"/news\">\r\n                  <img *ngIf=\"logoImage | async\" style=\"margin-top: 20px;\" [alt]=\"(logoImage | async).AlternativeText\" [src]=\"(logoImage | async).Url\" [title]=\"(logoImage | async).AlternativeText\">\r\n                </a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-9 col-xs-10\">\r\n            <nav class=\"navbar navbar-default  blue-horizontal\">\r\n              <div class=\"container-fluid\">\r\n                <div class=\"collapse navbar-collapse\">\r\n                  <ul class=\"nav navbar-nav\">\r\n                    <li class=\"dropdown\"><a class=\"upper-nav dropdown-toggle\" routerLink=\"/news\" routerLinkActive=\"active\">News</a></li>\r\n                    <li class=\"dropdown\"><a class=\"upper-nav dropdown-toggle\" routerLink=\"/showcases\" routerLinkActive=\"active\">Showcases</a></li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 header-right-group\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <app-search></app-search>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n<main class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div *ngIf=\"bannerImage | async\" class=\"homepage-card-banner\">\r\n      <img *ngIf=\"bannerImage | async\" [alt]=\"(bannerImage | async).AlternativeText\" [src]=\"(bannerImage | async).Url\" [title]=\"(bannerImage | async).AlternativeText\" class=\"splash\">\r\n      <div class=\"container\">\r\n        <div class=\"homepage-card-banner-text\">\r\n          <h2 *ngIf=\"title | async; let title\">{{title}}</h2>\r\n          <p *ngIf=\"(title | async) === 'Showcases'\">We create hard-working web systems that put you in control. Fully integrated, and using the very latest tech.</p>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n");

/***/ }),

/***/ "cGQN":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/auth/oidc/sign-in-redirect/sign-in-redirect.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SignInRedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInRedirectComponent", function() { return SignInRedirectComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! oidc-client */ "3Rfw");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInRedirectComponent = /** @class */ (function () {
    function SignInRedirectComponent(router) {
        this.router = router;
    }
    SignInRedirectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var redirect = new oidc_client__WEBPACK_IMPORTED_MODULE_3__["UserManager"]({}).signinRedirectCallback();
        var redirectAsObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(redirect);
        redirectAsObservable.subscribe(function (args) {
            var state = args.state;
            _this.router.navigateByUrl(state);
        });
    };
    SignInRedirectComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SignInRedirectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sign-in-redirect",
            template: ""
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignInRedirectComponent);
    return SignInRedirectComponent;
}());



/***/ }),

/***/ "co3B":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/showcases/showcases.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row mb-5\">\r\n  <div class=\"container\">\r\n    <app-testimonials></app-testimonials>\r\n  </div>\r\n</div>\r\n<div [ngClass]=\"{'showcase': i % 2 === 0}\" *ngFor=\"let showcase of (showcases | async); index as i\" class=\"row showcase_row\">\r\n  <div class=\"container\">\r\n    <h2>\r\n    {{showcase.Title}}\r\n    </h2>\r\n    <div class=\"col-md-4 showcase_image pr-2\">\r\n      <div *ngIf=\"showcase.Thumbnail\">\r\n        <img [src]=\"showcase.Thumbnail.Url\" [alt]=\"showcase.Thumbnail.AlternativeText\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-8 showcase_summary\">\r\n      <div class=\"row showcase-info\">\r\n        <div class=\"col-md-6 no-padding\">\r\n          <div>\r\n            <strong>Client</strong>\r\n\r\n            <p>{{showcase.Client}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div>\r\n            <strong>Website</strong>\r\n\r\n            <p><a [href]=\"showcase.Website\" target=\"_blank\">{{showcase.Website}}</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"showcase-info\">\r\n            <strong>Challenge</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Challenge\"></p>\r\n          </div>\r\n\r\n          <div class=\"showcase-info\">\r\n            <strong> Solution</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Solution\"></p>\r\n          </div>\r\n\r\n          <div class=\"showcase-info showcase-info-last\">\r\n            <strong>Results</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Results\"></p>\r\n          </div>\r\n\r\n          <div *ngIf=\"showcase.Download\">\r\n            <a class=\"btn btn-primary btn-quantum-homepage mt-3 ml-2\" [href]=\"showcase.Download.Url\">Read the story</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "fbMX":
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/*! exports provided: LOCAL_STORAGE, StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE", function() { return LOCAL_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
    StorageService.ctorParameters = function () { return [
        { type: Storage }
    ]; };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [Storage])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "fbZM":
/*!*******************************************************!*\
  !*** ./src/app/shared/comments/comments.component.ts ***!
  \*******************************************************/
/*! exports provided: CommentsComponent, Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var _raw_loader_comments_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./comments.component.html */ "pMXV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "jGGy");
/* harmony import */ var _services_comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/comments.service */ "Z9/t");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/news.service */ "Yfbq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "kmKP");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
            this.commentsService.createComment(_services_news_service__WEBPACK_IMPORTED_MODULE_4__["newsItemsDataOptions"], this.model, this.commentableItemId).subscribe(function (isCommentCreated) {
                if (isCommentCreated) {
                    _this.getComments();
                }
            });
        }
    };
    CommentsComponent.prototype.getComments = function () {
        var _this = this;
        this.commentsService.getComments(_services_news_service__WEBPACK_IMPORTED_MODULE_4__["newsItemsDataOptions"], this.commentableItemId).subscribe(function (data) {
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
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
    ]; };
    CommentsComponent.propDecorators = {
        commentableItemId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-comments",
            template: _raw_loader_comments_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());

var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ "g/im":
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
/* harmony import */ var _raw_loader_taxa_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./taxa.component.html */ "84xc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TaxaComponent = /** @class */ (function () {
    function TaxaComponent() {
        this.taxaClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TaxaComponent.prototype.handleClick = function (taxa) {
        this.taxaClicked.emit(taxa);
    };
    TaxaComponent.propDecorators = {
        taxas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        taxaClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    TaxaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-taxa",
            template: _raw_loader_taxa_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
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

/***/ "gx82":
/*!***************************************************!*\
  !*** ./src/app/shared/services/images.service.ts ***!
  \***************************************************/
/*! exports provided: imageDataOptions, albumDataOptions, ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageDataOptions", function() { return imageDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "albumDataOptions", function() { return albumDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitefinity.service */ "iiHt");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "DiK8");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
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
        var replaySubjectImage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
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
        var replaySubjectLibrary = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
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
        var resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
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
        var relationLink = this.settingsService.url + _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["endpoint"] + "images(" + itemId + ")";
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
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"] },
        { type: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    ImagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"], _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
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

/***/ "h1au":
/*!*****************************************************!*\
  !*** ./src/app/shared/auth/oauth/oauth.provider.ts ***!
  \*****************************************************/
/*! exports provided: OauthProvider, OAUTH_PROVIDER, OAuthToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OauthProvider", function() { return OauthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAUTH_PROVIDER", function() { return OAUTH_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuthToken", function() { return OAuthToken; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.provider */ "xqZv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "DiK8");
/* harmony import */ var _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app-routing/route-paths */ "kerV");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/url.service */ "l7L4");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common.constants */ "pvuc");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    };
    OauthProvider.prototype.signIn = function (returnUrl) {
        var redirectUri = encodeURIComponent(this.settings.redirect_uri);
        var encodedReturnUrl = encodeURIComponent(encodeURIComponent(returnUrl));
        var url = this.settings.authority + ("/authorize?response_type=token&client_id=" + this.settings.client_id + "&redirect_uri=" + redirectUri + "&state=" + encodedReturnUrl);
        this.window.location.href = url;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    };
    OauthProvider.prototype.signOut = function (returnUrl) {
        if (!returnUrl) {
            returnUrl = this.urlService.getAbsoluteUrl("/");
        }
        returnUrl = encodeURIComponent(returnUrl);
        var redirectUrl = this.settingsProv.url + "/Sitefinity" + LOGOUT_URL_NO_STS + returnUrl;
        this.window.location.href = redirectUrl;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])();
    };
    OauthProvider.prototype.isLoggedIn = function () {
        var result = !!OauthProvider_1.token && OauthProvider_1.token.expirationTime > new Date();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
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
        return this.http.get(url, { observe: "response", responseType: "text" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
            var header = x.headers.get("content-type");
            if (header && header.startsWith("application/json")) {
                var result = JSON.parse(x.body);
                return result.protocol === "Default";
            }
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
        }));
    };
    OauthProvider.prototype.initSettingsObj = function () {
        if (!this.settings.authority && this.settingsProv.url) {
            this.settings.authority = this.settingsProv.url + "/" + OAUTH_PATH;
            this.settings.post_logout_redirect_uri = this.urlService.getAbsoluteUrl("/auth/oauth/" + _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_6__["AUTH_ROUTE_PATHS"].SIGN_OUT_REDIRECT);
            this.settings.redirect_uri = this.urlService.getAbsoluteUrl("/auth/oauth/" + _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_6__["AUTH_ROUTE_PATHS"].SIGN_IN_REDIRECT);
        }
    };
    var OauthProvider_1;
    OauthProvider.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    OauthProvider.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _services_url_service__WEBPACK_IMPORTED_MODULE_7__["UrlService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
        { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_common_constants__WEBPACK_IMPORTED_MODULE_8__["WINDOW_TOKEN"],] }] }
    ]; };
    OauthProvider = OauthProvider_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_url_service__WEBPACK_IMPORTED_MODULE_7__["UrlService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
            Window])
    ], OauthProvider);
    return OauthProvider;
}());

var OAUTH_PROVIDER = {
    multi: true,
    provide: _auth_provider__WEBPACK_IMPORTED_MODULE_2__["AUTH_PROVIDER_TOKEN"],
    useClass: OauthProvider
};
var OAuthToken = /** @class */ (function () {
    function OAuthToken() {
    }
    return OAuthToken;
}());



/***/ }),

/***/ "htmu":
/*!**************************************************************!*\
  !*** ./src/app/shared/news/newsitems/newsitems.component.ts ***!
  \**************************************************************/
/*! exports provided: NewsItemsComponent, NewsItem, Image, Album */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemsComponent", function() { return NewsItemsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItem", function() { return NewsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
/* harmony import */ var _raw_loader_newsitems_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./newsitems.component.html */ "K4sn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/news.service */ "Yfbq");
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/rx-base/rx-base.component */ "lnPu");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
    function NewsItemsComponent(newsService) {
        var _this = _super.call(this) || this;
        _this.newsService = newsService;
        _this.newsItems = [];
        _this.allNewsItems = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]();
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
        { type: _services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }
    ]; };
    NewsItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-newsitems",
            template: _raw_loader_newsitems_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], NewsItemsComponent);
    return NewsItemsComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_3__["RxBaseComponent"]));

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

/***/ "iiHt":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/sitefinity.service.ts ***!
  \*******************************************************/
/*! exports provided: endpoint, SitefinityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitefinityService", function() { return SitefinityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.service */ "DiK8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ["Sitefinity",] }] },
        { type: _settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }
    ]; };
    SitefinityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [Object, _settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], SitefinityService);
    return SitefinityService;
}());



/***/ }),

/***/ "jGGy":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.provider */ "xqZv");
/* harmony import */ var _services_sitefinity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sitefinity.service */ "iiHt");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.provider);
        }
        return this.getProvider();
    };
    AuthService.prototype.signIn = function (returnUrl) {
        return this.provider.signIn(returnUrl);
    };
    AuthService.prototype.isLoggedIn = function () {
        if (!this.provider) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }
        return this.provider.isLoggedIn();
    };
    AuthService.prototype.getProvider = function () {
        var _this = this;
        // the provider is an observable as we do not know which provider we have to work with - oidc or oauth
        var ready = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        var sortedProviders = this.providers.sort(function (a, b) {
            if (a.getPriority() > b.getPriority()) {
                return 1;
            }
            else if (a.getPriority() < b.getPriority()) {
                return -1;
            }
            return 0;
        });
        var availableProv = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ provider: null, value: false });
        var _loop_1 = function (i) {
            availableProv = availableProv.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (result) {
                if (result.value === false) {
                    return sortedProviders[i].isAvailable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
                        return {
                            provider: sortedProviders[i],
                            value: x
                        };
                    }));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
            }));
        };
        for (var i = 0; i < sortedProviders.length; i++) {
            _loop_1(i);
        }
        availableProv.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return x.provider; })).subscribe(function (provider) {
            _this.initProvider(ready, provider);
        });
        return ready.asObservable();
    };
    AuthService.prototype.initProvider = function (ready, provider) {
        var _this = this;
        this.provider = provider;
        this.provider.getToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) { return !!x; })).subscribe(function (token) {
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
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_auth_provider__WEBPACK_IMPORTED_MODULE_3__["AUTH_PROVIDER_TOKEN"],] }] },
        { type: _services_sitefinity_service__WEBPACK_IMPORTED_MODULE_4__["SitefinityService"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [Array, _services_sitefinity_service__WEBPACK_IMPORTED_MODULE_4__["SitefinityService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "k69i":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/showcases/showcase/showcase.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"(showcase | async) as showcase\" class=\"row showcase_row\">\r\n  <div class=\"container\">\r\n    <h2>\r\n      {{showcase.Title}}\r\n    </h2>\r\n    <div class=\"col-md-4 showcase_image pr-2\">\r\n      <div *ngIf=\"showcase.Thumbnail\">\r\n        <img [src]=\"showcase.Thumbnail.Url\" [alt]=\"showcase.Thumbnail.AlternativeText\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-8 showcase_summary\">\r\n      <div class=\"row showcase-info\">\r\n        <div class=\"col-md-6 no-padding\">\r\n          <div>\r\n            <strong>Client</strong>\r\n\r\n            <p>{{showcase.Client}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div>\r\n            <strong>Website</strong>\r\n\r\n            <p><a [href]=\"showcase.Website\" target=\"_blank\">{{showcase.Website}}</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"showcase-info\">\r\n            <strong>Challenge</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Challenge\"></p>\r\n          </div>\r\n\r\n          <div class=\"showcase-info\">\r\n            <strong> Solution</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Solution\"></p>\r\n          </div>\r\n\r\n          <div class=\"showcase-info showcase-info-last\">\r\n            <strong>Results</strong>\r\n\r\n            <p [innerHtml]=\"showcase.Results\"></p>\r\n          </div>\r\n\r\n          <div *ngIf=\"showcase.Download\">\r\n            <a class=\"btn btn-primary btn-quantum-homepage mt-3 ml-2\" [href]=\"showcase.Download.Url\">Read the story</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "kerV":
/*!********************************************!*\
  !*** ./src/app/app-routing/route-paths.ts ***!
  \********************************************/
/*! exports provided: ROUTE_PATHS, AUTH_ROUTE_PATHS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_PATHS", function() { return ROUTE_PATHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ROUTE_PATHS", function() { return AUTH_ROUTE_PATHS; });
var ROUTE_PATHS = {
    LAYOUT: "",
    NEWS: "news",
    SHOWCASES: "showcases",
    SUBMIT_TESTIMONIAL: "testimonial",
    NOT_FOUND: "**",
    NOT_FOUND_ANY: "**",
    SEARCH_RESULTS: "search-results",
    CONFIG: "config"
};
var AUTH_ROUTE_PATHS = {
    SIGN_IN_REDIRECT: "sign-in",
    SIGN_OUT_REDIRECT: "sign-out"
};


/***/ }),

/***/ "kmKP":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: usersDataOptions, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersDataOptions", function() { return usersDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitefinity.service */ "iiHt");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var usersDataOptions = {
    urlName: "users"
};
var UserService = /** @class */ (function () {
    function UserService(sitefinity) {
        this.sitefinity = sitefinity;
    }
    UserService.prototype.getUserInfo = function () {
        var usersReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
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
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "l7L4":
/*!************************************************!*\
  !*** ./src/app/shared/services/url.service.ts ***!
  \************************************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.constants */ "pvuc");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] },
        { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_common_constants__WEBPACK_IMPORTED_MODULE_2__["WINDOW_TOKEN"],] }] }
    ]; };
    UrlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"], Window])
    ], UrlService);
    return UrlService;
}());



/***/ }),

/***/ "lnPu":
/*!************************************************************!*\
  !*** ./src/app/shared/common/rx-base/rx-base.component.ts ***!
  \************************************************************/
/*! exports provided: RxBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxBaseComponent", function() { return RxBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: "" })
    ], RxBaseComponent);
    return RxBaseComponent;
}());



/***/ }),

/***/ "mBnF":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/testimonials/testimonial-form/testimonial-form.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-small container mt-6\">\r\n  <form #f=\"ngForm\" (ngSubmit)=\"submitTestimonial(f)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"Author\">Author:</label>\r\n      <input\r\n        [(ngModel)]=\"model.TestimonialAuthor\"\r\n        class=\"form-control\"\r\n        required\r\n        id=\"Author\"\r\n        type=\"text\"\r\n        name=\"Author\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"JobTitle\">Job Title:</label>\r\n      <input\r\n        class=\"form-control\"\r\n        [(ngModel)]=\"model.JobTitle\"\r\n        id=\"JobTitle\"\r\n        name=\"JobTitle\"\r\n        type=\"text\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"Company\">Company:</label>\r\n      <input\r\n        [(ngModel)]=\"model.Company\"\r\n        class=\"form-control\"\r\n        id=\"Company\"\r\n        name=\"Company\"\r\n        type=\"text\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"Company\">Photo:</label>\r\n      <input\r\n        required\r\n        (change)=\"onImageChange($event)\"\r\n        id=\"Photo\"\r\n        name=\"Photo\"\r\n        type=\"file\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"Quote\">Quote:</label>\r\n      <textarea\r\n        [(ngModel)]=\"model.Quote\"\r\n        class=\"form-control\"\r\n        required\r\n        id=\"Quote\"\r\n        name=\"Quote\"></textarea>\r\n    </div>\r\n    <button [disabled]=\"f.invalid || !isPhotoSelected\" type=\"submit\" class=\"btn btn-primary btn-quantum-homepage\">Submit</button>\r\n    <div *ngIf=\"creatingTestimonial\" class=\"sf-loading mt-1\"><span></span></div>\r\n  </form>\r\n  <div class=\"alert alert-info mt-3\" *ngIf=\"createdTestimonialMessage\">\r\n    {{createdTestimonialMessage}}\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "mv1p":
/*!************************************************************!*\
  !*** ./src/app/shared/news/newsitem/newsitem.component.ts ***!
  \************************************************************/
/*! exports provided: NewsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemComponent", function() { return NewsItemComponent; });
/* harmony import */ var _raw_loader_newsitem_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./newsitem.component.html */ "SgQx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/news.service */ "Yfbq");
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/rx-base/rx-base.component */ "lnPu");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
        { type: _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
    ]; };
    NewsItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-newsitem",
            template: _raw_loader_newsitem_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], NewsItemComponent);
    return NewsItemComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_4__["RxBaseComponent"]));



/***/ }),

/***/ "nSzK":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/config/config.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<form #f=\"ngForm\" (ngSubmit)=\"onSave()\">\r\n  <div class=\"container col-md-offset-3 col-md-6\">\r\n    <h3>Enter url to a Sitefinity hosted trial instance below:</h3>\r\n    <div class=\"form-group mt-3\">\r\n      <label for=\"configInput\">Sandbox Url:</label>\r\n      <input class=\"form-control\"\r\n             name=\"configInput\"\r\n             id=\"configInput\"\r\n             type=\"text\"\r\n             ngDefaultControl\r\n             required\r\n             [(ngModel)]=\"currentUrl\">\r\n    </div>\r\n    <div>\r\n      <button class=\"btn btn-primary btn-quantum-homepage\" [disabled]=\"!f.valid\" type=\"submit\">Save</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n");

/***/ }),

/***/ "nUCY":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/testimonials/testimonials.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel *ngIf=\"testimonials | async\">\r\n  <slide *ngFor=\"let testimonial of (testimonials | async)\">\r\n    <div class=\"col-md-2 testimonial-quote-icon\">\r\n      <img src=\"assets/images/quote-image.png\" alt=\"quote-image\">\r\n    </div>\r\n    <div class=\"col-md-10 testimonial-quote\">\r\n      <h3>{{testimonial.Quote}}</h3>\r\n      <div class=\"testimonial-image\">\r\n        <div *ngIf=\"testimonial.Photo && testimonial.Photo[0]\" class=\"col-md-2\">\r\n          <img [src]=\"testimonial.Photo[0].Url\" [alt]=\"testimonial.Photo[0].AlternativeText\">\r\n        </div>\r\n        <div>\r\n          <strong>{{testimonial.TestimonialAuthor}}</strong>\r\n          <br>\r\n          <span>{{testimonial.JobTitle}},</span>\r\n          <span>{{testimonial.Company}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n<div class=\"center-text form-group\">\r\n  <button class=\"btn btn-primary btn-quantum-homepage\" (click)=\"openTestimonialForm()\" type=\"button\">Submit a testimonial</button>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "p5ak":
/*!***************************************************************!*\
  !*** ./src/app/shared/testimonials/testimonials.component.ts ***!
  \***************************************************************/
/*! exports provided: TestimonialsComponent, TestimonialImage, Testimonial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialImage", function() { return TestimonialImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testimonial", function() { return Testimonial; });
/* harmony import */ var _raw_loader_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./testimonials.component.html */ "nUCY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_testimonials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/testimonials.service */ "L5Bb");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-routing/route-paths */ "kerV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        this.router.navigate([_app_routing_route_paths__WEBPACK_IMPORTED_MODULE_5__["ROUTE_PATHS"].SUBMIT_TESTIMONIAL]);
    };
    TestimonialsComponent.prototype.getTestimonials = function () {
        this.testimonials = this.testimonialsService.getTestimonials();
    };
    TestimonialsComponent.ctorParameters = function () { return [
        { type: _services_testimonials_service__WEBPACK_IMPORTED_MODULE_2__["TestimonialsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    TestimonialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-testimonials",
            template: _raw_loader_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselConfig"], useValue: { interval: 8000, noPause: true, showIndicators: true } }
            ]
        }),
        __metadata("design:paramtypes", [_services_testimonials_service__WEBPACK_IMPORTED_MODULE_2__["TestimonialsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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

/***/ "pMXV":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/comments/comments.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sf-Comments\">\r\n  <div *ngIf=\"comments\" class=\"row sf-Comments-header\">\r\n    <div class=\"col-md-7\">\r\n      <h3>\r\n        <span class=\"comments-total-count\">{{commentsCount}} </span>\r\n        <span class=\"comments-header\">{{commentsCount === 1 ? 'comment' : 'comments'}}</span>\r\n      </h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"media-list sf-Comments-list\">\r\n    <div class=\"media sf-media\" *ngFor=\"let comment of comments\">\r\n      <div class=\"media-left sf-img-thmb\"><img [src]=\"comment.ProfilePictureUrl\" alt=\"author\"></div>\r\n      <div class=\"media-body sf-media-body\">\r\n        <span class=\"text-muted sf-Comments-list-author\">{{comment.Name}}</span>\r\n\r\n        <span class=\"text-muted pl-05\">{{comment.DateCreated | date:'medium'}}</span>\r\n        <p>{{comment.Message}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"showCommentsForm\" class=\"media sf-media\">\r\n    <div *ngIf=\"model.ProfilePictureUrl\" class=\"media-left sf-img-thmb\">\r\n      <img [src]=\"model.ProfilePictureUrl\" alt=\"\" width=\"40\" height=\"40\">\r\n    </div>\r\n    <div class=\"media-body sf-media-body\">\r\n      <form #f=\"ngForm\" (ngSubmit)=\"submitComment(f)\" class=\"form-group\">\r\n        <div class=\"form-group\">\r\n          <label class=\"sr-only\">Leave a comment</label>\r\n          <textarea [(ngModel)]=\"model.Message\" name=\"message\" class=\"form-control\" placeholder=\"Leave a comment\"></textarea>\r\n        </div>\r\n        <div>\r\n          <button class=\"btn btn-primary\">Submit</button>\r\n          <div *ngIf=\"creatingComment\" class=\"sf-loading mt-1\"><span></span></div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!showCommentsForm\" class=\"alert alert-info\">Please <a (click)=\"login()\">log in</a> to comment</div>\r\n</div>\r\n");

/***/ }),

/***/ "pW3b":
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitefinity.service */ "iiHt");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
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
        var tagsReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
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
    TaxaService.ctorParameters = function () { return [
        { type: _sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"] }
    ]; };
    TaxaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_sitefinity_service__WEBPACK_IMPORTED_MODULE_1__["SitefinityService"]])
    ], TaxaService);
    return TaxaService;
}());



/***/ }),

/***/ "pvuc":
/*!********************************************!*\
  !*** ./src/app/shared/common.constants.ts ***!
  \********************************************/
/*! exports provided: WINDOW_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_TOKEN", function() { return WINDOW_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var WINDOW_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("Window");


/***/ }),

/***/ "sRhs":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "xWrl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_taxa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/taxa.service */ "pW3b");
/* harmony import */ var _common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/rx-base/rx-base.component */ "lnPu");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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





var SidebarComponent = /** @class */ (function (_super) {
    __extends(SidebarComponent, _super);
    function SidebarComponent(taxaService) {
        var _this = _super.call(this) || this;
        _this.taxaService = taxaService;
        _this.tagsName = _services_taxa_service__WEBPACK_IMPORTED_MODULE_3__["tagsProperty"];
        _this.categoryName = _services_taxa_service__WEBPACK_IMPORTED_MODULE_3__["categoryProperty"];
        _this.taxaClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.tags = this.getTaxa(_services_taxa_service__WEBPACK_IMPORTED_MODULE_3__["tagsOptions"], _services_taxa_service__WEBPACK_IMPORTED_MODULE_3__["tagsProperty"]);
        this.categories = this.getTaxa(_services_taxa_service__WEBPACK_IMPORTED_MODULE_3__["categoriesOptions"], _services_taxa_service__WEBPACK_IMPORTED_MODULE_3__["categoryProperty"]);
    };
    SidebarComponent.prototype.onTaxaClicked = function (taxaName, taxa) {
        this.taxaClicked.emit({ taxaName: taxaName, taxa: taxa });
    };
    SidebarComponent.prototype.getTaxa = function (taxaOptions, propertyName) {
        var _this = this;
        var taxaReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
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
        { type: _services_taxa_service__WEBPACK_IMPORTED_MODULE_3__["TaxaService"] }
    ]; };
    SidebarComponent.propDecorators = {
        contentItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        taxaClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_services_taxa_service__WEBPACK_IMPORTED_MODULE_3__["TaxaService"]])
    ], SidebarComponent);
    return SidebarComponent;
}(_common_rx_base_rx_base_component__WEBPACK_IMPORTED_MODULE_4__["RxBaseComponent"]));



/***/ }),

/***/ "u+pc":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_news_newsitems_newsitems_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/news/newsitems/newsitems.component */ "htmu");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/not-found/not-found.component */ "OoyU");
/* harmony import */ var _shared_news_newsitem_newsitem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/news/newsitem/newsitem.component */ "mv1p");
/* harmony import */ var _shared_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/search/search-result/search-result.component */ "QXIk");
/* harmony import */ var _shared_showcases_showcases_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/showcases/showcases.component */ "MpaO");
/* harmony import */ var _shared_showcases_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/showcases/showcase/showcase.component */ "2Ouk");
/* harmony import */ var _shared_config_config_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/config/config.component */ "S46H");
/* harmony import */ var _config_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config.guard */ "xogg");
/* harmony import */ var _route_paths__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./route-paths */ "kerV");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/layout/layout.component */ "0MCZ");
/* harmony import */ var _shared_auth_oidc_sign_in_redirect_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/auth/oidc/sign-in-redirect/sign-in-redirect.component */ "cGQN");
/* harmony import */ var _shared_auth_oidc_sign_out_redirect_sign_out_redirect_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/auth/oidc/sign-out-redirect/sign-out-redirect.component */ "vbiN");
/* harmony import */ var _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/auth/auth.guard */ "WoVx");
/* harmony import */ var _shared_testimonials_testimonial_form_testimonial_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/testimonials/testimonial-form/testimonial-form.component */ "0rzf");
/* harmony import */ var _shared_auth_oauth_oauth_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/auth/oauth/oauth-sign-in-redirect.component */ "Qdx7");
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
        runGuardsAndResolvers: "always",
        children: [
            { path: "", redirectTo: "news", pathMatch: "full" },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].NEWS, component: _shared_news_newsitems_newsitems_component__WEBPACK_IMPORTED_MODULE_3__["NewsItemsComponent"], data: { title: "Quantum News", image: "News Head Banner" } },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].NEWS + "/:id", component: _shared_news_newsitem_newsitem_component__WEBPACK_IMPORTED_MODULE_5__["NewsItemComponent"] },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].SHOWCASES, component: _shared_showcases_showcases_component__WEBPACK_IMPORTED_MODULE_7__["ShowcasesComponent"], data: { title: "Showcases", image: "Development Head Banner" } },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].SHOWCASES + "/:id", component: _shared_showcases_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_8__["ShowcaseComponent"] },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].SEARCH_RESULTS + "/:searchTerm", component: _shared_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultComponent"], data: { title: "Search results", image: "Forums Head Banner" } },
            { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].SUBMIT_TESTIMONIAL, component: _shared_testimonials_testimonial_form_testimonial_form_component__WEBPACK_IMPORTED_MODULE_16__["TestimonialFormComponent"], canActivate: [_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] }
        ]
    },
    { path: "auth", children: [
            {
                path: "oidc", children: [
                    {
                        path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["AUTH_ROUTE_PATHS"].SIGN_IN_REDIRECT, component: _shared_auth_oidc_sign_in_redirect_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_13__["SignInRedirectComponent"]
                    },
                    {
                        path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["AUTH_ROUTE_PATHS"].SIGN_OUT_REDIRECT, component: _shared_auth_oidc_sign_out_redirect_sign_out_redirect_component__WEBPACK_IMPORTED_MODULE_14__["SignOutRedirectComponent"]
                    }
                ]
            },
            {
                path: "oauth", children: [
                    {
                        path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["AUTH_ROUTE_PATHS"].SIGN_IN_REDIRECT, component: _shared_auth_oauth_oauth_sign_in_redirect_component__WEBPACK_IMPORTED_MODULE_17__["OauthSignInRedirectComponent"]
                    }
                ]
            }
        ] },
    { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].CONFIG, component: _shared_config_config_component__WEBPACK_IMPORTED_MODULE_9__["ConfigComponent"] },
    { path: _route_paths__WEBPACK_IMPORTED_MODULE_11__["ROUTE_PATHS"].NOT_FOUND, component: _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: "reload" })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vbiN":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/auth/oidc/sign-out-redirect/sign-out-redirect.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SignOutRedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOutRedirectComponent", function() { return SignOutRedirectComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! oidc-client */ "3Rfw");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_route_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app-routing/route-paths */ "kerV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignOutRedirectComponent = /** @class */ (function () {
    function SignOutRedirectComponent(router) {
        this.router = router;
    }
    SignOutRedirectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var redirect = new oidc_client__WEBPACK_IMPORTED_MODULE_3__["UserManager"]({}).signoutRedirectCallback();
        var redirectAsObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(redirect);
        redirectAsObservable.subscribe(function () {
            // navigating to home should trigger login
            _this.router.navigate([_app_routing_route_paths__WEBPACK_IMPORTED_MODULE_4__["ROUTE_PATHS"].LAYOUT]);
        });
    };
    SignOutRedirectComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SignOutRedirectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sign-out-redirect",
            template: ""
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignOutRedirectComponent);
    return SignOutRedirectComponent;
}());



/***/ }),

/***/ "xWrl":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"(categories | async) && (tags | async)\" class=\"col-md-3 gray_column\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"sf-Long-text\">\r\n        <h5 class=\"text-align-left\">Categories</h5>\r\n      </div>\r\n      <app-taxa classes=\"list-unstyled categories-list\" [taxas]=\"categories | async\" (taxaClicked)=\"onTaxaClicked(categoryName, $event)\"></app-taxa>\r\n      <div class=\"sf-Long-text\">\r\n        <h5 class=\"text-align-left\">Tags</h5>\r\n      </div>\r\n      <app-taxa classes=\"categories-list list-unstyled\" [taxas]=\"tags | async\" (taxaClicked)=\"onTaxaClicked(tagsName, $event)\"></app-taxa>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "xogg":
/*!*********************************!*\
  !*** ./src/app/config.guard.ts ***!
  \*********************************/
/*! exports provided: ConfigGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigGuard", function() { return ConfigGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/settings.service */ "DiK8");
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
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
    ]; };
    ConfigGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], ConfigGuard);
    return ConfigGuard;
}());



/***/ }),

/***/ "xqZv":
/*!**********************************************!*\
  !*** ./src/app/shared/auth/auth.provider.ts ***!
  \**********************************************/
/*! exports provided: AUTH_PROVIDER_TOKEN, QuantumUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_PROVIDER_TOKEN", function() { return AUTH_PROVIDER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantumUser", function() { return QuantumUser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var AUTH_PROVIDER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("auth_provider");
var QuantumUser = /** @class */ (function () {
    function QuantumUser() {
    }
    return QuantumUser;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map