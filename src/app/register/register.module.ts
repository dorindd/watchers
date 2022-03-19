import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { FormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';
import { MottoModule } from '../motto/motto.module';



@NgModule({
  declarations: [
    RegisteruserComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    FooterModule,
    MottoModule

  ],
  exports:[RegisteruserComponent]
})
export class RegisterModule { }
