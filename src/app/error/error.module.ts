import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { CarderrorComponent } from './carderror/carderror.component';



@NgModule({
  declarations: [
    CarderrorComponent,
    
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ],
  exports:[CarderrorComponent]
})
export class ErrorModule { }
