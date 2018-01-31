import { Injectable } from '@angular/core';

// ajax service
import {HttpClient} from '@angular/common/http';


import {Observable} from 'rxjs/Observable';
import { Product } from '../models/product';
import { Brand } from '../models/brand';


@Injectable()
export abstract class ProductService {
  abstract getProducts(): Observable<Product[]>;
  abstract getBrands(): Observable<Brand[]>;
  abstract getProduct(id: any): Observable<Product>;
  abstract deleteProduct(id: any): Observable<any>;

  abstract saveProduct(product: Product): Observable<Product>;
}


@Injectable()
export class ProductRestfulService extends ProductService {

  // inject httpclient into product service
  constructor(private http: HttpClient) {
      super(); // ES6 must call base constructor

      console.log("ProductService created");
 
   }

   getProducts(): Observable<Product[]> {
     return this.http.get<Product[]> ('http://localhost:7070/api/products');
   }

   getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]> ('http://localhost:7070/api/brands');
  }

  getProduct(id: any): Observable<Product> {
    return this.http.get<Product> ('http://localhost:7070/api/products/' + id);
  }

  saveProduct(product: Product):Observable<Product> {
    // if update existing 
    // PUT /api/products/12345
    // {{JSON Data}}

    // if create
    // POST /api/products
    // {{JSON DATA}}

    if (product.id) { // update
      return this.http.put<Product> ('http://localhost:7070/api/products/' + product.id, 
                                    product);
    } else { // create
      return this.http.post<Product> ('http://localhost:7070/api/products', 
                                    product);
    }


  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete<any> ('http://localhost:7070/api/products/' + id);
  }


}
