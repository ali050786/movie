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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      <app-logo></app-logo>\n    </div>\n    <div class=\"col-sm-10\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'movie-search';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _logo_component_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo-component/logo-component */ "./src/app/logo-component/logo-component.ts");
/* harmony import */ var _movie_list_component_movie_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-list-component/movie-list-component */ "./src/app/movie-list-component/movie-list-component.ts");
/* harmony import */ var _shared_movie_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/movie-services */ "./src/app/shared/movie-services.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _movie_list_component_movie_details_component_movie_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie-list-component/movie-details-component/movie-details-component */ "./src/app/movie-list-component/movie-details-component/movie-details-component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { CommonModule } from '@angular/common';







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _logo_component_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"],
                _movie_list_component_movie_list_component__WEBPACK_IMPORTED_MODULE_6__["MovieListComponent"],
                _movie_list_component_movie_details_component_movie_details_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetails"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'movies', component: _movie_list_component_movie_list_component__WEBPACK_IMPORTED_MODULE_6__["MovieListComponent"] },
                    { path: 'movies/:id', component: _movie_list_component_movie_details_component_movie_details_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetails"] },
                    { path: '', redirectTo: 'movies', pathMatch: 'full' }
                ])
                //CommonModule
            ],
            providers: [_shared_movie_services__WEBPACK_IMPORTED_MODULE_7__["MovieServices"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/logo-component/logo-component.css":
/*!***************************************************!*\
  !*** ./src/app/logo-component/logo-component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header span{\r\n    font-size:28px;\r\n    line-height: 150px;\r\n    padding:0 30px;\r\n    color: #515A60;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/logo-component/logo-component.html":
/*!****************************************************!*\
  !*** ./src/app/logo-component/logo-component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <span> {{name}}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/logo-component/logo-component.ts":
/*!**************************************************!*\
  !*** ./src/app/logo-component/logo-component.ts ***!
  \**************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
        this.name = "MovieFlix";
    }
    LogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo-component.html */ "./src/app/logo-component/logo-component.html"),
            styles: [__webpack_require__(/*! ./logo-component.css */ "./src/app/logo-component/logo-component.css")]
        })
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/movie-list-component/movie-details-component/movie-details-component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/movie-list-component/movie-details-component/movie-details-component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-details{\r\n    margin-top: 40px;\r\n    color:#fff;\r\n}\r\n\r\n.movie-details span{\r\n    color: #515A60;\r\n}\r\n\r\n.rating-boxs{    \r\n    background: rgba(0, 0, 0, 0.4);\r\n    padding-top:20px;\r\n}\r\n\r\n.rating-title{\r\n    color:#F14103;\r\n}\r\n\r\n.rating-value{\r\n   font-size: 2em;\r\n   margin-top:-24px;\r\n   font-weight: bold;  \r\n}"

/***/ }),

/***/ "./src/app/movie-list-component/movie-details-component/movie-details-component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/movie-list-component/movie-details-component/movie-details-component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movie-details\" >\r\n    <div class=\"row\" *ngIf=\"showdetails\">\r\n    <div class=\"col-sm-3\">\r\n        <img src=\"{{moviedetails.Poster}}\" class=\"img-fluid\" (click)=\"callme()\">\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n        <h1>{{moviedetails.Title}}</h1>\r\n        <p>Released on:<span> {{moviedetails.Year}}</span></p>\r\n        <p>Cast:<span> {{moviedetails.Actors}}</span></p>\r\n        <p>Plot: <span> {{moviedetails.Plot}}</span></p>\r\n        <div class=\"row rating-boxs\">\r\n            <div class=\"col-sm-4\"  *ngFor=\" let Rating of moviedetails.Ratings\">\r\n                <p class=\"rating-title\">{{Rating.Source}}</p>\r\n                <p class=\"rating-value\">{{Rating.Value}}</p>\r\n            </div>\r\n            \r\n            \r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/movie-list-component/movie-details-component/movie-details-component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/movie-list-component/movie-details-component/movie-details-component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MovieDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetails", function() { return MovieDetails; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_movie_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/movie-services */ "./src/app/shared/movie-services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieDetails = /** @class */ (function () {
    function MovieDetails(_route, movies) {
        this._route = _route;
        this.movies = movies;
        this.showdetails = false;
        this.Id = this._route.snapshot.params['id'];
    }
    MovieDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.movies.getMovieDetails(this.Id)
            .subscribe(function (data) { return _this.callme(data); });
    };
    MovieDetails.prototype.callme = function (data) {
        this.showdetails = true;
        this.moviedetails = data;
        console.log(data);
    };
    MovieDetails = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./movie-details-component.html */ "./src/app/movie-list-component/movie-details-component/movie-details-component.html"),
            styles: [__webpack_require__(/*! ./movie-details-component.css */ "./src/app/movie-list-component/movie-details-component/movie-details-component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_movie_services__WEBPACK_IMPORTED_MODULE_2__["MovieServices"]])
    ], MovieDetails);
    return MovieDetails;
}());



