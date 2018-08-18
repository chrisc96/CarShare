import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Listing } from '../struct/listing';

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

  listingId : string
  listing: Listing

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl : MenuController, public navMenu : NavigationMenuProvider, public firestore : FirestoreProvider) {
    this.listingId = navParams.data;
    this.listing = this.firestore.getListing(this.listingId);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(RideListingPage)
  }

  goBack() {
    this.navCtrl.pop();
  }

}
