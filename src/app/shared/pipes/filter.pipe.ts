import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\s/g, '').toLowerCase();
  }
}
