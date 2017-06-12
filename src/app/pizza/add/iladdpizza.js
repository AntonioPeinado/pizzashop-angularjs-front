import { App } from '../../module';
import {} from './ilimageuploader';
import {} from './config';
import {} from './iladdpizzactrl';
import html from './iladdpizza.html';

export const ilAddPizza = {
    controller: 'ilAddPizzaCtrl',
    template: html
};
App.component('ilAddPizza', ilAddPizza)
