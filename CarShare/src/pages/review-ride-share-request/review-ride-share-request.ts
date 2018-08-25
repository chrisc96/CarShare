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

  listings: Listing[]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public listingsProvider: FirestoreListingsProvider
  ) {
    this.listingsProvider.getUserListingsObservable().subscribe(listings => {
      this.listings = listings;
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(ReviewRideShareRequestPage)
  }

  acceptShareRequest(listingIndex, requesterIndex) {
    var listing = this.listings[listingIndex]
    var requester = listing.whoWantsToCome[requesterIndex]
    
    listing.seatsAvailable = (listing.seatsAvailable - 1);
    listing.whosComing.push(requester)
    listing.whoWantsToCome.splice(requesterIndex, 1)

    this.listingsProvider.updateListing(listing)
  }

  rejectShareRequest(listingIndex, requesterIndex) {
    var listing = this.listings[listingIndex]

    listing.whoWantsToCome.splice(requesterIndex, 1)
    this.listingsProvider.updateListing(listing)
  }
}
