"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
class LoginPageRoutingModule {
}
LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) { return new (t || LoginPageRoutingModule)(); };
LoginPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginPageRoutingModule });
LoginPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);








class LoginPageModule {
}
LoginPageModule.ɵfac = function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); };
LoginPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule] }); })();


/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/constant.class */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/main.service */ 1557);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 1188);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/notification.service */ 2013);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/general-service */ 888);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);













class LoginPage {
  constructor(mainService, http, router, storage, loadingController, toastController, localStorage, notificationService, platform, navCtrl, generalService, authService) {
    this.mainService = mainService;
    this.http = http;
    this.router = router;
    this.storage = storage;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.localStorage = localStorage;
    this.notificationService = notificationService;
    this.platform = platform;
    this.navCtrl = navCtrl;
    this.generalService = generalService;
    this.authService = authService;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.localStorage.getSelectedUser().then((res) => {
      //   if (res) {
      //     this.navCtrl.navigateRoot(['/main/laboratory']);
      //   }
      // });
      _this.localStorage.get('deviceInfo').then(res => {
        _this.deviceInfo = res; // console.log(this.deviceInfo);
      }); // Xác thực người dùng


      _this.authService.checkToken().subscribe(res => {
        // console.log('this.authService.checkToken() res : ', res);
        const objRes = res.ret[0];
        const codeRes = objRes.code;

        if (res.ret) {
          if (codeRes === 0) {
            // Success
            _this.router.navigate(['/main/requests']);
          } else if (codeRes === 401) {
            // Code 401: Không xác thực được người dùng;
            localStorage.removeItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.TOKEN);
            localStorage.removeItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.USER_INFO);

            _this.router.navigate(['/login']);

            _this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, `${codeRes}: Hệ thống không xác thực được người dùng`);
          } else if (codeRes === 403) {
            // Code 403: Người dùng không có quyền truy cập vào hệ thống.
            localStorage.removeItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.TOKEN);
            localStorage.removeItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.USER_INFO);

            _this.router.navigate(['/login']);

            _this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, `${codeRes}: Người dùng không có quyền truy cập`);
          } else {
            _this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, `${codeRes}: Lỗi hệ thống, vui lòng liên hệ quản trị viên`);
          }
        } else {
          _this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, 'Lỗi hệ thống, vui lòng liên hệ quản trị viên');
        }
      }); // Set INIT_DATA for local-storage


      yield _this.setInitData();
    })();
  }

  setInitData() {
    this.generalService.getInitialData().subscribe(resData => {
      if (resData !== null) {
        localStorage.setItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.INIT_DATA, JSON.stringify(resData));
      }
    }, error => {// console.log('Error Set INIT_DATA for local-storage');
    });
  }

  showAlertPassword() {
    this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.WARNING, 'Vui lòng liên hệ quản trị viên để cấp lại mật khẩu');
  }

  doLogin() {
    var _this2 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.username) {
        _this2.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, 'Tên đăng nhập không được để trống');

        return;
      }

      const loading = yield _this2.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Đang tiến hành đăng nhập...'
      });
      yield loading.present();
      /*this.localStorage.get('fcmToken').then(resToken => {
            });*/

      _this2.deviceInfo = {
        deviceId: _this2.deviceInfo.uuid,
        deviceName: _this2.platform.is('ios') ? 'IOS' : _this2.deviceInfo.model
      };

      _this2.mainService.login(_this2.username, _this2.password).subscribe(res => {
        if (+res.result === 0) {
          loading.dismiss();

          _this2.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, 'Sai tên đăng nhập hoặc mật khẩu');

          return;
        } // console.log('Constant.STORAGE_USERINFO, = ', Constant.STORAGE_USERINFO, res);


        _this2.storage.set(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.STORAGE_USERINFO, res).then(res3 => {
          loading.dismiss(); // this.router.navigate(['/main']);

          localStorage.setItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.TOKEN, res3.token); // console.log('res3: ', res3);

          _this2.navCtrl.navigateRoot(['/main/requests']);
        });
      }, error => {
        // console.log('error : ', error);
        if (error.error.message) {
          _this2.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, 'Sai tên đăng nhập hoặc mật khẩu');
        } else {
          _this2.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.DANGER, `Có lỗi khi đăng nhập: ${error.error.message}`);
        }

        loading.dismiss();
      });
    })();
  }

}

LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_2__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_general_service__WEBPACK_IMPORTED_MODULE_6__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService));
};

LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: LoginPage,
  selectors: [["app-login"]],
  decls: 27,
  vars: 2,
  consts: [["src", "/assets/images/login_bg_top.png", 2, "position", "absolute", "right", "0"], [1, "ion-no-margin", "ion-no-padding", "ion-no-box-shadow", 2, "margin-top", "150px"], [1, "ion-no-padding"], [1, "ion-cen"], ["src", "/assets/images/invivo.png", 2, "max-width", "100%", "width", "125px", "margin", "5px auto"], ["lines", "none", 1, "ion-margin-bottom"], ["size", "small", "color", "primary", "name", "person-outline"], ["placeholder", "T\u00EAn \u0111\u0103ng nh\u1EADp", 3, "ngModel", "ngModelChange"], ["size", "small", "color", "primary", "name", "key-outline"], ["type", "password", "placeholder", "M\u1EADt kh\u1EA9u", 3, "ngModel", "ngModelChange"], [1, "ion-margin-bottom"], ["color", "primary", 3, "click"], ["color", "primary", 2, "width", "100%", 3, "click"], [1, "footer-bg"], ["color", "primary", 1, "ion-text-center", 2, "font-size", "12px", "background", "transparent"], [2, "margin", "5px 0", "color", "#555", "font-size", "14px"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-card", 1)(3, "ion-card-header", 2)(4, "ion-card-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ion-img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-card-content")(7, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "ion-icon", 6)(9, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_10_listener($event) {
        return ctx.username = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "ion-icon", 8)(13, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_14_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 10)(16, "ion-label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginPage_Template_ion_label_click_16_listener() {
        return ctx.showAlertPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Qu\u00EAn m\u1EADt kh\u1EA9u");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 10)(19, "ion-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_19_listener() {
        return ctx.doLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "\u0110\u0103ng nh\u1EADp");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 13)(22, "label", 14)(23, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Phi\u00EAn b\u1EA3n: 1.0.1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "\u00A9 Copyright Mesoco");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.password);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.TextValueAccessor],
  styles: ["ion-item[_ngcontent-%COMP%] {\n  border: solid 1px var(--ion-color-border-light);\n  \n  border-radius: 4px;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n.my-custom-class[_ngcontent-%COMP%] {\n  background: red;\n}\n\n.footer-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 127px;\n  background: url(\"/assets/images/login_bg_bot.png\");\n  background-repeat: no-repeat;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FBSUYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0taW9uLWNvbG9yLWJvcmRlci1saWdodCk7XHJcbiAgLyptYXJnaW4tYm90dG9tOiAxMHB4OyovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5pdGVtLWlubmVye1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5teS1jdXN0b20tY2xhc3N7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcbi5mb290ZXItYmd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTI3cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9sb2dpbl9iZ19ib3QucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/constant.class */ 6443);
/* harmony import */ var _shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/url.class */ 7802);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);

//  import { AppConfigService } from '../../app-config.service';




class AuthService {
    // private configService: AppConfigService
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    login(payload) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + '/login', payload);
    }
    logout() {
        const headers = {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Authorization: `Bearer ${localStorage.getItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__.Constant.TOKEN)}`,
        };
        // let token = localStorage.getItem(localStorage.getItem(Constant.TOKEN));
        const token = 'Bearer ' + localStorage.getItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__.Constant.TOKEN);
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + _shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LOGOUT, token, { headers });
    }
    checkToken() {
        const headers = {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Authorization: `Bearer ${localStorage.getItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__.Constant.TOKEN)}`,
        };
        // let token = localStorage.getItem(localStorage.getItem(Constant.TOKEN));
        const token = 'Bearer ' + localStorage.getItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__.Constant.TOKEN);
        // return this.httpClient.post(environment.baseUrl + UrlConstant.VALIDATE, token, { headers });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + _shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.VALIDATE, token, { headers });
    }
    checkTokenAdmin() {
        const headers = {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Authorization: `Bearer ${localStorage.getItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__.Constant.TOKEN)}`,
        };
        let token = localStorage.getItem(localStorage.getItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__.Constant.TOKEN));
        token = 'Bearer ' + localStorage.getItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__.Constant.TOKEN);
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + _shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.VALIDATE_ADMIN, token, { headers });
    }
    checkTokenCSC() {
        const headers = {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Authorization: `Bearer ${localStorage.getItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__.Constant.TOKEN)}`,
        };
        // let token = localStorage.getItem(localStorage.getItem(Constant.TOKEN));
        const token = 'Bearer ' + localStorage.getItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__.Constant.TOKEN);
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + _shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.VALIDATE_CSC, token, { headers });
    }
    registration(payload) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + '/User/Signup', payload);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map