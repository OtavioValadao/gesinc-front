import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { NgPrime } from '../shared/NgPrimeImports/prime.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    NgPrime
  ],
  exports: [
    HeaderComponent,
    FooterComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TemplateModule { }
