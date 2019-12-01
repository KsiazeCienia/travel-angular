import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToursListComponent } from './tours-list/tours-list.component';
import { CartComponent } from './cart/cart.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
