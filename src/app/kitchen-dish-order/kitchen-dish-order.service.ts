import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class KitchenDishOrderService {
  constructor(public http: Http) {
  }
}

