import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MentorFormModule } from './mentor-form/mentor-form.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatDatepicker,
    MatNavList,
    MatIcon,
    HttpClientModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
