import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { FindARidePage } from "../find-a-ride/find-a-ride";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  goToFindARide() {
    this.navCtrl.push(FindARidePage);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }
}
