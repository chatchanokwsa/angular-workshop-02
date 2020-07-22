import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { combineLatest, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    const p1 = new Product('01', 'g ccn', 1000.0, true, 1);
    const p2 = new Product('02', 'm ctm', 2000.0, true, 3.5);
    const p3 = new Product('03', 'o osh', 3000.0, true, 5);
    return of([p1, p2, p3]);
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  }
  // getAllProduct(): Product[] {
  //   const products: Product[] = [];
  //   const p1 = new Product('01', 'g ccn', 1000.0);
  //   const p2 = new Product('02', 'm ctm', 2000.0);
  //   const p3 = new Product('03', 'o osh', 3000.0);

  //   products.push(p1, p2, p3);
  //   return products;
  // }
}
