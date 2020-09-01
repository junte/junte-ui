import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../../core/decorators/api';
import { GanttLinePeriodComponent } from '../gantt-line-period/gantt-line-period.component';

@Component({
  selector: 'jnt-gantt-line',
  template: ''
})
export class GanttLineComponent {

  @PropertyApi({
    description: 'Title',
    type: 'string',
    default: 'Test title',
  })
  @Input() title: string;

  @ContentApi({
    selector: '#titleTemplate',
    description: 'title template'
  })
  @ContentChild('title')
  titleTemplate: TemplateRef<any>;

  @ContentChildren(GanttLinePeriodComponent, {descendants: true})
  periods: QueryList<GanttLinePeriodComponent>;
}
