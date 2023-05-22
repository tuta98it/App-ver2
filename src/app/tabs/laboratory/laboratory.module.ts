import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaboratoryPage } from './laboratory.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { LaboratoryPageRoutingModule } from './laboratory-routing.module';
import {AppVersion} from '@ionic-native/app-version/ngx';
import { IsEmptyPipe } from 'src/app/shared/pipe/is-empty.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LaboratoryPageRoutingModule
  ],
  providers: [AppVersion],
  declarations: [LaboratoryPage, IsEmptyPipe]
})
export class LaboratoryPageModule {}
