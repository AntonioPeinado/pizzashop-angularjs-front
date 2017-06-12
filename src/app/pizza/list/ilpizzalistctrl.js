import { App } from '../../module';

export class IlPizzalistCtrl{
    constructor(pizzaService) {
    this.pizzaService = pizzaService;
    this.pizzas = [];
    this.getPizzas();
    }
    getPizzas() {
        let _this = this;
        this.pizzaService.getAll()
            .then(c => _this.pizzas = c.data);
    }
}
IlPizzalistCtrl.$inject = ['pizzaService'];
App.controller('ilPizzaListCtrl', IlPizzalistCtrl);