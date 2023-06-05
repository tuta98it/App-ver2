import { Pipe, PipeTransform } from '@angular/core';
// import { IsEmptyPipe } from './is-empty.pipe';

@Pipe({
  name: 'requestTypePipe'
})
export class RequestTypePipe implements PipeTransform {
  constructor() {

  }
  transform(requestID: any, listResquest: any): string {
    const objResByID = listResquest.find((objRes: any) => objRes.requestTypeId === requestID);
    return objResByID.requestTypeName;
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
