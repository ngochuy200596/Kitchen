import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { of } from 'rxjs/observable/of';
@Injectable()
export class DishesService {
  dishes: any[] = null;

  constructor(private http: Http) {
  }

  getDishes(): Observable<any[]> {
    if (this.dishes === null) {
      return this.http.get('/api/dishes')
        .map(res => res.json())
        .map(dish => {
          this.dishes = dish;
          return this.dishes;
        });
    } else {
      return of(this.dishes);
    }
  }

  loadDishes() {
    return this.http.get('/api/dishes')
      .map(res => res.json())
      .map(dish => {
        this.dishes = dish;
        return this.dishes;
      });
  }

  setStatus(dishId: number, desStatus: number): Observable<any> {
    return this.http.post('/api/dishes/' + dishId + '/status/' + desStatus, {}).map(res => {
      return res.json();
    });
  };

  getCategories() {
    return this.http.get('/api/categories')
      .map(res => {
        return res.json();
      });
  }
}
