import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  listNotifi: any[]=  [];
  constructor() { }

  ngOnInit() {
    this.listNotifi = [
      {
        title: 'Tình trạng chỉ định',
        // eslint-disable-next-line max-len
        content: 'Bệnh nhân Nguyễn Văn A đã có kết quả xét nghiệm gồm <u><i>5 chỉ thị</i></u> đã có kết quả xét nghiệm là 2.345.000đ. Bạn đã nhận được phí tư vấn chưa?',
        time: new Date(),
        showButtons : true,
      },
      {
        title: 'Tình trạng chỉ định',
        // eslint-disable-next-line max-len
        content: 'Invivolab đã tới lấy mẫu xét nghiệm của bệnh nhân Trần Thị Lý bao gồm <u><i>7 chỉ định</i></u>. Kết quả xét nghiệm của bệnh nhân Trần Thị Lý sẽ có sau khoảng 6h.',
        time: new Date(),
        showButtons : false,
      },
      {
        title: 'Chương trình khuyến mãi',
        // eslint-disable-next-line max-len
        content: 'Invivo-Lab đang triển khai chương trình ưu đãi nhân ngày Gia Đình. Gói xét nghiệm tổng quát sẽ được giảm 35% cho mọi đối tượng từ ngày 01/04/2023 - 08/04/2023',
        time: new Date(),
        showButtons : false,
      },
      {
        title: 'Khảo sát',
        // eslint-disable-next-line max-len
        content: 'Cảm ơn quý khách đã tin tưởng và đồng hành cùng Invivo-Lab trong suốt 2 năm vừa qua. Để nâng cấp chất lượng dịch cụ, Invivo-Lab xin mời quý khách làm một vài khảo sát nhỏ',
        time: new Date(),
        showButtons : false,
      },
      {
        title: 'Tình trạng chỉ định',
        // eslint-disable-next-line max-len
        content: 'Bệnh nhân Đỗ Phương Thảo đã có kết quả xét nghiệm gồm 3 chỉ định. Tỗng số tiền xét nghiệm là 765000đ. Bạn đã nhận được phí tư vấn chưa?',
        time: new Date(),
        showButtons : true,
      }
    ];
  }

}
