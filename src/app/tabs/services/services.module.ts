import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ServicesPage } from './services.page';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { SharedModule } from 'src/app/shared/modules/share.module';

@NgModule({
  declarations: [ServicesPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forChild([{ path: '', component: ServicesPage }]),
    SharedModule,
  ],
  providers : [CurrencyPipe],
  exports: [ServicesPage]
})
export class ServicesModule { }
