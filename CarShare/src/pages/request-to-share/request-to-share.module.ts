import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestToSharePage } from './request-to-share';

@NgModule({
  declarations: [
    RequestToSharePage,
  ],
  imports: [
    IonicPageModule.forChild(RequestToSharePage),
  ],
})
export class RequestToSharePageModule {}
