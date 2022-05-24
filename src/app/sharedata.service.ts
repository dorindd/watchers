import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  dataWelcome: any = false;
  getDataWelcome() {
    return this.dataWelcome
  }
  allShow = new Subject();
  getShowOut() {
  }
  constructor(private fireauth: AngularFireAuth, private route: Router) {
  }
  //login user
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.route.navigate(['']);
      this.dataWelcome = true;
    }, err => {
      alert(err.message)
    });
  }
  //register
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('registration suucesuffly');
      this.route.navigate(['/auth/user']);
    }, err => {
      alert(err.message)
    });
  }
  //logout
  logOut() {
    this.fireauth.signOut().then(() => {
      this.dataWelcome = false;
      this.route.navigate(['']);
      localStorage.removeItem('token')
    }, err => {
      alert(err.message);
    })
  }
  //sign in with google
  signIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider())
      .then(res => {
        this.route.navigate(['']);
        localStorage.setItem('token', JSON.stringify(res.user?.uid));
        this.dataWelcome = true
      }, err => {
        alert(err.message)
      });
  }
}
