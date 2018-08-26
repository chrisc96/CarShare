webpackJsonp([13],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCarToProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firestore_cars_firestore_cars__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddCarToProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCarToProfilePage = /** @class */ (function () {
    function AddCarToProfilePage(navCtrl, navParams, formBuilder, toastCtrl, carsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.carsProvider = carsProvider;
        this.requestBeingSent = false;
        this.addCarBtnPressed = false;
        this.addCarForm = this.formBuilder.group({
            make: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            model: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            rego: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
        this.goTo = navParams.data.toPage;
        this.dataToPass = navParams.data.listing;
    }
    AddCarToProfilePage.prototype.tryAddCar = function (e) {
        var _this = this;
        this.addCarBtnPressed = true;
        if (this.allFieldsValid()) {
            this.sanitiseInputs();
            // Send to db
            this.requestBeingSent = true;
            // Send req
            var make = this.addCarForm.controls['make'].value;
            var model = this.addCarForm.controls['model'].value;
            var rego = this.addCarForm.controls['rego'].value;
            var year = this.addCarForm.controls['year'].value;
            this.carsProvider.createCar(make, model, rego, year)
                .then(function (resp) {
                _this.requestBeingSent = false;
                _this.addCarBtnPressed = false;
                _this.clearFields();
                _this.carCreatedToast();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    AddCarToProfilePage.prototype.allFieldsValid = function () {
        return this.addCarForm.controls['make'].valid &&
            this.addCarForm.controls['model'].valid &&
            this.addCarForm.controls['rego'].valid &&
            this.addCarForm.controls['year'].valid;
    };
    AddCarToProfilePage.prototype.clearFields = function () {
        this.addCarForm.controls['make'].setValue(null);
        this.addCarForm.controls['model'].setValue(null);
        this.addCarForm.controls['rego'].setValue(null);
        this.addCarForm.controls['year'].setValue(null);
    };
    AddCarToProfilePage.prototype.sanitiseInputs = function () {
        this.addCarForm.controls['make'].setValue(this.addCarForm.controls['make'].value.trim());
        this.addCarForm.controls['model'].setValue(this.addCarForm.controls['model'].value.trim());
        this.addCarForm.controls['rego'].setValue(this.addCarForm.controls['rego'].value.trim());
    };
    AddCarToProfilePage.prototype.carCreatedToast = function () {
        var _this = this;
        // Show account created successfully
        var toast = this.toastCtrl.create({
            message: 'Your car has been added!',
            duration: 1000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            // Go back to Login page to login with new credentials
            _this.navCtrl.push(_this.goTo, { 'listing': _this.dataToPass });
        });
        toast.present();
    };
    AddCarToProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-car-to-profile',template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\add-car-to-profile\add-car-to-profile.html"*/'<!--\n\n  Generated template for the AddCarToProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-toolbar>\n\n  <button ion-button menuToggle left>\n\n    <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n  <ion-title>\n\n    Add a car\n\n  </ion-title>\n\n</ion-toolbar>\n\n\n\n<ion-content class="home-bg">\n\n  <div id="container">\n\n    <div id="content">\n\n      <img class=\'logo\' src=\'../../assets/imgs/carLogo.png\'>\n\n      <form id=\'cardContainer\' [formGroup]=\'addCarForm\'>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary">\n\n            <ion-icon name=\'ios-car-outline\' class=\'addCarIcon\'></ion-icon>\n\n            <div class=\'placeholderText\'>Make:</div>\n\n          </ion-label>\n\n          <ion-input formControlName=\'make\'></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary">\n\n            <ion-icon name=\'ios-car-outline\' class=\'addCarIcon\'></ion-icon>\n\n            <div class=\'placeholderText\'>Model:</div>\n\n          </ion-label>\n\n          <ion-input formControlName=\'model\'></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary">\n\n            <ion-icon name=\'ios-car-outline\' class=\'addCarIcon\'></ion-icon>\n\n            <div class=\'placeholderText\'>Car Registration:</div>\n\n          </ion-label>\n\n          <ion-input formControlName=\'rego\'></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label color="primary">\n\n            <ion-icon name=\'ios-car-outline\' class=\'addCarIcon\'></ion-icon>\n\n            <div class=\'placeholderText\'>Year:</div>\n\n          </ion-label>\n\n          <ion-input formControlName=\'year\' min=\'1900\' type="number"></ion-input>\n\n        </ion-item>\n\n\n\n        <p class="formErrorText" *ngIf=\'!allFieldsValid() && addCarBtnPressed\'>All fields are required</p>\n\n\n\n        <ion-item class=\'addCarBtn\'>\n\n          <button ion-button block color=\'secondary\' *ngIf=\'requestBeingSent\'>\n\n            <ion-spinner name="bubbles"></ion-spinner>\n\n          </button>\n\n          <button ion-button block color=\'secondary\' (click)=\'tryAddCar($event)\' *ngIf=\'!requestBeingSent\'>Add car</button>\n\n        </ion-item>\n\n\n\n      </form>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\add-car-to-profile\add-car-to-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firestore_cars_firestore_cars__["a" /* FirestoreCarsProvider */]])
    ], AddCarToProfilePage);
    return AddCarToProfilePage;
}());

//# sourceMappingURL=add-car-to-profile.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindARidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ride_listing_ride_listing__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_navigation_menu_navigation_menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firestore_listings_firestore_listings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_a_ride_post_a_ride__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_firestore_users_firestore_users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the FindARidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FindARidePage = /** @class */ (function () {
    function FindARidePage(navCtrl, navParams, menuCtrl, navMenu, listingsProvider, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.navMenu = navMenu;
        this.listingsProvider = listingsProvider;
        this.userProvider = userProvider;
        this.listingCount = 0;
    }
    FindARidePage_1 = FindARidePage;
    FindARidePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.listingSubscription = this.listingsProvider.getAllListingsObservable().subscribe(function (listings) {
            _this.listings = listings;
            _this.listingCount = _this.listings.length;
        });
    };
    FindARidePage.prototype.goToListing = function (listingIdx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ride_listing_ride_listing__["a" /* RideListingPage */], { 'listing': this.listings[listingIdx], 'fromMyListings': false });
    };
    FindARidePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true, 'navMenu');
        this.navMenu.setActivePage(FindARidePage_1);
    };
    FindARidePage.prototype.ionViewDidLeave = function () {
        this.listingSubscription.unsubscribe();
    };
    FindARidePage.prototype.userHasListings = function () {
        return this.listingCount !== 0;
    };
    FindARidePage.prototype.goToPostARide = function () {
        if (this.userProvider.userLoggedIn()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__post_a_ride_post_a_ride__["a" /* PostARidePage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */], { 'toPage': __WEBPACK_IMPORTED_MODULE_6__post_a_ride_post_a_ride__["a" /* PostARidePage */] });
        }
    };
    FindARidePage.prototype.getFormattedDateTime = function (index) {
        var date = this.listings[index].departureDate;
        var time = this.listings[index].departureTime;
        var datetime = "" + date + " " + time;
        return __WEBPACK_IMPORTED_MODULE_7_moment__(datetime).format("MMMM Do YYYY, h:mm a");
    };
    FindARidePage = FindARidePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-find-a-ride",template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\find-a-ride\find-a-ride.html"*/'<!--\n\n  Generated template for the FindARidePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-toolbar>\n\n  <button ion-button menuToggle left>\n\n    <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n  <ion-title>\n\n    Find a ride\n\n  </ion-title>\n\n</ion-toolbar>\n\n\n\n<ion-content class="home-bg">\n\n  <div id="container">\n\n    <div id="content">\n\n\n\n      <div id="noListingsContainer" [hidden]="userHasListings()">\n\n        <div id=\'noListingsImage\'></div>\n\n        <div id=\'noListingsTitle\'>We don\'t have any listings :(</div>\n\n        <div id=\'noListingsSubText\'>Be the first to add one!</div>\n\n        <button id=\'addAListingsBtn\' ion-button block outline (click)=\'goToPostARide()\'>Add a listing</button>\n\n      </div>\n\n\n\n      <div id="listingMargin" [hidden]="!userHasListings()">\n\n        <div *ngFor="let listing of listings; let i = index">\n\n          <ion-card *ngIf="listing.seatsAvailable > 0">\n\n            <ion-grid>\n\n              <ion-card-content (click)="goToListing(i)">\n\n                <ion-col>\n\n                  <div id="carImageContainer">\n\n                    <div id="carImage"></div>\n\n                    <div id="vehicleDetails">\n\n                      <div id="vehicleDetailsText">{{ listing.make }} {{ listing.model }} {{ listing.year }}</div>\n\n                    </div>\n\n                  </div>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <div class="lastItem">\n\n                    <div class="HalfHorizontalSeparator">\n\n                      <i class="fas fa-couch leftHandSideIcon"></i>\n\n                      <p id="numSeats rightHandSideIcon">{{ listing.seatsAvailable }}</p>\n\n                    </div>\n\n                    <div class="HalfHorizontalSeparator">\n\n                      <i class="fas fa-luggage-cart leftHandSideIcon"></i>\n\n                      <i class="fas fa-check rightHandSideIcon" *ngIf="listing.storageSpace"></i>\n\n                      <i class="fas fa-times rightHandSideIcon" *ngIf="!listing.storageSpace"></i>\n\n                    </div>\n\n                  </div>\n\n                  <div id="tillImageEnd">\n\n                    <div class="QuarterSeparator">\n\n                      <div class="listingTitle">From:</div>\n\n                      <div class="listingText">{{ listing.meetingPoint }}\n\n                      </div>\n\n                    </div>\n\n                    <div class="QuarterSeparator">\n\n                      <div class="listingTitle">To:</div>\n\n                      <div class="listingText">{{ listing.destination }}\n\n                      </div>\n\n                    </div>\n\n                    <div class="QuarterSeparator">\n\n                      <div class="listingTitle">When:</div>\n\n                      <div class="listingText">{{ getFormattedDateTime(i) }}</div>\n\n                    </div>\n\n                  </div>\n\n                </ion-col>\n\n              </ion-card-content>\n\n            </ion-grid>\n\n          </ion-card>\n\n        </div>\n\n      </div>\n\n\n\n\n\n\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\find-a-ride\find-a-ride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_navigation_menu_navigation_menu__["a" /* NavigationMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_firestore_listings_firestore_listings__["a" /* FirestoreListingsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */]])
    ], FindARidePage);
    return FindARidePage;
    var FindARidePage_1;
}());

