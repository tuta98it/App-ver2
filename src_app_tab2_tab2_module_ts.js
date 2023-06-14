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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




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
class Tab2PageRoutingModule {
}
Tab2PageRoutingModule.ɵfac = function Tab2PageRoutingModule_Factory(t) { return new (t || Tab2PageRoutingModule)(); };
Tab2PageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Tab2PageRoutingModule });
Tab2PageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Tab2PageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class Tab2PageModule {
}
Tab2PageModule.ɵfac = function Tab2PageModule_Factory(t) { return new (t || Tab2PageModule)(); };
Tab2PageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Tab2PageModule });
Tab2PageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
        _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Tab2PageModule, { declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
        _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule] }); })();


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
/* harmony import */ var _pages_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/base-page/base-page.component */ 7198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



class Tab2Page extends _pages_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_0__.BasePageComponent {
}
Tab2Page.ɵfac = /*@__PURE__*/ function () { let ɵTab2Page_BaseFactory; return function Tab2Page_Factory(t) { return (ɵTab2Page_BaseFactory || (ɵTab2Page_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Tab2Page)))(t || Tab2Page); }; }();
Tab2Page.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Tab2Page, selectors: [["app-tab2"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function Tab2Page_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-content");
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent], styles: ["ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  margin: 100px auto;\n}\nion-list[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-size: 10px;\n  float: right;\n  font-style: normal;\n  padding-top: 4px;\n}\nion-list[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%] {\n  display: flex;\n}\nion-list[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-right: 10px;\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  white-space: nowrap;\n  word-break: break-word;\n  margin-bottom: 5px;\n  width: 100%;\n  color: var(--ion-color-medium);\n}\nion-list[_ngcontent-%COMP%]   .message-title.false[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #333;\n}\nion-list[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  margin-left: 15px;\n}\nion-list[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\nion-list[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -0.4px;\n  white-space: normal;\n}\nion-list[_ngcontent-%COMP%]   .message-content.false[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFRTtFQUNFLGFBQUE7QUFBSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUNOO0FBR0k7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFETjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUZKO0FBR0k7RUFDRSxlQUFBO0FBRE47QUFJRTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRko7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUZKIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gIGlvbi1pdGVtIGlvbi1pbWcge1xyXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gIH1cclxuICBpb24tbGFiZWwgZW0ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbiAgLm1lc3NhZ2UtdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgc3BhbntcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICB9XHJcbiAgLm1lc3NhZ2UtdGl0bGUuZmFsc2V7XHJcbiAgICBzcGFue1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1hdmF0YXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubWVzc2FnZS1jb250ZW50e1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB9XHJcbiAgLm1lc3NhZ2UtY29udGVudC5mYWxzZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map