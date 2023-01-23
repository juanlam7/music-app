import { Pipe, PipeTransform } from '@angular/core';
import { IPodcast } from './types';

@Pipe({ name: 'podcastsFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: IPodcast[], value: string): IPodcast[] {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    value = value.toLocaleLowerCase();

    return items.filter(element => {
      return element['title'].label.toLocaleLowerCase().includes(value);
    });
  }
}
