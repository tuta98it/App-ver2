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

  @ViewChild('barChart', { static: false }) barChart: ElementRef;
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

  selectedTab = 'tab1';
  tabHomeClickEvent: any;
  userInfo: any;
  isModalOpenUser = false;
  isModalOpenSales = false;

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
    console.log('this.barChart: ', this.barChart);
    console.log('this.tabs: ', this.tabs);
    this.createBarChart();
  }

  createBarChart() {
    new Chart(this.barChart.nativeElement.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
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
    this.localStorage.logout();
    this.router.navigate(['/login']);
  }



  async presentAlert() {
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


  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }
}
