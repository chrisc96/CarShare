import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { LoggedInProvider } from '../../providers/logged-in/logged-in';
import { LoginPage } from '../login/login';
import { PostARidePage } from '../post-a-ride/post-a-ride';
import { User } from '../struct/User'

/**
 * Generated class for the MyListingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-listings',
  templateUrl: 'my-listings.html',
})
export class MyListingsPage {

  user: User

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController, 
    public navMenu: NavigationMenuProvider,
    public loginSystem: LoggedInProvider
  ) {

    this.loginSystem.getUserObservable().subscribe(user => {
      this.user = user;
    })
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(MyListingsPage)
  }

  goToPostARide() {
    if (!this.loginSystem.userLoggedIn()) {
      this.navCtrl.push(LoginPage, {'toPage': PostARidePage });
    }
    else {
      this.navCtrl.push(PostARidePage);
    }
  }
}
