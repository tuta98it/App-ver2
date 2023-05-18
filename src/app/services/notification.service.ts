import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  toast: any;
  constructor(public toastController: ToastController) {
    this.init();
  }
  async init() {
  }
  async showMessage(color, message){
    this.toast = await this.toastController.create({
      color,
      duration: 2000,
      message: 'Paired successfully',
      // @ts-ignore
      showCloseButton: true,
    });
    this.toast.color = color;
    this.toast.message = message;
    // @ts-ignore
    await this.toast.present();
  }
}
