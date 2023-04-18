import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPermissionsModule } from 'ngx-permissions';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/material.module';
import { AccountRoutingModule } from './account/account-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidentsRoutingModule } from './incidents/incidents-routing.module';
import { NavigationRoutingModule } from './navigation/navigation-routing.module';
import { AccountModule } from './account/account.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPermissionsModule.forRoot(),
    AccountRoutingModule,
    NavigationRoutingModule,
    IncidentsRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    NgxPermissionsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
