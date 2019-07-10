import { AfterContentInit, Component, ContentChildren, HostBinding, OnInit, QueryList } from '@angular/core';
import { UI } from '../../enum/ui';
import { ChartIndicatorComponent } from './chart-indicator/chart-indicator.component';

@Component({
  selector: 'jnt-chart',
  templateUrl: './chart.encapsulated.html'
})
export class ChartComponent implements OnInit, AfterContentInit {

  @HostBinding('attr.host') readonly host = 'jnt-chart-host';

  ui = UI;

  value1 = 50;
  heightIndicator = 55;
  widthPoligon = 50;
  widthMark = 100;

  value2 = 115;


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
