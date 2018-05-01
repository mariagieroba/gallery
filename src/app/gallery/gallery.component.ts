import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {NailPolish} from './nail-polish.model';
import {NailPolishService} from './nail-polish/shared/nail-polish.service';


import {Subscription} from 'rxjs/Subscription';
import {FilterService} from './nail-polish/shared/filter.service';
import {Globals} from './nail-polish/shared/globals';
import {Observable} from 'rxjs/Observable';
import {NailPolih} from './nail-polish/shared/nail-polish.service';
import {NailPolishComponent} from './nail-polish/nail-polish.component';
@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges, OnDestroy {

    nailpolishs: NailPolish[] = [];
    visibleImages: any[] = [];
    filterBy = 'all';
    variable: any;


    subscription: Subscription;

    constructor(private nailPolishService: NailPolishService, private filterServ: FilterService, public globals: Globals) {
        this.visibleImages = this.nailPolishService.getNailPolishs();
        this.subscription = this.filterServ.getVariable().subscribe(variable => {
            this.globals.variable = variable;
        });
    }

    ngOnChanges() {
        this.visibleImages = this.nailPolishService.getNailPolishs();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }



    //     this.nailpolishs = this.nailPolishService.getNailPolishs();
    //     let tremp = this.nailpolishs;
    //     console.log(tremp);
    // }

}
