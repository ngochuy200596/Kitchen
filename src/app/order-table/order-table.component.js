"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderTableComponent = (function () {
    function OrderTableComponent(orderTableService) {
        var _this = this;
        this.orderTableService = orderTableService;
        this.orders = [];
        this.orderTableService.loadOrder().subscribe(function (orders) {
            _this.orders = orders;
            _this.orderTableService.sortByTime();
        });
    }
    OrderTableComponent.prototype.ngOnInit = function () {
        console.log('order table component');
    };
    return OrderTableComponent;
}());
OrderTableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'order-table',
        templateUrl: 'order-table.component.html',
        styleUrls: ['order-table.component.css']
    })
], OrderTableComponent);
exports.OrderTableComponent = OrderTableComponent;
