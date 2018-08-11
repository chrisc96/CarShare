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
  @ViewChild('passwordConfirm') passwordConfirm : string = ''
  @ViewChild('firstName') firstName : string = '';
  @ViewChild('lastName') lastName : string = '';
  @ViewChild('mobileNumber') mobileNum : string = '';

  emailIsValid : boolean = true
  emailNotEmpty : boolean = true
  emailIsInvalid : boolean = true

  passwordIsValid : boolean = true
  passwordNotEmpty : boolean = true

  passwordConfirmIsValid : boolean = true
  passwordConfirmNotEmpty : boolean = true
  passwordsDontMatch : boolean = false

  firstNameIsValid : boolean = true
  lastNameIsValid : boolean = true
  mobileNumIsValid : boolean = true

  requestBeingSent : boolean = false;
  requestDidFail : boolean = false;

  emailAlreadyInUse : boolean = false
  passwordWeak : boolean = false;

  whereToGo : any

  // Form validation
  signupForm = this.formBuilder.group({
    emailControl: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
    passwordControl: ['', [Validators.requiredTrue]],
    passwordControlConfirm: ['', [Validators.requiredTrue]],
    firstNameControl : ['', [Validators.requiredTrue]],
    lastNameControl: ['', [Validators.requiredTrue]],
    mobileNumControl: ['', [Validators.requiredTrue]]
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
  }

  trySignup() {
    this.signupButtonPushed = true
    this.beginFormValidation();

    if (this.allFieldsValid()) {
      this.requestBeingSent = true;

      this.loginSystem.signup(this.email, this.password)
      .then( resp => {
        this.requestBeingSent = false;

        this.clearAllFields();
        this.loginSystem.linkUsertoDB(resp)
        this.accountCreatedToast();
      })
      .catch( err => {
        this.requestBeingSent = false;
        this.requestDidFail = true;
        if (err.code === 'auth/email-already-in-use') {
          this.emailAlreadyInUse = true;
        }
        if (err.code === 'auth/weak-password') {
          this.passwordWeak = true;
        }

        this.signupFailedClearFields()
      })
    }
  }

  accountCreatedToast() {
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
  }

  onChange(e) {
    if (this.signupButtonPushed) {
      this.beginFormValidation()
    }
    
    // Means that the last request to firebase failed, but we're changing the value of the 
    // password (after it's been set to '') so remove the text for bad login
    if (this.requestDidFail && this.password !== undefined) {
      this.requestDidFail = false;
      this.emailAlreadyInUse = false;
      this.passwordWeak = false
    }
  }
  
  beginFormValidation() {
    this.beginEmailValidation()
    this.beginPasswordValidation();
    this.beginNameValidation();
    this.beginMobNumValidation();
  }

  beginEmailValidation() {
    // Determine validity
    this.emailIsValid = this.signupForm.controls['emailControl'].valid;
    this.emailNotEmpty = this.email !== undefined && this.email !== '';
    this.emailIsInvalid = this.emailNotEmpty && !this.emailIsValid ? true : false
  }

  beginPasswordValidation() {
    // Determine validity
    this.passwordNotEmpty = this.password !== undefined && this.password !== '';
    this.passwordIsValid = this.passwordNotEmpty;

    this.passwordConfirmNotEmpty = this.passwordConfirm !== undefined && this.passwordConfirm !== '';
    this.passwordConfirmIsValid = this.passwordConfirmNotEmpty;

    this.passwordsDontMatch = this.password !== this.passwordConfirm
  }

  beginNameValidation() {
    this.firstNameIsValid = this.signupForm.get('firstNameControl').valid
    this.lastNameIsValid = this.signupForm.get('lastNameControl').valid
  }

  beginMobNumValidation() {
    this.mobileNumIsValid = this.signupForm.get('mobileNumControl').valid
  }

  allFieldsValid() {
    return this.emailIsValid && this.passwordIsValid && this.passwordConfirmIsValid &&
           !this.passwordsDontMatch;
           // && this.firstNameIsValid && this.lastNameIsValid && 
           // this.mobileNumIsValid;
  }

  clearAllFields() {
    this.email = '';
    this.password = '';
    this.passwordConfirm = '';
    this.firstName = '';
    this.lastName = '';
    this.mobileNum = '';
  }

  // Reasons why firebase might reject the signup
  signupFailedClearFields() {
    if (this.emailAlreadyInUse) {
      this.email = ''
      this.password = ''
      this.passwordConfirm = ''
    }
    else if (this.passwordWeak) {
      this.password = ''
      this.passwordConfirm = ''
    }
  }
}
