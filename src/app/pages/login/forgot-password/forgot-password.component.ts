import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Constant } from 'src/app/shared/constants/constant.class';
import { SHA256 } from 'crypto-js';
import { AlertController } from '@ionic/angular';
import { OtpService } from 'src/app/shared/services/otp.service';
import { StringsService } from 'src/app/shared/services/strings.service';
import { GeneralService } from 'src/app/services/general-service';
import { COLOR_REGEX } from 'cordova-res/dist/resources';
// import * as nodemailer from 'nodemailer';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  account: any;
  constant = Constant;
  maxVerifiNoPhone = this.constant.MAX_VERIFI_NUMBER_PHONE;
  countVerifiNoPhone = 0;
  inputNoPhone: any;
  valueAddressSendOTPCode = 'email';
  passwords = {
    newPassword: '',
    confirmNewPassword: ''
  };
  randomOTP: any;
  inputOTPCode: any;
  inputEmail: any;
  inputNewPassword: any;
  inputConfirmNewPassword: any;
  isOpenModalConfirmAddressSendOTP: boolean;
  isOpenModalResetNewPassword: boolean;
  isOpenModalInputOTPCode: boolean;

  validInputOTPCode = false;
  validInputEmail = false;
  validInputNewPassword = false;
  validInputConfirmNewPassword = false;

  textErrorInputOTPCode = 'Bạn nhập sai mã OTP, vui lòng nhập lại';
  textErrorInputEmail = 'Địa chị Email không hợp lệ, vui lòng nhập lại';
  textErrorInputNewPassword = 'Mật khẩu mới không hợp lệ, vui lòng nhập lại';
  textErrorInputConfirmNewPassword = 'Mật khẩu mới không hợp lệ, vui lòng nhập lại';
  constructor(
    private router: Router,
    private generalService: GeneralService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private alertController: AlertController,
    private otpService: OtpService,
    private stringsService: StringsService,
  ) {
    this.route.queryParams.subscribe(params => {
      this.account = params;
      console.log('this.account : ', this.account);
    });
  }


  setIsOpenModalConfirmAddressSendOTP(isOpen: boolean) {
    this.isOpenModalConfirmAddressSendOTP = isOpen;
  }


  setIsOpenModalResetNewPassword(isOpen: boolean) {
    this.isOpenModalResetNewPassword = isOpen;
  }

  setIsOpenModalInputOTPCode(isOpen: boolean) {
    this.isOpenModalInputOTPCode = isOpen;
  }


  verifyUserPhoneNumber() {
    this.countVerifiNoPhone++;
    if (this.countVerifiNoPhone <= 5) {
      if (this.stringsService.compareTwoStrings(this.inputNoPhone, this.account.phoneNo)) {
        this.notificationService.showMessage(Constant.SUCCESS, `Bạn đăng nhập chính xác số điện thoại`);

        //Mở modal confirm password
        this.setIsOpenModalConfirmAddressSendOTP(true);

      } else {
        // eslint-disable-next-line max-len

        if (this.countVerifiNoPhone < 5) {
          // eslint-disable-next-line max-len
          this.notificationService.showMessage(Constant.WARNING, `Số điện thoại không chính xác. Bạn còn ${this.maxVerifiNoPhone - this.countVerifiNoPhone} lần xác minh!`);
        } else {
          // eslint-disable-next-line max-len
          this.notificationService.showMessage(Constant.WARNING, `Số điện thoại không chính xác. Bạn đã hết lượt xác minh. Vui lòng liên hệ với quản trị viên!`);
          this.presentAlertLockAccount();
        }
      }
    } else {
      this.presentAlertLockAccount();
      this.notificationService.showMessage(Constant.WARNING, `Tài khoản của bạn đã bị khoá, vui lòng liên hệ với quản trị viên!`);
    }

  }


  async presentAlertLockAccount() {
    const alert = await this.alertController.create({
      header: 'Thông báo',
      subHeader: 'Bạn đã nhập sai SĐT quá nhiều!',
      message: 'Xin vui lòng liên hệ quản trị viện để lấy lại mật khẩu. Quay lại trang đăng nhập',
      buttons: [
        {
          text: 'Đồng ý',
          role: 'confirm',
          handler: () => {
            this.notificationService.showMessage(Constant.WARNING, `Quay lại trang đăng nhập`);
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertRestNewPasswordSussces() {
    const alert = await this.alertController.create({
      header: 'Thông báo',
      subHeader: 'Bạn đổi mật khẩu thành công!',
      message: 'Quay lại trang đăng nhập.',
      buttons: [
        {
          text: 'Đồng ý',
          role: 'confirm',
          handler: () => {
            this.notificationService.showMessage(Constant.WARNING, `Quay lại trang đăng nhập`);
            this.setIsOpenModalConfirmAddressSendOTP(false);
            this.setIsOpenModalResetNewPassword(false);
            this.reloadPage();
            // location.reload();
          },
        },
      ],
    });

    await alert.present();
  }

  reloadPage() {
    this.router.navigate(['/login']);
    setTimeout(() => window.location.reload(), 1);
  }

  sendCodeOT() {
    this.randomOTP = this.otpService.generateOTP(6);

    if (this.compareStrings(this.valueAddressSendOTPCode, 'email')) {
      // // Gửi mã OTP đến địa chỉ Email người dùng
      // console.log('Gửi mã đến địa chỉ Email: ', this.account.email, 'Mã OTP: ', this.randomOTP);

      // // const emailTo = 'tuta@pmr.vn';
      // const emailTo = this.account.email;
      // // const emailTo = 'thuylinh.lt97@gmail.com';
      // // const emailTo = 'tutran1998.tt@gmail.com';
      // const infoPayload = {
      //   toEmail: emailTo,
      //   subject: 'Mã xác thực OTP từ phòng xét nghiệm INVIVOLAB',
      //   content: `Mã OTP: ${this.randomOTP}`
      // };
      // this.generalService.sendOTP2Email(infoPayload).subscribe((res) => {
      //   if (res.isValid) {
      //     this.notificationService.showMessage(Constant.SUCCESS, `Gửi mã OTP đến địa chỉ Email: ${this.account.email}`);
      //   } else {
      //     this.notificationService.showMessage(Constant.DANGER, `Đã có lỗi khi gửi mã OTP đến địa chị ${this.account.email}`);
      //   }
      // });
      // this.setIsOpenModalInputOTPCode(true);

      this.generalService.sendCodeOTPByGmail(this.account.email).subscribe(
        (res) => {
          if (res.isValid) {
            this.notificationService.showMessage(Constant.SUCCESS, res.jsonData);
            this.setIsOpenModalInputOTPCode(true);
          } else {
            this.notificationService.showMessage(Constant.DANGER, res.errors[0].errorMessage);
          }
        }
      );

    } else if (this.compareStrings(this.valueAddressSendOTPCode, 'phone')) {
      // Gửi mã OTP đến số điện thoại người dùng
      console.log('Gửi mã đến số điện thoại: ', this.account.phoneNo, 'Mã OTP: ', this.randomOTP);

      this.notificationService.showMessage(Constant.SUCCESS, `Gửi mã OTP đến số điện thoại: ${this.account.phoneNo}`);

      // this.sendOTPByEmail(this.account.email, this.randomOTP);
      this.setIsOpenModalInputOTPCode(true);
    } else {
      this.notificationService.showMessage(Constant.DANGER, `Đã có lỗi xảy ra!!!`);
    }
  }


  // sendOTPByEmail(toEmail: string, otp: string) {

  //   const emailFrom = 'tuta@pmr.vn';
  //   const passwordFrom = '12345678@';


  //   const toEmailTest = 'tutran1998.tt@gmail.com';

  //   // Tạo transporter cho việc gửi email
  //   const transporter = nodemailer.createTransport({
  //     // service: 'Gmail',
  //     host: 'smtp.postamail.vn', // SMTP host của PMR // mail.pmr.vn //smtp.pmr.vn
  //     port: 587, // Cổng SMTP của PMR hay 465
  //     secure: false, // Sử dụng kết nối không an toàn
  //     auth: {
  //       user: emailFrom, // Email của bạn
  //       pass: passwordFrom // Mật khẩu email của bạn
  //     }
  //   });

  //   // Cấu hình nội dung email
  //   const mailOptions = {
  //     from: emailFrom, // Email nguồn
  //     to: toEmailTest, // Email đích
  //     subject: 'Mã OTP', // Tiêu đề email
  //     text: `Mã OTP của bạn là: ${otp}` // Nội dung email
  //   };

  //   // Gửi email
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.log('Lỗi khi gửi email: ', error);
  //     } else {
  //       console.log('Email đã được gửi thành công: ', info.response);
  //     }
  //   });
  // }


  // Xác nhân mật khẩu mới
  confirmNewPassword() {

    if (this.isEmpty(this.passwords.newPassword) || this.isEmpty(this.passwords.confirmNewPassword)) {
      this.notificationService.showMessage(Constant.DANGER, 'Mật khẩu không được để trống');
    } else {
      if (this.compareStrings(this.passwords.newPassword, this.passwords.confirmNewPassword)) {
        // this.notificationService.showMessage(Constant.WARNING, 'Bật alert');
        this.presentAlertRestNewPasswordSussces();

      } else {
        this.notificationService.showMessage(Constant.DANGER, 'Mật khẩu không trùng khớp, vui lòng nhập lại');
      }
    }
  }

  // setTimeOutOnKeyUpInputOTPCode(time: any) {
  //   setTimeout(() => this.onKeyUpInputOTPCode(), time);

  // }

  onKeyUpInputOTPCode(event: any) {
    this.inputOTPCode = event.target.value;
    this.validInputOTPCode = this.isEmpty(this.inputOTPCode);
    this.textErrorInputOTPCode = 'Mã OTP không được để trống!';
  }

  onKeyUpInputEmail(event: any) {
    this.inputEmail = event.target.value;
    this.validInputEmail = this.isEmpty(this.inputEmail);
    this.textErrorInputEmail = 'Đ/C Email không được để trống!';
  }


  onKeyUpInputNewPassword(event: any) {
    this.inputNewPassword = event.target.value;
    this.validInputNewPassword = this.isEmpty(this.inputNewPassword);
    this.textErrorInputNewPassword = 'Mật khẩu không được để trống!';
  }

  onKeyUpInputConfirmNewPassword(event: any) {
    this.inputConfirmNewPassword = event.target.value;
    this.validInputConfirmNewPassword = this.isEmpty(this.inputConfirmNewPassword);
    this.textErrorInputConfirmNewPassword = 'Mật khẩu không được để trống!';
  }

  confirmChangeNewPassword() {
    if (this.isEmpty(this.inputOTPCode)
      || this.isEmpty(this.inputEmail)
      || this.isEmpty(this.inputNewPassword)
      || this.isEmpty(this.inputConfirmNewPassword)) {

      if (this.isEmpty(this.inputOTPCode)) {
        this.validInputOTPCode = true;
        this.textErrorInputOTPCode = 'Mã OTP không được để trống!';
      }

      if (this.isEmpty(this.inputEmail)) {
        this.validInputEmail = true;
        this.textErrorInputEmail = 'ĐC không được để trống!';
      }

      if (this.isEmpty(this.inputNewPassword)) {
        this.validInputNewPassword = true;
        this.textErrorInputNewPassword = 'Mật khẩu không được để trống!';
      }

      if (this.isEmpty(this.inputConfirmNewPassword)) {
        this.validInputConfirmNewPassword = true;
        this.textErrorInputConfirmNewPassword = 'Mật khấu không được để trống!';
      }
    } else {
      const payload = {
        code: this.inputOTPCode,
        email: this.inputEmail,
        password: this.passwords.newPassword,
        repassword: this.passwords.confirmNewPassword,
      };

      this.generalService.forgotPassword(payload).subscribe((res) => {
        if (res.isValid) {
          this.notificationService.showMessage(Constant.SUCCESS, res.jsonData);
          this.presentAlertRestNewPasswordSussces();
        } else {
          this.notificationService.showMessage(Constant.DANGER, res.errors[0].errorMessage);
        }
      });
      // if (this.compareStrings(this.inputOTPCode, this.randomOTP)) {
      //   this.validInputOTPCode = false;
      //   this.setIsOpenModalResetNewPassword(true);
      // } else {
      //   this.validInputOTPCode = true;
      //   this.textErrorInputOTPCode = 'Bạn nhập sai mã OTP, vui lòng nhập lại';
      // }
    }
  }

  resendOTPCode() {
    this.sendCodeOT();
  }

  private compareStrings(s1: string, s2: string): boolean {
    const hash1 = SHA256(s1).toString();
    const hash2 = SHA256(s2).toString();

    return hash1 === hash2;
  }

  private isEmpty(value: any): boolean {
    if (value === null || value === undefined) {
      return true;
    }

    if (typeof value === 'string' && value.trim() === '') {
      return true;
    }

    if (Array.isArray(value) && value.length === 0) {
      return true;
    }

    if (typeof value === 'object' && Object.keys(value).length === 0) {
      return true;
    }

    return false;
  }


}
