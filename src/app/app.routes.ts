import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, title: 'login' },
      { path: 'register', component: RegisterComponent, title: 'register' },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, title: 'home' },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart/cart.component').then((c) => c.CartComponent),
        title: 'cart',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.component').then(
            (c) => c.ProductsComponent
          ),
        title: 'products',
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./pages/brands/brands.component').then(
            (c) => c.BrandsComponent
          ),
        title: 'brands',
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./pages/categories/categories.component').then(
            (c) => c.CategoriesComponent
          ),
        title: 'categories',
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./pages/checkout/checkout.component').then(
            (c) => c.CheckoutComponent
          ),
        title: 'checkout',
      },
      { path: '**', component: NotFoundComponent },
    ],
  },
];