//# sourceMappingURL=find-a-ride.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firestore_users_firestore_users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firestore_cars_firestore_cars__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firestore_listings_firestore_listings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_agm_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_car_to_profile_add_car_to_profile__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__struct_listing__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ride_listing_ride_listing__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the EditListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditListingPage = /** @class */ (function () {
    function EditListingPage(navCtrl, navParams, menuCtrl, navMenu, usersProvider, carsProvider, listingsProvider, formBuilder, toastCtrl, mapsAPILoader, ngZone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.navMenu = navMenu;
        this.usersProvider = usersProvider;
        this.carsProvider = carsProvider;
        this.listingsProvider = listingsProvider;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.storageAvail = false;
        this.carIndex = -1;
        this.carCount = 0;
        this.dataReturned = false;
        this.updateBeingSent = false;
        this.updateBtnPressed = false;
        this.editRideForm = this.formBuilder.group({
            carControl: ['', [__WEBPACK_IMPORTED_MODULE_6__node_modules_angular_forms__["f" /* Validators */].required]],
            meetingPlaceControl: ['', [__WEBPACK_IMPORTED_MODULE_6__node_modules_angular_forms__["f" /* Validators */].required]],
            destPlaceControl: ['', [__WEBPACK_IMPORTED_MODULE_6__node_modules_angular_forms__["f" /* Validators */].required]],
            dateControl: ['', [__WEBPACK_IMPORTED_MODULE_6__node_modules_angular_forms__["f" /* Validators */].required]],
            timeControl: ['', [__WEBPACK_IMPORTED_MODULE_6__node_modules_angular_forms__["f" /* Validators */].required]],
            seatsControl: ['', [__WEBPACK_IMPORTED_MODULE_6__node_modules_angular_forms__["f" /* Validators */].required]],
            storageAvailable: [''],
        });
        this.initialListing = navParams.data.listing;
    }
    EditListingPage_1 = EditListingPage;
    EditListingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.carSubscription = this.carsProvider.getCarsByUIDObservable().subscribe(function (car) {
            _this.cars = car;
            _this.carCount = _this.cars.length;
            _this.dataReturned = true;
            _this.setupAutocompleteForMeeting();
            _this.setupAutocompleteForDest();
            _this.setInputsToValues();
        });
    };
    EditListingPage.prototype.setupAutocompleteForMeeting = function () {
        var _this = this;
        this.meetingPlace.changes.subscribe(function (comps) {
            _this.mapsAPILoader.load().then(function () {
                var autocomplete = new google.maps.places.Autocomplete(comps.first._elementRef.nativeElement.getElementsByTagName('input')[0], {
                    types: ['address']
                });
                autocomplete.addListener('place_changed', function () {
                    _this.ngZone.run(function () {
                        var place = autocomplete.getPlace();
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }
                        else {
                            _this.meetingPlace.first.value = place.formatted_address;
                        }
                    });
                });
            });
        });
    };
    EditListingPage.prototype.setupAutocompleteForDest = function () {
        var _this = this;
        this.destinationPlace.changes.subscribe(function (comps) {
            _this.mapsAPILoader.load().then(function () {
                var autocomplete = new google.maps.places.Autocomplete(comps.first._elementRef.nativeElement.getElementsByTagName('input')[0], {
                    types: ['address']
                });
                autocomplete.addListener('place_changed', function () {
                    _this.ngZone.run(function () {
                        var place = autocomplete.getPlace();
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }
                        else {
                            _this.destinationPlace.first.value = place.formatted_address;
                        }
                    });
                });
            });
        });
    };
    EditListingPage.prototype.userHasNoCars = function () {
        if (this.cars) {
            return this.carCount == 0;
        }
        return false;
    };
    EditListingPage.prototype.tryUpdate = function (e) {
        var _this = this;
        this.updateBtnPressed = true;
        if (this.allFieldsValid()) {
            this.updateBeingSent = true;
            var listing_1 = this.getNewListingFromValues();
            this.listingsProvider.updateListing(listing_1)
                .then(function (resp) {
                _this.updateBeingSent = false;
                _this.updateBtnPressed = false;
                // this.clearFields();
                _this.updateSuccessfulToast(listing_1);
            })
                .catch(function (err) {
                // Figure this out, what can go wrong?
            });
        }
    };
    EditListingPage.prototype.allFieldsValid = function () {
        return this.editRideForm.controls['carControl'].valid &&
            this.editRideForm.controls['meetingPlaceControl'].valid &&
            this.editRideForm.controls['destPlaceControl'].valid &&
            this.editRideForm.controls['dateControl'].valid &&
            this.editRideForm.controls['timeControl'].valid &&
            this.editRideForm.controls['seatsControl'].valid &&
            this.editRideForm.controls['storageAvailable'].valid;
    };
    EditListingPage.prototype.clearFields = function () {
        this.editRideForm.controls['carControl'].setValue(undefined);
        this.carIndex = -1;
        this.noSeats = null;
        this.storageAvail = false;
        this.departureDate = null;
        this.departureTime = null;
        this.meetingPlace.first.value = '';
        this.destinationPlace.first.value = '';
    };
    EditListingPage.prototype.onChange = function (e) {
        if (e.toString().trim() === 'Add new car') {
            this.goToAddACarPage();
        }
    };
    EditListingPage.prototype.goToAddACarPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__add_car_to_profile_add_car_to_profile__["a" /* AddCarToProfilePage */], { toPage: EditListingPage_1, 'listing': this.initialListing });
    };
    EditListingPage.prototype.ionViewDidLeave = function () {
        this.carSubscription.unsubscribe();
    };
    EditListingPage.prototype.setInputsToValues = function () {
        var _this = this;
        var count = 0;
        this.cars.forEach(function (car) {
            if (_this.initialListing.make === car.make &&
                _this.initialListing.model === car.model &&
                _this.initialListing.year === car.year &&
                _this.initialListing.rego === car.rego) {
                _this.carIndex = count;
                return;
            }
            count++;
        });
        this.editRideForm.controls['meetingPlaceControl'].setValue(this.initialListing.meetingPoint);
        this.editRideForm.controls['destPlaceControl'].setValue(this.initialListing.destination);
        this.editRideForm.controls['dateControl'].setValue(this.initialListing.departureDate);
        this.editRideForm.controls['timeControl'].setValue(this.initialListing.departureTime);
        this.editRideForm.controls['storageAvailable'].setValue(this.initialListing.storageSpace);
        this.storageAvail = this.initialListing.storageSpace;
        this.noSeats = this.initialListing.seatsAvailable;
        this.departureDate = this.initialListing.departureDate;
        this.departureTime = this.initialListing.departureTime;
    };
    EditListingPage.prototype.getNewListingFromValues = function () {
        var listing = new __WEBPACK_IMPORTED_MODULE_9__struct_listing__["a" /* Listing */](null, null, null, null, null, null, null, null, null, null, null, null);
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
    };
    EditListingPage.prototype.updateSuccessfulToast = function (listing) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Your listing has been updated!',
            duration: 1000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            // Go back to Login page to login with new credentials
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__ride_listing_ride_listing__["a" /* RideListingPage */], { 'fromMyListings': true, 'listing': listing });
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])('meetingPlace'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */])
    ], EditListingPage.prototype, "meetingPlace", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])('destPlace'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */])
    ], EditListingPage.prototype, "destinationPlace", void 0);
    EditListingPage = EditListingPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-listing',template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\edit-listing\edit-listing.html"*/'<!--\n  Generated template for the EditListingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Listing</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="home-bg">\n  <div id="container">\n    <div id="content">\n      <div *ngIf=\'dataReturned\'>\n        <form id=\'carsExist\' [formGroup]=\'editRideForm\'>\n          <ion-item>\n            <ion-label class=\'carSelectText\' color="primary">\n              <ion-icon name="ios-car" class=\'postIcon\'></ion-icon>\n              <div class=\'placeholderText\'>Car to use:</div>\n            </ion-label>\n            <ion-select formControlName=\'carControl\' (ionChange)="onChange($event)" [(ngModel)]="carIndex">\n              <ion-option *ngFor=\'let car of cars; let i = index\' [selected]="carIndex === i"  value="{{i}}">\n                {{car.make + \' \' + car.model}}\n              </ion-option>\n              <ion-option>\n                Add new car\n              </ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>\n              <ion-icon class=\'postIcon\' name="ios-briefcase-outline"></ion-icon>\n              <div class=\'placeholderText\'>Space for bags?</div>\n            </ion-label>\n            <ion-checkbox item-end formControlName=\'storageAvailable\' [(ngModel)]="storageAvail"></ion-checkbox>\n          </ion-item>\n\n          <ion-item>\n            <ion-label color="primary">\n              <ion-icon name=\'ios-contacts-outline\' class=\'postIcon\'></ion-icon>\n              <div class=\'placeholderText\'>No. Seats Available:</div>\n            </ion-label>\n            <ion-input formControlName=\'seatsControl\' min=\'0\' max=\'10\' type="number" [(ngModel)]="noSeats"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label color="primary">\n              <ion-icon name="ios-map-outline" class=\'postIcon\'></ion-icon>\n              <div class=\'placeholderText\'>Meeting Place:</div>\n            </ion-label>\n            <ion-input formControlName=\'meetingPlaceControl\' #meetingPlace class=\'formControl\' autocorrect=\'off\' spellcheck=\'off\' autocapitalize=\'off\'></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label color="primary">\n              <ion-icon name="ios-map-outline" class=\'postIcon\'></ion-icon>\n              <div class=\'placeholderText\'>Destination:</div>\n            </ion-label>\n            <ion-input formControlName=\'destPlaceControl\' #destPlace class=\'formControl\' autocorrect=\'off\' spellcheck=\'off\' autocapitalize=\'off\'></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label color="primary">\n              <ion-icon name="ios-calendar-outline" class=\'postIcon\'></ion-icon>\n              <div class=\'placeholderText\'>Departure Date:</div>\n            </ion-label>\n            <ion-datetime formControlName=\'dateControl\' min="2018" max="2030" displayFormat="MMM DD,YYYY" pickerFormat="MMM DD,YYYY"\n              [(ngModel)]="departureDate"></ion-datetime>\n          </ion-item>\n\n          <ion-item>\n            <ion-label color="primary">\n              <ion-icon name="ios-time-outline" class=\'postIcon\'></ion-icon>\n              <div class=\'placeholderText\'>Departure Time:</div>\n            </ion-label>\n            <ion-datetime formControlName=\'timeControl\' displayFormat="H:mm" pickerFormat="HH:mm" [(ngModel)]="departureTime"></ion-datetime>\n          </ion-item>\n\n          <p class="formErrorText" *ngIf=\'!allFieldsValid() && updateBtnPressed\'>All fields are required</p>\n\n          <ion-item class=\'postBtn\'>\n            <button ion-button block color=\'secondary\' #submit *ngIf=\'updateBeingSent\'>\n              <ion-spinner name="bubbles"></ion-spinner>\n            </button>\n            <button ion-button block color=\'secondary\' #submit (click)=\'tryUpdate($event)\' *ngIf=\'!updateBeingSent\'>Update</button>\n          </ion-item>\n        </form>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\edit-listing\edit-listing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__["a" /* NavigationMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firestore_cars_firestore_cars__["a" /* FirestoreCarsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_firestore_listings_firestore_listings__["a" /* FirestoreListingsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__node_modules_agm_core__["c" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], EditListingPage);
    return EditListingPage;
    var EditListingPage_1;
}());

//# sourceMappingURL=edit-listing.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestToSharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firestore_users_firestore_users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firestore_listings_firestore_listings__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RequestToSharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestToSharePage = /** @class */ (function () {
    function RequestToSharePage(navCtrl, navParams, menuCtrl, navMenu, usersProvider, listingsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.navMenu = navMenu;
        this.usersProvider = usersProvider;
        this.listingsProvider = listingsProvider;
        this.listing = navParams.data.listing;
        this.user = this.usersProvider.getUser();
        this.successfulRequest = false;
        this.failedRequest = false;
        this.addShareRequest();
    }
    RequestToSharePage.prototype.addShareRequest = function () {
        var _this = this;
        if (!this.user || !this.listing)
            return; // Shouldn't ever fire, we should be logged in at this point
        this.listing.whoWantsToCome.push(Object.assign({}, this.user));
        this.listingsProvider.addRequest(this.listing).then(function (resp) {
            _this.successfulRequest = true;
        }).catch(function (err) {
            _this.failedRequest = true;
        });
    };
    RequestToSharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-request-to-share',template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\request-to-share\request-to-share.html"*/'<!--\n\n  Generated template for the RequestToSharePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>request-to-share</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="home-bg">\n\n  <div id=\'container\'>\n\n    <div id=\'content\'>\n\n      <div id="shareContent">\n\n        <div id=\'shareImage\'></div>\n\n        <div id=\'success\' *ngIf="successfulRequest">Your request has been sent</div>\n\n        <div id=\'fail\' *ngIf="failedRequest">There was a problem with your request. Please try again later</div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\request-to-share\request-to-share.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__["a" /* NavigationMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firestore_listings_firestore_listings__["a" /* FirestoreListingsProvider */]])
    ], RequestToSharePage);
    return RequestToSharePage;
}());

