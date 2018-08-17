import { AngularFireAuth } from 'angularfire2/auth'
import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { Observable } from 'rxjs/Observable'
import { User } from '../../pages/struct/User'
import { AngularFirestore } from 'angularfire2/firestore';


/*
  Generated class for the LoggedInProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoggedInProvider {

  public user: User;
  public db: firebase.firestore.Firestore;

  private userObservable: Observable<User>
  private userObserver: any

  constructor(public fireAuth: AngularFireAuth, public afs: AngularFirestore) {
    this.userObservable = Observable.create((observer) => {
      this.userObserver = observer;
      this.subscriptions()
    })
  }

  subscriptions() {
    // If any data changes in the /users collection, we realtime update the 'this.user' reference
    this.fireAuth.authState.subscribe(user => {
      if (user) {
          this.afs.doc('users/' + user.uid).valueChanges().subscribe((userInfo: { firstName: string, lastName: string, contactNum: string }) => {
            if (userInfo) {
              this.user = new User(user.uid, user.email, userInfo.firstName, userInfo.lastName, userInfo.contactNum)
            }
            else {
              this.user = null
            }
            this.userObserver.next(this.user)
          })
      }
      else {
        this.user = null
      }
    })
  }

  userLoggedIn() {
    return this.user !== undefined && this.user !== null
  }

  getUser() {
    if (this.userLoggedIn()) {
      return this.user;
    }
  }

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

  getUserObservable() {
    return this.userObservable;
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }
}
