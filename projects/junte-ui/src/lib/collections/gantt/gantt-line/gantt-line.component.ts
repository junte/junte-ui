import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../../core/decorators/api';

class Period {
  from: Date;
  to: Date;
}

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

  @PropertyApi({
    description: 'Period',
    type: 'string',
  })
  @Input() period: any;

  @PropertyApi({
    description: 'Period',
    type: 'string',
  })
  @Input() periods: Period[];

  @PropertyApi({
    description: 'Output event of click'
  })
  @Output() click = new EventEmitter<any>();

  @ContentApi({
    selector: '#indicatorTemplate',
    description: 'indicator template'
  })
  @ContentChild('indicator')
  indicatorTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#indicatorYearTemplate',
    description: 'indicator year template'
  })
  @ContentChild('indicatorYear')
  indicatorYearTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#titleTemplate',
    description: 'title template'
  })
  @ContentChild('title')
  titleTemplate: TemplateRef<any>;
}
