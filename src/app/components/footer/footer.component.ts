import { Component, 
          OnInit,
          Input,

          Output,
          EventEmitter
        } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isMouseOn: boolean = false;


  // Property binding

  // input => parent to child

  @Input()
  year: number;

  @Input()
  company: string;

  // child to parent, always through event
  // event binding
  @Output()
  contactEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('YEAR Type', typeof this.year);
  }

  contact() {
    // publish an event, with value BLR
    this.contactEvent.emit("BLR");
  }

}
