import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/tour';
import { ToursService } from '../tours.service';
import { PriceFilter } from '../filters/filters.component'

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
export class ToursListComponent implements OnInit {

  filteredTours: Tour[];
  tours: Tour[];
  private tourService: ToursService

  constructor(tourService: ToursService) {
      this.tourService = tourService;
  }

  ngOnInit() {
    this.tourService.getTours().subscribe( tours => {  
        this.tours = tours 
        this.filteredTours = tours
    });
  }

  clickedDelete(tour: Tour) {
    this.tourService.deleteTour(tour);
  }

  filterApplied(filter: PriceFilter) {
    console.log("Filter");
    
    this.filteredTours = this.tours.filter( 
      tour => (tour.price > filter.lowerBound && tour.price < filter.upperBound)
    )
  }

}
