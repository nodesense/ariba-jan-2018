// bootstrap angular app into browser

import {platformBrowserDynamic} 
    from '@angular/platform-browser-dynamic';
    
import { AppModule } from './app/app.module';

import { environment } 
     from './environments/environment';

console.log(environment);

platformBrowserDynamic()
    .bootstrapModule(AppModule);