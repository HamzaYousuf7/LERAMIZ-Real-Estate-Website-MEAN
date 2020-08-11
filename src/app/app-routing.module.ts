import { SingleListingComponent } from './single-listing/single-listing.component';
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AllListingsComponent } from "./all-listings/all-listings.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "allListings", component: AllListingsComponent },
  { path: "aboutUs", component: AboutUsComponent },
  { path: "contactUs", component: ContactUsComponent },
  { path: "singleListing/:listingID", component: SingleListingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
