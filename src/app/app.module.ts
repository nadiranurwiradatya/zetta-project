import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoesDetailModule } from './shoes-detail/shoes-detail.module';
import { ShoesFormModule } from './shoes-form/shoes-form.module';
import { ShoesListModule } from './shoes-list/shoes-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoesDetailModule,
    ShoesFormModule,
    ShoesListModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
