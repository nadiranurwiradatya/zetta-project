import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerFormComponent } from './player-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'player-form/:id', component: PlayerFormComponent },
  { path: 'player-form', component: PlayerFormComponent },
];

@NgModule({
  declarations: [PlayerFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [PlayerFormComponent],
})
export class PlayerFormModule {}
