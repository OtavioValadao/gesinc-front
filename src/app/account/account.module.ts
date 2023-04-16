import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from 'src/material.module';


@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  exports:[
    LoginComponent,
    CreateAccountComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountModule { }
