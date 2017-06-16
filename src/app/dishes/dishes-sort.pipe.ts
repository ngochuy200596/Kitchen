import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sort'
})

export class DishesSortPipe implements PipeTransform {
  transform(dishes: Array<any>, args: string): Array<string> {
    dishes.sort((a: any, b: any) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return dishes;
  }
}
