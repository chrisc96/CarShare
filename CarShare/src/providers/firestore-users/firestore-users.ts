// GENERAL 
import { Injectable } from '@angular/core';

// FIREBASE
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

// STRUCTS
import { User } from '../../pages/struct/user'

// RXJS
import { Observable } from "rxjs/Observable"
import { combineLatest } from 'rxjs';
import { of } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirestoreUsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreUsersProvider {

  public user: User | null;
  public db: firebase.firestore.Firestore;

  private userObservable: Observable<User>

  constructor(public fireAuth: AngularFireAuth, public afs: AngularFirestore) {

    this.userObservable = this.fireAuth.authState.flatMap(user => {
      if (user) {
        return combineLatest(this.afs.doc('users/' + user.uid).valueChanges(), of(user))
      }
      else {
        return combineLatest(of(null), of(null));
      }
    })
      .map((packagedInfo: Array<any>) => {
        const user = packagedInfo[1];
        const userInfo = packagedInfo[0];
        if (!user || !userInfo) {
          return null;
        }

        return new User(user.uid, user.email, userInfo.firstName, userInfo.lastName, userInfo.contactNum);
      });

    this.userObservable.subscribe(user => {
      this.user = user;
    });
  }

  // Post to DB

  login = (email, password) => {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password)
  }

  signup(email, password) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  linkUsertoDB = (resp, firstName, lastName, contactNum) => {
    // Give the user struct their own details
    this.user = new User(resp.user.uid, resp.user.email, firstName, lastName, contactNum)
    // Create a document for them with their personal details
    return this.afs.collection('users').doc(this.user.uid).set({
      firstName: firstName,
      lastName: lastName,
      contactNum: contactNum
    })
  }

  public updateUser(firstName, lastName, contactNum, uid) {
    return this.afs.doc<User>('users/' + uid).update({
      firstName: firstName,
      lastName: lastName,
      contactNum: contactNum
    })
  }

  // General methods

  logout() {
    return this.fireAuth.auth.signOut();
  }

  // Helpers

  userLoggedIn() {
    return this.user !== undefined && this.user !== null
  }

  getUserObservable() {
    return this.userObservable;
  }

  getUser() {
    if (this.userLoggedIn()) {
      return this.user;
    }
  }
}