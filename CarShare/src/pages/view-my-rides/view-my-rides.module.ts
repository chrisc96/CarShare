import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMyRidesPage } from './view-my-rides';

@NgModule({
  declarations: [
    ViewMyRidesPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewMyRidesPage),
  ],
})
export class ViewMyRidesPageModule {}
