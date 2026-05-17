import { Component } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  form: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {

    this.form = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    });
  }

  submit() {

    this.auth.signup(this.form.value)
      .subscribe({
        next: () => {
          alert('Signup Success');
          this.router.navigate(['/signin']);
        },

        error: (err) => {
          console.log(err);
          alert('Signup Failed');
        }
      });
  }
}