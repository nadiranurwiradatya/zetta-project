import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';
import { DetailComponent } from './detail/detail.component';
import { PlayerFormModule } from './player-form/player-form.module';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerModule } from './player/player.module';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'player',
    loadChildren: () =>
      import('./player/player.module').then((m) => m.PlayerModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./detail/detail.module').then((m) => m.DetailModule),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./player-form/player-form.module').then(
        (m) => m.PlayerFormModule
      ),
  },
  {
    path: 'form/:id',
    loadChildren: () =>
      import('./player-form/player-form.module').then(
        (m) => m.PlayerFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
