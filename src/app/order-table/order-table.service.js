"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var of_1 = require("rxjs/observable/of");
var OrderTableService = (function () {
    function OrderTableService(http) {
        this.http = http;
        this.DISH_ORDER = null;
    }
    OrderTableService.prototype.getOrder = function () {
        var _this = this;
        if (this.DISH_ORDER === null) {
            return this.http.get('api/processingOrders')
                .map(function (res) { return res.json(); })
                .map(function (order) {
                _this.DISH_ORDER = order;
                return _this.DISH_ORDER;
            });
        }
        else {
            return of_1.of(this.DISH_ORDER);
        }
    };
    OrderTableService.prototype.loadOrder = function () {
        var _this = this;
        return this.http.get('api/processingOrders')
            .map(function (res) { return res.json(); })
            .map(function (order) {
            _this.DISH_ORDER = order;
            return _this.DISH_ORDER;
        });
    };
    OrderTableService.prototype.setStatusItem = function (tableId, itemId, status) {
        return this.http.post('api/processingOrdersItem/' + tableId + '/id/' + itemId + '/status/' + status, {}).map(function (res) {
            return res.json();
        });
    };
    OrderTableService.prototype.sortByTime = function () {
        var _temp;
        for (var i = 0; i < this.DISH_ORDER.length - 1; i++) {
            for (var j = i + 1; j < this.DISH_ORDER.length; j++) {
                if (this.DISH_ORDER[i].createdDate > this.DISH_ORDER[j].createdDate) {
                    _temp = this.DISH_ORDER[i];
                    this.DISH_ORDER[i] = this.DISH_ORDER[j];
                    this.DISH_ORDER[j] = _temp;
                }
            }
        }
        ;
    };
    return OrderTableService;
}());
OrderTableService = __decorate([
    core_1.Injectable()
], OrderTableService);
exports.OrderTableService = OrderTableService;
