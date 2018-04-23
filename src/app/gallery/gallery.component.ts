import {Component, OnChanges, OnInit} from '@angular/core';
import {NailPolish} from './nail-polish.model';
import {NailPolishService} from './nail-polish/shared/nail-polish.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

    nailpolishs: NailPolish[];
    visibleImages: any[] = [];
    filterBy = 'all';

    constructor(private nailPolishService: NailPolishService) {
        this.visibleImages = this.nailPolishService.getNailPolishs();
    }

    ngOnChanges() {
        this.visibleImages = this.nailPolishService.getNailPolishs();
    }


    // ngOnInit() {
    //     this.nailpolishs = this.nailPolishService.getNailPolishs();
    //     let tremp = this.nailpolishs;
    //     console.log(tremp);
    // }

}
