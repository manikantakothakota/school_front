import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let updatedValue = value.split('').join(',')
    return updatedValue;
  }
}
