"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 5355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 2486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4-routing.module */ 5355);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page */ 3631);







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab4PageRoutingModule,
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_1__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page.html?ngResource */ 7520);
/* harmony import */ var _tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss?ngResource */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _pages_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/base-page/base-page.component */ 7198);





let Tab4Page = class Tab4Page extends _pages_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__.BasePageComponent {
};
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab4',
        template: _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab4Page);



/***/ }),

/***/ 7432:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".conv-item h2 {\n  font-size: 16px;\n  color: #222;\n}\n\n.div-message {\n  display: flex;\n}\n\n.div-message .last-message {\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  white-space: nowrap;\n  word-break: break-word;\n  font-size: 14px;\n  line-height: 22px;\n  color: #777;\n}\n\n.div-message .time {\n  font-size: 10px;\n  font-weight: lighter;\n  line-height: 22px;\n}\n\n.div-message .dot {\n  padding: 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFERTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFERTtFQUNFLGNBQUE7QUFHSiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb252LWl0ZW0gaDJ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMjIyO1xyXG59XHJcbi5kaXYtbWVzc2FnZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC5sYXN0LW1lc3NhZ2V7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbiAgLnRpbWV7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuICAuZG90e1xyXG4gICAgcGFkZGluZzogMCAzcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 7520:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map