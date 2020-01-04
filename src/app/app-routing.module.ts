import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToursListComponent } from './tours-list/tours-list.component';
import { CartComponent } from './cart/cart.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { AddTourComponent } from './add-tour/add-tour.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'


const routes: Routes = [
  { 
    path: '',
    redirectTo: '/tours',
    pathMatch: 'full'
  },
  {
    path: 'tours',
    component: ToursListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tour/:id',
    component: TourDetailsComponent,
  },
  {
    path: 'add/tour',
    component: AddTourComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
