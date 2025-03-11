import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import * as path from 'path';

const routes: Routes = [

  {path:"home", component:DashboardComponent,},

  { path: 'pages', loadChildren: () => import('./finance/finance.module').then(m => m.FinanceModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