//# sourceMappingURL=request-to-share.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firestore_users_firestore_users__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, formBuilder, usersProvider, toastCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.usersProvider = usersProvider;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.signupButtonPushed = false;
        this.email = '';
        this.password = '';
        this.passwordConfirm = '';
        this.firstName = '';
        this.lastName = '';
        this.mobileNum = '';
        this.emailIsValid = true;
        this.emailNotEmpty = true;
        this.emailIsInvalid = true;
        this.passwordIsValid = true;
        this.passwordNotEmpty = true;
        this.passwordConfirmIsValid = true;
        this.passwordConfirmNotEmpty = true;
        this.passwordsDontMatch = false;
        this.firstNameIsValid = true;
        this.lastNameIsValid = true;
        this.mobileNumIsValid = true;
        this.requestBeingSent = false;
        this.requestDidFail = false;
        this.emailAlreadyInUse = false;
        this.passwordWeak = false;
        // Form validation
        this.signupForm = this.formBuilder.group({
            emailControl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            passwordControl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].requiredTrue]],
            passwordControlConfirm: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].requiredTrue]],
            firstNameControl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].requiredTrue]],
            lastNameControl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].requiredTrue]],
            mobileNumControl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].requiredTrue]]
        });
        this.whereToGo = navParams.data.pageToGo;
        this.dataToSend = navParams.data.listing;
    }
    SignupPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true, 'navMenu');
    };
    SignupPage.prototype.trySignup = function (e) {
        var _this = this;
        e.preventDefault();
        this.signupButtonPushed = true;
        this.beginFormValidation();
        if (this.allFieldsValid()) {
            this.requestBeingSent = true;
            this.usersProvider.signup(this.email, this.password)
                .then(function (resp) {
                _this.usersProvider.linkUsertoDB(resp, _this.firstName, _this.lastName, _this.mobileNum).then(function () {
                    _this.requestBeingSent = false;
                    _this.clearAllFields();
                    _this.accountCreatedToast();
                })
                    .catch(function (err) {
                    console.log(err);
                });
            })
                .catch(function (err) {
                _this.requestBeingSent = false;
                _this.requestDidFail = true;
                if (err.code === 'auth/email-already-in-use') {
                    _this.emailAlreadyInUse = true;
                }
                if (err.code === 'auth/weak-password') {
                    _this.passwordWeak = true;
                }
                _this.signupFailedClearFields();
            });
        }
        else {
            // We should move the slide to where the first error is
            // Page 1 of signup slide:
            if (!this.emailIsValid || !this.passwordIsValid || !this.passwordConfirmIsValid || this.passwordsDontMatch) {
                this.goToPrevSlide();
            }
            else {
                this.goToNextSlide();
            }
        }
    };
    SignupPage.prototype.accountCreatedToast = function () {
        var _this = this;
        // Show account created successfully
        var toast = this.toastCtrl.create({
            message: 'Your account was created successfully',
            duration: 1000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            // Go back to Login page to login with new credentials
            _this.navCtrl.push(_this.whereToGo, { 'listing': _this.dataToSend })
                .then(function () {
                var index = _this.navCtrl.getActive().index;
                _this.navCtrl.remove(index - 2, 2); // Removes the login and signup page
            });
        });
        toast.present();
    };
    SignupPage.prototype.goToNextSlide = function () {
        this.slides.slideTo(1, 500);
    };
    SignupPage.prototype.goToPrevSlide = function () {
        this.slides.slideTo(0, 500);
    };
    SignupPage.prototype.onChange = function (e) {
        e.preventDefault(); // ionic/html input changes fire twice
        if (this.signupButtonPushed) {
            this.beginFormValidation();
        }
        // Means that the last request to firebase failed, but we're changing the value of the 
        // password (after it's been set to '') so remove the text for bad login
        if (this.requestDidFail && this.password !== undefined) {
            this.requestDidFail = false;
            this.emailAlreadyInUse = false;
            this.passwordWeak = false;
        }
    };
    SignupPage.prototype.beginFormValidation = function () {
        this.beginEmailValidation();
        this.beginPasswordValidation();
        this.beginNameValidation();
        this.beginMobNumValidation();
    };
    SignupPage.prototype.beginEmailValidation = function () {
        // Determine validity
        this.emailIsValid = this.signupForm.controls['emailControl'].valid;
        this.emailNotEmpty = this.email !== undefined && this.email !== '';
        this.emailIsInvalid = this.emailNotEmpty && !this.emailIsValid ? true : false;
    };
    SignupPage.prototype.beginPasswordValidation = function () {
        // Determine validity
        this.passwordIsValid = this.password !== undefined && this.password !== '';
        this.passwordConfirmIsValid = this.passwordConfirm !== undefined && this.passwordConfirm !== '';
        this.passwordsDontMatch = this.password !== this.passwordConfirm;
    };
    SignupPage.prototype.beginNameValidation = function () {
        this.firstNameIsValid = this.firstName !== undefined && this.passwordConfirm !== '';
        this.lastNameIsValid = this.lastName !== undefined && this.lastName !== '';
    };
    SignupPage.prototype.beginMobNumValidation = function () {
        this.mobileNumIsValid = this.mobileNum !== undefined && this.mobileNum !== '';
    };
    SignupPage.prototype.allFieldsValid = function () {
        return this.emailIsValid && this.passwordIsValid && this.passwordConfirmIsValid &&
            !this.passwordsDontMatch && this.firstNameIsValid && this.lastNameIsValid &&
            this.mobileNumIsValid;
    };
    SignupPage.prototype.clearAllFields = function () {
        this.email = '';
        this.password = '';
        this.passwordConfirm = '';
        this.firstName = '';
        this.lastName = '';
        this.mobileNum = '';
    };
    // Reasons why firebase might reject the signup
    SignupPage.prototype.signupFailedClearFields = function () {
        if (this.emailAlreadyInUse) {
            this.email = '';
            this.password = '';
            this.passwordConfirm = '';
        }
        else if (this.passwordWeak) {
            this.password = '';
            this.passwordConfirm = '';
        }
        this.goToPrevSlide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('email'),
        __metadata("design:type", String)
    ], SignupPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('password'),
        __metadata("design:type", String)
    ], SignupPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('passwordConfirm'),
        __metadata("design:type", String)
    ], SignupPage.prototype, "passwordConfirm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('firstName'),
        __metadata("design:type", String)
    ], SignupPage.prototype, "firstName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('lastName'),
        __metadata("design:type", String)
    ], SignupPage.prototype, "lastName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mobileNum'),
        __metadata("design:type", String)
    ], SignupPage.prototype, "mobileNum", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], SignupPage.prototype, "slides", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-signup",template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <link href="https://fonts.googleapis.com/css?family=Ribeye" rel="stylesheet">\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class=\'signup-bg\'>\n\n  <div id=\'container\'>\n\n    <img class=\'logo\' src=\'../../assets/imgs/carLogo.png\'>\n\n    <ion-slides pager>\n\n      <ion-slide>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            <h1 id=\'signupTxt\'>Signup</h1>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <form [formGroup]=\'signupForm\'>\n\n\n\n              <ion-item>\n\n                <ion-label floating>\n\n                  <span>\n\n                    <ion-icon name=\'ios-mail-outline\'></ion-icon>\n\n                  </span>\n\n                  <span>\n\n                    <div id=\'emailTxt\'>Email</div>\n\n                  </span>\n\n                </ion-label>\n\n                <ion-input type=\'email\' formControlName=\'emailControl\' (input)="onChange($event)" [(ngModel)]=\'email\' class=\'inputTxt\'\n\n                  autocomplete="new-password" required></ion-input>\n\n              </ion-item>\n\n\n\n              <p class=\'formErrorText\' *ngIf=\'!emailIsValid && !emailNotEmpty\'>Please enter an email</p>\n\n              <p class=\'formErrorText\' *ngIf=\'!emailIsValid && emailIsInvalid\'>Please enter a valid email</p>\n\n              <p class="formErrorText" *ngIf=\'emailAlreadyInUse && requestDidFail\'>This email address is already in use, please try again</p>\n\n\n\n              <ion-item>\n\n                <ion-label floating>\n\n                  <span>\n\n                    <ion-icon name=\'ios-lock-outline\'></ion-icon>\n\n                  </span>\n\n                  <span>\n\n                    <div id=\'passwordTxt\'>Password</div>\n\n                  </span>\n\n                </ion-label>\n\n                <ion-input type=\'password\' formControlName=\'passwordControl\' (input)="onChange($event)" [(ngModel)]=\'password\' class=\'inputTxt\'\n\n                 autocomplete="new-password" required></ion-input>\n\n              </ion-item>\n\n\n\n              <p class=\'formErrorText\' *ngIf=\'!passwordIsValid && !requestDidFail\'>Password cannot be empty</p>\n\n              <p class=\'formErrorText\' *ngIf=\'passwordWeak && requestDidFail\'>Password is too weak, please try again</p>\n\n\n\n              <ion-item>\n\n                <ion-label floating>\n\n                  <span>\n\n                    <ion-icon name=\'ios-refresh-outline\'></ion-icon>\n\n                  </span>\n\n                  <span>\n\n                    <div id=\'passwordTxt\'>Confirm Password</div>\n\n                  </span>\n\n                </ion-label>\n\n                <ion-input type=\'password\' formControlName=\'passwordControlConfirm\' (input)="onChange($event)" [(ngModel)]=\'passwordConfirm\'\n\n                  class=\'inputTxt\' autocomplete="new-password" required></ion-input>\n\n              </ion-item>\n\n\n\n              <p class=\'formErrorText\' *ngIf=\'passwordsDontMatch && !requestDidFail\'>Password\'s must match</p>\n\n\n\n              <ion-item>\n\n                <button ion-button block class=\'signupBtn\' id="nextSlideBtn" color="secondary" (click)=\'goToNextSlide()\' ion-button>\n\n                  <div id=\'nextStepTxt\'>Next Step</div>\n\n                  <div id=\'nextIconContainer\'>\n\n                    <ion-icon id=\'nextIcon\' name="ios-arrow-forward-outline"></ion-icon>\n\n                  </div>\n\n                </button>\n\n              </ion-item>\n\n\n\n            </form>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-slide>\n\n\n\n      <ion-slide>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            <h1 id=\'signupTxt\'>Signup</h1>\n\n          </ion-card-header>\n\n\n\n          <ion-card-content>\n\n            <form [formGroup]=\'signupForm\'>\n\n\n\n              <ion-item>\n\n                <ion-label floating>\n\n                  <span>\n\n                    <ion-icon name=\'ios-person-outline\'></ion-icon>\n\n                  </span>\n\n                  <span>\n\n                    <div id=\'nameTxt\'>First Name</div>\n\n                  </span>\n\n                </ion-label>\n\n                <ion-input type=\'text\' formControlName=\'firstNameControl\' (input)=\'onChange($event)\' [(ngModel)]=\'firstName\' class=\'inputTxt\'\n\n                 autocomplete="new-password" required></ion-input>\n\n              </ion-item>\n\n\n\n              <p class=\'formErrorText\' *ngIf=\'!firstNameIsValid && !requestDidFail\'>First name cannot be empty</p>\n\n\n\n              <ion-item>\n\n                <ion-label floating>\n\n                  <span>\n\n                    <ion-icon name=\'ios-person-outline\'></ion-icon>\n\n                  </span>\n\n                  <span>\n\n                    <div id=\'nameTxt\'>Last Name</div>\n\n                  </span>\n\n                </ion-label>\n\n                <ion-input type=\'text\' formControlName=\'lastNameControl\' (input)=\'onChange($event)\' [(ngModel)]=\'lastName\' class=\'inputTxt\'\n\n                 autocomplete="new-password" required></ion-input>\n\n              </ion-item>\n\n\n\n              <p class=\'formErrorText\' *ngIf=\'!lastNameIsValid && !requestDidFail\'>Last name cannot be empty</p>\n\n\n\n              <ion-item>\n\n                <ion-label floating>\n\n                  <span>\n\n                    <ion-icon name=\'ios-call-outline\'></ion-icon>\n\n                  </span>\n\n                  <span>\n\n                    <div id=\'phoneTxt\'>Contact Number</div>\n\n                  </span>\n\n                </ion-label>\n\n                <ion-input type=\'text\' formControlName=\'mobileNumControl\' (input)=\'onChange($event)\' [(ngModel)]=\'mobileNum\' class=\'inputTxt\'\n\n                 autocomplete="new-password" required></ion-input>\n\n              </ion-item>\n\n\n\n              <p class=\'formErrorText\' *ngIf=\'!mobileNumIsValid && !requestDidFail\'>Mobile number cannot be empty</p>\n\n\n\n              <ion-item class=\'signupBtn\'>\n\n                <button ion-button block color=\'secondary\' #submit *ngIf=\'requestBeingSent\'>\n\n                  <ion-spinner name="bubbles"></ion-spinner>\n\n                </button>\n\n                <button ion-button block color=\'secondary\' #submit (click)=\'trySignup($event)\' *ngIf=\'!requestBeingSent\'>Signup</button>\n\n              </ion-item>\n\n\n\n            </form>\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewRideShareRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firestore_listings_firestore_listings__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ReviewRideShareRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewRideShareRequestPage = /** @class */ (function () {
    function ReviewRideShareRequestPage(navCtrl, navParams, menuCtrl, navMenu, listingsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.navMenu = navMenu;
        this.listingsProvider = listingsProvider;
        this.listing = navParams.data.listing;
    }
    ReviewRideShareRequestPage_1 = ReviewRideShareRequestPage;
    ReviewRideShareRequestPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true, 'navMenu');
        this.navMenu.setActivePage(ReviewRideShareRequestPage_1);
    };
    ReviewRideShareRequestPage.prototype.acceptShareRequest = function (requesterIndex) {
        var requester = this.listing.whoWantsToCome[requesterIndex];
        this.listing.seatsAvailable = (this.listing.seatsAvailable - 1);
        this.listing.whosComing.push(requester);
        this.listing.whoWantsToCome.splice(requesterIndex, 1);
        this.listingsProvider.updateListing(this.listing);
    };
    ReviewRideShareRequestPage.prototype.rejectShareRequest = function (requesterIndex) {
        this.listing.whoWantsToCome.splice(requesterIndex, 1);
        this.listingsProvider.updateListing(this.listing);
    };
    ReviewRideShareRequestPage = ReviewRideShareRequestPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-review-ride-share-request',template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\review-ride-share-request\review-ride-share-request.html"*/'<!--\n\n  Generated template for the ReviewRideShareRequestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <link href=\'https://fonts.googleapis.com/css?family=Ribeye\' rel=\'stylesheet\'>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Review Carpool Request\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- <ion-toolbar>\n\n  <button ion-button menuToggle left>\n\n    <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n\n\n</ion-toolbar> -->\n\n\n\n<ion-content class="home-bg">\n\n  <div id="container">\n\n    <div id="content">\n\n\n\n      <div id="requestMargin">\n\n\n\n          <div *ngFor="let shareRequest of listing.whoWantsToCome; let j = index">\n\n            <ion-card>\n\n              <ion-grid>\n\n                <ion-card-content>\n\n                  <ion-col>\n\n                    <div id="requestImageContainer">\n\n                      <div id="requestImage"></div>\n\n                    </div>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                    <div class="lastItem">\n\n                      <div class="HalfHorizontalSeparator">\n\n                        <button (click)="acceptShareRequest(j)" class="iconButton">\n\n                            <ion-icon name="checkmark-circle" color="secondary"></ion-icon>\n\n                          </button>\n\n                      </div>\n\n                      <div class="HalfHorizontalSeparator">\n\n                        <button (click)="rejectShareRequest(j)" class="iconButton">\n\n                          <ion-icon name="close-circle" color="danger" class="rightHandSideIcon"></ion-icon>\n\n                        </button>\n\n                      </div>\n\n                    </div>\n\n                    <div id="tillImageEnd">\n\n                      <div class="QuarterSeparator">\n\n                        <div class="requestTitle">Name:</div>\n\n                        <div class="requestText" *ngIf="shareRequest.firstName"> {{ shareRequest.firstName }} {{ shareRequest.lastName }}</div>\n\n                      </div>\n\n                      <div class="QuarterSeparator">\n\n                        <div class="requestTitle">Number:</div>\n\n                        <div class="requestText" *ngIf="shareRequest.contactNum"> {{ shareRequest.contactNum }}</div>\n\n                      </div>\n\n                    </div>\n\n                  </ion-col>\n\n                </ion-card-content>\n\n              </ion-grid>\n\n            </ion-card>\n\n          </div>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\review-ride-share-request\review-ride-share-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__["a" /* NavigationMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firestore_listings_firestore_listings__["a" /* FirestoreListingsProvider */]])
    ], ReviewRideShareRequestPage);
    return ReviewRideShareRequestPage;
    var ReviewRideShareRequestPage_1;
}());

