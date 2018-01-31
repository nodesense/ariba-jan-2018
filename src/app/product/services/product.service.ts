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


}
