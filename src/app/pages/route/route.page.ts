import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services/main.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Storage} from "@ionic/storage";
import {LoadingController, NavController, Platform, ToastController} from "@ionic/angular";
import {StorageService} from "../../services/storage.service";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-route',
  templateUrl: './route.page.html',
  styleUrls: ['./route.page.scss'],
})
export class RoutePage implements OnInit {
  deviceInfo: any;
  constructor(
    private mainService: MainService,
    private http: HttpClient,
    private router: Router,
    private storage: Storage,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private localStorage: StorageService,
    protected platform: Platform,
    public navCtrl: NavController
  ) {

  }
  ngOnInit() {
    this.localStorage.getSelectedUser().then((res) => {
      if (res) {
        this.navCtrl.navigateRoot(['/main/tab1']);
      }
      else{
        this.navCtrl.navigateRoot(['/login']);
      }
    });
  }

}
