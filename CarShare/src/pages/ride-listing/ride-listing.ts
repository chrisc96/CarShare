import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { Listing } from '../struct/listing';
import { Observable } from 'rxjs/Observable';

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

  listings: Observable<Listing[]>
  listingIdx : number

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl : MenuController, public navMenu : NavigationMenuProvider) {
    console.log(navParams.data);
    this.listings = navParams.get('listingObs');
    this.listingIdx = navParams.get('listingIndex')
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(RideListingPage)
  }

  goBack() {
    this.navCtrl.pop();
  }

  requestToShare() {
    
  }
}
