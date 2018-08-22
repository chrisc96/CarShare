import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { FindARidePage } from "../find-a-ride/find-a-ride";
import { PostARidePage } from "../post-a-ride/post-a-ride"
import { FirestoreUsersProvider } from "../../providers/firestore-users/firestore-users";
import { MenuController } from 'ionic-angular';
import { MyListingsPage } from "../my-listings/my-listings";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, public usersProvider: FirestoreUsersProvider, public menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'navMenu');
  }

  goToFindARide() {
    this.navCtrl.push(FindARidePage);
  }

  goToPostARide() {
    if (!this.usersProvider.userLoggedIn()) {
      this.navCtrl.push(LoginPage, { 'toPage': PostARidePage });
    }
    else {
      this.navCtrl.push(PostARidePage);
    }
  }

  goToMyListings() {
    if (!this.usersProvider.userLoggedIn()) {
      this.navCtrl.push(LoginPage, { 'toPage': MyListingsPage });
    }
    else {
      this.navCtrl.push(MyListingsPage);
    }
  }
}
