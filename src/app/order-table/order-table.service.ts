import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderTableService {
  DISH_ORDER: any[] = null;

  constructor(private http: Http) {
  }

  getOrder(): Observable<any[]> {
    if (this.DISH_ORDER === null) {
      return this.http.get('api/processingOrders')
        .map(res => res.json())
        .map(order => {
          this.DISH_ORDER = order;
          return this.DISH_ORDER;
        });
    } else {
      return of(this.DISH_ORDER);
    }
  }

  loadOrder() {
    return this.http.get('api/processingOrders')
      .map(res => res.json())
      .map(order => {
        this.DISH_ORDER = order;
        return this.DISH_ORDER;
      });
  }

  setStatusItem(tableId: number, itemId: number, status: number): Observable<any[]> {
    return this.http.post('api/processingOrdersItem/' + tableId + '/id/' + itemId + '/status/' + status, {}).map(res => {
      return res.json();
    });
  }

  sortByTime() {
    let _temp: any;
    for (let i = 0; i < this.DISH_ORDER.length - 1; i++) {
      for (let j = i + 1; j < this.DISH_ORDER.length; j++) {
        if (this.DISH_ORDER[i].createdDate > this.DISH_ORDER[j].createdDate) {
          _temp = this.DISH_ORDER[i];
          this.DISH_ORDER[i] = this.DISH_ORDER[j];
          this.DISH_ORDER[j] = _temp;
        }
      }
    }
    ;
  }
}
