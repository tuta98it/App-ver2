"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_requests_requests_module_ts"],{

/***/ 9391:
/*!*********************************************!*\
  !*** ./src/app/shared/pipe/request-type.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestTypePipe": () => (/* binding */ RequestTypePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

// import { IsEmptyPipe } from './is-empty.pipe';
class RequestTypePipe {
    constructor() {
    }
    transform(requestID, listResquest) {
        const objResByID = listResquest.find((objRes) => objRes.requestTypeId === requestID);
        return objResByID.requestTypeName;
    }
    isEmpty(value) {
        if (value === null || value === undefined) {
            return true;
        }
        if (typeof value === 'string' && value.trim() === '') {
            return true;
        }
        if (Array.isArray(value) && value.length === 0) {
            return true;
        }
        if (typeof value === 'object' && Object.keys(value).length === 0) {
            return true;
        }
        return false;
    }
}
RequestTypePipe.ɵfac = function RequestTypePipe_Factory(t) { return new (t || RequestTypePipe)(); };
RequestTypePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "requestTypePipe", type: RequestTypePipe, pure: true });


/***/ }),

/***/ 9950:
/*!***********************************************!*\
  !*** ./src/app/shared/pipe/status-request.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusRequestPipe": () => (/* binding */ StatusRequestPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

// import { IsEmptyPipe } from './is-empty.pipe';
class StatusRequestPipe {
    constructor() {
    }
    transform(request) {
        if (this.isEmpty(request.receiveTime)) {
            return 'Chưa nhận yêu cầu';
        }
        if (this.isEmpty(request.arriveTime)) {
            return 'Đã nhận yêu cầu và đang xử lý';
        }
        if (this.isEmpty(request.completeTime)) {
            return 'Đã nhận yêu cầu và đang xử lý';
        }
        if (this.isEmpty(request.arriveLaboTime)) {
            return 'Đã nhận yêu cầu và đang xử lý';
        }
        return 'Đã nhận yêu cầu và đang xử lý';
    }
    isEmpty(value) {
        if (value === null || value === undefined) {
            return true;
        }
        if (typeof value === 'string' && value.trim() === '') {
            return true;
        }
        if (Array.isArray(value) && value.length === 0) {
            return true;
        }
        if (typeof value === 'object' && Object.keys(value).length === 0) {
            return true;
        }
        return false;
    }
}
StatusRequestPipe.ɵfac = function StatusRequestPipe_Factory(t) { return new (t || StatusRequestPipe)(); };
StatusRequestPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "statusRequestPipe", type: StatusRequestPipe, pure: true });


/***/ }),

/***/ 6080:
/*!**********************************************************!*\
  !*** ./src/app/tabs/requests/requests-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestsPageRoutingModule": () => (/* binding */ RequestsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _requests_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests.page */ 6058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _requests_page__WEBPACK_IMPORTED_MODULE_0__.RequestsPage,
    }
];
class RequestsPageRoutingModule {
}
RequestsPageRoutingModule.ɵfac = function RequestsPageRoutingModule_Factory(t) { return new (t || RequestsPageRoutingModule)(); };
RequestsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RequestsPageRoutingModule });
RequestsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RequestsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2389:
/*!**************************************************!*\
  !*** ./src/app/tabs/requests/requests.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestsPageModule": () => (/* binding */ RequestsPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _requests_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests.page */ 6058);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ 581);
/* harmony import */ var _requests_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requests-routing.module */ 6080);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 5209);
/* harmony import */ var src_app_shared_modules_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/share.module */ 3913);
/* harmony import */ var src_app_shared_pipe_status_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pipe/status-request */ 9950);
/* harmony import */ var src_app_shared_pipe_request_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/pipe/request-type */ 9391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);











class RequestsPageModule {
}
RequestsPageModule.ɵfac = function RequestsPageModule_Factory(t) { return new (t || RequestsPageModule)(); };
RequestsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: RequestsPageModule });
RequestsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__.AppVersion], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
        _requests_routing_module__WEBPACK_IMPORTED_MODULE_2__.RequestsPageRoutingModule,
        src_app_shared_modules_share_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](RequestsPageModule, { declarations: [_requests_page__WEBPACK_IMPORTED_MODULE_0__.RequestsPage, src_app_shared_pipe_status_request__WEBPACK_IMPORTED_MODULE_5__.StatusRequestPipe, src_app_shared_pipe_request_type__WEBPACK_IMPORTED_MODULE_6__.RequestTypePipe], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
        _requests_routing_module__WEBPACK_IMPORTED_MODULE_2__.RequestsPageRoutingModule,
        src_app_shared_modules_share_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 6058:
/*!************************************************!*\
  !*** ./src/app/tabs/requests/requests.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestsPage": () => (/* binding */ RequestsPage)
/* harmony export */ });
/* harmony import */ var C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/constant.class */ 6443);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_shared_pipe_is_empty_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pipe/is-empty.pipe */ 4904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/photo.service */ 1957);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 1188);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/notification.service */ 2013);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/main.service */ 1557);
/* harmony import */ var _services_badge_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/badge.service */ 9744);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 5209);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/order.service */ 8132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/general-service */ 888);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_pipe_status_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/pipe/status-request */ 9950);
/* harmony import */ var src_app_shared_pipe_request_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/pipe/request-type */ 9391);




















