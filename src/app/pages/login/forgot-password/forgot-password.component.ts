import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { Constant } from 'src/app/shared/constants/constant.class';
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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
  ) {
    this.route.queryParams.subscribe(params => {
      this.account = params;
      console.log('this.account : ', this.account);
    });
  }

  verifyUserPhoneNumber() {
    if (this.countVerifiNoPhone < 5) {
      this.countVerifiNoPhone++;
      this.notificationService.showMessage(Constant.WARNING, `Bạn còn ${this.maxVerifiNoPhone - this.countVerifiNoPhone} lần xác mình!` );
    } else if(this.countVerifiNoPhone === 5){
      this.notificationService.showMessage(Constant.WARNING, `Tài khoản của bạn đã bị khoá, vui lòng liên hệ với quản trị viên!` );
    }

  }

}
