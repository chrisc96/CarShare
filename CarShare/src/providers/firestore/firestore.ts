import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Listing } from '../../pages/struct/listing';
import { Car } from '../../pages/struct/Car';
import { User } from '../../pages/struct/User';
import { LoggedInProvider } from '../logged-in/logged-in';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreProvider {

  listingsObservable : Observable<Listing[]>;
  listings: Listing[]

  carsByUserIDObservable: Observable<Car[]>;
  carObserver: any
  carsByUID : Car[]

  constructor(public afs: AngularFirestore, public loginSystem : LoggedInProvider) {

    // Create the observable on all listings
    this.listingsObservable = this.afs.collection('listings').snapshotChanges().map(
      changes => {
        return changes.map(changeAction => {
          return changeAction.payload.doc.data() as Listing;
        })
      }
    )

    const uobserv = this.loginSystem.getUserObservable() // Get user observable to unwrap
    this.carsByUserIDObservable = uobserv.switchMap(user => {
      return this.afs.collection('cars', ref => ref.where('userID', '==', user.uid)).snapshotChanges().map(
        changes => {
          return changes.map(changeAction => {
            return changeAction.payload.doc.data() as Car;
          })
        })
    })
  }

  public getListingsObservable() {
    return this.listingsObservable;
  }

  public getCarsByUIDObservable() {
    return this.carsByUserIDObservable
  }
}
