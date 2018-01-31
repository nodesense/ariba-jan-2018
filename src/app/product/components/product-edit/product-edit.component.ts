import { Component, OnInit } from '@angular/core';

import {
    ActivatedRoute, // read data from url
    Router // programatically navigate to other page
    }  from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Brand } from '../../models/brand';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product(); 
  brands: Brand[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];
    console.log("ID ", id);

    if (id) {  // edit existing product
      this.productService.getProduct(id)
      .subscribe ( p => {
        this.product = p;
      });
    }

    // get brands
    this.productService.getBrands()
    .subscribe (brands => {
      this.brands = brands;
    });

  }

}
