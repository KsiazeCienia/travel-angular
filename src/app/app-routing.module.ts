import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToursListComponent } from './tours-list/tours-list.component';
import { CartComponent } from './cart/cart.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { AddTourComponent } from './add-tour/add-tour.component';


const routes: Routes = [
  { 
    path: '',
    redirectTo: '/tours',
    pathMatch: 'full'
  },
  {
    path: 'tours',
    component: ToursListComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'tour/:id',
    component: TourDetailsComponent
  },
  {
    path: 'add/tour',
    component: AddTourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
