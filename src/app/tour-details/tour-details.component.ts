import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ToursService } from '../tours.service';
import { Tour } from 'src/app/tour';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  tour: Tour

  private route: ActivatedRoute
  private toursService: ToursService
  private cartService: CartService

  constructor(route: ActivatedRoute, toursService: ToursService, cartService: CartService) {
    this.route = route
    this.toursService = toursService
    this.cartService = cartService
  }

  ngOnInit() {
    this.getTour()
  }

  getTour() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.toursService.getTour(id).subscribe( tour =>
      this.tour = tour
    )
  }

  bookClicked() {
    this.tour.numberOfLeftPlaces -= 1;
    this.cartService.addTour(this.tour);
  }

  cancelClicked() {
    this.tour.numberOfLeftPlaces += 1;
    this.cartService.removeTour(this.tour);
  }

  deleteClicked() {
    // this.cartService.removeTour(this.tour);
    // this.onDelete.emit(this.tour);
  }

  ratingClicked(rate: number) {
    this.tour.rate = rate;
  }

  isBookButtonHidden() {
      return this.tour.numberOfLeftPlaces == 0
  }

  isCancelButtonHidden() {
    return this.tour.numberOfPlaces == this.tour.numberOfLeftPlaces
  }
}