const _c0 = ["popoverFormFilter"];
const _c1 = ["orderStatusSelect"];
const _c2 = ["requestType"];

function RequestsPage_ng_template_10_ion_select_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const typeOrder_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", typeOrder_r11.requestTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](typeOrder_r11.requestTypeName);
  }
}

function RequestsPage_ng_template_10_ion_select_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const order_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", order_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](order_r12.name);
  }
}

function RequestsPage_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "L\u1ECDc d\u1EEF li\u1EC7u theo ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-list")(4, "ion-item")(5, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, " Lo\u1EA1i Y\u00EAu c\u1EA7u ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-select", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function RequestsPage_ng_template_10_Template_ion_select_ionChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r13.handleChangeRequestType($event));
    })("ngModelChange", function RequestsPage_ng_template_10_Template_ion_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.formFilterTestSheet.valueRequestTypePatient = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, RequestsPage_ng_template_10_ion_select_option_10_Template, 2, 2, "ion-select-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-item", 19)(12, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RequestsPage_ng_template_10_Template_ion_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r16.formFilterTestSheet.phoneNoPatient = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "ion-item", 19)(17, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, " \u0110\u1ECBa ch\u1EC9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RequestsPage_ng_template_10_Template_ion_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r17.formFilterTestSheet.addressPatient = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "ion-item", 19)(22, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, " Tr\u1EA1ng th\u00E1i \u0110\u01A1n h\u00E0ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "ion-select", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function RequestsPage_ng_template_10_Template_ion_select_ionChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r18.handleChangeSelectOrderStatus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, RequestsPage_ng_template_10_ion_select_option_27_Template, 2, 2, "ion-select-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "ion-buttons", 32)(29, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RequestsPage_ng_template_10_Template_ion_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r19.cancelFormFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RequestsPage_ng_template_10_Template_ion_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r20.restartFormFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "ion-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RequestsPage_ng_template_10_Template_ion_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r21.onSearchByFormFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](34, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("interfaceOptions", ctx_r1.customAlertOptionsRequestType)("ngModel", ctx_r1.formFilterTestSheet.valueRequestTypePatient);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.listTypeOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r1.formFilterTestSheet.phoneNoPatient);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r1.formFilterTestSheet.addressPatient);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("interfaceOptions", ctx_r1.customPopoverOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.initDatas.orderStatus);
  }
}

function RequestsPage_ion_select_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const time_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", time_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", time_r22.name, " ");
  }
}

function RequestsPage_ion_item_19_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-datetime", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RequestsPage_ion_item_19_ng_template_5_Template_ion_datetime_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r25.filterInterval.pastTime = $event);
    })("ionChange", function RequestsPage_ion_item_19_ng_template_5_Template_ion_datetime_ionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r27.handleChangeFilterIntervalCustomByUser($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Ch\u1ECDn th\u1EDDi gian b\u1EAFt \u0111\u1EA7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r23.filterInterval.pastTime)("showDefaultTitle", true)("showDefaultButtons", true)("showClearButton", true);
  }
}

function RequestsPage_ion_item_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item")(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "T\u1EEB ng\u00E0y: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ion-datetime-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-modal", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, RequestsPage_ion_item_19_ng_template_5_Template, 4, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("keepContentsMounted", true);
  }
}

function RequestsPage_ion_item_20_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-datetime", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RequestsPage_ion_item_20_ng_template_5_Template_ion_datetime_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r30.filterInterval.presentTime = $event);
    })("ionChange", function RequestsPage_ion_item_20_ng_template_5_Template_ion_datetime_ionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r32.handleChangeFilterIntervalCustomByUser($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Ch\u1ECDn th\u1EDDi gian b\u1EAFt \u0111\u1EA7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r28.filterInterval.presentTime)("showDefaultTitle", true)("showDefaultButtons", true)("showClearButton", true)("min", ctx_r28.filterInterval.pastTime);
  }
}

function RequestsPage_ion_item_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item")(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "\u0110\u1EBFn ng\u00E0y: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ion-datetime-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-modal", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, RequestsPage_ion_item_20_ng_template_5_Template, 4, 5, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("keepContentsMounted", true);
  }
}

function RequestsPage_ion_item_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 53)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "h3", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const request_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](5, 1, request_r33.appointmentDate, "HH:mm dd/MM/YYYY"));
  }
}

function RequestsPage_ion_item_23_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 53)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "h3", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const request_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](request_r33.phone);
  }
}

function RequestsPage_ion_item_23_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 53)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "h3", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const request_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](request_r33.address);
  }
}

function RequestsPage_ion_item_23_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 53)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ion-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const request_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](request_r33.comment);
  }
}

function RequestsPage_ion_item_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, RequestsPage_ion_item_23_div_3_Template, 6, 4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 51)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "requestTypePipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, RequestsPage_ion_item_23_div_8_Template, 5, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, RequestsPage_ion_item_23_div_9_Template, 5, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, RequestsPage_ion_item_23_div_10_Template, 5, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 52)(12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](14, "statusRequestPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const request_r33 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", request_r33 == null ? null : request_r33.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 6, request_r33.requestTypeId, ctx_r5.listTypeOrder));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", request_r33 == null ? null : request_r33.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", request_r33 == null ? null : request_r33.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", request_r33 == null ? null : request_r33.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](14, 9, request_r33));
  }
}

