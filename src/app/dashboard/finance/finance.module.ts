import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceRoutingModule } from './finance-routing.module';
import { TaskManagementComponent } from './Components/user-components/task-management/task-management.component';
import { SharedModule } from "src/app/shared/shared.module";
import { MaterialModule } from "src/app/shared/material.module";
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ConfigComponent } from './Components/photos-components/config.component';
import { AccessManagementComponent } from './Components/album-components/access-management.component';
import { MatPaginatorModule,  } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {MatTableExporterModule} from 'mat-table-exporter'




@NgModule({
  declarations: [
    
    
    TaskManagementComponent,  
    ConfigComponent,
    AccessManagementComponent,
    

  ],
  providers: [ ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    ComponentsModule,
    MaterialModule,
    SharedModule,
    ComponentsModule,
    MatTabsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
     MatChipsModule,
     MatTableExporterModule
  ]
})
export class FinanceModule { }
