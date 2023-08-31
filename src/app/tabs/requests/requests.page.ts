/* eslint-disable max-len */
import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  ActionSheetController,
  AlertController,
  IonSelect,
  LoadingController,
  ModalController,
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
import { VariablesConstant } from 'src/app/shared/constants/variables';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult, CalendarComponentOptions } from "ion2-calendar";
import { CalendarController } from 'ion2-calendar';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-requests',
  templateUrl: 'requests.page.html',
  styleUrls: ['requests.page.scss']
})
export class RequestsPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  @ViewChild('popoverFormFilter') popoverFormFilter;
  @ViewChild('modalFormFilterRequest') modalFormFilterRequest;
  @ViewChild('modalFilterInterval') modalFilterInterval: IonModal;
  @ViewChild('orderStatusSelect') orderStatusSelect: IonSelect;
  @ViewChild('requestType') requestType: IonSelect;
  @ViewChild('selectFillterInterval') selectFillterInterval: IonSelect;

  now: any;
  userInfo: any;
  isPopoverOpenFilter = false;
  keywordSearch: any;


  titleModalAddPatient = 'Thêm yêu cầu';
  instructionModalPatient = 'Mời nhập thông tin bệnh nhân :';
  numberOfNewPatients = 0;
  isModalOpenFormPatient = false;


  validFormInput = {
    isEmptyRequestType: false,
    // isEmptyFullName: false,
    isEmptyNumberPhone: false,
    isEmptyAdress: false,
    isEmptyTimeSample: false,
  };



  customPopoverOptions = {
    // header: 'Trạng thái đơn hàng',
    subHeader: 'Chọn trạng thái đơn hàng cần lọc',
    // message: 'Chỉ chọn một TTĐH',
  };

  itemPatientFormModalLab = {
    valueRequestType: 0,
    name: '',
    phone: '1',
    address: '1',
    timeSample: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss'),
    notes: '',
  };



  // Chức dữ liệu cơ sở, khởi tạo ban đầu.
  initDatas: any;

  // Danh sách các Phiểu xét nghiếm
  listOrder: any[] = [];

  // Danh sách yêu cầu Xét nghiệm
  listRequest: any[] = [];


  partnerByID: any;

  // Danh sách các loại yêu cầu
  listTypeOrder = [];

  // Form lọc theo filter
  formFilterTestSheet = {
    valueRequestTypePatient: 0,
    namePatient: '',
    phoneNoPatient: '',
    addressPatient: '',
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


  listRequestStatus = VariablesConstant.listRequestStatus;


  dateRange: { from: string; to: string; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarModalOptions = {
    pickMode: 'range',
    // from: new Date('1990-01-01'),
    weekdays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    // title: `Thời gian lọc ${} - ${}`,
    title: `Thời gian lọc`,
    canBackwardsSelected: true,
    closeIcon: true,
    closeLabel: "Huỷ",
    doneIcon: true,
    doneLabel: 'Ok',
    monthFormat: 'MM-YYYY'
  };

  intervalId: number;


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
    public modalCtrl: ModalController,
    public calendarConTroller: CalendarController,
    public cdr: ChangeDetectorRef

  ) {
    this.now = new Date();

  }


  onKeyUpInputNamePatient() {
    // Set is show message error Fullname
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



  async ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  async ngOnInit() {
    // console.log('ngOnInit');
    this.localStorage.getSelectedUser().then((res: any) => {
      this.userInfo = res;
      this.getPartnerByID(this.userInfo.partnerId);
      // Lấy dữ liệu danh sách yêu cầu xét nghiệm
      this.getListRequestInOneDay();
    });

    // Lấy danh sách loại yêu cầu
    await this.getListOrderType();
  }


  getPartnerByID(id: any) {
    this.generalService.getPartner(id).subscribe((res: any) => {
      this.partnerByID = res;
    },
      (error: any) => {
      }
    );
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dữ liệu đang tải lên ...',
      duration: 2000,
    });

    loading.present();
  }


  getListOrderType() {
    this.generalService.getListRequestType().subscribe(
      (res) => {
        if (res !== null) {
          // console.log('getListOrderType res: ', res);
          this.listTypeOrder = res.filter(en => en.requestTypeCode === 'LM' || en.requestTypeCode === 'TM');
        }
      },
      (error) => {
      }
    );
  }

  getListRequestByPayload(payload: any, isLoading: boolean) {
    // Show thông báo delay thời gian chờ loading dữ liệu
    if (isLoading) {
      this.showLoading();
    }

    this.generalService.getRequest(payload).subscribe(
      (res: any) => {
        if (res != null) {
          this.listRequest = res.data;
          // console.log('this.listRequest : ', this.listRequest);
        }
      },
      (error) => {
        if (error.status === 403) {
          this.notificationService.showMessage(Constant.DANGER, `Người dùng không có quyền truy cập`);
          this.router.navigate(['/login']);
        } else {
          this.notificationService.showMessage(Constant.DANGER, `Đã gặp lỗi khi trả về dữ liệu`);
        }
      });
  }


  getListRequestInOneDay() {
    const pastTime = new Date();
    const presentTime = pastTime;
    pastTime.setHours(0, 0, 0, 0);
    this.filterInterval.pastTime = this.datePipe.transform(pastTime, 'yyyy-MM-ddTHH:mm:ss');
    this.filterInterval.presentTime = this.datePipe.transform(presentTime, 'yyyy-MM-ddTHH:mm:ss');
    const payload = {
      page: 1,
      pageSize: 100,
      fromDate: pastTime,
      toDate: presentTime,
    };
    this.getListRequestByPayload(payload, true);
  }


  getAllListRequest() {
    const payload = {
      page: 1,
      pageSize: 100,
    };
    this.getListRequestByPayload(payload, true);
  }

  presentModalFilter(e: Event) {
    // this.modalFormFilterRequest.event = e;
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

  async openModalPatientLab() {
    // Reset lại lời dẫn
    this.instructionModalPatient = 'Mời tạo phiếu yêu cầu xét nghiệm:';
    this.numberOfNewPatients = 0;
    this.resetFormModalPatient();
    this.restartValidFormAddPatient();
    this.setOpenModalAddPatient(true);



  }

  restartValidFormAddPatient() {
    this.validFormInput.isEmptyAdress = false;
    this.validFormInput.isEmptyNumberPhone = false;
    this.validFormInput.isEmptyRequestType = false;

  }

  cancelModalAddPatient() {
    this.setOpenModalAddPatient(false);

  }


  confirmPatientModal() {


    const isPhone = !this.isEmpty(this.itemPatientFormModalLab.phone);
    this.validFormInput.isEmptyNumberPhone = !isPhone;


    const isAddress = !this.isEmpty(this.itemPatientFormModalLab.address);
    this.validFormInput.isEmptyAdress = !isAddress;


    const isRequest = !(this.itemPatientFormModalLab.valueRequestType === 0);
    this.validFormInput.isEmptyRequestType = !isRequest;

    const isTimeSample = !this.isEmpty(this.itemPatientFormModalLab.timeSample);
    this.validFormInput.isEmptyTimeSample = !isTimeSample;

    return (isRequest && isPhone && isAddress && isTimeSample);
  }

  saveModalAddRequest() {
    if (this.confirmPatientModal()) {
      // Thêm mới một item Patient
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
        receiveUserId: null,
      };
      this.generalService.addRequest(item).subscribe((res: any) => {
        if (res.ret && res.ret[0].code !== 0) {
          this.notificationService.showMessage(Constant.DANGER, res.ret[0].message);
        } else {
          // this.notificationService.showMessage(Constant.SUCCESS, Constant.MESSAGE_ADD_SUCCESS);
          this.notificationService.showMessage(Constant.SUCCESS, 'Tạo yêu cầu thành công!');
          this.getListRequestInOneDay();
          this.setOpenModalAddPatient(false);
        }
      });
    } else {
      this.notificationService.showMessage(Constant.DANGER, 'Nhập thiếu  dữ liệu bắt buộc!');
    }

  }


  nextModalPatient() {
    if (this.confirmPatientModal()) {
      // Thêm mới một item Patient
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
      phone: this.partnerByID.phone,
      address: this.partnerByID.address,
      timeSample: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss'),
      notes: '',
    };
  }


  async handleChangeSearch(event: any) {
    this.keywordSearch = event.target.value;


    const payload = {
      page: 1,
      pageSize: 100,
      textSearch: this.keywordSearch,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      phone: this.formFilterTestSheet.phoneNoPatient,
      partnerId: this.userInfo.partnerId,
      requestTypeId: this.formFilterTestSheet.valueRequestTypePatient,
      newStatus: this.formFilterTestSheet.orderStatus,
    };

    this.getListRequestByPayload(payload, false);

  }


  async handleChangeSelectOrderStatus(event: any) {
    this.formFilterTestSheet.orderStatus = event.target.value;
  }


  handleChangeFilterInterval(event: any) {

    console.log('change');

    const value = event.target.value;

    if (value != 10) {
      this.modalFilterInterval.dismiss();
    }

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
        this.filterInterval.pastTime = '';
        this.filterInterval.presentTime = '';
        this.filterInterval.isShow = false;
        break;
      case 1:
        daysToSubtract = 0;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        this.filterInterval.isShow = false;
        // console.log('Đầu ngày hôm nay', pastTime);
        break;
      case 2:
        // Subtract 1 day
        daysToSubtract = 1;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Cách đây 1 ngày trước', pastTime);
        this.filterInterval.isShow = false;
        break;
      case 3:
        // Subtract 7 day
        daysToSubtract = 7;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Cách đây 7 ngày', pastTime);
        this.filterInterval.isShow = false;

        break;
      case 4:
        // Subtract 14 da
        daysToSubtract = 14;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Cách đây 14 ngày', pastTime);
        this.filterInterval.isShow = false;

        break;
      case 5:
        // Subtract 30 day
        daysToSubtract = 30;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Cách đây 30 ngày', pastTime);
        this.filterInterval.isShow = false;

        break;
      case 6:
        // Đầu tuần này
        daysToSubtract = currentDay === 0 ? 6 : currentDay - 1;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Đầu tuần này', pastTime);
        this.filterInterval.isShow = false;
        break;
      case 7:
        // Đầu tuần trước
        daysToSubtract = currentDay + 7 - 1;
        // console.log('daysToSubtract', daysToSubtract);
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log(' Đầu tuần trước', pastTime);
        this.filterInterval.isShow = false;
        break;
      case 8:
        // Đầu tháng này
        pastTime.setDate(1);
        // console.log('Đầu tháng này', pastTime);
        this.filterInterval.isShow = false;
        break;
      case 9:
        // Đầu tháng trước
        // Set the date to the first day of the current mounth
        pastTime.setDate(1);
        // Subtract one month from the date
        pastTime.setMonth(pastTime.getMonth() - 1);
        this.filterInterval.isShow = false;
        // console.log('Đầu tháng trước ', pastTime);
        break;
      case 10:
        // Hiện calender cho hai thời điểm lọc dữ liệu.
        this.modalFilterInterval.present();
        this.filterInterval.isShow = true;
        return;
        break;
      default:
        this.filterInterval.pastTime = '';
        this.filterInterval.presentTime = '';
        this.filterInterval.isShow = false;
        break;
    }
    // Định dạng khoảng thời gian lọc




    if (value == 0) {
      this.filterInterval.pastTime = '';
      this.filterInterval.presentTime = '';
    } else {
      this.filterInterval.pastTime = this.datePipe.transform(pastTime, 'yyyy-MM-ddTHH:mm:ss');
      this.filterInterval.presentTime = this.datePipe.transform(presentTime, 'yyyy-MM-ddTHH:mm:ss');
    }

    const payload = {
      page: 1,
      pageSize: 100,
      textSearch: this.keywordSearch,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      phone: this.formFilterTestSheet.phoneNoPatient,
      partnerId: this.userInfo.partnerId,
      requestTypeId: this.formFilterTestSheet.valueRequestTypePatient,
      newStatus: this.formFilterTestSheet.orderStatus,
    };

    this.getListRequestByPayload(payload, true);
  }

  async handleChangeFilterIntervalCustomByUser(event: any) {
    const pastTime = this.filterInterval.pastTime;
    const presentTime = this.filterInterval.presentTime;
    const payload = {
      page: 1,
      pageSize: 100,
      textSearch: this.keywordSearch,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      phone: this.formFilterTestSheet.phoneNoPatient,
      partnerId: this.userInfo.partnerId,
      requestTypeId: this.formFilterTestSheet.valueRequestTypePatient,
      newStatus: this.formFilterTestSheet.orderStatus,
    };

    this.getListRequestByPayload(payload, false);
  }

  handleChangeRequestType(event: any) {
    const value = event.target.value;
    this.validFormInput.isEmptyRequestType = (value === 0);
  }

  handleChangeTimeSample(event: any) {

  }

  onSearchByFormFilter() {
    const payload = {
      page: 1,
      pageSize: 100,
      textSearch: this.keywordSearch,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      phone: this.formFilterTestSheet.phoneNoPatient,
      address: this.formFilterTestSheet.addressPatient,
      partnerId: this.userInfo.partnerId,
      requestTypeId: this.formFilterTestSheet.valueRequestTypePatient,
      newStatus: this.formFilterTestSheet.orderStatus,
    };

    this.getListRequestByPayload(payload, true);

    this.modalFormFilterRequest.dismiss();
  }


  restartFormFilter() {
    this.formFilterTestSheet.namePatient = '';
    this.formFilterTestSheet.phoneNoPatient = '';
    this.formFilterTestSheet.valueRequestTypePatient = 0;
    this.requestType.value = 0;
    this.orderStatusSelect.value = 0;
  }



  cancelFormFilter() {
    this.modalFormFilterRequest.dismiss();
  }


  filterIntervalt() {
    const from = new Date(this.dateRange.from);
    const to = new Date(this.dateRange.to);
    this.filterInterval.pastTime = this.datePipe.transform(from, 'yyyy-MM-ddTHH:mm:ss');
    this.filterInterval.presentTime = this.datePipe.transform(to, 'yyyy-MM-ddTHH:mm:ss');
    const payload = {
      page: 1,
      pageSize: 100,
      textSearch: this.keywordSearch,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      phone: this.formFilterTestSheet.phoneNoPatient,
      partnerId: this.userInfo.partnerId,
      requestTypeId: this.formFilterTestSheet.valueRequestTypePatient,
      newStatus: this.formFilterTestSheet.orderStatus,
    };
    this.getListRequestByPayload(payload, true);
    this.modalFilterInterval.dismiss();
  }

  pushLog(msg) {
    console.log(msg);
  }

  clickFilterInterval(event: any) {
    const value = event.target.value;
    if (value == 10) {
      this.modalFilterInterval.present();
    }
  }

  cancelFilterInterval(event: any) {
    const value = event.target.value;
    if (value == 10) {
      this.modalFilterInterval.dismiss();
    }
  }



  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }

}
