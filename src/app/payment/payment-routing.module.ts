import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MypaymentComponent } from './mypayment/mypayment.component';

const routes: Routes = [
  {path:"mypayment",component:MypaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
