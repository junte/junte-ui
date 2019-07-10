import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-chart-indicator',
  templateUrl: './chart-indicator.encapsulated.html',
})
export class ChartIndicatorComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-chart-indicator-host';

  ui = UI;

  @Input() value: number;
  @Input() title: string;
  @Input() color: string;

  constructor() {
  }

  ngOnInit() {
  }

}
