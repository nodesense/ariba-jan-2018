import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = 'NG';

  homeLikes: number = 1000;

  // type inference, counter is number type
  counter = 100;

  constructor() { 
    console.log("Home comp created");

  }

  ngOnInit() {

  }

  incr() {
    this.counter++;
  }

  decr() {
    this.counter--;
  }

}