function RequestsPage_ng_template_28_ion_select_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const typeOrder_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", typeOrder_r48.requestTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](typeOrder_r48.requestTypeName);
  }
}

function RequestsPage_ng_template_28_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "*Lo\u1EA1i y\u00EAu c\u1EA7u kh\u00F4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RequestsPage_ng_template_28_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "*S\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\u00F4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RequestsPage_ng_template_28_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "*\u0110\u1ECBa ch\u1EC9 kh\u00F4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RequestsPage_ng_template_28_ion_item_42_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-datetime", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RequestsPage_ng_template_28_ion_item_42_ng_template_8_Template_ion_datetime_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r50.itemPatientFormModalLab.timeSample = $event);
    })("ionChange", function RequestsPage_ng_template_28_ion_item_42_ng_template_8_Template_ion_datetime_ionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r52.handleChangeTimeSample($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "TG L\u1EA5y m\u1EA5u/Thu m\u1EABu");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r49.itemPatientFormModalLab.timeSample)("showDefaultTitle", true)("showDefaultButtons", true)("showClearButton", true);
  }
}

function RequestsPage_ng_template_28_ion_item_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item")(1, "div", 71)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "TG L\u1EA5y m\u1EA5u/Thu m\u1EABu: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "ion-datetime-button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-modal", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, RequestsPage_ng_template_28_ion_item_42_ng_template_8_Template, 3, 4, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("keepContentsMounted", true);
  }
}

function RequestsPage_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 59)(3, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RequestsPage_ng_template_28_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r53.setOpenModalAddPatient(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Hu\u1EF7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-buttons", 60)(8, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RequestsPage_ng_template_28_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r55.saveModalAddPatient());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "L\u01B0u");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-content", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div")(13, "ion-col")(14, "ion-item")(15, "ion-label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, " Lo\u1EA1i Y\u00EAu c\u1EA7u ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "ion-select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function RequestsPage_ng_template_28_Template_ion_select_ionChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r54);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r56.handleChangeRequestType($event));
    })("ngModelChange", function RequestsPage_ng_template_28_Template_ion_select_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r54);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r57.itemPatientFormModalLab.valueRequestType = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, RequestsPage_ng_template_28_ion_select_option_21_Template, 2, 2, "ion-select-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, RequestsPage_ng_template_28_span_22_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "ion-col")(24, "ion-item")(25, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "ion-input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RequestsPage_ng_template_28_Template_ion_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r54);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r58.itemPatientFormModalLab.phone = $event);
    })("keyup", function RequestsPage_ng_template_28_Template_ion_input_keyup_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r54);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r59.onKeyUpInputNumberPhone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, RequestsPage_ng_template_28_span_31_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "ion-col")(33, "ion-item")(34, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](35, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36, " \u0110\u1ECBa ch\u1EC9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "ion-input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RequestsPage_ng_template_28_Template_ion_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r54);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r60.itemPatientFormModalLab.address = $event);
    })("keyup", function RequestsPage_ng_template_28_Template_ion_input_keyup_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r54);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r61.onKeyUpInputAddress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, RequestsPage_ng_template_28_span_40_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, RequestsPage_ng_template_28_ion_item_42_Template, 9, 1, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "ion-item")(44, "ion-label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](45, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46, " Ghi ch\u00FA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "ion-input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RequestsPage_ng_template_28_Template_ion_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r54);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r62.itemPatientFormModalLab.notes = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r6.titleModalAddPatient);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", ctx_r6.instructionModalPatient, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("interfaceOptions", ctx_r6.customAlertOptionsRequestType)("ngModel", ctx_r6.itemPatientFormModalLab.valueRequestType);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r6.listTypeOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r6.validFormInput.isEmptyRequestType);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r6.itemPatientFormModalLab.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r6.validFormInput.isEmptyNumberPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r6.itemPatientFormModalLab.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r6.validFormInput.isEmptyAdress);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r6.itemPatientFormModalLab.notes);
  }
}

