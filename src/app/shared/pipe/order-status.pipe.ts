import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(value, listOrderStatus: any): string {
    const statusValue = listOrderStatus.find((objStatus: any) => objStatus.id === value);
    return statusValue.name;
  }

}
