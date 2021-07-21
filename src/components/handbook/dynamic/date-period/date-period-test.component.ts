import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatePeriodComponent, TabsComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-date-period-test',
  templateUrl: './date-period-test.component.html',
  styleUrls: ['./date-period-test.component.scss']
})
export class DatePeriodTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  format = 'yyyy-MM-dd';
  types = {period: DatePeriodComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/dynamic/date-period';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=5857%3A2331';

  startControl = this.fb.control(new Date);
  endControl = this.fb.control(new Date);
  currentControl = this.fb.control(null);

  @ViewChild('tabs') tabs: TabsComponent;

  builder = this.fb.group({
    start: this.startControl,
    end: this.endControl,
    current: this.currentControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }

}
