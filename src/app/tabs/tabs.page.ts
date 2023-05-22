import { Component, ViewChild } from '@angular/core';
import { AlertController, IonModal, IonTabs, ModalController, NavController } from '@ionic/angular';
import { BadgeService } from '../services/badge.service';
import { StorageService } from '../services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core/components';
import { IsEmptyPipe } from '../shared/pipe/is-empty.pipe';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  @ViewChild(IonModal) modal!: IonModal;
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

  selectedTab = 'tab1';
  tabHomeClickEvent: any;
  userInfo: any;

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
    this.router.navigate(['/login']);
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
    this.modal.dismiss(null, 'close');
  }

  confirm() {
    this.modal.dismiss('', 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'close') {
      // this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }
}
