import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { routing } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, PagerService, FileService } from './_services/index';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PdfComponent } from './pdf/pdf.component';
import { CsvComponent } from './csv/csv.component';
import { FileComponent } from './file/file.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    DashboardComponent,
    NavComponent,
    LoginComponent,
    UserComponent,
    UserDetailsComponent,
    PdfComponent,
    CsvComponent,
    FileComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        FileService,
        BaseRequestOptions,
        PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
