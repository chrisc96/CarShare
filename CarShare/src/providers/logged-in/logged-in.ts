import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

/*
  Generated class for the LoggedInProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoggedInProvider {

  public user: firebase.User;
  public db : firebase.firestore.Firestore;
  
  constructor(public fireAuth: AngularFireAuth) {
    this.db = firebase.firestore()
    const settings = {timestampsInSnapshots: true}
    this.db.settings(settings)

    fireAuth.authState.subscribe(user => {
      this.user = user;
    });
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
      this.user = resp.user
      return this.db.collection('users').doc(this.user.uid).set({
        email: this.user.email,
        firstName: firstName,
        lastName: lastName,
        contactNum: contactNum
      })
  }
}
