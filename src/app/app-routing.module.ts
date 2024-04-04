import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorComponent } from './mentor/mentor.component';
import { MentorModule } from './mentor/mentor.module';
import { MentorDetailModule } from './mentor-detail/mentor-detail.module';
import { MentorDetailComponent } from './mentor-detail/mentor-detail.component';
import { MentorFormModule } from './mentor-form/mentor-form.module';
import { MentorFormComponent } from './mentor-form/mentor-form.component';

const routes: Routes = [
  { path: 'home', component: MentorComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./mentor-detail/mentor-detail.module').then(
        (m) => m.MentorDetailModule
      ),
  },
  // {
  //   path: 'form',
  //   loadChildren: () =>
  //     import('./mentor-form/mentor-form.module').then(
  //       (m) => m.MentorFormModule
  //     ),
  // },
  //   { path: '', redirectTo: 'home', pathMatch: 'full' },
  //   { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    MentorModule,
    RouterModule.forRoot(routes),
    // MentorFormModule,
    // SelectedmentorModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
