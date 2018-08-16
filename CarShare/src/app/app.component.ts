import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { PostARidePage } from "../pages/post-a-ride/post-a-ride";
import { RideListingPage } from "../pages/ride-listing/ride-listing";
import { NavigationMenuProvider } from "../providers/navigation-menu/navigation-menu";
import { FindARidePage } from "../pages/find-a-ride/find-a-ride";
import { MyListingsPage } from "../pages/my-listings/my-listings";
import { LoggedInProvider } from "../providers/logged-in/logged-in";

import { User } from '../pages/struct/User'

@Component({
  templateUrl: "app.html"
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  user: User;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, requiresLogin: boolean}>;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public navMenu : NavigationMenuProvider,
    public loginSystem: LoggedInProvider
  ) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Homepage', component: HomePage, requiresLogin: false},
      { title: 'Find a ride', component: FindARidePage, requiresLogin: false},
      { title: 'Post a ride', component: PostARidePage, requiresLogin: true},
      { title: 'My listings', component: MyListingsPage, requiresLogin: true}
    ]

    this.loginSystem.getUserObservable().subscribe(user => {
      this.user = user;
      console.log('fromOtherPage', this.user)
    })
  }

  openPage(page) {
    this.pages.forEach(element => {
      if (page.component === element.component) {
        // we need to check if the user is logged in
        // if not, require a login and then go to the page first
        if (element.requiresLogin && !this.loginSystem.userLoggedIn()) {
          this.nav.push(LoginPage, { 'toPage': page.component });
        }
        else {
          this.nav.setRoot(page.component);
        }
      }
    });
  }

  checkActive(page) {
    return page.component == this.navMenu.activePage;
  }

  checkLoggedIn() {
    return this.loginSystem.userLoggedIn()
  }

  getName() {
    // console.log(this.loginSystem.getUser())
    return this.loginSystem.getUser().firstName
  }
}
