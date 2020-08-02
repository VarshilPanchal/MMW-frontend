import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

const PRODUCT_API = 'http://localhost:8080/api/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${PRODUCT_API}?id=`);
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${PRODUCT_API}?id=${id}`);
  }

  addProduct(product): Observable<Product> {
    return this.http.post<Product>(`${PRODUCT_API}`, product);
  }

  editProduct(product): Observable<Product> {
    return this.http.put<Product>(`${PRODUCT_API}`, product);
  }

  deleteProduct(id) {
    return this.http.delete(`${PRODUCT_API}?id=${id}`);
  }
}
