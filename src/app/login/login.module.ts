import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule } from '@angular/forms';
import { RegisterModule } from '../register/register.module';
import { FooterModule } from '../footer/footer.module';
import { MottoModule } from '../motto/motto.module';
import { HeaderModule } from '../header/header.module';
import { NavbarModule } from '../navbar/navbar.module';
import { BrandsModule } from '../brands/brands.module';








@NgModule({
  declarations: [
    UserloginComponent,


  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    RegisterModule,
    FooterModule,
    MottoModule,
    HeaderModule,
    NavbarModule,
    BrandsModule



  ],
  exports: [UserloginComponent]

})
export class LoginModule { }
