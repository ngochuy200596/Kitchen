import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchDishPage'
})

export class DishesSearchPipe implements PipeTransform {
  transform(dishes: Array<any>, keySearch: string) {
    let rs = [];
    if (dishes !== null) {
      if (keySearch !== null && keySearch.trim() !== '') {
        rs = dishes.filter((dish) => {
          return dish.name.toLowerCase().indexOf(keySearch.toLowerCase()) > -1;
        });
      } else {
        rs = dishes;
      }
    } else {
      console.log('ERROR : DISHES_DATA IS NULL !');
    }
    return rs;
  }
}
