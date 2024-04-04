import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormModule } from './form/form.module';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { DetailComponent } from './detail/detail.component';
import { DetailModule } from './detail/detail.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./detail/detail.module').then((m) => m.DetailModule),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./detail/detail.module').then((m) => m.DetailModule),
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'form/:id',
    loadChildren: () => import('./form/form.module').then((m) => m.FormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
