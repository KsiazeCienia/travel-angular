import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { CartReservation } from './cart-reservation';
import { AuthService } from '../auth.service';
import { MyUser } from '../user';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  reservations: CartReservation[]
  showSpinner = true
  user: MyUser

  private service: CartService
  private authService: AuthService
  private snackBar: MatSnackBar

  constructor(service: CartService, authService: AuthService, matSnackBar: MatSnackBar) {
    this.reservations = []
    this.service = service
    this.authService = authService
    this.snackBar = this.snackBar
  }

  ngOnInit() { 
    this.authService.user$.subscribe(user => {
      this.reservations = this.service.getReservation(user)
      this.user = user
      this.showSpinner = false
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
    this.showSpinner = true
    this.service.buyTours(this.user)
    .then( val => {
      this.showSpinner = false
      this.openSnackBar('Przedmioty zostały pomyślnie zakupione')
    })
    .catch(error => {
      this.showSpinner = false
      this.openSnackBar('Wystąpił błąd. Spróbuj ponownie później')
    })
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000
    })
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