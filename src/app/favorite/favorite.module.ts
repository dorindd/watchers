import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRoutingModule } from './favorite-routing.module';
import { MyfavoriteComponent } from './myfavorite/myfavorite.component';
import { HeaderModule } from '../header/header.module';
import { NavbarModule } from '../navbar/navbar.module';
import { BannerModule } from '../banner/banner.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    MyfavoriteComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    HeaderModule,
    NavbarModule,
    BannerModule,
    FooterModule,
  ]
})
export class FavoriteModule { }
