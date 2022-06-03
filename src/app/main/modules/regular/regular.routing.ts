import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegularComponent } from './regular.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tableau-de-bord',
    pathMatch: 'full'
  },
  {
    path: '',
    component: RegularComponent,
    children: [
      {
        path: 'tableau-de-bord',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegularRoutingModule {}
