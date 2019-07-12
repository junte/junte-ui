import { AfterContentInit, Component, ContentChildren, HostBinding, Input, OnInit, QueryList } from '@angular/core';
import { UI } from '../../enum/ui';
import { ChartIndicatorComponent } from './chart-indicator/chart-indicator.component';

@Component({
  selector: 'jnt-chart',
  templateUrl: './chart.encapsulated.html'
})
export class ChartComponent implements OnInit, AfterContentInit {

  @HostBinding('attr.host') readonly host = 'jnt-chart-host';

  ui = UI;

  private _widthMark = 100;

  @HostBinding('attr.heightIndicator')
  @Input() heightIndicator = 55;

  @HostBinding('attr.widthPoligon')
  @Input() widthPoligon = 50;

  @HostBinding('attr.widthMark')
  @Input()
  set widthMark(width: number) {
    this._widthMark = width < 60 ? 60 : width;
  }

  get widthMark() {
    return this._widthMark;
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

}
