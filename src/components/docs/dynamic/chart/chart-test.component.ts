import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartComponent, ChartIndicatorComponent, UI, TabComponent} from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
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

  @ViewChild('code', {static: false}) code: TabComponent;

  form: FormGroup;
  charts: any[] = [];
  selected = null;

  titleChartControl = this.fb.control('Heroes');
  metricChartControl = this.fb.control('Superpower');

  types = {
    chart: ChartComponent,
    chartIndicator: ChartIndicatorComponent
  };

  demo = [
    {title: 'Hulk', value: 10, label: 'Rage', color: UI.color.orange},
    {title: 'Groot', value: 15, label: 'Can Control Plant Life', color: UI.color.red},
    {title: 'Gamora', value: 20, label: 'Acrobatic Skills', color: UI.color.blue},
    {title: 'Scarlet Witch', value: 5, label: 'Hyper Telekinesis', color: UI.color.purpleDark},
    {title: 'Doctor Strange', value: 5, label: 'The Mirror Dimension', color: UI.color.gray}
  ];

  builder = this.fb.group({
    titleChart: this.titleChartControl,
    metricChart: this.metricChartControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      selected: this.fb.control(null)
    });
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

  addChart() {
    this.charts.push(this.demo[Math.floor(Math.random() * this.demo.length)]);
  }

  removeChart() {
    this.charts.splice(Math.floor(Math.random() * this.charts.length), 1);
  }

}
