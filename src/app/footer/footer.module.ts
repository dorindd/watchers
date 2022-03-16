import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyfooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [MyfooterComponent]
})
export class FooterModule { }
