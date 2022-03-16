import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyRoutingModule } from './empty-routing.module';
import { BagemptyComponent } from './bagempty/bagempty.component';
import { HeaderModule } from '../header/header.module';
import { NavbarModule } from '../navbar/navbar.module';
import { BannerModule } from '../banner/banner.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    BagemptyComponent
  ],
  imports: [
    CommonModule,
    EmptyRoutingModule,
   HeaderModule,
   NavbarModule,
   BannerModule,
   FooterModule
  ],
  exports:[BagemptyComponent]
})
export class EmptyModule { }
