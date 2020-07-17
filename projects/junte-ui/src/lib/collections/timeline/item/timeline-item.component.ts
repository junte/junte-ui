import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { Color } from '../../../core/enums/color';
import { PropertyApi } from '../../../core/decorators/api';
import { UI } from '../../../core/enums/ui';

@Component({
  selector: 'jnt-timeline-item',
  template: ''
})
export class TimelineItemComponent {

  ui = UI;

  @PropertyApi({
    description: 'Timeline item title',
    type: 'string'
  })
  @Input()
  title: string;

  @PropertyApi({
    description: 'Set the color to \'red\' | \'green\' | \'blue\' or other custom colors (css color) for timeline item',
    type: 'string | Color',
  })
  @Input()
  color: string = Color.purpleLight;

  @PropertyApi({
    description: 'Icon',
    type: 'string'
  })
  @Input()
  icon: string;

  @ContentChild('timelineItemContentTemplate')
  contentTemplate: TemplateRef<any>;

}
