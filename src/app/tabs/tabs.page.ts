import {Component, ViewChild} from '@angular/core';
import {IonTabs, NavController} from '@ionic/angular';
import {BadgeService} from '../services/badge.service';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  selectedTab = 'tab1';
  tabHomeClickEvent: any;
  userInfo: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  constructor(
    public navCtrl: NavController,
    public badgeService: BadgeService,
    public localStorage: StorageService,
    ) {

  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  async ngOnInit() {
    this.localStorage.getSelectedUser().then((res) => {
      this.userInfo = res;
    });
  }
  tabClicked($event) {
    this.selectedTab = $event.tab;
  }
  ionViewDidLeave(){
    // console.log('tab changed');
  }
  ionTabsDidChange() {
    // console.log('tab ionTabsDidChange');
    // Stuff to switch icon from filled to outline and vice versa
  }
}
