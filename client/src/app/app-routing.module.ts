import { NgModule } from "client/client/node_modules/@angular/core/core";
import {
  RouterModule,
  Routes
} from "client/client/node_modules/@angular/router/router";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "detail/:id", component: HeroDetailComponent },

  { path: "dashboard", component: DashboardComponent },

  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
