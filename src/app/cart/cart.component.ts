import { Component, OnInit, Input } from '@angular/core';
import { Tour } from 'src/app/tour';
import { CartService } from '../cart.service';
import { CartReservation } from './cart-reservation';
import { AuthService } from '../auth.service';
import { MyUser } from '../user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  reservations: CartReservation[]
  user: MyUser

  private service: CartService
  private authService: AuthService

  constructor(service: CartService, authService: AuthService) {
    this.reservations = []
    this.service = service
    this.authService = authService
  }

  ngOnInit() { 
    this.authService.user$.subscribe(user => {
      this.reservations = this.service.getReservation(user)
      this.user = user
    })
  }

  getTotalPrice() {
    return this.reservations.length > 0 ?
      this.reservations
        .map( val => val.numberOfPlaces * val.price)
        .reduce( function(a, b) { return a + b })
      : 0
  }

  buyTours() {
    this.service.buyTours(this.user)
    .then( val => {
      console.log('Buy success')
    })
    .catch(error => console.log(error))
  }

  deleteReservation(reservation: CartReservation) {
    this.service.deleteReservation(this.user, reservation)
      .then( val => {
        const index = this.reservations.indexOf(reservation, 0)
        if (index > -1) {
          this.reservations.splice(index, 1)
        }
    })
    .catch(error => console.log(error))
  }
}