//# sourceMappingURL=review-ride-share-request.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firestore_listings_firestore_listings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_listings_my_listings__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_listing_edit_listing__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SettingsPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPopoverPage = /** @class */ (function () {
    function SettingsPopoverPage(navCtrl, navParams, viewCtrl, alertCtrl, listingProvider, toastCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.listingProvider = listingProvider;
        this.toastCtrl = toastCtrl;
        this.appCtrl = appCtrl;
        this.listing = navParams.data.listing;
        appCtrl._setDisableScroll(true);
    }
    SettingsPopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__edit_listing_edit_listing__["a" /* EditListingPage */], { 'listing': this.listing });
    };
    SettingsPopoverPage.prototype.editListing = function () {
        this.close();
    };
    SettingsPopoverPage.prototype.deleteListing = function () {
        this.close();
        this.showDeleteAlert();
    };
    SettingsPopoverPage.prototype.removeListingFromFirestore = function () {
        var _this = this;
        this.listingProvider.deleteListing(this.listing)
            .then(function () { return _this.showListingDeletedAlert(); });
    };
    SettingsPopoverPage.prototype.showDeleteAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete this listing',
            subTitle: 'Are you sure you want to delete this listing?',
            buttons: [{
                    text: 'Yes',
                    handler: function () {
                        _this.removeListingFromFirestore();
                    }
                }, {
                    text: 'No',
                }]
        });
        alert.present();
    };
    SettingsPopoverPage.prototype.showListingDeletedAlert = function () {
        var _this = this;
        // Show account created successfully
        var toast = this.toastCtrl.create({
            message: 'Your listing was deleted',
            duration: 1000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            _this.viewCtrl.dismiss();
            _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__my_listings_my_listings__["a" /* MyListingsPage */]);
        });
        toast.present();
    };
    SettingsPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "settings-popover",template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\settings-popover\settings-popover.html"*/'<!--\n  Generated template for the SettingsPopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-list>\n  <button ion-item (click)="editListing()" class="popoverItem">\n    <i class="far fa-edit popoverIcon"></i>\n    <span class="popoverTxt">Edit</span>\n  </button>\n  <button ion-item (click)="deleteListing()">\n    <i class="far fa-trash-alt popoverIcon"></i>\n    <span class="popoverTxt">Delete</span>\n  </button>\n</ion-list>'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\settings-popover\settings-popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firestore_listings_firestore_listings__["a" /* FirestoreListingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], SettingsPopoverPage);
    return SettingsPopoverPage;
}());

//# sourceMappingURL=settings-popover.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firestore_users_firestore_users__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, menuCtrl, navMenu, usersProvider, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.navMenu = navMenu;
        this.usersProvider = usersProvider;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.editingMode = false;
        this.editBtnPressed = false;
        this.requestBeingSent = false;
        this.firstName = '';
        this.lastName = '';
        this.contactNum = '';
        this.editDetailsForm = this.formBuilder.group({
            firstNameControl: ['', []],
            lastNameControl: ['', []],
            contactNumControl: ['', []]
        });
        this.user = this.usersProvider.getUser();
    }
    ProfilePage_1 = ProfilePage;
    ProfilePage.prototype.tryEdit = function (e) {
        var _this = this;
        this.editBtnPressed = true;
        this.requestBeingSent = true;
        this.usersProvider.updateUser(this.firstName, this.lastName, this.contactNum, this.user.uid)
            .then(function (resp) {
            _this.requestBeingSent = false;
            _this.editBtnPressed = false;
            _this.editingMode = false;
            _this.userCreatedToast();
        });
    };
    ProfilePage.prototype.userCreatedToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Your profile has been updated!',
            duration: 1000,
            position: 'top'
        });
        toast.present();
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true, 'navMenu');
        this.navMenu.setActivePage(ProfilePage_1);
    };
    ProfilePage.prototype.editDetails = function () {
        this.editingMode = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('firstName'),
        __metadata("design:type", Object)
    ], ProfilePage.prototype, "firstName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('lastName'),
        __metadata("design:type", Object)
    ], ProfilePage.prototype, "lastName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('contactNum'),
        __metadata("design:type", Object)
    ], ProfilePage.prototype, "contactNum", void 0);
    ProfilePage = ProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-toolbar>\n\n    <button ion-button menuToggle left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      My Account\n\n    </ion-title>\n\n  </ion-toolbar>\n\n  \n\n  <ion-content class="home-bg">\n\n    <div id="container">\n\n      <div id="content"> \n\n        <div id="display">\n\n          <div *ngIf="user && !editingMode">\n\n            <ion-item *ngIf="user.firstName">\n\n              First Name: {{ user.firstName }}\n\n            </ion-item>\n\n            <ion-item *ngIf="user.lastName">\n\n              Last Name: {{ user.lastName }}\n\n            </ion-item>\n\n            <ion-item *ngIf="user.contactNum">\n\n              Contact Number: {{ user.contactNum }}\n\n            </ion-item>\n\n\n\n            <ion-item class="editBtn">\n\n              <button ion-button block color=\'secondary\' (click)=\'editDetails()\'>Edit</button>\n\n            </ion-item>\n\n          </div>\n\n\n\n          <form id=\'edit\' [formGroup]=\'editDetailsForm\' *ngIf="user && editingMode">\n\n            <ion-item>\n\n              <ion-label color="primary">\n\n                <ion-icon name="contact" class=\'editIcon\'></ion-icon>\n\n                <div class=\'placeholderText\'>First Name:</div>\n\n              </ion-label>\n\n              <ion-input formControlName=\'firstNameControl\' [(ngModel)]=\'firstName\' class=\'formControl\'></ion-input>\n\n            </ion-item>\n\n      \n\n            <ion-item>\n\n              <ion-label color="primary">\n\n                <ion-icon name="contact" class=\'editIcon\'></ion-icon>\n\n                <div class=\'placeholderText\'>Last Name:</div>\n\n              </ion-label>\n\n              <ion-input formControlName=\'lastNameControl\' [(ngModel)]=\'lastName\' class=\'formControl\'></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label color="primary">\n\n                  <ion-icon name="call" class=\'editIcon\'></ion-icon>\n\n                  <div class=\'placeholderText\'>Contact Number:</div>\n\n                </ion-label>\n\n                <ion-input formControlName=\'contactNumControl\' [(ngModel)]=\'contactNum\' class=\'formControl\'></ion-input>\n\n              </ion-item>\n\n\n\n            <ion-item class=\'submitBtn\'>\n\n              <button ion-button block color=\'secondary\' #submit *ngIf=\'requestBeingSent\'>\n\n                <ion-spinner name="bubbles"></ion-spinner>\n\n              </button>\n\n              <button ion-button block color=\'secondary\' #submit (click)=\'tryEdit($event)\' *ngIf=\'!requestBeingSent\'>Submit</button>\n\n            </ion-item>\n\n          </form>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__["a" /* NavigationMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ProfilePage);
    return ProfilePage;
    var ProfilePage_1;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RidesImTakingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firestore_listings_firestore_listings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firestore_users_firestore_users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ride_listing_ride_listing__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the RidesImTakingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RidesImTakingPage = /** @class */ (function () {
    function RidesImTakingPage(navCtrl, navParams, menuCtrl, navMenu, listingsProvider, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.navMenu = navMenu;
        this.listingsProvider = listingsProvider;
        this.userProvider = userProvider;
        this.listingCount = 0;
    }
    RidesImTakingPage_1 = RidesImTakingPage;
    RidesImTakingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.listingSubscription = this.listingsProvider.getRidesUserIsTakingObservable().subscribe(function (listings) {
            _this.listings = listings;
            console.log(_this.listings);
            _this.listingCount = _this.listings.length;
        });
    };
    RidesImTakingPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true, 'navMenu');
        this.navMenu.setActivePage(RidesImTakingPage_1);
    };
    RidesImTakingPage.prototype.userTakingRides = function () {
        return this.listingCount !== 0;
    };
    RidesImTakingPage.prototype.goToListing = function (listingIdx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ride_listing_ride_listing__["a" /* RideListingPage */], { 'listing': this.listings[listingIdx], 'fromMyListings': true });
    };
    RidesImTakingPage.prototype.ionViewDidLeave = function () {
        this.listingSubscription.unsubscribe();
    };
    RidesImTakingPage.prototype.getFormattedDateTime = function (index) {
        var date = this.listings[index].departureDate;
        var time = this.listings[index].departureTime;
        var datetime = "" + date + " " + time;
        return __WEBPACK_IMPORTED_MODULE_6_moment__(datetime).format("MMMM Do YYYY, h:mm a");
    };
    RidesImTakingPage = RidesImTakingPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rides-im-taking',template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\rides-im-taking\rides-im-taking.html"*/'<!--\n  Generated template for the RidesImTakingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-toolbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Rides I\'m Taking\n    </ion-title>\n  </ion-toolbar>\n  \n  <ion-content class="home-bg">\n    <div id="container">\n      <div id="content">\n  \n        <div id="noListingsContainer" [hidden]="userTakingRides()">\n          <div id=\'noListingsImage\'></div>\n          <div id=\'noListingsTitle\'>You\'re not taking any rides :(</div>\n          <div id=\'noListingsSubText\'>Go to Find a Ride to request to join a ride!</div>\n          <button id=\'addAListingsBtn\' ion-button block outline (click)=\'goToFindARide()\'>Find a Ride</button>\n        </div>\n  \n        <div id="listingMargin" [hidden]="!userTakingRides()">\n          <div *ngFor="let listing of listings; let i = index">\n            <ion-card>\n              <ion-grid>\n                <ion-card-content (click)="goToListing(i)">\n                  <ion-col>\n                    <div id="carImageContainer">\n                      <div id="carImage"></div>\n                      <div id="vehicleDetails">\n                        <div id="vehicleDetailsText">{{ listing.make }} {{ listing.model }} {{ listing.year }}</div>\n                      </div>\n                    </div>\n                  </ion-col>\n                  <ion-col>\n                    <div class="lastItem">\n                      <div class="HalfHorizontalSeparator">\n                        <i class="fas fa-couch leftHandSideIcon"></i>\n                        <p id="numSeats rightHandSideIcon">{{ listing.seatsAvailable }}</p>\n                      </div>\n                      <div class="HalfHorizontalSeparator">\n                        <i class="fas fa-luggage-cart leftHandSideIcon"></i>\n                        <i class="fas fa-check rightHandSideIcon" *ngIf="listing.storageSpace"></i>\n                        <i class="fas fa-times rightHandSideIcon" *ngIf="!listing.storageSpace"></i>\n                      </div>\n                    </div>\n                    <div id="tillImageEnd">\n                      <div class="QuarterSeparator">\n                        <div class="listingTitle">From:</div>\n                        <div class="listingText">{{ listing.meetingPoint }}\n                        </div>\n                      </div>\n                      <div class="QuarterSeparator">\n                        <div class="listingTitle">To:</div>\n                        <div class="listingText">{{ listing.destination }}\n                        </div>\n                      </div>\n                      <div class="QuarterSeparator">\n                        <div class="listingTitle">When:</div>\n                        <div class="listingText">{{ getFormattedDateTime(i) }}</div>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-card-content>\n              </ion-grid>\n            </ion-card>\n          </div>\n        </div>\n  \n  \n  \n      </div>\n    </div>\n  </ion-content>'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\rides-im-taking\rides-im-taking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__["a" /* NavigationMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firestore_listings_firestore_listings__["a" /* FirestoreListingsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */]])
    ], RidesImTakingPage);
    return RidesImTakingPage;
    var RidesImTakingPage_1;
}());

//# sourceMappingURL=rides-im-taking.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 223;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirestoreUsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_struct_user__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// GENERAL 

// FIREBASE


// STRUCTS





/*
  Generated class for the FirestoreUsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirestoreUsersProvider = /** @class */ (function () {
    function FirestoreUsersProvider(fireAuth, afs) {
        var _this = this;
        this.fireAuth = fireAuth;
        this.afs = afs;
        // Post to DB
        this.login = function (email, password) {
            return _this.fireAuth.auth.signInWithEmailAndPassword(email, password);
        };
        this.linkUsertoDB = function (resp, firstName, lastName, contactNum) {
            // Give the user struct their own details
            _this.user = new __WEBPACK_IMPORTED_MODULE_3__pages_struct_user__["a" /* User */](resp.user.uid, resp.user.email, firstName, lastName, contactNum);
            // Create a document for them with their personal details
            return _this.afs.collection('users').doc(_this.user.uid).set({
                firstName: firstName,
                lastName: lastName,
                contactNum: contactNum
            });
        };
        this.userObservable = this.fireAuth.authState.flatMap(function (user) {
            if (user) {
                return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs__["combineLatest"])(_this.afs.doc('users/' + user.uid).valueChanges(), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs__["of"])(user));
            }
            else {
                return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs__["combineLatest"])(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs__["of"])(null), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs__["of"])(null));
            }
        })
            .map(function (packagedInfo) {
            var user = packagedInfo[1];
            var userInfo = packagedInfo[0];
            if (!user || !userInfo) {
                return null;
            }
            return new __WEBPACK_IMPORTED_MODULE_3__pages_struct_user__["a" /* User */](user.uid, user.email, userInfo.firstName, userInfo.lastName, userInfo.contactNum);
        });
        this.userObservable.subscribe(function (user) {
            _this.user = user;
        });
    }
    FirestoreUsersProvider.prototype.signup = function (email, password) {
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    FirestoreUsersProvider.prototype.updateUser = function (firstName, lastName, contactNum, uid) {
        return this.afs.doc('users/' + uid).update({
            firstName: firstName,
            lastName: lastName,
            contactNum: contactNum
        });
    };
    // General methods
    FirestoreUsersProvider.prototype.logout = function () {
        return this.fireAuth.auth.signOut();
    };
    // Helpers
    FirestoreUsersProvider.prototype.userLoggedIn = function () {
        return this.user !== undefined && this.user !== null;
    };
    FirestoreUsersProvider.prototype.getUserObservable = function () {
        return this.userObservable;
    };
    FirestoreUsersProvider.prototype.getUser = function () {
        if (this.userLoggedIn()) {
            return this.user;
        }
    };
    FirestoreUsersProvider.prototype.getUserById = function (uid) {
        var user;
        this.afs.doc('users/' + uid).valueChanges().subscribe(function (data) {
            user = data;
        });
        user.uid = uid;
        return user;
    };
    FirestoreUsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FirestoreUsersProvider);
    return FirestoreUsersProvider;
}());

