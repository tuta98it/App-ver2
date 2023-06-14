(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
        // loadChildren: () => import('./pages/route/route.module').then( m => m.RoutePageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'main',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/push-notifications */ 1704);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/device */ 4744);
/* harmony import */ var _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/constants/constant.class */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/notification.service */ 2013);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/storage.service */ 1188);



/*import {Badge} from '@awesome-cordova-plugins/badge/ngx';*/
// import {StatusBar, Style} from '@capacitor/status-bar';








class AppComponent {
  constructor(storage, platform, router, notificationService, localStorage) {
    this.storage = storage;
    this.platform = platform;
    this.router = router;
    this.notificationService = notificationService;
    this.localStorage = localStorage;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // try {
      //   StatusBar.setStyle({style: Style.Dark});
      // } catch (e) {
      // }
      const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getInfo();
      const deviceId = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getId(); // console.log(info);

      const deviceInfo = {
        name: info.name ? info.name : 'LA',
        platform: info.platform,
        operatingSystem: info.operatingSystem,
        model: info.model,
        uuid: deviceId.uuid
      };

      _this.localStorage.set('deviceInfo', deviceInfo).then(res => {});

      yield _this.storage.create();

      if (_this.platform.is('ios') || _this.platform.is('android')) {
        const platforms = _this.platform.platforms().join(','); //     // If using a custom driver:
        // await this.storage.defineDriver(MyCustomDriver)
        // Request permission to use push notifications
        // iOS will prompt user and return if they granted permission or not
        // Android will just grant without prompting


        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.requestPermissions().then(result => {
          if (result.receive === 'granted') {
            // Register with Apple / Google to receive push via APNS/FCM
            // console.log('granted', this.platform.platforms());
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.register().then(en => {// console.log('PushNotifications.register()');
            });
          } else {// Show some error
          }
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registration', token => {
          /*console.log('token', token.value);
          alert('Push registration success, token: ' + token.value);
          console.log('mSchool token:', token.value);*/
          _this.localStorage.set('fcmToken', token.value).then(res => {// alert('saved token success: ' + token.value);
            // console.log('saved token success');
          });
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registrationError', error => {// console.log('Error on registration: ' + JSON.stringify(error));
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationReceived', notification => {// alert('Push received: ' + JSON.stringify(notification));
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationActionPerformed', notification => {
          //alert('Push action performed: ' + JSON.stringify(notification)); //JSON.stringify(notification));
          // console.log('pushNotificationActionPerformed', JSON.stringify(notification));
          // console.log('notification', notification.notification.data);
          // console.log('tap', notification.actionId);
          //
          let notiType = +notification.notification.data['gcm.notification.messageType'];

          if (!notiType) {
            notiType = +notification.notification.data.messageType;
          }
          /*
          Message = 0,
          Announcement = 1,
          Score = 2,
          Feedback = 3,
          Attendent = 4,
          Review = 5,
          Polling = 6,
          RequestPermission = 7*/


          if (notiType === _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_3__.Constant.NOTIFICATION_TYPE_SMS || notiType === _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_3__.Constant.NOTIFICATION_TYPE_MEDIA) {
            let messageId = notification.notification.data['gcm.notification.messageId'];

            if (!messageId) {
              messageId = notification.notification.data.messageId;
            }

            _this.router.navigateByUrl(`/student-message/${messageId}/${notiType}`);
          } else if (notiType === _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_3__.Constant.NOTIFICATION_TYPE_CONVERSATION) {
            _this.router.navigate(['/main/tab4']);
          } else if (notiType === _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_3__.Constant.NOTIFICATION_TYPE_POLLING) {
            _this.router.navigate(['/student-polling']);
          } else if (notiType === _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_3__.Constant.NOTIFICATION_TYPE_HOMEWORK) {
            _this.router.navigate(['/student-homework']);
          }
        });
      }
    })();
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-app");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage-angular */ 7566);
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-ionic-image-viewer */ 7353);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 5209);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general-service */ 888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








/*import { PhotoViewer } from '@ionic-native/photo-viewer';*/






/*https://www.npmjs.com/package/ngx-ionic-image-viewer*/
// @ts-ignore
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }, _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__.AppVersion, src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot({ animated: false, swipeBackEnabled: false }),
        _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__.IonicStorageModule.forRoot(),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_11__.NgxIonicImageViewerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__.IonicStorageModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_11__.NgxIonicImageViewerModule] }); })();


/***/ }),

/***/ 888:
/*!*********************************************!*\
  !*** ./src/app/services/general-service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralService": () => (/* binding */ GeneralService)
/* harmony export */ });
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/base.service */ 2365);
/* harmony import */ var _shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/url.class */ 7802);
/* harmony import */ var _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/constants/constant.class */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);


// import {Role} from '../model/role.class';


