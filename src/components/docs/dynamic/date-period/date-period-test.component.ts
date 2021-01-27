import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatePeriodComponent, UI } from 'junte-ui';
import { CATEGORIES } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-date-period-test',
  templateUrl: './date-period-test.component.html',
  styleUrls: ['./date-period-test.component.scss']
})
export class DatePeriodTestComponent {

  ui = UI;
  localUi = LocalUI;
  format = 'yyyy-MM-dd';
  types = {period: DatePeriodComponent};
  categories = CATEGORIES;

  startControl = this.fb.control(new Date);
  endControl = this.fb.control(new Date);
  currentControl = this.fb.control(null);

  builder = this.fb.group({
    start: this.startControl,
    end: this.endControl,
    current: this.currentControl
  });

  constructor(private fb: FormBuilder) {
  }

}
