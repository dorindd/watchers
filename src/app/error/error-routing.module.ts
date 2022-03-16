import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarderrorComponent } from './carderror/carderror.component';

const routes: Routes = [
  {path:"carderror",component:CarderrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
