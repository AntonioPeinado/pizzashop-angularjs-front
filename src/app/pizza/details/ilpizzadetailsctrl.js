import { App } from '../../module';

export class IlPizzaDetailsCtrl {
    constructor(state, pizzaService, commentService) {
        this.state = state;
        this.pizzaService = pizzaService;
        this.commentService = commentService;
       
        this.name = null;
        this.img = null;
        this.ingridients = null;
        this.comments = null;
       
        this.comment = {};
        this.config();
    }
    config() {
        let _this = this;
        this.pizzaService.get(this.getId())
            .then(function (response) {
                let data = response.data;
                _this.name = data.name;
                _this.img = data.img;
                _this.ingridients = data.ingridients;
                _this.comments = data.comments;
            });
    }
    getId(){
        return this.state.params && this.state.params.id;
    }
    hasIngridients() {
        return this.ingridients && this.ingridients.length > 0;
    }
    submitComment() {
        this.comment.date = new Date();
        this.comment.text = this.comment.text || "";
        this.comment.pizza = parseInt(this.id);
        this.comment.user = "Unknown";
        this.commentService.create(this.comment)
            .then(this.state.reload());
    }
}
IlPizzaDetailsCtrl.$inject = ['$state', 'pizzaService', 'commentService'];
App.controller('ilPizzaDetailsCtrl', IlPizzaDetailsCtrl);