import { Pipe, PipeTransform } from '@angular/core';
import * as lodash from 'lodash';

@Pipe({
  name: 'filterBy'
})
export class FilterObjectArrayByKeysPipe implements PipeTransform {

  transform(keys: string[], excludingValues: string[]): string[] {
    let finalArray = lodash.filter(keys, (key: string) => {
      return !excludingValues.includes(key)
    });
    return finalArray
  }

}
