"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DishesComponent = (function () {
    function DishesComponent(dishesService) {
        this.dishesService = dishesService;
        this.dishes = [];
        this.search = '';
        this.status = '';
    }
    DishesComponent.prototype.ngOnInit = function () {
        this.getDishes();
    };
    DishesComponent.prototype.getDishes = function () {
        var _this = this;
        this.dishesService.getDishes()
            .subscribe(function (dish) {
            _this.dishes = dish;
        });
    };
    DishesComponent.prototype.setStatus = function (dishId, desStatus) {
        var _this = this;
        this.dishesService.setStatus(dishId, desStatus)
            .subscribe(function (dish) {
            _this.dishesService.loadDishes().subscribe(function (dishes) {
                _this.dishes = dishes;
            });
        });
    };
    return DishesComponent;
}());
DishesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dishes-component',
        templateUrl: 'dishes.component.html',
        styleUrls: ['dishes.component.css']
    })
], DishesComponent);
exports.DishesComponent = DishesComponent;
