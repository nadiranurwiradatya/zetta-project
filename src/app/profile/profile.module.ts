import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopprofileComponent } from './topprofile/topprofile.component';
import { BotprofileComponent } from './botprofile/botprofile.component';
import { ArticleModule } from '../article/article.module';



@NgModule({
  declarations: [
    TopprofileComponent,
    BotprofileComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BotprofileComponent,
    TopprofileComponent
  ]
})
export class ProfileModule { }
