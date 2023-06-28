import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// import { LoginPageRoutingModule } from './login-routing.module';

// import { LoginPage } from './login.page';
import { ForgotPasswordComponent } from './forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { SharedModule } from 'src/app/shared/modules/share.module';
import { ForgotPasswordComponentRoutingModule } from './forgot-password-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordComponentRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [AuthService],
  declarations: [ForgotPasswordComponent]
})

export class ForgotPasswordComponentModule {
}
