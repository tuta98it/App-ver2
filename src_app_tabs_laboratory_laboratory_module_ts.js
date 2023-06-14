"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_laboratory_laboratory_module_ts"],{

/***/ 6534:
/*!**************************************************!*\
  !*** ./src/app/shared/pipe/order-status.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderStatusPipe": () => (/* binding */ OrderStatusPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class OrderStatusPipe {
    transform(value, listOrderStatus) {
        const statusValue = listOrderStatus.find((objStatus) => objStatus.id === value);
        return statusValue.name;
    }
}
OrderStatusPipe.ɵfac = function OrderStatusPipe_Factory(t) { return new (t || OrderStatusPipe)(); };
OrderStatusPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderStatus", type: OrderStatusPipe, pure: true });


/***/ }),

/***/ 2048:
/*!**************************************************************!*\
  !*** ./src/app/tabs/laboratory/laboratory-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaboratoryPageRoutingModule": () => (/* binding */ LaboratoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _laboratory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./laboratory.page */ 9138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _laboratory_page__WEBPACK_IMPORTED_MODULE_0__.LaboratoryPage,
    }
];
class LaboratoryPageRoutingModule {
}
LaboratoryPageRoutingModule.ɵfac = function LaboratoryPageRoutingModule_Factory(t) { return new (t || LaboratoryPageRoutingModule)(); };
LaboratoryPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LaboratoryPageRoutingModule });
LaboratoryPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LaboratoryPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4888:
/*!******************************************************!*\
  !*** ./src/app/tabs/laboratory/laboratory.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaboratoryPageModule": () => (/* binding */ LaboratoryPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _laboratory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./laboratory.page */ 9138);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ 581);
/* harmony import */ var _laboratory_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./laboratory-routing.module */ 2048);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 5209);
/* harmony import */ var src_app_shared_modules_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/share.module */ 3913);
/* harmony import */ var src_app_shared_pipe_order_status_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pipe/order-status.pipe */ 6534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);










class LaboratoryPageModule {
}
LaboratoryPageModule.ɵfac = function LaboratoryPageModule_Factory(t) { return new (t || LaboratoryPageModule)(); };
LaboratoryPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: LaboratoryPageModule });
LaboratoryPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__.AppVersion], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
        _laboratory_routing_module__WEBPACK_IMPORTED_MODULE_2__.LaboratoryPageRoutingModule,
        src_app_shared_modules_share_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LaboratoryPageModule, { declarations: [_laboratory_page__WEBPACK_IMPORTED_MODULE_0__.LaboratoryPage, src_app_shared_pipe_order_status_pipe__WEBPACK_IMPORTED_MODULE_5__.OrderStatusPipe], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
        _laboratory_routing_module__WEBPACK_IMPORTED_MODULE_2__.LaboratoryPageRoutingModule,
        src_app_shared_modules_share_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 9138:
/*!****************************************************!*\
  !*** ./src/app/tabs/laboratory/laboratory.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaboratoryPage": () => (/* binding */ LaboratoryPage)
/* harmony export */ });
/* harmony import */ var C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/constant.class */ 6443);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_shared_pipe_is_empty_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pipe/is-empty.pipe */ 4904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/photo.service */ 1957);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 1188);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/notification.service */ 2013);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/main.service */ 1557);
/* harmony import */ var _services_badge_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/badge.service */ 9744);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 5209);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/order.service */ 8132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/general-service */ 888);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_pipe_order_status_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/pipe/order-status.pipe */ 6534);




















const _c0 = ["popoverFormFilter"];
const _c1 = ["orderStatusSelect"];

function LaboratoryPage_ng_template_10_ion_select_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-select-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const order_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", order_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](order_r9.name);
  }
}

function LaboratoryPage_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "L\u1ECDc d\u1EEF li\u1EC7u theo ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-list")(4, "ion-item", 15)(5, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, " T\u00EAn b\u1EC7nh nh\u00E2n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LaboratoryPage_ng_template_10_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r10.formFilterTestSheet.namePatient = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-item", 15)(10, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LaboratoryPage_ng_template_10_Template_ion_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r12.formFilterTestSheet.phoneNoPatient = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ion-item", 15)(15, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, " Tr\u1EA1ng th\u00E1i \u0110\u01A1n h\u00E0ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "ion-select", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function LaboratoryPage_ng_template_10_Template_ion_select_ionChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r13.handleChangeSelectOrderStatus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, LaboratoryPage_ng_template_10_ion_select_option_20_Template, 2, 2, "ion-select-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "ion-buttons", 25)(22, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LaboratoryPage_ng_template_10_Template_ion_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r14.cancelFormFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LaboratoryPage_ng_template_10_Template_ion_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r15.restartFormFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LaboratoryPage_ng_template_10_Template_ion_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r16.onSearchByFormFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r1.formFilterTestSheet.namePatient);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r1.formFilterTestSheet.phoneNoPatient);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("interfaceOptions", ctx_r1.customPopoverOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.initDatas.orderStatus);
  }
}

function LaboratoryPage_ion_select_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-select-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const time_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", time_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", time_r17.name, " ");
  }
}

function LaboratoryPage_ion_item_17_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-datetime", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LaboratoryPage_ion_item_17_ng_template_5_Template_ion_datetime_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r20.filterInterval.pastTime = $event);
    })("ionChange", function LaboratoryPage_ion_item_17_ng_template_5_Template_ion_datetime_ionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r22.handleChangeFilterIntervalCustomByUser($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Ch\u1ECDn th\u1EDDi gian b\u1EAFt \u0111\u1EA7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r18.filterInterval.pastTime)("showDefaultTitle", true)("showDefaultButtons", true)("showClearButton", true);
  }
}

