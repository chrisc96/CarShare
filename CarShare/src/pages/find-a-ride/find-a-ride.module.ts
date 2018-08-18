import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindARidePage } from './find-a-ride';

@NgModule({
  declarations: [
    FindARidePage,
  ],
  imports: [
    IonicPageModule.forChild(FindARidePage),
  ],
})
export class FindARidePageModule { }
