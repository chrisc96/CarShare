import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { User } from '../struct/user'

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: User

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public navMenu: NavigationMenuProvider, public firestore: FirestoreProvider) {
    this.firestore.getUserObservable().subscribe(user => {
      this.user = user;
    })
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(ProfilePage)
  }
}
