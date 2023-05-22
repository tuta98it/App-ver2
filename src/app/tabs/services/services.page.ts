import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { IsEmptyPipe } from 'src/app/shared/pipe/is-empty.pipe';
@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {


  listService: any[] = [];
  constructor() {

  }

  ngOnInit() {
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

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }

}

