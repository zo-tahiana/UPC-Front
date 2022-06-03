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
    DashboardComponent
  ]
})
export class AdminModule { }
