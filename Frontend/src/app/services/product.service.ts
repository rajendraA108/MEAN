import { Injectable } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.api);
  }

  createProduct(data: any) {
    return this.http.post(this.api, data);
  }

  updateProduct(id: string, data: any) {
    return this.http.put(
      `${this.api}/${id}`,
      data
    );
  }

  deleteProduct(id: string) {
    return this.http.delete(
      `${this.api}/${id}`
    );
  }
}