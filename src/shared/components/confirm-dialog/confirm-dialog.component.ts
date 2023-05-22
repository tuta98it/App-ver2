import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ConfirmDialogModule} from './confirm-dialog.module';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})


export class ConfirmDialogComponent{
  @Input() title: string;
  @Input() message: string;


  constructor(private modalController: ModalController) {
    this.title = 'Tiêu đề';
    this.message = 'Nội dung'
  }


  dismiss(value: boolean) {
    this.modalController.dismiss(value);
  }
}
