import { Pipe, PipeTransform } from '@angular/core';
import { Tour } from 'src/app/tour';
import { Constants } from '../constants';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(tours: Tour[], priceLowerBound: number, priceUpperBound: number, month: string, country: string): Tour[] {
    if(!tours) return [];

    if (priceLowerBound) {
      tours = tours.filter( tour => {
        return tour.terms.map( term => term.price ).findIndex (price => { 
          return price >= priceLowerBound
         }) != -1
      })
    }

    if (priceUpperBound) {
      tours = tours.filter( tour => {
        return tour.terms.map( term => term.price ).findIndex (price => { 
          return price <= priceUpperBound
         }) != -1
      })
    }

    if (month) {
      tours = tours.filter( tour => {
        return tour.terms
        .map( term => new Date (term.startDate.seconds * 1000))
        .findIndex (date => { 
          return Constants.monthNames[date.getMonth()] === month
         }) != -1
      })
    }

    if (country) {
      tours = tours.filter( it => {
        return it.destination === country
      })
    }

    return tours
   }
}