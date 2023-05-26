import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Constant } from '../../shared/constants/constant.class';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { NotificationService } from '../../services/notification.service';
import { GeneralService } from 'src/app/services/general-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;
  deviceInfo: any;

  constructor(
    private mainService: MainService,
    private http: HttpClient,
    private router: Router,
    private storage: Storage,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private localStorage: StorageService,
    private notificationService: NotificationService,
    protected platform: Platform,
    public navCtrl: NavController,
    private generalService: GeneralService,
  ) {
  }

  async ngOnInit() {
    this.localStorage.getSelectedUser().then((res) => {
      if (res) {
        this.navCtrl.navigateRoot(['/main/laboratory']);
      }
    });
    this.localStorage.get('deviceInfo').then(res => {
      this.deviceInfo = res;
      console.log(this.deviceInfo);
    });

    // Set INIT_DATA for local-storage
    await this.setInitData();
  }

  setInitData() {
    this.generalService.getInitialData().subscribe((resData: any) => {
      if (resData !== null) {
        localStorage.setItem(Constant.INIT_DATA, JSON.stringify(resData));
      }
    }, error => {
      console.log('error Set INIT_DATA for local-storage');
    });
  }

  showAlertPassword() {
    this.notificationService.showMessage('warning', 'Vui lòng liên hệ quản trị viên để cấp lại mật khẩu');
  }
  async doLogin() {
    if (!this.username) {
      this.notificationService.showMessage('danger', 'Tên đăng nhập không được để trống');
      return;
    }
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Đang tiến hành đăng nhập...',
    });

    await loading.present();
    /*this.localStorage.get('fcmToken').then(resToken => {

    });*/
    this.deviceInfo = {
      deviceId: this.deviceInfo.uuid,
      deviceName: this.platform.is('ios') ? 'IOS' : this.deviceInfo.model
    };
    this.mainService.login(this.username, this.password).subscribe(res => {
      if (+res.result === 0) {
        loading.dismiss();
        this.notificationService.showMessage('danger', 'Sai tên đăng nhập hoặc mật khẩu');
        return;
      }
      console.log('Constant.STORAGE_USERINFO, = ', Constant.STORAGE_USERINFO, res);
      this.storage.set(Constant.STORAGE_USERINFO, res).then((res3) => {
        loading.dismiss();
        // this.router.navigate(['/main']);
        localStorage.setItem(Constant.TOKEN, res3.token);
        console.log('res3: ', res3);
        this.navCtrl.navigateRoot(['/main/laboratory']);
      });


    }, error => {
      if (error.error.message) {
        this.notificationService.showMessage('danger', 'Sai tên đăng nhập hoặc mật khẩu');
      }
      else {
        this.notificationService.showMessage('danger', `Có lỗi khi đăng nhập: ${error.error.message}`);
      }
      loading.dismiss();
    });
  }
}
