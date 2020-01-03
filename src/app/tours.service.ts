import { Injectable } from '@angular/core';
import { Tour } from 'src/app/tour';
import { Observable, of, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private tours: Tour[]
  private database: AngularFirestore

  constructor(database: AngularFirestore) {
    this.database = database
    this.tours = []
  }

  getTours(): Observable<Tour[]> {
    return this.database.collection('tours').snapshotChanges().pipe (
      map ( data => { 
        return data.map( data => {
          var tour = data.payload.doc.data() as Tour
          tour.id =  data.payload.doc.id
          return tour
        })
      })
    )
  }

  getTour(id: string): Observable<Tour> {
    return this.database.doc('tours/' + id).get().pipe (
      map ( doc => { 
        var tour = doc.data() as Tour
        tour.id =  doc.data().id
        return tour
      })
    )
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