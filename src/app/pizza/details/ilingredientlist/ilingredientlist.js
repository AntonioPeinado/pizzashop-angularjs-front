import { App } from '../../../module';
import html from './ilingredientlist.html';

export const ilIngredientList = {
    template: html,
    controller: 'ilPizzaDetailsCtrl'

}
App.component('ilIngredientList', ilIngredientList);