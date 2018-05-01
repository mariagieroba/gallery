import {Component, OnInit} from '@angular/core';
import {NailPolishService} from '../shared/nail-polish.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-nail-polish-detail',
    templateUrl: './nail-polish-detail.component.html',
    styleUrls: ['./nail-polish-detail.component.css']
})
export class NailPolishDetailComponent implements OnInit {
    nailPolish: any;

    constructor(private nailPolishServ: NailPolishService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.nailPolish = this.nailPolishServ.getNailPolish(
            +this.route.snapshot.params['id']
        );
    }

}
