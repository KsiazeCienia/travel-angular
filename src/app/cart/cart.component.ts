import { Component, OnInit, Input } from '@angular/core';
import { Tour } from 'src/app/tour';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  totalPrice: number
  totalReservation: number
  tours: Tour[]

  private service: CartService

  constructor(service: CartService) {
    this.tours = []
    this.service = service
  }

  ngOnInit() { 
    this.totalPrice = this.service.getTotalPrice()
    this.totalReservation = this.service.getNumberOfTours()
    this.tours = this.service.getTours()
  }

  deleteTour(tour: Tour) {
    const index = this.tours.indexOf(tour, 0);
    if (index > -1) {
      this.tours.splice(index, 1);
    }
  }

  getTotalPrice() {
    return this.service.getTotalPrice()
  }
}