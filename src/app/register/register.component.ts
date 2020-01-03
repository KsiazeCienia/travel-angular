import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  modelForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.modelForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
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
      this.modelForm.controls['password'].hasError('minlength') ? 'Hasło musi mieć co najmniej 8 znaków' : 
      ''
  }

  getEmailErrorMessage() {
    return this.modelForm.controls['email'].hasError('required') ? 'Email jest wymagany' :
        this.modelForm.controls['email'].hasError('email') ? 'Email jest niepoprawny' :
            ''
  }

  onSubmit() {

  }
}