//# sourceMappingURL=firestore-users.js.map

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-car-to-profile/add-car-to-profile.module": [
		680,
		12
	],
	"../pages/edit-listing/edit-listing.module": [
		681,
		11
	],
	"../pages/find-a-ride/find-a-ride.module": [
		682,
		10
	],
	"../pages/login/login.module": [
		683,
		9
	],
	"../pages/my-listings/my-listings.module": [
		684,
		8
	],
	"../pages/post-a-ride/post-a-ride.module": [
		685,
		7
	],
	"../pages/profile/profile.module": [
		686,
		6
	],
	"../pages/request-to-share/request-to-share.module": [
		687,
		5
	],
	"../pages/review-ride-share-request/review-ride-share-request.module": [
		688,
		4
	],
	"../pages/ride-listing/ride-listing.module": [
		689,
		3
	],
	"../pages/rides-im-taking/rides-im-taking.module": [
		690,
		2
	],
	"../pages/settings-popover/settings-popover.module": [
		691,
		1
	],
	"../pages/signup/signup.module": [
		692,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 265;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationMenuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the NavigationMenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NavigationMenuProvider = /** @class */ (function () {
    function NavigationMenuProvider() {
    }
    NavigationMenuProvider.prototype.setActivePage = function (page) {
        this.activePage = page;
    };
    NavigationMenuProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NavigationMenuProvider);
    return NavigationMenuProvider;
}());

//# sourceMappingURL=navigation-menu.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirestoreListingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firestore_users_firestore_users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_first__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(7);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// GENERAL

// FIREBASE


// PROVIDERS







/*
  Generated class for the FirestoreListingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirestoreListingsProvider = /** @class */ (function () {
    function FirestoreListingsProvider(afs, usersProvider) {
        var _this = this;
        this.afs = afs;
        this.usersProvider = usersProvider;
        this.createListing = function (car, departDate, departTime, noSeats, storageAvail, from, to) {
            return _this.usersProvider.getUserObservable().first().toPromise().then(function (user) {
                var uid = user.uid;
                var carDocID = car.docID;
                return _this.afs.collection('listings').add({
                    timeCreated: __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"].FieldValue.serverTimestamp(),
                    meetingPoint: from,
                    destination: to,
                    userDocumentID: uid,
                    carDocumentID: carDocID,
                    departureDate: departDate,
                    departureTime: departTime,
                    seatsAvailable: noSeats,
                    storageSpace: storageAvail,
                    whoWantsToCome: [],
                    whosComing: []
                });
            });
        };
        this.allListingsObservable = this.afs.collection('listings').snapshotChanges().map(function (listings) {
            if (listings) {
                return listings.map(function (changeAction) {
                    var listing = changeAction.payload.doc.data();
                    var carID = listing.carDocumentID;
                    var userID = listing.userDocumentID;
                    listing.id = changeAction.payload.doc.id;
                    return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs__["combineLatest"])(_this.afs.doc('cars/' + carID).valueChanges(), _this.afs.doc('users/' + userID).valueChanges(), function (data1, data2) {
                        return __assign({}, listing, data1, data2);
                    });
                });
            }
        }).mergeMap(function (observables) { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs__["combineLatest"])(observables); });
        this.userListingsObservable = this.usersProvider.getUserObservable().flatMap(function (user) {
            if (user) {
                return _this.afs.collection('listings', function (ref) { return ref.where('userDocumentID', '==', user.uid); }).snapshotChanges().map(function (listings) {
                    return listings.map(function (changeAction) {
                        var listing = changeAction.payload.doc.data();
                        var carID = listing.carDocumentID;
                        listing.id = changeAction.payload.doc.id;
                        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs__["combineLatest"])(_this.afs.doc('cars/' + carID).valueChanges(), function (data1) {
                            return __assign({}, listing, data1);
                        });
                    });
                }).mergeMap(function (observables) { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs__["combineLatest"])(observables); });
            }
        });
        this.ridesUserTakingObservable = this.afs.collection('listings').valueChanges().map(function (listings) {
            if (listings) {
                return listings.filter(function (changeAction) {
                    var listing = changeAction;
                    var userPoster = listing.userDocumentID;
                    var iDidntPostThisListing = true;
                    var comingOnThisListing = false;
                    listing.whosComing.forEach(function (el) {
                        if (userPoster === el.uid) {
                            iDidntPostThisListing = false;
                            return;
                        }
                        // 
                        if (el.uid === _this.usersProvider.getUser().uid) {
                            comingOnThisListing = true;
                            return;
                        }
                    });
                    return comingOnThisListing && iDidntPostThisListing;
                }).map(function (changeAction) {
                    var listing = changeAction;
                    var userPoster = listing.userDocumentID;
                    var carID = listing.carDocumentID;
                    listing.id = listing.id;
                    return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs__["combineLatest"])(_this.afs.doc('cars/' + carID).valueChanges(), _this.afs.doc('users/' + userPoster).valueChanges(), function (data1, data2) {
                        return __assign({}, listing, data1, data2);
                    });
                });
            }
        }).mergeMap(function (observables) { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs__["combineLatest"])(observables); });
    }
    FirestoreListingsProvider.prototype.addRequest = function (listing) {
        return this.afs.doc('listings/' + listing.id).update({
            whoWantsToCome: listing.whoWantsToCome
        });
    };
    FirestoreListingsProvider.prototype.updateListing = function (listing) {
        return this.afs.doc('listings/' + listing.id).update({
            carDocumentID: listing.carDocumentID,
            departureDate: listing.departureDate,
            departureTime: listing.departureTime,
            destination: listing.destination,
            meetingPoint: listing.meetingPoint,
            seatsAvailable: listing.seatsAvailable,
            storageSpace: listing.storageSpace,
            userDocumentID: listing.userDocumentID,
            whoWantsToCome: listing.whoWantsToCome,
            whosComing: listing.whosComing
        });
    };
    FirestoreListingsProvider.prototype.deleteListing = function (listing) {
        return this.afs.doc('listings/' + listing.id).delete();
    };
    FirestoreListingsProvider.prototype.getUserListingsObservable = function () {
        return this.userListingsObservable;
    };
    FirestoreListingsProvider.prototype.getAllListingsObservable = function () {
        return this.allListingsObservable;
    };
    FirestoreListingsProvider.prototype.getRidesUserIsTakingObservable = function () {
        return this.ridesUserTakingObservable;
    };
    FirestoreListingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_3__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */]])
    ], FirestoreListingsProvider);
    return FirestoreListingsProvider;
}());

//# sourceMappingURL=firestore-listings.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find_a_ride_find_a_ride__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_a_ride_post_a_ride__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firestore_users_firestore_users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_listings_my_listings__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, usersProvider, menuCtrl) {
        this.navCtrl = navCtrl;
        this.usersProvider = usersProvider;
        this.menuCtrl = menuCtrl;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false, 'navMenu');
    };
    HomePage.prototype.goToFindARide = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__find_a_ride_find_a_ride__["a" /* FindARidePage */]);
    };
    HomePage.prototype.goToPostARide = function () {
        if (!this.usersProvider.userLoggedIn()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], { 'toPage': __WEBPACK_IMPORTED_MODULE_4__post_a_ride_post_a_ride__["a" /* PostARidePage */] });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__post_a_ride_post_a_ride__["a" /* PostARidePage */]);
        }
    };
    HomePage.prototype.goToMyListings = function () {
        if (!this.usersProvider.userLoggedIn()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], { 'toPage': __WEBPACK_IMPORTED_MODULE_6__my_listings_my_listings__["a" /* MyListingsPage */] });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__my_listings_my_listings__["a" /* MyListingsPage */]);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\home\home.html"*/'<ion-header>\n\n  <link href="https://fonts.googleapis.com/css?family=Ribeye" rel="stylesheet">\n\n</ion-header>\n\n\n\n<ion-content class="home-bg">\n\n  <div id="container">\n\n    <div class="content">\n\n      <img class="logo" src="../../assets/imgs/carLogo.png">\n\n      <h1 id="logoTitle">CarShare</h1>\n\n      <p id="logoSubtext">Find and Share your rides!</p>\n\n      <div class="btns">\n\n        <button class="home-btns" color="secondary" (click)="goToFindARide()" ion-button block>Find a ride</button>\n\n        <button class="home-btns" color="danger" (click)="goToPostARide()" ion-button full>Post a ride</button>\n\n        <button class="home-btns" color="default" (click)="goToMyListings()" ion-button full>View my listings</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(584);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RideListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_to_share_request_to_share__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firestore_users_firestore_users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RideListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RideListingPage = /** @class */ (function () {
    function RideListingPage(navCtrl, navParams, menuCtrl, navMenu, usersProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.navMenu = navMenu;
        this.usersProvider = usersProvider;
        this.dontShowRequestToShare = false;
        this.listing = navParams.get('listing');
        this.dontShowRequestToShare = navParams.get('fromMyListings');
        this.user = usersProvider.getUser();
        console.log(this.dontShowRequestToShare);
        console.log('user', this.user);
    }
    RideListingPage_1 = RideListingPage;
    RideListingPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true, 'navMenu');
        this.navMenu.setActivePage(RideListingPage_1);
    };
    RideListingPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RideListingPage.prototype.requestToShare = function () {
        if (!this.user) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], { 'toPage': __WEBPACK_IMPORTED_MODULE_3__request_to_share_request_to_share__["a" /* RequestToSharePage */], 'dataToPass': this.listing });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__request_to_share_request_to_share__["a" /* RequestToSharePage */], { 'listing': this.listing });
        }
    };
    RideListingPage.prototype.allowedToRequest = function () {
        return !this.requesterOwnsListing() && !this.alreadyRequested();
    };
    RideListingPage.prototype.requesterOwnsListing = function () {
        if (!this.user) {
            return false;
        }
        else {
            this.user.uid === this.listing.userDocumentID;
        }
    };
    RideListingPage.prototype.alreadyRequested = function () {
        if (!this.user) {
            return false;
        }
        else {
            for (var i = 0; i < this.listing.whoWantsToCome.length; i++) {
                if (this.listing.whoWantsToCome[i].uid == this.user.uid) {
                    return true;
                }
            }
            for (var j = 0; j < this.listing.whosComing.length; j++) {
                if (this.listing.whosComing[j].uid == this.user.uid) {
                    return true;
                }
            }
        }
    };
    RideListingPage = RideListingPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ride-listing',template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\ride-listing\ride-listing.html"*/'<!--\n\n  Generated template for the RideListingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-toolbar>\n\n\n\n  <ion-header>\n\n    <link href=\'https://fonts.googleapis.com/css?family=Ribeye\' rel=\'stylesheet\'>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Listing Details\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <!-- <button ion-button left>\n\n    <ion-icon name="md-arrow-round-back" (click)="goBack()"></ion-icon>\n\n  </button> -->\n\n\n\n</ion-toolbar>\n\n\n\n<ion-content class="home-bg">\n\n  <div id="container">\n\n    <div id="content">\n\n      <div id="listingDetails"> \n\n        <ion-item *ngIf="listing.firstName">\n\n          <p>Listed by: {{ listing.firstName }} {{ listing.lastName }}</p>\n\n          <p>Contact Number: {{ listing.contactNum }}</p>\n\n        </ion-item>\n\n        <ion-item *ngIf="listing.make">\n\n          Vehicle: {{ listing.make }} {{ listing.model }} ({{ listing.year }})\n\n        </ion-item>\n\n        <ion-item *ngIf="listing.departureDate">\n\n          Departs At: {{ listing.departureDate }} {{ listing.departureTime }}\n\n        </ion-item>\n\n        <ion-item *ngIf="listing.destination">\n\n          Destination: {{ listing.destination }}\n\n        </ion-item>\n\n        <ion-item *ngIf="listing.meetingPoint">\n\n          Meeting Point: {{ listing.meetingPoint }}\n\n        </ion-item>\n\n        <ion-item *ngIf="listing.seatsAvailable">\n\n          Seats Available: {{ listing.seatsAvailable }}\n\n        </ion-item>\n\n        <ion-item *ngIf="listing.storageSpace">\n\n          Storage Space: {{ listing.storageSpace }}\n\n        </ion-item>\n\n        <ion-item *ngIf="!dontShowRequestToShare">\n\n          <button ion-button block color=\'secondary\' (click)=\'requestToShare()\' [disabled]="!allowedToRequest()">Request to Share</button>\n\n        </ion-item>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\ride-listing\ride-listing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__["a" /* NavigationMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */]])
    ], RideListingPage);
    return RideListingPage;
    var RideListingPage_1;
}());

