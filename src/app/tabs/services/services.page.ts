import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { GeneralService } from 'src/app/services/general-service';
import { IsEmptyPipe } from 'src/app/shared/pipe/is-empty.pipe';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {


  listService: any[] = [];
  items = [];
  listOrderType: any[] = [];
  constructor(private generalService: GeneralService,) {
    this.listService = [
      {
        designation: 'Nhóm máu ABO RH',
        price: '45000',
      },
      {
        designation: 'Glucose',
        price: '17000',
      },
      {
        designation: 'GPT (ALT)',
        price: '95000',
      },
      {
        designation: 'Adenovirus Ag test nhanh',
        price: '100000',
      },
      {
        designation: 'TSI (Thyroid Stimulating Immunoglobulins)',
        price: '135000',
      },
      {
        designation: 'GGT',
        price: '135000',
      },
      {
        designation: 'FibroTest Score',
        price: '109000',
      },
      {
        designation: 'ValueHbA1c',
        price: '65000',
      },
      {
        designation: 'Pleural Fluid',
        price: '69000',
      },
      {
        designation: 'JEV (Viêm não Nhật Bản)',
        price: '335000',
      },
      {
        designation: 'Tiglycarnitine (C5:1)',
        price: '185000',
      },

      {
        designation: 'FibroTest Score',
        price: '109000',
      },
      {
        designation: 'ValueHbA1c',
        price: '65000',
      },
      {
        designation: 'Pleural Fluid',
        price: '69000',
      },
      {
        designation: 'Nắm tay',
        price: '0',
      },
    ];
  }



  async ngOnInit() {
    await this.getOrderType();

  }

  onIonInfinite(ev) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }


  getOrderType() {
    this.generalService.getOrderType().subscribe(
      (res) => {
        if (res !== null) {
          this.listOrderType = res;
          this.generateItems();
          console.log('this.listOrderType', this.listOrderType);
        }
      },
      (error) => { }
    );
  }

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }


  private generateItems() {
    const count = this.items.length;
    for (let i = 0; i < 50; i++) {
      this.items.push(this.listOrderType[count + i]);
    }
  }
}

