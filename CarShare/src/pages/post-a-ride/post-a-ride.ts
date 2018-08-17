import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { LoggedInProvider } from '../../providers/logged-in/logged-in';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { User } from '../struct/User'
import { Car } from '../struct/Car'


/**
 * Generated class for the PostARidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-a-ride',
  templateUrl: 'post-a-ride.html',
})
export class PostARidePage {

  cars: Car[]
  carCount: number = 0
  dataReturned : boolean = false

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public loginSystem: LoggedInProvider,
    public afs: FirestoreProvider,
  ) {

    this.afs.carsByUserIDObservable.subscribe(car => {
      this.cars = car;
      this.carCount = this.cars.length
      this.dataReturned = true
    })
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(PostARidePage)
  }

  userHasNoCars() {
    if (this.cars) {
      return this.carCount == 0
    }
  }

  goToAddACarPage() {

  }

}
