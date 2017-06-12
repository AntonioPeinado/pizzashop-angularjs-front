import { App } from '../../module';
import {} from './config';
import {} from './ilpizzalistctrl';
import html from './ilpizzalist.html';

export const ilPizzaList = {
    controller: 'ilPizzaListCtrl',
    template: html
};
App.component('ilPizzaList', ilPizzaList);





