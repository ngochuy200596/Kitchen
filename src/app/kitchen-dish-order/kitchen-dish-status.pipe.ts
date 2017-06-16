import { Pipe, PipeTransform } from '@angular/core';
import { KitchenDishOrder } from './kitchen-dish-order.model';
@Pipe({
  name: 'kitchenDishStatus'
})

export class KitchenDishStatus implements PipeTransform {
  transform(orders: Array<KitchenDishOrder>, args: any) {
    let rs: KitchenDishOrder[] = [];
    let status = args[0];
    if (orders !== null) {
      orders.forEach(order => {
        if (status == null || status == order.status) {
          rs.push(order);
        }
      });
    }
    return rs;
  }
}
