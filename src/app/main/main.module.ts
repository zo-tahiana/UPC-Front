import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main.routing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './directives/footer/footer.component';
import { NavbarComponent } from './directives/navbar/navbar.component';
import { SidebarComponent } from './directives/sidebar/sidebar.component';
import { MainComponent } from './main.component';
import { MaterialModule } from 'app/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [FooterComponent, MainComponent, NavbarComponent, SidebarComponent, DashboardComponent]
})
export class MainModule {}
