import { App } from '../../module';
import html from './ilsidenav.html';

export const ilSidenav = {
  template: html,
  bindings:{
      closeSidenav: "=",
      mdSidenav:"="
  }
}
App.component('ilSidenav', ilSidenav); 