//# sourceMappingURL=ride-listing.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firestore_users_firestore_users__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, navCtrl, navParams, usersProvider, menuCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersProvider = usersProvider;
        this.menuCtrl = menuCtrl;
        this.email = '';
        this.password = '';
        this.loginButtonPressed = false;
        this.emailIsValid = true;
        this.emailNotEmpty = true;
        this.emailIsInvalid = true;
        this.passwordIsValid = true;
        this.passwordNotEmpty = true;
        this.requestBeingSent = false;
        this.requestDidFail = false;
        this.loginForm = this.formBuilder.group({
            emailControl: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            passwordControl: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].requiredTrue]]
        });
        this.pageToGoTo = this.navParams.data.toPage;
        this.valueDataToPass = this.navParams.data.dataToPass;
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false, 'navMenu');
    };
    LoginPage.prototype.goToSignupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */], { 'pageToGo': this.pageToGoTo, 'listing': this.valueDataToPass });
    };
    LoginPage.prototype.tryLogin = function () {
        var _this = this;
        this.loginButtonPressed = true;
        this.beginFormValidation();
        if (this.emailIsValid && this.passwordIsValid) {
            this.requestBeingSent = true;
            this.usersProvider.login(this.email, this.password)
                .then(function (resp) {
                _this.requestBeingSent = false; // finished sending request, set to false
                _this.password = '';
                _this.navCtrl.push(_this.pageToGoTo, { 'listing': _this.valueDataToPass })
                    .then(function () {
                    var index = _this.navCtrl.getActive().index;
                    _this.navCtrl.remove(index - 1, 1); // Removes the login page from potential back buttons
                });
            })
                .catch(function (err) {
                _this.requestBeingSent = false;
                _this.requestDidFail = true;
                _this.password = ''; // User probably got password wrong, empty
            });
        }
    };
    LoginPage.prototype.onChange = function (e) {
        if (this.loginButtonPressed) {
            this.beginFormValidation();
        }
        // Means that the last request failed, but we're changing the value of the 
        // password (after it's been set to '') so remove the text for bad login
        if (this.requestDidFail && this.password !== undefined) {
            this.requestDidFail = false;
        }
    };
    LoginPage.prototype.beginFormValidation = function () {
        this.beginEmailValidation();
        this.beginPasswordValidation();
    };
    LoginPage.prototype.beginEmailValidation = function () {
        // Reset fields
        this.emailNotEmpty = false;
        this.emailIsInvalid = false;
        this.emailIsValid = false;
        // Determine validity
        this.emailIsValid = this.loginForm.controls['emailControl'].valid;
        this.emailNotEmpty = this.email !== undefined && this.email !== '';
        this.emailIsInvalid = this.emailNotEmpty && !this.emailIsValid ? true : false;
    };
    LoginPage.prototype.beginPasswordValidation = function () {
        // Reset fields
        this.passwordIsValid = false;
        this.passwordNotEmpty = false;
        // Determine validity
        this.passwordNotEmpty = this.password !== undefined && this.password !== '';
        this.passwordIsValid = this.passwordNotEmpty;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <link href=\'https://fonts.googleapis.com/css?family=Ribeye\' rel=\'stylesheet\'>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class=\'login-bg\'>\n\n  <div id=\'container\'>\n\n    <img class=\'logo\' src=\'../../assets/imgs/carLogo.png\'>\n\n    <ion-card>\n\n      <ion-card-header>\n\n        <h1 id=\'loginTxt\'>Login</h1>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <form [formGroup]=\'loginForm\'>\n\n          <ion-item>\n\n            <ion-label floating>\n\n              <span>\n\n                <ion-icon name=\'ios-mail-outline\'></ion-icon>\n\n              </span>\n\n              <span>\n\n                <div id=\'emailTxt\'>Email</div>\n\n              </span>\n\n            </ion-label>\n\n            <ion-input type=\'email\' formControlName=\'emailControl\' (input)="onChange($event)" [(ngModel)]=\'email\' class=\'inputTxt\' (keyup.enter)="tryLogin()" autocomplete="new-password" required></ion-input>\n\n          </ion-item>\n\n          <p class=\'formErrorText\' *ngIf=\'!emailIsValid && !emailNotEmpty\'>Please enter an email</p>\n\n          <p class=\'formErrorText\' *ngIf=\'!emailIsValid && emailIsInvalid\'>Please enter a valid email</p>\n\n          <ion-item>\n\n            <ion-label floating>\n\n              <span>\n\n                <ion-icon name=\'ios-lock-outline\'></ion-icon>\n\n              </span>\n\n              <span>\n\n                <div id=\'passwordTxt\'>Password</div>\n\n              </span>\n\n            </ion-label>\n\n            <ion-input type=\'password\' formControlName=\'passwordControl\' (input)="onChange($event)"  [(ngModel)]=\'password\' class=\'inputTxt\' (keyup.enter)="tryLogin()" autocomplete="new-password" required></ion-input>\n\n          </ion-item>\n\n          <p class=\'formErrorText\' *ngIf=\'!passwordIsValid\'>Password cannot be empty</p>\n\n          <p class=\'formErrorText\' *ngIf=\'requestDidFail\'>Your email or password was incorrect, please try again</p>\n\n        </form>\n\n\n\n        <ion-item>\n\n          <button ion-button block color=\'secondary\' #submit *ngIf=\'requestBeingSent\'>\n\n            <ion-spinner name="bubbles"></ion-spinner>\n\n          </button>\n\n          <button ion-button block color=\'secondary\' #submit (click)=\'tryLogin()\' *ngIf=\'!requestBeingSent\'>Login</button>\n\n        </ion-item>\n\n\n\n        <hr class=\'loginHr\'>\n\n        <div (click)=\'goToSignupPage()\' id=\'signupLink\'>Don\'t have an account? Sign up here</div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostARidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firestore_users_firestore_users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_listings_my_listings__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_car_to_profile_add_car_to_profile__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_firestore_cars_firestore_cars__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_firestore_listings_firestore_listings__ = __webpack_require__(40);
/// <reference types="@types/googlemaps" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the PostARidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostARidePage = /** @class */ (function () {
    function PostARidePage(navCtrl, navParams, menuCtrl, navMenu, usersProvider, carsProvider, listingsProvider, formBuilder, toastCtrl, mapsAPILoader, ngZone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.navMenu = navMenu;
        this.usersProvider = usersProvider;
        this.carsProvider = carsProvider;
        this.listingsProvider = listingsProvider;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.storageAvail = false;
        this.carIndex = -1;
        this.carCount = 0;
        this.dataReturned = false;
        this.requestBeingSent = false;
        this.postBtnPressed = false;
        this.postRideForm = this.formBuilder.group({
            carControl: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            meetingPlaceControl: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            destPlaceControl: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            dateControl: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            timeControl: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            seatsControl: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            storageAvailable: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
        });
    }
    PostARidePage_1 = PostARidePage;
    PostARidePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.carSubscription = this.carsProvider.getCarsByUIDObservable().subscribe(function (car) {
            _this.cars = car;
            _this.carCount = _this.cars.length;
            _this.dataReturned = true;
            _this.setupAutocompleteForMeeting();
            _this.setupAutocompleteForDest();
        });
    };
    PostARidePage.prototype.setupAutocompleteForMeeting = function () {
        var _this = this;
        this.meetingPlace.changes.subscribe(function (comps) {
            _this.mapsAPILoader.load().then(function () {
                var autocomplete = new google.maps.places.Autocomplete(comps.first._elementRef.nativeElement.getElementsByTagName('input')[0], {
                    types: ['address']
                });
                autocomplete.addListener('place_changed', function () {
                    _this.ngZone.run(function () {
                        var place = autocomplete.getPlace();
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }
                        else {
                            _this.meetingPlace.first.value = place.formatted_address;
                        }
                    });
                });
            });
        });
    };
    PostARidePage.prototype.setupAutocompleteForDest = function () {
        var _this = this;
        this.destinationPlace.changes.subscribe(function (comps) {
            _this.mapsAPILoader.load().then(function () {
                var autocomplete = new google.maps.places.Autocomplete(comps.first._elementRef.nativeElement.getElementsByTagName('input')[0], {
                    types: ['address']
                });
                autocomplete.addListener('place_changed', function () {
                    _this.ngZone.run(function () {
                        var place = autocomplete.getPlace();
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }
                        else {
                            _this.destinationPlace.first.value = place.formatted_address;
                        }
                    });
                });
            });
        });
    };
    PostARidePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true, 'navMenu');
        this.navMenu.setActivePage(PostARidePage_1);
    };
    PostARidePage.prototype.userHasNoCars = function () {
        if (this.cars) {
            return this.carCount == 0;
        }
        return false;
    };
    PostARidePage.prototype.tryPost = function (e) {
        var _this = this;
        this.postBtnPressed = true;
        if (this.allFieldsValid()) {
            this.requestBeingSent = true;
            this.sanitiseInputs();
            var car = this.cars[this.carIndex];
            var from = this.meetingPlace.first.value;
            var to = this.destinationPlace.first.value;
            this.listingsProvider.createListing(car, this.departureDate, this.departureTime, this.noSeats, this.storageAvail, from, to)
                .then(function (resp) {
                _this.requestBeingSent = false;
                _this.postBtnPressed = false;
                _this.clearFields();
                _this.listingCreatedToast();
            })
                .catch(function (err) {
                // Figure this out, what can go wrong?
            });
        }
    };
    PostARidePage.prototype.allFieldsValid = function () {
        return this.postRideForm.controls['carControl'].valid &&
            this.postRideForm.controls['meetingPlaceControl'].valid &&
            this.postRideForm.controls['destPlaceControl'].valid &&
            this.postRideForm.controls['dateControl'].valid &&
            this.postRideForm.controls['timeControl'].valid &&
            this.postRideForm.controls['seatsControl'].valid &&
            this.postRideForm.controls['storageAvailable'].valid;
    };
    PostARidePage.prototype.sanitiseInputs = function () {
        this.postRideForm.controls['carControl'].setValue(this.postRideForm.controls['carControl'].value.trim());
    };
    PostARidePage.prototype.clearFields = function () {
        this.postRideForm.controls['carControl'].setValue(undefined);
        this.carIndex = -1;
        this.noSeats = null;
        this.storageAvail = false;
        this.departureDate = null;
        this.departureTime = null;
        this.meetingPlace.first.value = '';
        this.destinationPlace.first.value = '';
    };
    PostARidePage.prototype.listingCreatedToast = function () {
        var _this = this;
        // Show account created successfully
        var toast = this.toastCtrl.create({
            message: 'Your ride listing has been posted!',
            duration: 1000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            // Go back to Login page to login with new credentials
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__my_listings_my_listings__["a" /* MyListingsPage */]);
        });
        toast.present();
    };
    PostARidePage.prototype.onChange = function (e) {
        if (e.toString().trim() === 'Add new car') {
            this.goToAddACarPage();
        }
    };
    PostARidePage.prototype.goToAddACarPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__add_car_to_profile_add_car_to_profile__["a" /* AddCarToProfilePage */], { toPage: PostARidePage_1 });
    };
    PostARidePage.prototype.ionViewDidLeave = function () {
        this.carSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])('meetingPlace'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */])
    ], PostARidePage.prototype, "meetingPlace", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])('destPlace'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */])
    ], PostARidePage.prototype, "destinationPlace", void 0);
    PostARidePage = PostARidePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-post-a-ride',template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\post-a-ride\post-a-ride.html"*/'<!--\n\n  Generated template for the PostARidePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-toolbar>\n\n  <button ion-button menuToggle left>\n\n    <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n  <ion-title>\n\n    Post a ride\n\n  </ion-title>\n\n</ion-toolbar>\n\n\n\n<ion-content class="home-bg">\n\n  <div id="container">\n\n    <div id="content"> \n\n      <div *ngIf=\'dataReturned\'>\n\n\n\n\n\n        <div id=\'noCarsContainer\' [hidden]=\'!userHasNoCars()\'>\n\n          <div id=\'noCarsImage\'></div>\n\n          <div id=\'noCarsTitle\'>No cars on account</div>\n\n          <div id=\'noCarsSubText\'>Add a car to your profile to be able to post a ride</div>\n\n          <button id=\'addACarBtn\' ion-button block outline (click)=\'goToAddACarPage()\'>Add a car</button>\n\n        </div>\n\n\n\n\n\n        <form id=\'carsExist\' [formGroup]=\'postRideForm\' [hidden]=\'userHasNoCars()\'>\n\n          <ion-item>\n\n            <ion-label class=\'carSelectText\' color="primary">\n\n              <ion-icon name="ios-car" class=\'postIcon\'></ion-icon>\n\n              <div class=\'placeholderText\'>Car to use:</div>\n\n            </ion-label>\n\n            <ion-select formControlName=\'carControl\' (ionChange)="onChange($event)">\n\n              <ion-option *ngFor=\'let car of cars; let i = index\' (ionSelect)="carIndex = i">\n\n                {{car.make + \' \' + car.model}}\n\n              </ion-option>\n\n              <ion-option>\n\n                Add new car\n\n              </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label>\n\n              <ion-icon class=\'postIcon\' name="ios-briefcase-outline"></ion-icon>\n\n              <div class=\'placeholderText\'>Space for bags?</div>\n\n            </ion-label>\n\n            <ion-checkbox item-end formControlName=\'storageAvailable\' [(ngModel)]="storageAvail"></ion-checkbox>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label color="primary">\n\n              <ion-icon name=\'ios-contacts-outline\' class=\'postIcon\'></ion-icon>\n\n              <div class=\'placeholderText\'>No. Seats Available:</div>\n\n            </ion-label>\n\n            <ion-input formControlName=\'seatsControl\' min=\'0\' max=\'10\' type="number" [(ngModel)]="noSeats"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label color="primary">\n\n              <ion-icon name="ios-map-outline" class=\'postIcon\'></ion-icon>\n\n              <div class=\'placeholderText\'>Meeting Place:</div>\n\n            </ion-label>\n\n            <ion-input formControlName=\'meetingPlaceControl\' #meetingPlace class=\'formControl\' autocorrect=\'off\' spellcheck=\'off\' autocapitalize=\'off\'></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label color="primary">\n\n              <ion-icon name="ios-map-outline" class=\'postIcon\'></ion-icon>\n\n              <div class=\'placeholderText\'>Destination:</div>\n\n            </ion-label>\n\n            <ion-input formControlName=\'destPlaceControl\' #destPlace class=\'formControl\' autocorrect=\'off\' spellcheck=\'off\' autocapitalize=\'off\'></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label color="primary">\n\n              <ion-icon name="ios-calendar-outline" class=\'postIcon\'></ion-icon>\n\n              <div class=\'placeholderText\'>Departure Date:</div>\n\n            </ion-label>\n\n            <ion-datetime formControlName=\'dateControl\' min="2018" max="2030" displayFormat="MMM DD,YYYY" pickerFormat="MMM DD,YYYY"\n\n              [(ngModel)]="departureDate"></ion-datetime>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label color="primary">\n\n              <ion-icon name="ios-time-outline" class=\'postIcon\'></ion-icon>\n\n              <div class=\'placeholderText\'>Departure Time:</div>\n\n            </ion-label>\n\n            <ion-datetime formControlName=\'timeControl\' displayFormat="H:mm" pickerFormat="HH:mm" [(ngModel)]="departureTime"></ion-datetime>\n\n          </ion-item>\n\n\n\n          <p class="formErrorText" *ngIf=\'!allFieldsValid() && postBtnPressed\'>All fields are required</p>\n\n\n\n          <ion-item class=\'postBtn\'>\n\n            <button ion-button block color=\'secondary\' #submit *ngIf=\'requestBeingSent\'>\n\n              <ion-spinner name="bubbles"></ion-spinner>\n\n            </button>\n\n            <button ion-button block color=\'secondary\' #submit (click)=\'tryPost($event)\' *ngIf=\'!requestBeingSent\'>Post</button>\n\n          </ion-item>\n\n        </form>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\post-a-ride\post-a-ride.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__["a" /* NavigationMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_firestore_cars_firestore_cars__["a" /* FirestoreCarsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_firestore_listings_firestore_listings__["a" /* FirestoreListingsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["c" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], PostARidePage);
    return PostARidePage;
    var PostARidePage_1;
}());