class GeneralService extends _shared_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    //taikhoan
    getTaikhoan() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TAIKHOAN);
    }
    deleteTaikhoan(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TAIKHOAN + '/' + id, null);
    }
    addTaikhoan(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TAIKHOAN, item);
    }
    updateTaikhoan(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TAIKHOAN + '/' + item.id, item, 'text');
    }
    updateUserPassword(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TAIKHOAN + '/ChangeUserPassword/' + item.id, item);
    }
    addGroup2User(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TAIKHOAN + '/AddGroup2User', item);
    }
    getUserLogin(username, password) {
        return this.get('/test/getUserLogin?password=' + password + '&userId=' + username);
    }
    getDetailTaikhoan(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TAIKHOAN + '/' + id, null);
    }
    getAllUser() {
        return this.get('/Login/getAllUsers');
    }
    getUserByRoleId(roleId) {
        return this.get(`/Login/GetUserByRole/${roleId}`);
    }
    //upload
    upload(formData) {
        return this.post('/file/upload', formData);
    }
    //Role
    getRole() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ROLE);
    }
    //Partners
    getListPartner() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PARTNERS);
    }
    getListRootPartner() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PARTNERS + '/GetRootPartnes');
    }
    getAddPartner(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PARTNERS, item);
    }
    addPartnerAccount(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ACCOUNTP, item);
    }
    getUpdatePartner(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PARTNERS + '/' + item.id, item);
    }
    deletePartner(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PARTNERS + '/' + id, null);
    }
    savePartnerRate(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PARTNERS + '/SavePartnerRate', item);
    }
    deletePartnerRate(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PARTNERS + '/DeletePartnerRate/' + id, null);
    }
    //SalesMan
    getListSalesMan() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SALESMAN);
    }
    getSaleManById(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SALESMAN + '/' + id);
    }
    addSalesMan(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SALESMAN, item);
    }
    addSalesManRate(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SALESMAN + '/SaveSalesManRate', item);
    }
    updateSalesMan(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SALESMAN + '/' + item.id, item);
    }
    deleteSalesMan(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SALESMAN + '/' + id, null);
    }
    saveSalesManRate(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SALESMAN + '/SaveSalesManRate', item);
    }
    //Group
    getGroup() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_NHOMTAIKHOAN);
    }
    deleteGroup(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_NHOMTAIKHOAN + '/' + id, null);
    }
    addGroup(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_NHOMTAIKHOAN, item);
    }
    updateGroup(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_NHOMTAIKHOAN + '/' + item.id, item, 'text');
    }
    getGroupOfUser(userId) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_NHOMTAIKHOAN + '/GetGroupOfUser/' + userId);
    }
    addUserToGroup(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_NHOMTAIKHOAN + '/AddUser2Group', item);
    }
    removeUserFromGroup(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_NHOMTAIKHOAN + '/RemoveUserFromGroup', item);
    }
    getUserOfGroup(groupId) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_USER + '/GetUserOfGroup/' + groupId);
    }
    updateGroupRole(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_NHOMTAIKHOAN + '/UpdateGroupRoles', item);
    }
    ///Login/GetInitialData
    getInitialData() {
        return this.get('/Login/GetInitialData');
    }
    getSystemConfig() {
        return this.get('/SystemConfigs');
    }
    updateSystemConfig(item) {
        return this.put('/SystemConfigs/' + item.id, item, 'text');
    }
    //System config
    saveSignature(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SYSTEM_CONFIG + '/SaveSignature', item);
    }
    getSignature() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SYSTEM_CONFIG + '/GetSignature');
    }
    //Banner
    getBanner() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_BANNER);
    }
    deleteBanner(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_BANNER + '/' + id, null);
    }
    addBanner(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_BANNER, item);
    }
    updateBanner(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_BANNER + '/' + item.id, item, 'text');
    }
    loginFB() {
        return this.post('Account/ExternalLogin', { provider: 'Facebook' });
    }
    //Quan ly an
    ///test/getListUpdateInfo
    getListUpdateInfo(item) {
        return this.post('/SppCase/getListUpdateInfo', item);
    }
    addBanAn(item) {
        return this.post('/SppCase/insert', item);
    }
    // /dm/LstBorderGuards/getList
    getLstBorderGuards(search) {
        return this.get('/dm/LstBorderGuards/getList', search);
    }
    getLstBorderGuardsByQuery(keyword) {
        return this.get('/dm/LstBorderGuards/autocomplete/' + keyword, {
            query: keyword,
        });
    }
    getListCaseLawBySppCase(search) {
        return this.get('/SppCase/getListCaseLaw', search);
    }
    getListRegisterBySppCase(search) {
        return this.get('/SppRegister/getList', search);
    }
    saveRegister(item) {
        return this.post('/SppRegister/save', item);
    }
    //ordertype-profile
    getOrderProfile() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPEPROFILE);
    }
    addOrderTypeProfile(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPEPROFILE + '/Add', item);
    }
    profileId(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPEPROFILE + '/' + id, id);
    }
    updateOrderTypeProfile(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPEPROFILE + '/' + item.id, item, 'text');
    }
    deleteOrderTypeProfile(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPEPROFILE + '/' + id, null);
    }
    addOrderTypes(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPEPROFILE + '/AddDetail', item);
    }
    removeDetailOrderTypes(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPEPROFILE + '/RemoveDetail', item);
    }
    //customer
    getCustomer(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CUSTOMER + '/' + id, null);
    }
    getCustomers(payload) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CUSTOMER, payload);
    }
    addCustomer(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CUSTOMER, item);
    }
    updateCustomer(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CUSTOMER + '/' + item.id, item, 'text');
    }
    deleteCustomer(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CUSTOMER + '/' + id, null);
    }
    searchCustomer(query, pageNo, pageSize) {
        return this.get(`${_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CUSTOMER}/query?query=${query}&pageNo=${pageNo}&pageSize=${pageSize}`, null);
    }
    getCustomerTransactions(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CUSTOMER + '/CustomerTransactions', payload);
    }
    // partner
    getPartners() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PARTNER);
    }
    addPartner(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PARTNER, item);
    }
    updatePartner(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PARTNER + '/' + item.id, item, 'text');
    }
    //releasePoint
    getReleasePoints() {
        return this.get('/ReleasePoints');
    }
    //account
    getAccount(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ACCOUNT + '/' + id, null);
    }
    getSystemAccount() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ACCOUNT + '/system');
    }
    getReleasedAccount() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ACCOUNT + '/released');
    }
    putReleasedPoint(releasedPoint, reason) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ACCOUNT +
            '/releasedPoint?' +
            'releasedPoint=' +
            releasedPoint +
            '&reason=' +
            reason, releasedPoint);
    }
    //order
    addOrder(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER, item);
    }
    checkPermission(per) {
        const listPermission = new Set();
        const userInfo = JSON.parse(localStorage.getItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_2__.Constant.USER_INFO));
        if (userInfo.roles) {
            // tslint:disable-next-line:prefer-for-of
            for (const role of userInfo.roles) {
                listPermission.add(role);
            }
        }
        return listPermission.has(per);
    }
    //cancel point
    cancelPoint(item) {
        return this.post('/CancelPoints', item);
    }
    //SpecimenType
    getSpecimenType() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMENTYPE);
    }
    deleteSpecimenType(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMENTYPE + '/' + id, null);
    }
    addSpecimenType(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMENTYPE, item);
    }
    updateSpecimenType(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMENTYPE + '/' + item.id, item, 'text');
    }
    // Laboratory
    getLaboratory() {
        return this.get('/Laboratory/GetAllLaboratory');
    }
    postLaboratory(payload) {
        return this.post('/Laboratory/PostLaboratory', payload);
    }
    putLaboratory(payload) {
        return this.post('/Laboratory/PutLaboratory', payload);
    }
    //MachineType
    getMachineType() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINETYPE);
    }
    deleteMachineType(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINETYPE + '/' + id, null);
    }
    addMachineType(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINETYPE, item);
    }
    updateMachineType(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINETYPE + '/' + item.id, item, 'text');
    }
    // OrderType
    getOrderType() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPE);
    }
    getOrderss(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPE + '/' + id, id);
    }
    getOrderTypeFilter(item) {
        return this.post('/OrderType/GetOrderTypeFilter', item);
    }
    deleteOrderType(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPE + '/' + id, null);
    }
    // getOrdersId(id: number): any {
    //   return this.get(UrlConstant.LIST_ORDER + '/' + id, id);
    // }
    addOrderType(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPE, item);
    }
    updateOrderType(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPE + '/' + item.id, item, 'text');
    }
    filterOrderType(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPE + '/GetOrderTypeFilter', item);
    }
    downloadOrderTypeFilter(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPE + '/DownloadOrderTypeFilter', item);
    }
    setResetDown(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPE + '/SetResetDown', item);
    }
    setResetDownMulti(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPE + '/SetResetDownMulti', item);
    }
    getLabsByOrderTypeId(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPE + '/GetLabs/' + id);
    }
    setLabToOrderType(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPE + '/SetLabToOrderType', payload);
    }
    deleteLabToOrderType(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPE + '/DeleteLabToOrderType', payload);
    }
    // Machine
    getMachine() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE);
    }
    deleteMachine(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE + '/' + id, null);
    }
    addMachine(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE, item);
    }
    updateMachine(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE + '/' + item.id, item, 'text');
    }
    // Machine order type
    getAllMachineOrderTypes(payload) {
        return this.post('/MachineOrderTypes/QueryMachineOrderType', payload);
    }
    getMachineOrderType(machineId) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE_ORDER_TYPE + '/' + machineId);
    }
    deleteMachineOrderTypes(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE_ORDER_TYPE + '/' + id, null);
    }
    addMachineOrderTypes(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE_ORDER_TYPE, item);
    }
    updateMachineOrderTypes(payload) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE_ORDER_TYPE, payload);
    }
    enableMachineOrderTypes(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE_ORDER_TYPE + '/EnableMachineOrderType', payload);
    }
    disableMachineOrderTypes(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE_ORDER_TYPE + '/DisableMachineOrderType', payload);
    }
    // Task type
    getTaskType() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASKTYPE);
    }
    getTaskTypeByMachineId(machineId) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASKTYPE + `/GetTaskTypeByMachineId/${machineId}`);
    }
    getTaskTypeBySepcimenType(specimenId) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASKTYPE + `/BySpecimentType/${specimenId}`);
    }
    getTaskTypeBySepcimenId(specimenId) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASKTYPE + `/BySpeciment/${specimenId}`);
    }
    deleteTaskType(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASKTYPE + '/' + id, null);
    }
    addTaskType(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASKTYPE, item);
    }
    updateTaskType(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASKTYPE + '/' + item.id, item, 'text');
    }
    getTaskTypeByOrderType(orderTypeId) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASKTYPE + `/ByOrderType/${orderTypeId}`);
    }
    setTaskTypesByOrder(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASKTYPE + '/SetTaskTypesByOrder', item);
    }
    // Specimen
    getSpecimen(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/Query', payload);
    }
    getSpecimenBarcode(code, width, height) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN +
            '/BarCode?code=' +
            code +
            '&width=' +
            width +
            '&height=' +
            height, null, 'text');
    }
    takeSpecimen(payload) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/TakeSpecimen/' + payload.id, payload);
    }
    cancelSpecimen(specimenid) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/CancelSpecimen/' + specimenid, null);
    }
    deleteStorageSpecimen(id) {
        return this.delete(`/SpecimenStorage/${id}`, null);
    }
    rejectSpecimen(specimenId, payload) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/RejectSpecimen/' + specimenId, payload);
    }
    genSpecimenId(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/GenSpecimenID', payload);
    }
    getSpecimenCancelled(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/QuerySpecimenCancelled', payload);
    }
    updateSpecimenStatus(payload, id) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/UpdateSpecimenStatus/' + id, payload);
    }
    reportReceiveSpecimen(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/ReportReceiveSpecimen', payload);
    }
    reportSpecimenDetail(payload) {
        return this.post('/Specimen/ReportSpecimenDetail', payload);
    }
    exportReportReceiveSpecimen(payload) {
        const responseType = 'blob';
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/ReportExcelReceiveSpecimen', payload, {}, responseType);
    }
    receiveSpecimenDetail(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/ReceiveSpecimenDetail', payload);
    }
    updateSpecimenDetail(payload) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/UpdateSpecimenDetail', payload);
    }
    getSpecimenDetail(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/GetSpecimenDetail/' + id);
    }
    genStaffCodeSpecimenID(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/GenStaffCodeSpecimenID', payload);
    }
    ///double test
    exportDoubleTestFile(sid) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_SPECIMEN + '/ExportDoubleTestFile/' + sid, '', 'blob');
    }
    readDoubleTest(payload) {
        return this.post('/ReadDoubleTest/UploadFile', payload);
    }
    // Patient
    getLstPatient() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PATIENT);
    }
    getPatient(payload) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PATIENT + '/Query', payload);
    }
    createPatient(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PATIENT, item);
    }
    deletePatient(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PATIENT + '/' + id, null);
    }
    updatePatient(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_PATIENT + '/' + item.id, item);
    }
    // ORDER - PHIEU
    createOrder(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER, item);
    }
    getOrder() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER);
    }
    getOrdersId(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/' + id, id);
    }
    updateOrders(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER, item);
    }
    deleteOrderDetails(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/RemoveOrderDetail', item);
    }
    deleteOrder(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/' + id, null);
    }
    findTaskByOrderType(specimenID) {
        const item = { specimenID };
        return this.post('/Orders/FindTaskByOrderType', item);
    }
    receiveSpecimen(payload) {
        return this.post('/Orders/ReceiveSpecimen', payload);
    }
    getOrderForAccountant(payload) {
        return this.post('/Orders/GetOrderForAccountant', payload);
    }
    receiveCODOrder(payload) {
        return this.post('/Orders/ReceiveCODOrder', payload);
    }
    storageSpecimen(payload) {
        return this.post('/SpecimenStorage/SaveSpecimenStorage', payload);
    }
    destroySpecimen(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/DestroySpecimen', payload);
    }
    getResultValue(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/QueryResultValue', payload);
    }
    validResultValue(state, payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/ValidResultValue/' + state, payload);
    }
    updateConsultInfo(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/UpdateConsultInfo', payload);
    }
    resetDown(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/ResetDown', payload);
    }
    getReportPatient(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/ReportPatient', payload);
    }
    exportExecl(payload) {
        const responseType = 'blob';
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/ReportExcelPatient', payload, {}, responseType);
    }
    exportPDF(payload) {
        const responseType = 'blob';
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/ExportPdf', payload, {}, responseType);
    }
    reportOrderConsultFilter(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/ReportOrderConsultFilter', payload);
    }
    updateOrderPartner(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/UpdateOrderPartner', payload);
    }
    getChangeOrderPartnerLog(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/GetChangeOrderPartnerLog', payload);
    }
    orderDetailForOutSource(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/OrderDetailForOutSource', payload);
    }
    queryStorageSpecimen(payload) {
        return this.post('/SpecimenStorage/QuerySpecimenStorage', payload);
    }
    queryDestroySpecimen(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/QueryDestroySpecimen', payload);
    }
    // request
    getRequest(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_REQUEST + '/GetRequests', payload);
    }
    getRequestById(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_REQUEST + '/' + id);
    }
    addRequest(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_REQUEST, item);
    }
    addRequestDetail(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_REQUEST + '/AddRequestDetail', payload);
    }
    removeRequestReturnDetail(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_REQUEST + '/RemoveRequestReturnDetail', payload);
    }
    updateRequest(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_REQUEST, item, 'text');
    }
    assignRequest(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_REQUEST + '/AssignRequest', payload);
    }
    cancelRequest(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_REQUEST + '/CancelRequest', payload);
    }
    unCancelRequest(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_REQUEST + '/UnCancelRequest', payload);
    }
    assignReturnUserForRequest(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_REQUEST + '/AssignReturnUserForRequest', payload);
    }
    reportRequestFilter(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_REQUEST + '/ReportRequestFilter', payload);
    }
    getDeliveryDetailByRequestId(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_REQUEST + `/GetDeliveryDetailByRequestId/` + id);
    }
    // Profile
    getProfile(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_PROFILE + '/GetProfileFilter', payload);
    }
    getProfileById(profileID) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_PROFILE + `/GetProfileById/${profileID}`);
    }
    addProfile(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_PROFILE, item);
    }
    updateProfile(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_PROFILE, item, 'text');
    }
    addProfileTest(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_PROFILE + '/AddProfileTest', item);
    }
    removeProfileTest(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.URL_PROFILE + '/RemoveProfileTest', item);
    }
    // Result type
    getResultType() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_RESULTTYPE);
    }
    deleteResultType(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_RESULTTYPE + '/' + id, null);
    }
    addResultType(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_RESULTTYPE, item);
    }
    updateResultType(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_RESULTTYPE + '/' + item.id, item, 'text');
    }
    getResultTypeByByTaskType(taskTypeId) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_RESULTTYPE + `/ByTaskType/${taskTypeId}`);
    }
    setResultTypesByTask(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_RESULTTYPE + '/SetResultTypesByTask', item);
    }
    //Barcode template
    getBarcodeTemplate() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_BARCODE_TEMPLATE);
    }
    getBarcodeTemplateById(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_BARCODE_TEMPLATE + '/' + id);
    }
    deleteBarcodeTemplate(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_BARCODE_TEMPLATE + '/' + id, null);
    }
    addBarcodeTemplate(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_BARCODE_TEMPLATE, item);
    }
    updateBarcodeTemplate(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_BARCODE_TEMPLATE + '/' + item.id, item, 'text');
    }
    //Task
    getTasks() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASK);
    }
    getTask(payload) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASK + '/Query', payload);
    }
    getTaskById(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASK + '/' + id);
    }
    saveTaskTestResult(id, data) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASK + '/SaveTestResult/' + id, data);
    }
    getTaskByMachineId(machineId) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TASK + `/GetTaskByMachineId/${machineId}`);
    }
    //TestResult
    updateTestResult(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TEST_RESULT + '/' + item.id, item);
    }
    approveTestResult(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TEST_RESULT + '/Approve/' + item.id, item);
    }
    cancelTestResult(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TEST_RESULT + '/Cancel/' + item.id, item);
    }
    updateResultValue(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TEST_RESULT + '/Save', payload);
    }
    updateResultNote(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TEST_RESULT + '/SaveNoteResult', payload);
    }
    saveFile(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TEST_RESULT + '/SaveFile', payload);
    }
    removeFile(id) {
        return this.delete(`/ResultValues/RemoveFile/${id}`, id);
    }
    getResultValueFromMachine(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TEST_RESULT + '/ResultValueFromMachine', payload);
    }
    getResultValueFromMachineLog(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TEST_RESULT + '/ResultValueFromMachineLog', payload);
    }
    getResultPCR(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TEST_RESULT + '/QueryResultPcr', payload);
    }
    saveResultPCR(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TEST_RESULT + '/SavePcrNumber', payload);
    }
    copyResultFromMachine(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TEST_RESULT + '/CopyResultFromMachine', payload);
    }
    mappingResultFromMachine(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_TEST_RESULT + '/MappingResultFromMachine', payload);
    }
    readPcrResult(payload) {
        return this.post('/ReadPcrResult/UploadFile', payload);
    }
    // chemical category
    getChemicalCategory() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CHEMICAL_CATEGORY);
    }
    deleteChemicalCategory(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CHEMICAL_CATEGORY + '/' + id, null);
    }
    addChemicalCategory(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CHEMICAL_CATEGORY, item);
    }
    updateChemicalCategory(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CHEMICAL_CATEGORY + '/' + item.id, item, 'text');
    }
    //category
    getCategory() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CATEGORY);
    }
    getCategoryWithChemical() {
        return this.get('/ChemicalCategories/CategoryWithChemical');
    }
    deleteCategory(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CATEGORY + '/' + id, null);
    }
    addCategory(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CATEGORY, item);
    }
    updateCategory(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CATEGORY + '/' + item.id, item, 'text');
    }
    // WarehouseChemical
    getWarehouseChemical() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_INPUT_WAREHOUSE);
    }
    getWarehouseChemicalFullDetail() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_INPUT_WAREHOUSE + '/GetInputWarehouse2');
    }
    deleteWarehouseExport(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_WAREHOUSE_EXPORT + '/' + id, null);
    }
    deleteWarehouseImport(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_INPUT_WAREHOUSE + '/' + id, null);
    }
    addWarehouseChemical(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_INPUT_WAREHOUSE, item);
    }
    updateWarehouseChemical(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_INPUT_WAREHOUSE + '/' + item.id, item, 'text');
    }
    getChemicalByBarCode(code) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_INPUT_WAREHOUSE + `/GetChemicalByBarCode/${code}`);
    }
    getEvictionChemicalByBarCode(code) {
        return this.get(`/WarehouseEvictions/GetChemicalByBarCode/${code}`);
    }
    // Chemical
    getChemical() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CHEMICAL);
    }
    deleteChemical(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CHEMICAL + '/' + id, null);
    }
    addChemical(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CHEMICAL, item);
    }
    updateChemical(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CHEMICAL + '/' + item.id, item, 'text');
    }
    generateChemicalCode(categoryId, chemicalCategoryId) {
        return this.get(`${_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CHEMICAL}/generateCode/${categoryId}/${chemicalCategoryId}`);
    }
    // OderType Group
    listOrderGroup() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERGROUP);
    }
    addOrderGroup(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERGROUP, item);
    }
    updateOrderGroup(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERGROUP + '/' + item.id, item);
    }
    deleteOrderGroup(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERGROUP + '/' + id, null);
    }
    // Consumption Chemical
    getConsumptionChemical() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CONSUMABLE_RATE);
    }
    deleteConsumptionChemical(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CONSUMABLE_RATE + '/' + id, null);
    }
    addConsumptionChemical(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CONSUMABLE_RATE, item);
    }
    updateConsumptionChemical(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CONSUMABLE_RATE + '/' + item.id, item, 'text');
    }
    getComsumptionChemical(payload) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_CONSUMABLE_RATE + '/Query', payload);
    }
    // Warehouse
    getWarehouse(payload) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_WAREHOUSE + '/Query', payload);
    }
    getInventoryHistory(code) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_WAREHOUSE + `/GetInventoryHistory/${code}`);
    }
    // Machine result type
    getMachineResultType(payload) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE_RESULT_TYPE + '/Query', payload);
    }
    addMachineResultType(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE_RESULT_TYPE, item);
    }
    updateMachineResultType(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE_RESULT_TYPE + '/' + item.id, item, 'text');
    }
    deleteMachineResultType(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_MACHINE_RESULT_TYPE + '/' + id, null);
    }
    getBarCodeInputWarehouse(id) {
        return this.get(`/InputWarehouses/GetBarCodeInputWarehouse/${id}`);
    }
    getBarCodeInputWarehouseChemical(id, chemicalId) {
        return this.get(`/InputWarehouses/GetBarCodeInputWarehouseByChemicalId/${id}/${chemicalId}`);
    }
    // Export warhouse
    getWarehouseExportNeedConfirm(filter) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_WAREHOUSE_EXPORT +
            '/GetWarehouseExportNeedConfirmReceived', filter);
    }
    confirmReceived(id) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_WAREHOUSE_EXPORT + '/ConfirmReceived/' + id, null);
    }
    getWarehouseExport(filter) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_WAREHOUSE_EXPORT + '/GetWarehouseExport', filter);
    }
    addWarehouseExport(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_WAREHOUSE_EXPORT, item);
    }
    // ReInput warhouse
    getReInputWarehouse(filter) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.RE_INPUT_WAREHOUSE + '/Get', filter);
    }
    saveReInputWarehouse(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.RE_INPUT_WAREHOUSE + '/Save', payload);
    }
    deleteReInputWarehouse(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.RE_INPUT_WAREHOUSE + '/Delete/' + id, '');
    }
    // Suppliers
    getSuppliers() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SUPPLIERS);
    }
    addSuppliers(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SUPPLIERS, item);
    }
    updateSuppliers(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SUPPLIERS + '/' + item.id, item, 'text');
    }
    deleteSuppliers(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SUPPLIERS + '/' + id, null);
    }
    // Manufacturers
    getManufacturers() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.MANUFACTURERS);
    }
    addManufacturers(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.MANUFACTURERS, item);
    }
    updateManufacturers(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.MANUFACTURERS + '/' + item.id, item, 'text');
    }
    deleteManufacturers(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.MANUFACTURERS + '/' + id, null);
    }
    // WarehouseInventory
    getWarehouseInventory(filter) {
        return this.post('/WarehouseInventory/GetWarehouseInventory', filter);
    }
    addWarehouseInventory(item) {
        return this.post('/WarehouseInventory/PostWarehouseInventory', item);
    }
    startInventory(id) {
        return this.post(`/WarehouseInventory/StartInventory/${id}`, null);
    }
    completeInventory(id) {
        return this.post(`/WarehouseInventory/CompleteInventory/${id}`, null);
    }
    processInventory(item) {
        return this.post('/WarehouseInventory/ProcessInventory', item);
    }
    getAllInventoryById(id) {
        return this.get(`/WarehouseInventory/GetAllInventoryById/${id}`);
    }
    // Comsumable-units
    getComsumableUnit() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.CONSUMABLE_UNITS);
    }
    deleteComsumableUnit(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.CONSUMABLE_UNITS + '/' + id, null);
    }
    addComsumableUnit(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.CONSUMABLE_UNITS, item);
    }
    updateComsumableUnit(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.CONSUMABLE_UNITS + '/' + item.id, item, 'text');
    }
    // Warehouse-inventory
    getInventoryList(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.CONSUMABLE_UNITS, item);
    }
    // Move from machine to machine
    getMoveToOtherMachine(filter) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.MOVE_MACHINE + '/Get', filter);
    }
    saveMoveToOtherMachine(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.MOVE_MACHINE + '/Save', payload);
    }
    deleteMoveToOtherMachine(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.MOVE_MACHINE + '/Delete/' + id, '');
    }
    // Print-configs
    getAllPrintConfigs() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.PRINT_CONFIG);
    }
    getPrintConfigById(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.PRINT_CONFIG + '/' + id, null);
    }
    addPrintConfigs(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.PRINT_CONFIG, item);
    }
    updatePrintConfigs(item) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.PRINT_CONFIG + '/' + item.id, item, 'text');
    }
    deletePrintConfigs(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.PRINT_CONFIG + '/' + id, null);
    }
    // Calibrate
    getAllCalibrate(payload) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.CALIBRATE + '/Query', payload);
    }
    getCalibrateById(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.CALIBRATE + '/' + id, null);
    }
    addCalibrate(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.CALIBRATE, payload);
    }
    updateCalibrate(payload) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.CALIBRATE + '/' + payload.id, payload, 'text');
    }
    cancelCalibrate(id) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.CALIBRATE + '/Cancel/' + id, null);
    }
    //Quality-controls
    getAllQualityControls(payload) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.QUALITY_CONTROLS + '/Query', payload);
    }
    getQualityControlsById(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.QUALITY_CONTROLS + '/' + id, null);
    }
    addQualityControls(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.QUALITY_CONTROLS, payload);
    }
    updateQualityControls(payload) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.QUALITY_CONTROLS + '/' + payload.id, payload, 'text');
    }
    cancelQualityControls(id) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.QUALITY_CONTROLS + '/Cancel/' + id, null);
    }
    postSameOrderType(item) {
        return this.post('/OrderType/PostSameOrderType', item);
    }
    getOrderTypeByRID(rId) {
        return this.post(`/OrderType/GetOrderTypeByRID/${rId}`, null);
    }
    addNewPcrtest(num) {
        return this.post(`/Pcrtest/AddNewPcrtest?num=${num}`, null);
    }
    updatePcrtest(payload) {
        return this.post(`/Pcrtest/UpdatePcrtest`, payload);
    }
    getPatientInfo(code) {
        return this.post(`/Pcrtest/GetPatientInfo/${code}`, null);
    }
    pcrtestFilter(payload) {
        return this.post('/Pcrtest/PcrtestFilter', payload);
    }
    //Print
    printOrder(payload) {
        return this.post('/Print/PrintOrder', payload);
    }
    printMultiOrder(payload) {
        return this.post('/Print/PrintOrders', payload);
    }
    getResultValueByOrderCode(orderCode) {
        return this.get(`/Orders/GetResultValueByOrderCode/${orderCode}`);
    }
    updateResultValue2(payload) {
        return this.post(`/Orders/UpdateResultValue`, payload);
    }
    getResultValueLog(id) {
        return this.get(`/ResultValueLog/GetByResultId/` + id);
    }
    getListRequestType() {
        return this.get('/Request/GetRequestType');
    }
    //Normal Range
    addNormalRange(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.NORMAL_RANGE, payload);
    }
    updateNormalRange(payload) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.NORMAL_RANGE, payload);
    }
    getListResultUrineNote() {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.NORMAL_RANGE + '/GetListResultUrineNote');
    }
    postResultUrineNote(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.NORMAL_RANGE + '/PostResultUrineNote', payload);
    }
    putResultUrineNote(payload) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.NORMAL_RANGE + '/PutResultUrineNote', payload);
    }
    getNormalRangeByTestCode(code) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.NORMAL_RANGE + '/GetNormalRangeByTestCode/' + code, null);
    }
    removeSpecimenDetail(id) {
        return this.delete(`/Specimen/RemoveSpecimenDetail/${id}`, id);
    }
    setEmergency(id) {
        return this.post(`/Orders/SetEmergency/${id}`, null);
    }
    unSetEmergency(id) {
        return this.post(`/Orders/UnSetEmergency/${id}`, null);
    }
    /// Delivery
    genDeliveryCode() {
        return this.post(`/Delivery/GenDeliveryCode`, null);
    }
    postDelivery(payload) {
        return this.post(`/Delivery/PostDelivery`, payload);
    }
    putDelivery(payload) {
        return this.put(`/Delivery/PutDelivery`, payload);
    }
    addDeliveryDetail(payload) {
        return this.post(`/Delivery/AddDeliveryDetail`, payload);
    }
    getDeliveryFilter(payload) {
        return this.post(`/Delivery/GetDeliveryFilter`, payload);
    }
    removeDeliveryDetail(payload) {
        return this.post(`/Delivery/RemoveDeliveryDetail`, payload);
    }
    updateDeliveryDetail(payload) {
        return this.post(`/Delivery/UpdateDeliveryDetail`, payload);
    }
    getDeliveryDetailByOrderId(id) {
        return this.get(`/Delivery/GetDeliveryDetailByOrderId/` + id);
    }
    saveProfessionalAssistant(id) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SYSTEM_CONFIG + '/SaveProfessionalAssistant?id=' + id, null);
    }
    saveProfessionalCouncil(id) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SYSTEM_CONFIG + '/SaveProfessionalCouncil?id=' + id, null);
    }
    getSystemConfigByName(name) {
        return this.get(`/SysConfig/` + name);
    }
    //Billing
    getBillToPay(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.BILLING + '/QueryOrderNeedPaidWeb', payload);
    }
    getBillPaid(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.BILLING + '/QueryOrderPaid', payload);
    }
    paidMoney(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.BILLING + '/PaidMoney', payload);
    }
    searchOrderTypeFilterNew(item) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDERTYPE + '/SearchOrderTypeFilterNew', item);
    }
    addOrderDetail(item) {
        return this.post('/Orders/AddOrderDetail', item);
    }
    uploadResultOutsource(formData, orderId, resultTypeId, orderTypeId) {
        return this.post(`/Upload/UploadFileOutsource?orderId=${orderId}&resultTypeId=${resultTypeId}&orderTypeId=${orderTypeId}`, formData);
    }
    updateResultFromMachine(payload) {
        return this.post('/ResultValues/UpdateResultFromMachine', payload);
    }
    getPartner(id) {
        return this.get(`/Partners/${id}`);
    }
    //reports
    baoCaoDoanhSo(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/BaoCaoDoanhSo', payload);
    }
    baoCaoDoanhSoNgay(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/BaoCaoDoanhSoTheoNgay', payload);
    }
    baoCaoDoanhSoChoCTV(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/BaoCaoDoanhSoTheoCTVFilter', payload);
    }
    baoCaoDoanhSoChoNVLM(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/BaoCaoDoanhSoChoNVLMFilter', payload);
    }
    baoCaoDoanhSoChoNVKD(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/BaoCaoDoanhSoChoKinhDoanhFilter', payload);
    }
    //SendSpecimen
    getSendSpecimenFilter(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SEND_SPECIMEN + '/GetSendSpecimenFilter', payload);
    }
    putSendSpecimen(payload) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SEND_SPECIMEN + '/PutSendSpecimen', payload);
    }
    postSendSpecimen(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SEND_SPECIMEN + '/PostSendSpecimen', payload);
    }
    assignSendSpecimen(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SEND_SPECIMEN + '/AssignSendSpecimen', payload);
    }
    genSendSpecimenCode() {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SEND_SPECIMEN + '/GenSendSpecimenCode', null);
    }
    getSendSpecimenById(id) {
        return this.get(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.SEND_SPECIMEN + '/GetSendSpecimenById/' + id);
    }
    //
    getLabsByOrderDetailId(id) {
        return this.get(`/Orders/GetLabs/${id}`);
    }
    setLab(payload) {
        return this.post('/Orders/SetLab', payload);
    }
    resetLab(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.LIST_ORDER + '/ResetLab', payload);
    }
    //Appointment Time
    getAppointmentTimeFilter(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.APPOINTMENT_TIME + '/GetAppointmentTimeFilter', payload);
    }
    addAppointmentTime(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.APPOINTMENT_TIME + '/PostAppointmentTime', payload);
    }
    updateAppointmentTime(payload) {
        return this.put(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.APPOINTMENT_TIME + '/PutAppointmentTime', payload);
    }
    deleteAppointmentTime(id) {
        return this.delete(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.APPOINTMENT_TIME + '/DeleteAppointmentTime/' + id, null);
    }
    //Report
    getOrderTypeReport(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.REPORT + '/QueryOrderTypeReport', payload);
    }
    updateAllPriceOrderByPartner(item) {
        return this.post('/Orders/UpdateAllPriceOrderByPartner', item);
    }
    getWarehouseEvictionFilter(filter) {
        return this.post('/WarehouseEvictions/GetWarehouseEvictionFilter', filter);
    }
    addWarehouseEviction(item) {
        return this.post('/WarehouseEvictions', item);
    }
    updateDoPrint(item) {
        return this.post('/Partners/UpdateDoPrint', item);
    }
    //Firebase Token
    saveToken(payload) {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.USER_NOTIFICATION +
            `?token=${payload.token}&deviceType=${payload.deviceType}`, null);
    }
    sendNotification() {
        return this.post(_shared_constants_url_class__WEBPACK_IMPORTED_MODULE_1__.UrlConstant.USER_NOTIFICATION + '/testSingle', null);
    }
}
GeneralService.ɵfac = /*@__PURE__*/ function () { let ɵGeneralService_BaseFactory; return function GeneralService_Factory(t) { return (ɵGeneralService_BaseFactory || (ɵGeneralService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](GeneralService)))(t || GeneralService); }; }();
GeneralService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: GeneralService, factory: GeneralService.ɵfac });


