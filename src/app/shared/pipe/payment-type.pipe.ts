import { Pipe, PipeTransform } from '@angular/core';
// import { IsEmptyPipe } from './is-empty.pipe';

@Pipe({
  name: 'paymentTypePipe'
})
export class PaymentTypePipe implements PipeTransform {
  constructor() {

  }
  transform(id: any, listPaymentType: any): string {
    const paymentByID = listPaymentType.find((payment: any) => payment.id = id);
    return paymentByID ? paymentByID.name : '';
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

}
