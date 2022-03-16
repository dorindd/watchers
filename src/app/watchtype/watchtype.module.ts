import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MywatchtypeComponent } from './mywatchtype/mywatchtype.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MywatchtypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
  ,exports:[MywatchtypeComponent]
})
export class WatchtypeModule { }
