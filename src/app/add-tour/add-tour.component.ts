import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToursService } from '../tours.service';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent implements OnInit {

  modelForm: FormGroup;
  private toursService: ToursService;

  constructor(toursService: ToursService) {
    this.toursService = toursService;
  }

  ngOnInit() { 
    this.modelForm = new FormGroup ({
      name: new FormControl(),
      destination: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      price: new FormControl(),
      numberOfPlaces: new FormControl(),
      description: new FormControl(),
      image: new FormControl()
    });
  }

  onSubmit() {
    this.toursService.addTour(this.modelForm.value);
  }
}
