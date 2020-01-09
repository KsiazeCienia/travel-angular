import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { MatMenuModule}  from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material'

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth"; import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from "@angular/material/core";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HistoryComponent } from './history/history.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

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
    FilterPipe,
    RegisterComponent,
    LoginComponent,
    HistoryComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    MatListModule,
    FlexLayoutModule,
    MatCarouselModule,
    MatIconModule, 
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }