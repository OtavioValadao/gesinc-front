import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationRoutingModule } from './navigation-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'primeng/chart';
import { NgPrime } from '../shared/NgPrimeImports/prime.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    BrowserModule,
    NgPrime,
    ChartModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavigationModule { }
