import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin.routing';

import { AdminComponent } from './admin.component';
import { SidebarComponent } from './directives/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DirectivesModule } from 'app/main/directives/directives.module';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { CreateOrganizationComponent } from './components/organizations/create-organization/create-organization.component';
import { CreateAccountComponent } from './components/accounts/create-account/create-account.component';
import { AccountsComponent } from './components/accounts/accounts.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    DirectivesModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    SidebarComponent,
    DashboardComponent,
    OrganizationsComponent,
    CreateOrganizationComponent,
    CreateAccountComponent,
    AccountsComponent
  ]
})
export class AdminModule { }
