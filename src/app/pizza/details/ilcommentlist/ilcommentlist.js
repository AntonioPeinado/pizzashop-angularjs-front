import { App } from '../../../module';
import html from './ilcommentlist.html';

export const ilCommentList = {
    template: html,
    controller: 'ilPizzaDetailsCtrl'
}
App.component('ilCommentList', ilCommentList);