/***/ }),

/***/ 2013:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



class NotificationService {
  constructor(toastController) {
    this.toastController = toastController;
    this.init();
  }

  init() {
    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  showMessage(color, message) {
    var _this = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.toast = yield _this.toastController.create({
        color,
        duration: 2000,
        message: 'Paired successfully',
        // @ts-ignore
        showCloseButton: true
      });
      _this.toast.color = color;
      _this.toast.message = message; // @ts-ignore

      yield _this.toast.present();
    })();
  }

}

NotificationService.ɵfac = function NotificationService_Factory(t) {
  return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController));
};

NotificationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NotificationService,
  factory: NotificationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1188:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/constant.class */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 190);




class StorageService {
  constructor(storage) {
    this.storage = storage;
    this.localstorage = null;
    this.init();
  }

  init() {
    var _this = this;

    return (0,C_Users_MSCTU_Desktop_Projects_app_partner_ver2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // If using, define drivers here: await this.storage.defineDriver(/*...*/);
      const storage = yield _this.storage.create();
      _this.localstorage = storage;
    })();
  } // Create and expose methods that users of this service can
  // call, for example:


  set(key, value) {
    return this.storage?.set(key, value);
  }

  get(key) {
    return this.storage?.get(key);
  }

  setSelectedUser(user) {
    return this.storage.set(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.STORAGE_USERINFO, user);
  }

  removeInfoUserStorage() {
    this.storage.remove(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.STORAGE_USERINFO);
  }

  removeInitialDataStorage() {
    this.storage.remove(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.INIT_DATA);
  }

  removeTokenStorage() {
    this.storage.remove(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.TOKEN);
  }

  removeAllStorage() {
    this.removeInfoUserStorage();
    this.removeInitialDataStorage();
    this.removeTokenStorage();
  }

  clearAll() {
    this.localstorage.clear();
  }

  getSelectedUser() {
    return this.storage.get(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_1__.Constant.STORAGE_USERINFO);
  }

}

