import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { FirestoreListingsProvider } from "../../providers/firestore-listings/firestore-listings";
import { Listing } from '../struct/listing';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { PostARidePage } from '../post-a-ride/post-a-ride';
import { of } from 'rxjs';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public listingsProvider: FirestoreListingsProvider
  ) {
    this.listingsProvider.getUserListingsObservable().subscribe(listings => {
      this.listings = listings;
      this.listingCount = this.listings.length;
    });
    console.log(this.listings)
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(MyListingsPage)
  }

  userHasListings() {
    return this.listingCount !== 0
  }

  goToPostARide() {
    this.navCtrl.push(PostARidePage)
  }
}
