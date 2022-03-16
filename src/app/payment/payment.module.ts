import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { MypaymentComponent } from './mypayment/mypayment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterModule } from '../footer/footer.module';




@NgModule({
  declarations: [
    MypaymentComponent,

  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
     RouterModule,
     FooterModule

  ],
  exports:[MypaymentComponent]
})
export class PaymentModule { }
