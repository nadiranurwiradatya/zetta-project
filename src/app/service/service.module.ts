import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { AccentRemovalPipe } from './pipes/accent-removal/accent-removal.pipe';
import { CombineWordsPipe } from './pipes/combine-words/combine-words.pipe';
import { PlayerDataService } from './player-data.service';

@NgModule({
  declarations: [AccentRemovalPipe, CombineWordsPipe],
  imports: [CommonModule, AppRoutingModule],
  exports: [AccentRemovalPipe, CombineWordsPipe],
})
export class ServiceModule {}
