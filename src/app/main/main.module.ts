import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MainRoutingModule } from './main.routing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './directives/footer/footer.component';
import { NavbarComponent } from './directives/navbar/navbar.component';
import { SidebarComponent } from './directives/sidebar/sidebar.component';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [FooterComponent, MainComponent, NavbarComponent, SidebarComponent, DashboardComponent]
})
export class MainModule {}
