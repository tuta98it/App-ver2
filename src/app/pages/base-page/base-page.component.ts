import {Component, OnInit, Sanitizer} from '@angular/core';
import {Router} from '@angular/router';
import {NavController, Platform, PopoverController} from '@ionic/angular';
import {StorageService} from '../../services/storage.service';
import {MainService} from '../../services/main.service';
import {DomSanitizer} from '@angular/platform-browser';
import {PhotoService} from '../../services/photo.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss'],
})
export class BasePageComponent implements OnInit {
  student: any;
  constructor(
              private popoverController: PopoverController,
              router: Router,
              public mainService: MainService,
              private platform: Platform,
              public localStorage: StorageService,
              public navCtrl: NavController,
              public sanitizer: DomSanitizer,
              public  photoService: PhotoService,
  ) { }
  ngOnInit() {
   this.localStorage.getSelectedUser().then((res) => {
      this.student = res;
    });
  }
  async getSelectedStudent(){
    return this.localStorage.getSelectedUser();
  }
}
