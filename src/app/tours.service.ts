import { Injectable } from '@angular/core';
import { Tour } from 'src/app/tour';
import { Observable, of, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { MyUser } from './user';

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
    return this.database.doc(`tours/${id}`).get().pipe (
      map ( doc => { 
        var tour = doc.data() as Tour
        tour.id =  id
        return tour
      })
    )
  }

  addTour(tour: any) {
    return this.database.collection('tours').add(tour)
  }

  updateTourRate(tour: Tour, user: MyUser ,rate: number) {
    tour.rates.push({userID: user.uid, rate: rate})
    return this.database.doc(`tours/${tour.id}`).set(tour)
  }

  updateTermNumberOfPlaces(tour: Tour, termID: string, numberOfPlaces: number) {
      const termIndex = tour.terms.findIndex(term => term.id = termID)
      tour.terms[termIndex].numberOfLeftPlaces = tour.terms[termIndex].numberOfLeftPlaces - numberOfPlaces
      return this.database.doc(`tours/${tour.id}`).set(tour) 
  }

  deleteTour(tour: Tour) {
    return this.database.doc(`tours/${tour.id}`).delete()
  }
}