import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MynavbarComponent } from './mynavbar/mynavbar.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    MynavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ]
  ,exports:[MynavbarComponent]
})
export class NavbarModule { }
