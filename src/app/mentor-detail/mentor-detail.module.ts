import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceModule } from '../service/service.module';
import { MentorDetailComponent } from './mentor-detail.component';

const routes: Routes = [{ path: '', component: MentorDetailComponent }];

@NgModule({
  declarations: [MentorDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ServiceModule],
  exports: [MentorDetailComponent],
})
export class MentorDetailModule {}
