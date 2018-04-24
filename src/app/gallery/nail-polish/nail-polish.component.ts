import {Component, OnInit} from '@angular/core';
import {Globals} from './shared/globals';
import {FilterService} from './shared/filter.service';

@Component({
    selector: 'app-nail-polish',
    templateUrl: './nail-polish.component.html',
    styleUrls: ['./nail-polish.component.css']
})
export class NailPolishComponent implements OnInit {

    constructor(private globals: Globals, private filterServ: FilterService) {
    }

    ngOnInit() {
    }

    makeChange() {
        this.filterServ.changeVariable('zmiana');

    }
}
