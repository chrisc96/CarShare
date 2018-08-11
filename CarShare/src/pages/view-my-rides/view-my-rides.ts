import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';

/**
 * Generated class for the ViewMyRidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-my-rides',
  templateUrl: 'view-my-rides.html',
})
export class ViewMyRidesPage {
  public name : String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl : MenuController, public navMenu : NavigationMenuProvider) {
    this.name = navParams.data
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(ViewMyRidesPage)
  }
  
  goToPostARide() {
    
  }
  
}
