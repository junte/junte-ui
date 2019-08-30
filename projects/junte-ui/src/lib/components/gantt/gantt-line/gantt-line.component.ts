import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'jnt-gantt-line',
  template: ''
})
export class GanttLineComponent {

  @Input() title: string;
  @Input() from: Date;
  @Input() to: Date;
  @Input() period: any;
  @ContentChild('indicator') indicatorTemplate: TemplateRef<any>;
}
