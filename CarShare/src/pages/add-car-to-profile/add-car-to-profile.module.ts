import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
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
