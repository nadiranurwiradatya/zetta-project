import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

const routes: Routes = [
  { path: 'player-form/:id', component: FormComponent },
  { path: 'player-form', component: FormComponent },
];

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [FormComponent],
})
export class FormModule {}
