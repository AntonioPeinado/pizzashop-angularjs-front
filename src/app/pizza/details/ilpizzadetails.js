import { App } from '../../module';
import {} from './ilpizzacard';
import {} from './ilcommentform';
import {} from './ilcommentlist';
import {} from './ilingredientlist';
import {} from './config';
import {} from './ilpizzadetailsctrl';
import html from './ilpizzadetails.html';

export const ilPizzaDetails = {
    controller: 'ilPizzaDetailsCtrl',
    template: html
};
App.component('ilPizzaDetails', ilPizzaDetails)





