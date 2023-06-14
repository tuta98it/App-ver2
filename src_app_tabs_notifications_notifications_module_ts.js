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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 1945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);







class NotificationsModule {
}
NotificationsModule.ɵfac = function NotificationsModule_Factory(t) { return new (t || NotificationsModule)(); };
NotificationsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotificationsModule });
NotificationsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule.forRoot(),
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{ path: '', component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage }]),
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationsModule, { declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function NotificationsPage_ion_item_3_ion_buttons_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-buttons", 10)(1, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kh\u00F4ng c\u00F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ch\u01B0a nh\u1EADn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0110\u00E3 nh\u1EADn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function NotificationsPage_ion_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 4)(1, "div", 5)(2, "ion-label")(3, "div", 6)(4, "h3")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NotificationsPage_ion_item_3_ion_buttons_13_Template, 7, 0, "ion-buttons", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, notification_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, notification_r1.time, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notification_r1.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r1.showButtons);
} }
class NotificationsPage {
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
}
NotificationsPage.ɵfac = function NotificationsPage_Factory(t) { return new (t || NotificationsPage)(); };
NotificationsPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsPage, selectors: [["app-notifications"]], decls: 4, vars: 1, consts: [[1, "ion-padding"], [1, "content-notification"], ["lines", "full"], ["class", "notification-item", 4, "ngFor", "ngForOf"], [1, "notification-item"], [1, "notification-box"], [1, "notification-header"], [1, "notification-time"], [1, "notification-note", 3, "innerHTML"], ["class", "notification-buttons", 4, "ngIf"], [1, "notification-buttons"], ["size", "small", "fill", "solid", "shape", "round", "color", "danger"], ["size", "small", "fill", "solid", "shape", "round", "color", "warning"], ["size", "small", "fill", "solid", "shape", "round"]], template: function NotificationsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "ion-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotificationsPage_ion_item_3_Template, 14, 10, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listNotifi);
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: [".content-notification[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.notification-item[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s ease;\n}\n.content-notification[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.notification-item[_ngcontent-%COMP%]   div.notification-box[_ngcontent-%COMP%] {\n  padding: 0.25rem 0 0.25rem 0;\n  margin: 0.5rem 0 0.5rem 0;\n}\n.content-notification[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.notification-item[_ngcontent-%COMP%]   div.notification-box[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.content-notification[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.notification-item[_ngcontent-%COMP%]   div.notification-box[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.notification-header[_ngcontent-%COMP%]   span.notification-time[_ngcontent-%COMP%] {\n  font-size: small;\n  font-style: oblique;\n  padding: 1px;\n}\n.content-notification[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.notification-item[_ngcontent-%COMP%]   div.notification-box[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.notification-note[_ngcontent-%COMP%] {\n  white-space: normal;\n  text-align: justify;\n}\n.content-notification[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.notification-item[_ngcontent-%COMP%]   div.notification-box[_ngcontent-%COMP%]   ion-buttons.notification-buttons[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  display: flex;\n  justify-content: space-evenly;\n}\n.content-notification[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.notification-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0FBRE47QUFHTTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7QUFEUjtBQUlVO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRlo7QUFJWTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRmQ7QUFNVTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFKWjtBQVFRO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFOVjtBQVVNO0VBQ0UsMkJBQUE7QUFSUiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LW5vdGlmaWNhdGlvbiB7XHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgaW9uLWl0ZW0ubm90aWZpY2F0aW9uLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAgICAgZGl2Lm5vdGlmaWNhdGlvbi1ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMCAwLjI1cmVtIDA7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCAwLjVyZW0gMDtcclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGRpdi5ub3RpZmljYXRpb24taGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgc3Bhbi5ub3RpZmljYXRpb24tdGltZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAubm90aWZpY2F0aW9uLW5vdGUge1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbnMubm90aWZpY2F0aW9uLWJ1dHRvbnMge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_tabs_notifications_notifications_module_ts.js.map