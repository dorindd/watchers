import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';
import{ GoogleAuthProvider} from '@angular/fire/auth';
import  firebase from 'firebase/compat';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  welcome=new Subject();
  mywelcome:any;

showLogIn:any=true;
showLogOut:any=false;
user:any=true

getShowIn(){
  this.welcome.next(this.mywelcome)
  return this.showLogIn;



}
getShowOut(){

  return this.showLogOut


}






  constructor(private fireauth:AngularFireAuth,private route:Router) {

 this.fireauth.authState.subscribe((auth)=>{

  if(auth!=null){
    this.user=auth;





  }
})












  }

  //login user

 login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.route.navigate(['']);
      this.showLogIn=false//hide log in
      this.showLogOut=true;

      this.welcome.next(this.mywelcome=true)//
    },err=>{
      alert(err.message)
    });

  }

  //register
  register(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
alert('registration suucesuffly');
       this.route.navigate(['/auth/user']);

    },err=>{
alert(err.message)

    });

  }
//logout
  logOut(){
    localStorage.removeItem('token')

  return  this.fireauth.signOut()


}
//sign in with google
signIn(){

return this.fireauth.signInWithPopup(new GoogleAuthProvider())
 .then(res=>{
   localStorage.setItem('token',JSON.stringify(res.user?.uid));
 this.route.navigate(['']);
 this.showLogIn=false//hide log in
 this.showLogOut=true;


   this.welcome.next(this.mywelcome=true)//




 },err=>{
   alert(err.message)
 });




}





}
