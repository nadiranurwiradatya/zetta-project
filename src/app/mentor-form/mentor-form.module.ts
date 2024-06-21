import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorFormComponent } from './mentor-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ServiceModule } from '../service/service.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const routes: Routes = [{ path: '', component: MentorFormComponent }];

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
  declarations: [MentorFormComponent],
  imports: [
    MatRadioModule,
    MatDialogModule,
    CommonModule,
    RouterModule.forChild(routes),
    ServiceModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpClientModule,
    TranslateModule,
  ],
  exports: [MentorFormComponent],
})
export class MentorFormModule {}
