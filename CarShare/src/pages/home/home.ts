import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { FindARidePage } from "../find-a-ride/find-a-ride";
import { ViewMyRidesPage } from "../view-my-rides/view-my-rides";
import { PostARidePage } from "../post-a-ride/post-a-ride"
import { LoggedInProvider } from "../../providers/logged-in/logged-in";
import { MenuController } from 'ionic-angular';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, public loginSystem : LoggedInProvider, public menuCtrl : MenuController) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'navMenu');
  }

  goToFindARide() {
    this.navCtrl.push(FindARidePage);
  }

  goToPostARide() {
    if (!this.loginSystem.userLoggedIn()) {
      this.navCtrl.push(LoginPage, {'toPage': PostARidePage});
    }
    else {
      this.navCtrl.push(PostARidePage);
    }
  }

  goToViewMyRides() {
    if (!this.loginSystem.userLoggedIn()) {
      this.navCtrl.push(LoginPage, {'toPage': ViewMyRidesPage});
    }
    else {
      this.navCtrl.push(ViewMyRidesPage);
    }
  }
}
