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
var DishesService = (function () {
    function DishesService(http) {
        this.http = http;
        this.dishes = null;
    }
    DishesService.prototype.getDishes = function () {
        var _this = this;
        if (this.dishes === null) {
            return this.http.get('/api/dishes')
                .map(function (res) { return res.json(); })
                .map(function (dish) {
                _this.dishes = dish;
                return _this.dishes;
            });
        }
        else {
            return of_1.of(this.dishes);
        }
    };
    DishesService.prototype.loadDishes = function () {
        var _this = this;
        return this.http.get('/api/dishes')
            .map(function (res) { return res.json(); })
            .map(function (dish) {
            _this.dishes = dish;
            return _this.dishes;
        });
    };
    DishesService.prototype.setStatus = function (dishId, desStatus) {
        return this.http.post('/api/dishes/' + dishId + '/status/' + desStatus, {}).map(function (res) {
            return res.json();
        });
    };
    ;
    return DishesService;
}());
DishesService = __decorate([
    core_1.Injectable()
], DishesService);
exports.DishesService = DishesService;
