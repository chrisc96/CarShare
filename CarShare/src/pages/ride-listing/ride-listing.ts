import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';

/**
 * Generated class for the RideListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ride-listing',
  templateUrl: 'ride-listing.html',
})
export class RideListingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl : MenuController, public navMenu : NavigationMenuProvider) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(RideListingPage)
  }

  goBack() {
    this.navCtrl.pop();
  }

}
