import { App } from '../../module';

export class IlAppCtrl {
    constructor(mdSidenav) {
        this.mdSidenav = mdSidenav;
    }
    isSidenavClosed() {
        return !(this.mdSidenav("sidenav").isOpen() || this.mdSidenav("sidenav").isLockedOpen());
    }
    openSidenav() {
        this.mdSidenav("sidenav").toggle();
    }
    closeSidenav() {
        this.mdSidenav("sidenav").close();
    }
}
IlAppCtrl.$inject = ['$mdSidenav'];
App.controller('ilAppCtrl', IlAppCtrl);