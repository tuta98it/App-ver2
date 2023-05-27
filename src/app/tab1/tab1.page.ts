import {Component} from '@angular/core';
import {PhotoService} from '../services/photo.service';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {
  ActionSheetController,
  AlertController,
  NavController,
  PickerController,
  Platform,
  PopoverController
} from '@ionic/angular';
import {Constant} from '../shared/constants/constant.class';
import {StorageService} from '../services/storage.service';
import {NotificationService} from '../services/notification.service';
import {MainService} from '../services/main.service';
import {environment} from '../../environments/environment';
import {BadgeService} from '../services/badge.service';
import {AppVersion} from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  now: any;
  userInfo: any;
  isPopoverOpen = false;
  constructor(public photoService: PhotoService,
              private popoverController: PopoverController,
              private router: Router,
              private platform: Platform,
              private localStorage: StorageService,
              private storage: Storage,
              public navCtrl: NavController,
              private pickerCtrl: PickerController,
              private actionSheetCtrl: ActionSheetController,
              private notificationService: NotificationService,
              private mainService: MainService,
              public badgeService: BadgeService,
              private appVersion: AppVersion,
              private alertController: AlertController
  ) {
    this.now = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillEnter() {
    this.localStorage.getSelectedUser().then((res) => {
      console.log('getSelectedStudent', res);
      this.userInfo = res;
    });
  }

  showProfile() {

  }

  logout() {
    this.localStorage.clearAll();
    this.popoverController.dismiss();
    this.router.navigate(['/']);
  }

  doRefresh($event) {

  }
}
