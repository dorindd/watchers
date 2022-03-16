import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllwfemaleComponent } from './allwfemale/allwfemale.component';
import { IdwwomenComponent } from './idwwomen/idwwomen.component';

const routes: Routes = [
  {path:'allwfemale',component:AllwfemaleComponent},
  {path:'allwfemale/:id',component:IdwwomenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WfemaleRoutingModule { }
