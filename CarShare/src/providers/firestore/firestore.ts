import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Listing } from '../../pages/struct/Listing';
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
          var data = changeAction.payload.doc.data() as Listing;
          data.id = changeAction.payload.doc.id;
          return data;
        })
      }
    )

    this.listingsObservable.subscribe(listing => {
      this.listings = listing;
    })

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

  public getListing(listingId) {
    var listing = null;

    this.listings.forEach(l => {
      if(l.id === listingId) {
        listing = l;
      }
    });
    
    return listing;
  }

  public getCarsByUIDObservable() {
    return this.carsByUserIDObservable
  }
}
