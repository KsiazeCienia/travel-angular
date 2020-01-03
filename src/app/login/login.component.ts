import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  modelForm: FormGroup;

  private authService: AuthService
  private router: Router

  constructor(authService: AuthService, router: Router) {
    this.authService = authService
    this.router = router
  }

  ngOnInit() {
    this.modelForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  isEmailInvalid() {
    return this.modelForm.controls['email'].invalid
  }

  isPasswordInvalid() {
    return this.modelForm.controls['password'].invalid
  }

  getPasswordErrorMessage() {
    return this.modelForm.controls['password'].hasError('required') ? 'Hasło jest wymagane' : 
      ''
  }

  getEmailErrorMessage() {
    return this.modelForm.controls['email'].hasError('required') ? 'Email jest wymagany' :
        this.modelForm.controls['email'].hasError('email') ? 'Email jest niepoprawny' :
            ''
  }

  onSubmit() {
    if (!this.modelForm.valid) { return }

    this.authService.login(this.modelForm.value)
    .then(val => this.router.navigate(['/tours']))
    .catch(error => console.log(error))
  }
}