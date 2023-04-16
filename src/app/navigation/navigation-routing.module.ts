import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BashboardComponent } from './bashboard/bashboard.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: 'gesinc',
    children: [
      {
        path: 'dashboard',
        component: BashboardComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
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
export class NavigationRoutingModule { }
