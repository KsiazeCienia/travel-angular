import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ToursService } from '../tours.service';
import { Tour, Term } from 'src/app/tour';
import { CartService } from '../cart.service';
import { MyUser } from '../user';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  tour: Tour
  images: string[]
  rate: number = 0
  user: MyUser
  isUserAdmin: boolean
  selectedTerm: Term
  numberOfTakenPlaces: number

  private route: ActivatedRoute
  private toursService: ToursService
  private cartService: CartService
  private authService: AuthService
  private snackBar: MatSnackBar

  constructor(authService: AuthService, route: ActivatedRoute, toursService: ToursService, cartService: CartService, snackBar: MatSnackBar) {
    this.route = route
    this.toursService = toursService
    this.cartService = cartService
    this.authService = authService
    this.snackBar = snackBar
  }

  ngOnInit() {
    this.getTour()
    this.authService.user$.subscribe(user => {
      this.user = user
      this.isUserAdmin = this.authService.isAdmin(this.user)
    })
  }

  getTour() {
    let id: string = this.route.snapshot.paramMap.get('id').toString()
    this.toursService.getTour(id).subscribe( tour => {
      this.tour = tour
      this.images = tour.images
      this.rate = tour.rate
    })
  }

  bookClicked() {
    if (this.selectedTerm == null) {
      this.openSnackBar('Wybierz termin wycieczki!')
      return
    }

    if (this.numberOfTakenPlaces <= 0 || this.numberOfTakenPlaces == null) {
      this.openSnackBar('Wybierz poprawną ilość miejsc')
      return
    }

    if (this.numberOfTakenPlaces > this.selectedTerm.numberOfLeftPlaces) {
      this.openSnackBar('Brak dostępnej ilości miejsc')
      return
    }

    this.cartService.reserveTour(this.user, this.tour.id, this.selectedTerm.id, this.numberOfTakenPlaces)
      .then( val => this.openSnackBar('Wycieczka została dodana do koszyka!'))
      .catch( error => this.openSnackBar('Wystąpił błąd. Spróbuj ponownie później'))
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000
    })
  }

  deleteClicked() {
    // this.cartService.removeTour(this.tour);
    // this.onDelete.emit(this.tour);
  }

  ratingClicked(rate: number) {
    this.tour.rate = rate;
  }

  isBookButtonHidden() {
      return this.tour.terms[0].numberOfLeftPlaces == 0
  }

  isCancelButtonHidden() {
    return this.tour.terms[0].numberOfPlaces == this.tour.terms[0].numberOfLeftPlaces
  }
}
