import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { AlertController } from '@ionic/angular';
import { IsEmptyPipe } from '../shared/pipe/is-empty.pipe';

@NgModule({
  imports: [
    IonicModule.forRoot({ mode: 'ios' }),
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
  ],
  declarations: [TabsPage, IsEmptyPipe],
})
export class TabsPageModule {}
