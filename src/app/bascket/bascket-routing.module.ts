import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MybascketComponent } from './mybascket/mybascket.component';

const routes: Routes = [
  {path:"mybascket",component:MybascketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BascketRoutingModule { }
