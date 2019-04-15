import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./home/header/header.component";
import { FooterComponent } from "./home/footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { PackagesComponent } from "./packages/packages.component";
import { Aucklandtour1Component } from "./packages/aucklandtour/aucklandtour1/aucklandtour1.component";
import { Aucklandtour2Component } from "./packages/aucklandtour/aucklandtour2/aucklandtour2.component";
import { Aucklandtour3Component } from "./packages/aucklandtour/aucklandtour3/aucklandtour3.component";
import { Northislandtour1Component } from "./packages/northislandtour/northislandtour1/northislandtour1.component";
import { Northislandtour2Component } from "./packages/northislandtour/northislandtour2/northislandtour2.component";
import { Southislandtour1Component } from "./packages/southislandtour/southislandtour1/southislandtour1.component";
import { Southislandtour2Component } from "./packages/southislandtour/southislandtour2/southislandtour2.component";
import { WelcomebannerComponent } from "./home/welcomebanner/welcomebanner.component";
import { ContactComponent } from "./contact/contact.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatFormFieldModule
} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PackagesComponent,
    Aucklandtour1Component,
    Aucklandtour2Component,
    Aucklandtour3Component,
    Northislandtour1Component,
    Northislandtour2Component,
    Southislandtour1Component,
    Southislandtour2Component,
    WelcomebannerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
