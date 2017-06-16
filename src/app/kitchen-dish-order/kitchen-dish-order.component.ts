import { Component, OnInit } from '@angular/core';
import { OrderTableService } from '../order-table/order-table.service';
import { KitchenDishOrder } from './kitchen-dish-order.model';

@Component({
  moduleId: module.id,
  selector: 'kitchen-dish-order',
  templateUrl: 'kitchen-dish-order.component.html',
  styleUrls: ['kitchen-dish-order.component.css']
})

export class KitchenDishOrderComponent implements OnInit {
  orders: KitchenDishOrder[] = [];
  status = '';
  subscription: any;

  constructor(public orderTableService: OrderTableService) {
  }

  ngOnInit() {
    this.getDishNeedHandler();
  }

  getDishNeedHandler() {
    this.orders = [];
    this.orderTableService.getOrder().subscribe(_orders => {
      if (_orders !== null) {
        _orders.forEach(order => {
          let items = order.items;
          for (let j = 0; j < items.length; j++) {
            let _orderItem = items[j];
            let isJoined = false;
            for (let k = 0; k < this.orders.length; k++) {
              let kitchenOrder: KitchenDishOrder = this.orders[k];
              if (this.canJoin(kitchenOrder, _orderItem)) {
                isJoined = true;
                kitchenOrder.quantity += _orderItem.quantity;
                kitchenOrder.orderItem.push({
                  tableId: order.tableId, orderItemId: _orderItem.id
                });
                break;
              }
            }
            if (!isJoined) {
              let _kitchen = new KitchenDishOrder();
              _kitchen.description = _orderItem.description;
              _kitchen.status = _orderItem.status;
              _kitchen.dish = _orderItem.dish;
              _kitchen.quantity = _orderItem.quantity;
              _kitchen.orderItem = [
                {tableId: order.tableId, orderItemId: _orderItem.id}
              ];
              this.orders.push(_kitchen);
            }
          }
        });
        this.sort();
      }
    });
  }

  sort() {
    let temp: any;
    for (let i = 0; i < this.orders.length - 1; i++) {
      for (let j = i + 1; j < this.orders.length; j++) {
        if (this.orders[i].dish.name > this.orders[j].dish.name) {
          temp = this.orders[i];
          this.orders[i] = this.orders[j];
          this.orders[j] = temp;
        }
        if (this.orders[i].status > this.orders[j].status) {
          temp = this.orders[i];
          this.orders[i] = this.orders[j];
          this.orders[j] = temp;
        }
      }
    }
  }

  canJoin(item1: any, item2: any): boolean {
    return item1.dish.id === item2.dish.id &&
      item1.description === item2.description &&
      item1.status === item2.status;
  }

  kitchenDish(current_item: KitchenDishOrder, status: number) {
    let _currentItem = current_item.orderItem;
    _currentItem.forEach(item => {
      this.orderTableService.setStatusItem(item.tableId, item.orderItemId, status)
        .subscribe(item => {
          this.orderTableService.loadOrder().subscribe(orders => {
            this.orders = orders;
            this.getDishNeedHandler();
          });
        });
    });
  }
}
