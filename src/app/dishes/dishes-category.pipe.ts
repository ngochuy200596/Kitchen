import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'categoryPipe'
})
export class DishesCategoryPipe implements PipeTransform {
  transform(dishes: Array<any>, args: any) {
    let rs: any = [];
    let category = args[0];
    if (dishes !== null) {
      dishes.forEach((dish) => {
        if (category == null || dish.categoryId == category) {
          rs.push(dish);
        }
      });
    } else {
      console.log('dishes null');
    }
    return rs;
  }
}
