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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let RequestTypePipe = class RequestTypePipe {
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
};
RequestTypePipe.ctorParameters = () => [];
RequestTypePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'requestTypePipe'
    })
], RequestTypePipe);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let StatusRequestPipe = class StatusRequestPipe {
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
};
StatusRequestPipe.ctorParameters = () => [];
StatusRequestPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'statusRequestPipe'
    })
], StatusRequestPipe);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _requests_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests.page */ 6058);




const routes = [
    {
        path: '',
        component: _requests_page__WEBPACK_IMPORTED_MODULE_0__.RequestsPage,
    }
];
let RequestsPageRoutingModule = class RequestsPageRoutingModule {
};
RequestsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], RequestsPageRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _requests_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests.page */ 6058);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ 581);
/* harmony import */ var _requests_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requests-routing.module */ 6080);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 5209);
/* harmony import */ var src_app_shared_modules_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/share.module */ 3913);
/* harmony import */ var src_app_shared_pipe_status_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pipe/status-request */ 9950);
/* harmony import */ var src_app_shared_pipe_request_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/pipe/request-type */ 9391);












let RequestsPageModule = class RequestsPageModule {
};
RequestsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _requests_routing_module__WEBPACK_IMPORTED_MODULE_2__.RequestsPageRoutingModule,
            src_app_shared_modules_share_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule
        ],
        providers: [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__.AppVersion],
        declarations: [_requests_page__WEBPACK_IMPORTED_MODULE_0__.RequestsPage, src_app_shared_pipe_status_request__WEBPACK_IMPORTED_MODULE_5__.StatusRequestPipe, src_app_shared_pipe_request_type__WEBPACK_IMPORTED_MODULE_6__.RequestTypePipe]
    })
], RequestsPageModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _requests_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests.page.html?ngResource */ 1429);
/* harmony import */ var _requests_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requests.page.scss?ngResource */ 5731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/photo.service */ 1957);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/constants/constant.class */ 6443);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage.service */ 1188);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/notification.service */ 2013);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/main.service */ 1557);
/* harmony import */ var _services_badge_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/badge.service */ 9744);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 5209);
/* harmony import */ var src_app_shared_pipe_is_empty_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/pipe/is-empty.pipe */ 4904);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/order.service */ 8132);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/general-service */ 888);




/* eslint-disable max-len */

















let RequestsPage = class RequestsPage {
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
        this.listOrder = res.data;
        console.log('this.listOrder : ', this.listOrder);
      }
    }, error => {
      if (error.status === 403) {
        this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__.Constant.DANGER, `Người dùng có quyền truy cập`);
        this.router.navigate(['/login']);
      } else {
        this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__.Constant.DANGER, `Dữ liệu trả về đã có lỗi xảy ra`);
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
  }

  getListRequestByPayload(payload, isLoading) {
    // Show thông báo delay thời gian chờ loading dữ liệu
    if (isLoading) {
      this.showLoading();
    }

    this.generalService.getRequest(payload).subscribe(res => {
      if (res != null) {
        this.listRequest = res.data;
        console.log('this.listRequest : ', this.listRequest);
      }
    }, error => {
      if (error.status === 403) {
        this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__.Constant.DANGER, `Người dùng có quyền truy cập`);
        this.router.navigate(['/login']);
      } else {
        this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__.Constant.DANGER, `Dữ liệu trả về đã có lỗi xảy ra`);
      }
    });
  }

  getListInitialData() {
    this.initDatas = JSON.parse(localStorage.getItem(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__.Constant.INIT_DATA));
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
          this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__.Constant.DANGER, res.ret[0].message);
        } else {
          // this.notificationService.showMessage(Constant.SUCCESS, Constant.MESSAGE_ADD_SUCCESS);
          this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__.Constant.SUCCESS, 'Tạo yêu cầu thành công!');
          this.setOpenModalAddPatient(false);
        }
      });
    } else {
      this.notificationService.showMessage(_shared_constants_constant_class__WEBPACK_IMPORTED_MODULE_5__.Constant.DANGER, 'Nhập thiếu trường dữ liệu bắt buộc!');
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
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log('Đầu ngày hôm nay', pastTime);
        break;

      case 2:
        // Subtract 1 day
        this.filterInterval.isShow = false;
        daysToSubtract = 1;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log('Cách đây 1 ngày trước', pastTime);
        break;

      case 3:
        // Subtract 7 day
        this.filterInterval.isShow = false;
        daysToSubtract = 7;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log('Cách đây 7 ngày', pastTime);
        break;

      case 4:
        // Subtract 14 day
        this.filterInterval.isShow = false;
        daysToSubtract = 14;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log('Cách đây 14 ngày', pastTime);
        break;

      case 5:
        // Subtract 30 day
        this.filterInterval.isShow = false;
        daysToSubtract = 30;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log('Cách đây 30 ngày', pastTime);
        break;

      case 6:
        // Đầu tuần này
        this.filterInterval.isShow = false;
        daysToSubtract = currentDay === 0 ? 6 : currentDay - 1;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log('Đầu tuần này', pastTime);
        break;

      case 7:
        // Đầu tuần trước
        this.filterInterval.isShow = false;
        daysToSubtract = currentDay + 7 - 1;
        console.log('daysToSubtract', daysToSubtract);
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log(' Đầu tuần trước', pastTime);
        break;

      case 8:
        // Đầu tháng này
        this.filterInterval.isShow = false;
        pastTime.setDate(1);
        console.log('Đầu tháng này', pastTime);
        break;

      case 9:
        // Đầu tháng trước
        this.filterInterval.isShow = false; // Set the date to the first day of the current mounth

        pastTime.setDate(1); // Subtract one month from the date

        pastTime.setMonth(pastTime.getMonth() - 1);
        console.log('Đầu tháng trước ', pastTime);
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
      this.filterInterval.pastTime = '';
      console.log('this.filterInterval.pastTime : ', this.filterInterval.pastTime); // Kết thúc - Thời điểm hiện tại

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
      console.log('handleChangeFilterIntervalCustomByUser event', event);
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
    console.log('handleChangePartner event: ', event);
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
    this.orderStatusSelect.value = 0;
  }

  pushLog(msg) {
    console.log(msg);
  }

  cancelFormFilter() {
    this.popoverFormFilter.dismiss();
  }

  isEmpty(value) {
    return new src_app_shared_pipe_is_empty_pipe__WEBPACK_IMPORTED_MODULE_11__.IsEmptyPipe().transform(value);
  }

};

