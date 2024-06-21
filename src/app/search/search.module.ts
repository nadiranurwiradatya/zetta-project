import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { ArticleModule } from '../article/article.module'; // Import ArticleModule if needed
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FieldComponent],
  imports: [
    CommonModule,
    ArticleModule, // Include ArticleModule if needed
    FormsModule,
  ],
  exports: [FieldComponent],
})
export class SearchModule {}
