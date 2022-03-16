import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';

import { MainComponent } from './main/main.component';
import{AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NavbarModule } from './navbar/navbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { CarouselsModule } from './carousels/carousels.module';
import { WatchtypeModule } from './watchtype/watchtype.module';
import { BrandsModule } from './brands/brands.module';
import { AllModule } from './all/all.module';
import { NewModule } from './new/new.module';
import { BannerModule } from './banner/banner.module';
import { MottoModule } from './motto/motto.module';
import { FooterModule } from './footer/footer.module';







@NgModule({
  declarations: [
    AppComponent,
    MainComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HeaderModule,


    FormsModule,
     AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    NavbarModule,
    BrowserAnimationsModule,
     CarouselsModule,
     WatchtypeModule,
     BrandsModule,
     AllModule,
     NewModule,
     BannerModule,
     MottoModule,
     FooterModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
