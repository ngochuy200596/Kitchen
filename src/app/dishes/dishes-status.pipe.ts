import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dishStatusPipe'
})

export class DishesSatatusPipe implements PipeTransform {
  transform(dishes: Array<any>, args: any) {
    let rs: any[] = [];
    let status = args[0];
    if (dishes !== null) {
      dishes.forEach((dish) => {
        if (status == null || dish.status == status) {
          rs.push(dish);
        }
      });
    } else {
      console.log('ERROR: DISHES_DATA IS NULL!');
    }
    return rs;
  }
}
