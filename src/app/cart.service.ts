import { Injectable } from '@angular/core';
import { MyUser } from './user';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToursService } from './tours.service';
import { CartReservation } from './cart/cart-reservation'
import { Observable, zip, merge } from 'rxjs';
import {Promise} from 'es6-promise';
import { Tour } from './tour';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private reservations: CartReservation[]
  private firestore: AngularFirestore
  private toursService: ToursService

  constructor(firestore: AngularFirestore, toursService: ToursService) { 
    this.firestore = firestore
    this.toursService = toursService
    this.reservations = []
  }

  buyTours(user: MyUser) {
    const products = this.reservations.map ( reservation => {
      return { 
        tourID: reservation.tourID,
        startDate: reservation.startDate,
        endDate: reservation.endDate,
        numberOfPlaces: reservation.numberOfPlaces,
        totalPrice: reservation.numberOfPlaces * reservation.price,
        tourName: reservation.tourName
      }
    })
    const booking = { 
      products: products,
      date: new Date()      
    }
    user.bookings.push(booking)
    user.reservations = []
    this.reservations = []
    return this.firestore.collection('users').doc(user.uid).update(user)
  }

  getReservation(user: MyUser): CartReservation[] {
    this.reservations = []
    this.getReservedTour(user)
    return this.reservations
  }

  reserveTour(user: MyUser, tour: Tour, termID: string, numberOfPlaces: number) {
    const reservation = { tourID: tour.id, termID: termID, numberOfPlaces: numberOfPlaces }
    user.reservations.push(reservation)

    var requests = Promise.all([this.firestore.collection('users').doc(user.uid).update(user), 
                                this.toursService.updateTermNumberOfPlaces(tour, termID, numberOfPlaces)])
    return requests
  }

  deleteReservation(user: MyUser, reservation: CartReservation) {
    const index = user.reservations.findIndex( res => reservation.tourID == res.tourID)
    if (index > -1) {
      user.reservations.splice(index, 1)
    }

    return this.firestore.collection('users').doc(user.uid).update(user)
  }

  private getReservedTour(user: MyUser) {
    user.reservations.forEach( reservation => {
      this.toursService.getTour(reservation.tourID).subscribe ( tour => {
        const term = tour.terms.find( term => term.id == reservation.termID )
        const cartRes = {
          tourID: tour.id,
          termID: term.id,
          numberOfPlaces: reservation.numberOfPlaces,
          tourName: tour.name,
          startDate: term.startDate,
          endDate: term.endDate,
          price: term.price
        }
        this.reservations.push(cartRes)
      })
    })
  }
}
