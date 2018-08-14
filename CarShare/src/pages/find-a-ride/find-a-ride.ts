import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, MenuController } from "ionic-angular";
import { RideListingPage } from "../ride-listing/ride-listing";
import { NavigationMenuProvider } from "../../providers/navigation-menu/navigation-menu";
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { snapshotChanges } from "../../../node_modules/angularfire2/database";
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { Listing } from '../listing'

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

  listingsCollection: Observable<Listing[]>
  listings: Listing[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public afs: AngularFirestore
  ) {
    this.listingsCollection = this.afs.collection('listings').snapshotChanges().map(
      changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Listing;
          return data;
        })
      }
    )
    this.listingsCollection.subscribe(
      (listing:Listing[]) => {
        this.listings = listing;
      }
    )
  }

  goToMyListings() {
    this.navCtrl.push(RideListingPage);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(FindARidePage)
  }
}
