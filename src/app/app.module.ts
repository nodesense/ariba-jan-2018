// logical collection
// component, directive, pipes
// services (providers)
// dependencies to other modules

import {NgModule} from '@angular/core';

import {BrowserModule} 
            from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LikeComponent } from './components/like/like.component';
             
import {FormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';


 

// Route configuration, map url to component
import {RouterModule, Routes} 
                from '@angular/router';
import { AuthModule } from './auth/auth.module';

//import { ProductModule } from './product/product.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },

    {
        path: 'products',
        loadChildren: 'app/product/product.module#ProductModule'
    },

    {
        path: '**',
        component: NotFoundComponent
    }
];

import { HttpClientModule } from '@angular/common/http';


@NgModule({
    // other modules initialize other modules
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        
        // apply route config
        RouterModule.forRoot(routes),

        SharedModule,
        AuthModule,
        
      //  ProductModule

        // InventoryModule
        // ProductModule
        // AuthModule
    ],

    // component, directive, pipe
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        HeaderComponent,
        FooterComponent,
        LikeComponent,
        NotFoundComponent,

        //HomeComponent
        //FooterComponent
    ],

    bootstrap: [
        AppComponent
    ]

})
export class AppModule {

}
