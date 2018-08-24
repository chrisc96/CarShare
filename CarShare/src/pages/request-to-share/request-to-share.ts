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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl : MenuController,
    public navMenu : NavigationMenuProvider,
    public usersProvider : FirestoreUsersProvider,
    public listingsProvider : FirestoreListingsProvider
) {
  this.listing = navParams.get('listing')
  this.user = this.usersProvider.getUser()
  this.addShareRequest()
}

  addShareRequest() {
    if (!this.user || !this.listing) return;

    if(!this.requesterOwnsListing() && !this.alreadyRequested()) {
      this.listingsProvider.addRequest(this.listing)
    }
  }

  requesterOwnsListing() {
    return this.user.uid === this.listing.userDocumentID
  }

  alreadyRequested() {
    this.listing.whoWantsToCome.forEach(userId => {
      if (userId == this.user.uid) {
        return true;
      }
    });

    this.listing.whosComing.forEach(userId => {
      if (userId == this.user.uid) {
        return true;
      }
    });

    return false;
  }
}
