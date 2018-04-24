import {Injectable} from '@angular/core';

@Injectable()
export class Globals {
    variable = 'test';


    infiniNP = Array.from({length: 102}, (x, i) => i + 1);


    gelikeNP = [
        'Calypso', 'Royal', 'Blue Lagoon', 'Marina', 'Moijto', 'Eden', 'Suculent',
        'Mafioso', 'Stone', 'Retro', 'Fluffy', 'Cashmere', 'Why Not?', 'Texas',
        'Tarot', 'Romeo', 'Luna', 'Calm', 'Mild', 'Shy', 'Optimistic', 'Elegant',
        'Fantastic', 'Vienna', 'Pretty Women', 'Cinnamon', 'Boa Boa', 'Teddy Bear',
        'Nougat', 'Golden eye', 'Caffe Latte', 'Biscuit', 'Milkshake', 'Snowing Rose',
        'Sugar Babe', 'Prelude', 'Impulse', 'Siesta', 'Nectar', 'Ice Cream', 'Madame Chic',
        'Banana Song', 'Sunflower', 'Lime Green', 'Spring', 'Young Trees'
    ];

}
