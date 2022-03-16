import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MybannerComponent } from './mybanner/mybanner.component';



@NgModule({
  declarations: [
    MybannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MybannerComponent]
})
export class BannerModule { }
