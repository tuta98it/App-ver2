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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.page */ 1689);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_modules_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/share.module */ 3913);








let ServicesModule = class ServicesModule {
};
ServicesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_services_page__WEBPACK_IMPORTED_MODULE_0__.ServicesPage],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{ path: '', component: _services_page__WEBPACK_IMPORTED_MODULE_0__.ServicesPage }]),
            src_app_shared_modules_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
        exports: [_services_page__WEBPACK_IMPORTED_MODULE_0__.ServicesPage]
    })
], ServicesModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _services_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services.page.html?ngResource */ 3529);
/* harmony import */ var _services_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.page.scss?ngResource */ 1977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general-service */ 888);
/* harmony import */ var src_app_shared_pipe_is_empty_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/pipe/is-empty.pipe */ 4904);
/* harmony import */ var src_app_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/constants/constant.class */ 6443);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);










let ServicesPage = class ServicesPage {
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

        this.generateItemsOrderType();
        console.log('this.listOrderType', this.listOrderType);
      }
    }, errorRes => {
      if (errorRes) {
        this.notificationService.showMessage(src_app_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__.Constant.DANGER, `Dữ liệu trả về đã có lỗi xảy ra`);
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

        this.generateItemsOrderType();
        console.log('this.listGroupOrderType', this.listGroupOrderType);
      }
    }, errorRes => {
      if (errorRes) {
        this.notificationService.showMessage(src_app_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__.Constant.DANGER, `Dữ liệu trả về đã có lỗi xảy ra`);
      }
    });
  }

  getListInitialData() {
    this.initDatas = JSON.parse(localStorage.getItem(src_app_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__.Constant.INIT_DATA));
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
        this.listOrderType = res.data;
        console.log('this.listOrderType: ', this.listOrderType); // Restar biến item về emplu để chuẩn cho quá trình quét dữ liệu

        this.items = [];
        this.generateItemsOrderType();
      }
    }, errorRes => {
      if (errorRes) {
        this.notificationService.showMessage(src_app_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__.Constant.DANGER, `Đã có lỗi xảy ra khi hệ thống trả dữ liệu về`);
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
    return new src_app_shared_pipe_is_empty_pipe__WEBPACK_IMPORTED_MODULE_4__.IsEmptyPipe().transform(value);
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

    this.items = this.items.concat(subArray);
    console.log('this.items', this.items);
  }

};

ServicesPage.ctorParameters = () => [{
  type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService
}];

ServicesPage.propDecorators = {
  popover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['popover']
  }]
};
ServicesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-services',
  template: _services_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_services_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ServicesPage);


/***/ }),

