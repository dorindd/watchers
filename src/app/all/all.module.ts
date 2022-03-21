import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllRoutingModule } from './all-routing.module';
import { MaleComponent } from './male/male.component';
import { FemaleComponent } from './female/female.component';
import { XerixComponent } from './xerix/xerix.component';
import { ArchetypeComponent } from './archetype/archetype.component';
import { TimesComponent } from './times/times.component';
import { GshockComponent } from './gshock/gshock.component';
import { CaliforniaComponent } from './california/california.component';
import { UndoneComponent } from './undone/undone.component';
import { LuminoxComponent } from './luminox/luminox.component';

import { IdxerixComponent } from './idxerix/idxerix.component';
import { HeaderModule } from '../header/header.module';
import { NavbarModule } from '../navbar/navbar.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { IdarchetypeComponent } from './idarchetype/idarchetype.component';
import { IdtimesComponent } from './idtimes/idtimes.component';
import { IdundoneComponent } from './idundone/idundone.component';
import { IdluminoxComponent } from './idluminox/idluminox.component';
import { BannerModule } from '../banner/banner.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    MaleComponent,
    FemaleComponent,
    XerixComponent,
    ArchetypeComponent,
    TimesComponent,
    GshockComponent,
    CaliforniaComponent,
    UndoneComponent,
    LuminoxComponent,

    IdxerixComponent,
    IdarchetypeComponent,
    IdtimesComponent,
    IdundoneComponent,
    IdluminoxComponent,

  ],
  imports: [
    CommonModule,
    AllRoutingModule,
    HeaderModule,
    NavbarModule,
    MatExpansionModule,
    MatButtonModule,
    BannerModule,
    FooterModule,
   


  ]


})
export class AllModule { }
