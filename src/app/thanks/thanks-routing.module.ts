import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TankyouComponent } from './tankyou/tankyou.component';

const routes: Routes = [
  {path:'you',component:TankyouComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThanksRoutingModule { }
