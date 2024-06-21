import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FieldComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FieldComponent],
})
export class SearchModule {}
