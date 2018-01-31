import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  fieldName: string;
  predicate: string;
  value: any;

  // Dependency Injection
  constructor(private productService:ProductService) {
      console.log("Product List created");
   }

  fetchProducts() {
    this.productService.getProducts()
    .subscribe ( products => {
      // typecasting in Typescript
      // not a runtime casting
      
      this.products = < Product[] > products;
      
      console.log(this.products);

    });
  }

  ngOnInit() {
    this.fetchProducts();
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id)
    .subscribe ( () => {
        //alert('product deleted');
        this.fetchProducts();
    });
  }

}
