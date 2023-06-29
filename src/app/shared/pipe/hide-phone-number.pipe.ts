import { Pipe, PipeTransform } from '@angular/core';
// import { IsEmptyPipe } from './is-empty.pipe';

@Pipe({
  name: 'hidePhoneNumber'
})
export class HidePhoneNumberPipe implements PipeTransform {
  constructor() {

  }
  transform(phoneNumber: any): string {
    // Kiểm tra xem số điện thoại có đủ độ dài để che giấu hay không
    if (phoneNumber.length < 5) {
      return phoneNumber; // Trả về số điện thoại không thay đổi nếu không đủ độ dài
    }

    // Lấy 2 số đầu và 3 số cuối
    const firstTwoDigits = phoneNumber.substring(0, 2);
    const lastThreeDigits = phoneNumber.substring(phoneNumber.length - 3);

    // Tạo chuỗi 'x' với độ dài bằng phần còn lại của số điện thoại
    const hiddenDigits = '*'.repeat(phoneNumber.length - 5);

    // Kết hợp các phần tử để tạo số điện thoại che giấu
    const hiddenPhoneNumber = firstTwoDigits + hiddenDigits + lastThreeDigits;

    return hiddenPhoneNumber;
  }
}
