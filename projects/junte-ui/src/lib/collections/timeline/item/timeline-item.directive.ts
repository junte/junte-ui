import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../../core/decorators/api';
import { Color } from '../../../core/enums/color';
import { UI } from '../../../core/enums/ui';

@Directive({
  selector: 'jnt-timeline-item'
})
export class TimelineItemDirective {

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
  color: string = Color.primary;

  @PropertyApi({
    description: 'Icon',
    type: 'string'
  })
  @Input()
  icon: string;

  @ContentApi({
    selector: '#timelineItemContentTemplate',
    description: 'timeline item template'
  })
  @ContentChild('timelineItemContentTemplate')
  contentTemplate: TemplateRef<any>;

}
