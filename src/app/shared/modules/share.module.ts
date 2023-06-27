import { NgModule } from '@angular/core';
import { IsEmptyPipe } from 'src/app/shared/pipe/is-empty.pipe';
import { PaymentTypePipe } from '../pipe/payment-type.pipe';
import { StatusRequestPipe } from '../pipe/status-request';
import { RequestTypePipe } from '../pipe/request-type';
import { OrderStatusPipe } from '../pipe/order-status.pipe';
import { ActivePipe } from '../pipe/active.pipe';
import { HidePhoneNumberPipe } from '../pipe/hide-phone-number.pipe';




@NgModule({
  declarations: [
    IsEmptyPipe,
    PaymentTypePipe,
    StatusRequestPipe,
    RequestTypePipe,
    OrderStatusPipe,
    ActivePipe,
    HidePhoneNumberPipe],
  exports: [IsEmptyPipe,
    PaymentTypePipe,
    StatusRequestPipe,
    RequestTypePipe,
    OrderStatusPipe,
    ActivePipe,
    HidePhoneNumberPipe]
})
export class SharedModule { }

