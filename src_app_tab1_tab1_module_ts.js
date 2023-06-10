"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 5209);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        providers: [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__.AppVersion],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/photo.service */ 1957);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ 1188);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/notification.service */ 2013);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/main.service */ 1557);
/* harmony import */ var _services_badge_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/badge.service */ 9744);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 5209);













let Tab1Page = class Tab1Page {
    constructor(photoService, popoverController, router, platform, localStorage, storage, navCtrl, pickerCtrl, actionSheetCtrl, notificationService, mainService, badgeService, appVersion, alertController) {
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
        this.isPopoverOpen = false;
        this.now = new Date();
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
        this.localStorage.getSelectedUser().then((res) => {
            console.log('getSelectedStudent', res);
            this.userInfo = res;
        });
    }
    showProfile() {
    }
    logout() {
        this.localStorage.clearAll();
        this.popoverController.dismiss();
        this.router.navigate(['/']);
    }
    doRefresh($event) {
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PickerController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService },
    { type: _services_main_service__WEBPACK_IMPORTED_MODULE_6__.MainService },
    { type: _services_badge_service__WEBPACK_IMPORTED_MODULE_7__.BadgeService },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__.AppVersion },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Thả tay để tải lại dữ liệu\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Đang tải...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"sticky-header\">\r\n    <ion-row class=\"info-row\" #hideheader>\r\n      <ion-col size=\"10\">\r\n        <ion-text color=\"dark\" *ngIf=\"userInfo\">\r\n          <strong style=\"font-size: 18px\">{{userInfo.fullname}}</strong><br>\r\n          <span style=\"font-size: 12px;color:lightslategray\">Ngày {{ now | date:'dd/MM/yyyy'}}</span>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"ion-padding-start\">\r\n        <ion-button fill=\"clear\" id=\"trigger-button\" class=\"ion-no-padding\">\r\n          <ion-icon name=\"person-outline\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <ion-popover trigger=\"trigger-button\" [isOpen]=\"isPopoverOpen\">\r\n    <ng-template>\r\n      <ion-list scroll=\"false\" class=\"ion-no-padding\">\r\n        <ion-item class=\"ion-no-border ion-no-padding\" (click)=\"showProfile()\">\r\n          <ion-avatar class=\"size15\" slot=\"start\">\r\n            <ion-icon size=\"small\" name=\"person-outline\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-label>Thông tin</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"last ion-no-padding\" (click)=\"logout()\">\r\n          <ion-avatar class=\"size15\" slot=\"start\">\r\n            <ion-icon name=\"log-out-outline\" size=\"small\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-label class=\"btn\">Đăng xuất</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ng-template>\r\n  </ion-popover>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map