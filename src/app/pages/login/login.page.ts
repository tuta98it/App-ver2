import {Component, OnInit} from '@angular/core';
import {MainService} from '../../services/main.service';
import {Constant} from '../../shared/constants/constant.class';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {LoadingController, NavController, Platform, ToastController} from '@ionic/angular';
import {StorageService} from '../../services/storage.service';
import {NotificationService} from '../../services/notification.service';

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
    public navCtrl: NavController
  ) {
  }
  ngOnInit() {
    this.localStorage.getSelectedUser().then((res) => {
      if (res) {
        this.navCtrl.navigateRoot(['/main/tab1']);
      }
    });
    this.localStorage.get('deviceInfo').then(res => {
      this.deviceInfo = res;
      console.log(this.deviceInfo);
    });
  }
  showAlertPassword(){
    this.notificationService.showMessage('warning', 'Vui lòng liên hệ quản trị viên để cấp lại mật khẩu');
  }
  async doLogin() {
    if (!this.username)
    {
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
      this.storage.set(Constant.STORAGE_USERINFO, res).then((res3) => {
        loading.dismiss();
        // this.router.navigate(['/main']);
        this.navCtrl.navigateRoot(['/main/tab1']);
      });
    }, error => {
      console.log(error);
      if (error.error.message){
        this.notificationService.showMessage('danger', 'Sai tên đăng nhập hoặc mật khẩu');
      }
      else {
        this.notificationService.showMessage('danger', `Có lỗi khi đăng nhập: ${error.error.message}`);
      }
      loading.dismiss();
    });
  }
}
