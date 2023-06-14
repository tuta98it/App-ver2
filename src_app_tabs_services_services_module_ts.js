"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_services_services_module_ts"],{

/***/ 4810:
/*!**************************************************!*\
  !*** ./src/app/tabs/services/services.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesModule": () => (/* binding */ ServicesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.page */ 1689);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_modules_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/share.module */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









class ServicesModule {
}
ServicesModule.ɵfac = function ServicesModule_Factory(t) { return new (t || ServicesModule)(); };
ServicesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(),
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{ path: '', component: _services_page__WEBPACK_IMPORTED_MODULE_0__.ServicesPage }]),
        src_app_shared_modules_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ServicesModule, { declarations: [_services_page__WEBPACK_IMPORTED_MODULE_0__.ServicesPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_shared_modules_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule], exports: [_services_page__WEBPACK_IMPORTED_MODULE_0__.ServicesPage] }); })();


/***/ }),

/***/ 1689:
/*!************************************************!*\
  !*** ./src/app/tabs/services/services.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesPage": () => (/* binding */ ServicesPage)
/* harmony export */ });
/* harmony import */ var C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_shared_pipe_is_empty_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pipe/is-empty.pipe */ 4904);
/* harmony import */ var src_app_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constants/constant.class */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general-service */ 888);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);









const _c0 = ["popover"];

function ServicesPage_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "L\u1ECDc d\u1EEF li\u1EC7u theo ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-item", 17)(4, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Nh\u00F3m b\u1EC7nh ph\u1EA9m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function ServicesPage_ng_template_10_Template_ion_select_ionChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.handleChangeTypeGroup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-select-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Nh\u00F3m b\u1EC7nh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-select-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Nh\u00F3m s\u1EA3n Ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("interfaceOptions", ctx_r1.customPopoverOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 1);
  }
}

function ServicesPage_ion_item_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ServicesPage_ion_item_21_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const item_r6 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.clickItemService(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 2, item_r6.price, "VND"));
  }
}

function ServicesPage_ng_template_25_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-text")(2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "T\u00EAn d\u1ECBch v\u1EE5: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.itemService.name);
  }
}

function ServicesPage_ng_template_25_ion_item_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-text")(2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Mi\u00EAu t\u1EA3: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r11.itemService.description);
  }
}

function ServicesPage_ng_template_25_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-text")(2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Thu\u1ED9c nh\u00F3m: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r12.itemService.orderTypeGroup.name);
  }
}

function ServicesPage_ng_template_25_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-text")(2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "M\u00E3: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r13.itemService.code);
  }
}

function ServicesPage_ng_template_25_ion_item_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-text")(2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "M\u00E3 HIS: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r14.itemService.his);
  }
}

function ServicesPage_ng_template_25_ion_item_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-text")(2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Th\u1EDDi gian tr\u1EA3 k\u1EBFt qu\u1EA3: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r15.itemService.appointmentTime);
  }
}

function ServicesPage_ng_template_25_ion_item_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-text")(2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Lo\u1EA1i m\u1EABu: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r16.itemService.sampleType);
  }
}

function ServicesPage_ng_template_25_ion_item_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-text")(2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Ph\u01B0\u01A1ng ph\u00E1p b\u1EA3o qu\u1EA3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r17.itemService.preservationMethod);
  }
}

function ServicesPage_ng_template_25_ion_item_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-text")(2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Ph\u01B0\u01A1ng ph\u00E1p test: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r18.itemService.testMethod);
  }
}

function ServicesPage_ng_template_25_ion_item_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-text")(2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Gi\u00E1: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 1, ctx_r19.itemService.price, "VND"));
  }
}

