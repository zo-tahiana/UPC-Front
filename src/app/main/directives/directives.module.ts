import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from 'app/main/directives/navbar/navbar.component';
import { FooterComponent } from 'app/main/directives/footer/footer.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class DirectivesModule { }
