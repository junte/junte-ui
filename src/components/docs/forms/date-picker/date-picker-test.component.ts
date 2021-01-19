import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatePickerComponent, TabComponent, UI } from 'junte-ui';
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

  @ViewChild('code') code: TabComponent;

  typeControl = this.fb.control(false);
  disableControl = this.fb.control(false);
  clearControl = this.fb.control(false);

  builder = this.fb.group({
    type: this.typeControl,
    disable: this.disableControl,
    clear: this.clearControl
  });

  flightDateControl = this.fb.control(null);
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
      .subscribe(() => this.code.flash());
  }

}
