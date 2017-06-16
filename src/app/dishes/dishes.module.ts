import { NgModule } from '@angular/core';
import { DishesService } from './dishes.service';
import { DishesComponent } from './dishes.component';
import { CommonModule } from '@angular/common';
import { DishesSearchPipe } from './dishes-search.pipe';
import { FormsModule } from '@angular/forms';
import { DishesSatatusPipe } from './dishes-status.pipe';
import { DishesSortPipe } from './dishes-sort.pipe';
import { DishesCategoryPipe } from './dishes-category.pipe';
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
      DishesComponent,
      DishesSearchPipe,
      DishesSatatusPipe,
      DishesSortPipe,
      DishesCategoryPipe
    ],
    exports: [DishesComponent],
    providers: [DishesService]
  }
)

export class DishesModule {
}
