import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByLocationPipe',
  standalone: true
})
export class SearchByLocationPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
