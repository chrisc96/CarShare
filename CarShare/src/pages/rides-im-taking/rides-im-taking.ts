import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { FirestoreListingsProvider } from '../../providers/firestore-listings/firestore-listings';
import { FirestoreUsersProvider } from '../../providers/firestore-users/firestore-users';
import { Listing } from '../struct/listing';
import { Subscription } from '../../../node_modules/rxjs';
import { RideListingPage } from '../ride-listing/ride-listing';
import * as moment from 'moment';

/**
 * Generated class for the RidesImTakingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rides-im-taking',
  templateUrl: 'rides-im-taking.html',
})
export class RidesImTakingPage {

  listings: Listing[];
  listingCount: number = 0;
  listingSubscription: Subscription

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public listingsProvider: FirestoreListingsProvider,
    public userProvider : FirestoreUsersProvider
  ) {
  }

  ionViewDidLoad() {
    this.listingSubscription = this.listingsProvider.getRidesUserIsTakingObservable().subscribe(listings => {
      this.listings = listings;
      console.log(this.listings)
      this.listingCount = this.listings.length;
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(RidesImTakingPage)
  }

  userTakingRides() {
    return this.listingCount !== 0
  }

  goToListing(listingIdx) {
    this.navCtrl.push(RideListingPage, { 'listing': this.listings[listingIdx], 'fromMyListings': true });
  }

  ionViewDidLeave() {
    this.listingSubscription.unsubscribe()
  }

  getFormattedDateTime(index) {
    let date = this.listings[index].departureDate
    let time = this.listings[index].departureTime
    let datetime = "" + date + " " + time
    return moment(datetime).format("MMMM Do YYYY, h:mm a")
  }
}