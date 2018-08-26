import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { FirestoreListingsProvider } from "../../providers/firestore-listings/firestore-listings";
import { Listing } from '../struct/listing';
import { Subscription } from 'rxjs';
import { PostARidePage } from '../post-a-ride/post-a-ride';
import * as moment from 'moment';
import { RideListingPage } from '../ride-listing/ride-listing';

/**
 * Generated class for the MyListingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-listings',
  templateUrl: 'my-listings.html',
})
export class MyListingsPage {

  listings: Listing[];
  listingCount: number = 0;
  listingSubscription: Subscription

  formattedDateTime: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public listingsProvider: FirestoreListingsProvider
  ) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(MyListingsPage)
  }

  ionViewDidLoad() {
    this.listingSubscription = this.listingsProvider.getUserListingsObservable().subscribe(listings => {
      this.listings = listings;
      this.listingCount = this.listings.length;
    });
  }

  ionViewDidLeave() {
    this.listingSubscription.unsubscribe()
  }

  userHasListings() {
    return this.listingCount !== 0
  }

  goToPostARide() {
    // If we're on this page, we're logged in, so don't need to check
    this.navCtrl.push(PostARidePage)
  }

  goToListingDetails(index) {
    this.navCtrl.push(RideListingPage, {"listing": this.listings[index], 'fromMyListings': true})
  }

  getFormattedDateTime(index) {
    let date = this.listings[index].departureDate
    let time = this.listings[index].departureTime
    let datetime = "" + date + " " + time
    return moment(datetime).format("MMMM Do YYYY, h:mm a")
  }

  actionsToTake(index) {
    let listing = this.listings[index];
    return listing.whoWantsToCome.length !== 0
  }
}
