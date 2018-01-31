import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { FilterPipe } from './pipes/filter.pipe';

// Route config
import {RouterModule, Routes} 
        from '@angular/router';
import { ProductService, ProductRestfulService } from './services/product.service';


import {HttpClientModule} from '@angular/common/http';

import {FormsModule, 
        ReactiveFormsModule} from '@angular/forms';
import { CanEditGuard } from './guards/can-edit.guard';



const routes: Routes = [
  {
    //path: 'products',
    path: '', // for lazy load
    component: ProductHomeComponent,
    children: [
      {
        path: 'list', // url => products/list
        component: ProductListComponent
      },

      {
        path: 'create',
        component: ProductEditComponent
      },

      {
        path: 'edit/:id', // products/edit/12345
        component: ProductEditComponent,
        canActivate: [CanEditGuard]
      },

      {
        path: 'search',
        component: ProductSearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    //HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    // FIXME: investigate
    RouterModule.forChild(routes)
  ],
  declarations: [ProductHomeComponent, 
                 ProductListComponent, 
                 ProductEditComponent, 
                 ProductSearchComponent, 
                 FilterPipe],


  providers: [
    {
      // injection purpose
      provide: ProductService,
      
      // Angular create object for class
      useClass: ProductRestfulService
    },

    CanEditGuard
  ]
})
export class ProductModule { }
