import {App} from '../../module';
import {} from '../ilsidenav';
import {} from '../ilappbar';
import {} from '../ilcontent'; 
import {} from './ilappctrl';
import html from './ilapp.html';

export const ilApp = {
    template: html,
    controller: 'ilAppCtrl'
}

App.component('ilApp', ilApp);