/***/ }),

/***/ "./src/app/movie-list-component/movie-list-component.css":
/*!***************************************************************!*\
  !*** ./src/app/movie-list-component/movie-list-component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movietitle{\r\n    color:#fff;\r\n    font-size: 1em;\r\n    margin-top: 10px;\r\n    \r\n\r\n}\r\n\r\n\r\n.btn-search{\r\n    margin-left:20px;\r\n    background: #F14103;\r\n    color:#fff;\r\n\r\n}\r\n\r\n\r\n.search-box{\r\n    border:none;\r\n    background:  #222D36;\r\n    border-bottom: 1px solid #515A60;\r\n    width: 400px;\r\n    color: #515A60;\r\n    font-size:2em;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    \r\n\r\n}\r\n\r\n\r\n.movieyear{\r\n    color: #515A60;\r\n    margin-top: -3px;\r\n    font-size: 0.9em;\r\n\r\n}\r\n\r\n\r\n.movie-item{\r\n    margin-top:40px;\r\n}\r\n\r\n\r\n.movie-item img{\r\n    max-height: 340px;\r\n    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5);\r\n}"

/***/ }),

/***/ "./src/app/movie-list-component/movie-list-component.html":
/*!****************************************************************!*\
  !*** ./src/app/movie-list-component/movie-list-component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"search\">\r\n        <input type=\"search\" class=\"search-box\" [(ngModel)]=\"userInput\" />\r\n        <button class=\"btn btn-search\" (click)=\"searchmovies()\"> Search\r\n            <i class=\"fa fa-search\"></i>\r\n        </button>\r\n      </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"userInput\">\r\n        \r\n        <div *ngFor=\" let movie of movieList\" class=\"movie-item col-md-3 \" >\r\n            <a [routerLink]=\"['/movies', movie.imdbID]\"><img src=\"{{movie.Poster}}\" class=\"img-fluid\" >\r\n            </a>\r\n            <div class=\"movietitle\">{{movie.Title}}</div>\r\n            <div class=\"movieyear\">{{movie.Year}}</div>\r\n        </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/movie-list-component/movie-list-component.ts":
/*!**************************************************************!*\
  !*** ./src/app/movie-list-component/movie-list-component.ts ***!
  \**************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_movie_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/movie-services */ "./src/app/shared/movie-services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(movie) {
        this.movie = movie;
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movie.getMovieList(this.userInput).subscribe(function (data) { return _this.movieList = data.Search; });
    };
    MovieListComponent.prototype.searchmovies = function () {
        var _this = this;
        this.movie.getMovieList(this.userInput).subscribe(function (data) { return _this.movieList = data.Search; });
    };
    MovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-movie-list",
            template: __webpack_require__(/*! ./movie-list-component.html */ "./src/app/movie-list-component/movie-list-component.html"),
            styles: [__webpack_require__(/*! ./movie-list-component.css */ "./src/app/movie-list-component/movie-list-component.css")]
        }),
        __metadata("design:paramtypes", [_shared_movie_services__WEBPACK_IMPORTED_MODULE_1__["MovieServices"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/shared/movie-services.ts":
/*!******************************************!*\
  !*** ./src/app/shared/movie-services.ts ***!
  \******************************************/
/*! exports provided: MovieServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieServices", function() { return MovieServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Imovie } from './movie-model'
var MovieServices = /** @class */ (function () {
    function MovieServices(http) {
        this.http = http;
        this.omdbApi = "4798fe44";
        this.userInput = "run";
    }
    MovieServices.prototype.getMovieList = function (userInput) {
        //this.MovieList = "here is the movie list";
        this._url = "http://www.omdbapi.com/?s=" + userInput + "&apikey=" + this.omdbApi;
        return this.http.get(this._url);
    };
    MovieServices.prototype.getMovieDetails = function (id) {
        return this.http.get("http://www.omdbapi.com/?i=" + id + "&apikey=4798fe44");
    };
    MovieServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieServices);
    return MovieServices;
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

module.exports = __webpack_require__(/*! C:\Users\ali05\OneDrive\Desktop\movie-search\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map