//# sourceMappingURL=post-a-ride.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_storage__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_find_a_ride_find_a_ride__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ride_listing_ride_listing__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_post_a_ride_post_a_ride__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_navigation_menu_navigation_menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_my_listings_my_listings__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_add_car_to_profile_add_car_to_profile__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_rides_im_taking_rides_im_taking__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_request_to_share_request_to_share__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_review_ride_share_request_review_ride_share_request__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_settings_popover_settings_popover__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_edit_listing_edit_listing__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__agm_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_firestore_listings_firestore_listings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_firestore_users_firestore_users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_firestore_cars_firestore_cars__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var firebaseConfig = {
    apiKey: "AIzaSyDGHRJ5SKA-krpmyGzfRAlHPS4yZL2lSqQ",
    authDomain: "swen325carshare.firebaseapp.com",
    databaseURL: "https://swen325carshare.firebaseio.com",
    projectId: "swen325carshare",
    storageBucket: "swen325carshare.appspot.com",
    messagingSenderId: "88701285742"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_find_a_ride_find_a_ride__["a" /* FindARidePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ride_listing_ride_listing__["a" /* RideListingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_post_a_ride_post_a_ride__["a" /* PostARidePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_my_listings_my_listings__["a" /* MyListingsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_add_car_to_profile_add_car_to_profile__["a" /* AddCarToProfilePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_rides_im_taking_rides_im_taking__["a" /* RidesImTakingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_request_to_share_request_to_share__["a" /* RequestToSharePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_review_ride_share_request_review_ride_share_request__["a" /* ReviewRideShareRequestPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_settings_popover_settings_popover__["a" /* SettingsPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_edit_listing_edit_listing__["a" /* EditListingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/add-car-to-profile/add-car-to-profile.module#AddCarToProfilePageModule', name: 'AddCarToProfilePage', segment: 'add-car-to-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-listing/edit-listing.module#EditListingPageModule', name: 'EditListingPage', segment: 'edit-listing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/find-a-ride/find-a-ride.module#FindARidePageModule', name: 'FindARidePage', segment: 'find-a-ride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-listings/my-listings.module#MyListingsPageModule', name: 'MyListingsPage', segment: 'my-listings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-a-ride/post-a-ride.module#PostARidePageModule', name: 'PostARidePage', segment: 'post-a-ride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request-to-share/request-to-share.module#RequestToSharePageModule', name: 'RequestToSharePage', segment: 'request-to-share', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review-ride-share-request/review-ride-share-request.module#ReviewRideShareRequestPageModule', name: 'ReviewRideShareRequestPage', segment: 'review-ride-share-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ride-listing/ride-listing.module#RideListingPageModule', name: 'RideListingPage', segment: 'ride-listing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rides-im-taking/rides-im-taking.module#RidesImTakingPageModule', name: 'RidesImTakingPage', segment: 'rides-im-taking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings-popover/settings-popover.module#SettingsPopoverPageModule', name: 'SettingsPopoverPage', segment: 'settings-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_26__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyBlFRuN8KbZssVHaIcC-gnCIA4pTVrYu_w",
                    libraries: ["places"]
                })
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_find_a_ride_find_a_ride__["a" /* FindARidePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ride_listing_ride_listing__["a" /* RideListingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_post_a_ride_post_a_ride__["a" /* PostARidePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_my_listings_my_listings__["a" /* MyListingsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_add_car_to_profile_add_car_to_profile__["a" /* AddCarToProfilePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_rides_im_taking_rides_im_taking__["a" /* RidesImTakingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_request_to_share_request_to_share__["a" /* RequestToSharePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_review_ride_share_request_review_ride_share_request__["a" /* ReviewRideShareRequestPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_settings_popover_settings_popover__["a" /* SettingsPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_edit_listing_edit_listing__["a" /* EditListingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_navigation_menu_navigation_menu__["a" /* NavigationMenuProvider */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_26__agm_core__["b" /* GoogleMapsAPIWrapper */],
                __WEBPACK_IMPORTED_MODULE_27__providers_firestore_listings_firestore_listings__["a" /* FirestoreListingsProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_firestore_cars_firestore_cars__["a" /* FirestoreCarsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyListingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firestore_listings_firestore_listings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_a_ride_post_a_ride__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ride_listing_ride_listing__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__review_ride_share_request_review_ride_share_request__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_popover_settings_popover__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the MyListingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyListingsPage = /** @class */ (function () {
    function MyListingsPage(navCtrl, navParams, menuCtrl, navMenu, listingsProvider, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.navMenu = navMenu;
        this.listingsProvider = listingsProvider;
        this.popoverCtrl = popoverCtrl;
        this.listingCount = 0;
    }
    MyListingsPage_1 = MyListingsPage;
    MyListingsPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true, 'navMenu');
        this.navMenu.setActivePage(MyListingsPage_1);
    };
    MyListingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.listingSubscription = this.listingsProvider.getUserListingsObservable().subscribe(function (listings) {
            _this.listings = listings;
            _this.listingCount = _this.listings.length;
        });
    };
    MyListingsPage.prototype.ionViewDidLeave = function () {
        this.listingSubscription.unsubscribe();
    };
    MyListingsPage.prototype.userHasListings = function () {
        return this.listingCount !== 0;
    };
    MyListingsPage.prototype.goToPostARide = function () {
        // If we're on this page, we're logged in, so don't need to check
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__post_a_ride_post_a_ride__["a" /* PostARidePage */]);
    };
    MyListingsPage.prototype.goToListingDetails = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__ride_listing_ride_listing__["a" /* RideListingPage */], { "listing": this.listings[index], 'fromMyListings': true });
    };
    MyListingsPage.prototype.goToReviewShareRequests = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__review_ride_share_request_review_ride_share_request__["a" /* ReviewRideShareRequestPage */], { 'listing': this.listings[index] });
    };
    MyListingsPage.prototype.getFormattedDateTime = function (index) {
        var date = this.listings[index].departureDate;
        var time = this.listings[index].departureTime;
        var datetime = "" + date + " " + time;
        return __WEBPACK_IMPORTED_MODULE_5_moment__(datetime).format("MMMM Do YYYY, h:mm a");
    };
    MyListingsPage.prototype.actionsToTake = function (index) {
        var listing = this.listings[index];
        return listing.whoWantsToCome.length !== 0;
    };
    MyListingsPage.prototype.presentSettingsPopover = function (event, index) {
        var settingsPopover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__settings_popover_settings_popover__["a" /* SettingsPopoverPage */], { 'listing': this.listings[index] });
        settingsPopover.present({
            ev: event
        });
    };
    MyListingsPage = MyListingsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-listings',template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\my-listings\my-listings.html"*/'<!--\n\n  Generated template for the MyListingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-toolbar>\n\n  <button ion-button menuToggle left>\n\n    <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n  <ion-title>\n\n    My Listings\n\n  </ion-title>\n\n</ion-toolbar>\n\n\n\n<ion-content class="home-bg">\n\n  <div id="container">\n\n    <div id="content">\n\n\n\n      <div id="noListingsContainer" [hidden]="userHasListings()">\n\n        <div id=\'noListingsImage\'></div>\n\n        <div id=\'noListingsTitle\'>You don\'t have any listings!</div>\n\n        <div id=\'noListingsSubText\'>Add a listing to be able to view it here</div>\n\n        <button id=\'addAListingsBtn\' ion-button block outline (click)=\'goToPostARide()\'>Add a listing</button>\n\n      </div>\n\n\n\n      <div id="listingMargin" [hidden]="!userHasListings()">\n\n\n\n        <ion-card *ngFor="let listing of listings; let i = index">\n\n          <ion-grid>\n\n            <div class="settings" (click)="presentSettingsPopover($event, i)">\n\n              <i class="fas fa-cog"></i>\n\n            </div>\n\n            <div class="listingDetails" (click)="goToListingDetails(i)">\n\n              <p>More info</p>\n\n              <i class="far fa-arrow-alt-circle-right"></i>\n\n            </div>\n\n            <ion-card-content>\n\n              <ion-col>\n\n                <div id="carImageContainer">\n\n                  <div id="carImage"></div>\n\n                  <div id="vehicleDetails">\n\n                    <div id="vehicleDetailsText">{{ listing.make }} {{ listing.model }} {{ listing.year }}</div>\n\n                  </div>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col>\n\n                <div class="lastItem">\n\n                  <div class="IconSeparator">\n\n                    <i class="fas fa-couch leftHandSideIcon"></i>\n\n                    <p id="numSeats rightHandSideIcon">{{ listing.seatsAvailable }}</p>\n\n                  </div>\n\n                  <div class="IconSeparator">\n\n                    <i class="fas fa-luggage-cart leftHandSideIcon"></i>\n\n                    <i class="fas fa-check rightHandSideIcon" *ngIf="listing.storageSpace"></i>\n\n                    <i class="fas fa-times rightHandSideIcon" *ngIf="!listing.storageSpace"></i>\n\n                  </div>\n\n                  <div class="IconSeparator" id="exlamationBtn" *ngIf="actionsToTake(i)" (click)="goToReviewShareRequests(i)">\n\n                    <i class="fas fa-exclamation-circle" [style.color]="red"></i>\n\n                    <p id="reviewTxt">Review</p>\n\n                  </div>\n\n                  <div class="IconSeparator rightHandSideIcon" *ngIf="!actionsToTake(i)" (click)="goToListingDetails(i)">\n\n                    <i class="fas fa-info-circle"></i>\n\n                  </div>\n\n                </div>\n\n                <div id="tillImageEnd">\n\n                  <div class="QuarterSeparator">\n\n                    <div class="listingTitle">From:</div>\n\n                    <div class="listingText">{{ listing.meetingPoint }}\n\n                    </div>\n\n                  </div>\n\n                  <div class="QuarterSeparator">\n\n                    <div class="listingTitle">To:</div>\n\n                    <div class="listingText">{{ listing.destination }}\n\n                    </div>\n\n                  </div>\n\n                  <div class="QuarterSeparator">\n\n                    <div class="listingTitle">When:</div>\n\n                    <div class="listingText">{{ getFormattedDateTime(i) }}</div>\n\n                  </div>\n\n                </div>\n\n              </ion-col>\n\n            </ion-card-content>\n\n          </ion-grid>\n\n        </ion-card>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\pages\my-listings\my-listings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_navigation_menu_navigation_menu__["a" /* NavigationMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firestore_listings_firestore_listings__["a" /* FirestoreListingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], MyListingsPage);
    return MyListingsPage;
    var MyListingsPage_1;
}());

//# sourceMappingURL=my-listings.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(uid, email, firstName, lastName, contactNum) {
        this.uid = uid;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNum = contactNum;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Car; });
var Car = /** @class */ (function () {
    function Car(docID, make, model, rego, uid, year) {
        this.docID = docID;
        this.make = make;
        this.model = model;
        this.rego = rego;
        this.uid = uid;
        this.year = year;
    }
    return Car;
}());

//# sourceMappingURL=car.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Listing; });
var Listing = /** @class */ (function () {
    function Listing(id, carDocumentID, departureDate, departureTime, destination, meetingPoint, seatsAvailable, storageSpace, timeCreated, userDocumentID, whoWantsToCome, whosComing) {
        this.id = id;
        this.carDocumentID = carDocumentID;
        this.departureDate = departureDate;
        this.departureTime = departureTime;
        this.destination = destination;
        this.meetingPoint = meetingPoint;
        this.seatsAvailable = seatsAvailable;
        this.storageSpace = storageSpace;
        this.timeCreated = timeCreated;
        this.userDocumentID = userDocumentID;
        this.whoWantsToCome = whoWantsToCome;
        this.whosComing = whosComing;
    }
    return Listing;
}());

