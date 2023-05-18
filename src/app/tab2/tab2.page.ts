import {Component} from '@angular/core';
import {PhotoService} from '../services/photo.service';
import {NavController, NavParams, Platform, PopoverController} from '@ionic/angular';
import {Router} from '@angular/router';
import {StorageService} from '../services/storage.service';
import {Storage} from '@ionic/storage';
import {Constant} from '../shared/constants/constant.class';
import {MainService} from '../services/main.service';
import {BasePageComponent} from '../pages/base-page/base-page.component';
import {BadgeService} from '../services/badge.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page extends BasePageComponent {

}
