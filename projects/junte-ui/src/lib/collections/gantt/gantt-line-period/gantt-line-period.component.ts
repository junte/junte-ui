import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../../core/decorators/api';

@Component({
  selector: 'jnt-gantt-line-period',
  template: ''
})
export class GanttLinePeriodComponent {

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
