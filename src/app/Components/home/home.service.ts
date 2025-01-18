import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDataService } from '../../Services/product-data.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService extends ProductDataService {
  constructor(http: HttpClient) {
    super(http);
  }
}
