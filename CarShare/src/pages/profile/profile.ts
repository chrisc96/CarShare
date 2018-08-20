import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { User } from '../struct/user';
import { Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: User
  editingMode: boolean = false
  editBtnPressed: boolean = false
  requestBeingSent: boolean = false
  @ViewChild('firstName') firstName = '';
  @ViewChild('lastName') lastName = '';
  @ViewChild('contactNum') contactNum = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public navMenu: NavigationMenuProvider, public firestore: FirestoreProvider, public formBuilder: FormBuilder) {
    this.firestore.getUserObservable().subscribe(user => {
      this.user = user;
    })
  }

  editDetailsForm = this.formBuilder.group({
    firstNameControl: ['', []],
    lastNameControl: ['', []],
    contactNumControl: ['', []]
  })

  tryEdit(e) {
    this.editBtnPressed = true;
    this.requestBeingSent = true;

    this.firestore.updateUser(this.firstName, this.lastName, this.contactNum, this.user.uid)
      .then(resp => {
        this.requestBeingSent = false;
        this.editBtnPressed = false;
        this.editingMode = false;
      })
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(ProfilePage)
  }

  editDetails() {
    this.editingMode = true;
  }
}
