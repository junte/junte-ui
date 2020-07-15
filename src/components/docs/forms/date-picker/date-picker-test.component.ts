import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabComponent, UI } from 'junte-ui';
import { DatePickerComponent } from 'junte-ui';
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

  clockControl = this.fb.control(false);
  disableControl = this.fb.control(false);

  builder = this.fb.group({
    clock: this.clockControl,
    disable: this.disableControl
  });

  flightDateControl = this.fb.control(null);
  form = this.fb.group({
    flightDate: this.flightDateControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.disableControl.valueChanges.subscribe(disabled =>
      disabled ? this.flightDateControl.disable() : this.flightDateControl.enable());

    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
