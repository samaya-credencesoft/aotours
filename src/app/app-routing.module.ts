import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Aucklandtour1Component } from "../app/packages/aucklandtour/aucklandtour1/aucklandtour1.component";
import { HomeComponent } from "../app/home/home.component";
import { WelcomebannerComponent } from "../app/home/welcomebanner/welcomebanner.component";

const routes: Routes = [
  
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "AucklandTour1",
    component: Aucklandtour1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
