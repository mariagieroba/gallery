import {Component, Input, OnInit} from '@angular/core';
import {Globals} from '../gallery/nail-polish/shared/globals';
import {FilterService} from '../gallery/nail-polish/shared/filter.service';
import {Pipe} from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    constructor(public globals: Globals, private filterServ: FilterService) {
    }

    infiniNR = this.globals.infiniNP;
    gelikeNM = this.globals.gelikeNP;

    ngOnInit() {
        console.log(this.gelikeNM);
    }

}