StorageService.ɵfac = function StorageService_Factory(t) {
  return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage));
};

StorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: StorageService,
  factory: StorageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6443:
/*!****************************************************!*\
  !*** ./src/app/shared/constants/constant.class.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constant": () => (/* binding */ Constant)
/* harmony export */ });
class Constant {
}
Constant.DATE_FMT = 'dd/MM/yyyy';
Constant.DATETIME_FMT = 'dd/MM/yyyy HH:mm';
Constant.MESSAGE_DELETE_SUCCESS = 'Delete successfully.';
Constant.MESSAGE_ADD_SUCCESS = 'Add successfully.';
Constant.MESSAGE_SERVICE_ERROR = 'Service error.';
Constant.MESSAGE_UPDATE_SUCCESS = 'Update successfully.';
Constant.SUCCESS = 'success';
Constant.INFO = 'info';
Constant.ERROR = 'error';
Constant.DANGER = 'danger';
Constant.WARNING = 'warning';
Constant.TOKEN = 'token';
Constant.INIT_DATA = "initial_data";
Constant.ACTION = 'action';
Constant.USER_INFO = 'userinfo';
Constant.USER_LIST = 'loginusers';
Constant.CONFIG = 'config';
Constant.APPROVE_MODE = 'approve_mode';
Constant.WATCH_CONFIG = 'watch_config';
Constant.PRINT_TEMPLATES = 'print_temlates';
Constant.LOGIN_FAIL = 'Sai tên đăng nhập hoặc mật khẩu';
Constant.DELETE = 'Xóa';
Constant.CREATE = 'Thêm';
Constant.UPDATE = 'Sửa';
Constant.ADMIN_DASHBOARD = '/';
Constant.PORTAL_DASHBOARD = 'portal/dashboard';
Constant.CSC_DASHBOARD = 'csc/dashboard';
Constant.PHONG = 'phong';
Constant.SIGNUP_SUCCESS = 'Sign up successfully.';
Constant.STORAGE_USERINFO = 'userInfo';
Constant.NOTIFICATION_TYPE_SMS = 0;
Constant.NOTIFICATION_TYPE_MEDIA = 1;
Constant.NOTIFICATION_TYPE_SCORE = 2;
Constant.NOTIFICATION_TYPE_CONVERSATION = 3;
Constant.NOTIFICATION_TYPE_ABSENCE = 4;
Constant.NOTIFICATION_TYPE_REVIEW = 5;
Constant.NOTIFICATION_TYPE_POLLING = 6;
Constant.NOTIFICATION_TYPE_REQUEST_PERMISSION = 7;
Constant.NOTIFICATION_TYPE_HOMEWORK = 8;
Constant.LANGUAGE = 'language';


