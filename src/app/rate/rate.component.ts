import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  @Input() rating: number = 2
  @Input() numberOfRates: number
  @Input() isRatingEnabled: boolean = false
  @Output() ratingUpdated = new EventEmitter();

  ratingArr = [];
  starCount: number = 5

  constructor() {
  }

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index)
    }
  }
  
  onClick(rating: number) {
    if (!this.isRatingEnabled) { return }
    this.rating = rating
    this.ratingUpdated.emit(rating)
    return false
  }

  showIcon(index: number) {
    console.log(`${this.rating}`)
    if (this.rating >= index + 1) {
      return 'star'
    } else {
      return 'star_border'
    }
  }
}
