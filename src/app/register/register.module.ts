import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisteruserComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,

  ],
  exports:[RegisteruserComponent]
})
export class RegisterModule { }
