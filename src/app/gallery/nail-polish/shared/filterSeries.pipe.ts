import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'filterSeries'
})
export class FilterSeriesPipe implements PipeTransform {

    transform(items: any, criteria: string): any {
        if (criteria === 'all') {
            return items;
        } else {
            return items.filter(item => {
                return item.series === criteria;
            });
        }
    }


}
