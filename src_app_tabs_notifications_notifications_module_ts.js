"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_notifications_notifications_module_ts"],{

/***/ 568:
/*!************************************************************!*\
  !*** ./src/app/tabs/notifications/notifications.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsModule": () => (/* binding */ NotificationsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 1945);






let NotificationsModule = class NotificationsModule {
};
NotificationsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{ path: '', component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage }]),
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ],
        exports: [_notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage]
    })
], NotificationsModule);



/***/ }),

/***/ 1945:
/*!**********************************************************!*\
  !*** ./src/app/tabs/notifications/notifications.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _notifications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page.html?ngResource */ 1956);
/* harmony import */ var _notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.scss?ngResource */ 8377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let NotificationsPage = class NotificationsPage {
    constructor() {
        this.listNotifi = [];
    }
    ngOnInit() {
        this.listNotifi = [
            {
                title: 'Tình trạng đơn hàng',
                // eslint-disable-next-line max-len
                content: 'Bệnh nhân Nguyễn Văn A đã có kết quả xét nghiệm gồm <u><i>5 chỉ thị</i></u> đã có kết quả xét nghiệm là 2.345.000đ. Bạn đã nhận được phí tư vấn chưa?',
                time: new Date(),
                showButtons: true,
            },
            {
                title: 'Tình trạng đơn hàng',
                // eslint-disable-next-line max-len
                content: 'Invivolab đã tới lấy mẫu xét nghiệm của bệnh nhân Trần Thị Lý bao gồm <u><i>7 chỉ định</i></u>. Kết quả xét nghiệm của bệnh nhân Trần Thị Lý sẽ có sau khoảng 6h.',
                time: new Date(),
                showButtons: false,
            },
            {
                title: 'Chương trình khuyến mãi',
                // eslint-disable-next-line max-len
                content: 'Invivo Lab đang triển khai chương trình ưu đãi nhân ngày Gia Đình. Gói xét nghiệm tổng quát sẽ được giảm 35% cho mọi đối tượng từ ngày 01/04/2023 - 08/04/2023',
                time: new Date(),
                showButtons: false,
            },
            {
                title: 'Khảo sát',
                // eslint-disable-next-line max-len
                content: 'Cảm ơn quý khách đã tin tưởng và đồng hành cùng Invivo Lab trong suốt 2 năm vừa qua. Để nâng cấp chất lượng dịch cụ, Invivo Lab xin mời quý khách làm một vài khảo sát nhỏ',
                time: new Date(),
                showButtons: false,
            },
            {
                title: 'Tình trạng đơn hàng',
                // eslint-disable-next-line max-len
                content: 'Bệnh nhân Đỗ Phương Thảo đã có kết quả xét nghiệm gồm 3 chỉ định. Tỗng số tiền xét nghiệm là 765000đ. Bạn đã nhận được phí tư vấn chưa?',
                time: new Date(),
                showButtons: true,
            }
        ];
    }
};
NotificationsPage.ctorParameters = () => [];
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-notifications',
        template: _notifications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationsPage);



/***/ }),

/***/ 8377:
/*!***********************************************************************!*\
  !*** ./src/app/tabs/notifications/notifications.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".content-notification ion-list ion-item.notification-item {\n  background-color: #f1f1f1;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s ease;\n}\n.content-notification ion-list ion-item.notification-item div.notification-box {\n  padding: 0.25rem 0 0.25rem 0;\n  margin: 0.5rem 0 0.5rem 0;\n}\n.content-notification ion-list ion-item.notification-item div.notification-box ion-label div.notification-header {\n  display: flex;\n  justify-content: space-between;\n}\n.content-notification ion-list ion-item.notification-item div.notification-box ion-label div.notification-header span.notification-time {\n  font-size: small;\n  font-style: oblique;\n  padding: 1px;\n}\n.content-notification ion-list ion-item.notification-item div.notification-box ion-label p.notification-note {\n  white-space: normal;\n  text-align: justify;\n}\n.content-notification ion-list ion-item.notification-item div.notification-box ion-buttons.notification-buttons {\n  margin-top: 0.5rem;\n  display: flex;\n  justify-content: space-evenly;\n}\n.content-notification ion-list ion-item.notification-item:hover {\n  transform: translateY(-5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0FBRE47QUFHTTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7QUFEUjtBQUlVO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRlo7QUFJWTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRmQ7QUFNVTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFKWjtBQVFRO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFOVjtBQVVNO0VBQ0UsMkJBQUE7QUFSUiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LW5vdGlmaWNhdGlvbiB7XHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgaW9uLWl0ZW0ubm90aWZpY2F0aW9uLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAgICAgZGl2Lm5vdGlmaWNhdGlvbi1ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMCAwLjI1cmVtIDA7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCAwLjVyZW0gMDtcclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGRpdi5ub3RpZmljYXRpb24taGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgc3Bhbi5ub3RpZmljYXRpb24tdGltZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAubm90aWZpY2F0aW9uLW5vdGUge1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbnMubm90aWZpY2F0aW9uLWJ1dHRvbnMge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 1956:
/*!***********************************************************************!*\
  !*** ./src/app/tabs/notifications/notifications.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\r\n  <!-- Nội dung -->\r\n  <div class=\"content-notification\">\r\n    <!-- Danh sách các dịch vụ -->\r\n    <ion-list lines=\"full\">\r\n      <ion-item *ngFor=\"let notification of listNotifi; let i = index\" class=\"notification-item\">\r\n        <!-- <ion-avatar slot=\"start\">\r\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n        </ion-avatar> -->\r\n        <div class=\"notification-box\">\r\n          <ion-label>\r\n            <div class=\"notification-header\">\r\n              <h3> <strong>{{ notification.title | uppercase }}</strong> </h3>\r\n              <span class=\"notification-time\">{{ notification.time | date:'dd/MM/yyyy' }}</span>\r\n            </div>\r\n            <!-- <p style=\"white-space: normal; text-align: justify; color: black;\" [innerHTML]=\"notification.content\"></p> -->\r\n            <p class=\"notification-note\" [innerHTML]=\"notification.content\">{{ notification.content }}</p>\r\n          </ion-label>\r\n\r\n          <ion-buttons *ngIf=\"notification.showButtons\" class=\"notification-buttons\" >\r\n            <ion-button size=\"small\" fill=\"solid\" shape=\"round\" color=\"danger\">Không có</ion-button>\r\n            <ion-button size=\"small\" fill=\"solid\" shape=\"round\" color=\"warning\">Chưa nhận</ion-button>\r\n            <ion-button size=\"small\" fill=\"solid\" shape=\"round\">Đã nhận</ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_notifications_notifications_module_ts.js.map