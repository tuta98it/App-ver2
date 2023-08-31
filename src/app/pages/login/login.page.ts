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
import { AuthService } from 'src/app/services/auth.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { App } from '@capacitor/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  forgotPasswordComponent = ForgotPasswordComponent;
  username: any;
  password: any;
  deviceInfo: any;
  userInfo: any;
  allUsers: any[] = [];
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
    private authService: AuthService,
  ) {
  }

  async ngOnInit() {

    this.localStorage.get('deviceInfo').then(res => {
      this.deviceInfo = res;
      // console.log(this.deviceInfo);
    });
    
    // Xác thực người dùng
    this.authService.checkToken().subscribe((res: any) => {
      // console.log('this.authService.checkToken() res : ', res);
      const objRes = res.ret[0];
      const codeRes = objRes.code;
      if (res.ret) {
        if (codeRes === 0) {
          // Success
          this.router.navigate(['/main/requests']);
                  } else if (codeRes === 401) {
          // Code 401: Không xác thực được người dùng;
          this.localStorage.removeInfoUserStorage();
          localStorage.removeItem(Constant.TOKEN);
          this.router.navigate(['/login']);
          // this.notificationService.showMessage(Constant.DANGER, `${codeRes}: Hệ thống không xác thực được người dùng`);
        } else if (codeRes === 403) {
          // Code 403: Người dùng không có quyền truy cập vào hệ thống.
          this.notificationService.showMessage(Constant.DANGER, `${codeRes}: Người dùng không có quyền truy cập`);
          this.localStorage.removeInfoUserStorage();
          localStorage.removeItem(Constant.TOKEN);
          this.router.navigate(['/login']);
        } else {
          this.notificationService.showMessage(Constant.DANGER, `${codeRes}: Lỗi hệ thống, vui lòng liên hệ quản trị viên`);
        }
      } else {
        this.notificationService.showMessage(Constant.DANGER, 'Lỗi hệ thống, vui lòng liên hệ quản trị viên');
      }
    });

    // Lấy toàn bộ dữ liệu acount người dùng
    this.generalService.getAllUser().subscribe((res: any) => {
      if (res !== null) {
        this.allUsers = res;
      }
    });
  }


  showAlertPassword() {
    this.notificationService.showMessage(Constant.WARNING, 'Vui lòng liên hệ quản trị viên để cấp lại mật khẩu');
  }

  async doLogin() {
    if (!this.username) {
      this.notificationService.showMessage(Constant.DANGER, 'Tên đăng nhập không được để trống');
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
    this.mainService.login(this.username, this.password).subscribe((res: any) => {
      if (+res.result === 0) {
        loading.dismiss();
        this.notificationService.showMessage(Constant.DANGER, 'Sai tên đăng nhập hoặc mật khẩu');
        return;
      }
      console.log('Constant.STORAGE_USERINFO, = ', Constant.STORAGE_USERINFO, res);
      this.storage.set(Constant.STORAGE_USERINFO, res).then((res3) => {
        loading.dismiss();
        // this.router.navigate(['/main']);
        localStorage.setItem(Constant.TOKEN, res3.token);
        // localStorage.setItem(Constant.USER_INFO, res3);
        this.navCtrl.navigateRoot(['/main/requests']);
      });


    }, (error: any) => {
      // console.log('error : ', error);
      if (error.error.message) {
        this.notificationService.showMessage(Constant.DANGER, 'Sai tên đăng nhập hoặc mật khẩu');
      }
      else {
        this.notificationService.showMessage(Constant.DANGER, `Có lỗi khi đăng nhập: ${error.error.message}`);
      }
      loading.dismiss();
    });
  }

  navigateForgotPassword() {
    if (this.username) {
      // Check sự tồn tại của username trên hệ thống
      // console.log('this.username : ', this.username);
      // console.log('this.allUsers. : ', this.allUsers);
      const foundObject = this.allUsers.find((objUser: any) =>
        objUser.username === this.username
      );

      // console.log('foundObject. : ', foundObject);


      if (foundObject) {
        this.router.navigate(['/forgot-password'], { queryParams: foundObject });
      } else {
        this.notificationService.showMessage(Constant.WARNING, 'Tên người dùng không tồn tại, vui lòng kiểm tra lại!');
      }
    } else {
      this.notificationService.showMessage(Constant.WARNING, 'Cần điền tên đăng nhập để tiến hành thiết lập lại mật khẩu!');
    }
  }
}
