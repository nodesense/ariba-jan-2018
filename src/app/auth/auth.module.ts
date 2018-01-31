import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
 

import {FormsModule} from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AuthGuard } from './guards/auth.guard';
 import { AuthService } from './services/auth.service';
 
import {Routes, RouterModule} 
      from '@angular/router';
import { IntercepterService } from './services/interceptor.service';
  
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  } 
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent ],

  providers: [
    AuthGuard,
      
    AuthService,
     
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercepterService,
      multi: true
    }
  ]
})
export class AuthModule { }