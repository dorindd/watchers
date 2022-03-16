import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule } from '@angular/forms';
import { RegisterModule } from '../register/register.module';
//









@NgModule({
  declarations: [
    UserloginComponent,


  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    RegisterModule,
  


  ],
  exports: [UserloginComponent]

})
export class LoginModule { }