//# sourceMappingURL=listing.js.map

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 286,
	"./af.js": 286,
	"./ar": 287,
	"./ar-dz": 288,
	"./ar-dz.js": 288,
	"./ar-kw": 289,
	"./ar-kw.js": 289,
	"./ar-ly": 290,
	"./ar-ly.js": 290,
	"./ar-ma": 291,
	"./ar-ma.js": 291,
	"./ar-sa": 292,
	"./ar-sa.js": 292,
	"./ar-tn": 293,
	"./ar-tn.js": 293,
	"./ar.js": 287,
	"./az": 294,
	"./az.js": 294,
	"./be": 295,
	"./be.js": 295,
	"./bg": 296,
	"./bg.js": 296,
	"./bm": 297,
	"./bm.js": 297,
	"./bn": 298,
	"./bn.js": 298,
	"./bo": 299,
	"./bo.js": 299,
	"./br": 300,
	"./br.js": 300,
	"./bs": 301,
	"./bs.js": 301,
	"./ca": 302,
	"./ca.js": 302,
	"./cs": 303,
	"./cs.js": 303,
	"./cv": 304,
	"./cv.js": 304,
	"./cy": 305,
	"./cy.js": 305,
	"./da": 306,
	"./da.js": 306,
	"./de": 307,
	"./de-at": 308,
	"./de-at.js": 308,
	"./de-ch": 309,
	"./de-ch.js": 309,
	"./de.js": 307,
	"./dv": 310,
	"./dv.js": 310,
	"./el": 311,
	"./el.js": 311,
	"./en-au": 312,
	"./en-au.js": 312,
	"./en-ca": 313,
	"./en-ca.js": 313,
	"./en-gb": 314,
	"./en-gb.js": 314,
	"./en-ie": 315,
	"./en-ie.js": 315,
	"./en-il": 316,
	"./en-il.js": 316,
	"./en-nz": 317,
	"./en-nz.js": 317,
	"./eo": 318,
	"./eo.js": 318,
	"./es": 319,
	"./es-do": 320,
	"./es-do.js": 320,
	"./es-us": 321,
	"./es-us.js": 321,
	"./es.js": 319,
	"./et": 322,
	"./et.js": 322,
	"./eu": 323,
	"./eu.js": 323,
	"./fa": 324,
	"./fa.js": 324,
	"./fi": 325,
	"./fi.js": 325,
	"./fo": 326,
	"./fo.js": 326,
	"./fr": 327,
	"./fr-ca": 328,
	"./fr-ca.js": 328,
	"./fr-ch": 329,
	"./fr-ch.js": 329,
	"./fr.js": 327,
	"./fy": 330,
	"./fy.js": 330,
	"./gd": 331,
	"./gd.js": 331,
	"./gl": 332,
	"./gl.js": 332,
	"./gom-latn": 333,
	"./gom-latn.js": 333,
	"./gu": 334,
	"./gu.js": 334,
	"./he": 335,
	"./he.js": 335,
	"./hi": 336,
	"./hi.js": 336,
	"./hr": 337,
	"./hr.js": 337,
	"./hu": 338,
	"./hu.js": 338,
	"./hy-am": 339,
	"./hy-am.js": 339,
	"./id": 340,
	"./id.js": 340,
	"./is": 341,
	"./is.js": 341,
	"./it": 342,
	"./it.js": 342,
	"./ja": 343,
	"./ja.js": 343,
	"./jv": 344,
	"./jv.js": 344,
	"./ka": 345,
	"./ka.js": 345,
	"./kk": 346,
	"./kk.js": 346,
	"./km": 347,
	"./km.js": 347,
	"./kn": 348,
	"./kn.js": 348,
	"./ko": 349,
	"./ko.js": 349,
	"./ky": 350,
	"./ky.js": 350,
	"./lb": 351,
	"./lb.js": 351,
	"./lo": 352,
	"./lo.js": 352,
	"./lt": 353,
	"./lt.js": 353,
	"./lv": 354,
	"./lv.js": 354,
	"./me": 355,
	"./me.js": 355,
	"./mi": 356,
	"./mi.js": 356,
	"./mk": 357,
	"./mk.js": 357,
	"./ml": 358,
	"./ml.js": 358,
	"./mn": 359,
	"./mn.js": 359,
	"./mr": 360,
	"./mr.js": 360,
	"./ms": 361,
	"./ms-my": 362,
	"./ms-my.js": 362,
	"./ms.js": 361,
	"./mt": 363,
	"./mt.js": 363,
	"./my": 364,
	"./my.js": 364,
	"./nb": 365,
	"./nb.js": 365,
	"./ne": 366,
	"./ne.js": 366,
	"./nl": 367,
	"./nl-be": 368,
	"./nl-be.js": 368,
	"./nl.js": 367,
	"./nn": 369,
	"./nn.js": 369,
	"./pa-in": 370,
	"./pa-in.js": 370,
	"./pl": 371,
	"./pl.js": 371,
	"./pt": 372,
	"./pt-br": 373,
	"./pt-br.js": 373,
	"./pt.js": 372,
	"./ro": 374,
	"./ro.js": 374,
	"./ru": 375,
	"./ru.js": 375,
	"./sd": 376,
	"./sd.js": 376,
	"./se": 377,
	"./se.js": 377,
	"./si": 378,
	"./si.js": 378,
	"./sk": 379,
	"./sk.js": 379,
	"./sl": 380,
	"./sl.js": 380,
	"./sq": 381,
	"./sq.js": 381,
	"./sr": 382,
	"./sr-cyrl": 383,
	"./sr-cyrl.js": 383,
	"./sr.js": 382,
	"./ss": 384,
	"./ss.js": 384,
	"./sv": 385,
	"./sv.js": 385,
	"./sw": 386,
	"./sw.js": 386,
	"./ta": 387,
	"./ta.js": 387,
	"./te": 388,
	"./te.js": 388,
	"./tet": 389,
	"./tet.js": 389,
	"./tg": 390,
	"./tg.js": 390,
	"./th": 391,
	"./th.js": 391,
	"./tl-ph": 392,
	"./tl-ph.js": 392,
	"./tlh": 393,
	"./tlh.js": 393,
	"./tr": 394,
	"./tr.js": 394,
	"./tzl": 395,
	"./tzl.js": 395,
	"./tzm": 396,
	"./tzm-latn": 397,
	"./tzm-latn.js": 397,
	"./tzm.js": 396,
	"./ug-cn": 398,
	"./ug-cn.js": 398,
	"./uk": 399,
	"./uk.js": 399,
	"./ur": 400,
	"./ur.js": 400,
	"./uz": 401,
	"./uz-latn": 402,
	"./uz-latn.js": 402,
	"./uz.js": 401,
	"./vi": 403,
	"./vi.js": 403,
	"./x-pseudo": 404,
	"./x-pseudo.js": 404,
	"./yo": 405,
	"./yo.js": 405,
	"./zh-cn": 406,
	"./zh-cn.js": 406,
	"./zh-hk": 407,
	"./zh-hk.js": 407,
	"./zh-tw": 408,
	"./zh-tw.js": 408
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 642;

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_post_a_ride_post_a_ride__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_navigation_menu_navigation_menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_find_a_ride_find_a_ride__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_my_listings_my_listings__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_firestore_users_firestore_users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_rides_im_taking_rides_im_taking__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, navMenu, usersProvider, menuCtrl) {
        this.navMenu = navMenu;
        this.usersProvider = usersProvider;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Homepage', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], requiresLogin: false },
            { title: 'Find a ride', component: __WEBPACK_IMPORTED_MODULE_8__pages_find_a_ride_find_a_ride__["a" /* FindARidePage */], requiresLogin: false },
            { title: 'Post a ride', component: __WEBPACK_IMPORTED_MODULE_6__pages_post_a_ride_post_a_ride__["a" /* PostARidePage */], requiresLogin: true },
            { title: 'My listings', component: __WEBPACK_IMPORTED_MODULE_9__pages_my_listings_my_listings__["a" /* MyListingsPage */], requiresLogin: true },
            { title: "Rides I'm taking", component: __WEBPACK_IMPORTED_MODULE_12__pages_rides_im_taking_rides_im_taking__["a" /* RidesImTakingPage */], requiresLogin: true }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        this.pages.forEach(function (element) {
            if (page.component === element.component) {
                if (_this.nav.getActive().component === element.component) {
                    _this.closeMenu();
                    return;
                }
                // we need to check if the user is logged in
                // if not, require a login and then go to the page first
                if (element.requiresLogin && !_this.usersProvider.userLoggedIn()) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], { 'toPage': page.component });
                }
                else {
                    _this.nav.setRoot(page.component);
                }
            }
        });
    };
    MyApp.prototype.checkActive = function (page) {
        return page.component == this.navMenu.activePage;
    };
    MyApp.prototype.checkAccountActive = function () {
        return this.navMenu.activePage === __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */];
    };
    MyApp.prototype.goToProfile = function () {
        if (this.checkLoggedIn() && this.nav.getActive().component !== __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */]) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */]);
        }
    };
    MyApp.prototype.checkLoggedIn = function () {
        return this.usersProvider.userLoggedIn();
    };
    MyApp.prototype.getFirstName = function () {
        return this.usersProvider.getUser().firstName;
    };
    MyApp.prototype.goToLoginPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], { 'toPage': this.navMenu.activePage });
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.usersProvider.logout().then(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        });
    };
    MyApp.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    MyApp.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\app\app.html"*/'<ion-menu id=\'navMenu\' #navMenu [content]=\'mycontent\'>\n\n    <ion-content>\n\n        <ion-list>\n\n            <div menuClose="navMenu" class=\'navUserArea\' [class.activeHighlight]=\'checkAccountActive()\' [style.cursor]="checkLoggedIn() ? \'pointer\' : \'auto\' " (click)=\'goToProfile()\'>\n\n                <div class=\'navUserIconArea\'>\n\n                    <div class="navUserOutline navProfileNoImg">\n\n                        <div class=\'navUserIcon\'></div>\n\n                    </div>\n\n                </div>\n\n                <div class=\'navUserRHSArea\'>\n\n                    <div class=\'navHelloUser\' *ngIf=\'checkLoggedIn()\'>Hello, {{getFirstName()}}</div>\n\n                    <div class=\'navHelloUser\' *ngIf=\'!checkLoggedIn()\'>Hello, Guest!</div>\n\n                </div>\n\n            </div>\n\n            <button menuClose="navMenu" ion-item *ngFor=\'let p of pages\' [class.activeHighlight]=\'checkActive(p)\' (click)=\'openPage(p)\'>\n\n                {{p.title}}\n\n            </button>\n\n            \n\n            <button class=\'navigationLoginBtn\' menuClose="navMenu" *ngIf=\'!checkLoggedIn()\' (click)=\'goToLoginPage()\'>\n\n                <div class=\'navLogoutText\'>\n\n                    Login\n\n                </div>\n\n                <ion-icon class=\'navIcon\' name="ios-log-in-outline"></ion-icon>\n\n            </button>\n\n            <button class=\'navigationLoginBtn\' menuClose="navMenu" *ngIf=\'checkLoggedIn()\' (click)=\'logout()\'>\n\n                <div class=\'navLogoutText\'>\n\n                    Logout\n\n                </div>\n\n                <ion-icon class=\'navIcon\' name="ios-log-out-outline"></ion-icon>\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #mycontent [root]=\'rootPage\'></ion-nav>'/*ion-inline-end:"C:\Users\Chris\Documents\App Dev\CarShare\CarShare\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_navigation_menu_navigation_menu__["a" /* NavigationMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirestoreCarsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firestore_users_firestore_users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_struct_car__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_first__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// GENERAL

// FIREBASE

// PROVIDERS

// STRUCTS






/*
  Generated class for the FirestoreCarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirestoreCarsProvider = /** @class */ (function () {
    function FirestoreCarsProvider(afs, usersProvider) {
        var _this = this;
        this.afs = afs;
        this.usersProvider = usersProvider;
        this.createCar = function (carMake, carModel, carRego, carYear) {
            return _this.usersProvider.getUserObservable().first().toPromise().then(function (user) {
                var uid = user.uid;
                return _this.afs.collection('cars').add({
                    make: carMake,
                    model: carModel,
                    rego: carRego,
                    userID: uid,
                    year: carYear,
                });
            });
        };
        var userObservable = this.usersProvider.getUserObservable();
        this.carsByUserIDObservable = userObservable.switchMap(function (user) {
            if (user) {
                return _this.afs.collection('cars', function (ref) { return ref.where('userID', '==', user.uid); }).snapshotChanges().map(function (changes) {
                    return changes.map(function (changeAction) {
                        var data = changeAction.payload.doc.data();
                        // Data to store in car object
                        var documentID = changeAction.payload.doc.id;
                        var make = data.make;
                        var model = data.model;
                        var rego = data.rego;
                        var uid = data.uid;
                        var year = data.year;
                        return new __WEBPACK_IMPORTED_MODULE_3__pages_struct_car__["a" /* Car */](documentID, make, model, rego, uid, year);
                    });
                });
            }
            else {
                return [];
            }
        });
        this.carsByUserIDObservable.subscribe(function (cars) {
            _this.cars = cars;
        });
    }
    FirestoreCarsProvider.prototype.getCarsByUIDObservable = function () {
        return this.carsByUserIDObservable;
    };
    FirestoreCarsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_2__providers_firestore_users_firestore_users__["a" /* FirestoreUsersProvider */]])
    ], FirestoreCarsProvider);
    return FirestoreCarsProvider;
}());

//# sourceMappingURL=firestore-cars.js.map

/***/ })

},[463]);
//# sourceMappingURL=main.js.map