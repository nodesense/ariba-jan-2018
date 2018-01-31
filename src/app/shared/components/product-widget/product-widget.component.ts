import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css']
})
export class ProductWidgetComponent implements OnInit {

  product: any = {
    name: 'Phone 1',
    price: 1000,
    released: new Date()
  };



  constructor() { }

  ngOnInit() {
  }

}
