import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesFormComponent } from './shoes-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoesFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [ShoesFormComponent],
})
export class ShoesFormModule {}
