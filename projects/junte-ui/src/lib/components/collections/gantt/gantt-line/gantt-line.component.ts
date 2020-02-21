import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'jnt-gantt-line',
  template: ''
})
export class GanttLineComponent {

  @Input() title: string;
  @Input() from: Date;
  @Input() to: Date;
  @Input() period: any;
  @Output() click = new EventEmitter<any>();
  @ContentChild('indicator') indicatorTemplate: TemplateRef<any>;
  @ContentChild('title') titleTemplate: TemplateRef<any>;
}
