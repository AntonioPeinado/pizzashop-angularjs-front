import { App } from '../../module';

export class AddPizzaCtrl {
    constructor(addPizzaService, state) {
        this.addPizzaService = addPizzaService;
        this.state = state;
        this.ingridients = null;
        this.pizza = {
            name: null,
            ingridients: [],
            image: null
        }; 
        this.getIngridients();
    }
    savePizza() {
        this.addPizzaService.savePizza(this.pizza, this.picFile)
        .then(this.state.go('pizzalist'));
    }
    getIngridients() {
        let _this = this;
        this.addPizzaService.getIngridients()
            .then(c => _this.ingridients = c.data);
    }
}
AddPizzaCtrl.$inject = ['addPizzaService', '$state'];
App.controller('addPizzaCtrl', AddPizzaCtrl);