import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';


const routes: Routes = [
  {
    path: '',
      redirectTo: 'navigation',
      pathMatch: 'full'
  },
  {
    path: 'navigation',
    loadChildren: () => import('./navigation/navigation-routing.module').then(o => o.NavigationRoutingModule)
  },
  {
    path: 'incidents',
    loadChildren: () => import('./incidents/incidents-routing.module').then(o => o.IncidentsRoutingModule)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
