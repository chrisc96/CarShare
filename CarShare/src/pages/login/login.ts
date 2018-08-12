import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, MenuController } from "ionic-angular";
import { SignupPage } from "../signup/signup";
import { AngularFireAuth } from 'angularfire2/auth'
import { Validators, FormBuilder } from '@angular/forms';
import { LoggedInProvider } from '../../providers/logged-in/logged-in'


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

  pageToGoTo : any;

  @ViewChild('email') email = '';
  @ViewChild('password') password = '';

  loginButtonPressed : boolean = false;

  emailIsValid : boolean = true
  emailNotEmpty : boolean = true
  emailIsInvalid : boolean = true

  passwordIsValid : boolean = true
  passwordNotEmpty : boolean = true

  requestBeingSent : boolean = false;
  requestDidFail : boolean = false;

  loginForm = this.formBuilder.group({
    emailControl: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
    passwordControl: ['', [Validators.requiredTrue]]
  })

  constructor(
    public formBuilder : FormBuilder,
    public fire: AngularFireAuth, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loginSystem : LoggedInProvider,
    public menuCtrl : MenuController
  ) {
    this.pageToGoTo = this.navParams.data.toPage;
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'navMenu');
  }

  goToSignupPage() {
    this.navCtrl.push(SignupPage, {'pageToGo': this.pageToGoTo});
  }

  tryLogin() {
    this.loginButtonPressed = true;
    this.beginFormValidation()

    if (this.emailIsValid && this.passwordIsValid) {
      this.requestBeingSent = true;
      
      this.loginSystem.login(this.email, this.password)
      .then( resp => {
        this.requestBeingSent = false; // finished sending request, set to false
        this.password = ''
        this.navCtrl.push(this.pageToGoTo);
      })
      .catch( err => {
        this.requestBeingSent = false;
        this.requestDidFail = true;
        
        this.password = ''; // User probably got password wrong, empty
      });
    }
  }

  onChange(e) {
    if (this.loginButtonPressed) {
      this.beginFormValidation()
    }

    // Means that the last request failed, but we're changing the value of the 
    // password (after it's been set to '') so remove the text for bad login
    if (this.requestDidFail && this.password !== undefined) {
      this.requestDidFail = false;
    }
  }

  beginFormValidation() {
    this.beginEmailValidation()
    this.beginPasswordValidation();
  }

  beginEmailValidation() {
    // Reset fields
    this.emailNotEmpty = false;
    this.emailIsInvalid = false;
    this.emailIsValid = false;

    // Determine validity
    this.emailIsValid = this.loginForm.controls['emailControl'].valid;
    this.emailNotEmpty = this.email !== undefined && this.email !== '';
    this.emailIsInvalid = this.emailNotEmpty && !this.emailIsValid ? true : false
  }

  beginPasswordValidation() {
    // Reset fields
    this.passwordIsValid = false;
    this.passwordNotEmpty = false;

    // Determine validity
    this.passwordNotEmpty = this.password !== undefined && this.password !== '';
    this.passwordIsValid = this.passwordNotEmpty;
  }
}