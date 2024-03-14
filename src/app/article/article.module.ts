import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import { RecentComponent } from './recent/recent.component';
import { SearchModule } from '../search/search.module';



@NgModule({
  declarations: [
    CardComponent,
    DetailComponent,
    RecentComponent
  ],
  imports: [
    CommonModule,
  ],
  exports : [
    CardComponent,
    RecentComponent,
    DetailComponent
  ]
})
export class ArticleModule { }
