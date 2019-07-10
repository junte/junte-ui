import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { UI } from '../../enum/ui';

@Component({
  selector: 'jnt-chart',
  templateUrl: './chart.encapsulated.html'
})
export class ChartComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-chart-host';

  ui = UI;

  value1 = 50;
  heightIndicator = 55;
  widthPoligon = 50;
  widthMark = 100;

  value2 = 115;

  constructor() {
  }

  ngOnInit() {
  }

}
