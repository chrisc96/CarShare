import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { RidesImTakingPage } from './rides-im-taking';

@NgModule({
  declarations: [
    RidesImTakingPage,
  ],
  imports: [
    IonicPageModule.forChild(RidesImTakingPage),
  ],
})
export class RidesImTakingPageModule {}
