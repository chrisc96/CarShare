import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';
import { Validators, FormBuilder } from '@angular/forms';
import { LoginPage } from "../login/login";
import { LoggedInProvider } from '../../providers/logged-in/logged-in'
import { ToastController } from 'ionic-angular';

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

  signupButtonPushed : boolean = false;

  @ViewChild('email') email : string = '';
  @ViewChild('password') password : string = '';

  emailIsValid : boolean = true
  emailNotEmpty : boolean = true
  emailIsInvalid : boolean = true

  passwordIsValid : boolean = true
  passwordNotEmpty : boolean = true

  requestBeingSent : boolean = false;
  requestDidFail : boolean = false;

  emailAlreadyInUse : boolean = false

  whereToGo : any

  // Form validation
  signupForm = this.formBuilder.group({
    emailControl: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
    passwordControl: ['', [Validators.requiredTrue]]
  })

  constructor(
    private fireAuth : AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder : FormBuilder,
    public loginSystem : LoggedInProvider,
    private toastCtrl: ToastController
  ) {
    this.whereToGo = navParams.data.pageToGo;
    console.log(this.whereToGo)
  }

  trySignup() {
    this.signupButtonPushed = true
    this.beginFormValidation();

    if (this.allFieldsValid()) {
      this.requestBeingSent = true;

      this.loginSystem.signup(this.email, this.password)
      .then( resp => {
        this.clearAllFields();
        this.requestBeingSent = false;

        // Show account created successfully
        let toast = this.toastCtrl.create({
          message: 'Your account was created successfully',
          duration: 1000,
          position: 'top'
        });
      
        toast.onDidDismiss(() => {
          // Go back to Login page to login with new credentials
          this.navCtrl.push(this.whereToGo)
            .then(() => {
              const index = this.navCtrl.getActive().index;
              this.navCtrl.remove(index - 2, index - 1); // Removes the login and signup page
            });
        })

        toast.present();
    })
      .catch( err => {
        this.requestBeingSent = false;
        this.requestDidFail = true;
        if (err.code === 'auth/email-already-in-use') {
          this.emailAlreadyInUse = true;
        }

        this.signupFailedClearFields()
      });
    }
  }

  onChange(e) {
    if (this.signupButtonPushed) {
      this.beginFormValidation()
    }
    
    // Means that the last request failed, but we're changing the value of the 
    // password (after it's been set to '') so remove the text for bad login
    if (this.requestDidFail && this.password !== undefined) {
      this.requestDidFail = false;
      this.emailAlreadyInUse = false;
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
    this.emailIsValid = this.signupForm.controls['emailControl'].valid;
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

  allFieldsValid() {
    return this.emailIsValid && this.passwordIsValid
    // Add more here
  }

  clearAllFields() {
    this.email = '';
    this.password = '';
  }

  signupFailedClearFields() {
    if (this.emailAlreadyInUse) {
      this.password = ''
      // Add more here
    }
  }
}
