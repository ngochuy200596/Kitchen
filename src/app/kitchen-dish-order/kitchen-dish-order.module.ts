import { NgModule } from '@angular/core';
import { KitchenDishOrderComponent } from './kitchen-dish-order.component';
import { CommonModule } from '@angular/common';
import { KitchenDishOrderService } from './kitchen-dish-order.service';
import { FormsModule } from '@angular/forms';
import { OrderTableModule } from '../order-table/order-table.module';
import { KitchenDishStatus } from './kitchen-dish-status.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, OrderTableModule],
  declarations: [KitchenDishOrderComponent,KitchenDishStatus],
  exports: [KitchenDishOrderComponent],
  providers: [KitchenDishOrderService]
})

export class KitchenDishOrderModule {
}