function ServicesPage_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 25)(2, "ion-buttons", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ServicesPage_ng_template_25_Template_ion_buttons_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.setOpenModalDetailItemService(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " \u0110\u00F3ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 0)(8, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ServicesPage_ng_template_25_ion_item_9_Template, 5, 1, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ServicesPage_ng_template_25_ion_item_10_Template, 5, 1, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ServicesPage_ng_template_25_ion_item_11_Template, 5, 1, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ServicesPage_ng_template_25_ion_item_12_Template, 5, 1, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ServicesPage_ng_template_25_ion_item_13_Template, 5, 1, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ServicesPage_ng_template_25_ion_item_14_Template, 5, 1, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ServicesPage_ng_template_25_ion_item_15_Template, 5, 1, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ServicesPage_ng_template_25_ion_item_16_Template, 5, 1, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ServicesPage_ng_template_25_ion_item_17_Template, 5, 1, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ServicesPage_ng_template_25_ion_item_18_Template, 6, 4, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.titleDetailItemService);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.itemService == null ? null : ctx_r3.itemService.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.itemService == null ? null : ctx_r3.itemService.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.itemService == null ? null : ctx_r3.itemService.orderTypeGroup.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.itemService == null ? null : ctx_r3.itemService.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.itemService == null ? null : ctx_r3.itemService.his);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.itemService == null ? null : ctx_r3.itemService.appointmentTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.itemService == null ? null : ctx_r3.itemService.sampleType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.itemService == null ? null : ctx_r3.itemService.preservationMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.itemService == null ? null : ctx_r3.itemService.testMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.itemService == null ? null : ctx_r3.itemService.price);
  }
}

class ServicesPage {
  constructor(generalService, loadingCtrl, notificationService) {
    this.generalService = generalService;
    this.loadingCtrl = loadingCtrl;
    this.notificationService = notificationService;
    this.isPopoverOpenFillter = false;
    this.isModalOpenDetailItemService = false;
    this.listService = [];
    this.items = [];
    this.listOrderType = [];
    this.listGroupOrderType = [];
    this.customPopoverOptions = {
      // header: 'Trạng thái đơn hàng',
      subHeader: 'Chọn nhóm cần lọc' // message: 'Chỉ chọn một TTĐH',

    };
    this.titleDetailItemService = 'Công thức máu';
    this.progress = 0;
    this.listService = [{
      designation: 'Nhóm máu ABO RH',
      price: '45000'
    }, {
      designation: 'Glucose',
      price: '17000'
    }, {
      designation: 'GPT (ALT)',
      price: '95000'
    }, {
      designation: 'Adenovirus Ag test nhanh',
      price: '100000'
    }, {
      designation: 'TSI (Thyroid Stimulating Immunoglobulins)',
      price: '135000'
    }, {
      designation: 'GGT',
      price: '135000'
    }, {
      designation: 'FibroTest Score',
      price: '109000'
    }, {
      designation: 'ValueHbA1c',
      price: '65000'
    }, {
      designation: 'Pleural Fluid',
      price: '69000'
    }, {
      designation: 'JEV (Viêm não Nhật Bản)',
      price: '335000'
    }, {
      designation: 'Tiglycarnitine (C5:1)',
      price: '185000'
    }, {
      designation: 'FibroTest Score',
      price: '109000'
    }, {
      designation: 'ValueHbA1c',
      price: '65000'
    }, {
      designation: 'Pleural Fluid',
      price: '69000'
    }, {
      designation: 'Nắm tay',
      price: '0'
    }];
  }

