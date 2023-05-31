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
  @ViewChild('popoverFormFilter') popoverFormFilter;
  @ViewChild('orderStatusSelect') orderStatusSelect: IonSelect;
  now: any;
  userInfo: any;
  isPopoverOpenFilter = false;
  keywordSearch: any;


  titleModalAddPatient = 'Thêm yêu cầu';
  instructionModalPatient = 'Mời nhập thông tin bệnh nhân đầu tiên:';
  numberOfNewPatients = 0;
  isModalOpenFormPatient = false;


  validFormInput = {
    isEmptyFullName: false,
    isEmptyNumberPhone: false,
    isEmptyAdress: false,
    isEmptyInfoPartner: false,
  };



  customPopoverOptions = {
    // header: 'Trạng thái đơn hàng',
    subHeader: 'Chọn trạng thái đơn hàng cần lọc',
    // message: 'Chỉ chọn một TTĐH',
  };

  itemPatientFormModalLab = {
    name: '',
    phone: '',
    address: '',
    conditon: '',
    status: '',
    notes: '',
    partner: '',
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

  // Chức dữ liệu cơ sở, khởi tạo ban đầu.
  initDatas: any;

  // Danh sách các Phiểu xét nghiếm
  listOrder: any[] = [];


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

  selectPartner() {
    // Set is show message error Address
    this.validFormInput.isEmptyInfoPartner = this.isEmpty(this.itemPatientFormModalLab.partner);
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
    this.getListInitialData();


    // Lấy dữ liệu danh sách phiếu xét nghiệm
    await this.getListOrder();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dữ liệu đang tải lên sau 2 giây ...',
      duration: 2000,
    });

    loading.present();
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
      page: 1,
    };
    this.orderService.getOrders(payload).subscribe(
      (res) => {
        if (res != null) {
          this.listOrder = res.data;
          console.log('this.listOrder : ', this.listOrder);
        }
      },
      (error) => {
        if (error.status === 403) {
          this.notificationService.showMessage('danger', `Người dùng có quyền truy cập`);
          this.router.navigate(['/login']);
        } else {
          this.notificationService.showMessage('danger', `Dữ liệu trả về đã có lỗi xảy ra`);
        }
      });

  }


  getListInitialData() {
    this.initDatas = JSON.parse(localStorage.getItem(Constant.INIT_DATA));
  }

  presentPopoverFilter(e: Event) {
    this.popoverFormFilter.event = e;
    this.isPopoverOpenFilter = true;
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

    this.setOpenModalAddPatient(true);
  }

  cancelModalAddPatient() {
    this.setOpenModalAddPatient(false);
    // this.modal.dismiss(null, 'cancel');
  }


  confirmPatientModal() {
    const isName = !this.isEmpty(this.itemPatientFormModalLab.name);
    if (!isName) {
      this.validFormInput.isEmptyFullName = true;
    }
    const isPhone = !this.isEmpty(this.itemPatientFormModalLab.phone);
    if (!isPhone) {
      this.validFormInput.isEmptyNumberPhone = true;
    }
    const isAddress = !this.isEmpty(this.itemPatientFormModalLab.address);
    if (!isAddress) {
      this.validFormInput.isEmptyAdress = true;
    }
    return (isName && isPhone && isAddress);
  }

  saveModalAddPatient() {
    if (this.confirmPatientModal()) {
      // Thêm mới một item Patient
      this.listPatientLab.push(JSON.parse(JSON.stringify(this.itemPatientFormModalLab)));

      const item = {
        id: 0,
        patientId: 0,
        code: '',
        name: '',
        orderDoctor: '',
        orderDate: '',
        visitCode: '',
        visiteDate: '',
        chanDoan: '',
        khoa: '',
        buong: '',
        giuong: '',
        status: 0,
        phoneNo: '',
        address: '',
        note: this.itemPatientFormModalLab.notes,
        partnerId: 0,
        details: [
          {
            orderTypeId: 0,
            price: 0
          }
        ],
        paymentType: 1,
        patient: {
          id: 0,
          code: '',
          name: this.itemPatientFormModalLab.name,
          sex: 0,
          dob: '',
          yob: 0,
          cmnd: '',
          address: this.itemPatientFormModalLab.address,
          phoneNo: this.itemPatientFormModalLab.phone,
          email: ''
        },
        momWeight: 0,
        momHeightCM: 0,
        ultrasoundDate: '',
        gestationalWeek: 0,
        gestationalDay: 0,
        pregnancyNo: 0,
        fetusAmount: 0,
        nt: 0,
        crl: 0,
        expectedDateOfBirth: '',
        requestId: 0,
        lat: 0,
        lng: 0,
        assignToUserId: 0,
        specimenID: '',
        privateNote: '',
        discountPaymentType: 0,
        extraDiscountPaymentType: 0,
        bsdiscountPaymentType: 0,
        paidType: 0,
        utmSource: '',
        dateTakenSpecimen: '',
        addressLongitude: 0,
        addressLatitude: 0
      };
      // this.orderService.
      this.generalService.createOrder(item).subscribe(
        (res: any) => {
          if (res.isValid) {
            console.log('generalService res', res );
            // Reset form model lab
            this.resetFormModalPatient();
            this.notificationService.showMessage(Constant.SUCCESS, `Đã tạo phiếu xét nghiệm cho BN ${this.itemPatientFormModalLab.name}`);
            // Đóng modal
            this.setOpenModalAddPatient(false);
          } else {
            this.notificationService.showMessage(Constant.ERROR, `Đã có lỗi : ${res.errors[0].errorMessage}`);
          }
        },
        (error: any) => {

        }
      );




    } else {

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
      name: '',
      phone: '',
      address: '',
      conditon: '',
      status: '',
      notes: '',
      partner: ''
    };
  }


  handleChangeSearch(event: any) {
    this.keywordSearch = event.target.value;

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
      keyword: this.keywordSearch,
      pageSize: 50,
      page: 1,
    };
    this.orderService.getOrders(payload).subscribe(
      (res) => {
        if (res != null) {
          this.listOrder = res.data;
          console.log('this.listOrder Search: ', this.listOrder);
        }
      },
      (error) => {
        this.notificationService.showMessage('danger', `Dữ liệu trả về đã có lỗi xảy ra`);
      });
  }


  handleChangeSelectOrderStatus(event: any) {
    this.formFilterTestSheet.orderStatus = event.target.value;
  }


  handleChangeFilterInterval(event: any) {
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
        console.log('Cácg đây 14 ngày', pastTime);
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
        this.filterInterval.isShow = false;

        // Set the date to the first day of the current mounth
        pastTime.setDate(1);

        // Subtract one month from the date
        pastTime.setMonth(pastTime.getMonth() - 1);

        console.log('Đầu tháng trước ', pastTime);
        break;
      case 10:
        // Hiện calender cho hai thời điểm lọc dữ liệu.
        this.filterInterval.isShow = true;

        // Đặt dữ liệu ban đầu cho khoảng thời gian lọc dữ liệu
        // Bắt đầu - Thời điểm 0h ngày hôm nay
        // console.log('pastTime: ', pastTime);
        this.filterInterval.pastTime = this.datePipe.transform(pastTime, 'yyyy-MM-ddTHH:mm:ss');
        // console.log('this.filterInterval.pastTime : ', this.filterInterval.pastTime );


        // Kết thúc - Thời điểm hiện tại
        this.filterInterval.presentTime = this.datePipe.transform(presentTime, 'yyyy-MM-ddTHH:mm:ss');
        break;
      default:
        break;
    }



    // Show thông báo delay thời gian chờ loading dữ liệu
    this.showLoading();
    const payload = {
      barcode: '',
      patient: '',
      status: 0,
      fromDate: pastTime,
      toDate: presentTime,
      assignToUserId: 0,
      counselors: null,
      partnerId: 0,
      isSendSMS: null,
      isPrintResult: null,
      patientAge: null,
      phoneNo: '',
      keyword: '',
      pageSize: 100,
      page: 1,
    };
    this.orderService.getOrders(payload).subscribe(
      (res) => {
        if (res != null) {
          this.listOrder = res.data;
          console.log('onSearchByFormFilter this.listOrder : ', this.listOrder);
        }
      },
      (error) => {
        this.notificationService.showMessage('danger', `Dữ liệu trả về đã có lỗi xảy ra`);
      });
  }

  handleChangeFilterIntervalCustomByUser(event: any) {
    console.log('handleChangeFilterIntervalCustomByUser event', event);
    const pastTime = this.filterInterval.pastTime;
    // console.log('pastTime: ',pastTime);
    const presentTime = this.filterInterval.presentTime;
    // console.log('presentTime: ',presentTime);

    // Show thông báo delay thời gian chờ loading dữ liệu
    this.showLoading();
    const payload = {
      barcode: '',
      patient: '',
      status: 0,
      fromDate: pastTime,
      toDate: presentTime,
      assignToUserId: 0,
      counselors: null,
      partnerId: 0,
      isSendSMS: null,
      isPrintResult: null,
      patientAge: null,
      phoneNo: '',
      keyword: '',
      pageSize: 100,
      page: 1,
    };
    this.orderService.getOrders(payload).subscribe(
      (res) => {
        if (res != null) {
          this.listOrder = res.data;
          console.log('onSearchByFormFilter this.listOrder : ', this.listOrder);
        }
      },
      (error) => {
        this.notificationService.showMessage('danger', `Dữ liệu trả về đã có lỗi xảy ra`);
      });
  }


  onSearchByFormFilter() {
    // Show thông báo delay thời gian chờ loading dữ liệu
    this.showLoading();
    const payload = {
      barcode: '',
      patient: '',
      status: this.formFilterTestSheet.orderStatus,
      fromDate: '',
      toDate: '',
      assignToUserId: 0,
      counselors: null,
      partnerId: 0,
      isSendSMS: null,
      isPrintResult: null,
      patientAge: null,
      phoneNo: this.formFilterTestSheet.phoneNoPatient,
      keyword: this.formFilterTestSheet.namePatient,
      pageSize: 100,
      page: 1,
    };
    this.orderService.getOrders(payload).subscribe(
      (res) => {
        if (res != null) {
          this.listOrder = res.data;
          console.log('onSearchByFormFilter this.listOrder : ', this.listOrder);
        }
      },
      (error) => {
        this.notificationService.showMessage('danger', `Dữ liệu trả về đã có lỗi xảy ra`);
      });

    this.popoverFormFilter.dismiss();
  }


  restartFormFilter() {
    this.formFilterTestSheet.namePatient = '';
    this.formFilterTestSheet.phoneNoPatient = '';
    this.orderStatusSelect.value = 0;
  }

  cancelFormFilter() {
    this.popoverFormFilter.dismiss();
  }

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }
}
