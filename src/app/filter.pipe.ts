import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(items: any[], findName: string): any[] {
        if (!items) {
            return [];
        }

        if (!name) {
            return items;
        }

        findName = findName.toLowerCase();

        return items.filter(it => {
            return it.toLowerCase.includes(findName);
        });
    }

}
