export class KitchenDishOrder {
  dish: Dish;
  quantity: number;
  status: number;
  description: string;
  orderItem: Array<TableOrderItem>;
}


interface TableOrderItem {
  tableId: number;
  orderItemId: number;
}

interface Dish {
  ID: number;
  name:string;
  src: string;
  price:string;
  status: number;
  categoryID:number;
}
