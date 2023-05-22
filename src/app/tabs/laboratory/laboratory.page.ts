/* eslint-disable max-len */
import {Component, ViewChild} from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {
  ActionSheetController,
  AlertController,
  NavController,
  PickerController,
  Platform,
  PopoverController
} from '@ionic/angular';
import {Constant} from '../../shared/constants/constant.class';
import {StorageService} from '../../services/storage.service';
import {NotificationService} from '../../services/notification.service';
import {MainService} from '../../services/main.service';
import {environment} from '../../../environments/environment';
import {BadgeService} from '../../services/badge.service';
import {AppVersion} from '@ionic-native/app-version/ngx';

import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { IsEmptyPipe } from 'src/app/shared/pipe/is-empty.pipe';
@Component({
  selector: 'app-laboratory',
  templateUrl: 'laboratory.page.html',
  styleUrls: ['laboratory.page.scss']
})
export class LaboratoryPage {
  @ViewChild(IonModal) modal!: IonModal;

  now: any;
  userInfo: any;
  isPopoverOpen = false;



  titleModalAddPatient = 'Thêm yêu cầu';
  instructionModalPatient = 'Mời nhập thông tin bệnh nhân đầu tiên:';
  numberOfNewPatients = 0;
  isModalOpen = false;

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
              private alertController: AlertController
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

  ionViewWillEnter() {
    this.localStorage.getSelectedUser().then((res) => {
      console.log('getSelectedStudent', res);
      this.userInfo = res;
    });
  }

  showProfile() {

  }

  logout() {
    this.localStorage.logout();
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

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }
}
