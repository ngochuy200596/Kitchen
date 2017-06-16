"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DishesSearchPipe = (function () {
    function DishesSearchPipe() {
    }
    DishesSearchPipe.prototype.transform = function (dishes, keySearch) {
        var rs = [];
        if (dishes !== null) {
            if (keySearch !== null && keySearch.trim() !== '') {
                rs = dishes.filter(function (dish) {
                    return dish.name.toLowerCase().indexOf(keySearch.toLowerCase()) > -1;
                });
            }
            else {
                rs = dishes;
            }
        }
        else {
            console.log('ERROR : DISHES_DATA IS NULL !');
        }
        return rs;
    };
    return DishesSearchPipe;
}());
DishesSearchPipe = __decorate([
    core_1.Pipe({
        name: 'searchDishPage'
    })
], DishesSearchPipe);
exports.DishesSearchPipe = DishesSearchPipe;
