import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/guard/auth.guard";
import { Role } from "./core/models/role";
import { AuthLayoutComponent } from "./layout/app-layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layout/app-layout/main-layout/main-layout.component";
import { Page404Component } from "./authentication/page404/page404.component";
const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
   // canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },

      // {
      //   path: "user",
      //   loadChildren: () =>
      //     import("./user/user.module").then((m) => m.UserModule),
      // },
      {
        path: "account",
        loadChildren: () => import("./account/account.module").then(m => m.AccountModule)
      },



      {
        path: "dashboard",
        loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
      },


    ],
  },

  {
    path: "authentication",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },


  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
