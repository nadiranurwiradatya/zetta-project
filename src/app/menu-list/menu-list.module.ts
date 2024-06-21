import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuListComponent],
  imports: [CommonModule, FormsModule],
  exports: [MenuListComponent],
})
export class MenuListModule {}
