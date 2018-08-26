// GENERAL
import { Injectable } from '@angular/core';

// FIREBASE
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

// PROVIDERS
import { FirestoreUsersProvider } from '../../providers/firestore-users/firestore-users'

// STRUCTS
import { Car } from '../../pages/struct/car';

// RXJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap'

/*
  Generated class for the FirestoreCarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreCarsProvider {

  carsByUserIDObservable: Observable<Car[]>;

  cars : any[]

  constructor(public afs: AngularFirestore, public usersProvider: FirestoreUsersProvider) {
    
    let userObservable = this.usersProvider.getUserObservable();
    this.carsByUserIDObservable = userObservable.switchMap(user => {
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

    this.carsByUserIDObservable.subscribe(cars => {
      this.cars = cars;
    })
  }

  public getCarsByUIDObservable() {
    return this.carsByUserIDObservable
  }

  public createCar = (carMake, carModel, carRego, carYear): Promise<firebase.firestore.DocumentReference> => {
    return this.usersProvider.getUserObservable().first().toPromise().then(user => {
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
