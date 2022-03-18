import { Component, OnInit } from '@angular/core';
import { SharedataService } from 'src/app/sharedata.service';
import{AngularFireAuth} from '@angular/fire/compat/auth';




@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {



  email:any=''

 password:any=''

show: boolean = false;

message='something went wrong'



  constructor(private share:SharedataService,private fireauth:AngularFireAuth) {



  }






  ngOnInit(): void {



  }

  showPsd(){
this.show = !this.show;

  }

 signIn(){

   this.share.signIn()

   

  }





login(){
  if(this.email==''){
    alert('please enter the email')
    return;
  }
  if(this.password ==''){
    alert('please enter the password')
    return;
  }
  this.share.login(this.email, this.password);


  this.email='';
  this.password='';



}



  logOut(){
    this.share.logOut()
  }



}


