import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { PostARidePage } from './post-a-ride';

@NgModule({
  declarations: [
    PostARidePage,
  ],
  imports: [
    IonicPageModule.forChild(PostARidePage),
  ],
})
export class PostARidePageModule {}
