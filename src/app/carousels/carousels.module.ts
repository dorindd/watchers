import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycarouselsComponent } from './mycarousels/mycarousels.component';




@NgModule({
  declarations: [
    MycarouselsComponent
  ],
  imports: [
    CommonModule,



  ],
  exports:[MycarouselsComponent]
})
export class CarouselsModule { }
