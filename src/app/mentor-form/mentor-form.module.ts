import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorFormComponent } from './mentor-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ServiceModule } from '../service/service.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [{ path: '', component: MentorFormComponent }];

@NgModule({
  declarations: [MentorFormComponent],
  imports: [
    MatRadioModule,
    MatDialogModule,
    CommonModule,
    RouterModule.forChild(routes),
    ServiceModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  exports: [MentorFormComponent],
})
export class MentorFormModule {}
