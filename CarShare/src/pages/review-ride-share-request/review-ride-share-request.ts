import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from "../../providers/navigation-menu/navigation-menu";
import { Listing } from '../struct/listing';
import { FirestoreListingsProvider } from '../../providers/firestore-listings/firestore-listings';

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

  listing : Listing;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public listingsProvider: FirestoreListingsProvider
  ) {

    this.listing = navParams.data.listing;
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(ReviewRideShareRequestPage)
  }

  acceptShareRequest(requesterIndex) {
    var requester = this.listing.whoWantsToCome[requesterIndex]
    
    this.listing.seatsAvailable = (this.listing.seatsAvailable - 1);
    this.listing.whosComing.push(requester)
    this.listing.whoWantsToCome.splice(requesterIndex, 1)

    this.listingsProvider.updateListing(this.listing)
  }

  rejectShareRequest(requesterIndex) {
    this.listing.whoWantsToCome.splice(requesterIndex, 1)
    this.listingsProvider.updateListing(this.listing)
  }
}
