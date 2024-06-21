import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesListComponent } from './shoes-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoesListComponent],
  imports: [CommonModule, FormsModule],
  exports: [ShoesListComponent],
})
export class ShoesListModule {}