function LaboratoryPage_ion_item_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-item")(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "T\u1EEB ng\u00E0y: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-datetime-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-modal", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, LaboratoryPage_ion_item_17_ng_template_5_Template, 4, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("keepContentsMounted", true);
  }
}

function LaboratoryPage_ion_item_18_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-datetime", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LaboratoryPage_ion_item_18_ng_template_5_Template_ion_datetime_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r25.filterInterval.presentTime = $event);
    })("ionChange", function LaboratoryPage_ion_item_18_ng_template_5_Template_ion_datetime_ionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r27.handleChangeFilterIntervalCustomByUser($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Ch\u1ECDn th\u1EDDi gian b\u1EAFt \u0111\u1EA7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r23.filterInterval.presentTime)("showDefaultTitle", true)("showDefaultButtons", true)("showClearButton", true)("min", ctx_r23.filterInterval.pastTime);
  }
}

function LaboratoryPage_ion_item_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-item")(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u0110\u1EBFn ng\u00E0y: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-datetime-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-modal", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, LaboratoryPage_ion_item_18_ng_template_5_Template, 4, 5, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("keepContentsMounted", true);
  }
}

function LaboratoryPage_ion_item_21_h3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const order_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 3, order_r28.dateCreated, "ddMMyy"), "-", order_r28.code, " ", order_r28.patient.name, "");
  }
}

function LaboratoryPage_ion_item_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 46)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h3", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const order_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](order_r28.patient.phoneNo);
  }
}

function LaboratoryPage_ion_item_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 46)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const order_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](order_r28.patient.address);
  }
}

function LaboratoryPage_ion_item_21_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 46)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h3", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const order_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](order_r28.chanDoan);
  }
}

function LaboratoryPage_ion_item_21_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 51)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "orderStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const order_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r34.initDatas ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](3, 1, order_r28.status, ctx_r34.initDatas == null ? null : ctx_r34.initDatas.orderStatus) : order_r28.status);
  }
}

function LaboratoryPage_ion_item_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, LaboratoryPage_ion_item_21_h3_2_Template, 3, 6, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "isEmpty");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, LaboratoryPage_ion_item_21_div_4_Template, 5, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "isEmpty");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, LaboratoryPage_ion_item_21_div_6_Template, 5, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "isEmpty");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, LaboratoryPage_ion_item_21_div_8_Template, 5, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "isEmpty");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, LaboratoryPage_ion_item_21_div_10_Template, 4, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "isEmpty");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const order_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 5, order_r28.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 7, order_r28.patient.phoneNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 9, order_r28.patient.address));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](9, 11, order_r28.chanDoan));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 13, order_r28.status));
  }
}

function LaboratoryPage_ng_template_23_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*T\u00EAn b\u1EC7nh nh\u00E2n kh\u00F4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function LaboratoryPage_ng_template_23_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*S\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\u00F4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function LaboratoryPage_ng_template_23_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*\u0110\u1ECBa ch\u1EC9 kh\u00F4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function LaboratoryPage_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 52)(3, "ion-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LaboratoryPage_ng_template_23_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r43.setOpenModalAddPatient(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Hu\u1EF7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-buttons", 54)(8, "ion-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LaboratoryPage_ng_template_23_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r45.saveModalAddPatient());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "L\u01B0u");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-content", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div")(13, "ion-col")(14, "ion-item")(15, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, " T\u00EAn b\u1EC7nh nh\u00E2n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ion-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LaboratoryPage_ng_template_23_Template_ion_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r46.itemPatientFormModalLab.name = $event);
    })("keyup", function LaboratoryPage_ng_template_23_Template_ion_input_keyup_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r47.onKeyUpInputNamePatient());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, LaboratoryPage_ng_template_23_span_21_Template, 2, 0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "ion-col")(23, "ion-item")(24, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "ion-input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LaboratoryPage_ng_template_23_Template_ion_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r48.itemPatientFormModalLab.phone = $event);
    })("keyup", function LaboratoryPage_ng_template_23_Template_ion_input_keyup_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r49.onKeyUpInputNumberPhone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, LaboratoryPage_ng_template_23_span_30_Template, 2, 0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "ion-col")(32, "ion-item")(33, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, " \u0110\u1ECBa ch\u1EC9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "ion-input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LaboratoryPage_ng_template_23_Template_ion_input_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r50.itemPatientFormModalLab.address = $event);
    })("keyup", function LaboratoryPage_ng_template_23_Template_ion_input_keyup_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r51.onKeyUpInputAddress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](39, LaboratoryPage_ng_template_23_span_39_Template, 2, 0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "ion-item")(41, "ion-label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](42, "ion-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, " Ghi ch\u00FA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "ion-input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LaboratoryPage_ng_template_23_Template_ion_input_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r52.itemPatientFormModalLab.notes = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "div", 64)(46, "ion-buttons", 65)(47, "ion-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LaboratoryPage_ng_template_23_Template_ion_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r53.nextModalPatient());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, " L\u01B0u v\u00E0 th\u00EAm m\u1EDBi ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r6.titleModalAddPatient);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("innerHTML", ctx_r6.instructionModalPatient, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r6.itemPatientFormModalLab.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r6.validFormInput.isEmptyFullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r6.itemPatientFormModalLab.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r6.validFormInput.isEmptyNumberPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r6.itemPatientFormModalLab.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r6.validFormInput.isEmptyAdress);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r6.itemPatientFormModalLab.notes);
  }
}

