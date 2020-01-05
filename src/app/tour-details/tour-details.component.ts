import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ToursService } from '../tours.service';
import { Tour, Term } from 'src/app/tour';
import { CartService } from '../cart.service';
import { MyUser } from '../user';
import { AuthService } from '../auth.service';

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

  constructor(authService: AuthService, route: ActivatedRoute, toursService: ToursService, cartService: CartService) {
    this.route = route
    this.toursService = toursService
    this.cartService = cartService
    this.authService = authService
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
    this.cartService.reserveTour(this.user, this.tour.id, this.selectedTerm.id, this.numberOfTakenPlaces)
      .then( val => console.log('Success'))
      .catch( error => console.log(error) )
  }

  cancelClicked() {

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
