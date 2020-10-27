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

  color: string = Color.purple;

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
  @Input() set value(value: number) {
    this._value = value;
    this.colorize();
  }

  get value() {
    return this._value;
  }

  @ContentChildren(ProgressLineComponent)
  lines: QueryList<ProgressLineComponent>;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.colorize();
  }

  private colorize() {
    if (!!this.lines) {
      const lines = this.lines.toArray()
        .map(line => ({from: line.from, color: line.color}))
        .sort((a, b) => a.from < b.from ? 1 : -1);

      this.color = lines.find(line => line.from <= this.value)?.color || Color.purple;
      this.cd.detectChanges();
    }
  }
}
