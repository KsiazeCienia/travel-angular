import { Pipe, PipeTransform } from '@angular/core';
import { Tour } from 'src/app/tour';
import { Constants } from '../constants';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Tour[], priceLowerBound: number, priceUpperBound: number, month: string, country: string): Tour[] {
    if(!items) return [];

    if (priceLowerBound) {
      items = items.filter( it => {
        return it.terms[0].price >= priceLowerBound
      })
    }

    if (priceUpperBound) {
      items = items.filter( it => {
        return it.terms[0].price <= priceUpperBound
      })
    }

    if (month) {
      items = items.filter( it => {
        return Constants.monthNames[it.terms[0].startDate.getMonth()] === month
      })
    }

    if (country) {
      items = items.filter( it => {
        return it.destination === country
      })
    }

    return items
   }
}