class LaboratoryPage {
  constructor(photoService, popoverController, router, platform, localStorage, storage, navCtrl, pickerCtrl, actionSheetCtrl, notificationService, mainService, badgeService, appVersion, alertController, orderService, loadingCtrl, datePipe, generalService) {
    this.photoService = photoService;
    this.popoverController = popoverController;
    this.router = router;
    this.platform = platform;
    this.localStorage = localStorage;
    this.storage = storage;
    this.navCtrl = navCtrl;
    this.pickerCtrl = pickerCtrl;
    this.actionSheetCtrl = actionSheetCtrl;
    this.notificationService = notificationService;
    this.mainService = mainService;
    this.badgeService = badgeService;
    this.appVersion = appVersion;
    this.alertController = alertController;
    this.orderService = orderService;
    this.loadingCtrl = loadingCtrl;
    this.datePipe = datePipe;
    this.generalService = generalService;
    this.isPopoverOpenFilter = false;
    this.titleModalAddPatient = 'Thêm yêu cầu';
    this.instructionModalPatient = 'Mời nhập thông tin bệnh nhân đầu tiên:';
    this.numberOfNewPatients = 0;
    this.isModalOpenFormPatient = false;
    this.validFormInput = {
      // isEmptyRequestType: false,
      isEmptyFullName: false,
      isEmptyNumberPhone: false,
      isEmptyAdress: false
    };
    this.customPopoverOptions = {
      // header: 'Trạng thái đơn hàng',
      subHeader: 'Chọn trạng thái đơn hàng cần lọc' // message: 'Chỉ chọn một TTĐH',

    };
    this.itemPatientFormModalLab = {
      valueRequestType: 0,
      name: '',
      phone: '',
      address: '',
      timeSample: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss'),
      notes: ''
    };
    this.listPatientLab = [{
      name: '1234-1643 Trần Văn A',
      phone: '0981123574',
      address: 'CT6 Khu đô thị Việt Hưng, Long Biên, Hà Nội',
      conditon: 'Viêm loét dạ dày tá tràng',
      status: 'Chưa nhận yêu cầu',
      notes: ''
    }, {
      name: '1234 - 2341 Trần Thị Lý',
      phone: '0234538592',
      address: '257 Giải phóng, Hai Bà Trưng, Hà Nội',
      conditon: 'Sốt xuất huyết',
      status: 'Đã nhận yêu cầu và đang xử lý',
      notes: ''
    }, {
      name: '1234 - 1643 Lý Thuỳ Linh',
      phone: '0903245394',
      address: '40 Phường Liệt, Thanh Xuân, Hà Nội',
      conditon: 'Viêm gan A',
      status: 'Đã trả kết quả',
      notes: ''
    }]; // Danh sách các Phiểu xét nghiếm

    this.listOrder = []; // Danh sách yêu cầu Xét nghiệm

    this.listRequest = []; // Danh sách đối tác

    this.listPartner = []; // Danh sách các loại yêu cầu

    this.listTypeOrder = []; // Form lọc theo filter

    this.formFilterTestSheet = {
      namePatient: '',
      phoneNoPatient: '',
      orderStatus: 0
    };
    this.filterInterval = {
      isShow: false,
      presentTime: '',
      pastTime: ''
    };
    this.customAlertOptionsRequestType = {
      header: 'Chọn loại yêu cầu',
      // subHeader: '',
      // message: '',
      translucent: true
    };
    this.now = new Date();
    this.listPatientLab = [{
      name: '1234-1643 Trần Văn A',
      phone: '0981123574',
      address: 'CT6 Khu đô thị Việt Hưng, Long Biên, Hà Nội',
      conditon: 'Viêm loét dạ dày tá tràng',
      status: 'Chưa nhận yêu cầu',
      notes: ''
    }, {
      name: '1234 - 2341 Trần Thị Lý',
      phone: '0234538592',
      address: '257 Giải phóng, Hai Bà Trưng, Hà Nội',
      conditon: 'Sốt xuất huyết',
      status: 'Đã nhận yêu cầu và đang xử lý',
      notes: ''
    }, {
      name: '1234 - 1643 Lý Thuỳ Linh',
      phone: '0903245394',
      address: '40 Phường Liệt, Thanh Xuân, Hà Nội',
      conditon: 'Viêm gan A',
      status: 'Đã trả kết quả',
      notes: ''
    }];
  }

  onKeyUpInputNamePatient() {
    // Set is show message error Fullname
    this.validFormInput.isEmptyFullName = this.isEmpty(this.itemPatientFormModalLab.name);
  }

  onKeyUpInputNumberPhone() {
    // Set is show message error Numberphone
    this.validFormInput.isEmptyNumberPhone = this.isEmpty(this.itemPatientFormModalLab.phone);
  }

  onKeyUpInputAddress() {
    // Set is show message error Address
    this.validFormInput.isEmptyAdress = this.isEmpty(this.itemPatientFormModalLab.address);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillEnter() {
    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('ionViewWillEnter');
    })();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('ngOnInit');

      _this.localStorage.getSelectedUser().then(res => {
        _this.userInfo = res;
      }); // Lấy dữ liệu cho biến DS Dữ liệu khởi tạo


      yield _this.getListInitialData(); // Lấy dữ liệu danh sách phiếu xét nghiệm

