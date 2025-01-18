import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { HomeService } from './home.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../Models/product';
import { Rating } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-home',
  imports: [
    CardModule,
    Rating,
    ButtonModule,
    PaginatorModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    HttpClientModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService, private router: Router) {}
  endPoint: string = 'products';
  products!: Product[];
  shownNumberOfItems: number[] = [5, 10, 15, 20];
  itemsPerPage: number = 5;
  ngOnInit(): void {
    this.homeService.setEndPoint(this.endPoint);
    this.getPoducts();
  }

  getPoducts() {
    this.homeService.getAllProducts(this.itemsPerPage).subscribe({
      next: (res) => {
        this.products = res;
        this.products.forEach((product) => {
          product.rating.fixedRate = this.getFixedRateNumber(
            product.rating.rate
          );
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getSubTitle(val: string): string {
    return val.split(' ', 3).join(' ');
  }

  getFixedRateNumber(rate: number): number {
    return Math.round(rate);
  }

  getProductDetails(id: number) {
    if (id) {
      this.router.navigate([`/products/${id}`]);
    }
  }
}
