import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcComponent } from './formc/formc.component';

const routes: Routes = [
  {path:'form',component:FormcComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