class RequestsPage {
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
    this.instructionModalPatient = 'Mời nhập thông tin bệnh nhân :';
    this.numberOfNewPatients = 0;
    this.isModalOpenFormPatient = false;
    this.validFormInput = {
      isEmptyRequestType: false,
      // isEmptyFullName: false,
      isEmptyNumberPhone: false,
      isEmptyAdress: false,
      isEmptyTimeSample: false
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
      valueRequestTypePatient: 0,
      namePatient: '',
      phoneNoPatient: '',
      addressPatient: '',
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

  onKeyUpInputNamePatient() {// Set is show message error Fullname
    // this.validFormInput.isEmptyFullName = this.isEmpty(this.itemPatientFormModalLab.name);
  }

  onKeyUpInputNumberPhone() {
    // Set is show message error Numberphone
    this.validFormInput.isEmptyNumberPhone = this.isEmpty(this.itemPatientFormModalLab.phone);
  }

  onKeyUpInputAddress() {
    // Set is show message error Address
    this.validFormInput.isEmptyAdress = this.isEmpty(this.itemPatientFormModalLab.address);
  }

  ionViewDidLoad() {// console.log('ionViewDidLoad');
  }

  ionViewWillLeave() {// console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {// console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {// console.log('ionViewWillUnload');
  }

  ionViewDidEnter() {// console.log('ionViewDidEnter');
  }

  ionViewWillEnter() {// console.log('ionViewWillEnter');

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log('ngOnInit');
      _this.localStorage.getSelectedUser().then(res => {
        _this.userInfo = res;
      }); // Lấy dữ liệu cho biến DS Dữ liệu khởi tạo


      yield _this.getListInitialData(); // Lấy dữ liệu danh sách phiếu xét nghiệm
      // await this.getListOrder();
      // Lấy dữ liệu danh sách yêu cầu xét nghiệm

      const payload = {
        page: 1,
        pageSize: 100,
        textSearch: null,
        fromDate: null,
        toDate: null,
        phone: null,
        partnerId: null,
        receiveUserId: null,
        called: null,
        arrived: null,
        arrivedLabo: null,
        warning: null,
        received: null,
        requestTypeId: null,
        userCreated: null,
        canceled: false
      };
      yield _this.getListRequestByPayload(payload, true); // Lấy danh sách loại yêu cầu

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

  getListOrder() {
    // Show thông báo delay thời gian chờ loading dữ liệu
    this.showLoading();
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
    this.orderService.getOrders(payload).subscribe(res => {
      if (res != null) {
        this.listOrder = res.data; // console.log('this.listOrder : ', this.listOrder);
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
        // console.log('getListOrderType res: ', res);
        this.listTypeOrder = res.filter(en => en.requestTypeCode === 'LM' || en.requestTypeCode === 'TM');
      }
    }, error => {});
  }

  getListRequestByPayload(payload, isLoading) {
    // Show thông báo delay thời gian chờ loading dữ liệu
    if (isLoading) {
      this.showLoading();
    }

    this.generalService.getRequest(payload).subscribe(res => {
      if (res != null) {
        this.listRequest = res.data; // console.log('this.listRequest : ', this.listRequest);
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
    this.instructionModalPatient = 'Mời tạo phiếu yêu cầu xét nghiệm:';
    this.numberOfNewPatients = 0;
    this.resetFormModalPatient();
    this.restartValidFormAddPatient();
    this.setOpenModalAddPatient(true);
  }

  restartValidFormAddPatient() {
    this.validFormInput.isEmptyAdress = false; // this.validFormInput.isEmptyFullName = false;

    this.validFormInput.isEmptyNumberPhone = false;
    this.validFormInput.isEmptyRequestType = false;
  }

  cancelModalAddPatient() {
    this.setOpenModalAddPatient(false); // this.modal.dismiss(null, 'cancel');
  }

  confirmPatientModal() {
    // const isName = !this.isEmpty(this.itemPatientFormModalLab.name);
    // this.validFormInput.isEmptyFullName = !isName;
    const isPhone = !this.isEmpty(this.itemPatientFormModalLab.phone);
    this.validFormInput.isEmptyNumberPhone = !isPhone;
    const isAddress = !this.isEmpty(this.itemPatientFormModalLab.address);
    this.validFormInput.isEmptyAdress = !isAddress;
    const isRequest = !(this.itemPatientFormModalLab.valueRequestType === 0);
    this.validFormInput.isEmptyRequestType = !isRequest;
    const isTimeSample = !this.isEmpty(this.itemPatientFormModalLab.timeSample);
    this.validFormInput.isEmptyTimeSample = !isTimeSample;
    return isRequest && isPhone && isAddress && isTimeSample;
  }

  saveModalAddPatient() {
    if (this.confirmPatientModal()) {
      // Thêm mới một item Patient
      this.listPatientLab.push(JSON.parse(JSON.stringify(this.itemPatientFormModalLab)));
      const PARTNER_ID = 4;
      const item = {
        partnerId: PARTNER_ID,
        userId: this.userInfo.id,
        dateCreated: null,
        appointmentDate: this.itemPatientFormModalLab.timeSample,
        receiveTime: null,
        arriveTime: null,
        completeTime: null,
        arriveLaboTime: null,
        returnResultReceiveTime: null,
        returnResultAppointmentDate: null,
        returnResultCompleteTime: null,
        address: this.itemPatientFormModalLab.address,
        phone: this.itemPatientFormModalLab.phone,
        requestTypeId: this.itemPatientFormModalLab.valueRequestType,
        requestSourceId: null,
        comment: this.itemPatientFormModalLab.notes,
        receiveUserId: null
      };
      this.generalService.addRequest(item).subscribe(res => {
        if (res.ret && res.ret[0].code !== 0) {
          this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, res.ret[0].message);
        } else {
          // this.notificationService.showMessage(Constant.SUCCESS, Constant.MESSAGE_ADD_SUCCESS);
          this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.SUCCESS, 'Tạo yêu cầu thành công!');
          this.setOpenModalAddPatient(false);
        }
      });
    } else {
      this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, 'Nhập thiếu trường dữ liệu bắt buộc!');
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
        page: 1,
        pageSize: 100,
        textSearch: _this3.keywordSearch,
        fromDate: _this3.filterInterval.pastTime,
        toDate: _this3.filterInterval.presentTime,
        phone: null,
        partnerId: null,
        receiveUserId: null,
        called: null,
        arrived: null,
        arrivedLabo: null,
        warning: null,
        received: null,
        requestTypeId: null,
        userCreated: null,
        canceled: false
      };

      _this3.getListRequestByPayload(payload, false);
    })();
  }

