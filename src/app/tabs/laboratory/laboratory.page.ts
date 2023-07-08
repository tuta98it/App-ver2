/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  ActionSheetController,
  AlertController,
  IonSelect,
  LoadingController,
  NavController,
  PickerController,
  Platform,
  PopoverController
} from '@ionic/angular';
import { Constant } from '../../shared/constants/constant.class';
import { StorageService } from '../../services/storage.service';
import { NotificationService } from '../../services/notification.service';
import { MainService } from '../../services/main.service';
import { environment } from '../../../environments/environment';
import { BadgeService } from '../../services/badge.service';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { IsEmptyPipe } from 'src/app/shared/pipe/is-empty.pipe';
import { OrderService } from 'src/app/services/order.service';
import { GeneralService } from 'src/app/services/general-service';


@Component({
  selector: 'app-laboratory',
  templateUrl: 'laboratory.page.html',
  styleUrls: ['laboratory.page.scss']
})
export class LaboratoryPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  @ViewChild('modalFormFilterLab') modalFormFilterLab;
  @ViewChild('orderStatusSelect') orderStatusSelect: IonSelect;
  now: any;
  userInfo: any;
  isPopoverOpenFilter = false;
  keywordSearch: any;


  titleModalAddPatient = 'Thêm yêu cầu';
  instructionModalPatient = 'Mời nhập thông tin bệnh nhân đầu tiên:';
  numberOfNewPatients = 0;
  isModalOpenFormPatient = false;
  isModalOpenViewPDF = false;


  validFormInput = {
    // isEmptyRequestType: false,
    isEmptyFullName: false,
    isEmptyNumberPhone: false,
    isEmptyAdress: false,
  };



  customPopoverOptions = {
    // header: 'Trạng thái chỉ định',
    subHeader: 'Chọn trạng thái chỉ định cần lọc',
    // message: 'Chỉ chọn một TTĐH',
  };

  itemPatientFormModalLab = {
    valueRequestType: 0,
    name: '',
    phone: '',
    address: '',
    timeSample: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss'),
    notes: '',
  };

  listPatientLab = [
    {
      name: '1234-1643 Trần Văn A',
      phone: '0981123574',
      address: 'CT6 Khu đô thị Việt Hưng, Long Biên, Hà Nội',
      conditon: 'Viêm loét dạ dày tá tràng',
      status: 'Chưa nhận yêu cầu',
      notes: '',
    },

    {
      name: '1234 - 2341 Trần Thị Lý',
      phone: '0234538592',
      address: '257 Giải phóng, Hai Bà Trưng, Hà Nội',
      conditon: 'Sốt xuất huyết',
      status: 'Đã nhận yêu cầu và đang xử lý',
      notes: '',
    },

    {
      name: '1234 - 1643 Lý Thuỳ Linh',
      phone: '0903245394',
      address: '40 Phường Liệt, Thanh Xuân, Hà Nội',
      conditon: 'Viêm gan A',
      status: 'Đã trả kết quả',
      notes: '',
    }
  ];


  orderStatus = [
    // {
    //   id: 1,
    //   name: 'Đã thanh toán'
    // },
    // {
    //   id: 2,
    //   name: 'Đã thực hiện'
    // },
    // {
    //   id: 3,
    //   name: 'Đã có kết quả 1 phần'
    // },
    {
      id: 4,
      name: 'Đã có kết quả'
    },
    {
      id: 5,
      name: 'Đã lấy mẫu'
    },
    // {
    //   id: 6,
    //   name: 'Đã lấy mẫu một phần'
    // },
    // {
    //   id: 7,
    //   name: 'Đã nhận mẫu'
    // },
    // {
    //   id: 8,
    //   name: 'Đã nhận mẫu 1 phần'
    // },
    {
      id: 10,
      name: 'Chờ lấy mẫu'
    }
  ];

  // Chức dữ liệu cơ sở, khởi tạo ban đầu.
  initDatas: any;

  // Danh sách các Phiểu xét nghiếm
  listOrder: any[] = [];

  // Danh sách yêu cầu Xét nghiệm
  listRequest: any[] = [];

  // Danh sách đối tác
  listPartner = [];

  // Danh sách các loại yêu cầu
  listTypeOrder = [];

  // Form lọc theo filter
  formFilterTestSheet = {
    namePatient: '',
    phoneNoPatient: '',
    orderStatus: 0,
  };

  filterInterval = {
    isShow: false,
    presentTime: '',
    pastTime: '',
  };

  customAlertOptionsRequestType = {
    header: 'Chọn loại yêu cầu',
    // subHeader: '',
    // message: '',
    translucent: true,
  };

  public zoom = '150%';
  pdfUrls: string[] = [
    'https://invivo.pmr.vn/Viewer/Media/27464/25052023-11626791.pdf',
    'https://invivo.pmr.vn/Viewer/Media/27464/25052023-11626791_336HPVHQIAG.pdf',
    'https://invivo.pmr.vn/Viewer/Media/27464/27464-5364-3394-nguyen-thi-thu-tra.pdf'
  ];

  constructor(public photoService: PhotoService,
    private popoverController: PopoverController,
    private router: Router,
    private platform: Platform,
    private localStorage: StorageService,
    private storage: Storage,
    public navCtrl: NavController,
    private pickerCtrl: PickerController,
    private actionSheetCtrl: ActionSheetController,
    private notificationService: NotificationService,
    private mainService: MainService,
    public badgeService: BadgeService,
    private appVersion: AppVersion,
    private alertController: AlertController,
    private orderService: OrderService,
    private loadingCtrl: LoadingController,
    private datePipe: DatePipe,
    private generalService: GeneralService,
  ) {
    this.now = new Date();


    this.listPatientLab = [
      {
        name: '1234-1643 Trần Văn A',
        phone: '0981123574',
        address: 'CT6 Khu đô thị Việt Hưng, Long Biên, Hà Nội',
        conditon: 'Viêm loét dạ dày tá tràng',
        status: 'Chưa nhận yêu cầu',
        notes: '',
      },

      {
        name: '1234 - 2341 Trần Thị Lý',
        phone: '0234538592',
        address: '257 Giải phóng, Hai Bà Trưng, Hà Nội',
        conditon: 'Sốt xuất huyết',
        status: 'Đã nhận yêu cầu và đang xử lý',
        notes: '',
      },

      {
        name: '1234 - 1643 Lý Thuỳ Linh',
        phone: '0903245394',
        address: '40 Phường Liệt, Thanh Xuân, Hà Nội',
        conditon: 'Viêm gan A',
        status: 'Đã trả kết quả',
        notes: '',
      }
    ];
  }


  onKeyUpInputNamePatient() {
    // Set is show message error Fullname
    this.validFormInput.isEmptyFullName = this.isEmpty(this.itemPatientFormModalLab.name);
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

  async ionViewWillEnter() {
    console.log('ionViewWillEnter');


  }

  async ngOnInit() {
    console.log('ngOnInit');
    this.localStorage.getSelectedUser().then((res) => {
      this.userInfo = res;
    });

    // Lấy dữ liệu cho biến DS Dữ liệu khởi tạo
    // await this.getListInitialData();


    // Lấy dữ liệu danh sách phiếu xét nghiệm
    const payload = {
      // barcode: '',
      // patient: '',
      // status: 0,
      // fromDate: '',
      // toDate: '',
      // assignToUserId: 0,
      // counselors: null,
      // partnerId: 0,
      // isSendSMS: null,
      // isPrintResult: null,
      // patientAge: null,
      // phoneNo: null,
      // keyword: '',
      pageSize: 50,
      page: 1,
    };
    await this.getListOrder(payload, true);

    // Lấy dữ liệu danh sách yêu cầu xét nghiệm
    // const payload = {
    //   page: 1,
    //   pageSize: 50,
    //   fromDate: null,
    //   toDate: null,
    //   phone: null,
    //   partnerId: null,
    //   receiveUserId: null,
    //   called: null,
    //   arrived: null,
    //   arrivedLabo: null,
    //   warning: null,
    //   received: null,
    //   requestTypeId: null,
    //   userCreated: null,
    //   canceled: false
    // };
    // await this.getListRequestByPayload(payload, true);

    // Lấy danh sách loại yêu cầu
    await this.getListOrderType();


    // Lấy dữ liệu danh sách các đối tác
    // await this.getListPartner();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dữ liệu đang tải lên ...',
      duration: 2000,
    });

    loading.present();
  }

  getListOrder(payload: any, isLoading: boolean) {
    // Show thông báo delay thời gian chờ loading dữ liệu
    if (isLoading) {
      this.showLoading();
    }


    this.orderService.getOrders(payload).subscribe(
      (res) => {
        if (res != null) {
          this.listOrder = res.data;
          console.log('this.listOrder : ', this.listOrder);
        }
      },
      (err) => {
        if (err.status === 403) {
          this.notificationService.showMessage(Constant.DANGER, `Người dùng có quyền truy cập`);
          this.router.navigate(['/login']);
        } else {
          this.notificationService.showMessage(Constant.DANGER, `Dữ liệu trả về đã có lỗi xảy ra`);
        }
      });
  }

  getListOrderType() {
    this.generalService.getListRequestType().subscribe(
      (res) => {
        if (res !== null) {
          console.log('getListOrderType res: ', res);
          this.listTypeOrder = res.filter(en => en.requestTypeCode === 'LM' || en.requestTypeCode === 'TM');
        }
      },
      (err) => {
      }
    );
  }

  // getListRequestByPayload(payload: any, isLoading: boolean) {
  //   // Show thông báo delay thời gian chờ loading dữ liệu
  //   if (isLoading) {
  //     this.showLoading();
  //   }

  //   this.generalService.getRequest(payload).subscribe(
  //     (res: any) => {
  //       if (res != null) {
  //         this.listRequest = res.data;
  //         console.log('this.listRequest : ', this.listRequest);
  //       }
  //     },
  //     (error) => {
  //       if (error.status === 403) {
  //         this.notificationService.showMessage(Constant.DANGER, `Người dùng có quyền truy cập`);
  //         this.router.navigate(['/login']);
  //       } else {
  //         this.notificationService.showMessage(Constant.DANGER, `Dữ liệu trả về đã có lỗi xảy ra`);
  //       }
  //     });

  // }

  // getListInitialData() {
  //   this.initDatas = JSON.parse(localStorage.getItem(Constant.INIT_DATA));
  // }

  presentPopoverFilter(e: Event) {
    // this.modalFormFilterLab.event = e;
    this.isPopoverOpenFilter = true;
  }

  getListPartner() {
    this.generalService.getListPartner().subscribe(
      (res) => {
        this.listPartner = res;
      },
      (err) => { }
    );
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


  setOpenModalAddPatient(isOpen: boolean) {
    this.isModalOpenFormPatient = isOpen;
  }

  openModalPatientLab() {
    // Reset lại lời dẫn
    this.instructionModalPatient = 'Mời nhập thông tin bệnh nhân đầu tiên:';
    this.numberOfNewPatients = 0;

    this.resetFormModalPatient();
    this.restartValidFormAddPatient();
    this.setOpenModalAddPatient(true);
  }

  setOpenModalViewPDF(isOpen: boolean) {
    this.isModalOpenViewPDF = isOpen;
  }
  restartValidFormAddPatient() {
    this.validFormInput.isEmptyAdress = false;
    this.validFormInput.isEmptyFullName = false;
    this.validFormInput.isEmptyNumberPhone = false;
    // this.validFormInput.isEmptyRequestType = false;

  }

  cancelModalAddPatient() {
    this.setOpenModalAddPatient(false);
    // this.modal.dismiss(null, 'cancel');
  }


  confirmPatientModal() {
    const isName = !this.isEmpty(this.itemPatientFormModalLab.name);
    this.validFormInput.isEmptyFullName = !isName;

    const isPhone = !this.isEmpty(this.itemPatientFormModalLab.phone);
    this.validFormInput.isEmptyNumberPhone = !isPhone;


    const isAddress = !this.isEmpty(this.itemPatientFormModalLab.address);
    this.validFormInput.isEmptyAdress = !isAddress;


    // const isRequest = !(this.itemPatientFormModalLab.valueRequestType === 0);
    // this.validFormInput.isEmptyRequestType = !isRequest;

    return (isName && isPhone && isAddress);
  }

  saveModalAddPatient() {
    if (this.confirmPatientModal()) {
      // Thêm mới một item Patient
      this.listPatientLab.push(JSON.parse(JSON.stringify(this.itemPatientFormModalLab)));

      const item = {
        // id: 0,
        // patientId: null,
        // code: null,
        // name: null,
        // orderDoctor: null,
        // orderDate: null,
        // visitCode: null,
        // visiteDate: null,
        // chanDoan: null,
        // khoa: null,
        // buong: null,
        // giuong: null,
        // status: null,
        // phoneNo: null,
        // address: null,
        note: this.itemPatientFormModalLab.notes,
        // partnerId: null,
        // details: [
        //   {
        //     orderTypeId: null,
        //     price: null
        //   }
        // ],
        paymentType: 1,
        patient: {
          // id: null,
          // code: null,
          name: this.itemPatientFormModalLab.name,
          // sex: null,
          // dob: null,
          // yob: null,
          // cmnd: null,
          address: this.itemPatientFormModalLab.address,
          phoneNo: this.itemPatientFormModalLab.phone,
          email: null
        },
        // momWeight: null,
        // momHeightCM: null,
        // ultrasoundDate: null,
        // gestationalWeek: null,
        // gestationalDay: null,
        // pregnancyNo: null,
        // fetusAmount: null,
        // nt: null,
        // crl: null,
        // expectedDateOfBirth: null,
        // requestId: null,
        // lat: null,
        // lng: null,
        // assignToUserId: null,
        // specimenID: null,
        // privateNote: null,
        // discountPaymentType: null,
        // extraDiscountPaymentType: null,
        // bsdiscountPaymentType: null,
        // paidType: null,
        // utmSource: null,
        // dateTakenSpecimen: null,
        // addressLongitude: null,
        // addressLatitude: null
      };
      // this.orderService.
      this.generalService.createOrder(item).subscribe(
        (res: any) => {
          if (res.isValid) {
            // console.log('generalService res', res );
            // Reset form model lab
            this.resetFormModalPatient();
            this.notificationService.showMessage(Constant.SUCCESS, `Đã tạo phiếu xét nghiệm cho BN ${this.itemPatientFormModalLab.name}`);
            // Đóng modal
            this.setOpenModalAddPatient(false);
          } else {
            this.notificationService.showMessage(Constant.DANGER, `Đã có lỗi : ${res.errors[0].errorMessage}`);
          }
        },
        (err: any) => {
          this.notificationService.showMessage(Constant.DANGER, `Đã có lỗi  xảy ra`);
        },
        (ret: any) => {
          this.notificationService.showMessage(Constant.DANGER, `Đã có lỗi ${ret[0].errorMessage}`);
        }
      );
      this.notificationService.showMessage(Constant.DANGER, `Lỗi ngoài phạm vi xử lý, nghiệm vụ chưa hoàn chỉnh`);
    } else {
      this.notificationService.showMessage(Constant.DANGER, `Người dùng nhập thiếu trường dữ liệu`);
    }

  }


  nextModalPatient() {
    if (this.confirmPatientModal()) {
      // Thêm mới một item Patient
      this.listPatientLab.push(JSON.parse(JSON.stringify(this.itemPatientFormModalLab)));

      // Thêm +1 bệnh nhân thành công. Tăng biến đếm số lượng bệnh nhân thêm mới thành công lên 1
      this.numberOfNewPatients++;

      // Thay đổ lời đầu modal kkhi thêm mới
      this.instructionModalPatient = `Đã thêm <strong>${this.numberOfNewPatients}</strong> bệnh nhân. Mời nhập thông tin bệnh nhân tiếp theo:`;

      // Reset form model lab
      this.resetFormModalPatient();
    };

  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {

    } else if (ev.detail.role === 'next') {

    }

  }

  resetFormModalPatient() {
    this.itemPatientFormModalLab = {
      valueRequestType: 0,
      name: '',
      phone: '',
      address: '',
      timeSample: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss'),
      notes: '',
    };
  }


  async handleChangeSearch(event: any) {
    this.keywordSearch = event.target.value;

    const payload = {
      // barcode: null,
      patient: this.formFilterTestSheet.namePatient,
      status: this.formFilterTestSheet.orderStatus,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      // assignToUserId: null,
      // counselors: null,
      partnerId: this.userInfo.partnerId,
      // isSendSMS: null,
      // isPrintResult: null,
      // patientAge: null,
      phoneNo: this.formFilterTestSheet.phoneNoPatient,
      keyword: this.keywordSearch,
      pageSize: 50,
      page: 1,
    };
    await this.getListOrder(payload, false);


  }


  async handleChangeSelectOrderStatus(event: any) {
    this.formFilterTestSheet.orderStatus = event.target.value;
  }


  async handleChangeFilterInterval(event: any) {
    const value = event.target.value;
    // let isShowFilterInterval = this.filterInterval.isShow;
    const pastTime = new Date();
    const presentTime = new Date();

    pastTime.setHours(0, 0, 0, 0);

    // Get the current day of the week (0-6, where Sunday is 0)
    const currentDay = presentTime.getDay();
    // Subtract the number of days elapsed in the current week
    let daysToSubtract: any;
    switch (value) {
      case 0:
        this.filterInterval.isShow = false;
        // Bắt đầu - Thời điểm 0h ngày hôm nay
        this.filterInterval.pastTime = '';
        // console.log('this.filterInterval.pastTime : ', this.filterInterval.pastTime);
        // Kết thúc - Thời điểm hiện tại
        this.filterInterval.presentTime = '';
        break;
      case 1:
        this.filterInterval.isShow = false;
        daysToSubtract = 0;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Đầu ngày hôm nay', pastTime);
        break;
      case 2:
        // Subtract 1 day
        this.filterInterval.isShow = false;
        daysToSubtract = 1;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Cách đây 1 ngày trước', pastTime);
        break;
      case 3:
        // Subtract 7 day
        this.filterInterval.isShow = false;
        daysToSubtract = 7;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Cách đây 7 ngày', pastTime);
        break;
      case 4:
        // Subtract 14 day
        this.filterInterval.isShow = false;
        daysToSubtract = 14;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Cách đây 14 ngày', pastTime);
        break;
      case 5:
        // Subtract 30 day
        this.filterInterval.isShow = false;
        daysToSubtract = 30;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Cách đây 30 ngày', pastTime);
        break;
      case 6:
        // Đầu tuần này
        this.filterInterval.isShow = false;

        daysToSubtract = currentDay === 0 ? 6 : currentDay - 1;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Đầu tuần này', pastTime);
        break;
      case 7:
        // Đầu tuần trước
        this.filterInterval.isShow = false;

        daysToSubtract = currentDay + 7 - 1;
        console.log('daysToSubtract', daysToSubtract);
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log(' Đầu tuần trước', pastTime);
        break;
      case 8:
        // Đầu tháng này
        this.filterInterval.isShow = false;

        pastTime.setDate(1);
        // console.log('Đầu tháng này', pastTime);
        break;
      case 9:
        // Đầu tháng trước
        this.filterInterval.isShow = false;

        // Set the date to the first day of the current mounth
        pastTime.setDate(1);

        // Subtract one month from the date
        pastTime.setMonth(pastTime.getMonth() - 1);

        // console.log('Đầu tháng trước ', pastTime);
        break;
      case 10:
        // Hiện calender cho hai thời điểm lọc dữ liệu.
        this.filterInterval.isShow = true;
        break;
      default:
        break;
    }

    // Định dạng khoảng thời gian lọc
    if (value >= 1 && value <= 10) {
      this.filterInterval.pastTime = this.datePipe.transform(pastTime, 'yyyy-MM-ddTHH:mm:ss');

      this.filterInterval.presentTime = this.datePipe.transform(presentTime, 'yyyy-MM-ddTHH:mm:ss');
    } else {
      this.filterInterval.pastTime = '';

      this.filterInterval.presentTime = '';
    }

    const payload = {
      // barcode: null,
      patient: this.formFilterTestSheet.namePatient,
      status: this.formFilterTestSheet.orderStatus,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      // assignToUserId: null,
      // counselors: null,
      partnerId: this.userInfo.partnerId,
      // isSendSMS: null,
      // isPrintResult: null,
      // patientAge: null,
      phoneNo: this.formFilterTestSheet.phoneNoPatient,
      keyword: this.keywordSearch,
      pageSize: 50,
      page: 1,
    };


    await this.getListOrder(payload, true);
  }

  async handleChangeFilterIntervalCustomByUser(event: any) {
    // console.log('handleChangeFilterIntervalCustomByUser event', event);
    const pastTime = this.filterInterval.pastTime;
    // console.log('pastTime: ',pastTime);
    const presentTime = this.filterInterval.presentTime;
    // console.log('presentTime: ',presentTime);


    const payload = {
      // barcode: null,
      patient: this.formFilterTestSheet.namePatient,
      status: this.formFilterTestSheet.orderStatus,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      // assignToUserId: null,
      // counselors: null,
      partnerId: this.userInfo.partnerId,
      // isSendSMS: null,
      // isPrintResult: null,
      // patientAge: null,
      phoneNo: this.formFilterTestSheet.phoneNoPatient,
      keyword: this.keywordSearch,
      pageSize: 50,
      page: 1,
    };

    await this.getListOrder(payload, true);
  }

  handleChangeRequestType(event: any) {

    // console.log('handleChangePartner event: ', event);
    const value = event.target.value;
    // this.itemPatientFormModalLab.valueRequestType = value;
    // this.validFormInput.isEmptyRequestType = (value === 0);

  }

  handleChangeTimeSample(event: any) {

  }

  async onSearchByFormFilter() {

    const payload = {
      // barcode: null,
      patient: this.formFilterTestSheet.namePatient,
      status: this.formFilterTestSheet.orderStatus,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      // assignToUserId: null,
      // counselors: null,
      partnerId: this.userInfo.partnerId,
      // isSendSMS: null,
      // isPrintResult: null,
      // patientAge: null,
      phoneNo: this.formFilterTestSheet.phoneNoPatient,
      keyword: this.keywordSearch,
      pageSize: 50,
      page: 1,
    };
    await this.getListOrder(payload, false);

    this.modalFormFilterLab.dismiss();
  }

  showResultTest(order: any) {
    const payload = {
      sid: order.code,
    };
    if (order.status === 4) {
      this.generalService.viewKQNoCode(payload).subscribe(
        (res: any) => {
          if (res.isValid) {
            if (this.isEmpty(res.errors)) {
              if (!this.isEmpty(res.allFile)) {
                this.notificationService.showMessage(Constant.SUCCESS, `Phiếu xét nghiệm có mã ${order.code} đã có kết quả.`);
                this.pdfUrls = res.allFile;
                this.setOpenModalViewPDF(true);
              } else {
                this.notificationService.showMessage(Constant.WARNING, `Không tồn tại kết quả xét nghiệm có mã ${order.code} trên hệ thống. Ví dụ`);
                this.setOpenModalViewPDF(true);
              }
            } else {
              this.notificationService.showMessage(Constant.DANGER, 'Đã có lỗi xảy ra!');
            }
          } else {
            this.notificationService.showMessage(Constant.DANGER, res.error.errorMessage);
          }
        },
        (err: any) => {
          this.notificationService.showMessage(Constant.DANGER, 'Đã có lỗi xảy ra!');
        }
      );
    }
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
    this.modalFormFilterLab.dismiss();
  }

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }
}
