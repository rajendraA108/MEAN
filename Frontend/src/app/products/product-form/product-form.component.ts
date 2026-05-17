import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {

  form: any;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: [''],
      description: [''],
      price: [''],
      category: ['']
    });
  }

  submit() {
    this.productService.createProduct(this.form.value)
      .subscribe({
        next: () => {
          alert('Product Added Successfully');
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.log(err);
          alert('Failed to add product');
        }
      });
  }
}
