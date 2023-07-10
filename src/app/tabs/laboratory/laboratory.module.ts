import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaboratoryPage } from './laboratory.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { LaboratoryPageRoutingModule } from './laboratory-routing.module';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { SharedModule } from 'src/app/shared/modules/share.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LaboratoryPageRoutingModule,
    SharedModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [AppVersion],
  declarations: [LaboratoryPage]
})
export class LaboratoryPageModule { }