      const payload = {
        barcode: '',
        patient: '',
        status: 0,
        fromDate: '',
        toDate: '',
        assignToUserId: 0,
        counselors: null,
        partnerId: 0,
        isSendSMS: null,
        isPrintResult: null,
        patientAge: null,
        phoneNo: null,
        keyword: '',
        pageSize: 50,
        page: 1
      };
      yield _this.getListOrder(payload, true); // Lấy dữ liệu danh sách yêu cầu xét nghiệm
      // const payload = {
      //   page: 1,
      //   pageSize: 50,
      //   fromDate: null,
      //   toDate: null,
      //   phone: null,
      //   partnerId: null,
      //   receiveUserId: null,
      //   called: null,
      //   arrived: null,
      //   arrivedLabo: null,
      //   warning: null,
      //   received: null,
      //   requestTypeId: null,
      //   userCreated: null,
      //   canceled: false
      // };
      // await this.getListRequestByPayload(payload, true);
      // Lấy danh sách loại yêu cầu

      yield _this.getListOrderType(); // Lấy dữ liệu danh sách các đối tác
      // await this.getListPartner();
    })();
  }

  showLoading() {
    var _this2 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingCtrl.create({
        message: 'Dữ liệu đang tải lên ...',
        duration: 2000
      });
      loading.present();
    })();
  }

  getListOrder(payload, isLoading) {
    // Show thông báo delay thời gian chờ loading dữ liệu
    if (isLoading) {
      this.showLoading();
    }

    this.orderService.getOrders(payload).subscribe(res => {
      if (res != null) {
        this.listOrder = res.data;
        console.log('this.listOrder : ', this.listOrder);
      }
    }, error => {
      if (error.status === 403) {
        this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, `Người dùng có quyền truy cập`);
        this.router.navigate(['/login']);
      } else {
        this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, `Dữ liệu trả về đã có lỗi xảy ra`);
      }
    });
  }

  getListOrderType() {
    this.generalService.getListRequestType().subscribe(res => {
      if (res !== null) {
        console.log('getListOrderType res: ', res);
        this.listTypeOrder = res.filter(en => en.requestTypeCode === 'LM' || en.requestTypeCode === 'TM');
      }
    }, error => {});
  } // getListRequestByPayload(payload: any, isLoading: boolean) {
  //   // Show thông báo delay thời gian chờ loading dữ liệu
  //   if (isLoading) {
  //     this.showLoading();
  //   }
  //   this.generalService.getRequest(payload).subscribe(
  //     (res: any) => {
  //       if (res != null) {
  //         this.listRequest = res.data;
  //         console.log('this.listRequest : ', this.listRequest);
  //       }
  //     },
  //     (error) => {
  //       if (error.status === 403) {
  //         this.notificationService.showMessage(Constant.DANGER, `Người dùng có quyền truy cập`);
  //         this.router.navigate(['/login']);
  //       } else {
  //         this.notificationService.showMessage(Constant.DANGER, `Dữ liệu trả về đã có lỗi xảy ra`);
  //       }
  //     });
  // }


  getListInitialData() {
    this.initDatas = JSON.parse(localStorage.getItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.INIT_DATA));
  }

  presentPopoverFilter(e) {
    this.popoverFormFilter.event = e;
    this.isPopoverOpenFilter = true;
  }

  getListPartner() {
    this.generalService.getListPartner().subscribe(res => {
      this.listPartner = res;
    }, error => {});
  }

  showProfile() {}

  logout() {
    this.localStorage.clearAll();
    this.popoverController.dismiss();
    this.router.navigate(['/']);
  }

  doRefresh($event) {}

  setOpenModalAddPatient(isOpen) {
    this.isModalOpenFormPatient = isOpen;
  }

  openModalPatientLab() {
    // Reset lại lời dẫn
    this.instructionModalPatient = 'Mời nhập thông tin bệnh nhân đầu tiên:';
    this.numberOfNewPatients = 0;
    this.resetFormModalPatient();
    this.restartValidFormAddPatient();
    this.setOpenModalAddPatient(true);
  }

  restartValidFormAddPatient() {
    this.validFormInput.isEmptyAdress = false;
    this.validFormInput.isEmptyFullName = false;
    this.validFormInput.isEmptyNumberPhone = false; // this.validFormInput.isEmptyRequestType = false;
  }

  cancelModalAddPatient() {
    this.setOpenModalAddPatient(false); // this.modal.dismiss(null, 'cancel');
  }

  confirmPatientModal() {
    const isName = !this.isEmpty(this.itemPatientFormModalLab.name);
    this.validFormInput.isEmptyFullName = !isName;
    const isPhone = !this.isEmpty(this.itemPatientFormModalLab.phone);
    this.validFormInput.isEmptyNumberPhone = !isPhone;
    const isAddress = !this.isEmpty(this.itemPatientFormModalLab.address);
    this.validFormInput.isEmptyAdress = !isAddress; // const isRequest = !(this.itemPatientFormModalLab.valueRequestType === 0);
    // this.validFormInput.isEmptyRequestType = !isRequest;

    return isName && isPhone && isAddress;
  }

  saveModalAddPatient() {
    if (this.confirmPatientModal()) {
      // Thêm mới một item Patient
      this.listPatientLab.push(JSON.parse(JSON.stringify(this.itemPatientFormModalLab)));
      const item = {
        id: 0,
        patientId: null,
        code: null,
        name: null,
        orderDoctor: null,
        orderDate: null,
        visitCode: null,
        visiteDate: null,
        chanDoan: null,
        khoa: null,
        buong: null,
        giuong: null,
        status: null,
        phoneNo: null,
        address: null,
        note: this.itemPatientFormModalLab.notes,
        partnerId: null,
        details: [{
          orderTypeId: null,
          price: null
        }],
        paymentType: 1,
        patient: {
          id: null,
          code: null,
          name: this.itemPatientFormModalLab.name,
          sex: null,
          dob: null,
          yob: null,
          cmnd: null,
          address: this.itemPatientFormModalLab.address,
          phoneNo: this.itemPatientFormModalLab.phone,
          email: null
        },
        momWeight: null,
        momHeightCM: null,
        ultrasoundDate: null,
        gestationalWeek: null,
        gestationalDay: null,
        pregnancyNo: null,
        fetusAmount: null,
        nt: null,
        crl: null,
        expectedDateOfBirth: null,
        requestId: null,
        lat: null,
        lng: null,
        assignToUserId: null,
        specimenID: null,
        privateNote: null,
        discountPaymentType: null,
        extraDiscountPaymentType: null,
        bsdiscountPaymentType: null,
        paidType: null,
        utmSource: null,
        dateTakenSpecimen: null,
        addressLongitude: null,
        addressLatitude: null
      }; // this.orderService.

      this.generalService.createOrder(item).subscribe(res => {
        if (res.isValid) {
          // console.log('generalService res', res );
          // Reset form model lab
          this.resetFormModalPatient();
          this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.SUCCESS, `Đã tạo phiếu xét nghiệm cho BN ${this.itemPatientFormModalLab.name}`); // Đóng modal

          this.setOpenModalAddPatient(false);
        } else {
          this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, `Đã có lỗi : ${res.errors[0].errorMessage}`);
        }
      }, error => {
        this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, `Đã có lỗi 1`);
      }, ret => {
        this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, `Đã có lỗi ${ret[0].errorMessage}`);
      });
      this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, `Lỗi ngoài phạm vi xử lý, nghiệm vụ chưa hoàn chỉnh`);
    } else {
      this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, `Đã có lỗi 2`);
    }
  }

  nextModalPatient() {
    if (this.confirmPatientModal()) {
      // Thêm mới một item Patient
      this.listPatientLab.push(JSON.parse(JSON.stringify(this.itemPatientFormModalLab))); // Thêm +1 bệnh nhân thành công. Tăng biến đếm số lượng bệnh nhân thêm mới thành công lên 1

      this.numberOfNewPatients++; // Thay đổ lời đầu modal kkhi thêm mới

      this.instructionModalPatient = `Đã thêm <strong>${this.numberOfNewPatients}</strong> bệnh nhân. Mời nhập thông tin bệnh nhân tiếp theo:`; // Reset form model lab

      this.resetFormModalPatient();
    }

    ;
  }

  onWillDismiss(event) {
    const ev = event;

    if (ev.detail.role === 'confirm') {} else if (ev.detail.role === 'next') {}
  }

  resetFormModalPatient() {
    this.itemPatientFormModalLab = {
      valueRequestType: 0,
      name: '',
      phone: '',
      address: '',
      timeSample: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss'),
      notes: ''
    };
  }

  handleChangeSearch(event) {
    var _this3 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.keywordSearch = event.target.value;
      const payload = {
        barcode: null,
        patient: null,
        status: null,
        fromDate: _this3.filterInterval.pastTime,
        toDate: _this3.filterInterval.presentTime,
        assignToUserId: null,
        counselors: null,
        partnerId: null,
        isSendSMS: null,
        isPrintResult: null,
        patientAge: null,
        phoneNo: null,
        keyword: _this3.keywordSearch,
        pageSize: 50,
        page: 1
      };
      yield _this3.getListOrder(payload, false);
    })();
  }

  handleChangeSelectOrderStatus(event) {
    var _this4 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.formFilterTestSheet.orderStatus = event.target.value;
    })();
  }

  handleChangeFilterInterval(event) {
    var _this5 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const value = event.target.value; // let isShowFilterInterval = this.filterInterval.isShow;

      const pastTime = new Date();
      const presentTime = new Date();
      pastTime.setHours(0, 0, 0, 0); // Get the current day of the week (0-6, where Sunday is 0)

      const currentDay = presentTime.getDay(); // Subtract the number of days elapsed in the current week

      let daysToSubtract;

      switch (value) {
        case 1:
          _this5.filterInterval.isShow = false;
          daysToSubtract = 0;
          pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log('Đầu ngày hôm nay', pastTime);

          break;

        case 2:
          // Subtract 1 day
          _this5.filterInterval.isShow = false;
          daysToSubtract = 1;
          pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log('Cách đây 1 ngày trước', pastTime);

          break;

        case 3:
          // Subtract 7 day
          _this5.filterInterval.isShow = false;
          daysToSubtract = 7;
          pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log('Cách đây 7 ngày', pastTime);

          break;

        case 4:
          // Subtract 14 day
          _this5.filterInterval.isShow = false;
          daysToSubtract = 14;
          pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log('Cách đây 14 ngày', pastTime);

          break;

        case 5:
          // Subtract 30 day
          _this5.filterInterval.isShow = false;
          daysToSubtract = 30;
          pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log('Cách đây 30 ngày', pastTime);

          break;

        case 6:
          // Đầu tuần này
          _this5.filterInterval.isShow = false;
          daysToSubtract = currentDay === 0 ? 6 : currentDay - 1;
          pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log('Đầu tuần này', pastTime);

          break;

        case 7:
          // Đầu tuần trước
          _this5.filterInterval.isShow = false;
          daysToSubtract = currentDay + 7 - 1;
          console.log('daysToSubtract', daysToSubtract);
          pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log(' Đầu tuần trước', pastTime);

          break;

        case 8:
          // Đầu tháng này
          _this5.filterInterval.isShow = false;
          pastTime.setDate(1); // console.log('Đầu tháng này', pastTime);

          break;

        case 9:
          // Đầu tháng trước
          _this5.filterInterval.isShow = false; // Set the date to the first day of the current mounth

          pastTime.setDate(1); // Subtract one month from the date

          pastTime.setMonth(pastTime.getMonth() - 1); // console.log('Đầu tháng trước ', pastTime);

          break;

        case 10:
          // Hiện calender cho hai thời điểm lọc dữ liệu.
          _this5.filterInterval.isShow = true;
          break;

        default:
          break;
      } // Đặt dữ liệu ban đầu cho khoảng thời gian lọc dữ liệu
      // Bắt đầu - Thời điểm 0h ngày hôm nay


      _this5.filterInterval.pastTime = _this5.datePipe.transform(pastTime, 'yyyy-MM-ddTHH:mm:ss'); // console.log('this.filterInterval.pastTime : ', this.filterInterval.pastTime );
      // Kết thúc - Thời điểm hiện tại

      _this5.filterInterval.presentTime = _this5.datePipe.transform(presentTime, 'yyyy-MM-ddTHH:mm:ss');
      const payload = {
        barcode: null,
        patient: null,
        status: null,
        fromDate: pastTime,
        toDate: presentTime,
        assignToUserId: null,
        counselors: null,
        partnerId: null,
        isSendSMS: null,
        isPrintResult: null,
        patientAge: null,
        phoneNo: null,
        keyword: _this5.keywordSearch,
        pageSize: 50,
        page: 1
      };
      yield _this5.getListOrder(payload, true);
    })();
  }

  handleChangeFilterIntervalCustomByUser(event) {
    var _this6 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log('handleChangeFilterIntervalCustomByUser event', event);
      const pastTime = _this6.filterInterval.pastTime; // console.log('pastTime: ',pastTime);

      const presentTime = _this6.filterInterval.presentTime; // console.log('presentTime: ',presentTime);

      const payload = {
        barcode: null,
        patient: null,
        status: 0,
        fromDate: pastTime,
        toDate: presentTime,
        assignToUserId: 0,
        counselors: null,
        partnerId: 0,
        isSendSMS: null,
        isPrintResult: null,
        patientAge: null,
        phoneNo: null,
        keyword: _this6.keywordSearch,
        pageSize: 50,
        page: 1
      };
      yield _this6.getListOrder(payload, true);
    })();
  }

  handleChangeRequestType(event) {
    // console.log('handleChangePartner event: ', event);
    const value = event.target.value; // this.itemPatientFormModalLab.valueRequestType = value;
    // this.validFormInput.isEmptyRequestType = (value === 0);
  }

  handleChangeTimeSample(event) {}

  onSearchByFormFilter() {
    var _this7 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const payload = {
        barcode: null,
        patient: null,
        status: null,
        fromDate: _this7.filterInterval.pastTime,
        toDate: _this7.filterInterval.presentTime,
        assignToUserId: null,
        counselors: null,
        partnerId: null,
        isSendSMS: null,
        isPrintResult: null,
        patientAge: null,
        phoneNo: _this7.formFilterTestSheet.phoneNoPatient,
        keyword: _this7.formFilterTestSheet.namePatient,
        pageSize: 50,
        page: 1
      };
      yield _this7.getListOrder(payload, false);

      _this7.popoverFormFilter.dismiss();
    })();
  }

  restartFormFilter() {
    this.formFilterTestSheet.namePatient = '';
    this.formFilterTestSheet.phoneNoPatient = '';
    this.orderStatusSelect.value = 0;
  }

  pushLog(msg) {
    console.log(msg);
  }

  cancelFormFilter() {
    this.popoverFormFilter.dismiss();
  }

  isEmpty(value) {
    return new src_app_shared_pipe_is_empty_pipe__WEBPACK_IMPORTED_MODULE_2__.IsEmptyPipe().transform(value);
  }

}

