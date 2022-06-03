import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { CreateOrganizationComponent } from './components/organizations/create-organization/create-organization.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CreateAccountComponent } from './components/accounts/create-account/create-account.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tableau-de-bord',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'tableau-de-bord',
        component: DashboardComponent
      },
      {
        path: 'organisations',
        component: OrganizationsComponent
      },
      {
        path: 'organisations/nouveau',
        component: CreateOrganizationComponent
      },
      {
        path: 'comptes',
        component: AccountsComponent
      },
      {
        path: 'comptes/nouveau',
        component: CreateAccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
