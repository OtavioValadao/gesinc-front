import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NgPrime } from '../shared/NgPrimeImports/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    CreateAccountComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NgPrime,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [CreateAccountComponent, LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccountModule { }
