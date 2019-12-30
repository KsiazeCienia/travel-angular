import { Injectable } from '@angular/core';
import { Tour } from 'src/app/tour';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private tours = generateTours()

  constructor() { }

  getTours(): Observable<Tour[]> {
    return of(this.tours)
  }

  getTour(id: number): Observable<Tour> {
    return of(this.tours.find( p => p.id === id ))
  }

  addTour(tour: Tour) {
    this.tours.push(tour);
  }

  deleteTour(tour: Tour) {
    const index = this.tours.indexOf(tour, 0);
    if (index > -1) {
      this.tours.splice(index, 1);
    }
  }
}

function generateTours() {
  return [
    {
      id: 0,
      rate: 0,
      name: "Barcelona",
      destination: "Włochy",
      startDate: new Date("2019-05-17"),
      endDate: new Date("2019-05-17"),
      price: 100,
      numberOfPlaces: 3,
      numberOfLeftPlaces: 3, 
      description: "Bardzo fajna wycieczka",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.iplsc.com%2Fhalda-szarlota%2F0006EYIP3O71GA1D-C122-F4.jpg&f=1&nofb=1"
    },
    { 
      id: 1,
      rate: 0,
      name: "Majówka",
      destination: "Włochy",
      startDate: new Date("2019-05-17"),
      endDate: new Date("2019-05-17"),
      price: 2,
      numberOfLeftPlaces: 1,
      numberOfPlaces: 5,
      description: "Bardzo fajna wycieczka",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.iplsc.com%2Fhalda-szarlota%2F0006EYIP3O71GA1D-C122-F4.jpg&f=1&nofb=1"
    },
    {
      id: 2,
      rate: 0,
      name: "Włochy",
      destination: "Włochy",
      startDate: new Date("2019-05-17"),
      endDate: new Date("2019-05-17"),
      price: 4600,
      numberOfLeftPlaces: 2,
      numberOfPlaces: 3,
      description: "Bardzo fajna wycieczka",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.iplsc.com%2Fhalda-szarlota%2F0006EYIP3O71GA1D-C122-F4.jpg&f=1&nofb=1"
    },
    {
      id: 3,
      rate: 0,
      name: "Majówka",
      destination: "Włochy",
      startDate: new Date("2019-05-17"),
      endDate: new Date("2019-05-17"),
      price: 300,
      numberOfLeftPlaces: 0,
      numberOfPlaces: 2,
      description: "Bardzo fajna wycieczka",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.destination360.com%2Feurope%2Fcroatia%2Fimages%2Fs%2Fbeaches.jpg&f=1&nofb=1"
    },
    {
      id: 4,
      rate: 0,
      name: "Majówka",
      destination: "Włochy",
      startDate: new Date("2019-05-17"),
      endDate: new Date("2019-05-17"),
      price: 420,
      numberOfLeftPlaces: 0,
      numberOfPlaces: 4,
      description: "Bardzo fajna wycieczka",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.destination360.com%2Feurope%2Fcroatia%2Fimages%2Fs%2Fbeaches.jpg&f=1&nofb=1"
    },
    {
      id: 5,
      rate: 0,
      name: "Majówka",
      destination: "Włochy",
      startDate: new Date("2019-05-17"),
      endDate: new Date("2019-05-17"),
      price: 30,
      numberOfLeftPlaces: 0,
      numberOfPlaces: 1,
      description: "Bardzo fajna wycieczka",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.destination360.com%2Feurope%2Fcroatia%2Fimages%2Fs%2Fbeaches.jpg&f=1&nofb=1"
    },
    {
      id: 6,
      rate: 0,
      name: "Majówka",
      destination: "Japa",
      startDate: new Date("2019-05-17"),
      endDate: new Date("2019-05-17"),
      price: 2300,
      numberOfLeftPlaces: 0,
      numberOfPlaces: 2,
      description: "Bardzo fajna wycieczka",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.destination360.com%2Feurope%2Fcroatia%2Fimages%2Fs%2Fbeaches.jpg&f=1&nofb=1"
    },
    {
      id: 7,
      rate: 0,
      name: "Majówka",
      destination: "Gniezno",
      startDate: new Date("2019-05-17"),
      endDate: new Date("2019-05-17"),
      price: 36,
      numberOfLeftPlaces: 0,
      numberOfPlaces: 3,
      description: "Bardzo fajna wycieczka",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.destination360.com%2Feurope%2Fcroatia%2Fimages%2Fs%2Fbeaches.jpg&f=1&nofb=1"
    },
    {
      id: 8,
      rate: 0,
      name: "Majówka",
      destination: "Włochy",
      startDate: new Date("2019-05-17"),
      endDate: new Date("2019-05-17"),
      price: 52,
      numberOfLeftPlaces: 10,
      numberOfPlaces: 20,
      description: "Bardzo fajna wycieczka",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.destination360.com%2Feurope%2Fcroatia%2Fimages%2Fs%2Fbeaches.jpg&f=1&nofb=1"
    },
    {
      id: 9,
      rate: 0,
      name: "Majówka",
      destination: "Bytom",
      startDate: new Date("2019-06-17"),
      endDate: new Date("2019-06-17"),
      price: 500,
      numberOfLeftPlaces: 10,
      numberOfPlaces: 13,
      description: "Bardzo fajna wycieczka",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.destination360.com%2Feurope%2Fcroatia%2Fimages%2Fs%2Fbeaches.jpg&f=1&nofb=1"
    }
  ]
}
