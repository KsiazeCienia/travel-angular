import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Booking } from '../user';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  bookings: Booking[]
  showSpinner = true
  empty = true

  private authService: AuthService

  constructor(authService: AuthService) {
    this.authService = authService
    this.bookings = []
  }

  ngOnInit() {
    this.authService.user$.subscribe( user => {
      this.bookings = user.bookings
      this.showSpinner = false
      this.empty = (user.bookings.length == 0)
    })
  }
}
