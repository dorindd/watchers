import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BascketRoutingModule } from './bascket-routing.module';
import { MybascketComponent } from './mybascket/mybascket.component';
import { HeaderModule } from '../header/header.module';
import { NavbarModule } from '../navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { BannerModule } from '../banner/banner.module';
import { FooterModule } from '../footer/footer.module';
import { BrandsModule } from '../brands/brands.module';


@NgModule({
  declarations: [
    MybascketComponent
  ],
  imports: [
    CommonModule,
    BascketRoutingModule,
    HeaderModule,
    NavbarModule,
    RouterModule,
    FooterModule,
    BannerModule,
    BrandsModule
  ]
})
export class BascketModule { }
