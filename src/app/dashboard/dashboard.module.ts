import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../shared/components/components.module';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
@NgModule({
  declarations: [
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    SharedModule,
    ComponentsModule,
    
    MatMenuModule,
    MatIconModule,
    
    ComponentsModule,

    MatFormFieldModule,
    MatSelectModule,
  ]
})
export class DashboardModule { }
