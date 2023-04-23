import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentsRoutingModule } from './incidents-routing.module';
import { IncidentsListComponent } from './incidents-list/incidents-list.component';


@NgModule({
  declarations: [
    IncidentsListComponent
  ],
  imports: [
    CommonModule,
    IncidentsRoutingModule
  ],
  exports:[
    IncidentsListComponent
  ]
})
export class IncidentsModule { }
