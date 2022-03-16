import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayRoutingModule } from './pay-routing.module';
import { PaydoneComponent } from './paydone/paydone.component';



@NgModule({
  declarations: [
    PaydoneComponent,

  ],
  imports: [
    CommonModule,
    PayRoutingModule
  ],
  exports:[PaydoneComponent]

})
export class PayModule { }
