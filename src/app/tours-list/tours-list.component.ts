import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/tour';
import { ToursService } from '../tours.service';
import { Constants } from '../constants';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
export class ToursListComponent implements OnInit {

  tours: Tour[]
  searchText: string
  priceLowerBound: number
  priceHigherBound: number
  selectedMonth: string
  selectedCountry: string
  months: string[]
  countries: string[]

  private tourService: ToursService

  constructor(tourService: ToursService) {
      this.tourService = tourService;
      this.months = []
      this.countries = []
  }

  ngOnInit() {
    this.tourService.getTours().subscribe( tours => {
      this.tours = tours
      this.prepareDateFilters(tours)
      this.prepareCountryFilter(tours)
    })
  }

  clickedDelete(tour: Tour) {
    this.tourService.deleteTour(tour);
  }

  private prepareCountryFilter(tours: Tour[]) {
    const destinations = tours.map(tour => tour.destination).reduce( (a, b) => { return a.concat(b) } )
    for (var destination of destinations) {
      if (!this.countries.includes(destination)) {
        this.countries.push(destination)
      }
    }
  }

  private prepareDateFilters(tours: Tour[]) {
      var uniqeMonths: number[] = []
      const terms = tours.map(tour => tour.terms).reduce( (a, b) => { return a.concat(b) } )
      for (var term of terms) {
        let currentMonth = term.startDate
        if (!uniqeMonths.includes(currentMonth.getMonth())) {
          uniqeMonths.push(currentMonth.getMonth())
          this.months.push(Constants.monthNames[currentMonth.getMonth()])
        }
      }
  }
}