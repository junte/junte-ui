import { Component, Input, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';

@Component({
  selector: 'jnt-chart-indicator',
  template: ``,
})
export class ChartIndicatorComponent {

  @PropertyApi({
    description: 'Label name of chart item indicator',
    type: 'string'
  })
  @Input()
  label: string;

  @PropertyApi({
    description: 'Value of chart item indicator',
    type: 'number'
  })
  @Input()
  value: number;

  @PropertyApi({
    description: 'Title name of chart item indicator',
    type: 'string'
  })
  @Input()
  title: string;

  @PropertyApi({
    description: 'Set the color to \'red\' | \'green\' | \'blue\' or other custom colors (css color) for chart item',
    type: 'string | Color'
  })
  @Input()
  color: string;

  @PropertyApi({
    description: 'Data of chart item indicator',
    type: 'any'
  })
  @Input()
  data: any;

  @PropertyApi({
    description: 'Template for title',
    type: 'TemplateRef<any>'
  })
  @Input()
  titleTemplate: TemplateRef<any>;
}
