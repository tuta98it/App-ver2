import { Component } from '@angular/core';
import {BasePageComponent} from '../pages/base-page/base-page.component';
import {NavController} from '@ionic/angular';
import {MainService} from '../services/main.service';
import {Router} from '@angular/router';
import {StorageService} from '../services/storage.service';
import {CallNumber} from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page extends BasePageComponent {

}
