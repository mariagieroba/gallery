import {Injectable} from '@angular/core';
import {NailPolish} from '../../nail-polish.model';


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
    ]

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
}
