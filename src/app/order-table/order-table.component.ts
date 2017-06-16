import { Component, OnInit } from '@angular/core';
import { OrderTableService } from './order-table.service';
import { Observable } from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'order-table',
  templateUrl: 'order-table.component.html',
  styleUrls: ['order-table.component.css']
})

export class OrderTableComponent implements OnInit {
  orders: any[] = [];

  constructor(public orderTableService: OrderTableService) {
    this.orderTableService.loadOrder().subscribe(orders => {
      this.orders = orders;
      this.orderTableService.sortByTime();
      Observable
        .interval(4000)
        .subscribe(() => {
          console.log('refresh order');
          this.reload();
        });
    });
  }

  reload() {
    this.orderTableService.loadOrder().subscribe(orders => {
      this.orders = orders;
      this.orderTableService.sortByTime();
    });
  }

  ngOnInit() {
    console.log('order table component');
  }
}
