import { Injectable } from '@angular/core';
import {MainService} from './main.service';
/*import {Badge} from '@awesome-cordova-plugins/badge/ngx';*/

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  public badgeCount = 0;
  public mediaCount = 0;
  public smsCount = 0;
  public badgeInfo: any;
  constructor(
    private mainService: MainService,
    /*private badge: Badge*/
  ) { }
  public async getUnReadCount(userId) {
    this.badgeCount = 0;
    this.mainService.getUnReadMessageCount(userId).subscribe(res => {
      this.badgeCount = res.mediaCount + res.smsCount;
      this.mediaCount = res.mediaCount;
      this.smsCount = res.smsCount;
      this.badgeInfo = res;
      if (this.badgeCount){
        // this.badge.set(this.badgeCount);
      }
      else{
        // this.badge.clear();
      }
    }, error => {
    });
  }
}
