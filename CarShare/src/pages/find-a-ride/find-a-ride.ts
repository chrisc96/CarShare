import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, MenuController } from "ionic-angular";
import { RideListingPage } from "../ride-listing/ride-listing";
import { NavigationMenuProvider } from "../../providers/navigation-menu/navigation-menu";
import 'rxjs/add/operator/map';
import { Listing } from '../struct/listing';
import { FirestoreListingsProvider } from "../../providers/firestore-listings/firestore-listings";
import { Subscription } from "rxjs";
import { PostARidePage } from "../post-a-ride/post-a-ride";
import * as moment from 'moment';
import { FirestoreUsersProvider } from "../../providers/firestore-users/firestore-users";
import { LoginPage } from "../login/login";

/**
 * Generated class for the FindARidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-find-a-ride",
  templateUrl: "find-a-ride.html"
})
export class FindARidePage {

  listings: Listing[];
  listingCount: number = 0;
  listingSubscription: Subscription

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public listingsProvider: FirestoreListingsProvider,
    public userProvider : FirestoreUsersProvider
  ) {
  }

  ionViewDidLoad() {
    this.listingSubscription = this.listingsProvider.getAllListingsObservable().subscribe(listings => {
      this.listings = listings;
      this.listingCount = this.listings.length;
    });
  }

  goToListing(listingIdx) {
    this.navCtrl.push(RideListingPage, {'listing': this.listings[listingIdx], 'fromMyListings': false});
  }
 
  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(FindARidePage)
  }

  ionViewDidLeave() {
    this.listingSubscription.unsubscribe()
  }

  userHasListings() {
    return this.listingCount !== 0
  }

  goToPostARide() {
    if (this.userProvider.userLoggedIn()) {
      this.navCtrl.push(PostARidePage);
    }
    else {
      this.navCtrl.push(LoginPage, {'toPage': PostARidePage})
    }
  }

  getFormattedDateTime(index) {
    let date = this.listings[index].departureDate
    let time = this.listings[index].departureTime
    let datetime = "" + date + " " + time
    return moment(datetime).format("MMMM Do YYYY, h:mm a")
  }
}