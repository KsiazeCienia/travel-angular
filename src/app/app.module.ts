import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToursListComponent } from './tours-list/tours-list.component';
import { CompanyBanerComponent } from './company-baner/company-baner.component';
import { TourComponent } from './tour/tour.component';
import { RateComponent } from './rate/rate.component';
import { AddTourComponent } from './add-tour/add-tour.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { FilterPipe } from './tours-list/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToursListComponent,
    CompanyBanerComponent,
    TourComponent,
    RateComponent,
    AddTourComponent,
    CartComponent,
    TopMenuComponent,
    TourDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }