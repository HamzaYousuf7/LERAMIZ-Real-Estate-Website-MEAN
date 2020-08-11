import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RecentPropertiesComponent } from './recent-properties/recent-properties.component';
import { HomeComponent } from './home/home.component';
import { FeaturedListingsComponent } from './featured-listings/featured-listings.component';
import { AppRoutingModule } from './app-routing.module';
import { AllListingsComponent } from './all-listings/all-listings.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SingleListingComponent } from './single-listing/single-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RecentPropertiesComponent,
    HomeComponent,
    FeaturedListingsComponent,
    AllListingsComponent,
    AboutUsComponent,
    ContactUsComponent,
    SingleListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
