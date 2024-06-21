import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuFormComponent } from './menu-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [MenuFormComponent],
})
export class MenuFormModule {}
