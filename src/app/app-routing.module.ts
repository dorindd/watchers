import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import { MainComponent } from './main/main.component';




const routes: Routes = [
 {path:'main',component:MainComponent},
  {path:"",component:MainComponent,pathMatch:"full"},

  {path:'auth',loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
  {path:'register',loadChildren:()=>import('./register/register.module').then((m)=>m.RegisterModule)},
  {path:'all',loadChildren:()=>import('./all/all.module').then((m)=>m.AllModule)},
  {path:'bascket',loadChildren:()=>import('./bascket/bascket.module').then(m=>m.BascketModule)},
  {path:'payment',loadChildren:()=>import('./payment/payment.module').then(m=>m.PaymentModule)},

  {path:"pay",loadChildren:()=>import("./pay/pay.module").then((m)=>m.PayModule)},

  {path:"error",loadChildren:()=>import("./error/error.module").then((m)=>m.ErrorModule)},
  {path:'empty',loadChildren:()=>import('./empty/empty.module').then((m)=>m.EmptyModule)},
  {path:'wfemale',loadChildren:()=>import('./wfemale/wfemale.module').then(m=>m.WfemaleModule)},
  {path:'new',loadChildren:()=>import('./new/new.module').then(m=>m.NewModule)},
  {path:'contact',loadChildren:()=>import('./contact/contact.module').then(m=>m.ContactModule)},
  { path:'thanks',loadChildren:()=>import('./thanks/thanks.module').then(m=>m.ThanksModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
