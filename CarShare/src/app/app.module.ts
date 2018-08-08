import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { FindARidePage } from "../pages/find-a-ride/find-a-ride";

const firebaseConfig = {
  apiKey: "AIzaSyDGHRJ5SKA-krpmyGzfRAlHPS4yZL2lSqQ",
  authDomain: "swen325carshare.firebaseapp.com",
  databaseURL: "https://swen325carshare.firebaseio.com",
  projectId: "swen325carshare",
  storageBucket: "swen325carshare.appspot.com",
  messagingSenderId: "88701285742"
};

@NgModule({
  declarations: [MyApp, HomePage, LoginPage, SignupPage, FindARidePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, LoginPage, SignupPage, FindARidePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
