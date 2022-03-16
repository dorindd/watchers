import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { FormcComponent } from './formc/formc.component';
import { HeaderModule } from '../header/header.module';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { BannerModule } from '../banner/banner.module';
import { BrandsModule } from '../brands/brands.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FormcComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HeaderModule,
    NavbarModule,
    FooterModule,
    BannerModule,
    BrandsModule,
    RouterModule

  ]
})
export class ContactModule { }
