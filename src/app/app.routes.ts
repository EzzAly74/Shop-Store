import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

export const routes: Routes = [
  {
    path: 'products',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
