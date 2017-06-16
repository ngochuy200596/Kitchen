import { Component, OnInit } from '@angular/core';
import { DishesService } from './dishes.service';
@Component({
  moduleId: module.id,
  selector: 'dishes-component',
  templateUrl: 'dishes.component.html',
  styleUrls: ['dishes.component.css']
})

export class DishesComponent implements OnInit {
  dishes: any[] = [];
  search = '';
  status = '';
  categories = '';

  constructor(private dishesService: DishesService) {
  }

  ngOnInit() {
    this.getDishes();
  }

  getDishes() {
    this.dishesService.getDishes()
      .subscribe(dish => {
        this.dishes = dish;
      });
  }

  setStatus(dishId: number, desStatus: number) {
    this.dishesService.setStatus(dishId, desStatus)
      .subscribe(dish => {
        this.dishesService.loadDishes().subscribe(dishes => {
          this.dishes = dishes;
        });
      });
  }
}
