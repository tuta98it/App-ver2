/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

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
  isModalOpen = false;

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


  formFilterTestSheet = {
    namePatient: '',
    phoneNoPatient: '',
    orderStatus: 0,
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
    private loadingCtrl: LoadingController
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
        this.notificationService.showMessage('danger', `Dữ liệu trả về đã có lỗi xảy ra`);
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
    this.isModalOpen = isOpen;
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
    const isPhone = !this.isEmpty(this.itemPatientFormModalLab.phone);
    const isAddress = !this.isEmpty(this.itemPatientFormModalLab.address);
    return (isName && isPhone && isAddress);
  }

  saveModalAddPatient() {
    if (this.confirmPatientModal()) {
      // Thêm mới một item Patient
      this.listPatientLab.push(JSON.parse(JSON.stringify(this.itemPatientFormModalLab)));

      // Reset form model lab
      this.resetFormModalPatient();

      // Đóng modal
      this.setOpenModalAddPatient(false);
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
    const presentTime = new Date();
    const pastTime = new Date();
    pastTime.setHours(0, 0, 0, 0);
    // Get the current day of the week (0-6, where Sunday is 0)
    const currentDay = presentTime.getDay();
    // Subtract the number of days elapsed in the current week
    let daysToSubtract: any;
    switch (value) {
      case 1:
        daysToSubtract = 0;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log('Đầu ngày hôm nay', pastTime);
        break;
      case 2:
        // Subtract 1 day
        daysToSubtract = 1;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log('Cách đây 1 ngày trước', pastTime);
        break;
      case 3:
        // Subtract 7 day
        daysToSubtract = 7;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log('Cách đây 7 ngày', pastTime);
        break;
      case 4:
        // Subtract 14 day
        daysToSubtract = 14;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log('Cácg đây 14 ngày', pastTime);
        break;
      case 5:
        // Subtract 30 day
        daysToSubtract = 30;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log('Cách đây 30 ngày', pastTime);
        break;
      case 6:
        // Đầu tuần này
        daysToSubtract = currentDay === 0 ? 6 : currentDay - 1;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log('Đầu tuần này', pastTime);
        break;
      case 7:
        // Đầu tuần trước
        daysToSubtract = currentDay + 7 - 1;
        console.log('daysToSubtract', daysToSubtract);
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        console.log(' Đầu tuần trước', pastTime);
        break;
      case 8:
        // Đầu tháng này
        pastTime.setDate(1);
        console.log('Đầu tháng này', pastTime);
        break;
      case 9:
        // Đầu tháng trước
        // Set the date to the first day of the current mounth
        pastTime.setDate(1);

        // Subtract one month from the date
        pastTime.setMonth(pastTime.getMonth() - 1);

        console.log('Đầu tháng trước ', pastTime);
        break;
      case 10:

        break;
      default:
        break;
    }

    // [
    //   {
    //       "id": 1,
    //       "name": "Hôm nay"
    //   },
    //   {
    //       "id": 2,
    //       "name": "Hôm qua"
    //   },
    //   {
    //       "id": 3,
    //       "name": "7 ngày qua"
    //   },
    //   {
    //       "id": 4,
    //       "name": "14 ngày qua"
    //   },
    //   {
    //       "id": 5,
    //       "name": "30 ngày qua"
    //   },
    //   {
    //       "id": 6,
    //       "name": "Tuần này"
    //   },
    //   {
    //       "id": 7,
    //       "name": "Tuần trước"
    //   },
    //   {
    //       "id": 8,
    //       "name": "Tháng này"
    //   },
    //   {
    //       "id": 9,
    //       "name": "Tháng trước"
    //   },
    //   {
    //       "id": 10,
    //       "name": "Từ ngày đến ngày"
    //   }
    // ]
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
