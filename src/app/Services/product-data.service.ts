import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../Environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  baseurl!: string;
  endPoint!: string;

  constructor(private http: HttpClient) {
    this.baseurl = environment.baseurl;
  }

  setEndPoint(val: string) {
    this.endPoint = val;
  }

  getAllProducts(
    itemsPerPage: number,
    sortType: 'asc' | 'desc' = 'asc'
  ): Observable<any> {
    return this.http.get(
      `${this.baseurl}/${this.endPoint}/?limit=${itemsPerPage}&sort=${sortType}`
    );
  }

  getProductById(id: number) {
    return this.http.get(`${this.baseurl}/${this.endPoint}/${id}`);
  }
}
