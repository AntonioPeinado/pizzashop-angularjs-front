import { App } from '../../../module';
import html from './ilpizzacard.html';

export const ilPizzaCard = {
  template: html,
  controller: 'ilPizzaDetailsCtrl'

}
App.component('ilPizzaCard', ilPizzaCard);