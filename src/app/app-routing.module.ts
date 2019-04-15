import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Aucklandtour1Component } from "../app/packages/aucklandtour/aucklandtour1/aucklandtour1.component";
import { Aucklandtour2Component } from "../app/packages/aucklandtour/aucklandtour2/aucklandtour2.component";
import { Aucklandtour3Component } from "../app/packages/aucklandtour/aucklandtour3/aucklandtour3.component";
import { Northislandtour1Component } from "../app/packages/northislandtour/northislandtour1/northislandtour1.component";
import { Northislandtour2Component } from "../app/packages/northislandtour/northislandtour2/northislandtour2.component";
import { Southislandtour1Component } from "../app/packages/southislandtour/southislandtour1/southislandtour1.component";
import { Southislandtour2Component } from "../app/packages/southislandtour/southislandtour2/southislandtour2.component";
import { ContactComponent } from "../app/contact/contact.component";
import { HomeComponent } from "../app/home/home.component";
import { PackagesComponent } from "../app/packages/packages.component";
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "packages",
    component: PackagesComponent
  },
  {
    path: "AucklandTour1",
    component: Aucklandtour1Component
  },
  {
    path: "AucklandTour2",
    component: Aucklandtour2Component
  },
  {
    path: "AucklandTour3",
    component: Aucklandtour3Component
  },
  {
    path: "NorthIslandTour1",
    component: Northislandtour1Component
  },
  {
    path: "NorthIslandTour2",
    component: Northislandtour2Component
  },
  {
    path: "SouthIslandTour1",
    component: Southislandtour1Component
  },
  {
    path: "SouthIslandTour2",
    component: Southislandtour2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
