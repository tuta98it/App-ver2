import { Pipe, PipeTransform } from '@angular/core';
// import { IsEmptyPipe } from './is-empty.pipe';

@Pipe({
  name: 'statusRequestPipe'
})
export class StatusRequest implements PipeTransform {
  constructor() {

  }
  transform(request: any): string {
    if (this.isEmpty(request.receiveTime)) {
      return 'Chưa nhận yêu cầu';
    }

    if (this.isEmpty(request.arriveTime)) {
      return 'Đã nhận yêu cầu và đang xử lý';
    }

    if (this.isEmpty(request.completeTime)) {
      return 'Đã nhận yêu cầu và đang xử lý';
    }

    if (this.isEmpty(request.arriveLaboTime)) {
      return 'Đã nhận yêu cầu và đang xử lý';
    }

    return 'Đã nhận yêu cầu và đang xử lý';
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
