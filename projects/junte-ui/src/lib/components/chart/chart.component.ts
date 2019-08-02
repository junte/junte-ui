import {
  AfterContentInit,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  Input,
  OnInit,
  QueryList
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UI } from '../../enum/ui';
import { ChartIndicatorComponent } from './chart-indicator/chart-indicator.component';

@Component({
  selector: 'jnt-chart',
  templateUrl: './chart.encapsulated.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChartComponent),
      multi: true
    }
  ]
})
export class ChartComponent implements ControlValueAccessor, OnInit, AfterContentInit {

  @HostBinding('attr.host') readonly host = 'jnt-chart-host';

  ui = UI;

  private _selected: number;
  private _widthMark = 100;

  progress = {loading: false};

  @HostBinding('attr.heightIndicator')
  @Input() heightIndicator = 55;

  @HostBinding('attr.widthPoligon')
  @Input() widthPoligon = 50;

  @HostBinding('attr.widthMark')
  @Input()
  set widthMark(width: number) {
    this._widthMark = width < 60 ? 60 : width;
  }

  @Input() title: string;
  @Input() metric: string;

  get widthMark() {
    return this._widthMark;
  }

  set selected(value: any) {
    this._selected = this._selected !== value ? value : null;
    this.onChange(this._selected);
  }

  get selected() {
    return this._selected;
  }

  get heightSvg() {
    return this.heightIndicator + (this.heightIndicator * this.indicators.length);
  }

  @ContentChildren(ChartIndicatorComponent)
  indicatorsComponents: QueryList<ChartIndicatorComponent>;


  indicators: ChartIndicatorComponent[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.indicators = this.indicatorsComponents.toArray();
    this.indicatorsComponents.changes
      .subscribe((indicators: QueryList<ChartIndicatorComponent>) => this.indicators = indicators.toArray());
  }

  onChange(value: any): void {
  }

  onTouched(): void {
  }

  writeValue(value: any): void {
    this._selected = value;
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn): void {
    this.onTouched = fn;
  }

  trackByFn(index, indicator) {
    return indicator.id;
  }

}
