import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Listing } from '../../pages/listing';

/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreProvider {

  listingsObservable : Observable<Listing[]>;

  constructor(public afs: AngularFirestore) {
    this.listingsObservable = this.afs.collection('listings').snapshotChanges().map(
      changes => {
        return changes.map(changeAction => {
          return changeAction.payload.doc.data() as Listing;
        })
      }
    )
  }

  public getListingsObservable() {
    return this.listingsObservable;
  }

}
