import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesDetailComponent } from './shoes-detail.component';
import { FormsModule } from '@angular/forms';
import { EditShoesComponent } from './edit-shoes/edit-shoes.component';

@NgModule({
  declarations: [ShoesDetailComponent, EditShoesComponent],
  imports: [CommonModule, FormsModule],
  exports: [ShoesDetailComponent],
})
export class ShoesDetailModule {}
