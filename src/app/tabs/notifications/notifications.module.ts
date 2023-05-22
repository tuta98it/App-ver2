import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { NotificationsPage } from './notifications.page';

@NgModule({
  declarations: [NotificationsPage],
  imports: [IonicModule.forRoot(),
     RouterModule.forChild([{ path: '', component: NotificationsPage }]),
     CommonModule
    ],
  exports: [NotificationsPage]
})
export class NotificationsModule { }
