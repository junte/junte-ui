import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../../core/decorators/api';

@Directive({
  selector: 'jnt-gantt-line-period'
})
export class GanttLinePeriodDirective {

  @PropertyApi({
    description: 'From date',
    type: 'date',
  })
  @Input() from: Date;

  @PropertyApi({
    description: 'To date',
    type: 'date',
  })
  @Input() to: Date;

  @ContentApi({
    selector: '#indicatorMonthTemplate',
    description: 'indicator template'
  })
  @ContentChild('indicatorMonthTemplate')
  indicatorMonthTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#indicatorYearTemplate',
    description: 'indicator year template'
  })
  @ContentChild('indicatorYearTemplate')
  indicatorYearTemplate: TemplateRef<any>;
}