LaboratoryPage.ɵfac = function LaboratoryPage_Factory(t) {
  return new (t || LaboratoryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.PickerController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_7__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_badge_service__WEBPACK_IMPORTED_MODULE_8__.BadgeService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__.AppVersion), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_10__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_general_service__WEBPACK_IMPORTED_MODULE_11__.GeneralService));
};

LaboratoryPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: LaboratoryPage,
  selectors: [["app-laboratory"]],
  viewQuery: function LaboratoryPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonModal, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.popoverFormFilter = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.orderStatusSelect = _t.first);
    }
  },
  decls: 24,
  vars: 6,
  consts: [[1, "ion-padding"], [2, "display", "flex"], ["autocomplete", "on", "placeholder", "T\u00ECm ki\u1EBFm ...", 3, "ionChange"], ["slot", "start", 3, "click"], ["slot", "icon-only", "name", "funnel-outline"], ["size", "auto", 3, "isOpen", "didDismiss"], ["popoverFormFilter", ""], [2, "display", "flex", "align-items", "center"], ["slot", "start", "name", "calendar-clear-outline", "color", "primary"], ["aria-label", "times", "interface", "alert", "placeholder", "Ch\u1ECDn kho\u1EA3ng th\u1EDDi gian l\u1ECDc ...", 3, "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "content-laboratory"], [4, "ngFor", "ngForOf"], [3, "isOpen"], [2, "font-size", "small"], ["position", "stacked"], ["name", "person-outline"], ["placeholder", "Nh\u1EADp t\u00EAn b\u1EC7nh nh\u00E2n ...", 3, "ngModel", "ngModelChange"], ["name", "call-outline"], ["type", "tel", "placeholder", "Nh\u1EADp S\u0110T ...", 3, "ngModel", "ngModelChange"], ["name", "send-outline"], ["label", "Tr\u1EA1ng th\u00E1i \u0110\u01A1n h\u00E0ng", "interface", "alert", "label-placement", "floating", "placeholder", "Tr\u1EA1ng th\u00E1i \u0111\u01A1n h\u00E0ng", 2, "font-size", "small", 3, "interfaceOptions", "ionChange"], ["orderStatusSelect", ""], ["style", "font-size: small;", 3, "value", 4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "space-evenly", "margin-top", "0.5rem"], ["size", "small", "fill", "outline", "color", "medium", "title", "Hu\u1EF7", 3, "click"], ["name", "close-outline"], ["size", "small", "fill", "outline", "color", "danger", "title", "Xo\u00E1 l\u1ECDc", 3, "click"], ["size", "small", "name", "trash-outline"], ["size", "small", "fill", "solid", "title", "L\u1ECDc d\u1EEF li\u1EC7u ...", 3, "click"], ["size", "small", "name", "search-outline"], [2, "font-size", "small", 3, "value"], [3, "value"], ["datetime", "from-datetime", 2, "font-size", "small"], [3, "keepContentsMounted"], ["locale", "vi-VI", "id", "from-datetime", 3, "ngModel", "showDefaultTitle", "showDefaultButtons", "showClearButton", "ngModelChange", "ionChange"], ["fromDatetime", ""], ["slot", "title"], ["datetime", "toDatetime", 2, "font-size", "small"], ["locale", "vi-VI", "id", "toDatetime", 3, "ngModel", "showDefaultTitle", "showDefaultButtons", "showClearButton", "min", "ngModelChange", "ionChange"], ["toDatetime", ""], ["class", "name-patient", 4, "ngIf"], ["class", "info", 4, "ngIf"], ["class", "status", 4, "ngIf"], [1, "name-patient"], [1, "info"], [1, "text"], ["name", "location-outline"], [1, "text", "address"], ["name", "pulse-outline"], [1, "status"], ["slot", "start"], [3, "click"], ["slot", "end"], [3, "innerHTML"], [2, "color", "red"], ["type", "text", "placeholder", "Nh\u1EADp t\u00EAn b\u1EC7nh nh\u00E2n ...", 3, "ngModel", "ngModelChange", "keyup"], ["class", "m-error", 4, "ngIf"], ["type", "tel", "placeholder", "888-888-8888", 3, "ngModel", "ngModelChange", "keyup"], ["type", "text", "placeholder", "Nh\u1EADp \u0111\u1ECBa ch\u1EC9 ...", 3, "ngModel", "ngModelChange", "keyup"], ["position", "floating"], ["name", "pencil-outline"], ["type", "text", "placeholder", "Th\u00EAm ghi ch\u00FA ...", 3, "ngModel", "ngModelChange"], [2, "margin-top", "1rem", "display", "flex", "justify-content", "end"], ["slot", "primary"], [1, "m-error"]],
  template: function LaboratoryPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-content", 0)(1, "div")(2, "div")(3, "div", 1)(4, "ion-searchbar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function LaboratoryPage_Template_ion_searchbar_ionChange_4_listener($event) {
        return ctx.handleChangeSearch($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-buttons", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LaboratoryPage_Template_ion_buttons_click_5_listener($event) {
        return ctx.presentPopoverFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-popover", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("didDismiss", function LaboratoryPage_Template_ion_popover_didDismiss_8_listener() {
        return ctx.isPopoverOpenFilter = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, LaboratoryPage_ng_template_10_Template, 28, 4, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 7)(12, "ion-list")(13, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "ion-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function LaboratoryPage_Template_ion_select_ionChange_15_listener($event) {
        return ctx.handleChangeFilterInterval($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, LaboratoryPage_ion_select_option_16_Template, 2, 2, "ion-select-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, LaboratoryPage_ion_item_17_Template, 6, 1, "ion-item", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, LaboratoryPage_ion_item_18_Template, 6, 1, "ion-item", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 12)(20, "ion-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, LaboratoryPage_ion_item_21_Template, 12, 15, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "ion-modal", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, LaboratoryPage_ng_template_23_Template, 49, 9, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isOpen", ctx.isPopoverOpenFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.initDatas.baoCaoDoanhSoType);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.filterInterval.isShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.filterInterval.isShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.listOrder);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isOpen", ctx.isModalOpenFormPatient);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonDatetimeButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe, src_app_shared_pipe_is_empty_pipe__WEBPACK_IMPORTED_MODULE_2__.IsEmptyPipe, src_app_shared_pipe_order_status_pipe__WEBPACK_IMPORTED_MODULE_12__.OrderStatusPipe],
  styles: [".m-error[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin-left: 0.8rem;\n  min-height: 18px;\n  font-size: small;\n  color: var(--ion-color-danger);\n}\n\n.content-laboratory[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: calc(100vh - 15.5rem);\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3.name-patient[_ngcontent-%COMP%] {\n  font-weight: 600;\n  white-space: break-spaces;\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.25rem;\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   h3.text[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   h3.address[_ngcontent-%COMP%] {\n  white-space: break-spaces;\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem;\n  margin-top: 0.25rem;\n  border-radius: 0.25rem;\n  background-color: #b5e0ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYm9yYXRvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlOQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBeE5GOztBQTROQTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtBQXpORjs7QUE0Tkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUExTk47O0FBNk5RO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQTNOVjs7QUE4TlE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUE1TlY7O0FBK05ZO0VBQ0Usb0JBQUE7QUE3TmQ7O0FBZ09ZO0VBQ0UseUJBQUE7QUE5TmQ7O0FBbU9RO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQWpPViIsImZpbGUiOiJsYWJvcmF0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50IHtcclxuLy8gICAtLXBhZGRpbmctdG9wOiAzMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuaW5mby1yb3cge1xyXG4vLyAgIHBhZGRpbmc6IDAgMTBweDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbCB7XHJcbi8vICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbi8vICAgaW9uLWJhZGdlIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiA1cHg7XHJcbi8vICAgICB0b3A6IC00cHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAjdHJpZ2dlci1idXR0b24ge1xyXG4vLyAgIG1hcmdpbjogYXV0bztcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gfVxyXG5cclxuLy8gaW9uLWJ1dHRvbiB7XHJcbi8vICAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIG1haW4ge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbi8vIH1cclxuXHJcbi8vIC5tLWJvcmRlci1ib3R0b20ge1xyXG4vLyAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjRUVFO1xyXG4vLyB9XHJcblxyXG4vLyAuZm9jdXMtc3R1ZGVudCB7XHJcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2Ny44ZGVnLCAjRjhBNTc3IDAuNDUlLCAjRkNCNzMzIDk5Ljg3JSk7XHJcbi8vICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLmZvY3VzLXRlYWNoZXIge1xyXG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNjcuOGRlZywgIzU5NTdmOCAwLjQ1JSwgIzI2M2RmYyA5OS44NyUpO1xyXG4vLyAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4vLyAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5mb2N1cy1hZG1pbiB7XHJcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2Ny44ZGVnLCAjMDI3ODc2IDAuNDUlLCAjMDA5MzM0IDk5Ljg3JSk7XHJcbi8vICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLm9wdGlvbi1zdHVkZW50IHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4vLyAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4vLyAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1yb3cuZmVhdHVyZWQtcm93IHtcclxuLy8gICBwYWRkaW5nOiAxMHB4IDAgOHB4O1xyXG4vLyAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5mZWF0dXJlZC1yb3cgaW9uLWljb24ge1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLmZlYXR1cmVkLXJvdyBpb24tY29sIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZmVhdHVyZWQtcm93IGlvbi10ZXh0IHtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBtYXJnaW46IGF1dG87XHJcbi8vIH1cclxuXHJcbi8vIGlvbi10YWItYnV0dG9uIHtcclxuLy8gICAtLWJhY2tncm91bmQtZm9jdXNlZDogcmVkICFpbXBvcnRhbnQ7XHJcbi8vICAgLS1jb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuZGl2aWRlci10b3Age1xyXG4vLyAgIGJvcmRlci10b3A6IHNvbGlkIDhweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4vLyB9XHJcblxyXG4vLyAubmV3cyB7XHJcbi8vICAgLmltZy13cmFwcGVyIHtcclxuLy8gICAgIGhlaWdodDogY2FsYygoMTAwdncgKiAwLjggLSAzMnB4KSAqIDQgLyA3LjUpO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbi8vICAgICBpbWcge1xyXG4vLyAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gaW9uLWNhcmQge1xyXG4vLyAgIG1hcmdpbjogMTBweCAxNXB4IDEwcHggMDtcclxuLy8gICBib3gtc2hhZG93OiBub25lO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuLy8gICBib3JkZXI6IHNvbGlkIDFweCAjRUVFO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY2FyZC1oZWFkZXIge1xyXG4vLyAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY2FyZC10aXRsZSxcclxuLy8gaW9uLWNhcmQtY29udGVudCB7XHJcbi8vICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY2FyZC1jb250ZW50IHtcclxuLy8gICBwYWRkaW5nOiAwcHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gICBmb250LXNpemU6IDEycHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1jYXJkLXRpdGxlIHtcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5pbm5lci1zY3JvbGwsXHJcbi8vIC5zY3JvbGwteSB7XHJcbi8vICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyAgIGJhY2tncm91bmQ6IHJlZDtcclxuLy8gfVxyXG5cclxuLy8gLnNpemUxNSB7XHJcbi8vICAgd2lkdGg6IDE1cHg7XHJcbi8vICAgaGVpZ2h0OiAxNXB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24taXRlbS5sYXN0IC5pb24taXRlbSB7XHJcbi8vICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xyXG4vLyAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1sYWJlbC5idG4ge1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmNvbC1hdmEge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbi8vICAgaW9uLWF2YXRhciB7XHJcbi8vICAgICB3aWR0aDogNzAlO1xyXG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgbWFyZ2luOiBhdXRvO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLm1vZGFsLXN0dWRlbnQge1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4vLyAgIHotaW5kZXg6IDI7XHJcbi8vICAgYm94LXNoYWRvdzogMCAycHggNXB4ICM5ZjlmOWY7XHJcbi8vICAgbGVmdDogMDtcclxuLy8gICByaWdodDogMDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWF2YXRhciB7XHJcbi8vICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tc2xpZGVzIHtcclxuLy8gICBpb24tY2FyZC10aXRsZSB7XHJcbi8vICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbi8vICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuLy8gICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuLy8gICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuLy8gICB9XHJcblxyXG4vLyAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4vLyAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4vLyAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbi8vICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4vLyAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmFjY291bnQtaW5mbyB7XHJcbi8vICAgbWFyZ2luLXRvcDogOHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuaW5mby1yb3cge1xyXG4vLyAgIG1hcmdpbi10b3A6IDhweDtcclxuLy8gfVxyXG5cclxuLy8gLmZlYXR1cmVkLXJvdyB7XHJcbi8vICAgaW9uLWljb24ge1xyXG4vLyAgICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4ubS1lcnJvciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcclxuICBtaW4taGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQtbGFib3JhdG9yeSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE1LjVyZW0pO1xyXG5cclxuICBpb24tbGlzdCB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGgzLm5hbWUtcGF0aWVudCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5pbmZvIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG5cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgJi50ZXh0IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hZGRyZXNzIHtcclxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuc3RhdHVzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiNWUwZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_laboratory_laboratory_module_ts.js.map