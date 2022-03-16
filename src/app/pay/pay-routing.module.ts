import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaydoneComponent } from './paydone/paydone.component';

const routes: Routes = [
  {path:"paydone",component:PaydoneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayRoutingModule { }
