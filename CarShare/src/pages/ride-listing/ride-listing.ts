import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { Listing } from '../struct/listing';
import { RequestToSharePage } from '../request-to-share/request-to-share';
import { FirestoreListingsProvider } from '../../providers/firestore-listings/firestore-listings';

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

  listing: Listing
  fromMyListings : boolean

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl : MenuController,
              public navMenu : NavigationMenuProvider,
              public listingsProvider : FirestoreListingsProvider
  ) {
    this.listing = navParams.get('listing');
    this.fromMyListings = navParams.get('fromMyListings');
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(RideListingPage)
  }

  goBack() {
    this.navCtrl.pop();
  }

  requestToShare() {
    this.navCtrl.push(RequestToSharePage, {'listing': this.listing});
  }
}
