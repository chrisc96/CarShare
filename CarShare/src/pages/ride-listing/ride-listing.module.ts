import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { RideListingPage } from './ride-listing';

@NgModule({
  declarations: [
    RideListingPage,
  ],
  imports: [
    IonicPageModule.forChild(RideListingPage),
  ],
})
export class RideListingPageModule {}
