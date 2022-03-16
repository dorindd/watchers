import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteruserComponent } from './registeruser/registeruser.component';

const routes: Routes = [
  {path:'registeruser',component:RegisteruserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
