import { App } from '../../module';

export class IlAddPizzaCtrl {
    constructor(state, pizzaService, ingredientService) {
        this.pizzaService = pizzaService;
        this.ingredientService = ingredientService;
        this.state = state;
        this.ingredients = null;
        this.pizza = {
            name: null,
            ingredients: [],
            img: null
        };
        this.getIngredients();
    }
    savePizza() {
        this.pizzaService.create(this.pizza)
            .then(this.state.go('pizzalist'));
    }
    getIngredients() {
        let _this = this;
        this.ingredientService.getAll()
            .then(response => _this.ingredients = response.data);
    }
}
IlAddPizzaCtrl.$inject = ['$state', 'pizzaService', 'ingredientService'];
App.controller('ilAddPizzaCtrl', IlAddPizzaCtrl);