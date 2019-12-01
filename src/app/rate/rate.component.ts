import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  rate: number;
  starNumber: number[];
  numberOfStars: number = 5;
  @Output() onRating: EventEmitter<number>;

  constructor() {
    this.starNumber = Array(this.numberOfStars).map((x,i)=>i);
    this.rate = 0;
    this.onRating = new EventEmitter<number>();
  }

  toggleRating(rate: number) {
    this.rate = rate;
    this.onRating.emit(rate);
  }

  ngOnInit() {}
}
