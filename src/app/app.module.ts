import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListModule } from './menu-list/menu-list.module';
import { MenuDetailModule } from './menu-detail/menu-detail.module';
import { FormsModule } from '@angular/forms';
import { MenuFormModule } from './menu-form/menu-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MenuListModule,
    MenuDetailModule,
    MenuFormModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
