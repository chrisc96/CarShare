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

  loginForm : FormGroup;

  emailIsValid :boolean = true
  emailNotEmpty : boolean = true
  emailIsInvalid : boolean = true

  passwordIsValid = true
  passwordNotEmpty : boolean = true

  constructor(public formBuilder : FormBuilder, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.loginForm = this.formBuilder.group({
      emailControl: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      passwordControl: ['', [Validators.requiredTrue]]
    })
  }

  goToSignupPage() {
    this.navCtrl.push(SignupPage);
  }

  tryLogin() {
    this.determineValidity();


    if (this.emailIsValid && this.passwordIsValid) {
      this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
      .then( resp => {
        console.log('worked')
      })
      .catch( err => {
        console.log('didn\'t work');
      });
    }
  }

  determineValidity() {
    // Reset values when clicking submit
    this.emailNotEmpty, this.emailIsInvalid, this.emailIsValid = false;
    this.passwordIsValid, this.passwordNotEmpty = false;


    this.emailIsValid = this.loginForm.controls['emailControl'].valid;


    // const emailCtrl = this.loginForm.value.emailControl;
    // const passwordCtrl = this.loginForm.value.passwordControl;
    
    // this.emailIsValid = emailCtrl.valid;
    // console.log('email is valid', this.emailIsInvalid)
    // this.passwordIsValid = passwordCtrl.valid;
    // console.log('password is valid', this.passwordIsValid)

    // // Determine specifically what's wrong
    // if (!this.emailIsValid) {
    //   this.emailNotEmpty = emailCtrl.value !== ''
    //   console.log('email not empty check', this.passwordNotEmpty)
    //   // If the email isn't empty, then the email must be invalid
    //   this.emailIsValid = this.emailNotEmpty ? false : true
    //   console.log('email valid check', this.passwordNotEmpty)
    // }

    // if (!this.passwordIsValid) {
    //   this.passwordNotEmpty = passwordCtrl.value !== ''
    //   console.log('pw not empty check', this.passwordNotEmpty)
    // }

  }
}