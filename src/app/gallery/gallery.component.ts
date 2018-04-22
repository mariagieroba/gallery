import { Component, OnInit } from '@angular/core';
import {NailPolish} from './nail-polish.model';
import {NailPolishService} from './nail-polish.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  nailpolishs: NailPolish[];

  constructor(private nailPolishService: NailPolishService) { }

  ngOnInit() {
    this.nailpolishs = this.nailPolishService.getNailPolishs();
  }

}
