import { Component, OnInit, Input } from '@angular/core';
import {NailPolish} from '../nail-polish.model';
import {NailPolishService} from '../nail-polish.service';

@Component({
  selector: 'app-nail-polish-item',
  templateUrl: './nail-polish-item.component.html',
  styleUrls: ['./nail-polish-item.component.css']
})
export class NailPolishItemComponent implements OnInit {
  @Input() nailPolish: NailPolish;
  @Input() index: number;


  ngOnInit() {
  }

}
