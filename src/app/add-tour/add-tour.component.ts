import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, ControlContainer } from '@angular/forms';
import { ToursService } from '../tours.service';
import { UUID } from 'angular2-uuid';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent implements OnInit {

  modelForm: FormGroup;
  showSpinner = false

  private toursService: ToursService
  private formBuilder: FormBuilder
  private snackBar: MatSnackBar
  private router: Router

  constructor(toursService: ToursService, formBuilder: FormBuilder, snackBar: MatSnackBar, router: Router) {
    this.toursService = toursService;
    this.formBuilder = formBuilder
    this.snackBar = snackBar
    this.router = router
  }

  ngOnInit() { 
    this.modelForm = this.formBuilder.group({
      name: ['', Validators.required],
      destination: ['', Validators.required],
      description: ['', Validators.required],
      dates: this.formBuilder.array([
        this.formBuilder.group({
          startDate: ['', Validators.required],
          endDate: ['', Validators.required],
          price: ['', [Validators.required, Validators.pattern('[0-9]*')]],
          numberOfPlaces: ['', [Validators.required, Validators.pattern('[0-9]*')]]
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
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        price: ['', [Validators.required, Validators.pattern('[0-9]*')]],
        numberOfPlaces: ['', [Validators.required, Validators.pattern('[0-9]*')]]
      })
    )
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000
    })
  }

  hasError = (controlName: string, errorName: string) => {
    return this.modelForm.controls[controlName].hasError(errorName)
  }

  hasTermError = (index: number, controlName: string, errorName: string) => {
    return this.dates.controls[index].get(controlName).hasError(errorName)
  }

  deleteTerm(index: number) {
    this.dates.removeAt(index)
  }

  deleteImage(index: number) {
    this.images.removeAt(index)
  }

  onSubmit() {
    if (this.modelForm.invalid) { 
      return
    }

    if (this.dates.length == 0) {
      this.openSnackBar('Musisz dodać co najmniej jeden turnus')
      return
    }

    if (this.images.length == 0) {
      this.openSnackBar('Musisz dodać co najmniej jeden obrazek')
      return
    }

    this.showSpinner = true

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
      rates: [],
      terms: terms,
      images: form.images
    }
    this.toursService.addTour(tour)
      .then(val => { 
        this.showSpinner = false
        this.openSnackBar('Wycieczka pomyślenie dodana')
        this.router.navigate(['/tours'])
      })
      .catch( error => {
        this.showSpinner = false
        this.openSnackBar('Błąd podczas dodawania wycieczki. Spróbuj ponownie później')
      })
  }
}
