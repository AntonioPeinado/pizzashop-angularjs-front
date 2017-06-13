import { App } from '../../module';

export class AddPizzaCtrl {
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
        let self=this;
        this.pizzaService.create(this.pizza)
            .then(function(){
                self.state.go('pizzalist')
            });
    }
    getIngredients() {
        let _this = this;
        this.ingredientService.getAll()
            .then(response => _this.ingredients = response.data);
    }
}
AddPizzaCtrl.$inject = ['$state', 'pizzaService', 'ingredientService'];
App.controller('addPizzaCtrl', AddPizzaCtrl);