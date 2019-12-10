import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-date-picker-test',
  templateUrl: './date-picker-test.component.html',
  styleUrls: ['./date-picker-test.component.scss']
})
export class DatePickerTestComponent implements OnInit {

  ui = UI;
  date: Date = new Date;
  date1: Date = new Date;
  datePicker = new FormControl(new Date);
  datePicker1 = new FormControl(new Date);
  form = this.fb.group({
    datePicker: this.datePicker,
    datePicker1: this.datePicker1
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.datePicker.valueChanges.subscribe(date => this.date = date);
    this.datePicker1.valueChanges.subscribe(date => this.date1 = date);
  }

}
