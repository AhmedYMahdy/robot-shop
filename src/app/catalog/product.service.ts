import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // create our api calling with Observable returning
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api/products');
  }
}
