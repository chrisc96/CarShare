import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from "../../providers/navigation-menu/navigation-menu";


/**
 * Generated class for the ReviewRideShareRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-ride-share-request',
  templateUrl: 'review-ride-share-request.html',
})
export class ReviewRideShareRequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public navMenu: NavigationMenuProvider, public menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(ReviewRideShareRequestPage)
  }

}
