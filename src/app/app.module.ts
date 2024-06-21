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
import { MentorFormModule } from './mentor-form/mentor-form.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

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
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    HttpClient,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
