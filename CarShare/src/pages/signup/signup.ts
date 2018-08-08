import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  @ViewChild('email') email : string;
  @ViewChild('password') password : string;

  constructor(private fireAuth : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

  }

  signUp() {
    this.fireAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
