import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchetypeComponent } from './archetype/archetype.component';
import { CaliforniaComponent } from './california/california.component';
import { FemaleComponent } from './female/female.component';
import { GshockComponent } from './gshock/gshock.component';
import { IdarchetypeComponent } from './idarchetype/idarchetype.component';
import { IdluminoxComponent } from './idluminox/idluminox.component';
import { IdtimesComponent } from './idtimes/idtimes.component';
import { IdundoneComponent } from './idundone/idundone.component';
import { IdxerixComponent } from './idxerix/idxerix.component';
import { LuminoxComponent } from './luminox/luminox.component';
import { MaleComponent } from './male/male.component';
import { TimesComponent } from './times/times.component';

import { UndoneComponent } from './undone/undone.component';
import { XerixComponent } from './xerix/xerix.component';

const routes: Routes = [
  {path:'california/:id',component:MaleComponent},
  {path:'gshock/:id',component:FemaleComponent},
  {path:'archetype',component:ArchetypeComponent},
  {path:'archetype/:id',component:IdarchetypeComponent},
  {path:'california',component:CaliforniaComponent},
  {path:'gshock',component:GshockComponent},
  {path:'luminox',component:LuminoxComponent},
  {path:'luminox/:id',component:IdluminoxComponent},
  {path:'times',component:TimesComponent},
  {path:'times/:id',component:IdtimesComponent},

  {path:'undone',component:UndoneComponent},
  {path:'xerix',component:XerixComponent},
  {path:'xerix/:id',component:IdxerixComponent},
  {path:'undone/:id',component:IdundoneComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllRoutingModule { }
