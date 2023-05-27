import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, LoadingController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { GeneralService } from 'src/app/services/general-service';
import { IsEmptyPipe } from 'src/app/shared/pipe/is-empty.pipe';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Constant } from 'src/app/shared/constants/constant.class';
@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  @ViewChild('popover') popover;
  isPopoverOpenFillter = false;
  listService: any[] = [];
  items = [];
  listOrderType: any[] = [];
  customPopoverOptions = {
    // header: 'Trạng thái đơn hàng',
    subHeader: 'Chọn nhóm cần lọc',
    // message: 'Chỉ chọn một TTĐH',
  };
  // Chức dữ liệu cơ sở, khởi tạo ban đầu.
  initDatas: any;
  public progress = 0;
  constructor(
    private generalService: GeneralService,
    private loadingCtrl: LoadingController
  ) {
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

  loadingDataOrderType() {
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dữ liệu đang tải lên sau 1 giây ...',
      duration: 1000,
    });

    loading.present();
  }

  async ngOnInit() {
    this.showLoading();
    this.getListInitialData();
    await this.getOrderType();
  }

  onIonInfinite(ev) {
    this.generateItemsOrderType();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  getOrderType() {
    // this.loadingDataOrderType();
    this.generalService.getOrderType().subscribe(
      (res) => {
        if (res !== null) {

          this.listOrderType = res;
          this.generateItemsOrderType();
          console.log('this.listOrderType', this.listOrderType);
        }
      },
      (error) => { }
    );
  }

  getListInitialData() {
    this.initDatas = JSON.parse(localStorage.getItem(Constant.INIT_DATA));
  }

  presentPopoverFillter(e: Event) {
    this.popover.event = e;
    this.isPopoverOpenFillter = true;
  }


  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }


  private generateItemsOrderType() {
    const count = this.items.length;
    for (let i = 0; i < 50; i++) {
      this.items.push(this.listOrderType[count + i]);
    }
  }
}

