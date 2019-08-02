import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

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

  @ContentChild('titleTemplate')
  titleTemplate: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
