import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value as number < 50) {
      return 'acá';
    } else
      if (value as number < 1000) {
        return `${value}m`;
      } else
        if (value as number > 1000) {
          return `${value / 1000}km`;
        }
    return null;
  }

}
