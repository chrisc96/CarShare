// GENERAL
import { Injectable } from '@angular/core';

// FIREBASE
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

// STRUCTS
import { Listing } from '../../pages/struct/listing';
import { User } from '../../pages/struct/user';

// PROVIDERS
import { FirestoreUsersProvider } from '../../providers/firestore-users/firestore-users'

// RXJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap'
import { combineLatest } from 'rxjs';

/*
  Generated class for the FirestoreListingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreListingsProvider {

  allListingsObservable: Observable<any[]>;
  userListingsObservable: Observable<Listing[]>;

  constructor(public afs: AngularFirestore, public usersProvider: FirestoreUsersProvider) {

    this.allListingsObservable = this.afs.collection('listings').snapshotChanges().map(listings => {
      return listings.map((listing) => {
        const project_data = listing.payload.doc.data() as Listing;
        const carID = project_data.carDocumentID;
        const userID = project_data.userDocumentID;

        return combineLatest(this.afs.doc('cars/' + carID).valueChanges(), this.afs.doc('users/' + userID).valueChanges(), (data1, data2) => {
          return {...project_data, ...data1, ...data2};
        })                 
      })
    }).mergeMap(observables => combineLatest(observables))

    this.userListingsObservable = this.usersProvider.getUserObservable().flatMap(user => {
      return this.afs.collection('listings', ref => ref.where('userDocumentID', '==', user.uid)).snapshotChanges().map(listings => {
        return listings.map((listing) => {
          const project_data = listing.payload.doc.data() as Listing;
          const carID = project_data.carDocumentID;
  
          return combineLatest(this.afs.doc('cars/' + carID).valueChanges(), (data1) => {
            return {...project_data, ...data1};
          })                 
        })
      }).mergeMap(observables => combineLatest(observables))
    });
  }

  public createListing = (car, departDate, departTime, noSeats, storageAvail, from, to): Promise<firebase.firestore.DocumentReference> => {
    return this.usersProvider.getUserObservable().first().toPromise().then(user => {
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

  public updateUser(firstName, lastName, contactNum, uid) {
    return this.afs.doc<User>('users/' + uid).update({
      firstName: firstName,
      lastName: lastName,
      contactNum: contactNum
    })
  }

  public getUserListingsObservable() {
    return this.userListingsObservable;
  }

  public getAllListingsObservable() {
    return this.allListingsObservable;
  }
}
