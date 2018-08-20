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


/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreProvider {

  listingsObservable : Observable<Listing[]>;
  carsByUserIDObservable: Observable<Car[]>;
  userObservable : Observable<User>

  constructor(public afs: AngularFirestore, public loginSystem : LoggedInProvider) {
    // Setup observables on the cars that this user has
    this.userObservable = this.loginSystem.getUserObservable() // Get user observable to unwrap
    this.carsByUserIDObservable = this.userObservable .switchMap(user => {
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
    })
  }

  public getListingsObservable() {
    // Create the observable on all listings
    this.listingsObservable = this.afs.collection('listings').snapshotChanges().map(
      changes => {
        return changes.map(changeAction => {
          var data = changeAction.payload.doc.data() as Listing;
          data.id = changeAction.payload.doc.id;
          return data;
        })
      }
    )

    return this.listingsObservable;
  }

  public getUserObservable() {
    return this.userObservable;
  }

  public getCarsByUIDObservable() {
    return this.carsByUserIDObservable
  }

  public updateUser (firstName, lastName, contactNum) {
    return this.loginSystem.getUserObservable().first().toPromise().then(user => {
      let uid = user.uid;
      return this.afs.doc<User>('users/' + uid).update({
        firstName: firstName,
        lastName: lastName,
        contactNum: contactNum
      })
    })
  }

  public createListing = (car, departDate, departTime, noSeats, storageAvail, from, to) : Promise<firebase.firestore.DocumentReference> => {
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

  public createCar = (carMake, carModel, carRego, carYear) : Promise<firebase.firestore.DocumentReference> => {
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