/***/ }),

/***/ 7802:
/*!***********************************************!*\
  !*** ./src/app/shared/constants/url.class.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlConstant": () => (/* binding */ UrlConstant)
/* harmony export */ });
class UrlConstant {
}
UrlConstant.LOGIN = '/oauth/token';
UrlConstant.LOGOUT = "/login/logout";
UrlConstant.VALIDATE = "/login/validate";
UrlConstant.VALIDATE_ADMIN = "/login/validateadmin";
UrlConstant.VALIDATE_CSC = "/login/validatecsc";
UrlConstant.LIST_USER = "/user";
UrlConstant.DELETE_USER = "/users/delete/";
UrlConstant.ADD_USER = "/users";
UrlConstant.DETAIL_USER = "/users";
UrlConstant.UPDATE_USER = "/users/update";
UrlConstant.LIST_ROLE = "/role";
UrlConstant.LIST_GROUP = "/group";
UrlConstant.LIST_ACTION = "/action";
UrlConstant.LIST_MENU = "/menu";
UrlConstant.LIST_STAFF = "/staff";
UrlConstant.LIST_WORKROLE = "/workRole";
UrlConstant.LIST_ORDER = "/orders";
UrlConstant.URL_REQUEST = "/request";
UrlConstant.URL_PROFILE = "/profile";
UrlConstant.URL_ORDER = "/orders";
UrlConstant.URL_REPORT = "/api";
UrlConstant.URL_COUNTRY = "/diccountries";
UrlConstant.URL_DEST_CITY = "/dicdestcities";
UrlConstant.URL_DISCOUNT_PROGRAM = "/discountprograms";
UrlConstant.URL_INDIVIDUAL_DISCOUNT = "/individualdiscounts";
UrlConstant.URL_PROVINCE = "/dicprovinces";
UrlConstant.URL_HSCODE = "/dichscodes";
UrlConstant.URL_PAYMENT = "/payment";
UrlConstant.SEND_SPECIMEN = "/SendSpecimen";
/*Dinh duong*/
UrlConstant.LIST_PHONG = "/department";
UrlConstant.LIST_LOAIMON = "/loaimon";
UrlConstant.LIST_TAIKHOAN = "/user";
UrlConstant.LIST_CUSTOMER = "/customer";
UrlConstant.LIST_PARTNER = "/partner";
UrlConstant.LIST_MONAN = "/monan";
UrlConstant.UPLOAD = "/file/upload";
UrlConstant.LIST_DONHANG = "/donHang";
UrlConstant.LIST_NHOMTAIKHOAN = "/group";
UrlConstant.LIST_PARTNERS = "/Partners";
UrlConstant.LIST_SALESMAN = "/SalesMan";
UrlConstant.LIST_ACCOUNTP = "/User";
UrlConstant.LIST_SPECIMENTYPE = "/specimentype";
UrlConstant.LIST_SPECIMEN = "/specimen";
UrlConstant.LIST_TASK = "/tasks";
UrlConstant.LIST_PATIENT = "/patients";
UrlConstant.LIST_ORDERTYPEPROFILE = "/OrderTypeProfile";
UrlConstant.LIST_ORDERGROUP = "/OrderTypeGroup";
UrlConstant.LIST_MACHINETYPE = "/MachineType";
UrlConstant.URL_LABORATORY = "Laboratory";
UrlConstant.LIST_BARCODE_TEMPLATE = "/BarcodeConfigs";
UrlConstant.LIST_ORDERTYPE = "/OrderType";
UrlConstant.LIST_MACHINE = "/Machine";
UrlConstant.LIST_TASKTYPE = "/TaskType";
UrlConstant.LIST_RESULTTYPE = "/ResultTypes";
UrlConstant.LIST_TEST_RESULT = "/ResultValues";
UrlConstant.LIST_KHO = "/warehouse";
UrlConstant.LIST_DMTHIETBI = "/dmdevice";
UrlConstant.LIST_THIETBI = "/device";
UrlConstant.LIST_DM_HANGHOA = "/dmgoods";
UrlConstant.LIST_HANGHOA = "/goods";
UrlConstant.LIST_MINETURNS = "/mineturns";
UrlConstant.LIST_TURNSSTATUS = "/turnsStatus";
UrlConstant.LIST_TONKHO = "/warehouseGoods";
UrlConstant.LIST_PHIEU_NHAPKHO = "/warehouseImport";
UrlConstant.LIST_PHIEU_XUATKHO = "/warehouseExport";
UrlConstant.LIST_MINETURNSSTAFF = "/mineturnsstaffs";
UrlConstant.LIST_WAREHOUSE_FIRST_IMPORT = "/warehousefirstimport";
UrlConstant.FILE = "/file";
UrlConstant.LIST_CALAMVIEC = "/workshift";
UrlConstant.LIST_VAITRO = "/workrole";
UrlConstant.LIST_BANNER = "/banners";
UrlConstant.LIST_ACCOUNT = "/accounts";
// ChemicalCategories
UrlConstant.LIST_CHEMICAL_CATEGORY = "/ChemicalCategories";
UrlConstant.LIST_CATEGORY = "/Categories";
UrlConstant.LIST_CHEMICAL = "/Chemicals";
UrlConstant.LIST_CONSUMABLE_RATE = "/ConsumableRates";
UrlConstant.LIST_INPUT_WAREHOUSE = "/InputWarehouses";
UrlConstant.LIST_WAREHOUSE = "/Warehouse";
UrlConstant.LIST_MACHINE_RESULT_TYPE = "/MachineResultType";
UrlConstant.LIST_WAREHOUSE_EXPORT = "/WarehouseExports";
UrlConstant.RE_INPUT_WAREHOUSE = "/ReInputWarehouse";
// Suppliers
UrlConstant.SUPPLIERS = "/Suppliers";
// Manufacturers
UrlConstant.MANUFACTURERS = "/Manufacturers";
// Consumable-Units
UrlConstant.CONSUMABLE_UNITS = "/ConsumableUnits";
// Warehouse-inventory
UrlConstant.WAREHOUSE_INVENTORY = "/ConsumableUnits";
// Move from machine to machine
UrlConstant.MOVE_MACHINE = "/MoveFromMachineToMachine";
// Print-configs
UrlConstant.PRINT_CONFIG = "/PrintConfigs";
// Calibrate
UrlConstant.CALIBRATE = "/Calibrates";
// Quality-controls
UrlConstant.QUALITY_CONTROLS = "/QualityControls";
// Machine Order Type
UrlConstant.LIST_MACHINE_ORDER_TYPE = "/MachineOrderTypes";
//System config
UrlConstant.SYSTEM_CONFIG = "/SysConfig";
//Normal range
UrlConstant.NORMAL_RANGE = "/NormalRange";
//Billing
UrlConstant.BILLING = "/Billing";
//Appointment Time
UrlConstant.APPOINTMENT_TIME = "/AppointmentTime";
//Report
UrlConstant.REPORT = "/Report";
//Notification
UrlConstant.USER_NOTIFICATION = "/UserNotification";


