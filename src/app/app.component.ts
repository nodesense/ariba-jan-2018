import {Component, OnInit} from '@angular/core';

// Meta data
@Component({
    // html element/tag name
    selector: 'app-root',

    // view
    templateUrl: 'app.component.html',

    // scopped css
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent implements OnInit{
    // component code logic

    // member variable
    appTitle: string = 'Product App';

    // called before initialize view
    constructor() {

    }

    // after view initliaze
    ngOnInit() {
        this.appTitle = 'Angular App';
    }

    // event subscriber
    contactHandler(name: string) {
        alert(name);
    }
}
