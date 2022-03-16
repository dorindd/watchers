import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WfemaleRoutingModule } from './wfemale-routing.module';
import { AllwfemaleComponent } from './allwfemale/allwfemale.component';
import { HeaderModule } from '../header/header.module';
import { NavbarModule } from '../navbar/navbar.module';
import { IdwwomenComponent } from './idwwomen/idwwomen.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FooterModule } from '../footer/footer.module';
import { BannerModule } from '../banner/banner.module';

@NgModule({
  declarations: [
    AllwfemaleComponent,
    IdwwomenComponent
  ],
  imports: [
    CommonModule,
    WfemaleRoutingModule,
    HeaderModule,
    NavbarModule,
    MatExpansionModule,
    FooterModule,
    BannerModule
  ]
})
export class WfemaleModule { }