/***/ }),

/***/ 2365:
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _constants_constant_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constant.class */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storage.service */ 1188);







class BaseService {
    constructor(httpClient, platform, localStorage) {
        this.httpClient = httpClient;
        this.platform = platform;
        this.localStorage = localStorage;
    }
    get(url, params, responseType) {
        switch (responseType) {
            case 'text':
                return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, {
                    headers: this.createHeaders().set('skipLoading', 'true') || {},
                    params,
                    responseType: 'text',
                });
            case 'blob':
                return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, {
                    headers: this.createHeaders().set('skipLoading', 'true') || {},
                    params,
                    responseType: 'blob',
                });
            default:
                return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, {
                    headers: this.createHeaders().set('skipLoading', 'true') || {},
                    params
                });
        }
    }
    getLocal(url, params, responseType) {
        switch (responseType) {
            case 'text':
                return this.httpClient.get(url, {
                    headers: this.createHeaders().set('skipLoading', 'true') || {},
                    params,
                    responseType: 'text',
                });
            case 'blob':
                return this.httpClient.get(url, {
                    headers: this.createHeaders().set('skipLoading', 'true') || {},
                    params,
                    responseType: 'blob',
                });
            default:
                return this.httpClient.get(url, {
                    headers: this.createHeaders().set('skipLoading', 'true') || {},
                    params
                });
        }
    }
    /**
     * Create a new entity.
     * @param url the api url
     * @param data the entity to create
     */
    post(url, data, params, responseType) {
        switch (responseType) {
            case 'text':
                return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, data, {
                    headers: this.createHeaders() || {},
                    responseType: 'text',
                    params
                });
            case 'blob':
                return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, data, {
                    headers: this.createHeaders() || {},
                    responseType: 'blob',
                    params
                });
            case 'arraybuffer':
                return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, data, {
                    headers: this.createHeaders() || {},
                    responseType: 'blob',
                    params
                });
            default:
                return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, data, {
                    headers: this.createHeaders() || {},
                    params
                });
        }
    }
    postLocal(url, data, params, responseType) {
        switch (responseType) {
            case 'text':
                return this.httpClient.post(url, data, {
                    headers: this.createHeaders() || {},
                    responseType: 'text',
                    params
                });
            case 'blob':
                return this.httpClient.post(url, data, {
                    headers: this.createHeaders() || {},
                    responseType: 'blob',
                    params
                });
            case 'arraybuffer':
                return this.httpClient.post(url, data, {
                    headers: this.createHeaders() || {},
                    responseType: 'blob',
                    params
                });
            default:
                return this.httpClient.post(url, data, {
                    headers: this.createHeaders() || {},
                    params
                });
        }
    }
    postUpload(url, data, params, responseType) {
        switch (responseType) {
            case 'text':
                return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, data, {
                    headers: this.createHeadersIncaseUpload() || {},
                    responseType: 'text',
                    params
                });
            case 'blob':
                return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, data, {
                    headers: this.createHeadersIncaseUpload() || {},
                    responseType: 'blob',
                    params
                });
            case 'arraybuffer':
                return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, data, {
                    headers: this.createHeadersIncaseUpload() || {},
                    responseType: 'blob',
                    params
                });
            default:
                return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, data, {
                    headers: this.createHeadersIncaseUpload() || {},
                    params
                });
        }
    }
    /**
     * Update an entity.
     * @param url the api url
     * @param data the entity to be updated
     */
    put(url, data, responseType) {
        switch (responseType) {
            case 'text':
                return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, data, {
                    headers: this.createHeaders() || {},
                    responseType: 'text'
                });
            default:
                return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, data, {
                    headers: this.createHeaders() || {},
                });
        }
    }
    /**
     * Delete an entity.
     * @param url the api url
     * @param id the entity id to be deleted
     */
    delete(url, id, responseType) {
        switch (responseType) {
            case 'text':
                return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, {
                    headers: this.createHeaders() || {},
                    responseType: 'text'
                });
            default:
                return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + url, {
                    headers: this.createHeaders() || {},
                });
        }
    }
    createHeaders() {
        // Why 'authorization': see CustomLogoutSuccessHandler on server
        // return new HttpHeaders();
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Authorization', 'Bearer ' + this.getToken()).set('Language', this.getLanguage());
    }
    createHeadersIncaseUpload() {
        // Why 'authorization': see CustomLogoutSuccessHandler on server
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Authorization', 'Bearer ' + this.getToken()).set('Language', this.getLanguage()).set('Content-Disposition', 'multipart/form-data');
        // headers.append('Content-Disposition', 'multipart/form-data');
        console.log('headers', headers);
        return headers;
    }
    getToken() {
        return localStorage.getItem(_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__.Constant.TOKEN);
    }
    getLanguage() {
        let lang = localStorage.getItem(_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__.Constant.LANGUAGE);
        if (!lang) {
            localStorage.setItem(_constants_constant_class__WEBPACK_IMPORTED_MODULE_0__.Constant.LANGUAGE, 'vi');
            lang = 'vi';
        }
        return lang;
    }
}
BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService)); };
BaseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BaseService, factory: BaseService.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// https://listest.stc.vn:8643/login
// http://lienlacdientu.vn
const environment = {
    production: false,
    env: 'development',
    // baseUrl: 'https://betestinvivover2.pmr.vn',
    baseUrl: 'https://listest.stc.vn:8643',
    webUrl: 'https://listest.stc.vn',
    jitsiUrl: 'https://meet.pmr.vn/'
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 5821:
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/angular/node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**********************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		8386,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		9355,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		7979,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1665,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		1458,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		524,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		4393,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		1564,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		4595,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		9027,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		3974,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		1813,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		5700,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		651,
		"default-node_modules_ionic_angular_node_modules_ionic_core_dist_esm_data-caf38df0_js-node_mod-eee4c6",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4429,
		"default-node_modules_ionic_angular_node_modules_ionic_core_dist_esm_data-caf38df0_js-node_mod-eee4c6",
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		6118,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		5633,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5436,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		5831,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5769,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3250,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		4489,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		505,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		684,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		5694,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		9358,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		9067,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		314,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		9433,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9212,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		1316,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		315,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		9320,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		5239,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		4005,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		5777,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		8235,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		4315,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		4078,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		3714,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		8690,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4125,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		976,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		4476,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1422,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9099,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		9775,
		"common",
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		1790,
		"node_modules_ionic_angular_node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5821;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map