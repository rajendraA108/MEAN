import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
     {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },

  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'signin',
    component: SigninComponent
  },

  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [authGuard]
  },

  {
    path: 'products/add',
    component: ProductFormComponent,
    canActivate: [authGuard]
  }
];
