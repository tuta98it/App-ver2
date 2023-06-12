import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AlertController, IonModal, IonTabs, ModalController, NavController } from '@ionic/angular';
import { BadgeService } from '../services/badge.service';
import { StorageService } from '../services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core/components';
import { IsEmptyPipe } from '../shared/pipe/is-empty.pipe';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements AfterViewInit {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  @ViewChild('barCanvas1', { static: false }) barCanvas1: ElementRef;
  @ViewChild('barCanvas2', { static: false }) barCanvas2: ElementRef;
  @ViewChild('barCanvas3', { static: false }) barCanvas3: ElementRef;
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
  barChart: any;
  contentAbout: any;
  // accCurrent: any = {};
  userInfo: any;
  titleApp = 'Xét nghiệm';
  titleContact = 'Liên hệ';
  selectedTab = 'tab1';
  tabHomeClickEvent: any;
  isModalOpenUser = false;
  isModalOpenSales = false;
  isModalOpenContact = false;
  isModalOpenContentAbout = false;

  constructor(
    public navCtrl: NavController,
    public badgeService: BadgeService,
    public localStorage: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private alertController: AlertController,
    private changeDetectorRef: ChangeDetectorRef,
    private renderer: Renderer2,
    private httpClient: HttpClient
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
    this.localStorage.getSelectedUser().then((res: any) => {
      // console.log('getSelectedUser', res);
      this.userInfo = res;
    });

    // this.loadContentAbout();

    // this.loadWebsiteContent();
  }

  loadContentAbout() {
    this.httpClient
      .get('https://invivolab.vn/gioi-thieu/', { responseType: 'text' })
      .subscribe((response) => {
        this.contentAbout = response;
      });
  }

  async loadWebsiteContent() {
    try {
      const response = await axios.get('https://invivolab.vn/gioi-thieu/');
      console.log('response : ', response);
      const websiteContent = response.data;

      // Xử lý nội dung trang web ở đây
      console.log('websiteContent: ', websiteContent);
    } catch (error) {
      // Xử lý lỗi khi tải nội dung trang web
      console.error(error);
    }
  }

  ngAfterViewInit() {
    // this.barChartMethod();
  }

  setOpenModalSales(isOpen: any) {
    // this.changeDetectorRef.detectChanges();
    this.isModalOpenSales = isOpen;
    // this.barChartMethod();
    setTimeout(() => this.barChartMethod(), 200);
  }

  barChartMethod() {
    console.log(this.barCanvas1);
    this.barChart = new Chart(this.barCanvas1.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Covid', 'Sốt xuất huyết', 'Ung thư', 'Sốt virus', 'Covid', 'NCP', 'Ung thư', 'Sốt virus', 'Covid', 'NCP'],
        datasets: [
          {
            label: 'Doanh số tổng',
            data: ['467', '576', '572', '79', '92',
              '574', '53', '576', '92', '504'],
            backgroundColor: 'blue',
            minBarLength: 2,
          },
          {
            label: 'Chiết khấu',
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '341', '92', '374'],
            backgroundColor: 'limegreen'
          },
          {
            label: 'Chưa thanh toán',
            data: ['542', '542', '536', '327', '17',
              '50', '538', '541', '92', '574'],
            backgroundColor: 'cyan'
          }]
      },
      options: {
        responsive: false,
        layout: {
          padding: {
            bottom: 42
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              display: false
            },
            gridLines: {
              // drawOnChartArea: false,
              offsetGridLines: true
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              // drawOnChartArea: false
            }
          }]
        },
        maintainAspectRatio: false
      }
    });

    this.barChart = new Chart(this.barCanvas3.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Covid', 'Sốt xuất huyết', 'Ung thư', 'Sốt virus', 'Covid', 'NCP', 'Ung thư', 'Sốt virus', 'Covid', 'NCP'],
        datasets: [
          {
            label: 'Doanh số tổng',
            data: ['467', '576', '572', '79', '92',
              '574', '53', '576', '92', '504'],
            backgroundColor: 'blue',
            minBarLength: 2,
          },
          {
            label: 'Chiết khấu',
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '341', '92', '374'],
            backgroundColor: 'limegreen'
          },
          {
            label: 'Chưa thanh toán',
            data: ['542', '542', '536', '327', '17',
              '50', '538', '541', '92', '574'],
            backgroundColor: 'cyan'
          }]
      },
      options: {
        responsive: false,
        scales: {
          xAxes: [{
            ticks: {
              display: true
            },
            gridLines: {
              // drawOnChartArea: false,
              offsetGridLines: true
            }
          }],
          yAxes: [{
            ticks: {
              display: false,
            },
            gridLines: {
              // drawOnChartArea: false
            }
          }]
        },
        maintainAspectRatio: false
      }
    });

    this.barChart = new Chart(this.barCanvas2.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Tuyến giáp', 'Sốt xuất huyết', 'Ung thư', 'Sốt virus', 'Covid', 'NCP'],
        datasets: [
          {
            label: 'Doanh số tổng',
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: 'Chiết khấu',
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          },
          {
            label: 'Chưa thanh toán',
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'cyan'
          }]
      },
      options: {
        responsive: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        maintainAspectRatio: false
      }
    });
    console.log(this.barChart);
    this.renderer.setProperty(this.barChart, 'width', 500);
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
    this.localStorage.clearAll();
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

  setOpenModalUser(isOpen: any) {
    this.isModalOpenUser = isOpen;
  }

  setOpenModalContact(isOpen: any) {
    this.isModalOpenContact = isOpen;
    if (isOpen) {
      this.titleContact = 'Liên hệ';
    }
  }

  setOpenModalContentAbout(isOpen: any) {
    this.isModalOpenContentAbout = isOpen;
    if (open) {
      this.titleContact = 'About';
    }
  }

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }
}
