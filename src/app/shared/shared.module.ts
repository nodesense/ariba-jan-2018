import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductWidgetComponent } from './components/product-widget/product-widget.component';
import { PowerPipe } from './pipes/power.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductWidgetComponent, 
                  PowerPipe, 
                  HighlightDirective],

  // subset of declaration
  exports: [
    ProductWidgetComponent,
    PowerPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
