import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filterForm: FormGroup;
  @Output() applyFilter: EventEmitter<PriceFilter>;

  constructor() { 
    this.applyFilter = new EventEmitter()
    this.filterForm = new FormGroup ({
      lowerBound: new FormControl(),
      upperBound: new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.applyFilter.emit(this.filterForm.value);
  }

}

export interface PriceFilter {
  lowerBound: number,
  upperBound: number
}
