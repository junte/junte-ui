import { Component, Input } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
import { Color } from '../../../core/enums/color';
import { UI } from '../../../core/enums/ui';

@Component({
  selector: 'jnt-progress-line',
  template: ''
})
export class ProgressLineComponent {

  ui = UI;

  @PropertyApi({
    description: 'Set the color to \'red\' | \'green\' | \'blue\' or other custom colors (css color) for timeline item',
    type: 'string | Color',
  })
  @Input()
  color: string = Color.purpleLight;

  @PropertyApi({
    description: '% for color',
    type: 'number'
  })
  @Input()
  from: number;


}
