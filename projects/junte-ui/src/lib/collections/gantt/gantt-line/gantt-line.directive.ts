import { ContentChild, ContentChildren, Directive, Input, QueryList, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../../core/decorators/api';
import { GanttLinePeriodDirective } from '../gantt-line-period/gantt-line-period.directive';

@Directive({
  selector: 'jnt-gantt-line'
})
export class GanttLineDirective {

  @PropertyApi({
    description: 'Title',
    type: 'string',
    default: 'Test title',
  })
  @Input() title: string;

  @ContentApi({
    selector: '#ganttLineTitleTemplate',
    description: 'title template'
  })
  @ContentChild('ganttLineTitleTemplate')
  titleTemplate: TemplateRef<any>;

  @ContentChildren(GanttLinePeriodDirective, {descendants: true})
  periods: QueryList<GanttLinePeriodDirective>;
}
