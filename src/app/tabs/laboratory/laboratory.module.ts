import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaboratoryPage } from './laboratory.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { LaboratoryPageRoutingModule } from './laboratory-routing.module';
import {AppVersion} from '@ionic-native/app-version/ngx';
import { IsEmptyPipe } from 'src/app/shared/pipe/is-empty.pipe';
import { SharedModule } from 'src/app/shared/modules/share.module';
import { OrderStatusPipe } from 'src/app/shared/pipe/order-status.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LaboratoryPageRoutingModule,
    SharedModule
  ],
  providers: [AppVersion],
  declarations: [LaboratoryPage, OrderStatusPipe]
})
export class LaboratoryPageModule {}
