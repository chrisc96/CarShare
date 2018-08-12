import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCarToProfilePage } from './add-car-to-profile';

@NgModule({
  declarations: [
    AddCarToProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(AddCarToProfilePage),
  ],
})
export class AddCarToProfilePageModule {}
