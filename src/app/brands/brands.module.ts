import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MybrandsComponent } from './mybrands/mybrands.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MybrandsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MybrandsComponent]

})
export class BrandsModule { }
