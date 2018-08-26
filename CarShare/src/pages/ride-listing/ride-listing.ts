import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { Listing } from '../struct/listing';
import { RequestToSharePage } from '../request-to-share/request-to-share';
import { FirestoreUsersProvider } from '../../providers/firestore-users/firestore-users';
import { User } from '../struct/user';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RideListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ride-listing',
  templateUrl: 'ride-listing.html',
})
export class RideListingPage {

  listing: Listing
  user: User
  dontShowRequestToShare : boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl : MenuController,
              public navMenu : NavigationMenuProvider,
              public usersProvider : FirestoreUsersProvider
  ) {
    this.listing = navParams.get('listing');
    this.dontShowRequestToShare = navParams.get('fromMyListings');
    this.user = usersProvider.getUser();
    console.log(this.dontShowRequestToShare)
    console.log('user', this.user)
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(RideListingPage)
  }

  goBack() {
    this.navCtrl.pop();
  }

  requestToShare() {
    if (!this.user) {
      this.navCtrl.push(LoginPage, {'toPage' : RequestToSharePage, 'dataToPass' : this.listing})
    }
    else {
      this.navCtrl.push(RequestToSharePage, {'listing': this.listing});
    }
  }


  allowedToRequest() {
    return !this.requesterOwnsListing() && !this.alreadyRequested()
  }

  requesterOwnsListing() {
    if (!this.user) {
      return false;
    }
    else {
      this.user.uid === this.listing.userDocumentID;
    }
  }

  alreadyRequested() {
    if (!this.user) {
      return false;
    }
    else {
      for (var i = 0; i < this.listing.whoWantsToCome.length; i++) {
        if (this.listing.whoWantsToCome[i].uid == this.user.uid) {
          return true;
        }
      }
  
      for (var j = 0; j < this.listing.whosComing.length; j++) {
        if (this.listing.whosComing[j].uid == this.user.uid) {
          return true;
        }
      }
    }
  }
}
