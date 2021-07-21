import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePickerComponent, TabsComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-date-picker-test',
  templateUrl: './date-picker-test.component.html',
  styleUrls: ['./date-picker-test.component.scss']
})
export class DatePickerTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {flightDate: DatePickerComponent};
  handbook = HANDBOOK;
  today = new Date();

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/forms/date-picker';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=7455%3A19';

  @ViewChild('tabs') tabs: TabsComponent;

  typeControl = this.fb.control(false);
  disableControl = this.fb.control(false);
  clearControl = this.fb.control(false);

  builder = this.fb.group({
    type: this.typeControl,
    disable: this.disableControl,
    clear: this.clearControl
  });

  flightDateControl = this.fb.control(null, Validators.required);
  form = this.fb.group({
    flightDate: this.flightDateControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(data => console.log('form was changed', data));

    this.disableControl.valueChanges.subscribe(disabled =>
      disabled ? this.flightDateControl.disable({emitEvent: false})
        : this.flightDateControl.enable({emitEvent: false}));

    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }

}
