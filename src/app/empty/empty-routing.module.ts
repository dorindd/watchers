import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagemptyComponent } from './bagempty/bagempty.component';

const routes: Routes = [
  {path:'bagempty',component:BagemptyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmptyRoutingModule { }
