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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule
        ],
        providers: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/main.service */ 1557);
/* harmony import */ var _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/constants/constant.class */ 6443);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage.service */ 1188);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/notification.service */ 2013);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/general-service */ 888);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);















let LoginPage = class LoginPage {
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
        _this.deviceInfo = res;
        console.log(_this.deviceInfo);
      }); // Xác thực người dùng


      _this.authService.checkToken().subscribe(res => {
        console.log('this.authService.checkToken() res : ', res);
        const objRes = res.ret[0];
        const codeRes = objRes.code;

        if (res.ret) {
          if (codeRes === 0) {
            // Success
            _this.router.navigate(['/main/requests']);
          } else if (codeRes === 401) {
            // Code 401: Không xác thực được người dùng;
            localStorage.removeItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.TOKEN);
            localStorage.removeItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.USER_INFO);

            _this.router.navigate(['/login']);

            _this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.DANGER, `${codeRes}: Hệ thống không xác thực được người dùng`);
          } else if (codeRes === 403) {
            // Code 403: Người dùng không có quyền truy cập vào hệ thống.
            localStorage.removeItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.TOKEN);
            localStorage.removeItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.USER_INFO);

            _this.router.navigate(['/login']);

            _this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.DANGER, `${codeRes}: Người dùng không có quyền truy cập`);
          } else {
            _this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.DANGER, `${codeRes}: Lỗi hệ thống, vui lòng liên hệ quản trị viên`);
          }
        } else {
          _this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.DANGER, 'Lỗi hệ thống, vui lòng liên hệ quản trị viên');
        }
      }); // Set INIT_DATA for local-storage


      yield _this.setInitData();
    })();
  }

  setInitData() {
    this.generalService.getInitialData().subscribe(resData => {
      if (resData !== null) {
        localStorage.setItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.INIT_DATA, JSON.stringify(resData));
      }
    }, error => {
      console.log('Error Set INIT_DATA for local-storage');
    });
  }

  showAlertPassword() {
    this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.WARNING, 'Vui lòng liên hệ quản trị viên để cấp lại mật khẩu');
  }

  doLogin() {
    var _this2 = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.username) {
        _this2.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.DANGER, 'Tên đăng nhập không được để trống');

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

          _this2.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.DANGER, 'Sai tên đăng nhập hoặc mật khẩu');

          return;
        }

        console.log('Constant.STORAGE_USERINFO, = ', _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.STORAGE_USERINFO, res);

        _this2.storage.set(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.STORAGE_USERINFO, res).then(res3 => {
          loading.dismiss(); // this.router.navigate(['/main']);

          localStorage.setItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.TOKEN, res3.token);
          console.log('res3: ', res3);

          _this2.navCtrl.navigateRoot(['/main/requests']);
        });
      }, error => {
        console.log('error : ', error);

        if (error.error.message) {
          _this2.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.DANGER, 'Sai tên đăng nhập hoặc mật khẩu');
        } else {
          _this2.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_4__.Constant.DANGER, `Có lỗi khi đăng nhập: ${error.error.message}`);
        }

        loading.dismiss();
      });
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _services_main_service__WEBPACK_IMPORTED_MODULE_3__.MainService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}, {
  type: _services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController
}, {
  type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_8__.GeneralService
}, {
  type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/constant.class */ 6443);
/* harmony import */ var _shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/url.class */ 7802);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);




//  import { AppConfigService } from '../../app-config.service';


let AuthService = class AuthService {
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
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], AuthService);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  border: solid 1px var(--ion-color-border-light);\n  /*margin-bottom: 10px;*/\n  border-radius: 4px;\n}\n\n.item-inner {\n  border: none !important;\n}\n\n.my-custom-class {\n  background: red;\n}\n\n.footer-bg {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 127px;\n  background: url(\"/assets/images/login_bg_bot.png\");\n  background-repeat: no-repeat;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FBSUYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0taW9uLWNvbG9yLWJvcmRlci1saWdodCk7XHJcbiAgLyptYXJnaW4tYm90dG9tOiAxMHB4OyovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5pdGVtLWlubmVye1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5teS1jdXN0b20tY2xhc3N7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcbi5mb290ZXItYmd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTI3cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9sb2dpbl9iZ19ib3QucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <img style=\"position: absolute;right: 0\" src=\"/assets/images/login_bg_top.png\">\r\n  <ion-card style=\"margin-top: 150px\" class=\"ion-no-margin ion-no-padding ion-no-box-shadow\">\r\n    <ion-card-header class=\"ion-no-padding\">\r\n      <ion-card-title class=\"ion-cen\">\r\n        <ion-img style=\"max-width: 100%;width: 125px;margin: 5px auto;\" src=\"/assets/images/invivo.png\"></ion-img>\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n        <ion-icon size=\"small\" color=\"primary\" name=\"person-outline\"></ion-icon>\r\n        <ion-label></ion-label>\r\n        <ion-input [(ngModel)]=\"username\" placeholder=\"Tên đăng nhập\"></ion-input>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n        <ion-icon size=\"small\"  color=\"primary\" name=\"key-outline\"></ion-icon>\r\n        <ion-label></ion-label>\r\n        <ion-input [(ngModel)]=\"password\" type=\"password\" placeholder=\"Mật khẩu\"></ion-input>\r\n      </ion-item>\r\n      <div class=\"ion-margin-bottom\">\r\n        <ion-label (click)=\"showAlertPassword()\" color=\"primary\">Quên mật khẩu</ion-label>\r\n      </div>\r\n      <div class=\"ion-margin-bottom\">\r\n        <ion-button (click)=\"doLogin()\" style=\"width: 100%\" color=\"primary\">Đăng nhập</ion-button>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <div class=\"footer-bg\">\r\n    <label style=\"font-size: 12px;background: transparent\" color=\"primary\" class=\"ion-text-center\">\r\n      <p style=\"margin: 5px 0;color: #555;font-size: 14px;\">Phiên bản: 1.0.1</p>\r\n      <p style=\"margin: 5px 0;color: #555;font-size: 14px;\">© Copyright Mesoco</p>\r\n    </label>\r\n  </div>\r\n</ion-content>\r\n<!--<ion-footer class=\"ion-no-border\">\r\n    <ion-title style=\"font-size: 12px;background: transparent\" color=\"primary\" class=\"ion-text-center\">Version: 6.2</ion-title>\r\n</ion-footer>-->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map