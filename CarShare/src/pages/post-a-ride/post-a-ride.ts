/// <reference types="@types/googlemaps" />

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, TextInput } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { LoggedInProvider } from '../../providers/logged-in/logged-in';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Car } from '../struct/Car'
import { Validators, FormBuilder } from '@angular/forms';

import { NgZone, QueryList, ViewChildren } from '@angular/core';
import { MapsAPILoader } from '@agm/core';


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

  selectedCar: String;
  departureDate: String;
  departureTime: String;
  noSeats : number;
  storageAvail : boolean = false;

  cars: Car[]
  carCount: number = 0
  dataReturned: boolean = false

  postRideForm = this.formBuilder.group({
    carControl: ['', [Validators.required]],
    meetingPlaceControl: ['', [Validators.required]],
    destPlaceControl: ['', [Validators.required]],
    dateControl: ['', [Validators.required]],
    timeControl: ['', [Validators.required]],
    seatsControl: ['', [Validators.required]],
    storageAvailable: ['', [Validators.required]],
  })

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public loginSystem: LoggedInProvider,
    public afs: FirestoreProvider,
    public formBuilder : FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {

    this.afs.carsByUserIDObservable.subscribe(car => {
      this.cars = car;
      this.carCount = this.cars.length
      this.dataReturned = true
    })
  }


  ionViewDidLoad() {
    this.meetingPlace.changes.subscribe((comps: QueryList<TextInput>) => {
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(comps.first._elementRef.nativeElement.getElementsByTagName('input')[0], {
          types: ['address']
        });

        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            console.log('here')
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
    });

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
  }

  tryPost() {
    if (this.allFieldsValid()) {
      console.log('all valid')
      this.sanitiseInputs()
      
    }
  }

  allFieldsValid() {
    // console.log('car', this.postRideForm.controls['carControl'].valid, 'value: ', this.postRideForm.controls['carControl'].value)
    // console.log('meeting place', this.postRideForm.controls['meetingPlaceControl'].valid, 'value: ', this.postRideForm.controls['meetingPlaceControl'].value)
    // console.log('dest place', this.postRideForm.controls['destPlaceControl'].valid, 'value: ', this.postRideForm.controls['destPlaceControl'].value)
    // console.log('date: ', this.postRideForm.controls['dateControl'].valid, 'value: ', this.postRideForm.controls['dateControl'].value)
    // console.log('time: ', this.postRideForm.controls['timeControl'].valid, 'value: ', this.postRideForm.controls['timeControl'].value)
    // console.log('noSeats: ', this.postRideForm.controls['seatsControl'].valid, 'value: ', this.postRideForm.controls['seatsControl'].value)
    // console.log('storage: ', this.postRideForm.controls['storageAvailable'].valid, 'value: ', this.postRideForm.controls['storageAvailable'].value)

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

  goToAddACarPage() {

  }

}
