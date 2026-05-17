import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  products: any[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {

    this.productService.getProducts()
      .subscribe((res: any) => {

        this.products = res;
      });
  }

  addProduct() {
    this.router.navigate(['/products/add']);
  }

  deleteProduct(id: string) {

    this.productService
      .deleteProduct(id)
      .subscribe(() => {

        this.loadProducts();
      });
  }
}