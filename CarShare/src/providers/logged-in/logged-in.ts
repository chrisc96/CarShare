import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireModule } from 'angularfire2';
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

  private user: firebase.User;
  
  constructor(public firebase: AngularFireAuth) {
    firebase.authState.subscribe(user => {
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
    return this.firebase.auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
  }
}
