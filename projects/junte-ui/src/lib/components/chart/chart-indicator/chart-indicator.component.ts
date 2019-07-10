import { Component, HostBinding, OnInit } from '@angular/core';
import { UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-chart-indicator',
  templateUrl: './chart-indicator.encapsulated.html',
})
export class ChartIndicatorComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-chart-indicator-host';

  ui = UI;

  constructor() { }

  ngOnInit() {
  }

}
