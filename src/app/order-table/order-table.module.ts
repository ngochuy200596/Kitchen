import { NgModule } from '@angular/core';
import { OrderTableComponent } from './order-table.component';
import { OrderTableService } from './order-table.service';

import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [OrderTableComponent],
  exports: [OrderTableComponent],
  providers: [OrderTableService]
})

export class OrderTableModule {
}