  loadingDataOrderType() {
    setInterval(() => {
      this.progress += 0.01; // Reset the progress bar when it reaches 100%
      // to continuously show the demo

      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }

  showLoading() {
    var _this = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: 'Dữ liệu đang tải lên ...',
        duration: 1000
      });
      loading.present();
    })();
  }

  ngOnInit() {
    var _this2 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.getListInitialData();

      yield _this2.getOrderType();
    })();
  }

  onIonInfinite(ev) {
    this.generateItemsOrderType();
    setTimeout(() => {
      ev.target.complete();
    }, 500);
  }

  getOrderType() {
    // this.loadingDataOrderType();
    // Show thông báo delay thời gian chờ loading dữ liệu
    this.showLoading();
    this.generalService.getOrderType().subscribe(res => {
      if (res !== null) {
        this.listOrderType = res; // Restar biến item về emplu để chuẩn cho quá trình quét dữ liệu

        this.items = []; // Bắt đầu danh sách với 50 phần tử

        this.generateItemsOrderType(); // console.log('this.listOrderType', this.listOrderType);
      }
    }, errorRes => {
      if (errorRes) {
        this.notificationService.showMessage(src_app_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_2__.Constant.DANGER, `Dữ liệu trả về đã có lỗi xảy ra`);
      }
    });
  }

  getOrderTypeGroup() {
    // this.loadingDataOrderType();
    // Show thông báo delay thời gian chờ loading dữ liệu
    this.showLoading();
    this.generalService.listOrderGroup().subscribe(res => {
      if (res !== null) {
        this.listGroupOrderType = res; // Restar biến item về emplu để chuẩn cho quá trình quét dữ liệu

        this.items = []; // Bắt đầu danh sách với 50 phần tử

        this.generateItemsOrderType(); // console.log('this.listGroupOrderType', this.listGroupOrderType);
      }
    }, errorRes => {
      if (errorRes) {
        this.notificationService.showMessage(src_app_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_2__.Constant.DANGER, `Dữ liệu trả về đã có lỗi xảy ra`);
      }
    });
  }

  getListInitialData() {
    this.initDatas = JSON.parse(localStorage.getItem(src_app_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_2__.Constant.INIT_DATA));
  }

  presentPopoverFillter(e) {
    this.popover.event = e;
    this.isPopoverOpenFillter = true;
  }

  handleChangeSearch(event) {
    this.keywordSearch = event.target.value; // payload dữ liệu chuyền đi

    const payload = {
      search: this.keywordSearch,
      partnerId: 0,
      orderTypeGroupId: 0,
      page: 1,
      pageSize: 250,
      showDisable: true,
      showPrice0: true
    };
    this.generalService.getOrderTypeFilter(payload).subscribe(res => {
      if (res != null) {
        this.listOrderType = res.data; // console.log('this.listOrderType: ', this.listOrderType);
        // Restar biến item về emplu để chuẩn cho quá trình quét dữ liệu

        this.items = [];
        this.generateItemsOrderType();
      }
    }, errorRes => {
      if (errorRes) {
        this.notificationService.showMessage(src_app_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_2__.Constant.DANGER, `Đã có lỗi xảy ra khi hệ thống trả dữ liệu về`);
      }
    });
  }

  clickItemService(item) {
    this.itemService = item; //  về DV ${item}

    this.titleDetailItemService = `Thông tin chi tiết`;
    this.setOpenModalDetailItemService(true);
  }

  setOpenModalDetailItemService(isOpen) {
    this.isModalOpenDetailItemService = isOpen;
  }

  isEmpty(value) {
    return new src_app_shared_pipe_is_empty_pipe__WEBPACK_IMPORTED_MODULE_1__.IsEmptyPipe().transform(value);
  }

  handleChangeTypeGroup(event) {
    const value = event.target.value;

    switch (value) {
      case 0:
        // this.getOrderType();
        break;

      case 1:
        // this.getOrderTypeGroup();
        break;
    }
  }

  generateItemsOrderType() {
    // Lượng phần tử tối đa.
    const maxLength = 50; // index của phần tử đầu tiền từ chuỗi cần thêm

    const index = this.items.length; // Lượng phần tử có thể thêm vào

    const sub = this.listOrderType.length - this.items.length;
    const count = Math.min(maxLength, sub); // Lấy mảng con từ mảng this.listOrderType.length bắt đầu từ vị trí index và có độ dài count

    const subArray = this.listOrderType.slice(index, index + count); // Nối thêm vào mảng this.items

    this.items = this.items.concat(subArray); // console.log('this.items', this.items);
  }

}

ServicesPage.ɵfac = function ServicesPage_Factory(t) {
  return new (t || ServicesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService));
};

ServicesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ServicesPage,
  selectors: [["app-services"]],
  viewQuery: function ServicesPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.popover = _t.first);
    }
  },
  decls: 26,
  vars: 3,
  consts: [[1, "ion-padding"], [1, "service-header"], [1, "service-search"], [1, "search-filter"], ["placeholder", "T\u00ECm ki\u1EBFm ...", 3, "ionChange"], ["slot", "start", 3, "click"], ["slot", "icon-only", "name", "funnel-outline"], [3, "isOpen", "didDismiss"], ["popover", ""], [1, "title-service"], [1, "title-designation"], ["slot", "end", 1, "title-price"], [1, "service-content"], [1, "service-list-content"], ["class", "service-item", "button", "", 3, "click", 4, "ngFor", "ngForOf"], [2, "height", "0.5rem", 3, "ionInfinite"], [3, "isOpen"], [2, "font-size", "small"], ["position", "stacked"], ["name", "trail-sign-outline", "slot", "start"], ["label", "Nh\u00F3m b\u1EC7nh ph\u1EA9m", "interface", "alert", "label-placement", "floating", "placeholder", "Ch\u1ECDn nh\u00F3m ...", 2, "font-size", "small", 3, "interfaceOptions", "ionChange"], [2, "font-size", "small", 3, "value"], ["button", "", 1, "service-item", 3, "click"], [1, "service-designation"], ["slot", "end", 1, "service-price"], ["color", "primary"], ["slot", "end", 3, "click"], [4, "ngIf"], [2, "font-weight", "600"]],
  template: function ServicesPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ion-searchbar", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function ServicesPage_Template_ion_searchbar_ionChange_4_listener($event) {
        return ctx.handleChangeSearch($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-buttons", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ServicesPage_Template_ion_buttons_click_5_listener($event) {
        return ctx.presentPopoverFillter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-popover", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("didDismiss", function ServicesPage_Template_ion_popover_didDismiss_8_listener() {
        return ctx.isPopoverOpenFillter = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ServicesPage_ng_template_10_Template, 12, 3, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-item", 9)(12, "ion-label", 10)(13, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Ch\u1EC9 \u0111\u1ECBnh");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-label", 11)(16, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Gi\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "ion-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ServicesPage_ion_item_21_Template, 6, 5, "ion-item", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-infinite-scroll", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInfinite", function ServicesPage_Template_ion_infinite_scroll_ionInfinite_22_listener($event) {
        return ctx.onIonInfinite($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "ion-infinite-scroll-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-modal", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ServicesPage_ng_template_25_Template, 19, 11, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isOpen", ctx.isPopoverOpenFillter);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isOpen", ctx.isModalOpenDetailItemService);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe],
  styles: ["ion-content[_ngcontent-%COMP%]   div.service-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: -1rem;\n  z-index: 1;\n  background-color: white;\n}\nion-content[_ngcontent-%COMP%]   div.service-header[_ngcontent-%COMP%]   div.service-search[_ngcontent-%COMP%]   div.search-filter[_ngcontent-%COMP%] {\n  display: flex;\n}\nion-content[_ngcontent-%COMP%]   div.service-header[_ngcontent-%COMP%]   div.service-search[_ngcontent-%COMP%]   div.search-filter[_ngcontent-%COMP%]   ion-list.filter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content[_ngcontent-%COMP%]   div.service-header[_ngcontent-%COMP%]   ion-item.title-service[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nion-content[_ngcontent-%COMP%]   div.service-content[_ngcontent-%COMP%]   div.service-list-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.service-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: #f1f1f1;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s ease;\n}\nion-content[_ngcontent-%COMP%]   div.service-content[_ngcontent-%COMP%]   div.service-list-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.service-item[_ngcontent-%COMP%]   ion-label.service-designation[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  white-space: break-spaces;\n}\nion-content[_ngcontent-%COMP%]   div.service-content[_ngcontent-%COMP%]   div.service-list-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.service-item[_ngcontent-%COMP%]   ion-label.service-price[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\nion-content[_ngcontent-%COMP%]   div.service-content[_ngcontent-%COMP%]   div.service-list-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.service-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUFKO0FBR007RUFDRSxhQUFBO0FBRFI7QUFHUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRFY7QUFPSTtFQUNFLGVBQUE7QUFMTjtBQWtCUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtBQWhCVjtBQW1CWTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFqQmQ7QUFvQlk7RUFDRSxrQkFBQTtBQWxCZDtBQXNCVTtFQUNFLDJCQUFBO0FBcEJaIiwiZmlsZSI6InNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBkaXYuc2VydmljZS1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogLTFyZW07XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgZGl2LnNlcnZpY2Utc2VhcmNoIHtcclxuICAgICAgZGl2LnNlYXJjaC1maWx0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIGlvbi1saXN0LmZpbHRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbS50aXRsZS1zZXJ2aWNlIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGRpdi5zZXJ2aWNlLWNvbnRlbnQge1xyXG4gICAgZGl2LnNlcnZpY2UtbGlzdC1jb250ZW50IHtcclxuXHJcbiAgICAgIC8vIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAvLyBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTdyZW0pO1xyXG5cclxuICAgICAgaW9uLWxpc3Qge1xyXG5cclxuICAgICAgICBpb24taXRlbS5zZXJ2aWNlLWl0ZW0ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgJi5zZXJ2aWNlLWRlc2lnbmF0aW9uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5zZXJ2aWNlLXByaWNlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIl19 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_services_services_module_ts.js.map