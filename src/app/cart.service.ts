import { Injectable } from '@angular/core';
import { Tour } from 'src/app/tour';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private tours: Tour[];

  constructor() { 
    this.tours = [];
  }

  getTours(): Tour[] {
    return this.tours
  }

  getTotalPrice() {
    if (this.tours.length <= 0) {
      return 0
    }
    let prices = this.tours.map(tour => tour.dates[0].price)
    let totalPrice = prices.reduce(function(a,b ) { return a + b })
    return totalPrice;
  }

  getNumberOfTours() {
      return this.tours.length;
  }

  addTour(tour: Tour) {
    this.tours.push(tour);
  }

  removeTour(tour: Tour) {
    const index = this.tours.indexOf(tour, 0);
    if (index > -1) {
      this.tours.splice(index, 1);
    }
  }
}