  handleChangeSelectOrderStatus(event) {
    var _this4 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.formFilterTestSheet.orderStatus = event.target.value;
    })();
  }

  handleChangeFilterInterval(event) {
    const value = event.target.value; // let isShowFilterInterval = this.filterInterval.isShow;

    const pastTime = new Date();
    const presentTime = new Date();
    pastTime.setHours(0, 0, 0, 0); // Get the current day of the week (0-6, where Sunday is 0)

    const currentDay = presentTime.getDay(); // Subtract the number of days elapsed in the current week

    let daysToSubtract;

    switch (value) {
      case 1:
        this.filterInterval.isShow = false;
        daysToSubtract = 0;
        pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log('Đầu ngày hôm nay', pastTime);

        break;

      case 2:
        // Subtract 1 day
        this.filterInterval.isShow = false;
        daysToSubtract = 1;
        pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log('Cách đây 1 ngày trước', pastTime);

        break;

      case 3:
        // Subtract 7 day
        this.filterInterval.isShow = false;
        daysToSubtract = 7;
        pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log('Cách đây 7 ngày', pastTime);

        break;

      case 4:
        // Subtract 14 day
        this.filterInterval.isShow = false;
        daysToSubtract = 14;
        pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log('Cách đây 14 ngày', pastTime);

        break;

      case 5:
        // Subtract 30 day
        this.filterInterval.isShow = false;
        daysToSubtract = 30;
        pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log('Cách đây 30 ngày', pastTime);

        break;

      case 6:
        // Đầu tuần này
        this.filterInterval.isShow = false;
        daysToSubtract = currentDay === 0 ? 6 : currentDay - 1;
        pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log('Đầu tuần này', pastTime);

        break;

      case 7:
        // Đầu tuần trước
        this.filterInterval.isShow = false;
        daysToSubtract = currentDay + 7 - 1; // console.log('daysToSubtract', daysToSubtract);

        pastTime.setDate(pastTime.getDate() - daysToSubtract); // console.log(' Đầu tuần trước', pastTime);

        break;

      case 8:
        // Đầu tháng này
        this.filterInterval.isShow = false;
        pastTime.setDate(1); // console.log('Đầu tháng này', pastTime);

        break;

      case 9:
        // Đầu tháng trước
        this.filterInterval.isShow = false; // Set the date to the first day of the current mounth

        pastTime.setDate(1); // Subtract one month from the date

        pastTime.setMonth(pastTime.getMonth() - 1); // console.log('Đầu tháng trước ', pastTime);

        break;

      case 10:
        // Hiện calender cho hai thời điểm lọc dữ liệu.
        this.filterInterval.isShow = true;
        break;

      default:
        this.filterInterval.isShow = false;
        break;
    } // Đặt dữ liệu ban đầu cho khoảng thời gian lọc dữ liệu


    if (value >= 1 && value <= 10) {
      // Bắt đầu - Thời điểm 0h ngày hôm nay
      this.filterInterval.pastTime = this.datePipe.transform(pastTime, 'yyyy-MM-ddTHH:mm:ss'); // Kết thúc - Thời điểm hiện tại

      this.filterInterval.presentTime = this.datePipe.transform(presentTime, 'yyyy-MM-ddTHH:mm:ss');
    } else {
      // Bắt đầu - Thời điểm 0h ngày hôm nay
      this.filterInterval.pastTime = ''; // console.log('this.filterInterval.pastTime : ', this.filterInterval.pastTime);
      // Kết thúc - Thời điểm hiện tại

      this.filterInterval.presentTime = '';
    }

    const payload = {
      page: 1,
      pageSize: 100,
      textSearch: this.keywordSearch,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      phone: null,
      partnerId: null,
      receiveUserId: null,
      called: null,
      arrived: null,
      arrivedLabo: null,
      warning: null,
      received: null,
      requestTypeId: null,
      userCreated: null,
      canceled: false
    };
    this.getListRequestByPayload(payload, true);
  }

  handleChangeFilterIntervalCustomByUser(event) {
    var _this5 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log('handleChangeFilterIntervalCustomByUser event', event);
      const pastTime = _this5.filterInterval.pastTime; // console.log('pastTime: ',pastTime);

      const presentTime = _this5.filterInterval.presentTime; // console.log('presentTime: ',presentTime);

      const payload = {
        page: 1,
        pageSize: 100,
        textSearch: _this5.formFilterTestSheet.namePatient,
        fromDate: pastTime,
        toDate: presentTime,
        phone: null,
        partnerId: null,
        receiveUserId: null,
        called: null,
        arrived: null,
        arrivedLabo: null,
        warning: null,
        received: null,
        requestTypeId: null,
        userCreated: null,
        canceled: false
      };

      _this5.getListRequestByPayload(payload, false);
    })();
  }

  handleChangeRequestType(event) {
    // console.log('handleChangePartner event: ', event);
    const value = event.target.value; // this.itemPatientFormModalLab.valueRequestType = value;

    this.validFormInput.isEmptyRequestType = value === 0;
  }

  handleChangeTimeSample(event) {}

  onSearchByFormFilter() {
    const payload = {
      page: 1,
      pageSize: 100,
      textSearch: this.formFilterTestSheet.namePatient,
      fromDate: null,
      toDate: null,
      phone: this.formFilterTestSheet.phoneNoPatient,
      partnerId: null,
      receiveUserId: null,
      called: null,
      arrived: null,
      arrivedLabo: null,
      warning: null,
      received: null,
      requestTypeId: null,
      userCreated: null,
      canceled: false
    };
    this.getListRequestByPayload(payload, true);
    this.popoverFormFilter.dismiss();
  }

  restartFormFilter() {
    this.formFilterTestSheet.namePatient = '';
    this.formFilterTestSheet.phoneNoPatient = '';
    this.formFilterTestSheet.valueRequestTypePatient = 0;
    this.requestType.value = 0;
    this.orderStatusSelect.value = 0;
  }

  pushLog(msg) {// console.log(msg);
  }

  cancelFormFilter() {
    this.popoverFormFilter.dismiss();
  }

  isEmpty(value) {
    return new src_app_shared_pipe_is_empty_pipe__WEBPACK_IMPORTED_MODULE_2__.IsEmptyPipe().transform(value);
  }

}

