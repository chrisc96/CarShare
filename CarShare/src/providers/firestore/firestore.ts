import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Listing } from '../../pages/struct/listing';
import { Car } from '../../pages/struct/car';
import { User } from '../../pages/struct/user';
import { LoggedInProvider } from '../logged-in/logged-in';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap'
import * as firebase from 'firebase';
import { combineLatest } from 'rxjs';
import { of } from 'rxjs';
import { Time } from '@angular/common';


/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreProvider {

  listingsObservable: Observable<any[]>;
  carsByUserIDObservable: Observable<Car[]>;
  userObservable: Observable<User>


  listings: Listing[];

  constructor(public afs: AngularFirestore, public loginSystem: LoggedInProvider) {
    // Setup observables on the cars that this user has
    // Get user observable to unwrap
    this.userObservable = this.loginSystem.getUserObservable();
    this.carsByUserIDObservable = this.userObservable.switchMap(user => {
      if (user) {
        return this.afs.collection('cars', ref => ref.where('userID', '==', user.uid)).snapshotChanges().map(changes => {
          return changes.map(changeAction => {
            const data = changeAction.payload.doc.data() as Car;

            // Data to store in car object
            const documentID = changeAction.payload.doc.id
            const make = data.make
            const model = data.model
            const rego = data.rego
            const uid = data.uid
            const year = data.year
            return new Car(documentID, make, model, rego, uid, year);
          })
        })
      }
      else {
        return [];
      }
    })

    this.listingsObservable = this.afs.collection('listings').snapshotChanges().map(listings => {
      return listings.map((listing) => {
        const project_data = listing.payload.doc.data() as Listing;
        const carID = project_data.carDocumentID;
        const userID = project_data.userDocumentID;

        return combineLatest(this.afs.doc('cars/' + carID).valueChanges(), this.afs.doc('users/' + userID).valueChanges(), (data1, data2) => {
          return {...project_data, ...data1, ...data2};
        })                 
      })
    }).mergeMap(observables => combineLatest(observables))
    
  }

  public getListingsObservable() {
    return this.listingsObservable;
  }

  public getUserObservable() {
    return this.userObservable;
  }

  public getCarsByUIDObservable() {
    return this.carsByUserIDObservable
  }

  public updateUser(firstName, lastName, contactNum, uid) {
    return this.afs.doc<User>('users/' + uid).update({
      firstName: firstName,
      lastName: lastName,
      contactNum: contactNum
    })
  }

  public createListing = (car, departDate, departTime, noSeats, storageAvail, from, to): Promise<firebase.firestore.DocumentReference> => {
    return this.loginSystem.getUserObservable().first().toPromise().then(user => {
      let uid = user.uid;
      let carDocID = car.docID;
      return this.afs.collection('listings').add({
        timeCreated: firebase.firestore.FieldValue.serverTimestamp(),
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
      })
    })
  }

  public createCar = (carMake, carModel, carRego, carYear): Promise<firebase.firestore.DocumentReference> => {
    return this.loginSystem.getUserObservable().first().toPromise().then(user => {
      let uid = user.uid;
      return this.afs.collection('cars').add({
        make: carMake,
        model: carModel,
        rego: carRego,
        userID: uid,
        year: carYear,
      })
    })
  }
}
