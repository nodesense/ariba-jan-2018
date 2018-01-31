import { Component, 
          OnInit,
          ViewChild,
          ElementRef
        } from '@angular/core';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('para1') // binding here
  p1: ElementRef;

  @ViewChild('input1')
  input1: ElementRef;

  address : any;

  constructor() { }

  ngOnInit() {
    // view is initialized
    // nativeElement means real dom element
    this.p1.nativeElement.textContent = 'Enter Name';

    this.input1.nativeElement.focus();


    setTimeout( ()=> {
      this.address = {city: 'Bangalore'};
    }, 2000);
  }

}
