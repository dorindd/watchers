import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllnewComponent } from './allnew/allnew.component';
import { IdnewComponent } from './idnew/idnew.component';

const routes: Routes = [
  {path:'allnew',component:AllnewComponent},
  {path:'allnew/:id',component:IdnewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRoutingModule { }
