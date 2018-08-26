import { Component, ViewChildren, QueryList, NgZone, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput, MenuController, ToastController, Select } from 'ionic-angular';
import { Car } from '../struct/car';
import { NavigationMenuProvider } from '../../providers/navigation-menu/navigation-menu';
import { FirestoreUsersProvider } from '../../providers/firestore-users/firestore-users';
import { FirestoreCarsProvider } from '../../providers/firestore-cars/firestore-cars';
import { FirestoreListingsProvider } from '../../providers/firestore-listings/firestore-listings';
import { FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { MapsAPILoader } from '../../../node_modules/@agm/core';
import { Subscription } from '../../../node_modules/rxjs';
import { AddCarToProfilePage } from '../add-car-to-profile/add-car-to-profile';
import { PostARidePage } from '../post-a-ride/post-a-ride';
import { Listing } from '../struct/listing';
import { MyListingsPage } from '../my-listings/my-listings';
import { RideListingPage } from '../ride-listing/ride-listing';

/**
 * Generated class for the EditListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-listing',
  templateUrl: 'edit-listing.html',
})
export class EditListingPage {

  @ViewChildren('meetingPlace') meetingPlace: QueryList<TextInput>;
  @ViewChildren('destPlace') destinationPlace: QueryList<TextInput>;

  departureDate: String;
  departureTime: String;
  noSeats: number;
  storageAvail: boolean = false;

  carIndex: number = -1;
  cars: Car[]
  carCount: number = 0

  dataReturned: boolean = false;

  updateBeingSent: boolean = false
  updateBtnPressed: boolean = false

  carSubscription: Subscription
  initialListing: any;

  editRideForm = this.formBuilder.group({
    carControl: ['', [Validators.required]],
    meetingPlaceControl: ['', [Validators.required]],
    destPlaceControl: ['', [Validators.required]],
    dateControl: ['', [Validators.required]],
    timeControl: ['', [Validators.required]],
    seatsControl: ['', [Validators.required]],
    storageAvailable: [''],
  })

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navMenu: NavigationMenuProvider,
    public usersProvider: FirestoreUsersProvider,
    public carsProvider: FirestoreCarsProvider,
    public listingsProvider: FirestoreListingsProvider,
    public formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) {
    this.initialListing = navParams.data.listing;
    
  }

  ionViewDidLoad() {
    this.carSubscription = this.carsProvider.getCarsByUIDObservable().subscribe(car => {
      this.cars = car;
      this.carCount = this.cars.length
      this.dataReturned = true
      this.setupAutocompleteForMeeting()
      this.setupAutocompleteForDest()
      this.setInputsToValues();
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

  userHasNoCars() {
    if (this.cars) {
      return this.carCount == 0
    }
    return false;
  }

  tryUpdate(e) {
    this.updateBtnPressed = true
    if (this.allFieldsValid()) {
      this.updateBeingSent = true

      let listing : Listing = this.getNewListingFromValues()

      this.listingsProvider.updateListing(listing)
        .then(resp => {
          this.updateBeingSent = false
          this.updateBtnPressed = false

          // this.clearFields();
          this.updateSuccessfulToast(listing);
        })
        .catch(err => {
          // Figure this out, what can go wrong?
        })
    }
  }

  allFieldsValid() {
    console.log('carControl', this.editRideForm.controls['carControl'].valid, ' value', this.editRideForm.controls['carControl'].value)
    console.log('meetingPlaceControl', this.editRideForm.controls['meetingPlaceControl'].valid, ' value', this.editRideForm.controls['meetingPlaceControl'].value)
    console.log('destPlaceControl', this.editRideForm.controls['destPlaceControl'].valid, ' value', this.editRideForm.controls['destPlaceControl'].value)
    console.log('dateControl', this.editRideForm.controls['dateControl'].valid, ' value', this.editRideForm.controls['dateControl'].value)
    console.log('timeControl', this.editRideForm.controls['timeControl'].valid, ' value', this.editRideForm.controls['timeControl'].value)
    console.log('seatsControl', this.editRideForm.controls['seatsControl'].valid, ' value', this.editRideForm.controls['seatsControl'].value)
    console.log('storageAvailable', this.editRideForm.controls['storageAvailable'].valid, ' value', this.editRideForm.controls['storageAvailable'].value)

    return this.editRideForm.controls['carControl'].valid &&
      this.editRideForm.controls['meetingPlaceControl'].valid &&
      this.editRideForm.controls['destPlaceControl'].valid &&
      this.editRideForm.controls['dateControl'].valid &&
      this.editRideForm.controls['timeControl'].valid &&
      this.editRideForm.controls['seatsControl'].valid &&
      this.editRideForm.controls['storageAvailable'].valid
  }

  clearFields() {
    this.editRideForm.controls['carControl'].setValue(undefined);
    this.carIndex = -1;
    this.noSeats = null
    this.storageAvail = false
    this.departureDate = null
    this.departureTime = null
    this.meetingPlace.first.value = ''
    this.destinationPlace.first.value = ''
  }

  onChange(e) {
    if (e.toString().trim() === 'Add new car') {
      this.goToAddACarPage();
    }
  }

  goToAddACarPage() {
    this.navCtrl.push(AddCarToProfilePage, { toPage: EditListingPage, 'listing': this.initialListing })
  }

  ionViewDidLeave() {
    this.carSubscription.unsubscribe()
  }

  setInputsToValues() {
    let count = 0;
    this.cars.forEach(car => {
      if (this.initialListing.make === car.make &&
        this.initialListing.model === car.model &&
        this.initialListing.year === car.year &&
        this.initialListing.rego === car.rego) {
        this.carIndex = count;
        console.log('here', this.carIndex)
        return;
      }
      count++;
    });

    console.log('dawdaw', this.initialListing)

    this.editRideForm.controls['meetingPlaceControl'].setValue(this.initialListing.meetingPoint)
    this.editRideForm.controls['destPlaceControl'].setValue(this.initialListing.destination)
    this.editRideForm.controls['dateControl'].setValue(this.initialListing.departureDate)
    this.editRideForm.controls['timeControl'].setValue(this.initialListing.departureTime)
    this.editRideForm.controls['storageAvailable'].setValue(this.initialListing.storageSpace)
    
    this.storageAvail = this.initialListing.storageSpace
    this.noSeats = this.initialListing.seatsAvailable;
    this.departureDate = this.initialListing.departureDate;
    this.departureTime = this.initialListing.departureTime;
  }

  getNewListingFromValues() {
    let listing: Listing = new Listing(null, null, null, null, null, null, null, null, null, null, null, null);
    listing.carDocumentID = this.cars[this.carIndex].docID !== this.initialListing.carDocumentID ? this.cars[this.carIndex].docID : this.initialListing.carDocumentID;
    listing.departureDate = this.editRideForm.controls['dateControl'].value !== this.initialListing.departureDate ? this.editRideForm.controls['dateControl'].value : this.initialListing.departureDate;
    listing.departureTime = this.editRideForm.controls['timeControl'].value !== this.initialListing.departureTime ? this.editRideForm.controls['timeControl'].value : this.initialListing.departureTime;
    listing.meetingPoint = this.editRideForm.controls['meetingPlaceControl'].value !== this.initialListing.meetingPoint ? this.editRideForm.controls['meetingPlaceControl'].value : this.initialListing.meetingPoint;
    listing.destination = this.editRideForm.controls['destPlaceControl'].value !== this.initialListing.destination ? this.editRideForm.controls['destPlaceControl'].value : this.initialListing.destination;
    listing.seatsAvailable = this.noSeats !== this.initialListing.seatsAvailable ? this.noSeats : this.initialListing.seatsAvailable;
    listing.storageSpace = this.storageAvail !== this.initialListing.storageSpace ? this.storageAvail : this.initialListing.storageSpace;

    listing.id = this.initialListing.id;
    listing.timeCreated = this.initialListing.timeCreated;
    listing.userDocumentID = this.initialListing.userDocumentID;
    listing.whosComing = this.initialListing.whosComing;
    listing.whoWantsToCome = this.initialListing.whoWantsToCome;

    return listing;
  }

  updateSuccessfulToast(listing) {
    let toast = this.toastCtrl.create({
      message: 'Your listing has been updated!',
      duration: 1000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      // Go back to Login page to login with new credentials
      this.navCtrl.push(RideListingPage, {'fromMyListings': true, 'listing': listing})
    })

    toast.present();
  }
}
