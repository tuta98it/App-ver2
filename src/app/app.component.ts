import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Platform } from '@ionic/angular';
import { ActionPerformed, PushNotifications, PushNotificationSchema, Token, } from '@capacitor/push-notifications';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';
import { NotificationService } from './services/notification.service';
import { Device } from '@capacitor/device';
/*import {Badge} from '@awesome-cordova-plugins/badge/ngx';*/
// import {StatusBar, Style} from '@capacitor/status-bar';
import { Constant } from './shared/constants/constant.class';
import { App } from '@capacitor/app';

const activeTime = {
  startTime: Date.now(),
  endTime: Date.now(),
};

App.addListener('appStateChange', ({ isActive }) => {
  console.log('App state changed. Is active? root', isActive);
  if(isActive){
    activeTime.startTime = Date.now();
  } else {
    activeTime.endTime = Date.now();
    console.log('activeTime.startTime : ', activeTime.startTime , 'activeTime.endTime: ', activeTime.endTime);
  }
});

App.addListener('appUrlOpen', data => {
  console.log('App opened with URL:', data);
});

App.addListener('appRestoredResult', data => {
  console.log('Restored state:', data);
});

const checkAppLaunchUrl = async () => {
  const { url } = await App.getLaunchUrl();

  console.log('App opened with URL: ' + url);
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage,
    private platform: Platform,
    private router: Router,
    private notificationService: NotificationService,
    private localStorage: StorageService,
    /*private badge: Badge*/
  ) {
  }

  async ngOnInit() {

    // App.addListener('appStateChange', ({ isActive }) => {
    //   console.log('App state changed. Is active? local', isActive);
    // });


    // try {
    //   StatusBar.setStyle({style: Style.Dark});
    // } catch (e) {

    // }
    const info = await Device.getInfo();
    const deviceId = await Device.getId();
    // console.log(info);
    const deviceInfo = {
      name: info.name ? info.name : 'LA',
      platform: info.platform,
      operatingSystem: info.operatingSystem,
      model: info.model,
      uuid: deviceId.uuid
    }
    this.localStorage.set('deviceInfo', deviceInfo).then(res => {
    });
    await this.storage.create();
    if (this.platform.is('ios') || this.platform.is('android')) {

      const platforms = this.platform.platforms().join(',');
      //     // If using a custom driver:
      // await this.storage.defineDriver(MyCustomDriver)
      // Request permission to use push notifications
      // iOS will prompt user and return if they granted permission or not
      // Android will just grant without prompting
      PushNotifications.requestPermissions().then(result => {
        if (result.receive === 'granted') {
          // Register with Apple / Google to receive push via APNS/FCM
          // console.log('granted', this.platform.platforms());
          PushNotifications.register().then(en => {
            // console.log('PushNotifications.register()');
          });
        } else {
          // Show some error
        }
      });

      PushNotifications.addListener('registration', (token: Token) => {
        /*console.log('token', token.value);
        alert('Push registration success, token: ' + token.value);
        console.log('mSchool token:', token.value);*/
        this.localStorage.set('fcmToken', token.value).then(res => {
          // alert('saved token success: ' + token.value);
          // console.log('saved token success');
        });
      });

      PushNotifications.addListener('registrationError', (error: any) => {
        // console.log('Error on registration: ' + JSON.stringify(error));
      });
      PushNotifications.addListener(
        'pushNotificationReceived',
        (notification: PushNotificationSchema) => {
          // alert('Push received: ' + JSON.stringify(notification));
        },
      );

      PushNotifications.addListener(
        'pushNotificationActionPerformed',
        (notification: ActionPerformed) => {
          //alert('Push action performed: ' + JSON.stringify(notification)); //JSON.stringify(notification));
          // console.log('pushNotificationActionPerformed', JSON.stringify(notification));
          // console.log('notification', notification.notification.data);
          // console.log('tap', notification.actionId);
          //
          let notiType = +notification.notification.data['gcm.notification.messageType'];
          if (!notiType) {
            notiType = +notification.notification.data.messageType;
          }
          /*
          Message = 0,
          Announcement = 1,
          Score = 2,
          Feedback = 3,
          Attendent = 4,
          Review = 5,
          Polling = 6,
          RequestPermission = 7*/
          if (notiType === Constant.NOTIFICATION_TYPE_SMS || notiType === Constant.NOTIFICATION_TYPE_MEDIA) {
            let messageId = notification.notification.data['gcm.notification.messageId'];
            if (!messageId) {
              messageId = notification.notification.data.messageId;
            }
            this.router.navigateByUrl(`/student-message/${messageId}/${notiType}`);
          } else if (notiType === Constant.NOTIFICATION_TYPE_CONVERSATION) {
            this.router.navigate(['/main/tab4']);
          } else if (notiType === Constant.NOTIFICATION_TYPE_POLLING) {
            this.router.navigate(['/student-polling']);
          } else if (notiType === Constant.NOTIFICATION_TYPE_HOMEWORK) {
            this.router.navigate(['/student-homework']);
          }
        },
      );
    }


  }
}
