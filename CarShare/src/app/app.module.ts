import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { FindARidePage } from "../pages/find-a-ride/find-a-ride";
import { RideListingPage } from "../pages/ride-listing/ride-listing";
import { ViewMyRidesPage } from "../pages/view-my-rides/view-my-rides";
import { PostARidePage } from "../pages/post-a-ride/post-a-ride";
import { LoggedInProvider } from '../providers/logged-in/logged-in';
import { NavigationMenuProvider } from '../providers/navigation-menu/navigation-menu';
import { MyListingsPage } from "../pages/my-listings/my-listings";

const firebaseConfig = {
  apiKey: "AIzaSyDGHRJ5SKA-krpmyGzfRAlHPS4yZL2lSqQ",
  authDomain: "swen325carshare.firebaseapp.com",
  databaseURL: "https://swen325carshare.firebaseio.com",
  projectId: "swen325carshare",
  storageBucket: "swen325carshare.appspot.com",
  messagingSenderId: "88701285742"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    FindARidePage,
    RideListingPage,
    ViewMyRidesPage,
    PostARidePage,
    MyListingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features],
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    FindARidePage,
    RideListingPage,
    ViewMyRidesPage,
    PostARidePage,
    MyListingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoggedInProvider,
    AngularFireAuth,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NavigationMenuProvider,
  ]
})
export class AppModule { }
