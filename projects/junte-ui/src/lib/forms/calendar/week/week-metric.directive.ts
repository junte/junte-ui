import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'jnt-week-metric'
})
export class WeekMetricDirective {

  @Input()
  title: string;

}
