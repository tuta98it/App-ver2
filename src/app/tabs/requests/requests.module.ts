import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestsPage } from './requests.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { RequestsPageRoutingModule } from './requests-routing.module';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { IsEmptyPipe } from 'src/app/shared/pipe/is-empty.pipe';
import { SharedModule } from 'src/app/shared/modules/share.module';
import { OrderStatusPipe } from 'src/app/shared/pipe/order-status.pipe';
import { StatusRequestPipe } from 'src/app/shared/pipe/status-request';
import { RequestTypePipe } from 'src/app/shared/pipe/request-type';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RequestsPageRoutingModule,
    SharedModule,
    CalendarModule
  ],
  providers: [AppVersion],
  declarations: [RequestsPage]
})
export class RequestsPageModule { }
