import { Pipe, PipeTransform } from '@angular/core';
// import { IsEmptyPipe } from './is-empty.pipe';

@Pipe({
  name: 'emailMask'
})
export class EmailMaskPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) { return value; };

    const atIndex = value.indexOf('@');
    if (atIndex < 0) { return value; }

    const [username, domain] = value.split('@');
    let maskedUsername = username;
    if (username.length > 3) {

      // Lấy 2 số đầu và 3 số cuối
      const firstTwoCharacter = username.substring(0, 1);
      const lastThreeCharacter = username.substring(username.length - 2);

      // Tạo chuỗi 'x' với độ dài bằng phần còn lại của số điện thoại
      const hiddenCharacter = '*'.repeat(username.length - 2);

      // Kết hợp các phần tử để tạo số điện thoại che giấu
      maskedUsername = firstTwoCharacter + hiddenCharacter + lastThreeCharacter;
    }else{
      return value;
    }

    const maskedEmail = `${maskedUsername}@${domain}`;

    return maskedEmail;
  }
}
