"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_table_component_1 = require("./order-table.component");
var order_table_service_1 = require("./order-table.service");
var common_1 = require("@angular/common");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var OrderTableModule = (function () {
    function OrderTableModule() {
    }
    return OrderTableModule;
}());
OrderTableModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, ng_bootstrap_1.NgbModule,],
        declarations: [order_table_component_1.OrderTableComponent],
        exports: [order_table_component_1.OrderTableComponent],
        providers: [order_table_service_1.OrderTableService]
    })
], OrderTableModule);
exports.OrderTableModule = OrderTableModule;
