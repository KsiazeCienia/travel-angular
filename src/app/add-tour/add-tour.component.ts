import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { ToursService } from '../tours.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent implements OnInit {

  modelForm: FormGroup;
  private toursService: ToursService;

  private formBuilder: FormBuilder

  constructor(toursService: ToursService, formBuilder: FormBuilder) {
    this.toursService = toursService;
    this.formBuilder = formBuilder
  }

  ngOnInit() { 
    this.modelForm = this.formBuilder.group({
      name: '',
      destination: '',
      description: '',
      dates: this.formBuilder.array([
        this.formBuilder.group({
          startDate: '',
          endDate: '',
          price: '',
          numberOfPlaces: ''
        })
      ]),
      images: this.formBuilder.array([this.formBuilder.control('')])
    })
  }

  get images(): FormArray {
	  return this.modelForm.get('images') as FormArray;
  }

  get dates(): FormArray {
    return this.modelForm.get('dates') as FormArray;
  }

  addImage() {
    this.images.push(this.formBuilder.control(''))
  }

  addDates() {
    this.dates.push(
      this.formBuilder.group({
        startDate: '',
        endDate: '',
        price: '',
        numberOfPlaces: ''
      })
    )
  }

  onSubmit() {
    const form = this.modelForm.value
    const terms = this.modelForm.value.dates.map ( val => {
      return {
        id: UUID.UUID(),
        startDate: val.startDate,
        endDate: val.endDate,
        numberOfPlaces: val.numberOfPlaces,
        numberOfLeftPlaces: val.numberOfPlaces,
        price: val.price
      }
    })
    const tour = {
      name: form.name,
      destination: form.destination,
      description: form.description,
      rate: 0,
      numberOfRates: 0,
      terms: terms,
      images: form.images
    }
    this.toursService.addTour(tour);
  }
}
