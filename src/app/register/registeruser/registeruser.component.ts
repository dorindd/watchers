import { Component, OnInit } from '@angular/core';
import { SharedataService } from 'src/app/sharedata.service';
import{AngularFireAuth} from '@angular/fire/compat/auth';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.scss']
})
export class RegisteruserComponent implements OnInit {
 email:any=''
  password:any=''
  show: boolean = false;
  constructor(private share:SharedataService) {








   }

  ngOnInit(): void {
  }

   showPsd(){
this.show = !this.show;

  }

  register(){

if(this.email==''){
    alert('please enter the email')
    return;
  }
  if(this.password ==''){
    alert('please enter the password')
    return;
  }
    this.share.register(this.email, this.password);
  this.email='';
  this.password=''

}

signIn(){
  this.share.signIn()//plus sign in
}

}
