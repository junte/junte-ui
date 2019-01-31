import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ju-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() align = 'stretch';
  @Input() justify  = 'start';
  @Input() direction  = 'row';
  @Input() wrap  = 'wrap';
  @Input() alignContent  = 'start';

  constructor() {
  }

  ngOnInit() {
  }

}