RequestsPage.ɵfac = function RequestsPage_Factory(t) {
  return new (t || RequestsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.PickerController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_7__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_badge_service__WEBPACK_IMPORTED_MODULE_8__.BadgeService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__.AppVersion), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_10__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_general_service__WEBPACK_IMPORTED_MODULE_11__.GeneralService));
};

RequestsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: RequestsPage,
  selectors: [["app-requests"]],
  viewQuery: function RequestsPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonModal, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.popoverFormFilter = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.orderStatusSelect = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.requestType = _t.first);
    }
  },
  decls: 29,
  vars: 6,
  consts: [[1, "ion-padding"], [2, "display", "flex"], ["autocomplete", "on", "placeholder", "T\u00ECm ki\u1EBFm ...", 3, "ionChange"], ["slot", "start", 3, "click"], ["slot", "icon-only", "name", "funnel-outline"], ["size", "auto", 3, "isOpen", "didDismiss"], ["popoverFormFilter", ""], [2, "display", "flex", "align-items", "center"], ["slot", "start", "name", "calendar-clear-outline", "color", "primary"], ["aria-label", "times", "interface", "alert", "value", "0", "placeholder", "Ch\u1ECDn kho\u1EA3ng th\u1EDDi gian l\u1ECDc ...", 3, "ionChange"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "content-laboratory"], [4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [3, "click"], ["name", "add-outline"], [3, "isOpen"], [2, "font-size", "small"], ["position", "stacked"], ["name", "options-outline"], ["aria-label", "parterns", "placeholder", "Ch\u1ECDn lo\u1EA1i y\u00EAu c\u1EA7u ...", 2, "font-size", "small", 3, "interfaceOptions", "ngModel", "ionChange", "ngModelChange"], ["requestType", ""], ["name", "call-outline"], ["type", "tel", "placeholder", "Nh\u1EADp S\u0110T ...", 3, "ngModel", "ngModelChange"], ["name", "location-outline"], ["type", "tel", "placeholder", "Nh\u1EADp \u0110\u1ECBa ch\u1EC9 ...", 3, "ngModel", "ngModelChange"], ["name", "send-outline"], ["label", "Tr\u1EA1ng th\u00E1i \u0110\u01A1n h\u00E0ng", "interface", "alert", "label-placement", "floating", "placeholder", "Tr\u1EA1ng th\u00E1i \u0111\u01A1n h\u00E0ng", 2, "font-size", "small", 3, "interfaceOptions", "ionChange"], ["orderStatusSelect", ""], ["style", "font-size: small;", 3, "value", 4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "space-evenly", "margin-top", "0.5rem"], ["size", "small", "fill", "outline", "color", "medium", "title", "Hu\u1EF7", 3, "click"], ["name", "close-outline"], ["size", "small", "fill", "outline", "color", "danger", "title", "Xo\u00E1 l\u1ECDc", 3, "click"], ["size", "small", "name", "trash-outline"], ["size", "small", "fill", "solid", "title", "L\u1ECDc d\u1EEF li\u1EC7u ...", 3, "click"], ["size", "small", "name", "search-outline"], [3, "value"], [2, "font-size", "small", 3, "value"], ["datetime", "from-datetime", 2, "font-size", "small"], [3, "keepContentsMounted"], ["locale", "vi-VI", "id", "from-datetime", 3, "ngModel", "showDefaultTitle", "showDefaultButtons", "showClearButton", "ngModelChange", "ionChange"], ["fromDatetime", ""], ["slot", "title"], ["datetime", "toDatetime", 2, "font-size", "small"], ["locale", "vi-VI", "id", "toDatetime", 3, "ngModel", "showDefaultTitle", "showDefaultButtons", "showClearButton", "min", "ngModelChange", "ionChange"], ["toDatetime", ""], [1, "appointment-date"], ["class", "info", 4, "ngIf"], [1, "request-type"], [1, "status"], [1, "info"], ["name", "time-outline"], [1, "text"], [1, "text", "address"], ["name", "pulse-outline"], [1, "text", "comment"], ["slot", "start"], ["slot", "end"], [3, "innerHTML"], ["position", "floating"], [2, "color", "red"], ["aria-label", "parterns", "placeholder", "Ch\u1ECDn lo\u1EA1i y\u00EAu c\u1EA7u ...", 3, "interfaceOptions", "ngModel", "ionChange", "ngModelChange"], ["class", "m-error", 4, "ngIf"], ["type", "tel", "placeholder", "888-888-8888", 3, "ngModel", "ngModelChange", "keyup"], ["type", "text", "placeholder", "Nh\u1EADp \u0111\u1ECBa ch\u1EC9 ...", 3, "ngModel", "ngModelChange", "keyup"], ["name", "pencil-outline"], ["type", "text", "placeholder", "Th\u00EAm ghi ch\u00FA ...", 3, "ngModel", "ngModelChange"], [1, "m-error"], [2, "display", "flex", "flex-direction", "column"], ["datetime", "time", 2, "margin-top", "0.5rem", "margin-bottom", "0.25rem"], ["size", "small", "locale", "vi-VI", "id", "time", 3, "ngModel", "showDefaultTitle", "showDefaultButtons", "showClearButton", "ngModelChange", "ionChange"]],
  template: function RequestsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-content", 0)(1, "div")(2, "div")(3, "div", 1)(4, "ion-searchbar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function RequestsPage_Template_ion_searchbar_ionChange_4_listener($event) {
        return ctx.handleChangeSearch($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-buttons", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RequestsPage_Template_ion_buttons_click_5_listener($event) {
        return ctx.presentPopoverFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-popover", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("didDismiss", function RequestsPage_Template_ion_popover_didDismiss_8_listener() {
        return ctx.isPopoverOpenFilter = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, RequestsPage_ng_template_10_Template, 35, 7, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 7)(12, "ion-list")(13, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "ion-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function RequestsPage_Template_ion_select_ionChange_15_listener($event) {
        return ctx.handleChangeFilterInterval($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "ion-select-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, " --T\u1EA5t c\u1EA3-- ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, RequestsPage_ion_select_option_18_Template, 2, 2, "ion-select-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, RequestsPage_ion_item_19_Template, 6, 1, "ion-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, RequestsPage_ion_item_20_Template, 6, 1, "ion-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 13)(22, "ion-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, RequestsPage_ion_item_23_Template, 15, 11, "ion-item", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "ion-fab", 15)(25, "ion-fab-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RequestsPage_Template_ion_fab_button_click_25_listener() {
        return ctx.openModalPatientLab();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "ion-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "ion-modal", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, RequestsPage_ng_template_28_Template, 48, 12, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isOpen", ctx.isPopoverOpenFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.initDatas.baoCaoDoanhSoType);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterInterval.isShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.filterInterval.isShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.listRequest);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isOpen", ctx.isModalOpenFormPatient);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonDatetimeButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, src_app_shared_pipe_status_request__WEBPACK_IMPORTED_MODULE_12__.StatusRequestPipe, src_app_shared_pipe_request_type__WEBPACK_IMPORTED_MODULE_13__.RequestTypePipe],
  styles: [".m-error[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin-left: 0.8rem;\n  min-height: 18px;\n  font-size: small;\n  color: var(--ion-color-danger);\n}\n\n.content-laboratory[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: calc(100vh - 15.5rem);\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.appointment-date[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  justify-items: center;\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.appointment-date[_ngcontent-%COMP%]   div.request-type[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem;\n  margin-top: 0.25rem;\n  border-radius: 0.25rem;\n  background-color: #91b5e4;\n  color: #fff;\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.25rem;\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   h3.text[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   h3.address[_ngcontent-%COMP%] {\n  white-space: break-spaces;\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   h3.comment[_ngcontent-%COMP%] {\n  white-space: break-spaces;\n}\n\n.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem;\n  margin-top: 0.25rem;\n  border-radius: 0.25rem;\n  background-color: #b5e0ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5TkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQXhORjs7QUE0TkE7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7QUF6TkY7O0FBNE5JO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBMU5OOztBQW1PUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBak9WOztBQW1PVTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBak9aOztBQXFPUTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQW5PVjs7QUFzT1k7RUFDRSxvQkFBQTtBQXBPZDs7QUF1T1k7RUFDRSx5QkFBQTtBQXJPZDs7QUF3T1k7RUFDRSx5QkFBQTtBQXRPZDs7QUEyT1E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBek9WIiwiZmlsZSI6InJlcXVlc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50IHtcclxuLy8gICAtLXBhZGRpbmctdG9wOiAzMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuaW5mby1yb3cge1xyXG4vLyAgIHBhZGRpbmc6IDAgMTBweDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbCB7XHJcbi8vICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbi8vICAgaW9uLWJhZGdlIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiA1cHg7XHJcbi8vICAgICB0b3A6IC00cHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAjdHJpZ2dlci1idXR0b24ge1xyXG4vLyAgIG1hcmdpbjogYXV0bztcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gfVxyXG5cclxuLy8gaW9uLWJ1dHRvbiB7XHJcbi8vICAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIG1haW4ge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbi8vIH1cclxuXHJcbi8vIC5tLWJvcmRlci1ib3R0b20ge1xyXG4vLyAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjRUVFO1xyXG4vLyB9XHJcblxyXG4vLyAuZm9jdXMtc3R1ZGVudCB7XHJcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2Ny44ZGVnLCAjRjhBNTc3IDAuNDUlLCAjRkNCNzMzIDk5Ljg3JSk7XHJcbi8vICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLmZvY3VzLXRlYWNoZXIge1xyXG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNjcuOGRlZywgIzU5NTdmOCAwLjQ1JSwgIzI2M2RmYyA5OS44NyUpO1xyXG4vLyAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4vLyAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5mb2N1cy1hZG1pbiB7XHJcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2Ny44ZGVnLCAjMDI3ODc2IDAuNDUlLCAjMDA5MzM0IDk5Ljg3JSk7XHJcbi8vICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLm9wdGlvbi1zdHVkZW50IHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4vLyAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4vLyAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1yb3cuZmVhdHVyZWQtcm93IHtcclxuLy8gICBwYWRkaW5nOiAxMHB4IDAgOHB4O1xyXG4vLyAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5mZWF0dXJlZC1yb3cgaW9uLWljb24ge1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLmZlYXR1cmVkLXJvdyBpb24tY29sIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZmVhdHVyZWQtcm93IGlvbi10ZXh0IHtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBtYXJnaW46IGF1dG87XHJcbi8vIH1cclxuXHJcbi8vIGlvbi10YWItYnV0dG9uIHtcclxuLy8gICAtLWJhY2tncm91bmQtZm9jdXNlZDogcmVkICFpbXBvcnRhbnQ7XHJcbi8vICAgLS1jb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuZGl2aWRlci10b3Age1xyXG4vLyAgIGJvcmRlci10b3A6IHNvbGlkIDhweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4vLyB9XHJcblxyXG4vLyAubmV3cyB7XHJcbi8vICAgLmltZy13cmFwcGVyIHtcclxuLy8gICAgIGhlaWdodDogY2FsYygoMTAwdncgKiAwLjggLSAzMnB4KSAqIDQgLyA3LjUpO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbi8vICAgICBpbWcge1xyXG4vLyAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gaW9uLWNhcmQge1xyXG4vLyAgIG1hcmdpbjogMTBweCAxNXB4IDEwcHggMDtcclxuLy8gICBib3gtc2hhZG93OiBub25lO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuLy8gICBib3JkZXI6IHNvbGlkIDFweCAjRUVFO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY2FyZC1oZWFkZXIge1xyXG4vLyAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY2FyZC10aXRsZSxcclxuLy8gaW9uLWNhcmQtY29udGVudCB7XHJcbi8vICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY2FyZC1jb250ZW50IHtcclxuLy8gICBwYWRkaW5nOiAwcHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gICBmb250LXNpemU6IDEycHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1jYXJkLXRpdGxlIHtcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5pbm5lci1zY3JvbGwsXHJcbi8vIC5zY3JvbGwteSB7XHJcbi8vICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyAgIGJhY2tncm91bmQ6IHJlZDtcclxuLy8gfVxyXG5cclxuLy8gLnNpemUxNSB7XHJcbi8vICAgd2lkdGg6IDE1cHg7XHJcbi8vICAgaGVpZ2h0OiAxNXB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24taXRlbS5sYXN0IC5pb24taXRlbSB7XHJcbi8vICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xyXG4vLyAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1sYWJlbC5idG4ge1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmNvbC1hdmEge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbi8vICAgaW9uLWF2YXRhciB7XHJcbi8vICAgICB3aWR0aDogNzAlO1xyXG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgbWFyZ2luOiBhdXRvO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLm1vZGFsLXN0dWRlbnQge1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4vLyAgIHotaW5kZXg6IDI7XHJcbi8vICAgYm94LXNoYWRvdzogMCAycHggNXB4ICM5ZjlmOWY7XHJcbi8vICAgbGVmdDogMDtcclxuLy8gICByaWdodDogMDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWF2YXRhciB7XHJcbi8vICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tc2xpZGVzIHtcclxuLy8gICBpb24tY2FyZC10aXRsZSB7XHJcbi8vICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbi8vICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuLy8gICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuLy8gICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuLy8gICB9XHJcblxyXG4vLyAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4vLyAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4vLyAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbi8vICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4vLyAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmFjY291bnQtaW5mbyB7XHJcbi8vICAgbWFyZ2luLXRvcDogOHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuaW5mby1yb3cge1xyXG4vLyAgIG1hcmdpbi10b3A6IDhweDtcclxuLy8gfVxyXG5cclxuLy8gLmZlYXR1cmVkLXJvdyB7XHJcbi8vICAgaW9uLWljb24ge1xyXG4vLyAgICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4ubS1lcnJvciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcclxuICBtaW4taGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQtbGFib3JhdG9yeSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE1LjVyZW0pO1xyXG5cclxuICBpb24tbGlzdCB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICBpb24tbGFiZWwge1xyXG5cclxuICAgICAgICAvLyBoMy5uYW1lLXBhdGllbnQge1xyXG4gICAgICAgIC8vICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAvLyAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBkaXYuYXBwb2ludG1lbnQtZGF0ZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIGRpdi5yZXF1ZXN0LXR5cGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MWI1ZTQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LmluZm8ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcblxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAmLnRleHQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFkZHJlc3Mge1xyXG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuY29tbWVudCB7XHJcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LnN0YXR1cyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjVlMGZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_requests_requests_module_ts.js.map