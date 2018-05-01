import {Injectable} from '@angular/core';
import {NailPolish} from '../../nail-polish.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export interface NailPolih {
    id: number;
    name: string;
    brand: string;
    serie: string;
    path: string;
}


@Injectable()
export class NailPolishService {
    visibleImages = [];


    private nailPolishs: NailPolish[] = [

        new NailPolish(
            1,
            '86',
            'Kabos',
            'infini',
            'http://npac.pl/img/infini_86.jpg'
        ),
        new NailPolish(
            2,
            '20',
            'Kabos',
            'infini',
            'http://npac.pl/img/infini_20_1.jpg'
        ),
        new NailPolish(
            3,
            '20',
            'Kabos',
            'infini',
            'http://npac.pl/img/infini_20_2.jpg'
        ),
        new NailPolish(
            4,
            '20',
            'Kabos',
            'infini',
            'http://npac.pl/img/infini_20_3.jpg'
        ),
        new NailPolish(
            5,
            '29',
            'Kabos',
            'infini',
            'http://npac.pl/img/infini_29.jpg'
        ),
        new NailPolish(
            6,
            'Marina',
            'Kabos',
            'gelike',
            'http://npac.pl/img/gelike_marina_1.jpg'
        ),
        new NailPolish(
            7,
            'Candy Girl',
            'Kabos',
            'gelike',
            'http://npac.pl/img/gelike_candygirl.jpg'
        ),
    ];

    constructor() {
    }

    getNailPolishs() {
        return this.visibleImages = this.nailPolishs.slice();
    }

    // getNailPolish(index: number) {
    //     return this.nailPolishs[index];
    // }

    getNailPolish(id: number) {
        return this.nailPolishs.slice(0).find(image => image.id === id);
    }

    getNailPolishs2(term: string = null): Observable<NailPolih[]> {
        let items = getMockNailPolish();
        if (term) {
            items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
        }
        return Observable.of(items).delay(500);
    }
}

function getMockNailPolish() {
    return [
        {
            'id': 1,
            'name': '86',
            'brand': 'Kabos',
            'serie': 'infini',
            'path': 'http://npac.pl/img/infini_86.jpg'
        },
        {
            'id': 2,
            'name': '20',
            'brand': 'Kabos',
            'serie': 'infini',
            'path': 'http://npac.pl/img/infini_20_1.jpg'
        },
        {
            'id': 3,
            'name': '20',
            'brand': 'Kabos',
            'serie': 'infini',
            'path': 'http://npac.pl/img/infini_20_2.jpg'
        },
        {
            'id': 4,
            'name': '20',
            'brand': 'Kabos',
            'serie': 'infini',
            'path': 'http://npac.pl/img/infini_20_3.jpg'
        },
        {
            'id': 5,
            'name': '29',
            'brand': 'Kabos',
            'serie': 'infini',
            'path': 'http://npac.pl/img/infini_29.jpg'
        },
        {
            'id': 6,
            'name': 'Marina',
            'brand': 'Kabos',
            'serie': 'gelike',
            'path': 'http://npac.pl/img/gelike_marina_1.jpg'
        },
        {
            'id': 7,
            'name': 'Candy Girl',
            'brand': 'Kabos',
            'serie': 'gelike',
            'path': 'http://npac.pl/img/gelike_candygirl.jpg'
        }
    ];
}