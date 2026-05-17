import { Injectable } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  signup(data: any) {
    return this.http.post(
      `${this.api}/signup`,
      data
    );
  }

  signin(data: any) {
    return this.http.post(
      `${this.api}/signin`,
      data
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}