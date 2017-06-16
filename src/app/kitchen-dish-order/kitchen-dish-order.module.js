"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kitchen_dish_order_component_1 = require("./kitchen-dish-order.component");
var common_1 = require("@angular/common");
var kitchen_dish_order_service_1 = require("./kitchen-dish-order.service");
var forms_1 = require("@angular/forms");
var order_table_module_1 = require("../order-table/order-table.module");
var kitchen_dish_status_pipe_1 = require("./kitchen-dish-status.pipe");
var KitchenDishOrderModule = (function () {
    function KitchenDishOrderModule() {
    }
    return KitchenDishOrderModule;
}());
KitchenDishOrderModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, order_table_module_1.OrderTableModule],
        declarations: [kitchen_dish_order_component_1.KitchenDishOrderComponent, kitchen_dish_status_pipe_1.KitchenDishStatus],
        exports: [kitchen_dish_order_component_1.KitchenDishOrderComponent],
        providers: [kitchen_dish_order_service_1.KitchenDishOrderService]
    })
], KitchenDishOrderModule);
exports.KitchenDishOrderModule = KitchenDishOrderModule;
