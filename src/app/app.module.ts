import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { SiteInternetComponent } from './pages/site-internet/site-internet.component';
import { ApplicationMobileOuWebComponent } from './pages/application-mobile-ou-web/application-mobile-ou-web.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SwiperModule } from 'swiper/angular';
import { RenfortComponent } from './pages/renfort/renfort.component';
import { DesignComponent } from './pages/design/design.component';
import { ECommerceComponent } from './pages/e-commerce/e-commerce.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    SiteInternetComponent,
    ApplicationMobileOuWebComponent,
    RenfortComponent,
    DesignComponent,
    ECommerceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
