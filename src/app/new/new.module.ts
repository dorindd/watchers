import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { AllnewComponent } from './allnew/allnew.component';
import { HeaderModule } from '../header/header.module';
import { NavbarModule } from '../navbar/navbar.module';
import { IdnewComponent } from './idnew/idnew.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FooterModule } from '../footer/footer.module';
import { BannerModule } from '../banner/banner.module';

@NgModule({
  declarations: [
    AllnewComponent,
    IdnewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    HeaderModule,
    NavbarModule,
    MatExpansionModule,
    FooterModule,
    BannerModule
  ],
  exports:[AllnewComponent]
})
export class NewModule { }
