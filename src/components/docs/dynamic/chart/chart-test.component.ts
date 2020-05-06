import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChartComponent, ChartIndicatorComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { Hero } from '../../../../enums/hero';
import { Language } from '../../shared/code-highlight/enum';

@Component({
  selector: 'app-chart-test',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.scss']
})
export class ChartTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  hero = Hero;

  types = {
    chart: ChartComponent,
    chartIndicator: ChartIndicatorComponent
  };

  @ViewChild('code', {static: false}) code: TabComponent;

  titleChartControl = this.fb.control('Heroes');
  metricChartControl = this.fb.control('Superpower');

  builder = this.fb.group({
    titleChart: this.titleChartControl,
    metricChart: this.metricChartControl
  });

  form = this.fb.group({
    hero: []
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }


}
