/// <reference types="@types/googlemaps" />

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, TextInput, ToastController } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { FirestoreUsersProvider } from "../../providers/firestore-users/firestore-users";
import { Car } from '../struct/car'
import { Validators, FormBuilder } from '@angular/forms';
import { NgZone, QueryList, ViewChildren } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { MyListingsPage } from '../my-listings/my-listings';
import { AddCarToProfilePage } from '../add-car-to-profile/add-car-to-profile';
import { FirestoreCarsProvider } from '../../providers/firestore-cars/firestore-cars';
import { FirestoreListingsProvider } from '../../providers/firestore-listings/firestore-listings';
import { Subscription } from '../../../node_modules/rxjs';


/**
 * Generated class for the PostARidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-a-ride',
  templateUrl: 'post-a-ride.html',
})
export class PostARidePage {

  @ViewChildren('meetingPlace') meetingPlace: QueryList<TextInput>;
  @ViewChildren('destPlace') destinationPlace: QueryList<TextInput>;
  meetingPlaceValue: TextInput
  destinationPlaceValue: TextInput

  departureDate: String;
  departureTime: String;
  noSeats: number;
  storageAvail: boolean = false;

  carIndex: number = -1;
  cars: Car[]
  carCount: number = 0

  dataReturned: boolean = false;

  requestBeingSent: boolean = false
  postBtnPressed: boolean = false

  postRideForm = this.formBuilder.group({
    carControl: ['', [Validators.required]],
    meetingPlaceControl: ['', [Validators.required]],
    destPlaceControl: ['', [Validators.required]],
    dateControl: ['', [Validators.required]],
    timeControl: ['', [Validators.required]],
    seatsControl: ['', [Validators.required]],
    storageAvailable: ['', [Validators.required]],
  })

  carSubscription : Subscription

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public usersProvider: FirestoreUsersProvider,
    public carsProvider : FirestoreCarsProvider,
    public listingsProvider: FirestoreListingsProvider,
    public formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) {

  }

  ionViewDidLoad() {
    this.carSubscription = this.carsProvider.getCarsByUIDObservable().subscribe(car => {
      this.cars = car;
      this.carCount = this.cars.length
      this.dataReturned = true
      this.setupAutocompleteForMeeting()
      this.setupAutocompleteForDest()
    })
  }

  setupAutocompleteForMeeting() {
    this.meetingPlace.changes.subscribe((comps: QueryList<TextInput>) => {
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(comps.first._elementRef.nativeElement.getElementsByTagName('input')[0], {
          types: ['address']
        });

        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
              return
            }
            else {
              this.meetingPlace.first.value = place.formatted_address
            }
          })
        })
      })
    })
  }

  setupAutocompleteForDest() {
    this.destinationPlace.changes.subscribe((comps: QueryList<TextInput>) => {
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(comps.first._elementRef.nativeElement.getElementsByTagName('input')[0], {
          types: ['address']
        });

        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
              return
            }
            else {
              this.destinationPlace.first.value = place.formatted_address
            }
          })
        })
      })
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'navMenu');
    this.navMenu.setActivePage(PostARidePage)
  }

  userHasNoCars() {
    if (this.cars) {
      return this.carCount == 0
    }
    return false;
  }

  tryPost(e) {
    this.postBtnPressed = true
    if (this.allFieldsValid()) {
      this.requestBeingSent = true
      this.sanitiseInputs()

      let car: Car = this.cars[this.carIndex]
      let from: String = this.meetingPlace.first.value;
      let to: String = this.destinationPlace.first.value;
      this.listingsProvider.createListing(car, this.departureDate, this.departureTime, this.noSeats, this.storageAvail, from, to)
        .then(resp => {
          this.requestBeingSent = false
          this.postBtnPressed = false

          this.clearFields();
          this.listingCreatedToast();
        })
        .catch(err => {
          // Figure this out, what can go wrong?
        })
    }
  }

  allFieldsValid() {
    return this.postRideForm.controls['carControl'].valid &&
      this.postRideForm.controls['meetingPlaceControl'].valid &&
      this.postRideForm.controls['destPlaceControl'].valid &&
      this.postRideForm.controls['dateControl'].valid &&
      this.postRideForm.controls['timeControl'].valid &&
      this.postRideForm.controls['seatsControl'].valid &&
      this.postRideForm.controls['storageAvailable'].valid
  }

  sanitiseInputs() {
    this.postRideForm.controls['carControl'].setValue(this.postRideForm.controls['carControl'].value.trim())
  }

  clearFields() {
    this.postRideForm.controls['carControl'].setValue(undefined);
    this.carIndex = -1;
    this.noSeats = null
    this.storageAvail = false
    this.departureDate = null
    this.departureTime = null
    this.meetingPlace.first.value = ''
    this.destinationPlace.first.value = ''
  }

  listingCreatedToast() {
    // Show account created successfully
    let toast = this.toastCtrl.create({
      message: 'Your ride listing has been posted!',
      duration: 1000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      // Go back to Login page to login with new credentials
      this.navCtrl.push(MyListingsPage)
    })

    toast.present();
  }

  onChange(e) {
    if (e.toString().trim() === 'Add new car') {
      this.goToAddACarPage();
    }
  }

  goToAddACarPage() {
    this.navCtrl.push(AddCarToProfilePage, { toPage: PostARidePage })
  }

  ionViewDidLeave() {
    this.carSubscription.unsubscribe()
  }
}
