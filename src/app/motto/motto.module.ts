import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MymottoComponent } from './mymotto/mymotto.component';



@NgModule({
  declarations: [
    MymottoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MymottoComponent]
})
export class MottoModule { }
