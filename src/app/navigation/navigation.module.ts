import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NoAccessComponent } from './no-access/no-access.component';
import { BashboardComponent } from './bashboard/bashboard.component';



@NgModule({
  declarations: [
    NoAccessComponent,
    BashboardComponent,
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
