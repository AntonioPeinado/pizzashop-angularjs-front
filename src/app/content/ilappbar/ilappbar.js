import { App } from '../../module';
import html from './ilappbar.html';

export const ilAppbar = {
    template: html,
    bindings: {
        isSidenavClosed: "=",
        openSidenav:"=",
        mdSidenav:"="
    }
}
App.component('ilAppbar', ilAppbar);