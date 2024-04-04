import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'detail-player/:id', component: DetailComponent },
];

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [DetailComponent],
})
export class DetailModule {}
