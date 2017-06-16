import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabComponent } from './tab/tab.component';
import { OrderTableModule } from '../order-table/order-table.module';
import { DishesModule } from '../dishes/dishes.module';
import { KitchenDishOrderModule } from '../kitchen-dish-order/kitchen-dish-order.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'crisis-center', component: TabComponent},
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    OrderTableModule,
    KitchenDishOrderModule,
    DishesModule,
    RouterModule
  ],
  declarations: [TabComponent],
  exports: [
    CommonModule,
    FormsModule,
    TabComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
