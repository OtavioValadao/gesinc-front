import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentsModule } from './incidents/incidents.module';
import { NoAccessComponent } from './navigation/no-access/no-access.component';
import { BashboardComponent } from './navigation/bashboard/bashboard.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { LoginComponent } from './account/login/login.component';
import { NavigationModule } from './navigation/navigation.module';

const routes: Routes = [
  {
    path: 'no-access',
    component: NoAccessComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: BashboardComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: '',
        redirectTo: '/login'
      }
    },
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => NavigationModule
      },
      {
        path: 'incidents',
        loadChildren: () => IncidentsModule
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
