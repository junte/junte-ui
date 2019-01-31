import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ju-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss']
})
export class ColComponent implements OnInit {

  @Input() span = 1;
  @Input() alignSelf = 'auto';
  @Input() order = 0;

  constructor() {
  }

  ngOnInit() {
  }

}
