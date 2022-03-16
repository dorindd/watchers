import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThanksRoutingModule } from './thanks-routing.module';
import { TankyouComponent } from './tankyou/tankyou.component';


@NgModule({
  declarations: [
    TankyouComponent
  ],
  imports: [
    CommonModule,
    ThanksRoutingModule
  ]
})
export class ThanksModule { }
