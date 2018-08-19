(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "\n<router-outlet></router-outlet>\n"

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
        this.title = 'personal-website';
        this.routes = [
            { linkName: 'Home', url: 'home' },
            { linkName: 'About', url: 'about' },
            { linkName: 'Work Experience', url: 'work%20experience' },
            { linkName: 'Education', url: 'education' },
            { linkName: 'Contact', url: 'contact' }
        ];
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/side-bar/side-bar.component */ "./src/app/home/side-bar/side-bar.component.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./title/title.component */ "./src/app/title/title.component.ts");
/* harmony import */ var _drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drop-down/drop-down.component */ "./src/app/drop-down/drop-down.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
                _home_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["SideBarComponent"],
                _title_title_component__WEBPACK_IMPORTED_MODULE_7__["TitleComponent"],
                _drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_8__["DropDownComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/drop-down/drop-down.component.css":
/*!***************************************************!*\
  !*** ./src/app/drop-down/drop-down.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Grid Code */\n/*\n.home { grid-area: home; }\n.about { grid-area: about; }\n.work-experience { grid-area: work-experience; }\n.education { grid-area: education; }\n.contact { grid-area: contact; }\n\n.grid-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    /*grid-auto-rows: minmax(100px, auto);\n    grid-template-areas:\n        'home about work-experience education contact';\n    grid-gap: 2px;\n    /*background-color: #2196F3;\n    padding: 10px;\n}\n\n.grid-container > div {\n    text-align: center;\n    padding: 20px 0;\n    font-size: 18px;\n    background-color: rgba(5, 28, 104, 0.8);\n}\n*/\n/* Drop Down Code */\n.dropbtn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n}\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n.dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n.dropdown-content a:hover {background-color: #ddd;}\n.dropdown:hover .dropdown-content {display: block;}\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\n/*\n.dropbtn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n\n.dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n\n.dropdown-content a:hover {background-color: #ddd;}\n.dropdown:hover .dropdown-content {display: block;}\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\n*/\na:hover, a:visited, a:link, a:active {\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/drop-down/drop-down.component.html":
/*!****************************************************!*\
  !*** ./src/app/drop-down/drop-down.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container text-white\">\n  <div class=\"dropdown\">\n      <button class=\"dropbtn\">Dropdown</button>\n      <div class=\"dropdown-content\">\n        <a href=\"#\">Link 1</a>\n        <a href=\"#\">Link 2</a>\n        <a href=\"#\">Link 3</a>\n      </div>\n    </div>\n    <div class=\"dropdown\">\n      <button class=\"dropbtn\">About</button>\n      <div class=\"dropdown-content\">\n        <a href=\"#\">Link 1</a>\n        <a href=\"#\">Link 2</a>\n        <a href=\"#\">Link 3</a>\n      </div>\n    </div>\n  </div>\n  <!--\n  <div class=\"home\">\n    <div class=\"dropdown\">\n        <button class=\"dropbtn\">Dropdown</button>\n        <div class=\"dropdown-content\">\n          <a href=\"#\">Link 1</a>\n          <a href=\"#\">Link 2</a>\n          <a href=\"#\">Link 3</a>\n        </div>\n        <!--\n        <span>\n          <a href=\"/home\">Home</a>\n        </span>\n        <div class=\"dropdown-content\">\n          <p>home</p>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"about\">\n    <div class=\"dropdown\">\n        <span>\n          <a href=\"/about\">About</a>\n        </span>\n        <div class=\"dropdown-content\">\n          <p>about</p>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"work-experience\">\n    <div class=\"dropdown\">\n        <span>\n          <a href=\"/work%20experience\">Work Experience</a>\n        </span>\n        <div class=\"dropdown-content\">\n          <p>work experience</p>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"education\">\n    <div class=\"dropdown\">\n        <span>\n          <a href=\"/education\">Education</a>\n        </span>\n        <div class=\"dropdown-content\">\n          <p>education</p>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"contact\">\n    <div class=\"dropdown\">\n        <span>\n          <a href=\"/contact\">Contact</a>\n        </span>\n        <div class=\"dropdown-content\">\n          <p>contact</p>\n        </div>\n    </div>\n  </div>\n  -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/drop-down/drop-down.component.ts":
/*!**************************************************!*\
  !*** ./src/app/drop-down/drop-down.component.ts ***!
  \**************************************************/
/*! exports provided: DropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownComponent", function() { return DropDownComponent; });
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

var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
    }
    DropDownComponent.prototype.ngOnInit = function () {
    };
    DropDownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drop-down',
            template: __webpack_require__(/*! ./drop-down.component.html */ "./src/app/drop-down/drop-down.component.html"),
            styles: [__webpack_require__(/*! ./drop-down.component.css */ "./src/app/drop-down/drop-down.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DropDownComponent);
    return DropDownComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.title { -ms-grid-row: 1; -ms-grid-column: 1; grid-area: title; align-self: center;}\n.header { grid-area: header; }\n.drop-down { -ms-grid-row: 1; -ms-grid-column: 3; grid-area: drop-down; }\n.main { -ms-grid-row: 3; -ms-grid-column: 3; grid-area: main; }\n.side-bar { -ms-grid-row: 3; -ms-grid-column: 1; grid-area: side-bar; }\n.footer { -ms-grid-row: 5; -ms-grid-column: 1; -ms-grid-column-span: 3; grid-area: footer; }\n.grid-container {\n    display: -ms-grid;\n    display: grid;\n        -ms-grid-columns: 2fr 10px 5fr;\n        grid-template-columns: 2fr 5fr;\n    /* grid-auto-rows: minmax(100px, auto); */\n    -ms-grid-rows: auto 10px auto 10px auto;\n        grid-template-areas:\n        'title drop-down'\n        'side-bar main'\n        'footer footer';\n    grid-gap: 10px;\n    /*background-color: #2196F3;*/\n    padding: 10px;\n}\n.grid-container > div {\n    text-align: center;\n    padding: 0px 0;\n    font-size: 30px;\n    /*background-color: rgba(255, 255, 255, 0.8); /* used to see grid */\n}\n.shadow {\n    box-shadow: 5px 10px rgba(0,0,0,0.2);\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<title>Personal Website</title>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<body class=\"light-grey text-black boarder shadow\">\n    <div class=\"grid-container\">\n        <div class=\"title\">\n          <app-title></app-title>\n        </div>\n        <div class=\"drop-down\">\n          <app-drop-down></app-drop-down>\n        </div>\n        <div class=\"side-bar\">\n          Side Bar\n          <!-- <app-side-bar></app-side-bar> -->\n        </div>  \n        <div class=\"main\">Main</div>\n        <div class=\"footer\">Footer</div>\n      </div>\n</body>\n\n<!--\n<body class=\"w3-light-grey\">\n\n<!-- Page Container -->\n<!--\n<div class=\"w3-content w3-margin-top\" style=\"max-width:1400px;\">\n\n  <!-- The Grid -->\n  <!--\n  <div class=\"w3-row-padding\">\n  \n    <!-- Left Column -->\n    <!--\n    <div class=\"w3-third\">\n      <app-side-bar></app-side-bar>\n    </div>\n\n    <!-- Right Column -->\n    <!--\n    <div class=\"w3-twothird\">\n    \n      <div class=\"w3-container w3-card w3-white w3-margin-bottom\">\n        <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Work Experience</h2>\n        <div class=\"w3-container\">\n          <h5 class=\"w3-opacity\"><b>Front End Developer / w3schools.com</b></h5>\n          <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>Jan 2015 - <span class=\"w3-tag w3-teal w3-round\">Current</span></h6>\n          <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>\n          <hr>\n        </div>\n        <div class=\"w3-container\">\n          <h5 class=\"w3-opacity\"><b>Web Developer / something.com</b></h5>\n          <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>Mar 2012 - Dec 2014</h6>\n          <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>\n          <hr>\n        </div>\n        <div class=\"w3-container\">\n          <h5 class=\"w3-opacity\"><b>Graphic Designer / designsomething.com</b></h5>\n          <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>Jun 2010 - Mar 2012</h6>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br>\n        </div>\n      </div>\n\n      <div class=\"w3-container w3-card w3-white\">\n        <h2 class=\"w3-text-grey w3-padding-16\"><i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Education</h2>\n        <div class=\"w3-container\">\n          <h5 class=\"w3-opacity\"><b>W3Schools.com</b></h5>\n          <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>Forever</h6>\n          <p>Web Development! All I need to know in one place</p>\n          <hr>\n        </div>\n        <div class=\"w3-container\">\n          <h5 class=\"w3-opacity\"><b>London Business School</b></h5>\n          <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>2013 - 2015</h6>\n          <p>Master Degree</p>\n          <hr>\n        </div>\n        <div class=\"w3-container\">\n          <h5 class=\"w3-opacity\"><b>School of Coding</b></h5>\n          <h6 class=\"w3-text-teal\"><i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>2010 - 2013</h6>\n          <p>Bachelor Degree</p><br>\n        </div>\n      </div>\n\n    <!-- End Right Column -->\n    <!--\n    </div>\n    \n  <!-- End Grid -->\n  <!--\n  </div>\n  \n  <!-- End Page Container -->\n  <!--\n</div>\n\n<footer class=\"w3-container w3-teal w3-center w3-margin-top\">\n  <p>Find me on social media.</p>\n  <i class=\"fa fa-facebook-official w3-hover-opacity\"></i>\n  <i class=\"fa fa-instagram w3-hover-opacity\"></i>\n  <i class=\"fa fa-snapchat w3-hover-opacity\"></i>\n  <i class=\"fa fa-pinterest-p w3-hover-opacity\"></i>\n  <i class=\"fa fa-twitter w3-hover-opacity\"></i>\n  <i class=\"fa fa-linkedin w3-hover-opacity\"></i>\n  <p>Powered by <a href=\"https://www.w3schools.com/w3css/default.asp\" target=\"_blank\">w3.css</a></p>\n</footer>\n\n</body>\n</html>\n-->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/side-bar/side-bar.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/side-bar/side-bar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/side-bar/side-bar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/side-bar/side-bar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"white text-grey card-4\">\n  <div class=\"display-container\">\n    <img src=\"assets/avatar_hat.jpg\" style=\"width:100%\" alt=\"Avatar\">\n    <div class=\"display-bottomleft container text-black\">\n      <h2>Jane Doe</h2>\n    </div>\n  </div>\n  <div class=\"container\">\n    <p><i class=\"fa fa-briefcase fa-fw margin-right large text-teal\"></i>Designer</p>\n    <p><i class=\"fa fa-home fa-fw margin-right large text-teal\"></i>London, UK</p>\n    <p><i class=\"fa fa-envelope fa-fw margin-right large text-teal\"></i>ex@mail.com</p>\n    <p><i class=\"fa fa-phone fa-fw margin-right large text-teal\"></i>1224435534</p>\n    <hr>\n\n    <p class=\"large\"><b><i class=\"fa fa-asterisk fa-fw margin-right text-teal\"></i>Skills</b></p>\n    <p>Adobe Photoshop</p>\n    <div class=\"light-grey round-xlarge small\">\n      <div class=\"container center round-xlarge teal\" style=\"width:90%\">90%</div>\n    </div>\n    <p>Photography</p>\n    <div class=\"light-grey round-xlarge small\">\n      <div class=\"container center round-xlarge teal\" style=\"width:80%\">\n        <div class=\"center text-white\">80%</div>\n      </div>\n    </div>\n    <p>Illustrator</p>\n    <div class=\"light-grey round-xlarge small\">\n      <div class=\"container center round-xlarge teal\" style=\"width:75%\">75%</div>\n    </div>\n    <p>Media</p>\n    <div class=\"light-grey round-xlarge small\">\n      <div class=\"container center round-xlarge teal\" style=\"width:50%\">50%</div>\n    </div>\n    <br>\n\n    <p class=\"large text-theme\"><b><i class=\"fa fa-globe fa-fw margin-right text-teal\"></i>Languages</b></p>\n    <p>English</p>\n    <div class=\"light-grey round-xlarge\">\n      <div class=\"round-xlarge teal\" style=\"height:24px;width:100%\"></div>\n    </div>\n    <p>Spanish</p>\n    <div class=\"light-grey round-xlarge\">\n      <div class=\"round-xlarge teal\" style=\"height:24px;width:55%\"></div>\n    </div>\n    <p>German</p>\n    <div class=\"light-grey round-xlarge\">\n      <div class=\"round-xlarge teal\" style=\"height:24px;width:25%\"></div>\n    </div>\n    <br>\n  </div>\n</div><br>"

/***/ }),

/***/ "./src/app/home/side-bar/side-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/side-bar/side-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
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

var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/home/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/home/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"center jumbo\"> Page Not Found </p>\n<div class=\"center large text-blue\">\n    <a href=\"/home\">Home Page</a>\n</div>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/title/title.component.css":
/*!*******************************************!*\
  !*** ./src/app/title/title.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/title/title.component.html":
/*!********************************************!*\
  !*** ./src/app/title/title.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img src=\"https://fontmeme.com/permalink/180817/afd87deb8cabbb256aee10a5b5c761d1.png\" alt=\"cursive-fonts\" border=\"0\">\n</div>"

/***/ }),

/***/ "./src/app/title/title.component.ts":
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
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

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.css */ "./src/app/title/title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Standard/Angular/personal-website/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/Standard/Angular/personal-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map