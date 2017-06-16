"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var tab_component_1 = require("./tab/tab.component");
var order_table_module_1 = require("../order-table/order-table.module");
var dishes_module_1 = require("../dishes/dishes.module");
var kitchen_dish_order_module_1 = require("../kitchen-dish-order/kitchen-dish-order.module");
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: []
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ng_bootstrap_1.NgbModule,
            forms_1.FormsModule,
            order_table_module_1.OrderTableModule,
            kitchen_dish_order_module_1.KitchenDishOrderModule,
            dishes_module_1.DishesModule
        ],
        declarations: [tab_component_1.TabComponent],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            tab_component_1.TabComponent
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;
