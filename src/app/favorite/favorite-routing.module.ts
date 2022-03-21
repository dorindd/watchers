import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyfavoriteComponent } from './myfavorite/myfavorite.component';

const routes: Routes = [
  {path:'myfavorite',component:MyfavoriteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteRoutingModule { }
