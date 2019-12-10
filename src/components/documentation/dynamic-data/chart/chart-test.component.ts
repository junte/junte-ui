import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-chart-test',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.scss']
})
export class ChartTestComponent implements OnInit {

  ui = UI;

  form: FormGroup;
  charts: any[] = [];
  selected = 28;

  demo = [
    {title: 'Title 1', value: 10, label: 'Label 1', color: UI.colors.orange},
    {title: 'Title 2', value: 15, label: 'Label 2', color: UI.colors.red},
    {title: 'Title 3', value: 20, label: 'Label 3', color: UI.colors.blue},
    {title: 'Title 4', value: 5, label: 'Label 4', color: UI.colors.purpleDark},
    {title: 'Title 5', value: 5, label: 'Label 5', color: UI.colors.gray}
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      selected: this.fb.control(null)
    });
  }

  addChart() {
    this.charts.push(this.demo[Math.floor(Math.random() * this.demo.length)]);
  }

  removeChart() {
    this.charts.splice(Math.floor(Math.random() * this.charts.length), 1);
  }

}
