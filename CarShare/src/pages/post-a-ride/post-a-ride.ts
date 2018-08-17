/// <reference types="@types/googlemaps" />

import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, IonicTapInput, TextInput } from 'ionic-angular';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { LoggedInProvider } from '../../providers/logged-in/logged-in';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { User } from '../struct/User'
import { Car } from '../struct/Car'

import { ElementRef, NgZone, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Input } from '../../../node_modules/@angular/compiler/src/core';


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

  departureDate: String;
  departureTime: String;
  car: any;

  requestBeingSent: boolean = false;

  cars: Car[]
  carCount: number = 0
  dataReturned: boolean = false

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public loginSystem: LoggedInProvider,
    public afs: FirestoreProvider,
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
              this.meetingPlace.first.value = place.adr_address
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

  checkValues() {
    console.log('date: ', this.departureDate)
    console.log('time: ', this.departureTime)
    console.log('car', this.car)
  }

  goToAddACarPage() {

  }

}
