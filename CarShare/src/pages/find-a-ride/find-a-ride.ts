import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, MenuController } from "ionic-angular";
import { RideListingPage } from "../ride-listing/ride-listing";
import { NavigationMenuProvider } from "../../providers/navigation-menu/navigation-menu";
import { AngularFirestore, AngularFirestoreDocument, AngularFireStoreCollection } from 'angularfire2/firestore';
import { snapshotChanges } from "../../../node_modules/angularfire2/database";
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'


/**
 * Generated class for the FindARidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface Listing {

}

@IonicPage()
@Component({
  selector: "page-find-a-ride",
  templateUrl: "find-a-ride.html"
})
export class FindARidePage {

  listingsCollection: AngularFireStoreCollection<Listing>
  listings: Observable<Listing[]> = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public afs: AngularFirestore
  ) {
    this.listingsCollection = this.afs.collection('listings')
    // this.listings = 
    console.log(this.listingsCollection.snapshotChanges().subscribe(e => {
      e.forEach(elem => {
        console.log(elem.payload.doc.data());
      });
    })
    );
  }

  goToMyListings() {
    this.navCtrl.push(RideListingPage);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(FindARidePage)
  }
}
