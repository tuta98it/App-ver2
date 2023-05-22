import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations : [ConfirmDialogComponent],
  imports: [CommonModule, IonicModule.forRoot(), FormsModule,],
  exports: [ConfirmDialogComponent],
})

export class ConfirmDialogModule {}
