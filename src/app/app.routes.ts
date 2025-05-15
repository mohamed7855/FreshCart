import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsComponent } from './pages/products/products.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

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
      { path: 'cart', component: CartComponent, title: 'cart' },
      { path: 'products', component: ProductsComponent, title: 'products' },
      { path: 'brands', component: BrandsComponent, title: 'brands' },
      {
        path: 'categories',
        component: CategoriesComponent,
        title: 'categories',
      },
      { path: 'checkout', component: CheckoutComponent, title: 'checkout' },
      { path: '**', component: NotFoundComponent },
    ],
  },
];
