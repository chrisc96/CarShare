import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, MenuController } from "ionic-angular";
import { RideListingPage } from "../ride-listing/ride-listing";
import { NavigationMenuProvider } from "../../providers/navigation-menu/navigation-menu";
import 'rxjs/add/operator/map'
import { Listing } from '../struct/listing'
import { FirestoreProvider } from "../../providers/firestore/firestore";

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

  listings: Listing[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public firestore: FirestoreProvider
  ) {
    this.firestore.getListingsObservable().subscribe(listing => {
        this.listings = listing;
    })
  }

  goToMyListings() {
    this.navCtrl.push(RideListingPage);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(FindARidePage)
  }
}