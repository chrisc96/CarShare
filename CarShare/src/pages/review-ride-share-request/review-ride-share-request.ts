import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from "../../providers/navigation-menu/navigation-menu";
import { Listing } from '../struct/listing';
import { FirestoreListingsProvider } from '../../providers/firestore-listings/firestore-listings';
import { FirestoreUsersProvider } from '../../providers/firestore-users/firestore-users';
import { User } from '../../../node_modules/firebase';
import { Subscription } from '../../../node_modules/rxjs';


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
    public listingsProvider: FirestoreListingsProvider,
    public usersProvider : FirestoreUsersProvider
  ) {
    this.listingsProvider.getUserListingsObservable().subscribe(listings => {
      this.listings = listings;
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(ReviewRideShareRequestPage)
  }

  acceptShareRequest(i, j) {
    this.listings[i].whosComing.push(this.listings[i].whoWantsToCome[j])
    this.listings[i].whoWantsToCome.splice(j, 1)
    this.listingsProvider.updateRequest(this.listings[i])
  }

  rejectShareRequest() {
    
  }
}
