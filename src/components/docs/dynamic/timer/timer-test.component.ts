import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TimerComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-timer-test',
  templateUrl: './timer-test.component.html',
  styleUrls: ['./timer-test.component.scss']
})
export class TimerTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  seconds = 9;
  minutes = 0;
  hours = 0;
  days = 0;
  finished = 0;

  @ViewChild('timer')
  timer: TimerComponent;

  @ViewChild('code')
  code: TabComponent;

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

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}

