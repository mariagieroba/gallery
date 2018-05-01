import {Component, Input, OnInit} from '@angular/core';
import {Globals} from '../gallery/nail-polish/shared/globals';
import {FilterService} from '../gallery/nail-polish/shared/filter.service';
import {Pipe} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NailPolishComponent} from '../gallery/nail-polish/nail-polish.component';
import {NailPolih} from '../gallery/nail-polish/shared/nail-polish.service';
import {NailPolishService} from '../gallery/nail-polish/shared/nail-polish.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    constructor(public globals: Globals, private filterServ: FilterService, private nailPolishService: NailPolishService) {
    }


    nailpolish$1: Observable<any[]>;
    selectedNailPolih1 = [];

    infiniNR = this.globals.infiniNP;
    gelikeNM = this.globals.gelikeNP;

    ngOnInit() {
        console.log(this.gelikeNM);
        this.nailpolish$1 = this.nailPolishService.getNailPolishs2();
    }

}
