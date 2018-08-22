import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { User } from '../struct/user';
import { FormBuilder } from '@angular/forms';
import { FirestoreUsersProvider } from '../../providers/firestore-users/firestore-users';
import { FirestoreListingsProvider } from '../../providers/firestore-listings/firestore-listings';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public usersProvider: FirestoreUsersProvider,
    public listingsProvider: FirestoreListingsProvider,
    public formBuilder: FormBuilder,
    private toastCtrl: ToastController
  ) {

    this.usersProvider.getUserObservable().subscribe(user => {
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

    this.listingsProvider.updateUser(this.firstName, this.lastName, this.contactNum, this.user.uid)
      .then(resp => {
        this.requestBeingSent = false;
        this.editBtnPressed = false;
        this.editingMode = false;
        this.userCreatedToast();
      })
  }

  userCreatedToast() {
    let toast = this.toastCtrl.create({
      message: 'Your profile has been updated!',
      duration: 1000,
      position: 'top'
    });

    toast.present();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(ProfilePage)
  }

  editDetails() {
    this.editingMode = true;
  }
}
