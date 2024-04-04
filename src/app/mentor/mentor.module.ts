import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorComponent } from './mentor.component';
import { MentorTableComponent } from './mentor-table/mentor-table.component';
import { FormsModule } from '@angular/forms';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ServiceModule } from '../service/service.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [MentorComponent, MentorTableComponent],
  // entryComponent: [MentorFormComponent],
  imports: [
    CommonModule,
    ServiceModule,
    FormsModule,
    MatSort,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
  ],
  exports: [MentorComponent, MentorTableComponent],
})
export class MentorModule {}