/***/ 1977:
/*!*************************************************************!*\
  !*** ./src/app/tabs/services/services.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "ion-content div.service-header {\n  position: sticky;\n  top: -1rem;\n  z-index: 1;\n  background-color: white;\n}\nion-content div.service-header div.service-search div.search-filter {\n  display: flex;\n}\nion-content div.service-header div.service-search div.search-filter ion-list.filter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content div.service-header ion-item.title-service {\n  font-size: 1rem;\n}\nion-content div.service-content div.service-list-content ion-list ion-item.service-item {\n  display: flex;\n  flex-direction: column;\n  background-color: #f1f1f1;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s ease;\n}\nion-content div.service-content div.service-list-content ion-list ion-item.service-item ion-label.service-designation {\n  font-size: 0.75rem;\n  white-space: break-spaces;\n}\nion-content div.service-content div.service-list-content ion-list ion-item.service-item ion-label.service-price {\n  font-size: 0.75rem;\n}\nion-content div.service-content div.service-list-content ion-list ion-item.service-item:hover {\n  transform: translateY(-5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUFKO0FBR007RUFDRSxhQUFBO0FBRFI7QUFHUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRFY7QUFPSTtFQUNFLGVBQUE7QUFMTjtBQWtCUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtBQWhCVjtBQW1CWTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFqQmQ7QUFvQlk7RUFDRSxrQkFBQTtBQWxCZDtBQXNCVTtFQUNFLDJCQUFBO0FBcEJaIiwiZmlsZSI6InNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBkaXYuc2VydmljZS1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogLTFyZW07XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgZGl2LnNlcnZpY2Utc2VhcmNoIHtcclxuICAgICAgZGl2LnNlYXJjaC1maWx0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIGlvbi1saXN0LmZpbHRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbS50aXRsZS1zZXJ2aWNlIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGRpdi5zZXJ2aWNlLWNvbnRlbnQge1xyXG4gICAgZGl2LnNlcnZpY2UtbGlzdC1jb250ZW50IHtcclxuXHJcbiAgICAgIC8vIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAvLyBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTdyZW0pO1xyXG5cclxuICAgICAgaW9uLWxpc3Qge1xyXG5cclxuICAgICAgICBpb24taXRlbS5zZXJ2aWNlLWl0ZW0ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgJi5zZXJ2aWNlLWRlc2lnbmF0aW9uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5zZXJ2aWNlLXByaWNlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3529:
/*!*************************************************************!*\
  !*** ./src/app/tabs/services/services.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\r\n  <!-- Nội dung -->\r\n  <div class=\"service-header\">\r\n    <!-- Khu vực tìm kiếm -->\r\n    <div class=\"service-search\">\r\n      <!-- Tìm liếm - lọc -->\r\n      <div class=\"search-filter\">\r\n\r\n        <!-- Tìm kiếm -->\r\n        <ion-searchbar placeholder=\"Tìm kiếm ...\" (ionChange)=\"handleChangeSearch($event)\"></ion-searchbar>\r\n\r\n        <!-- Lọc -->\r\n        <ion-buttons (click)=\"presentPopoverFillter($event)\" slot=\"start\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"funnel-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-popover #popover [isOpen]=\"isPopoverOpenFillter\" (didDismiss)=\"isPopoverOpenFillter = false\">\r\n          <ng-template>\r\n            <ion-content class=\"ion-padding\">\r\n              <ion-label style=\"font-size: small;\">Lọc dữ liệu theo ...</ion-label>\r\n              <ion-item style=\"font-size: small;\">\r\n                <ion-label position=\"stacked\">\r\n                  <ion-icon name=\"trail-sign-outline\" slot=\"start\"></ion-icon>\r\n                  Nhóm bệnh phẩm\r\n                </ion-label>\r\n                <ion-select style=\"font-size: small;\" label=\"Nhóm bệnh phẩm\" [interfaceOptions]=\"customPopoverOptions\"\r\n                  interface=\"alert\" label-placement=\"floating\" placeholder=\"Chọn nhóm ...\"\r\n                  (ionChange)=\"handleChangeTypeGroup($event)\">\r\n\r\n                  <!-- <ion-select-option *ngFor=\"let order of initDatas.orderStatus\" style=\"font-size: small;\"\r\n                    [value]=\"order.id\">{{order.name}}</ion-select-option> -->\r\n                  <ion-select-option style=\"font-size: small;\" [value]=\"0\">Nhóm bệnh</ion-select-option>\r\n                  <ion-select-option style=\"font-size: small;\" [value]=\"1\">Nhóm sản Phẩm</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-content>\r\n          </ng-template>\r\n        </ion-popover>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <!-- Tiêu đề -->\r\n    <ion-item class=\"title-service\">\r\n      <ion-label class=\"title-designation\"><strong>Chỉ định</strong> </ion-label>\r\n      <ion-label class=\"title-price\" slot=\"end\"> <strong>Giá</strong> </ion-label>\r\n    </ion-item>\r\n    <!-- <ion-progress-bar [value]=\"progress\" color=\"medium\"></ion-progress-bar> -->\r\n\r\n  </div>\r\n\r\n  <!-- Nội dung -->\r\n  <div class=\"service-content\">\r\n    <div class=\"service-list-content\">\r\n      <ion-list>\r\n        <!-- DS Dịch vụ -->\r\n        <ion-item *ngFor=\"let item of items; let i = index\" class=\"service-item\" button\r\n          (click)=\"clickItemService(item)\">\r\n          <ion-label class=\"service-designation\">{{item.name}}</ion-label>\r\n          <ion-label class=\"service-price\" slot=\"end\">{{item.price | currency :\r\n            'VND'}}</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-infinite-scroll (ionInfinite)=\"onIonInfinite($event)\" style=\"height: 0.5rem;\">\r\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n      </ion-infinite-scroll>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n<!-- Liên hệ-->\r\n<ion-modal [isOpen]=\"isModalOpenDetailItemService\">\r\n  <ng-template>\r\n    <!-- Tiêu đề -->\r\n    <ion-header>\r\n      <ion-toolbar color=\"primary\">\r\n        <!-- Nút huỷ modal -->\r\n        <ion-buttons slot=\"end\" (click)=\"setOpenModalDetailItemService(false)\">\r\n          <ion-button>\r\n            Đóng\r\n            <!-- <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon> -->\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <!-- Tiêu đề Modal -->\r\n        <ion-title>{{titleDetailItemService}}</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content class=\"ion-padding\">\r\n      <ion-list>\r\n        <ion-item *ngIf=\"itemService?.name\">\r\n          <ion-text><span style=\"font-weight: 600;\">Tên dịch vụ: </span>{{itemService.name}}</ion-text>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"itemService?.description\">\r\n          <ion-text><span style=\"font-weight: 600;\">Miêu tả: </span>{{itemService.description}}</ion-text>\r\n        </ion-item>\r\n\r\n\r\n        <ion-item *ngIf=\"itemService?.orderTypeGroup.name\">\r\n          <ion-text><span style=\"font-weight: 600;\">Thuộc nhóm: </span>{{itemService.orderTypeGroup.name}}</ion-text>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"itemService?.code\">\r\n          <ion-text><span style=\"font-weight: 600;\">Mã: </span>{{itemService.code}}</ion-text>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"itemService?.his\">\r\n          <ion-text><span style=\"font-weight: 600;\">Mã HIS: </span>{{itemService.his}}</ion-text>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"itemService?.appointmentTime\">\r\n          <ion-text><span style=\"font-weight: 600;\">Thời gian trả kết quả:\r\n            </span>{{itemService.appointmentTime}}</ion-text>\r\n        </ion-item>\r\n\r\n\r\n        <ion-item *ngIf=\"itemService?.sampleType\">\r\n          <ion-text><span style=\"font-weight: 600;\">Loại mẫu: </span>{{itemService.sampleType}}</ion-text>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"itemService?.preservationMethod\">\r\n          <ion-text><span style=\"font-weight: 600;\">Phương pháp bảo quản:\r\n            </span>{{itemService.preservationMethod}}</ion-text>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"itemService?.testMethod\">\r\n          <ion-text><span style=\"font-weight: 600;\">Phương pháp test: </span>{{itemService.testMethod}}</ion-text>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"itemService?.price\">\r\n          <ion-text><span style=\"font-weight: 600;\">Giá: </span>{{itemService.price | currency : 'VND'}}</ion-text>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_services_services_module_ts.js.map