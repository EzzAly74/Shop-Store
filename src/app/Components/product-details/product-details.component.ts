import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService } from './product-details.service';
import { Product } from '../../Models/product';
import { PanelModule } from 'primeng/panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [PanelModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  currentId!: number;
  productDetails!: Product;

  constructor(
    private route: ActivatedRoute,
    private productDetailsService: ProductDetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentId = this.route.snapshot.params['id'];
    this.productDetailsService.setEndPoint('products');

    this.getProductById();
  }

  getProductById() {
    this.productDetailsService.getProductById(this.currentId).subscribe({
      next: (res: any) => {
        if (res) {
          this.productDetails = res;
          console.log(this.productDetails);
        } else {
          this.router.navigate(['/notfound']);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
