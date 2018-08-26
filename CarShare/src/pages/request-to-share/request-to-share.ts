import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Listing } from '../struct/listing';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { FirestoreUsersProvider } from '../../providers/firestore-users/firestore-users';
import { User } from '../struct/user';
import { FirestoreListingsProvider } from '../../providers/firestore-listings/firestore-listings';

/**
 * Generated class for the RequestToSharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-to-share',
  templateUrl: 'request-to-share.html',
})
export class RequestToSharePage {

  listing : Listing
  user : User
  successfulRequest : boolean
  failedRequest : boolean

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl : MenuController,
    public navMenu : NavigationMenuProvider,
    public usersProvider : FirestoreUsersProvider,
    public listingsProvider : FirestoreListingsProvider
) {
  this.listing = navParams.data.listing;
  this.user = this.usersProvider.getUser();
  this.successfulRequest = false;
  this.failedRequest = false;

  this.addShareRequest();
}

  addShareRequest() {
    if (!this.user || !this.listing) return; // Shouldn't ever fire, we should be logged in at this point

    this.listing.whoWantsToCome.push(Object.assign({}, this.user))
    this.listingsProvider.addRequest(this.listing).then(resp => {
      this.successfulRequest = true;
    }).catch(err => {
      this.failedRequest = true;
    });
  }
}
