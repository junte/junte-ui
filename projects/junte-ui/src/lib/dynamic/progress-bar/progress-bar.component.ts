import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  HostBinding,
  Input,
  QueryList,
  TemplateRef
} from '@angular/core';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { Color } from '../../core/enums/color';
import { UI } from '../../core/enums/ui';
import { ProgressLineComponent } from './line/progress-line.component';

@Component({
  selector: 'jnt-progress-bar',
  templateUrl: './progress-bar.encapsulated.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements AfterViewInit {

  ui = UI;

  private _value = 0;

  @HostBinding('attr.host')
  readonly host = 'jnt-progress-bar-host';

  @ContentApi({
    selector: '#progressBarLegendTemplate',
    description: 'Legend template'
  })
  @ContentChild('progressBarLegendTemplate')
  progressBarLegendTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Completion percentage',
    type: 'number',
    default: '0'
  })
  @Input()
  set value(value: number) {
    this._value = value || 0;
  }

  get value() {
    return this._value;
  }

  @PropertyApi({
    description: 'Default color',
    type: 'number',
    default: '0'
  })
  @Input()
  color: string = Color.purple;

  @ContentChildren(ProgressLineComponent)
  lines: QueryList<ProgressLineComponent>;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.lines.changes.subscribe(() => this.cd.detectChanges());
  }

}
