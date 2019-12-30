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
  selectedMonth: string = "Wybierz..."
  selectedCountry: string = "Wybierz..."
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
    });
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
      for (var tour of tours) {
        let currentMonth = tour.startDate
        if (!uniqeMonths.includes(currentMonth.getMonth())) {
          uniqeMonths.push(currentMonth.getMonth())
          this.months.push(Constants.monthNames[currentMonth.getMonth()])
        }
      }
  }
}