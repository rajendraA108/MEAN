import { Component } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  form: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {

    this.form = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  submit() {

    this.auth.signin(this.form.value)
      .subscribe({

        next: (res: any) => {

          localStorage.setItem(
            'token',
            res.token
          );

          this.router.navigate(['/products']);
        },

        error: (err) => {
          console.log(err);
        }
      });
  }
}