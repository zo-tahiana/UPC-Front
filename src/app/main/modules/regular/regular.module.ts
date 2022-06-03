import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegularRoutingModule } from './regular.routing';

import { RegularComponent } from './regular.component';
import { SidebarComponent } from './directives/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DirectivesModule } from 'app/main/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    RegularRoutingModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    DirectivesModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegularComponent,
    SidebarComponent,
    DashboardComponent
  ]
})
export class RegularModule { }
