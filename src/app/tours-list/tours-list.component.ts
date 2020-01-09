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
  query: string
  months: string[]
  countries: string[]
  showSpinner = true

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
      this.showSpinner = false
    })
  }

  clickedDelete(tour: Tour) {
    this.tourService.deleteTour(tour);
  }

  private prepareCountryFilter(tours: Tour[]) {
    for (var tour of tours) {
      if (!this.countries.includes(tour.destination)) {
        this.countries.push(tour.destination)
      }
    }
  }

  private prepareDateFilters(tours: Tour[]) {
      var uniqeMonths: number[] = []
      const terms = tours.map(tour => tour.terms).reduce( (a, b) => { return a.concat(b) } )
      for (var term of terms) {
        let currentMonth = new Date((term.startDate as any).seconds * 1000)
        if (!uniqeMonths.includes(currentMonth.getMonth())) {
          uniqeMonths.push(currentMonth.getMonth())
          this.months.push(Constants.monthNames[currentMonth.getMonth()])
        }
      }
  }
}