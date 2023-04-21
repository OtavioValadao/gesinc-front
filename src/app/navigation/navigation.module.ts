import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NgPrime } from '../shared/NgPrimeImports/prime.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    NgPrime
  ],
  exports:[
    DashboardComponent
  ]
})
export class NavigationModule { }
