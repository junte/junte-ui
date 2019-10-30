import { Component } from '@angular/core';
import { UI } from '../../../../projects/junte-ui/src/lib/enum/ui';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-period-test',
  templateUrl: './date-period-test.component.html',
  styleUrls: ['./date-period-test.component.scss']
})
export class DatePeriodTestComponent {

  ui = UI;

  demo = [
    {start: new Date(2019, 9, 10), end: new Date(2019, 9, 30), current: new Date(2019, 9, 15)},
    {start: new Date(2019, 9, 30), end: new Date(2019, 9, 9)},
    {end: new Date(2019, 9, 9)},
    {end: new Date(2019, 9, 31)},
    {start: new Date(2019, 9, 9), current: new Date(2019, 9, 15)},
    {start: new Date(2019, 9, 9), current: new Date(2019, 9, 8)},
    {},
  ];

  startControl = new FormControl(this.demo[0]['start']);
  endControl = new FormControl(this.demo[0]['end']);
  currentControl = new FormControl(this.demo[0]['current']);

  current = new Date();


  form = this.fb.group({
    start: this.startControl,
    end: this.endControl,
    current: this.currentControl
  });


  constructor(private fb: FormBuilder) {
  }

}
