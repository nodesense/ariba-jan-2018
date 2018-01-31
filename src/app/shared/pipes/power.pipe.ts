import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
 // {{ 2 | power  }} => value is 2, exponent = 1
 // {{2 | power:3 } => value is 2, expo=3
  transform(value: number, exponent: number = 1): any {
    return Math.pow(value, exponent);
  }

}
