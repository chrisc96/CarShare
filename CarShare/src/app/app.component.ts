import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { PostARidePage } from "../pages/post-a-ride/post-a-ride";
import { RideListingPage } from "../pages/ride-listing/ride-listing";
import { NavigationMenuProvider } from "../providers/navigation-menu/navigation-menu";

@Component({
  templateUrl: "app.html"
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public navMenu : NavigationMenuProvider
  ) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Post a listing', component: PostARidePage},
      { title: 'My listings', component: RideListingPage}
    ]
  }

  openPage(page) {
    this.navMenu.setActivePage(page);
    this.nav.setRoot(page.component);
  }

  checkActive(page) {
    return page.component == this.navMenu.activePage;
  }
}
