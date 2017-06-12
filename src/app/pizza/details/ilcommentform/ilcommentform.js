import { App } from '../../../module';
import html from './ilcommentform.html';

export const ilCommentForm = {
  template: html,
  controller: 'ilPizzaDetailsCtrl'

}
App.component('ilCommentForm', ilCommentForm);