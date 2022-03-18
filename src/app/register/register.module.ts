import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { FormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    RegisteruserComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    FooterModule

  ],
  exports:[RegisteruserComponent]
})
export class RegisterModule { }
