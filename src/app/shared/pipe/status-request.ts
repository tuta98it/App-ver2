import { Pipe, PipeTransform } from '@angular/core';
import { VariablesConstant } from '../constants/variables';
// import { IsEmptyPipe } from './is-empty.pipe';


@Pipe({
  name: 'statusRequestPipe'
})
export class StatusRequestPipe implements PipeTransform {
  listRequestStatus = VariablesConstant.listRequestStatus;
  constructor() {

  }
  transform(newStatus: any): string {
    const objRequestStatus = this.listRequestStatus.find((obj) =>
      obj.id === newStatus
    );
    return objRequestStatus.name;
    // switch (newStatus) {
    //   case 1: return 'Đã nhận yêu cầu'; break;
    //   case 2: return 'Đang xử lý'; break;
    //   case 3: return 'Đã lấy mẫu'; break;
    //   default: return '';
    // }
  }


  private isEmpty(value: any): boolean {
    if (value === null || value === undefined) {
      return true;
    }

    if (typeof value === 'string' && value.trim() === '') {
      return true;
    }

    if (Array.isArray(value) && value.length === 0) {
      return true;
    }

    if (typeof value === 'object' && Object.keys(value).length === 0) {
      return true;
    }

    return false;
  }

  // if (value === null || value === undefined) {
  //   return true;
  // }

  // if (typeof value === 'string' && value.trim() === '') {
  //   return true;
  // }

  // if (Array.isArray(value) && value.length === 0) {
  //   return true;
  // }

  // if (typeof value === 'object' && Object.keys(value).length === 0) {
  //   return true;
  // }

  // return false;
}


// transform(request: any): string {
//   if (this.isEmpty(request.receiveTime)) {
//     return 'Chưa nhận yêu cầu';
//   }

//   if (this.isEmpty(request.arriveTime)) {
//     return 'Đã nhận yêu cầu';
//   }

//   if (this.isEmpty(request.completeTime)) {
//     return 'Đã đến nơi lấy mẫu';
//   }

//   if (this.isEmpty(request.arriveLaboTime)) {
//     return 'Đã lấy mẫu';
//   }

//   return 'Đã nộp mẫu cho lab';
// }


// transform(request: any): string {
//   if (this.isEmpty(request.receiveTime)) {
//     return 'Chưa nhận yêu cầu';
//   }

//   if (this.isEmpty(request.arriveTime)) {
//     return 'Đã nhận yêu cầu và đang xử lý';
//   }

//   if (this.isEmpty(request.completeTime)) {
//     return 'Đã nhận yêu cầu và đang xử lý';
//   }

//   if (this.isEmpty(request.arriveLaboTime)) {
//     return 'Đã nhận yêu cầu và đang xử lý';
//   }

//   return 'Đã nhận yêu cầu và đang xử lý';
// }


// transform(request: any): string {
//   // if (this.isEmpty(request.receiveTime)) {
//   //   return 'Chưa nhận yêu cầu';
//   // }

//   if (this.isEmpty(request.arriveTime)) {
//     return 'Đã nhận yêu cầu';
//   }

//   if (this.isEmpty(request.completeTime)) {
//     return 'Đang xử lý';
//   }

//   if (this.isEmpty(request.arriveLaboTime)) {
//     return 'Đã lấy mẫu';
//   }

//   return 'Đã lấy mẫu';
// }
