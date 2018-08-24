import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { FirestoreListingsProvider } from "../../providers/firestore-listings/firestore-listings";
import { Listing } from '../struct/listing';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { PostARidePage } from '../post-a-ride/post-a-ride';

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
  listingCount: number;
  dataReturned: boolean = false;
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

    });
  }

  ngOnInit() {
    this.listingSubscription = this.listingsProvider.getUserListingsObservable().subscribe(listings => {
      this.listings = listings;
      this.dataReturned = true
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(MyListingsPage)
  }

  userHasListings() {
    console.log(this.listings)
    if (this.listings !== undefined) {
      this.listingCount = this.listings.length;
      return this.listingCount !== 0
    }
    return false;
  }

  goToPostARide() {
    this.navCtrl.push(PostARidePage)
  }

  ngOnDestroy() {
    this.listingSubscription.unsubscribe()
  }
}
