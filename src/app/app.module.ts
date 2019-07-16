import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PackagesComponent } from './packages/packages.component';
import { Aucklandtour1Component } from './packages/aucklandtour/aucklandtour1/aucklandtour1.component';
import { Aucklandtour2Component } from './packages/aucklandtour/aucklandtour2/aucklandtour2.component';
import { Aucklandtour3Component } from './packages/aucklandtour/aucklandtour3/aucklandtour3.component';
import { Northislandtour1Component } from './packages/northislandtour/northislandtour1/northislandtour1.component';
import { Northislandtour2Component } from './packages/northislandtour/northislandtour2/northislandtour2.component';
import { Southislandtour1Component } from './packages/southislandtour/southislandtour1/southislandtour1.component';
import { Southislandtour2Component } from './packages/southislandtour/southislandtour2/southislandtour2.component';
import { FulltoursComponent } from './packages/fulltours/fulltours.component';
import { WelcomebannerComponent } from './home/welcomebanner/welcomebanner.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatFormFieldModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { GalleryAuckland1Component } from './gallery-auckland1/gallery-auckland1.component';
import { AucklandTour2GalleryComponent } from './gallery-auckland2/auckland-tour2-gallery.component';
import { AucklandTour3GalleryComponent } from './gallery-auckland3/auckland-tour3-gallery.component';
import { NorthTour1GalleryComponent } from './gallery-north1/north-tour1-gallery.component';
import { GalleryNorth2Component } from './gallery-north2/gallery-north2.component';
import { GallerySouth1Component } from './gallery-south1/gallery-south1.component';
import { GallerySouth2Component } from './gallery-south2/gallery-south2.component';
import { GalleryAllComponent } from './gallery-all/gallery-all.component';


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
    ContactComponent,
    FulltoursComponent,
    GalleryAuckland1Component,
    AucklandTour2GalleryComponent,
    AucklandTour3GalleryComponent,
    NorthTour1GalleryComponent,
    GalleryNorth2Component,
    GallerySouth1Component,
    GallerySouth2Component,
    GalleryAllComponent
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
