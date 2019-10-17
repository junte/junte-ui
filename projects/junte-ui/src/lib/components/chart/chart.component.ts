import { AfterContentInit, Component, ContentChildren, forwardRef, HostBinding, Input, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEqual } from '../../utils/equal';
import { UI } from '../../enum/ui';
import { getTextBrightness } from '../../utils/brightness';
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
export class ChartComponent implements ControlValueAccessor, AfterContentInit {

  private _selected: number;
  private _widthMark = 100;
  ui = UI;
  getTextBrightness = getTextBrightness;
  progress = {loading: false};
  indicators: ChartIndicatorComponent[] = [];

  @HostBinding('attr.host') readonly host = 'jnt-chart-host';

  @Input() keyField: string;
  @Input() title: string;
  @Input() metric: string;

  @ContentChildren(ChartIndicatorComponent)
  indicatorsComponents: QueryList<ChartIndicatorComponent>;

  @HostBinding('attr.heightIndicator')
  @Input() heightIndicator = 55;

  @HostBinding('attr.widthPoligon')
  @Input() widthPoligon = 50;

  @HostBinding('attr.widthMark')
  @Input()
  set widthMark(width: number) {
    this._widthMark = Math.min(width, 60);
  }

  get widthMark() {
    return this._widthMark;
  }

  set selected(value: any) {
    let isSame = false;
    if (!!this.keyField && !!this._selected && !!value) {
      isSame = this._selected[this.keyField] === value[this.keyField];
    } else {
      isSame = isEqual(this._selected, value);
    }

    this._selected = !isSame ? value : null;
    this.onChange(this._selected);
  }

  get selected() {
    return this._selected;
  }

  get heightSvg() {
    return this.heightIndicator + (this.heightIndicator * this.indicators.length);
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
    return index;
  }

}
