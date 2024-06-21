import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'player-list', component: PlayerComponent }];

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [PlayerComponent],
})
export class PlayerModule {}
