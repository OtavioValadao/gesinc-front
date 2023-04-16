import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentsListComponent } from './incidents-list/incidents-list.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [{
  path: 'incidents',
  children: [
    {
      path: 'incidents-list',
      component: IncidentsListComponent,
      canActivate: [NgxPermissionsGuard],
      data: {
        title: 'listIncidents',
        permissions: {
          only: [],
          redirectTo: '/no-access'
        }
      }
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentsRoutingModule { }
