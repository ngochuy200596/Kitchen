"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kitchen_dish_order_model_1 = require("./kitchen-dish-order.model");
var KitchenDishOrderComponent = (function () {
    function KitchenDishOrderComponent(orderTableService) {
        this.orderTableService = orderTableService;
        this.orders = [];
        this.status = '';
    }
    KitchenDishOrderComponent.prototype.ngOnInit = function () {
        this.getDishNeedHandler();
    };
    KitchenDishOrderComponent.prototype.getDishNeedHandler = function () {
        var _this = this;
        this.orders = [];
        this.orderTableService.getOrder().subscribe(function (_orders) {
            if (_orders !== null) {
                _orders.forEach(function (order) {
                    var items = order.items;
                    for (var j = 0; j < items.length; j++) {
                        var _orderItem = items[j];
                        var isJoined = false;
                        for (var k = 0; k < _this.orders.length; k++) {
                            var kitchenOrder = _this.orders[k];
                            if (_this.canJoin(kitchenOrder, _orderItem)) {
                                isJoined = true;
                                kitchenOrder.quantity += _orderItem.quantity;
                                kitchenOrder.orderItem.push({
                                    tableId: order.tableId, orderItemId: _orderItem.id
                                });
                                break;
                            }
                        }
                        if (!isJoined) {
                            var _kitchen = new kitchen_dish_order_model_1.KitchenDishOrder();
                            _kitchen.description = _orderItem.description;
                            _kitchen.status = _orderItem.status;
                            _kitchen.dish = _orderItem.dish;
                            _kitchen.quantity = _orderItem.quantity;
                            _kitchen.orderItem = [
                                { tableId: order.tableId, orderItemId: _orderItem.id }
                            ];
                            _this.orders.push(_kitchen);
                        }
                    }
                });
                _this.sort();
                console.log(_this.orders);
            }
        });
    };
    KitchenDishOrderComponent.prototype.sort = function () {
        var temp;
        for (var i = 0; i < this.orders.length - 1; i++) {
            for (var j = i + 1; j < this.orders.length; j++) {
                if (this.orders[i].dish.name > this.orders[j].dish.name) {
                    temp = this.orders[i];
                    this.orders[i] = this.orders[j];
                    this.orders[j] = temp;
                }
                if (this.orders[i].status > this.orders[j].status) {
                    temp = this.orders[i];
                    this.orders[i] = this.orders[j];
                    this.orders[j] = temp;
                }
            }
        }
    };
    KitchenDishOrderComponent.prototype.canJoin = function (item1, item2) {
        return item1.dish.id === item2.dish.id &&
            item1.description === item2.description &&
            item1.status === item2.status;
    };
    KitchenDishOrderComponent.prototype.kitchenDish = function (current_item, status) {
        var _this = this;
        var _currentItem = current_item.orderItem;
        _currentItem.forEach(function (item) {
            _this.orderTableService.setStatusItem(item.tableId, item.orderItemId, status)
                .subscribe(function (item) {
                _this.orderTableService.loadOrder().subscribe(function (orders) {
                    _this.orders = orders;
                    _this.getDishNeedHandler();
                });
            });
        });
    };
    return KitchenDishOrderComponent;
}());
KitchenDishOrderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'kitchen-dish-order',
        templateUrl: 'kitchen-dish-order.component.html',
        styleUrls: ['kitchen-dish-order.component.css']
    })
], KitchenDishOrderComponent);
exports.KitchenDishOrderComponent = KitchenDishOrderComponent;
