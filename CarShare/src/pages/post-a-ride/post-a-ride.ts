import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { LoggedInProvider } from '../../providers/logged-in/logged-in';


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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public menuCtrl : MenuController, 
    public navMenu : NavigationMenuProvider,
    public loginSystem : LoggedInProvider
  ) {
    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(PostARidePage)
  }

  toggleNav() {
    
  }

}
