import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController, IonModal, IonTabs, ModalController, NavController } from '@ionic/angular';
import { BadgeService } from '../services/badge.service';
import { StorageService } from '../services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core/components';
import { IsEmptyPipe } from '../shared/pipe/is-empty.pipe';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  // @ViewChild(IonModal) modal!: IonModal;
  linkAvatarDefault = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  public alertConfirmButtons = [
    {
      text: 'Huỷ',
      role: 'cancel',
      handler: () => {
        // this.handlerMessage = 'Alert canceled';
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.logoutAccount();
        // this.handlerMessage = 'Alert confirmed';
      },
    },
  ];
  accCurrent: any = {};
  titleApp = 'Xét nghiệm';
  titleContact = 'Liên hệ';
  selectedTab = 'tab1';
  tabHomeClickEvent: any;
  userInfo: any;
  isModalOpenUser = false;
  isModalOpenSales = false;
  isModalOpenContact = false;

  constructor(
    public navCtrl: NavController,
    public badgeService: BadgeService,
    public localStorage: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private alertController: AlertController
  ) {

  }

  setResult(ev: any) {
    const role = ev.detail.role;
    if (role === 'confirm') {
      // console.log(`Dismissed with role: ${ev.detail.role}`);
    } else if ('cancel') {

    }
  }


  // async openDialog() {
  //   const modal = await this.modalController.create({
  //     component: ConfirmDialogComponent,
  //     componentProps: {
  //       title: "Xác nhận",
  //       message: "Đăng xuất khỏi tài khoản của bạn?"
  //     }
  //   });

  //   modal.onDidDismiss().then(result => {
  //     if (result.data) {
  //       // User clicked OK
  //       console.log('User clicked OK');
  //     } else {
  //       // User clicked Cancel
  //       console.log('User clicked Cancel');
  //     }
  //   });

  //   return await modal.present();
  // }


  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  async ngOnInit() {
    this.localStorage.getSelectedUser().then((res) => {
      this.userInfo = res;
    });

  }

  ionViewDidEnter() {
  }



  tabClicked($event) {
    this.selectedTab = $event.tab;
  }
  ionViewDidLeave() {
    // console.log('tab changed');
  }
  ionTabsDidChange() {
    // console.log('tab ionTabsDidChange');
    // Stuff to switch icon from filled to outline and vice versa
  }

  onClickTab() {

  }


  logoutAccount() {
    this.localStorage.logout();
    this.router.navigate(['/login']);
  }



  async presentAlertLogout() {
    const alert = await this.alertController.create({
      header: 'Đăng xuất khỏi tài khoản của bạn?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.logoutAccount();
            // this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    // this.roleMessage = `Dismissed with role: ${role}`;
  }

  async presentAlertContactSalesStaff() {
    this.titleContact = 'Liên hệ NVKD';
    const alert = await this.alertController.create({
      header: 'Thông báo',
      subHeader: 'Nhân viên CSKH của bạn là Trần Thị Mỹ Linh. SĐT: 0987548294.',
      message: 'Bạn có muốn gặp Trần Thị Mỹ Linh không?',
      buttons: [
        {
          text: 'Không',
          role: 'cancel',
          handler: () => {
            this.titleContact = 'Liên hệ';
            // this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Có',
          role: 'confirm',
          handler: () => {
            this.presentAlertNotification(
              'Thông báo',
              '',
              'Cảm ơn bạn đã gửi yêu cầu, Trần Thị Mỹ Linh sẽ liên hệ lại với bạn trong thời gian ngắn nhất.');
            // this.logoutAccount();
            // this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async presentAlertContactSwitchboard() {
    this.titleContact = 'Liên hệ Tổng đài';
    const alert = await this.alertController.create({
      header: 'Thông báo',
      subHeader: 'Tổng đài sẽ phụ trách các công việc lên đơn, phản ánh tình trạng kết quả muộn, ...',
      message: 'Bạn có muốn gặp tổng đài không?',
      buttons: [
        {
          text: 'Không',
          role: 'cancel',
          handler: () => {
            this.titleContact = 'Liên hệ';
          },
        },
        {
          text: 'Có',
          role: 'confirm',
          handler: () => {
            this.presentAlertNotification(
              'Thông báo',
              '',
              'Cảm ơn bạn đã gửi yêu cầu, Trần Thị Mỹ Linh sẽ liên hệ lại với bạn trong thời gian gần nhất.',);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async presentAlertContactPaymentDepartment() {
    this.titleContact = 'Liên hệ Bộ phận thanh toán';
    const alert = await this.alertController.create({
      header: 'Thông báo',
      subHeader: 'Không có gì đâu',
      message: 'Đừng liên hệ',
      buttons: [
        {
          text: 'Không',
          role: 'cancel',
          handler: () => {
            this.titleContact = 'Liên hệ';
          },
        },
        {
          text: 'Có',
          role: 'confirm',
          handler: () => {
            this.presentAlertNotification(
              'Thông báo',
              'Liên hệ bộ phận thanh toán',
              'Thôi đừng liên hệ nữa');
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async presentAlertNotification(header, subHeader, message) {
    // this.titleContact = 'Liên hệ NVKD';
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: [
        {
          text: 'Đóng',
          role: 'cancel',
          handler: () => {
            this.titleContact = 'Liên hệ';
            // this.handlerMessage = 'Alert canceled';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  // async showConfirmation() {
  //   const alert = await this.alertController.create({
  //     header: 'Xác nhận đăng xuất',
  //     message: 'Bạn có chắc chắn muốn đăng xuất?',
  //     buttons: [
  //       {
  //         text: 'Hủy',
  //         role: 'cancel',
  //       },
  //       {
  //         text: 'Đăng xuất',
  //         handler: () => {
  //           // Xử lý đăng xuất tại đây
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

  closeModalInforAcc() {
    // this.modal.dismiss(null, 'close');
  }

  confirm() {
    // this.modal.dismiss('', 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'close') {
      // this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  setOpenModalUser(isOpen) {
    this.isModalOpenUser = isOpen;

  }

  setOpenModalSales(isOpen) {
    this.isModalOpenSales = isOpen;
  }

  setOpenModalContact(isOpen) {
    this.isModalOpenContact = isOpen;
  }

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }
}
