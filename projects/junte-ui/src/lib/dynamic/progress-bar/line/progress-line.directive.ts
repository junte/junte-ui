import { Directive, Input } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
import { Color } from '../../../core/enums/color';
import { UI } from '../../../core/enums/ui';

@Directive({
  selector: 'jnt-progress-line'
})
export class ProgressLineDirective {

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