RequestsPage.ctorParameters = () => [{
  type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.PopoverController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.PickerController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ActionSheetController
}, {
  type: _services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService
}, {
  type: _services_main_service__WEBPACK_IMPORTED_MODULE_8__.MainService
}, {
  type: _services_badge_service__WEBPACK_IMPORTED_MODULE_9__.BadgeService
}, {
  type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__.AppVersion
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController
}, {
  type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_12__.OrderService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.LoadingController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe
}, {
  type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_13__.GeneralService
}];

RequestsPage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonModal]
  }],
  popoverFormFilter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ['popoverFormFilter']
  }],
  orderStatusSelect: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ['orderStatusSelect']
  }]
};
RequestsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-requests',
  template: _requests_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_requests_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RequestsPage);


/***/ }),

/***/ 5731:
/*!*************************************************************!*\
  !*** ./src/app/tabs/requests/requests.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".m-error {\n  position: relative;\n  z-index: 1;\n  margin-left: 0.8rem;\n  min-height: 18px;\n  font-size: small;\n  color: var(--ion-color-danger);\n}\n\n.content-laboratory {\n  overflow: auto;\n  max-height: calc(100vh - 15.5rem);\n}\n\n.content-laboratory ion-list ion-item {\n  display: flex;\n  flex-direction: column;\n}\n\n.content-laboratory ion-list ion-item ion-label div.appointment-date {\n  display: flex;\n  justify-content: space-between;\n  justify-items: center;\n}\n\n.content-laboratory ion-list ion-item ion-label div.appointment-date div.request-type {\n  display: inline-block;\n  padding: 0.25rem;\n  margin-top: 0.25rem;\n  border-radius: 0.25rem;\n  background-color: #91b5e4;\n  color: #fff;\n}\n\n.content-laboratory ion-list ion-item ion-label div.info {\n  display: flex;\n  padding: 0.25rem;\n}\n\n.content-laboratory ion-list ion-item ion-label div.info h3.text {\n  margin-left: 0.25rem;\n}\n\n.content-laboratory ion-list ion-item ion-label div.info h3.address {\n  white-space: break-spaces;\n}\n\n.content-laboratory ion-list ion-item ion-label div.info h3.comment {\n  white-space: break-spaces;\n}\n\n.content-laboratory ion-list ion-item ion-label div.status {\n  display: inline-block;\n  padding: 0.25rem;\n  margin-top: 0.25rem;\n  border-radius: 0.25rem;\n  background-color: #b5e0ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5TkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQXhORjs7QUE0TkE7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7QUF6TkY7O0FBNE5JO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBMU5OOztBQW1PUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBak9WOztBQW1PVTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBak9aOztBQXFPUTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQW5PVjs7QUFzT1k7RUFDRSxvQkFBQTtBQXBPZDs7QUF1T1k7RUFDRSx5QkFBQTtBQXJPZDs7QUF3T1k7RUFDRSx5QkFBQTtBQXRPZDs7QUEyT1E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBek9WIiwiZmlsZSI6InJlcXVlc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50IHtcclxuLy8gICAtLXBhZGRpbmctdG9wOiAzMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuaW5mby1yb3cge1xyXG4vLyAgIHBhZGRpbmc6IDAgMTBweDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbCB7XHJcbi8vICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbi8vICAgaW9uLWJhZGdlIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiA1cHg7XHJcbi8vICAgICB0b3A6IC00cHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAjdHJpZ2dlci1idXR0b24ge1xyXG4vLyAgIG1hcmdpbjogYXV0bztcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gfVxyXG5cclxuLy8gaW9uLWJ1dHRvbiB7XHJcbi8vICAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIG1haW4ge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbi8vIH1cclxuXHJcbi8vIC5tLWJvcmRlci1ib3R0b20ge1xyXG4vLyAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjRUVFO1xyXG4vLyB9XHJcblxyXG4vLyAuZm9jdXMtc3R1ZGVudCB7XHJcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2Ny44ZGVnLCAjRjhBNTc3IDAuNDUlLCAjRkNCNzMzIDk5Ljg3JSk7XHJcbi8vICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLmZvY3VzLXRlYWNoZXIge1xyXG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNjcuOGRlZywgIzU5NTdmOCAwLjQ1JSwgIzI2M2RmYyA5OS44NyUpO1xyXG4vLyAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4vLyAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5mb2N1cy1hZG1pbiB7XHJcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2Ny44ZGVnLCAjMDI3ODc2IDAuNDUlLCAjMDA5MzM0IDk5Ljg3JSk7XHJcbi8vICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLm9wdGlvbi1zdHVkZW50IHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4vLyAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4vLyAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1yb3cuZmVhdHVyZWQtcm93IHtcclxuLy8gICBwYWRkaW5nOiAxMHB4IDAgOHB4O1xyXG4vLyAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5mZWF0dXJlZC1yb3cgaW9uLWljb24ge1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLmZlYXR1cmVkLXJvdyBpb24tY29sIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZmVhdHVyZWQtcm93IGlvbi10ZXh0IHtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBtYXJnaW46IGF1dG87XHJcbi8vIH1cclxuXHJcbi8vIGlvbi10YWItYnV0dG9uIHtcclxuLy8gICAtLWJhY2tncm91bmQtZm9jdXNlZDogcmVkICFpbXBvcnRhbnQ7XHJcbi8vICAgLS1jb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuZGl2aWRlci10b3Age1xyXG4vLyAgIGJvcmRlci10b3A6IHNvbGlkIDhweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4vLyB9XHJcblxyXG4vLyAubmV3cyB7XHJcbi8vICAgLmltZy13cmFwcGVyIHtcclxuLy8gICAgIGhlaWdodDogY2FsYygoMTAwdncgKiAwLjggLSAzMnB4KSAqIDQgLyA3LjUpO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbi8vICAgICBpbWcge1xyXG4vLyAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gaW9uLWNhcmQge1xyXG4vLyAgIG1hcmdpbjogMTBweCAxNXB4IDEwcHggMDtcclxuLy8gICBib3gtc2hhZG93OiBub25lO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuLy8gICBib3JkZXI6IHNvbGlkIDFweCAjRUVFO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY2FyZC1oZWFkZXIge1xyXG4vLyAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY2FyZC10aXRsZSxcclxuLy8gaW9uLWNhcmQtY29udGVudCB7XHJcbi8vICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY2FyZC1jb250ZW50IHtcclxuLy8gICBwYWRkaW5nOiAwcHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gICBmb250LXNpemU6IDEycHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1jYXJkLXRpdGxlIHtcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5pbm5lci1zY3JvbGwsXHJcbi8vIC5zY3JvbGwteSB7XHJcbi8vICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyAgIGJhY2tncm91bmQ6IHJlZDtcclxuLy8gfVxyXG5cclxuLy8gLnNpemUxNSB7XHJcbi8vICAgd2lkdGg6IDE1cHg7XHJcbi8vICAgaGVpZ2h0OiAxNXB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24taXRlbS5sYXN0IC5pb24taXRlbSB7XHJcbi8vICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xyXG4vLyAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1sYWJlbC5idG4ge1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmNvbC1hdmEge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbi8vICAgaW9uLWF2YXRhciB7XHJcbi8vICAgICB3aWR0aDogNzAlO1xyXG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgbWFyZ2luOiBhdXRvO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLm1vZGFsLXN0dWRlbnQge1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4vLyAgIHotaW5kZXg6IDI7XHJcbi8vICAgYm94LXNoYWRvdzogMCAycHggNXB4ICM5ZjlmOWY7XHJcbi8vICAgbGVmdDogMDtcclxuLy8gICByaWdodDogMDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWF2YXRhciB7XHJcbi8vICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tc2xpZGVzIHtcclxuLy8gICBpb24tY2FyZC10aXRsZSB7XHJcbi8vICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbi8vICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuLy8gICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuLy8gICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuLy8gICB9XHJcblxyXG4vLyAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4vLyAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4vLyAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbi8vICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4vLyAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmFjY291bnQtaW5mbyB7XHJcbi8vICAgbWFyZ2luLXRvcDogOHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuaW5mby1yb3cge1xyXG4vLyAgIG1hcmdpbi10b3A6IDhweDtcclxuLy8gfVxyXG5cclxuLy8gLmZlYXR1cmVkLXJvdyB7XHJcbi8vICAgaW9uLWljb24ge1xyXG4vLyAgICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4ubS1lcnJvciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcclxuICBtaW4taGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQtbGFib3JhdG9yeSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE1LjVyZW0pO1xyXG5cclxuICBpb24tbGlzdCB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICBpb24tbGFiZWwge1xyXG5cclxuICAgICAgICAvLyBoMy5uYW1lLXBhdGllbnQge1xyXG4gICAgICAgIC8vICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAvLyAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBkaXYuYXBwb2ludG1lbnQtZGF0ZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIGRpdi5yZXF1ZXN0LXR5cGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MWI1ZTQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LmluZm8ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcblxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAmLnRleHQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFkZHJlc3Mge1xyXG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuY29tbWVudCB7XHJcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LnN0YXR1cyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjVlMGZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 1429:
/*!*************************************************************!*\
  !*** ./src/app/tabs/requests/requests.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Thả tay để tải lại dữ liệu\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Đang tải...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"sticky-header\">\r\n    <ion-row class=\"info-row\" #hideheader>\r\n      <ion-col size=\"10\">\r\n        <ion-text color=\"dark\" *ngIf=\"userInfo\">\r\n          <strong style=\"font-size: 18px\">{{userInfo.fullname}}</strong><br>\r\n          <span style=\"font-size: 12px;color:lightslategray\">Ngày {{ now | date:'dd/MM/yyyy'}}</span>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"ion-padding-start\">\r\n        <ion-button fill=\"clear\" id=\"trigger-button\" class=\"ion-no-padding\">\r\n          <ion-icon name=\"person-outline\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <ion-popover trigger=\"trigger-button\" [isOpen]=\"isPopoverOpen\">\r\n    <ng-template>\r\n      <ion-list scroll=\"false\" class=\"ion-no-padding\">\r\n        <ion-item class=\"ion-no-border ion-no-padding\" (click)=\"showProfile()\">\r\n          <ion-avatar class=\"size15\" slot=\"start\">\r\n            <ion-icon size=\"small\" name=\"person-outline\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-label>Thông tin</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"last ion-no-padding\" (click)=\"logout()\">\r\n          <ion-avatar class=\"size15\" slot=\"start\">\r\n            <ion-icon name=\"log-out-outline\" size=\"small\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-label class=\"btn\">Đăng xuất</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ng-template>\r\n  </ion-popover>\r\n</ion-content> -->\r\n\r\n<!-- <ion-label>formFilterTestSheet value: {{ formFilterTestSheet | json }}</ion-label> -->\r\n<ion-content class=\"ion-padding\">\r\n  <!-- Nội dung -->\r\n  <div>\r\n    <!-- Khu vực tìm kiếm -->\r\n    <div>\r\n      <!-- Tìm liếm - lọc [debounce]=\"100\" id=\"popover-search\" (keyup.enter)=\"onSearchByKeyword()\" -->\r\n      <div style=\"display: flex;\">\r\n        <ion-searchbar autocomplete=\"on\" (ionChange)=\"handleChangeSearch($event)\"\r\n          placeholder=\"Tìm kiếm ...\"></ion-searchbar>\r\n\r\n        <!--    <ion-list style=\"position: absolute; z-index: 100000;\">\r\n          <ion-item *ngFor=\"let name of listOrder\">\r\n            <ion-label>{{ name }}</ion-label>\r\n          </ion-item>\r\n        </ion-list> -->\r\n\r\n\r\n        <ion-buttons (click)=\"presentPopoverFilter($event)\" slot=\"start\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"funnel-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-popover #popoverFormFilter size=\"auto\" [isOpen]=\"isPopoverOpenFilter\"\r\n          (didDismiss)=\"isPopoverOpenFilter = false\">\r\n          <ng-template>\r\n            <ion-content class=\"ion-padding\">\r\n              <ion-label style=\"font-size: small;\">Lọc dữ liệu theo ...</ion-label>\r\n              <ion-list>\r\n                <!-- <ion-item style=\"font-size: small;\">\r\n                  <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"person-outline\"></ion-icon>\r\n                    Tên bệnh nhân\r\n                  </ion-label>\r\n                  <ion-input placeholder=\"Nhập tên bệnh nhân ...\"\r\n                    [(ngModel)]=\"formFilterTestSheet.namePatient\"></ion-input>\r\n                </ion-item> -->\r\n\r\n                <ion-item style=\"font-size: small;\">\r\n                  <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"call-outline\"></ion-icon>\r\n                    Số điện thoại\r\n                  </ion-label>\r\n                  <ion-input type=\"tel\" placeholder=\"Nhập SĐT ...\"\r\n                    [(ngModel)]=\"formFilterTestSheet.phoneNoPatient\"></ion-input>\r\n                </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n                <ion-item style=\"font-size: small;\">\r\n                  <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"send-outline\"></ion-icon>\r\n                    Trạng thái Đơn hàng\r\n                  </ion-label>\r\n                  <ion-select #orderStatusSelect style=\"font-size: small;\" label=\"Trạng thái Đơn hàng\"\r\n                    [interfaceOptions]=\"customPopoverOptions\" interface=\"alert\" label-placement=\"floating\"\r\n                    placeholder=\"Trạng thái đơn hàng\" (ionChange)=\"handleChangeSelectOrderStatus($event)\">\r\n                    <ion-select-option *ngFor=\"let order of initDatas.orderStatus\" style=\"font-size: small;\"\r\n                      [value]=\"order.id\">{{order.name}}</ion-select-option>\r\n                    <!-- <ion-select-option  style=\"font-size: small;\" value=\"0\">Chưa nhận yêu cầu</ion-select-option>\r\n                    <ion-select-option  style=\"font-size: small;\" value=\"1\">Đã nhận yêu cầu và đang xử lý</ion-select-option>\r\n                    <ion-select-option  style=\"font-size: small;\" value=\"2\">Đã trả kết quả</ion-select-option> -->\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-buttons style=\"display: flex; justify-content: space-evenly ; margin-top: 0.5rem;\">\r\n                <ion-button size=\"small\" fill=\"outline\" color=\"medium\" title=\"Huỷ\"\r\n                  (click)=\"cancelFormFilter()\"><ion-icon name=\"close-outline\"></ion-icon></ion-button>\r\n                <ion-button size=\"small\" fill=\"outline\" color=\"danger\" title=\"Xoá lọc\"\r\n                  (click)=\"restartFormFilter()\"><ion-icon size=\"small\" name=\"trash-outline\"></ion-icon></ion-button>\r\n                <ion-button size=\"small\" fill=\"solid\" (click)=\"onSearchByFormFilter()\" title=\"Lọc dữ liệu ...\"><ion-icon\r\n                    size=\"small\" name=\"search-outline\"></ion-icon></ion-button>\r\n              </ion-buttons>\r\n            </ion-content>\r\n          </ng-template>\r\n        </ion-popover>\r\n        <!-- <ion-item>\r\n        </ion-item> -->\r\n\r\n        <!-- <div style=\"display: flex; justify-content: center; align-items: center;\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-select interface=\"popover\" placeholder=\"Lọc\" >\r\n                <ion-select-option  value=\"dealthcare\">Nhóm BP</ion-select-option>\r\n                <ion-select-option  value=\"products\">Nhóm SP</ion-select-option>\r\n              </ion-select>\r\n              <ion-icon slot=\"start\" name=\"funnel-outline\" color=\"primary\"></ion-icon>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div> -->\r\n      </div>\r\n\r\n      <!-- Lựa chọn khoảng thời gian lọc -->\r\n      <div style=\"display: flex; align-items: center; \">\r\n        <ion-list>\r\n          <ion-item>\r\n            <ion-icon slot=\"start\" name=\"calendar-clear-outline\" color=\"primary\"></ion-icon>\r\n            <ion-select aria-label=\"times\" interface=\"alert\" value=0 placeholder=\"Chọn khoảng thời gian lọc ...\"\r\n              (ionChange)=\"handleChangeFilterInterval($event)\">\r\n\r\n              <ion-select-option value=0>\r\n                --Tất cả--\r\n              </ion-select-option>\r\n              <ion-select-option *ngFor=\"let time of initDatas.baoCaoDoanhSoType\" [value]=\"time.id\">\r\n                {{time.name}}\r\n              </ion-select-option>\r\n              <!-- <ion-select-option value=\"all\">\r\n                --Tất Cả--\r\n              </ion-select-option>\r\n              <ion-select-option value=\"today\">\r\n                Hôm nay\r\n              </ion-select-option>\r\n              <ion-select-option value=\"yesterday\">\r\n                Hôm qua\r\n              </ion-select-option>\r\n              <ion-select-option value=\"this_week\">\r\n                Tuần này\r\n              </ion-select-option>\r\n              <ion-select-option value=\"7_day_ago\">\r\n                7 ngày trước\r\n              </ion-select-option>\r\n              <ion-select-option value=\"this_month\">\r\n                Tháng này\r\n              </ion-select-option>\r\n              <ion-select-option value=\"30_days_ago\">\r\n                30 ngày trước\r\n              </ion-select-option>\r\n              <ion-select-option value=\"from_day_to_date\">\r\n                Từ ngày đến ngày\r\n              </ion-select-option> -->\r\n            </ion-select>\r\n\r\n          </ion-item>\r\n\r\n\r\n          <ion-item *ngIf=\"filterInterval.isShow\">\r\n            <!-- Calenda cho người dùng chọn khoảng thời gian lọc -->\r\n            <!-- <ion-datetime value=\"2022-04-21T00:00:00\" min=\"2022-03-01T00:00:00\" max=\"2022-05-31T23:59:59\"></ion-datetime> -->\r\n            <!-- <ion-datetime locale=\"vi-VI\"></ion-datetime> -->\r\n            <!-- <ion-datetime presentation=\"date-time\" [preferWheel]=\"true\"></ion-datetime> -->\r\n            <!-- <ion-datetime>\r\n  <span slot=\"title\">Select a Reservation Date</span>\r\n</ion-datetime> -->\r\n            <!-- <ion-datetime [showDefaultButtons]=\"true\" doneText=\"All set\" cancelText=\"Never mind\"> </ion-datetime> -->\r\n            <!-- <ion-datetime #datetime>\r\n  <ion-buttons slot=\"buttons\">\r\n    <ion-button color=\"danger\" (click)=\"datetime.reset()\">Reset</ion-button>\r\n    <ion-button color=\"primary\" (click)=\"datetime.cancel()\">Never mind</ion-button>\r\n    <ion-button color=\"primary\" (click)=\"datetime.confirm()\">All Set</ion-button>\r\n  </ion-buttons>\r\n</ion-datetime> -->\r\n            <span style=\"font-size: small;\">Từ ngày: </span>\r\n            <ion-datetime-button datetime=\"from-datetime\" style=\"font-size: small;\"></ion-datetime-button>\r\n\r\n            <ion-modal [keepContentsMounted]=\"true\">\r\n              <ng-template>\r\n\r\n\r\n                <ion-datetime #fromDatetime [(ngModel)]=\"this.filterInterval.pastTime\" [showDefaultTitle]=\"true\"\r\n                  [showDefaultButtons]=\"true\" locale=\"vi-VI\" id=\"from-datetime\" [showClearButton]=\"true\"\r\n                  (ionChange)=\"handleChangeFilterIntervalCustomByUser($event)\">\r\n                  <span slot=\"title\">Chọn thời gian bắt đầu</span>\r\n                </ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n          </ion-item>\r\n\r\n          <ion-item *ngIf=\"filterInterval.isShow\">\r\n            <!-- Calenda cho người dùng chọn khoảng thời gian lọc -->\r\n            <!-- <ion-datetime value=\"2022-04-21T00:00:00\" min=\"2022-03-01T00:00:00\" max=\"2022-05-31T23:59:59\"></ion-datetime> -->\r\n\r\n\r\n            <!-- <ion-datetime locale=\"vn-VN\"></ion-datetime> -->\r\n\r\n            <!-- <ion-datetime presentation=\"date-time\" [preferWheel]=\"true\"></ion-datetime> -->\r\n\r\n            <!-- <ion-datetime>\r\n  <span slot=\"title\">Select a Reservation Date</span>\r\n</ion-datetime> -->\r\n            <!-- <ion-datetime [showDefaultButtons]=\"true\" doneText=\"All set\" cancelText=\"Never mind\"> </ion-datetime> -->\r\n            <!-- <ion-datetime #datetime>\r\n  <ion-buttons slot=\"buttons\">\r\n    <ion-button color=\"danger\" (click)=\"datetime.reset()\">Reset</ion-button>\r\n    <ion-button color=\"primary\" (click)=\"datetime.cancel()\">Never mind</ion-button>\r\n    <ion-button color=\"primary\" (click)=\"datetime.confirm()\">All Set</ion-button>\r\n  </ion-buttons>\r\n</ion-datetime> -->\r\n            <span style=\"font-size: small;\">Đến ngày: </span>\r\n            <ion-datetime-button style=\"font-size: small;\" datetime=\"toDatetime\"></ion-datetime-button>\r\n\r\n            <ion-modal [keepContentsMounted]=\"true\">\r\n              <ng-template>\r\n\r\n                <ion-datetime #toDatetime [(ngModel)]=\"this.filterInterval.presentTime\" [showDefaultTitle]=\"true\"\r\n                  [showDefaultButtons]=\"true\" locale=\"vi-VI\" id=\"toDatetime\" [showClearButton]=\"true\"\r\n                  [min]=\"filterInterval.pastTime\" (ionChange)=\"handleChangeFilterIntervalCustomByUser($event)\">\r\n                  <span slot=\"title\">Chọn thời gian bắt đầu</span>\r\n                  <!-- <ion-buttons slot=\"buttons\">\r\n                    <ion-button color=\"danger\" (click)=\"toDatetime.reset()\">Reset</ion-button>\r\n                    <ion-button color=\"primary\" (click)=\"toDatetime.cancel()\">Never mind</ion-button>\r\n                    <ion-button color=\"primary\" (click)=\"toDatetime.confirm()\">All Set</ion-button>\r\n                  </ion-buttons> -->\r\n                </ion-datetime>\r\n\r\n              </ng-template>\r\n            </ion-modal>\r\n          </ion-item>\r\n\r\n        </ion-list>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Nội dung -->\r\n    <div class=\"content-laboratory\">\r\n      <ion-list>\r\n\r\n        <!-- Danh các đối tác -->\r\n        <ion-item *ngFor=\"let request of listRequest; let i = index\">\r\n          <!-- Thông tin bệnh nhân -->\r\n          <ion-label>\r\n            <!-- Lịch hẹn -->\r\n            <div class=\"appointment-date\">\r\n              <div *ngIf=\"(request?.phone)\" class=\"info\">\r\n                <div>\r\n                  <ion-icon name=\"time-outline\"></ion-icon>\r\n                </div>\r\n                <h3 class=\"text\">{{request.appointmentDate | date : 'HH:mm dd/MM/YYYY'}}</h3>\r\n              </div>\r\n\r\n              <div class=\"request-type\">\r\n                <h3>{{request.requestTypeId | requestTypePipe : listTypeOrder}}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Số điện thoại -->\r\n            <div *ngIf=\"(request?.phone)\" class=\"info\">\r\n              <div>\r\n                <ion-icon name=\"call-outline\"></ion-icon>\r\n              </div>\r\n              <h3 class=\"text\">{{request.phone}}</h3>\r\n            </div>\r\n\r\n            <!-- Địa chỉ -->\r\n            <div *ngIf=\"(request?.address)\" class=\"info\">\r\n              <div>\r\n                <ion-icon name=\"location-outline\"></ion-icon>\r\n              </div>\r\n              <h3 class=\"text address\">{{request.address}}</h3>\r\n            </div>\r\n\r\n            <!-- Chỉ định -->\r\n            <div *ngIf=\"(request?.comment)\" class=\"info\">\r\n              <div>\r\n                <ion-icon name=\"pulse-outline\"></ion-icon>\r\n              </div>\r\n              <h3 class=\"text comment\">{{request.comment}}</h3>\r\n            </div>\r\n\r\n            <!-- Tình trạng mẫu xét nghiệm *ngIf=\"(request?.requestType)\"-->\r\n            <div class=\"status\">\r\n              <!-- <h3>{{initDatas? (request.partner.status | orderStatus : initDatas?.orderStatus) : request.partner.status}}</h3> -->\r\n              <!-- <h3>{{request.requestType ? request.requestType.requestTypeName : 'Lấy mẫu'}}</h3> -->\r\n              <h3>{{request | statusRequestPipe}}</h3>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Nút thêm mới -->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"openModalPatientLab()\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n\r\n<!-- Form modal add end edit a Patient  -->\r\n\r\n<ion-modal [isOpen]=\"isModalOpenFormPatient\">\r\n  <ng-template>\r\n    <!-- Tiêu đề -->\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <!-- Nút huỷ modal -->\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button (click)=\"setOpenModalAddPatient(false)\">Huỷ</ion-button>\r\n        </ion-buttons>\r\n\r\n        <!-- Tiêu đề Modal -->\r\n        <ion-title>{{titleModalAddPatient}}</ion-title>\r\n\r\n        <!-- Nút thêm mới xét nghiệm -->\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"saveModalAddPatient()\">Lưu</ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <!-- Nội dung -->\r\n    <!-- <p>{{itemPatientFormModalLab | json}}</p> -->\r\n    <ion-content class=\"ion-padding\">\r\n      <!-- Label dẫn dắt người dùng-->\r\n      <label [innerHTML]=\"instructionModalPatient\"></label>\r\n      <!-- Khôi nhập dữ liệu -->\r\n      <div>\r\n        <!-- Nhập hình thức thanh toán-->\r\n        <!-- Đối tác (ionCancel)=\"pushLog('ionCancel fired')\" (ionDismiss)=\"pushLog('ionDismiss fired')\"label=\"Floating label\" label-placement=\"floating\"-->\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">\r\n              <ion-icon name=\"options-outline\"></ion-icon>\r\n              Loại Yêu cầu <span style=\"color:red\">*</span>\r\n            </ion-label>\r\n            <ion-select [interfaceOptions]=\"customAlertOptionsRequestType\" aria-label=\"parterns\"\r\n              placeholder=\"Chọn loại yêu cầu ...\" (ionChange)=\"handleChangeRequestType($event)\"\r\n              [(ngModel)]=\"itemPatientFormModalLab.valueRequestType\">\r\n              <ion-select-option *ngFor=\"let typeOrder of listTypeOrder\"\r\n                [value]=\"typeOrder.requestTypeId\">{{typeOrder.requestTypeName}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <span class=\"m-error\" *ngIf=\"validFormInput.isEmptyRequestType\">*Loại yêu cầu không được để trống!</span>\r\n        </ion-col>\r\n\r\n        <!-- Nhập tên bệnh nhân -->\r\n        <!-- <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">\r\n              <ion-icon name=\"person-outline\"></ion-icon>\r\n              Tên bệnh nhân <span style=\"color:red\">*</span>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"itemPatientFormModalLab.name\" type=\"text\" placeholder=\"Nhập tên bệnh nhân ...\"\r\n              (keyup)=\"onKeyUpInputNamePatient()\"></ion-input>\r\n          </ion-item>\r\n          <span class=\"m-error\" *ngIf=\"validFormInput.isEmptyFullName\">*Tên bệnh nhân không được để trống!</span>\r\n        </ion-col> -->\r\n\r\n        <!-- Nhập số điện thoại -->\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">\r\n              <ion-icon name=\"call-outline\"></ion-icon>\r\n              Số điện thoại <span style=\"color:red\">*</span>\r\n            </ion-label>\r\n            <ion-input type=\"tel\" placeholder=\"888-888-8888\" [(ngModel)]=\"itemPatientFormModalLab.phone\"\r\n              (keyup)=\"onKeyUpInputNumberPhone()\"></ion-input>\r\n          </ion-item>\r\n          <span class=\"m-error\" *ngIf=\"validFormInput.isEmptyNumberPhone\">*Số điện thoại không được để trống!</span>\r\n        </ion-col>\r\n\r\n        <!-- Nhập địa chỉ bệnh nhân -->\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">\r\n              <ion-icon name=\"location-outline\"></ion-icon>\r\n              Địa chỉ <span style=\"color:red\">*</span>\r\n            </ion-label>\r\n            <ion-input [(ngModel)]=\"itemPatientFormModalLab.address\" type=\"text\" (keyup)=\"onKeyUpInputAddress()\"\r\n              placeholder=\"Nhập địa chỉ ...\"></ion-input>\r\n          </ion-item>\r\n          <span class=\"m-error\" *ngIf=\"validFormInput.isEmptyAdress\">*Địa chỉ không được để trống!</span>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-item *ngIf=\"'true'\">\r\n            <div style=\"display: flex; flex-direction: column;\">\r\n              <span>TG Lấy mấu/Thu mẫu: <span style=\"color:red\">*</span></span>\r\n              <ion-datetime-button datetime=\"time\"\r\n                style=\"margin-top: 0.5rem; margin-bottom: 0.25rem;\"></ion-datetime-button>\r\n            </div>\r\n\r\n            <ion-modal [keepContentsMounted]=\"true\">\r\n              <ng-template>\r\n                <!-- [(ngModel)]=\"this.itemPatientFormModalLab.timeSample\" -->\r\n                <ion-datetime [(ngModel)]=\"this.itemPatientFormModalLab.timeSample\" size=\"small\"\r\n                  [showDefaultTitle]=\"true\" [showDefaultButtons]=\"true\" locale=\"vi-VI\" id=\"time\"\r\n                  [showClearButton]=\"true\" (ionChange)=\"handleChangeTimeSample($event)\">\r\n                  <span slot=\"title\">TG Lấy mấu/Thu mẫu</span>\r\n                </ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <!-- Nhập đối tác -->\r\n        <!-- Đối tác (ionCancel)=\"pushLog('ionCancel fired')\" (ionDismiss)=\"pushLog('ionDismiss fired')\"label=\"Floating label\" label-placement=\"floating\"-->\r\n        <!-- <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">\r\n              <ion-icon name=\"person-outline\"></ion-icon>\r\n              TT Đối tác <span style=\"color:red\">*</span>\r\n            </ion-label>\r\n            <ion-select aria-label=\"parterns\" placeholder=\"Chọn đối tác ...\" (ionChange)=\"handleChangePartner($event)\">\r\n              <ion-select-option *ngFor=\"let partner of listPartner\" [value]=\"partner.id\">{{partner.code}} -\r\n                {{partner.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <span class=\"m-error\" *ngIf=\"validFormInput.isEmptyInfoPartner\">*TT Đối tác không được để trống!</span>\r\n        </ion-col> -->\r\n\r\n\r\n        <!-- Nhập địa chỉ Ghi chú-->\r\n        <!-- <ion-input id=\"custom-input\" label=\"Custom Counter Format\" labelPlacement=\"floating\" [counter]=\"true\"\r\n          maxlength=\"20\" [counterFormatter]=\"customCounterFormatter\"></ion-input> -->\r\n        <ion-item>\r\n          <ion-label position=\"floating\">\r\n            <ion-icon name=\"pencil-outline\"></ion-icon>\r\n            Ghi chú\r\n          </ion-label>\r\n          <ion-input [(ngModel)]=\"itemPatientFormModalLab.notes\" type=\"text\" placeholder=\"Thêm ghi chú ...\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <!-- Khối nút điều hướng -->\r\n      <!-- Tiếp tục thêm thông tin bệnh nhân cần lấy mẫu xét nghiệp -->\r\n      <!-- <div style=\"margin-top:1rem; display: flex; justify-content: end;\">\r\n        <ion-buttons slot=\"primary\">\r\n          <ion-button (click)=\"nextModalPatient()\">\r\n            Lưu và thêm mới ...\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </div> -->\r\n\r\n\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_requests_requests_module_ts.js.map