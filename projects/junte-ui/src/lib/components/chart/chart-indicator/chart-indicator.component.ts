import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jnt-chart-indicator',
  template: ``,
})
export class ChartIndicatorComponent implements OnInit {

  @Input() label: string;
  @Input() value: number;
  @Input() title: string;
  @Input() color: string;
  @Input() data: any;

  constructor() {
  }

  ngOnInit() {
  }

}
