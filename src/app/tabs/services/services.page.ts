import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, LoadingController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { GeneralService } from 'src/app/services/general-service';
import { IsEmptyPipe } from 'src/app/shared/pipe/is-empty.pipe';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Constant } from 'src/app/shared/constants/constant.class';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  @ViewChild('popover') popover;
  isPopoverOpenFillter = false;
  isModalOpenDetailItemService = false;
  listService: any[] = [];
  items = [];
  listOrderType: any[] = [];
  listGroupOrderType: any[] = [];
  customPopoverOptions = {
    // header: 'Trạng thái đơn hàng',
    subHeader: 'Chọn nhóm cần lọc',
    // message: 'Chỉ chọn một TTĐH',
  };
  titleDetailItemService = 'Công thức máu';
  // Chức dữ liệu cơ sở, khởi tạo ban đầu.
  initDatas: any;

  // Key search
  keywordSearch: any;

  // dich vụ trong trong danh sách dịch vụ
  itemService: any;
  public progress = 0;
  constructor(
    private generalService: GeneralService,
    private loadingCtrl: LoadingController,
    private notificationService: NotificationService,
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
      message: 'Dữ liệu đang tải lên ...',
      duration: 1000,
    });

    loading.present();
  }

  async ngOnInit() {
    // this.getListInitialData();
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
    // Show thông báo delay thời gian chờ loading dữ liệu
    this.showLoading();

    this.generalService.getOrderType().subscribe(
      (res) => {
        if (res !== null) {

          this.listOrderType = res;

          // Restar biến item về emplu để chuẩn cho quá trình quét dữ liệu
          this.items = [];

          // Bắt đầu danh sách với 50 phần tử
          this.generateItemsOrderType();
          // console.log('this.listOrderType', this.listOrderType);
        }
      },
      (errorRes: any) => {
        if (errorRes) {
          this.notificationService.showMessage(Constant.DANGER, `Đã gặp lỗi khi trả về dữ liệu`);
        }
      }
    );
  }

  getOrderTypeGroup() {
    // this.loadingDataOrderType();
    // Show thông báo delay thời gian chờ loading dữ liệu
    this.showLoading();

    this.generalService.listOrderGroup().subscribe(
      (res) => {
        if (res !== null) {

          this.listGroupOrderType = res;

          // Restar biến item về emplu để chuẩn cho quá trình quét dữ liệu
          this.items = [];

          // Bắt đầu danh sách với 50 phần tử
          this.generateItemsOrderType();
          // console.log('this.listGroupOrderType', this.listGroupOrderType);
        }
      },
      (errorRes: any) => {
        if (errorRes) {
          this.notificationService.showMessage(Constant.DANGER, `Đã gặp lỗi khi trả về dữ liệu`);
        }
      }
    );
  }

  // getListInitialData() {
  //   this.initDatas = JSON.parse(localStorage.getItem(Constant.INIT_DATA));
  // }

  presentPopoverFillter(e: Event) {
    this.popover.event = e;
    this.isPopoverOpenFillter = true;
  }


  handleChangeSearch(event: any) {
    this.keywordSearch = event.target.value;

    // payload dữ liệu chuyền đi
    const payload = {
      search: this.keywordSearch,
      partnerId: 0,
      orderTypeGroupId: 0,
      page: 1,
      pageSize: 250,
      showDisable: true,
      showPrice0: true
    };

    this.generalService.getOrderTypeFilter(payload).subscribe(
      (res: any) => {
        if (res != null) {
          this.listOrderType = res.data;
          // console.log('this.listOrderType: ', this.listOrderType);
          // Restar biến item về emplu để chuẩn cho quá trình quét dữ liệu
          this.items = [];
          this.generateItemsOrderType();
        }
      },
      (errorRes: any) => {
        if (errorRes) {
          this.notificationService.showMessage(Constant.DANGER, `Đã có lỗi xảy ra khi hệ thống trả dữ liệu về`);
        }
      });
  }

  clickItemService(item: any){
    this.itemService = item;
    //  về DV ${item}
    this.titleDetailItemService = `Thông tin chi tiết`;
    this.setOpenModalDetailItemService(true);
  }



  setOpenModalDetailItemService(isOpen: boolean) {
    this.isModalOpenDetailItemService = isOpen;
  }

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }

  handleChangeTypeGroup(event: any) {
    const value = event.target.value;

    switch (value) {
      case 0:
        // this.getOrderType();
        break;

      case 1:
        // this.getOrderTypeGroup();
        break;
    }



  }

  private generateItemsOrderType() {

    // Lượng phần tử tối đa.
    const maxLength = 50;

    // index của phần tử đầu tiền từ chuỗi cần thêm
    const index = this.items.length;

    // Lượng phần tử có thể thêm vào
    const sub = this.listOrderType.length - this.items.length;
    const count = Math.min(maxLength, sub);


    // Lấy mảng con từ mảng this.listOrderType.length bắt đầu từ vị trí index và có độ dài count
    const subArray = this.listOrderType.slice(index, index + count);

    // Nối thêm vào mảng this.items
    this.items = this.items.concat(subArray);

    // console.log('this.items', this.items);

  }
}



