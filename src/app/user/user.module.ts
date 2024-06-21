import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NoopAnimationPlayer } from '@angular/animations';
import { v4 as uuidv4 } from 'uuid';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent,
  },
  {
    path: 'form',
    component: UserFormComponent,
  },
];

@NgModule({
  declarations: [
    UserComponent,
    UserCardComponent,
    UserFormComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxSpinnerModule,
  ],
  exports: [
    UserComponent,
    UserCardComponent,
    UserFormComponent,
    UserDetailComponent,
  ],
})
export class UserModule {}
