import { Injectable } from '@angular/core';

/*
  Generated class for the NavigationMenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NavigationMenuProvider {

  activePage: any

  constructor() {}

  public setActivePage(page) {
    this.activePage = page;
  }
}
