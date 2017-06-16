"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dishes_service_1 = require("./dishes.service");
var dishes_component_1 = require("./dishes.component");
var common_1 = require("@angular/common");
var dishes_search_pipe_1 = require("./dishes-search.pipe");
var forms_1 = require("@angular/forms");
var dishes_status_pipe_1 = require("./dishes-status.pipe");
var dishes_sort_pipe_1 = require("./dishes-sort.pipe");
var DishesModule = (function () {
    function DishesModule() {
    }
    return DishesModule;
}());
DishesModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule],
        declarations: [
            dishes_component_1.DishesComponent,
            dishes_search_pipe_1.DishesSearchPipe,
            dishes_status_pipe_1.DishesSatatusPipe,
            dishes_sort_pipe_1.DishesSortPipe
        ],
        exports: [dishes_component_1.DishesComponent],
        providers: [dishes_service_1.DishesService]
    })
], DishesModule);
exports.DishesModule = DishesModule;
