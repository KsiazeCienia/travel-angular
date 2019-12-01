import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ToursService } from '../tours.service';
import { Tour } from 'src/app/tour';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  tour: Tour

  private route: ActivatedRoute
  private toursService: ToursService

  constructor(route: ActivatedRoute, toursService: ToursService) {
    this.route = route
    this.toursService = toursService
  }

  ngOnInit() {
    this.getTour()
    console.log("Jesteśmy");
    
  }

  getTour() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.toursService.getTour(id).subscribe( tour =>
      this.tour = tour
    )
  }
}
