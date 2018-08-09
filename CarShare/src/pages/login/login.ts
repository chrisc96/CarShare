import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SignupPage } from "../signup/signup";
import { AngularFireAuth } from 'angularfire2/auth'
import { FormControl, FormGroup, Validators, FormBuilder, EmailValidator } from '@angular/forms';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

  @ViewChild('email') email = '';
  @ViewChild('password') password = '';
  

  pageToGoTo : any;
  requestBeingSent : boolean = false;
  requestFailed : boolean = false;

  loginPushed : boolean = false;

  loginForm = this.formBuilder.group({
    emailControl: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
    passwordControl: ['', [Validators.requiredTrue]]
  })

  emailIsValid :boolean = true
  emailNotEmpty : boolean = true
  emailIsInvalid : boolean = true

  passwordIsValid = true
  passwordNotEmpty : boolean = true

  constructor(public formBuilder : FormBuilder, public fire: AngularFireAuth,
              public navCtrl: NavController, public navParams: NavParams) {
                this.pageToGoTo = this.navParams.data.toPage;
                // post a ride
                // view my rides
  }

  goToSignupPage() {
    this.navCtrl.push(SignupPage);
  }

  tryLogin() {
    this.determineValidity();

    if (this.emailIsValid && this.passwordIsValid) {
      this.requestBeingSent = true;
      this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
      // change login button icon to be a loading icon and non-clickable
      .then( resp => {
        this.requestBeingSent = false;
        this.password = ''
        this.navCtrl.push(this.pageToGoTo);
      })
      .catch( err => {
        this.requestBeingSent = false;
        this.requestFailed = true;
        this.password = '';
      });
    }
  }

  onChange(e) {
    if (this.loginPushed) {
      this.determineValidity()
    }

    if (this.requestFailed && this.password !== undefined) {
      this.requestFailed = false;
    }
  }

  determineValidity() {
    // Reset values when clicking submit
    this.loginPushed = true;

    this.emailNotEmpty = false;
    this.emailIsInvalid = false;
    this.emailIsValid = false;
    this.passwordIsValid = false;
    this.passwordNotEmpty = false;


    this.emailIsValid = this.loginForm.controls['emailControl'].valid;
    this.emailNotEmpty = this.email !== undefined && this.email !== '';
    this.emailIsInvalid = this.emailNotEmpty && !this.emailIsValid ? true : false

    this.passwordNotEmpty = this.password !== undefined && this.password !== '';
    this.passwordIsValid = this.passwordNotEmpty;
  }
}