import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagementComponent } from './Components/user-components/task-management/task-management.component';
import { ConfigComponent } from './Components/photos-components/config.component';
import { AccessManagementComponent } from './Components/album-components/access-management.component';
const routes: Routes = [
  
  {
    path: "photos",
    component: ConfigComponent
  },
  
  {
    path:"users",
    component: TaskManagementComponent
  },
  
  
  {
    path:"albums",
    component: AccessManagementComponent
  },

 

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
