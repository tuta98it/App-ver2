"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    },
    {
        path: ':id',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _pages_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/base-page/base-page.component */ 7198);





let Tab2Page = class Tab2Page extends _pages_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__.BasePageComponent {
};
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-list ion-item ion-img {\n  margin: 100px auto;\n}\nion-list ion-label em {\n  font-size: 10px;\n  float: right;\n  font-style: normal;\n  padding-top: 4px;\n}\nion-list .message-title {\n  display: flex;\n}\nion-list .message-title span {\n  font-size: 15px;\n  margin-right: 10px;\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  white-space: nowrap;\n  word-break: break-word;\n  margin-bottom: 5px;\n  width: 100%;\n  color: var(--ion-color-medium);\n}\nion-list .message-title.false span {\n  font-weight: bold;\n  color: #333;\n}\nion-list ion-avatar {\n  margin-right: 15px;\n  margin-left: 15px;\n}\nion-list ion-avatar ion-icon {\n  font-size: 40px;\n}\nion-list .message-content {\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -0.4px;\n  white-space: normal;\n}\nion-list .message-content.false {\n  font-weight: bold;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFRTtFQUNFLGFBQUE7QUFBSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUNOO0FBR0k7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFETjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUZKO0FBR0k7RUFDRSxlQUFBO0FBRE47QUFJRTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRko7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUZKIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gIGlvbi1pdGVtIGlvbi1pbWcge1xyXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gIH1cclxuICBpb24tbGFiZWwgZW0ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbiAgLm1lc3NhZ2UtdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgc3BhbntcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICB9XHJcbiAgLm1lc3NhZ2UtdGl0bGUuZmFsc2V7XHJcbiAgICBzcGFue1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1hdmF0YXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubWVzc2FnZS1jb250ZW50e1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB9XHJcbiAgLm1lc3NhZ2UtY29udGVudC5mYWxzZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map